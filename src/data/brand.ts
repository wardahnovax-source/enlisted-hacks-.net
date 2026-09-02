/**
 * SINGLE SOURCE OF TRUTH for template rebrands.
 * Employees: use Brand Studio at http://localhost:4321/brand-studio/ during `astro dev`.
 * Do not scatter brand strings across components.
 */
export const brand = {
	/** Public brand name (nav, footer, H1 hero, schema Organization) */
	name: 'Enlisted Hacks',
	/** Short product label if needed */
	shortName: 'Enlisted',
	/** Canonical origin — no trailing slash */
	url: 'https://enlistedhacks.net',
	locale: 'en',
	market: 'Worldwide',
	supportEmail: 'support@enlistedhacks.net',
	checkoutUrl: 'https://zadeyo.com/go/WARDAH?to=%2Fproducts%2Fenlisted',

	/** Game this template instance targets */
	game: 'Enlisted',
	/** Anti-cheat name used in Status / FAQ copy */
	antiCheat: 'Easy Anti-Cheat',

	logo: '/images/enlisted-hacks-logo.webp',
	logoRaster: '/images/enlisted-hacks-logo.png',
	logoRasterWidth: 512,
	logoRasterHeight: 512,
	logoAlt: 'Enlisted Hacks logo',
	defaultOgImage: '/images/enlisted-hacks-hero-1024w.webp',
	heroImage: '/images/enlisted-hacks-hero-1024w.webp',

	plans: [
		{ id: 'monthly', label: 'Monthly', price: 35, duration: 'P30D' },
		{ id: 'lifetime', label: 'Lifetime', price: 150, duration: 'P99Y' },
	] as const,
	currency: 'USD',
	platforms: ['Windows PC'] as const,

	/**
	 * Site color tones — accent + canvas + soft/deep/hover/panel.
	 * WWII military aesthetic with olive and amber accents.
	 */
	theme: {
		accent: '#c47a2a',
		bg: '#0a0c08',
		soft: '#d4a574',
		deep: '#8b5a1e',
		hover: '#e8b86d',
		panel: '#0c0e0a',
	},

	/**
	 * Keyword system — primary drives titles; list feeds schema / light targeting.
	 */
	keywords: {
		primary: 'enlisted hacks',
		list: [
			'enlisted hacks',
			'enlisted game',
			'enlisted esp',
			'enlisted aimbot',
			'enlisted cheats',
			'enlisted gameplay',
			'undetected enlisted hacks',
			'best enlisted hacks',
		] as const,
	},

	/**
	 * Editable SEO meta — tokens: {brand} {game} {antiCheat} {email} {primaryKeyword}
	 */
	seo: {
		homeTitle: 'Enlisted Hacks | Official Windows PC Site',
		homeDescription:
			'Official Enlisted Hacks site for Windows PC. Compare features, store plans, and live status — then buy ESP, aimbot, skeleton, and vehicle tools in one license.',
		featuresTitle: '{game} Features | {brand}',
		featuresDescription:
			'Everything in one {game} license for Windows PC — ESP, aimbot, skeleton, health, vehicles, recoil control, and streamproof mode with {antiCheat} updates.',
		storeTitle: '{game} Store | {brand}',
		storeDescription:
			'Monthly and lifetime {game} plans for Windows PC. Same ESP, aimbot, skeleton, and vehicle features on both. Instant delivery after payment checkout.',
		statusTitle: '{game} Status | {brand}',
		statusDescription:
			'Live undetected status for {brand} after {game} or {antiCheat} patches. Check here before you queue a battle on Windows PC today.',
		previewTitle: 'Enlisted Hacks | Undetected ESP & Aimbot',
		previewDescription:
			'Buy undetected enlisted hacks for Enlisted on Windows PC. ESP, aimbot, skeleton, health, vehicles, recoil control, and streamproof mode with instant delivery.',
		setupTitle: '{game} Setup | {brand}',
		setupDescription:
			'Install and launch {brand} on Windows PC after checkout. Short setup steps so you can battle faster. Follow each step before your first match.',
		supportTitle: '{game} Support | {brand}',
		supportDescription:
			'Get help with {brand} on Windows PC. Email {email} with your order ID for setup, delivery, or billing help after you buy.',
		faqTitle: '{game} FAQ | {brand}',
		faqDescription:
			'Short answers about {brand} for Enlisted — delivery, setup, {antiCheat} updates, refunds, and Windows PC system notes before you buy.',
		reviewsTitle: '{brand} Reviews | Buyer Feedback',
		reviewsDescription:
			'Buyer reviews for {brand} — ESP, aimbot, skeleton, vehicles, and patch updates for Enlisted on Windows PC. Real feedback from license holders.',
		blogTitle: '{game} Intel | {brand}',
		blogDescription:
			'Guides and notes for {game} — aim settings, ESP tips, vehicle combat, recoil control, and {antiCheat} update coverage for Windows PC players.',
	},

	/** On-page marketing copy (tokens allowed) */
	copy: {
		tagline: 'Undetected {primaryKeyword} — ESP, aimbot, skeleton, and vehicles for PC',
		summary:
			'{brand} is an undetected {game} cheat package for Windows PC. Includes ESP, aimbot, skeleton, health, vehicles, recoil control, and streamproof mode with {antiCheat} maintenance.',
		heroLede: 'Undetected ESP, aimbot, skeleton, health, vehicles, and recoil control for Enlisted on Windows PC.',
		blogLabel: 'Enlisted Intel',
		ctaBuy: 'Get Access',
		ctaBuyShort: 'Buy',
		featuresIntro: 'Everything included in one license for {game} on Windows PC.',
		storeIntro: 'Pick a plan. Same features on both. Instant delivery after payment.',
		statusIntro: 'Check here after a {game} or {antiCheat} patch before you play.',
		previewIntro:
			'{brand} for Enlisted — ESP, skeleton, aimbot, health, vehicles, recoil control, and streamproof mode with {antiCheat} rebuilds after patches.',
		setupIntro: 'Install {brand} on Windows PC after you buy. Follow these short steps.',
		supportIntro: 'Need help with {brand}? Email {email} with your order ID.',
		faqIntro: 'Short answers about delivery, setup, updates, and refunds.',
		reviewsIntro: 'Feedback from {brand} buyers — ESP, aimbot, skeleton, vehicles, and support.',
		chipEsp: 'ESP / wallhack',
		chipAim: 'Aimbot',
		chipRadar: 'Skeleton',
		chipUpdates: 'Streamproof',
		navPreview: 'Hacks',
		navFeatures: 'Features',
		navStore: 'Store',
		navStatus: 'Status',
		navReviews: 'Reviews',
	},

	sitemap: {
		contentLastmod: '2026-09-02',
		blogImageTitle: '{brand} blog',
		blogImageCaption: 'Tips and updates for {primaryKeyword}',
		reviewsImageTitle: '{brand} reviews',
		reviewsImageCaption: 'What buyers say about {primaryKeyword}',
		images: [
			{
				src: '/images/enlisted-hacks-esp.webp',
				title: 'ESP overlay in Enlisted',
				caption: 'Player ESP boxes and distance readouts during squad battles',
			},
			{
				src: '/images/enlisted-hacks-combat.webp',
				title: 'Enlisted WWII battlefield combat',
				caption: 'Infantry and vehicle warfare on the Enlisted battlefield',
			},
			{
				src: '/images/enlisted-hacks-aimbot.webp',
				title: 'Aimbot assist for Enlisted',
				caption: 'Configurable aimbot FOV and bone priority for infantry combat',
			},
			{
				src: '/images/enlisted-hacks-hero.webp',
				title: 'Enlisted Hacks hero banner',
				caption: 'Undetected Enlisted hacks for Windows PC',
			},
			{
				src: '/images/enlisted-hacks-hero-full.png',
				title: 'Enlisted Hacks 4K hero image',
				caption: 'WWII battlefield scene for Enlisted Hacks',
			},
		],
	},
} as const;

export type Brand = typeof brand;

/** Replace {brand} {game} {antiCheat} {email} {primaryKeyword} {checkout} */
export function fillBrandTokens(input: string): string {
	return input
		.replaceAll('{brand}', brand.name)
		.replaceAll('{game}', brand.game)
		.replaceAll('{antiCheat}', brand.antiCheat)
		.replaceAll('{email}', brand.supportEmail)
		.replaceAll('{primaryKeyword}', brand.keywords.primary)
		.replaceAll('{checkout}', brand.checkoutUrl);
}

/** Locked title formula fallback: `{Game} {Topic} | {Brand}` */
export function seoTitle(topic: string): string {
	const title = `${brand.game} ${topic} | ${brand.name}`;
	return title.length <= 60 ? title : `${topic} | ${brand.name}`;
}

/** Keep descriptions short; tokens allowed. */
export function seoDescription(template: string): string {
	const text = fillBrandTokens(template).trim();
	return text.length <= 160 ? text : `${text.slice(0, 157).trim()}…`;
}

/** Resolved EN home meta from brand.seo (title clamp lives in site-core.seoPageTitle). */
export function homeSeo() {
	return {
		title: fillBrandTokens(brand.seo.homeTitle),
		description: seoDescription(brand.seo.homeDescription),
	};
}
