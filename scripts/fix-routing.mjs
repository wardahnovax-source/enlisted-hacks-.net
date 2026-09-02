#!/usr/bin/env node
/** Rebuild routing.ts and constants.mjs from clean Enlisted source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_IDS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['enlisted-esp', 'enlisted-esp'],
	['enlisted-aimbot', 'enlisted-aimbot'],
	['eac', 'eac'],
	['undetected-enlisted-hacks', 'undetected-enlisted-hacks'],
	['enlisted-wallhack', 'enlisted-wallhack'],
	['enlisted-vehicles', 'enlisted-vehicles'],
	['enlisted-hacks-2026', 'enlisted-hacks-2026'],
	['eac-bypass', 'eac-bypass'],
	['enlistedhacks.net', 'enlistedhacks.net'],
	['trucos-enlisted', 'trucos-enlisted'],
	['triche-enlisted', 'triche-enlisted'],
	['enlisted-hacks', 'escape-from-enlisted-hacks'],
	['cheats-enlisted', 'cheats-enlisted'],
	['trucchi-enlisted', 'trucchi-enlisted'],
	['cheaty-enlisted', 'cheaty-enlisted'],
	['chity-enlisted', 'chity-enlisted'],
	['chitov-enlisted', 'chitov-enlisted'],
	['chitiv-enlisted', 'chitiv-enlisted'],
	['cheatow-enlisted', 'cheatow-enlisted'],
	['hile-enlisted', 'hile-enlisted'],
	['enlisted-hile', 'enlisted-hile'],
	['enlisted-esp-chity', 'enlisted-esp-chity'],
	['enlisted-aimbot-chity', 'enlisted-aimbot-chity'],
	['unentdeckte-enlisted-hacks', 'unentdeckte-escape-from-enlisted-hacks'],
	['cheats-enlisted-indetectaveis', 'cheats-enlisted-indetectaveis'],
	['trucchi-enlisted-indetectabili', 'trucchi-enlisted-indetectabili'],
	['niewykrywalne-cheats-enlisted', 'niewykrywalne-cheats-enlisted'],
	['nedecektiruemye-chity-enlisted', 'nedecektiruemye-chity-enlisted'],
	['tespit-edilemeyen-enlisted-hileleri', 'tespit-edilemeyen-enlisted-hileleri'],
	['nedecektovani-chity-enlisted', 'nedecektovani-chity-enlisted'],
	['cheats-enlisted-nedetectabile', 'cheats-enlisted-nedetectabile'],
	['basta-enlisted-hacks', 'basta-escape-from-enlisted-hacks'],
	['eac-bypass-trucos-enlisted', 'eac-bypass-trucos-enlisted'],
	['eac-bypass-triche-enlisted', 'eac-bypass-triche-enlisted'],
	['eac-bypass-cheats-enlisted', 'eac-bypass-cheats-enlisted'],
	['eac-bypass-chity-enlisted', 'eac-bypass-chity-enlisted'],
	['eac-bypass-enlisted', 'eac-bypass'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageBlocks(content, pageId) {
	const keyPatterns = [
		new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': \\{[\\s\\S]*?\\},\\n`, 'g'),
	];
	let r = content;
	for (const p of keyPatterns) r = r.replace(p, '');
	// Remove from PageId union
	r = r.replace(new RegExp(`\\s*\\|\\s*'${pageId}'`, 'g'), '');
	// Remove from englishPaths single line
	r = r.replace(new RegExp(`\\t${pageId.replace(/-/g, '\\-')}: '[^']*',\\n`, 'g'), '');
	r = r.replace(new RegExp(`\\t'${pageId.replace(/-/g, '\\-')}': '[^']*',\\n`, 'g'), '');
	return r;
}

async function fixRouting() {
	let content = await readFile(path.join(SRC, 'src/data/i18n/routing.ts'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) content = removePageBlocks(content, id);
	// Fix eac key in englishPaths
	content = content.replace(/\teac: '/, "\t'eac': '");
	await writeFile(path.join(ROOT, 'src/data/i18n/routing.ts'), content);
	console.log('Fixed routing.ts');
}

async function fixConstants() {
	const heroImages = `/** Hero image per page topic — keyword-rich escape-from-enlisted-hacks paths. */
export const HERO_IMAGES = {
	home: '/images/escape-from-enlisted-hacks-hero.webp',
	'enlisted-esp': '/images/escape-from-enlisted-hacks-esp-wallhack.webp',
	'enlisted-aimbot': '/images/escape-from-enlisted-hacks-aimbot-combat.webp',
	features: '/images/escape-from-enlisted-hacks-package.webp',
	pricing: '/images/escape-from-enlisted-hacks-cover.webp',
	setup: '/images/enlisted-loadout-builder.webp',
	updates: '/images/enlisted-header-art.webp',
	faq: '/images/enlisted-squad-fight.webp',
	support: '/images/escape-from-enlisted-hacks-package.webp',
	undetected: '/images/enlisted-battle-royale-combat.webp',
	wallhack: '/images/escape-from-enlisted-hacks-esp-wallhack.webp',
	radar: '/images/enlisted-player-esp.webp',
	'eac': '/images/enlisted-reboot-van-fight.webp',
	'cheats-2026': '/images/escape-from-enlisted-hacks-hero.webp',
	privacy: '/images/escape-from-enlisted-hacks-aimbot-combat.webp',
	refund: '/images/escape-from-enlisted-hacks-cover.webp',
	terms: '/images/escape-from-enlisted-hacks-package.webp',
};`;

	let content = await readFile(path.join(SRC, 'scripts/i18n-data/constants.mjs'), 'utf8');
	content = apply(content);
	for (const id of REMOVE_IDS) {
		content = content.replace(new RegExp(`'${id}',\\s*`, 'g'), '');
	}
	content = content.replace(
		/export const PAGE_IDS = \[[\s\S]*?\];/,
		`export const PAGE_IDS = [\n\t'home', 'enlisted-esp', 'enlisted-aimbot', 'features', 'pricing', 'setup',\n\t'updates', 'faq', 'support', 'undetected', 'wallhack', 'radar', 'eac',\n\t'cheats-2026', 'privacy', 'refund', 'terms',\n];`,
	);
	content = content.replace(/\/\*\* Hero image[\s\S]*?};/, heroImages);
	content = content.replace(
		/export type PageId = [^;]+;/,
		"export type PageId = 'home' | 'enlisted-esp' | 'enlisted-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac' | 'cheats-2026' | 'privacy' | 'refund' | 'terms';",
	);
	content = content.replace(/operatorEsp/g, 'playerEsp');
	content = content.replace(/extractFight/g, 'rebootFight');
	content = content.replace(/alMazrah/g, 'battleRoyaleIsland');
	await writeFile(path.join(ROOT, 'scripts/i18n-data/constants.mjs'), content);
	console.log('Fixed constants.mjs');
}

await fixRouting();
await fixConstants();
