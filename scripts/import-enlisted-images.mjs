#!/usr/bin/env node
/**
 * Import Enlisted Hacks hero image (4K) and IGDB screenshots.
 * Run: node scripts/import-enlisted-images.mjs
 */
import { mkdir, writeFile } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve('.');
const imagesDir = path.join(root, 'public/images');
const publicDir = path.join(root, 'public');
const tmpDir = path.join(root, 'tmp-images');

const HERO_WIDTHS = [640, 960, 1024, 1536, 1920, 2560, 3840];
const CONTENT_WIDTHS = [480, 960];

const SCREENSHOTS = [
	{
		source: 'screenshot-1.jpg',
		file: 'enlisted-hacks-combat.webp',
		alt: 'Enlisted WWII squad battle on the battlefield',
	},
	{
		source: 'screenshot-2.jpg',
		file: 'enlisted-hacks-esp.webp',
		alt: 'Enlisted infantry combat with tanks and aircraft',
	},
	{
		source: 'screenshot-3.jpg',
		file: 'enlisted-hacks-aimbot.webp',
		alt: 'Enlisted vehicle and infantry warfare scene',
	},
];

async function processHero() {
	const heroSource = path.join(tmpDir, 'hero-source.png');
	const heroFull = path.join(imagesDir, 'enlisted-hacks-hero-full.png');
	const heroWebp = path.join(imagesDir, 'enlisted-hacks-hero.webp');

	// Save full 4K PNG
	const fullBuffer = await sharp(heroSource)
		.resize({ width: 3840, withoutEnlargement: false })
		.png({ quality: 95, compressionLevel: 6 })
		.toBuffer();
	await writeFile(heroFull, fullBuffer);
	console.log(`Wrote enlisted-hacks-hero-full.png (${fullBuffer.length} bytes, 4K)`);

	// Main hero webp
	const heroBuffer = await sharp(heroSource)
		.resize({ width: 3840, withoutEnlargement: false })
		.webp({ quality: 88, effort: 6 })
		.toBuffer();
	await writeFile(heroWebp, heroBuffer);
	console.log(`Wrote enlisted-hacks-hero.webp`);

	// Responsive variants
	const meta = await sharp(heroSource).metadata();
	for (const width of HERO_WIDTHS) {
		if (meta.width && width > meta.width * 1.5) continue;
		const file = `enlisted-hacks-hero-${width}w.webp`;
		const quality = width <= 640 ? 70 : width <= 1024 ? 78 : width <= 1920 ? 85 : 88;
		const buffer = await sharp(heroSource)
			.resize({ width, withoutEnlargement: false })
			.webp({ quality, effort: 6 })
			.toBuffer();
		await writeFile(path.join(imagesDir, file), buffer);
		console.log(`Wrote ${file}`);
	}

	// PNG fallback for OG
	const ogBuffer = await sharp(heroSource)
		.resize({ width: 1024, withoutEnlargement: false })
		.png({ quality: 90 })
		.toBuffer();
	await writeFile(path.join(imagesDir, 'enlisted-hacks-hero-1024w.png'), ogBuffer);
	console.log('Wrote enlisted-hacks-hero-1024w.png');
}

async function processScreenshots() {
	for (const { source, file } of SCREENSHOTS) {
		const input = path.join(tmpDir, source);
		const dest = path.join(imagesDir, file);
		const buffer = await sharp(input)
			.resize({ width: 1920, withoutEnlargement: true })
			.webp({ quality: 86, effort: 6 })
			.toBuffer();
		await writeFile(dest, buffer);
		console.log(`Wrote ${file} (${buffer.length} bytes)`);

		const base = file.replace(/\.webp$/i, '');
		const meta = await sharp(dest).metadata();
		for (const width of CONTENT_WIDTHS) {
			if (meta.width && width >= meta.width) continue;
			const variant = `${base}-${width}w.webp`;
			const vBuffer = await sharp(dest)
				.resize({ width, withoutEnlargement: true })
				.webp({ quality: 78, effort: 6 })
				.toBuffer();
			await writeFile(path.join(imagesDir, variant), vBuffer);
			console.log(`Wrote ${variant}`);
		}
	}
}

async function generateLogoAndFavicons() {
	const heroSource = path.join(tmpDir, 'hero-source.png');
	const logoPath = path.join(imagesDir, 'enlisted-hacks-logo.png');

	// Crop center for logo from hero
	const logoBuffer = await sharp(heroSource)
		.resize(512, 512, { fit: 'cover', position: 'right' })
		.png()
		.toBuffer();
	await writeFile(logoPath, logoBuffer);
	await writeFile(
		path.join(imagesDir, 'enlisted-hacks-logo.webp'),
		await sharp(logoBuffer).webp({ quality: 85 }).toBuffer(),
	);
	console.log('Wrote enlisted-hacks-logo.png/webp');

	for (const { name, size } of [
		{ name: 'favicon-16x16.png', size: 16 },
		{ name: 'favicon-32x32.png', size: 32 },
		{ name: 'apple-touch-icon.png', size: 180 },
		{ name: 'favicon.png', size: 192 },
	]) {
		await writeFile(
			path.join(publicDir, name),
			await sharp(logoBuffer).resize(size, size).png().toBuffer(),
		);
		console.log(`Wrote public/${name}`);
	}

	await writeFile(
		path.join(publicDir, 'favicon.ico'),
		await sharp(logoBuffer).resize(32, 32).png().toBuffer(),
	);
	console.log('Wrote public/favicon.ico');
}

await mkdir(imagesDir, { recursive: true });
await processHero();
await processScreenshots();
await generateLogoAndFavicons();
console.log('Done — Enlisted Hacks images imported.');
