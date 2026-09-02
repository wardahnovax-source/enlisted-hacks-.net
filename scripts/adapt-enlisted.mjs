#!/usr/bin/env node
/**
 * One-time migration: Tarkov Cheats → Enlisted Hacks.
 * Domain: enlistedhacks.net
 * Run from project root: node scripts/adapt-enlisted.mjs
 */
import { readFile, writeFile, readdir, rename } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const RENAME_PAGE_DIRS = [
	['tarkov-aimbot', 'enlisted-aimbot'],
	['tarkov-esp', 'enlisted-esp'],
	['tarkov-wallhack', 'enlisted-wallhack'],
	['tarkov-radar-hack', 'enlisted-vehicles'],
	['undetected-tarkov-cheats', 'undetected-enlisted-hacks'],
	['tarkov-cheats-2026', 'enlisted-hacks-2026'],
	['battleye-bypass', 'eac-bypass'],
	['tarkov-cheats', 'enlisted-hacks'],
	['tarkov-cheat-download', 'enlisted-cheat-download'],
	['tarkov-mod-menu', 'enlisted-mod-menu'],
	['tarkov-soft-aim', 'enlisted-soft-aim'],
	['best-tarkov-cheats', 'best-enlisted-hacks'],
	['tarkov-aimbot-hack', 'enlisted-aimbot-hack'],
	['tarkov-esp-hack', 'enlisted-esp-hack'],
	['tarkov-unlock-all', 'enlisted-unlock-all'],
];

/** Ordered replacements — specific patterns first. */
const REPLACEMENTS = [
	['https://tarkovcheats.org', 'https://enlistedhacks.net'],
	['https://www.tarkovcheats.org', 'https://www.enlistedhacks.net'],
	['www.tarkovcheats.org', 'www.enlistedhacks.net'],
	['tarkovcheats.org', 'enlistedhacks.net'],
	['support@tarkovcheats.org', 'support@enlistedhacks.net'],
	['https://zadeyo.com/go/QRH?to=%2Fproducts%2Fescape-from-tarkov', 'https://zadeyo.com/go/WARDAH?to=%2Fproducts%2Fenlisted'],
	['/products/escape-from-tarkov', '/products/enlisted'],
	['project-name=tarkovcheats', 'project-name=enlistedhacks'],
	['project-name=besttarkovcheats', 'project-name=enlistedhacks'],
	['name = "tarkovcheats"', 'name = "enlistedhacks"'],
	['name = "besttarkovcheats"', 'name = "enlistedhacks"'],
	['"name": "tarkov-cheats"', '"name": "enlisted-hacks"'],
	['tarkov-esp-player-tags', 'enlisted-esp-player-tags'],
	['tarkov-wallhack-skeleton', 'enlisted-wallhack-skeleton'],
	['tarkov-aimbot-sniper', 'enlisted-aimbot-sniper'],
	['tarkov-aimbot-skeleton', 'enlisted-aimbot-skeleton'],
	['tarkov-esp-radar', 'enlisted-esp-radar'],
	['tarkov-cheats-combat', 'enlisted-hacks-combat'],
	['tarkov-cheats-logo', 'enlisted-hacks-logo'],
	['tarkov-hero-banner', 'enlisted-hero-banner'],
	['tarkov-hero-ghost', 'enlisted-hero-ghost'],
	['tarkov-hero-source', 'enlisted-hero-source'],
	['undetected-tarkov-cheats', 'undetected-enlisted-hacks'],
	['best-tarkov-cheats', 'best-enlisted-hacks'],
	['tarkov-cheat-download', 'enlisted-cheat-download'],
	['tarkov-cheats-2026', 'enlisted-hacks-2026'],
	['tarkov-radar-hack', 'enlisted-vehicles'],
	['tarkov-aimbot-hack', 'enlisted-aimbot-hack'],
	['tarkov-esp-hack', 'enlisted-esp-hack'],
	['tarkov-unlock-all', 'enlisted-unlock-all'],
	['tarkov-soft-aim', 'enlisted-soft-aim'],
	['tarkov-mod-menu', 'enlisted-mod-menu'],
	['tarkov-wallhack', 'enlisted-wallhack'],
	['tarkov-cheats', 'enlisted-hacks'],
	['tarkov-aimbot', 'enlisted-aimbot'],
	['tarkov-esp', 'enlisted-esp'],
	['battleye-bypass', 'eac-bypass'],
	["'battleye'", "'eac'"],
	['| battleye', '| eac'],
	['pageId="battleye"', 'pageId="eac"'],
	['pageId: \'battleye\'', "pageId: 'eac'"],
	['"battleye"', '"eac"'],
	['escape-from-tarkov-cheats', 'enlisted-hacks'],
	['Escape from Tarkov', 'Enlisted'],
	['Tarkov Cheats', 'Enlisted Hacks'],
	['Tarkov cheats', 'Enlisted hacks'],
	['Tarkov cheat', 'Enlisted hack'],
	['Tarkov hacks', 'Enlisted hacks'],
	['Tarkov hack', 'Enlisted hack'],
	['TarkovCheatsSite', 'EnlistedHacksSite'],
	['Tarkov Intel', 'Enlisted Intel'],
	['BattlEye anti-cheat', 'Easy Anti-Cheat'],
	['BattlEye maintenance', 'Easy Anti-Cheat maintenance'],
	['BattlEye bypass', 'Easy Anti-Cheat bypass'],
	['BattlEye Bypass', 'Easy Anti-Cheat Bypass'],
	['BattlEye patches', 'Easy Anti-Cheat patches'],
	['BattlEye patch', 'Easy Anti-Cheat patch'],
	['BattlEye updates', 'Easy Anti-Cheat updates'],
	['BattlEye update', 'Easy Anti-Cheat update'],
	['after BattlEye', 'after Easy Anti-Cheat'],
	['BattlEye', 'Easy Anti-Cheat'],
	['battleye', 'eac'],
	['tarkov cheats', 'enlisted hacks'],
	['tarkov cheat', 'enlisted hack'],
	['Customs, Woods, and Streets of Tarkov', 'Normandy, Berlin, and Stalingrad battlefields'],
	['Customs, Woods and Streets of Tarkov', 'Normandy, Berlin and Stalingrad battlefields'],
	['extract fights', 'objective fights'],
	['extract fight', 'objective fight'],
	['raid rounds', 'battle rounds'],
	['PMC raids and Scav runs', 'squad battles and campaign missions'],
	['PMC & Scav', 'Infantry & Vehicles'],
	['PMC raids and Scav runs', 'squad battles and campaign missions'],
	['extract and loot markers', 'objective and soldier markers'],
	['high-value loot', 'capture points'],
	['PMCs', 'enemy soldiers'],
	['Scavs', 'AI soldiers'],
	['extract timer', 'objective timer'],
	['tarkovImages', 'enlistedImages'],
	["from './tarkov'", "from './enlisted'"],
	["from '../data/tarkov'", "from '../data/enlisted'"],
	["from '../../data/tarkov'", "from '../../data/enlisted'"],
	['fetch-tarkov-images', 'fetch-enlisted-images'],
	['tarkov-hack-overlays', 'enlisted-hack-overlays'],
	['trucos-tarkov', 'trucos-enlisted'],
	['triche-tarkov', 'triche-enlisted'],
	['cheats-tarkov', 'cheats-enlisted'],
	['trucchi-tarkov', 'trucchi-enlisted'],
	['cheaty-tarkov', 'cheaty-enlisted'],
	['chity-tarkov', 'chity-enlisted'],
	['chitov-tarkov', 'chitov-enlisted'],
	['chitiv-tarkov', 'chitiv-enlisted'],
	['cheatow-tarkov', 'cheatow-enlisted'],
	['hile-tarkov', 'hile-enlisted'],
	['tarkov-hile', 'enlisted-hile'],
	['tarkov-esp-chity', 'enlisted-esp-chity'],
	['tarkov-aimbot-chity', 'enlisted-aimbot-chity'],
	['unentdeckte-tarkov-cheats', 'unentdeckte-enlisted-hacks'],
	['cheats-tarkov-indetectaveis', 'cheats-enlisted-indetectaveis'],
	['trucchi-tarkov-indetectabili', 'trucchi-enlisted-indetectabili'],
	['niewykrywalne-cheats-tarkov', 'niewykrywalne-cheats-enlisted'],
	['nedecektiruemye-chity-tarkov', 'nedecektiruemye-chity-enlisted'],
	['tespit-edilemeyen-tarkov-hileleri', 'tespit-edilemeyen-enlisted-hileleri'],
	['nedecektovani-chity-tarkov', 'nedecektovani-chity-enlisted'],
	['cheats-tarkov-nedetectabile', 'cheats-enlisted-nedetectabile'],
	['basta-tarkov-cheats', 'basta-enlisted-hacks'],
	['tarkov-cheats-funktionen', 'enlisted-hacks-funktionen'],
	['tarkov-cheats-functies', 'enlisted-hacks-functies'],
	['caracteristicas-trucos-tarkov', 'caracteristicas-trucos-enlisted'],
	['fonctionnalites-triche-tarkov', 'fonctionnalites-triche-enlisted'],
	['recursos-cheats-tarkov', 'recursos-cheats-enlisted'],
	['escape-from-tarkov', 'enlisted'],
	['Buy Tarkov Cheats', 'Buy Enlisted Hacks'],
	['Tarkov', 'Enlisted'],
	['tarkov', 'enlisted'],
];

const TEXT_EXTENSIONS = new Set([
	'.ts', '.tsx', '.js', '.mjs', '.astro', '.css', '.json', '.toml', '.txt', '.md', '.html', '.mdc',
]);

const SKIP_DIRS = new Set(['node_modules', 'dist', '.git', '.astro']);
const SKIP_FILES = new Set([
	'adapt-tarkov.mjs',
	'adapt-enlisted.mjs',
	'adapt-fortnite.mjs',
	'adapt-warzone.mjs',
]);

async function walk(dir, files = []) {
	const entries = await readdir(dir, { withFileTypes: true });
	for (const entry of entries) {
		if (SKIP_DIRS.has(entry.name)) continue;
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) {
			await walk(full, files);
		} else {
			files.push(full);
		}
	}
	return files;
}

function applyReplacements(content) {
	let result = content;
	for (const [from, to] of REPLACEMENTS) {
		if (from === to) continue;
		result = result.split(from).join(to);
	}
	return result;
}

async function transformTextFiles() {
	const files = await walk(ROOT);
	let changed = 0;
	for (const file of files) {
		const ext = path.extname(file);
		if (!TEXT_EXTENSIONS.has(ext)) continue;
		if (SKIP_FILES.has(path.basename(file))) continue;
		const original = await readFile(file, 'utf8');
		const updated = applyReplacements(original);
		if (updated !== original) {
			await writeFile(file, updated, 'utf8');
			changed++;
		}
	}
	console.log(`Transformed ${changed} text files`);
}

async function renamePageDirs() {
	for (const [from, to] of RENAME_PAGE_DIRS) {
		const src = path.join(ROOT, 'src', 'pages', from);
		const dest = path.join(ROOT, 'src', 'pages', to);
		try {
			await rename(src, dest);
			console.log(`Renamed page: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip rename ${from}: ${e.message}`);
		}
	}
}

async function renameDataFile() {
	const from = path.join(ROOT, 'src', 'data', 'tarkov.ts');
	const to = path.join(ROOT, 'src', 'data', 'enlisted.ts');
	try {
		await rename(from, to);
		console.log('Renamed tarkov.ts → enlisted.ts');
	} catch (e) {
		console.warn(`tarkov.ts rename: ${e.message}`);
	}
}

async function renameScripts() {
	const pairs = [
		['fetch-tarkov-images.mjs', 'fetch-enlisted-images.mjs'],
		['tarkov-hack-overlays.mjs', 'enlisted-hack-overlays.mjs'],
		['fix-tarkov-copy.mjs', 'fix-enlisted-copy.mjs'],
	];
	for (const [from, to] of pairs) {
		try {
			await rename(path.join(ROOT, 'scripts', from), path.join(ROOT, 'scripts', to));
			console.log(`Renamed script: ${from} → ${to}`);
		} catch (e) {
			console.warn(`Skip script rename ${from}: ${e.message}`);
		}
	}
}

async function updatePageAstroFiles() {
	const idMap = {
		'enlisted-aimbot': 'enlisted-aimbot',
		'enlisted-esp': 'enlisted-esp',
		'enlisted-wallhack': 'wallhack',
		'enlisted-vehicles': 'vehicles',
		'undetected-enlisted-hacks': 'undetected',
		'enlisted-hacks-2026': 'hacks-2026',
		'eac-bypass': 'eac',
		'enlisted-hacks': 'hacks',
		'enlisted-cheat-download': 'cheat-download',
		'enlisted-mod-menu': 'mod-menu',
		'enlisted-soft-aim': 'soft-aim',
		'best-enlisted-hacks': 'best-hacks',
		'enlisted-aimbot-hack': 'aimbot-hack',
		'enlisted-esp-hack': 'esp-hack',
		'enlisted-unlock-all': 'unlock-all',
	};

	for (const [dir, pageId] of Object.entries(idMap)) {
		const file = path.join(ROOT, 'src', 'pages', dir, 'index.astro');
		try {
			const content = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="${pageId}" />
`;
			await writeFile(file, content, 'utf8');
		} catch {
			// ignore missing dirs
		}
	}
}

async function renameImages() {
	const imagesDir = path.join(ROOT, 'public', 'images');
	let files;
	try {
		files = await readdir(imagesDir);
	} catch {
		return;
	}
	for (const file of files) {
		if (!file.includes('tarkov')) continue;
		const newName = file.replace(/tarkov/g, 'enlisted').replace(/enlisted-hacks-logo/g, 'enlisted-hacks-logo');
		if (newName !== file) {
			try {
				await rename(path.join(imagesDir, file), path.join(imagesDir, newName));
				console.log(`Renamed image: ${file} → ${newName}`);
			} catch (e) {
				console.warn(`Skip image ${file}: ${e.message}`);
			}
		}
	}
}

async function main() {
	console.log('Adapting Tarkov Cheats → Enlisted Hacks (enlistedhacks.net)...\n');
	await renamePageDirs();
	await renameDataFile();
	await renameScripts();
	await transformTextFiles();
	await updatePageAstroFiles();
	await renameImages();
	console.log('\nDone. Next: update brand.ts, import images, sync:brand, build.');
}

main().catch((e) => {
	console.error(e);
	process.exit(1);
});
