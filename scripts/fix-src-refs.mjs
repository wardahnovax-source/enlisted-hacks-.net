#!/usr/bin/env node
/** Final pass: fix remaining Enlisted references in src/. */
import { readFile, writeFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'src');
const REMOVE_PAGE_IDS = ['hacks', 'cheat-download', 'mod-menu', 'soft-aim', 'best-cheats', 'aimbot-hack', 'esp-hack', 'unlock-all'];

const REPLACEMENTS = [
	['enlistedImages', 'enlistedImages'],
	["from '../data/enlisted'", "from '../data/enlisted'"],
	["from './enlisted'", "from './enlisted'"],
	['/undetected-enlisted-hacks/', '/undetected-enlisted-hacks/'],
	['/enlisted-wallhack/', '/enlisted-wallhack/'],
	['/enlisted-vehicles/', '/enlisted-vehicles/'],
	['/eac-bypass/', '/eac-bypass/'],
	['/enlisted-hacks-2026/', '/enlisted-hacks-2026/'],
	['/enlisted-aimbot/', '/enlisted-aimbot/'],
	['/enlisted-esp/', '/enlisted-esp/'],
	['/enlisted-hacks/', '/enlisted-esp/'],
	['Enlisted Hacks', 'Enlisted Hacks'],
	['Enlisted hacks', 'Enlisted hacks'],
	['Enlisted wallhack', 'Enlisted wallhack'],
	['Enlisted radar', 'Enlisted radar'],
	['Enlisted Aimbot', 'Enlisted Aimbot'],
	['Enlisted ESP', 'Enlisted ESP'],
	['Enlisted', 'Enlisted'],
	['Easy Anti-Cheat', 'Easy Anti-Cheat'],
	['eac', 'eac'],
	['enlistedhacks.net', 'enlistedhacks.net'],
	['operatorEsp', 'playerEsp'],
	['extractFight', 'rebootFight'],
	['alMazrah', 'battleRoyaleIsland'],
];

async function walk(dir, files = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		const full = path.join(dir, entry.name);
		if (entry.isDirectory()) await walk(full, files);
		else if (/\.(ts|astro|js)$/.test(entry.name)) files.push(full);
	}
	return files;
}

function apply(content) {
	let r = content;
	for (const [a, b] of REPLACEMENTS) r = r.split(a).join(b);
	for (const id of REMOVE_PAGE_IDS) {
		r = r.replace(new RegExp(`\\t'${id}':[^\\n]*\\n`, 'g'), '');
		r = r.replace(new RegExp(`\\{ label:[^}]*href: '/[^']*${id}[^']*/' \\},\\n`, 'g'), '');
	}
	return r;
}

for (const file of await walk(ROOT)) {
	const orig = await readFile(file, 'utf8');
	const updated = apply(orig);
	if (updated !== orig) {
		await writeFile(file, updated);
		console.log('Fixed', path.relative(ROOT, file));
	}
}
