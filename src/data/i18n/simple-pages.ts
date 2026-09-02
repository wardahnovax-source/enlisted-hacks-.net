import type { PageId } from './content.generated';
import { fillBrandTokens, seoDescription } from '../brand';
import { brandCopy, brandSeo, seoPageTitle } from '../site-core';

export type SimpleSection = {
	h2: string;
	paragraphs: string[];
	list?: string[];
};

export type SimplePageCopy = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
	galleryTitle: string;
	sections: SimpleSection[];
};

function page(copy: SimplePageCopy): SimplePageCopy {
	return {
		...copy,
		title: seoPageTitle(copy.title),
		description: seoDescription(copy.description),
		intro: fillBrandTokens(copy.intro),
		sections: copy.sections.map((section) => ({
			...section,
			h2: fillBrandTokens(section.h2),
			paragraphs: section.paragraphs.map(fillBrandTokens),
			list: section.list?.map(fillBrandTokens),
		})),
	};
}

/** Short, plain-English overrides for key EN nav pages — meta from brand.seo */
export const simplePageCopy: Partial<Record<PageId, SimplePageCopy>> = {
	features: page({
		title: brandSeo.featuresTitle,
		description: brandSeo.featuresDescription,
		h1: 'Features',
		intro: brandCopy.featuresIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View store',
		ctaSecondaryHref: '/pricing/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'ESP & skeleton',
				paragraphs: [
					'See enemy soldiers and squad members through walls with skeleton overlays and distance readouts.',
					'Use filters so the overlay stays clear in Normandy, Berlin, and Stalingrad battlefields.',
				],
				list: ['Player boxes & skeleton', 'Health and squad status', 'Distance readouts'],
			},
			{
				h2: 'Aimbot & recoil control',
				paragraphs: [
					'Aim help you can tune to feel natural in infantry combat.',
					'Set FOV, smoothness, bone priority, and recoil compensation per weapon class.',
				],
				list: ['Aimbot with smoothness', 'Recoil control per weapon', 'Hotkeys mid-battle'],
			},
			{
				h2: 'Vehicles & health',
				paragraphs: [
					'ESP for tanks, aircraft, and armored vehicles on the battlefield.',
					'Health bars for enemy soldiers and squad members at a glance.',
				],
				list: ['Tank and aircraft ESP', 'Health bar overlays', 'Vehicle distance readouts'],
			},
			{
				h2: 'Streamproof & updates',
				paragraphs: [
					'Streamproof mode hides overlays from OBS and screen capture.',
					'We rebuild after big {game} or {antiCheat} patches.',
				],
				list: ['Streamproof for streaming', 'Status on the Status page', 'Email support with your order ID'],
			},
		],
	}),
	pricing: page({
		title: brandSeo.storeTitle,
		description: brandSeo.storeDescription,
		h1: 'Store',
		intro: brandCopy.storeIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Setup guide',
		ctaSecondaryHref: '/setup/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'Full package access for Windows 10 / 11.',
					'Same ESP, aimbot, skeleton, health, vehicles, recoil, and streamproof on both plans.',
				],
				list: ['ESP, aimbot, skeleton, vehicles', 'Patch rebuilds while active', 'Digital delivery after checkout'],
			},
			{
				h2: 'Plans',
				paragraphs: [
					'Pick monthly to try first, or lifetime for one payment.',
					'Both plans unlock the same features after checkout.',
				],
				list: ['Monthly — 30 days', 'Lifetime — one-time', 'Instant license by email'],
			},
			{
				h2: 'Before you buy',
				paragraphs: ['Read the refund policy if you need it. Contact support with your order ID for help.'],
				list: [
					'<a href="/refund-policy/">Refund policy</a>',
					'<a href="/faq/">FAQ</a>',
					'<a href="/support/">Support</a>',
				],
			},
		],
	}),
	updates: page({
		title: brandSeo.statusTitle,
		description: brandSeo.statusDescription,
		h1: 'Status',
		intro: brandCopy.statusIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Enlisted Hacks overview',
		ctaSecondaryHref: '/enlisted-hacks/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Current status',
				paragraphs: [
					'As of Sep 2026 the package is online for Enlisted on Windows PC. We post a new note here when a game or Easy Anti-Cheat patch needs a rebuild.',
					'If Status is green, you can play. If we are rebuilding, wait for the next note.',
				],
				list: [
					'Check this page before every session after a patch',
					'Monthly and lifetime licenses get rebuilds while active',
					'No cheat stays undetected forever — status first, then play',
				],
			},
			{
				h2: 'After a patch',
				paragraphs: [
					'Wait for our rebuild note, then launch. Do not play on an old build after a big update.',
				],
				list: ['Read the latest status note', 'Follow setup if something fails', 'Email support with your order ID'],
			},
			{
				h2: 'Important',
				paragraphs: ['No cheat is 100% safe forever. Stay updated and use safe settings.'],
				list: ['Status first, then play', '<a href="/support/">Support</a> for license help'],
			},
		],
	}),
	hacks: page({
		title: brandSeo.previewTitle,
		description: brandSeo.previewDescription,
		h1: 'Enlisted Hacks',
		intro: brandCopy.previewIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'View features',
		ctaSecondaryHref: '/features/',
		galleryTitle: 'In-battle look',
		sections: [
			{
				h2: 'What you get',
				paragraphs: [
					'One license for Enlisted on Windows PC — built for squad battles and campaign missions.',
				],
				list: [
					'ESP / skeleton with distance',
					'Aimbot & recoil control',
					'Health & vehicle ESP',
					'Streamproof mode',
					'Easy Anti-Cheat rebuilds after patches',
				],
			},
			{
				h2: 'Built for Enlisted battles',
				paragraphs: [
					'Spot enemy soldiers before you push, track squad health, and see tanks and aircraft on the map. Tune aimbot and recoil per weapon class for infantry and vehicle combat.',
				],
				list: [
					'<a href="/enlisted-esp/">ESP guide</a>',
					'<a href="/enlisted-aimbot/">Aimbot controls</a>',
					'<a href="/enlisted-vehicles/">Vehicle ESP</a>',
					'<a href="/updates/">Live status</a>',
				],
			},
			{
				h2: 'How to start',
				paragraphs: ['Buy a plan, get your license by email, then follow setup. Check Status after every major patch.'],
				list: [
					'<a href="/pricing/">Open store</a>',
					'<a href="/setup/">Setup guide</a>',
					'<a href="/updates/">Check status</a>',
				],
			},
		],
	}),
	'enlisted-esp': page({
		title: 'Enlisted ESP | {brand}',
		description:
			'Enlisted ESP and skeleton overlay for Enlisted on Windows PC — player boxes, health bars, distance, and clear overlays in squad battles.',
		h1: 'ESP',
		intro: 'See enemy soldiers and squad members through walls during Enlisted battles. Part of the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Enlisted Hacks overview',
		ctaSecondaryHref: '/enlisted-hacks/',
		galleryTitle: 'ESP in battle',
		sections: [
			{
				h2: 'What ESP shows',
				paragraphs: ['Skeleton overlays, health bars, distance, and filters for enemy soldiers and squad members.'],
				list: ['Skeleton ESP', 'Health bar overlays', 'Distance readouts'],
			},
			{
				h2: 'When to use it',
				paragraphs: ['Clear infantry combat and objective pushes without flooding the screen.'],
				list: ['Tune opacity', 'Filter by soldier type', 'Pair with vehicle ESP'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['ESP is included with aimbot, skeleton, and vehicles in one plan.'],
				list: [
					'<a href="/enlisted-hacks/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	'enlisted-aimbot': page({
		title: 'Enlisted Aimbot | {brand}',
		description:
			'Enlisted aimbot and recoil control for Enlisted on Windows PC — FOV, smoothness, bone priority, and recoil compensation you can tune per weapon.',
		h1: 'Aimbot',
		intro: 'Aimbot and recoil control you can tune for Enlisted. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Enlisted Hacks overview',
		ctaSecondaryHref: '/enlisted-hacks/',
		galleryTitle: 'Aimbot view',
		sections: [
			{
				h2: 'Controls',
				paragraphs: ['Set FOV, smoothness, bone priority, and recoil compensation before you battle.'],
				list: ['Aimbot strength', 'Recoil control', 'Hotkeys mid-battle'],
			},
			{
				h2: 'Play styles',
				paragraphs: ['Keep settings subtle for longer sessions. Raise strength only when you accept more risk.'],
				list: ['Legit aimbot', 'Per-weapon profiles', 'Works with ESP'],
			},
			{
				h2: 'Next steps',
				paragraphs: ['Aimbot ships with ESP, skeleton, and vehicles in one license.'],
				list: [
					'<a href="/enlisted-hacks/">Full product</a>',
					'<a href="/features/">All features</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	radar: page({
		title: 'Enlisted Vehicles | {brand}',
		description:
			'Enlisted vehicle ESP for Enlisted on Windows PC — tank, aircraft, and armored vehicle detection with distance readouts.',
		h1: 'Vehicles',
		intro: 'ESP for tanks, aircraft, and armored vehicles on the battlefield. Included in the same {brand} license.',
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Enlisted Hacks overview',
		ctaSecondaryHref: '/enlisted-hacks/',
		galleryTitle: 'Vehicle ESP',
		sections: [
			{
				h2: 'What it shows',
				paragraphs: ['Tank, aircraft, and armored vehicle ESP with adjustable range and distance readouts.'],
				list: ['Tank ESP', 'Aircraft detection', 'Adjustable range'],
			},
			{
				h2: 'With ESP',
				paragraphs: ['Use vehicle ESP to spot threats before they reach your squad. Pair with infantry ESP for full awareness.'],
				list: [
					'<a href="/enlisted-esp/">ESP guide</a>',
					'<a href="/enlisted-hacks/">Full product</a>',
					'<a href="/pricing/">Store</a>',
				],
			},
		],
	}),
	setup: page({
		title: brandSeo.setupTitle,
		description: brandSeo.setupDescription,
		h1: 'Setup',
		intro: brandCopy.setupIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Check status',
		ctaSecondaryHref: '/updates/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Before you install',
				paragraphs: ['Buy a plan first. You get a license by email.'],
				list: ['Windows 10 / 11 PC', 'Disable conflicting overlays', 'Have your order email ready'],
			},
			{
				h2: 'Install steps',
				paragraphs: ['Run the loader as admin, paste your license, then launch {game}.'],
				list: ['Download the loader from your delivery email', 'Paste license key', 'Launch the game'],
			},
			{
				h2: 'If something fails',
				paragraphs: ['Check Status after a patch. Email {email} with your order ID.'],
				list: ['<a href="/updates/">Status page</a>', '<a href="/support/">Support</a>', '<a href="/faq/">FAQ</a>'],
			},
		],
	}),
	support: page({
		title: brandSeo.supportTitle,
		description: brandSeo.supportDescription,
		h1: 'Support',
		intro: brandCopy.supportIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'FAQ',
		ctaSecondaryHref: '/faq/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'How to contact us',
				paragraphs: ['Email {email}. Include your order ID and a short note about the issue.'],
				list: ['Order ID from your receipt', 'Windows version', 'What you already tried'],
			},
			{
				h2: 'Faster answers',
				paragraphs: ['Check FAQ and Status before you write. Many setup questions are already covered.'],
				list: ['<a href="/faq/">FAQ</a>', '<a href="/updates/">Status</a>', '<a href="/setup/">Setup</a>'],
			},
		],
	}),
	faq: page({
		title: brandSeo.faqTitle,
		description: brandSeo.faqDescription,
		h1: 'FAQ',
		intro: brandCopy.faqIntro,
		ctaPrimary: brandCopy.ctaBuy,
		ctaSecondary: 'Support',
		ctaSecondaryHref: '/support/',
		galleryTitle: 'In-game look',
		sections: [
			{
				h2: 'Buying & delivery',
				paragraphs: ['You get a digital license by email after payment.'],
				list: ['Instant delivery after checkout', 'Keep your order email', 'One license per purchase'],
			},
			{
				h2: 'Setup & updates',
				paragraphs: ['Follow Setup after you buy. Check Status after big {game} or {antiCheat} patches.'],
				list: ['<a href="/setup/">Setup guide</a>', '<a href="/updates/">Status</a>'],
			},
			{
				h2: 'Refunds',
				paragraphs: ['Read the refund policy before you buy if you need details.'],
				list: ['<a href="/refund-policy/">Refund policy</a>', '<a href="/support/">Support</a>'],
			},
		],
	}),
};
