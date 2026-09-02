#!/usr/bin/env node
/** Adapt pages-en.mjs and pages-i18n.mjs from Enlisted source. */
import { readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const SRC = path.resolve(ROOT, '..', 'amansand');

const REMOVE_PAGE_KEYS = [
	'hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats',
	'aimbot-hack', 'esp-hack', 'unlock-all',
];

const REPLACEMENTS = [
	['enlisted-esp', 'enlisted-esp'],
	['enlisted-aimbot', 'enlisted-aimbot'],
	["'eac'", "'eac'"],
	['eac-bypass', 'eac-bypass'],
	['undetected-enlisted-hacks', 'undetected-enlisted-hacks'],
	['enlisted-wallhack', 'enlisted-wallhack'],
	['enlisted-vehicles', 'enlisted-vehicles'],
	['enlisted-hacks-2026', 'enlisted-hacks-2026'],
	['escape-from-enlisted-hacks', 'escape-from-enlisted-hacks'],
	['enlisted', 'enlisted'],
	['Enlisted', 'Enlisted'],
	['Enlisted', 'Enlisted'],
	['Enlisted Hacks', 'Enlisted Hacks'],
	['Enlisted hacks', 'Enlisted hacks'],
	['Enlisted hack', 'Enlisted hack'],
	['Enlisted ESP', 'Enlisted ESP'],
	['Enlisted Aimbot', 'Enlisted Aimbot'],
	['Enlisted wallhack', 'Enlisted wallhack'],
	['Enlisted radar', 'Enlisted radar'],
	['Enlisted firefights', 'Enlisted firefights'],
	['Enlisted combat', 'Enlisted combat'],
	['Enlisted patches', 'Enlisted patches'],
	['Enlisted updates', 'Enlisted updates'],
	['Enlisted setup', 'Enlisted setup'],
	['Enlisted license', 'Enlisted license'],
	['Enlisted licenses', 'Enlisted licenses'],
	['Enlisted sessions', 'Enlisted sessions'],
	['in Enlisted', 'in Enlisted'],
	['for Enlisted', 'for Enlisted'],
	['Enlisted on', 'Enlisted on'],
	['Enlisted or', 'Enlisted or'],
	['Enlisted\'s', 'Enlisted\'s'],
	['Enlisted ', 'Enlisted '],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['Easy Anti-Cheat maintenance', 'Easy Anti-Cheat maintenance'],
	['Easy Anti-Cheat bypass', 'Easy Anti-Cheat bypass'],
	['Easy Anti-Cheat Bypass', 'Easy Anti-Cheat Bypass'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['support@enlistedhacks.net', 'support@enlistedhacks.net'],
	['Normandy, Berlin, and Stalingrad battlefields', 'Normandy, Berlin, and Stalingrad battlefields'],
	['Normandy, Berlin and Stalingrad battlefields', 'Normandy, Berlin and Stalingrad battlefields'],
	['objective fights', 'objective fights'],
	['objective fight', 'objective fight'],
	['battle rounds', 'battle rounds'],
	['extract', 'extract'],
	['enemy soldiers', 'players'],
	['operator', 'player'],
	['enemy soldiers', 'Players'],
	['Operator', 'Player'],
	['objective timer', 'objective timer'],
	['squad battles and campaign missions', 'squad battles and campaign missions'],
	['squad battles and campaign missions', 'squad battles and campaign missions'],
	['Infantry & Vehicles', 'Infantry & Vehicles'],
	['capture points', 'capture points'],
	['capture points', 'capture points'],
	['contracts', 'chests'],
	['contract', 'chest'],
	['Activision\'s', 'Epic Games\''],
	['Call of Duty combat pace', 'Enlisted combat pace'],
	['COD', 'Enlisted'],
];

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	return r;
}

function removePageObjectBlocks(content) {
	let r = content;
	for (const key of REMOVE_PAGE_KEYS) {
		const quoted = `'${key}'`;
		const patterns = [
			new RegExp(`\\t${quoted}: \\{[\\s\\S]*?\\},\\n`, 'g'),
			new RegExp(`\\t${key.replace(/-/g, '\\-')}: \\{[\\s\\S]*?\\},\\n`, 'g'),
		];
		for (const p of patterns) r = r.replace(p, '');
	}
	return r;
}

async function adaptFile(rel) {
	let content = await readFile(path.join(SRC, rel), 'utf8');
	content = apply(content);
	content = removePageObjectBlocks(content);
	await writeFile(path.join(ROOT, rel), content);
	console.log('Adapted', rel);
}

await adaptFile('scripts/i18n-data/pages-en.mjs');
await adaptFile('scripts/i18n-data/pages-i18n.mjs');
await adaptFile('scripts/i18n-data/phrases.mjs');

// Patch phrases KW object
let phrases = await readFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), 'utf8');
phrases = phrases.replace(
	/const KW = \{[\s\S]*?\};/,
	`const KW = {
	esp: 'ESP wallhack',
	radar: 'radar hack',
	aimbot: 'Aimbot',
	product: 'Enlisted Hacks',
	game: 'Enlisted',
	checkout: 'Zadeyo',
	eac: 'Easy Anti-Cheat',
};`,
);
phrases = phrases.replace(/KW\.eac/g, 'KW.eac');
phrases = phrases.replace(/maps: '[^']*'/g, "maps: 'Normandy, Berlin, and Stalingrad battlefields'");
await writeFile(path.join(ROOT, 'scripts/i18n-data/phrases.mjs'), phrases);

console.log('Done adapting i18n pages.');
