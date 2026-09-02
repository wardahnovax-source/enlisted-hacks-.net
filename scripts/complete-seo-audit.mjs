#!/usr/bin/env node
/**
 * Completes escape-from-enlisted-hacks SEO audit: add missing pages, fix leftovers, strip Zadeyo from meta.
 * Run: node scripts/complete-seo-audit.mjs
 */
import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const NODE = 'C:\\Program Files\\nodejs\\node.exe';

const EXTRA_PAGES = [
	{ id: 'hacks', dir: 'enlisted-hacks', pageId: 'hacks' },
	{ id: 'cheat-download', dir: 'enlisted-cheat-download', pageId: 'cheat-download' },
	{ id: 'mod-menu', dir: 'enlisted-mod-menu', pageId: 'mod-menu' },
	{ id: 'soft-aim', dir: 'enlisted-soft-aim', pageId: 'soft-aim' },
	{ id: 'best-cheats', dir: 'best-enlisted-hacks', pageId: 'best-cheats' },
	{ id: 'aimbot-hack', dir: 'enlisted-aimbot-hack', pageId: 'aimbot-hack' },
	{ id: 'esp-hack', dir: 'enlisted-esp-hack', pageId: 'esp-hack' },
	{ id: 'unlock-all', dir: 'enlisted-unlock-all', pageId: 'unlock-all' },
];

const GLOBAL_REPLACEMENTS = [
	[/enlisted-enlisted/g, 'enlisted'],
	[/eac-bypass-enlisted/g, 'eac-bypass'],
	[/Enlisted/g, 'Enlisted'],
	[/Enlisted/g, 'Enlisted'],
	[/Call of Duty/g, 'Enlisted'],
	[/Enlisted Wallhack/g, 'Enlisted Wallhack'],
	[/Enlisted Radar Hack/g, 'Enlisted Radar Hack'],
	[/Enlisted Cheat Features/g, 'Enlisted Cheat Features'],
	[/Enlisted Cheat Pricing/g, 'Enlisted Cheat Pricing'],
	[/Enlisted Cheat Setup/g, 'Enlisted Cheat Setup'],
	[/Enlisted Cheat Status/g, 'Enlisted Cheat Status'],
	[/Enlisted Cheat Support/g, 'Enlisted Cheat Support'],
	[/Enlisted squad fight/g, 'Enlisted squad fight'],
	[/Enlisted squad builder/g, 'Enlisted loadout builder'],
	[/Enlisted store header/g, 'Enlisted header'],
	[/Enlisted wasteland combat/g, 'Enlisted battle royale combat'],
	[/Enlisted loadout builder/g, 'Enlisted loadout builder'],
	[/Enlisted pricing/g, 'Enlisted pricing'],
	[/Enlisted Easy Anti-Cheat/g, 'Enlisted Easy Anti-Cheat'],
	[/on Enlisted/g, 'on Enlisted'],
	[/for Enlisted/g, 'for Enlisted'],
	[/Enlisted guides/g, 'Enlisted guides'],
	[/Enlisted guide/g, 'Enlisted guide'],
	[/Enlisted hileleri/g, 'Enlisted hileleri'],
	[/Enlisted hile/g, 'Enlisted hile'],
	[/Enlisted hileleri/g, 'Enlisted hileleri'],
	[/cheatów Enlisted/g, 'cheatów Enlisted'],
	[/cheat Enlisted/g, 'cheat Enlisted'],
	[/cheats Enlisted/g, 'cheats Enlisted'],
	[/trucos Enlisted/g, 'trucos Enlisted'],
	[/triche Enlisted/g, 'triche Enlisted'],
	[/trucchi Enlisted/g, 'trucchi Enlisted'],
	[/Wallhack Enlisted/g, 'Enlisted Wallhack'],
	[/cheat Enlisted undetected/g, 'cheat Enlisted undetected'],
	[/cheats Enlisted undetected/g, 'cheats Enlisted undetected'],
	[/Verdansk beams/g, 'long-range AR beams'],
	[/scav-run room clears/g, 'close-quarters room clears'],
	[/Verdansk and Urzikstan/g, 'Verdansk and scav-run'],
	[/Verdansk, Urzikstan/g, 'Verdansk, scav-run'],
	[/raid and scav-run/g, 'raid and scav-run'],
	[/Activision's anti-cheat/g, "Epic Games' anti-cheat"],
	[/Activision anti-cheat/g, 'Epic Games anti-cheat'],
	[/Activision ships/g, 'Epic Games ships'],
	[/Activision security/g, 'Epic Games security'],
	[/Activision bans/g, 'Epic Games bans'],
	[/Activision/g, 'Epic Games'],
	[/eac/gi, 'eac'],
	[/Easy Anti-Cheat/g, 'Easy Anti-Cheat'],
	[/escape-from-enlisted-hacks/g, 'escape-from-enlisted-hacks'],
	[/enlisted/g, 'enlisted'],
	[/Undetected Wallhack for Call of Duty/g, 'Undetected Wallhack for Enlisted'],
	[/How ESP wallhack, radar, and Aimbot rebuild after Call of Duty anti-cheat/g,
		'How ESP wallhack, radar, and Aimbot rebuild after Enlisted anti-cheat'],
];

/** Remove Zadeyo from meta description/title strings only */
function stripZadeyoFromMeta(text) {
	return text
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout en Zadeyo\.?/gi, '.')
		.replace(/\s*[—–-]\s*checkout via Zadeyo\.?/gi, '.')
		.replace(/\s*with Zadeyo checkout\.?/gi, '.')
		.replace(/\s*via Zadeyo checkout\.?/gi, '.')
		.replace(/\s*Checkout via Zadeyo\.?/gi, '')
		.replace(/\s*Zadeyo checkout,?\s*/gi, ' ')
		.replace(/\s*Zadeyo delivery\.?/gi, 'instant digital delivery.')
		.replace(/\s*and Zadeyo delivery\.?/gi, ' and instant digital delivery.')
		.replace(/\|\s*Instant Zadeyo Delivery/g, '| Instant Digital Delivery')
		.replace(/Buy on Zadeyo/g, 'Buy Enlisted Hacks')
		.replace(/\s{2,}/g, ' ')
		.trim();
}

async function walkFiles(dir, exts, files = []) {
	const entries = await import('node:fs/promises').then((fs) => fs.readdir(dir, { withFileTypes: true }));
	for (const e of entries) {
		if (e.name === 'node_modules' || e.name === 'dist' || e.name === '.git') continue;
		const full = path.join(dir, e.name);
		if (e.isDirectory()) await walkFiles(full, exts, files);
		else if (exts.some((x) => e.name.endsWith(x))) files.push(full);
	}
	return files;
}

async function applyGlobalFixes() {
	const targets = await walkFiles(path.join(ROOT, 'src'), ['.ts', '.astro']);
	targets.push(
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-en.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'pages-i18n.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part1.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'ui-strings-part2.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'phrases.mjs'),
		path.join(ROOT, 'scripts', 'i18n-data', 'gallery-ui.ts'),
		path.join(ROOT, 'src', 'data', 'i18n', 'gallery-ui.ts'),
		path.join(ROOT, 'functions', '_middleware.js'),
	);

	for (const file of targets) {
		try {
			await access(file);
		} catch {
			continue;
		}
		let content = await readFile(file, 'utf8');
		const original = content;
		for (const [pattern, replacement] of GLOBAL_REPLACEMENTS) {
			content = content.replace(pattern, replacement);
		}
		if (file.endsWith('pages-en.mjs')) {
			// Strip Zadeyo from description: and title: lines
			content = content.replace(/(description:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
			content = content.replace(/(title:\s*['"])([^'"]+)(['"])/g, (_, pre, body, post) =>
				pre + stripZadeyoFromMeta(body) + post,
			);
		}
		if (content !== original) {
			await writeFile(file, content, 'utf8');
			console.log(`Fixed: ${path.relative(ROOT, file)}`);
		}
	}
}

async function createExtraPages() {
	const template = `---
import LocalizedPage from '../../components/LocalizedPage.astro';
---

<LocalizedPage locale="en" pageId="PAGE_ID" />
`;
	for (const page of EXTRA_PAGES) {
		const dir = path.join(ROOT, 'src', 'pages', page.dir);
		await mkdir(dir, { recursive: true });
		const file = path.join(dir, 'index.astro');
		try {
			await access(file);
		} catch {
			await writeFile(file, template.replace('PAGE_ID', page.pageId), 'utf8');
			console.log(`Created page: src/pages/${page.dir}/index.astro`);
		}
	}
}

async function fixLocalesBlogUi() {
	const file = path.join(ROOT, 'src', 'data', 'i18n', 'locales.ts');
	let content = await readFile(file, 'utf8');
	content = content.replace(/Enlisted guides/g, 'Enlisted guides');
	content = content.replace(/Enlisted guide/g, 'Enlisted guide');
	content = content.replace(/Enlisted hileleri/g, 'Enlisted hileleri');
	content = content.replace(/Enlisted hile/g, 'Enlisted hile');
	content = content.replace(/cheat Enlisted/g, 'cheat Enlisted');
	content = content.replace(/cheats Enlisted/g, 'cheats Enlisted');
	content = content.replace(/trucos Enlisted/g, 'trucos Enlisted');
	content = content.replace(/triche Enlisted/g, 'triche Enlisted');
	content = content.replace(/trucchi Enlisted/g, 'trucchi Enlisted');
	content = content.replace(/cheatów Enlisted/g, 'cheatów Enlisted');
	content = content.replace(/читов Enlisted/g, 'читов Enlisted');
	content = content.replace(/читів Enlisted/g, 'читів Enlisted');
	content = content.replace(/Enlistedチート/g, 'Enlistedチート');
	content = content.replace(/Enlisted 치트/g, 'Enlisted 치트');
	content = content.replace(/Enlisted作弊/g, 'Enlisted作弊');
	content = content.replace(/Enlisted rehberleri/g, 'Enlisted rehberleri');
	content = content.replace(/Enlisted gidsen/g, 'Enlisted gidsen');
	content = content.replace(/Enlisted průvodce/g, 'Enlisted průvodce');
	content = content.replace(/Enlisted guider/g, 'Enlisted guider');
	content = content.replace(/Enlisted related/g, 'Enlisted related');
	content = content.replace(/Enlisted ガイド/g, 'Enlisted ガイド');
	content = content.replace(/Enlisted 가이드/g, 'Enlisted 가이드');
	content = content.replace(/Enlisted指南/g, 'Enlisted指南');
	content = content.replace(/Enlisted गाइड/g, 'Enlisted गाइड');
	content = content.replace(/Enlisted panduan/g, 'Enlisted panduan');
	content = content.replace(/Enlisted คู่มือ/g, 'Enlisted คู่มือ');
	content = content.replace(/Enlisted hướng dẫn/g, 'Enlisted hướng dẫn');
	await writeFile(file, content, 'utf8');
	console.log('Fixed locales.ts blogUi');
}

console.log('=== Enlisted Hacks SEO completion ===\n');
await applyGlobalFixes();
await createExtraPages();
await fixLocalesBlogUi();
console.log('\nDone. Next: update routing.ts manually, then run generate:i18n, fetch:images, build:validate');
