#!/usr/bin/env node
import { readFileSync, writeFileSync } from 'node:fs';

const SIMPLE =
	"images: { hero: 'enlisted hacks', espWallhack: 'enlisted hacks wallhack', aimbotCombat: 'enlisted hacks aimbot', squadFight: 'enlisted hacks', playerEsp: 'enlisted hacks esp', headerArt: 'enlisted hacks aimbot', cheatsPackage: 'enlisted hacks radar', rebootFight: 'enlisted hacks aimbot', battleRoyale: 'enlisted hacks', battleRoyaleIsland: 'enlisted hacks esp' }";

const re =
	/images: \{ hero: '[^']+', espWallhack: '[^']+', aimbotCombat: '[^']+', squadFight: '[^']+', playerEsp: '[^']+', headerArt: '[^']+', cheatsPackage: '[^']+', rebootFight: '[^']+', battleRoyale: '[^']+', battleRoyaleIsland: '[^']+' \}/g;

for (const f of ['scripts/i18n-data/ui-strings-part1.mjs', 'scripts/i18n-data/ui-strings-part2.mjs']) {
	const c = readFileSync(f, 'utf8');
	const n = c.replace(re, SIMPLE);
	writeFileSync(f, n);
	console.log(f, (c.match(re) || []).length, 'image blocks simplified');
}

const altMap = [
	["imageAlt: 'Enlisted ESP player tags hack'", "imageAlt: 'enlisted hacks esp'"],
	["imageAlt: 'Enlisted ESP radar hack'", "imageAlt: 'enlisted hacks radar'"],
	["imageAlt: 'Enlisted aimbot sniper kill'", "imageAlt: 'enlisted hacks aimbot'"],
	["imageAlt: 'Enlisted aimbot skeleton targeting'", "imageAlt: 'enlisted hacks aimbot'"],
	["imageAlt: 'Enlisted hacks ADS combat'", "imageAlt: 'enlisted hacks'"],
	["imageAlt: 'Enlisted hacks setup PC activation'", "imageAlt: 'enlisted hacks'"],
	["imageAlt: 'Enlisted hacks updates Easy Anti-Cheat maintenance'", "imageAlt: 'enlisted hacks'"],
	["imageAlt: 'Enlisted hacks FAQ ESP aimbot'", "imageAlt: 'enlisted hacks'"],
	["imageAlt: 'Enlisted hacks support license help'", "imageAlt: 'enlisted hacks'"],
	["imageAlt: 'Undetected enlisted hacks ESP wallhack'", "imageAlt: 'undetected enlisted hacks'"],
	["imageAlt: 'Enlisted wallhack skeleton ESP'", "imageAlt: 'enlisted hacks wallhack'"],
	["imageAlt: 'Easy Anti-Cheat bypass enlisted ESP aimbot'", "imageAlt: 'enlisted hacks eac'"],
	["imageAlt: 'Enlisted hacks 2026 ESP aimbot'", "imageAlt: 'enlisted hacks'"],
	["imageAlt: 'Enlisted hacks combat aimbot'", "imageAlt: 'enlisted hacks'"],
	["imageAlt: 'Enlisted hack download ESP aimbot'", "imageAlt: 'enlisted hacks download'"],
	["imageAlt: 'Enlisted mod menu ESP aimbot'", "imageAlt: 'enlisted hacks mod menu'"],
	["imageAlt: 'Enlisted soft aim aimbot settings'", "imageAlt: 'enlisted hacks soft aim'"],
	["imageAlt: 'Best enlisted hacks 2026 ESP'", "imageAlt: 'best enlisted hacks'"],
	["imageAlt: 'Enlisted aimbot hack combat'", "imageAlt: 'enlisted hacks aimbot'"],
	["imageAlt: 'Enlisted ESP hack wallhack'", "imageAlt: 'enlisted hacks esp'"],
	["imageAlt: 'Enlisted unlock all ESP aimbot guide'", "imageAlt: 'enlisted hacks'"],
	["imageAlt: 'Enlisted hacks privacy policy'", "imageAlt: 'enlisted hacks'"],
	["imageAlt: 'Enlisted hacks refund policy'", "imageAlt: 'enlisted hacks'"],
	["imageAlt: 'Enlisted hacks terms of use'", "imageAlt: 'enlisted hacks'"],
];

let pages = readFileSync('scripts/i18n-data/pages-en.mjs', 'utf8');
for (const [from, to] of altMap) pages = pages.split(from).join(to);
writeFileSync('scripts/i18n-data/pages-en.mjs', pages);
console.log('pages-en imageAlts simplified');

// productPage() imageAlt template in pages-i18n
let i18n = readFileSync('scripts/i18n-data/pages-i18n.mjs', 'utf8');
i18n = i18n
	.split("imageAlt: `Enlisted ${meta.altKeyword}`")
	.join("imageAlt: 'enlisted hacks'")
	.split("galleryTitle: `Enlisted Hacks ${topicName}`")
	.join("galleryTitle: 'enlisted hacks'")
	.split("imageAlt: `Enlisted hacks ${kind} policy`")
	.join("imageAlt: 'enlisted hacks'")
	.split("galleryTitle: `Enlisted Hacks ${kind} resources`")
	.join("galleryTitle: 'enlisted hacks'");
writeFileSync('scripts/i18n-data/pages-i18n.mjs', i18n);
console.log('pages-i18n image alts simplified');
