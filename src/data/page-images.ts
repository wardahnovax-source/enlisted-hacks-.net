import { siteConfig } from './site';
import { enlistedImages } from './enlisted';
import { pageIds, type PageId } from './i18n/routing';
import { pageSitemapImageLabels } from './brand-sitemap';

/** Rotating product screenshots for FAQ / review detail URLs. */
export const crawlPhotoPool = [
	enlistedImages.espWallhack,
	enlistedImages.aimbotCombat,
	enlistedImages.aimbotSkeleton,
	enlistedImages.playerEsp,
	enlistedImages.cheatsCombat,
	'/images/enlisted-hacks-esp.webp',
] as const;

/**
 * One primary crawl/OG photo per product page.
 * Prefer compressed WebP screenshots so Google can fetch them quickly.
 */
export const pageImageSrcById: Record<PageId, string> = {
	home: '/images/enlisted-hacks-hero-1024w.webp',
	'enlisted-esp': enlistedImages.playerEsp,
	'enlisted-aimbot': enlistedImages.aimbotCombat,
	features: enlistedImages.aimbotSkeleton,
	pricing: enlistedImages.cheatsCombat,
	setup: enlistedImages.playerEsp,
	updates: '/images/enlisted-hacks-hero-1024w.webp',
	faq: enlistedImages.aimbotSkeleton,
	support: enlistedImages.cheatsCombat,
	undetected: enlistedImages.espWallhack,
	wallhack: enlistedImages.espWallhack,
	radar: enlistedImages.playerEsp,
	eac: enlistedImages.aimbotCombat,
	'cheats-2026': '/images/enlisted-hacks-hero-1024w.webp',
	hacks: enlistedImages.cheatsCombat,
	'cheat-download': enlistedImages.cheatsCombat,
	'mod-menu': enlistedImages.playerEsp,
	'soft-aim': enlistedImages.aimbotSkeleton,
	'best-cheats': '/images/enlisted-hacks-hero-1024w.webp',
	'aimbot-hack': enlistedImages.aimbotSkeleton,
	'esp-hack': enlistedImages.espWallhack,
	'unlock-all': enlistedImages.playerEsp,
	privacy: enlistedImages.aimbotCombat,
	refund: enlistedImages.cheatsCombat,
	terms: enlistedImages.aimbotSkeleton,
};

for (const pageId of pageIds) {
	if (!pageImageSrcById[pageId]) {
		throw new Error(`[page-images] No image path configured for pageId: ${pageId}`);
	}
}

export function absoluteImageUrl(path: string): string {
	return new URL(path, siteConfig.url).href;
}

export function getPageImageSrc(pageId: PageId): string {
	return pageImageSrcById[pageId];
}

export function getPageCrawlImage(pageId: PageId): {
	src: string;
	url: string;
	title: string;
	caption: string;
} {
	const src = pageImageSrcById[pageId];
	const labels = pageSitemapImageLabels(pageId);
	return {
		src,
		url: absoluteImageUrl(src),
		title: labels.title,
		caption: labels.caption,
	};
}

/** Stable pick from the photo pool (FAQ answers, reviews, etc.). */
export function pickCrawlPhoto(seed: string): string {
	let hash = 0;
	for (let i = 0; i < seed.length; i += 1) {
		hash = (hash * 31 + seed.charCodeAt(i)) >>> 0;
	}
	return crawlPhotoPool[hash % crawlPhotoPool.length];
}

export function crawlPhotoMeta(
	seed: string,
	title: string,
	caption: string,
): { src: string; url: string; title: string; caption: string } {
	const src = pickCrawlPhoto(seed);
	return {
		src,
		url: absoluteImageUrl(src),
		title,
		caption,
	};
}

/** Default large social / SERP image when a page has no specific asset. */
export const defaultCrawlImageSrc = pageImageSrcById.home;
