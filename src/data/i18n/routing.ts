import { siteConfig } from '../site';
import {
	defaultLocale,
	isLocaleCode,
	localeCodes,
	localeMap,
	type LocaleCode,
	locales,
} from './locales';
import { getCannibalTargetId, isCannibalPageId } from '../seo-cannibal-map';

/** Canonical page identifiers shared across all locales. */
export type PageId =
	| 'home'
	| 'enlisted-esp'
	| 'enlisted-aimbot'
	| 'features'
	| 'pricing'
	| 'setup'
	| 'updates'
	| 'faq'
	| 'support'
	| 'undetected'
	| 'wallhack'
	| 'radar'
	| 'eac'
	| 'cheats-2026'
	| 'hacks'
	| 'cheat-download'
	| 'mod-menu'
	| 'soft-aim'
	| 'best-cheats'
	| 'aimbot-hack'
	| 'esp-hack'
	| 'unlock-all'
	| 'privacy'
	| 'refund'
	| 'terms';

/** English (official) paths — served at site root without /en/ prefix. */
export const englishPaths: Record<PageId, string> = {
	home: '/',
	'enlisted-esp': '/enlisted-esp/',
	'enlisted-aimbot': '/enlisted-aimbot/',
	features: '/features/',
	pricing: '/pricing/',
	setup: '/setup/',
	updates: '/updates/',
	faq: '/faq/',
	support: '/support/',
	undetected: '/undetected-enlisted-hacks/',
	wallhack: '/enlisted-wallhack/',
	radar: '/enlisted-vehicles/',
	'eac': '/eac-bypass/',
	'cheats-2026': '/enlisted-hacks-2026/',
	hacks: '/enlisted-hacks/',
	'cheat-download': '/enlisted-cheat-download/',
	'mod-menu': '/enlisted-mod-menu/',
	'soft-aim': '/enlisted-soft-aim/',
	'best-cheats': '/best-enlisted-hacks/',
	'aimbot-hack': '/enlisted-aimbot-hack/',
	'esp-hack': '/enlisted-esp-hack/',
	'unlock-all': '/enlisted-unlock-all/',
	privacy: '/privacy-policy/',
	refund: '/refund-policy/',
	terms: '/terms/',
};

/**
 * Localized URL slugs (path after /{lang}/).
 * English uses englishPaths at root; other locales use these slugs under /{lang}/.
 */
export const localizedSlugs: Record<PageId, Record<LocaleCode, string>> = {
	home: {
		en: '',
		es: '',
		fr: '',
		de: '',
		pt: '',
		it: '',
		nl: '',
		pl: '',
		ru: '',
		tr: '',
		ar: '',
		ja: '',
		ko: '',
		zh: '',
		hi: '',
		id: '',
		th: '',
		vi: '',
		uk: '',
		cs: '',
		ro: '',
		sv: '',
	},
	'enlisted-esp': {
		en: 'enlisted-esp',
		es: 'trucos-enlisted-esp',
		fr: 'triche-enlisted-esp',
		de: 'enlisted-esp-wallhack',
		pt: 'cheats-enlisted-esp',
		it: 'trucchi-enlisted-esp',
		nl: 'enlisted-esp-wallhack',
		pl: 'cheaty-enlisted-esp',
		ru: 'enlisted-esp-chity',
		tr: 'enlisted-esp-hile',
		ar: 'enlisted-esp-wallhack',
		ja: 'enlisted-esp-wallhack',
		ko: 'enlisted-esp-wallhack',
		zh: 'enlisted-esp-wallhack',
		hi: 'enlisted-esp-wallhack',
		id: 'enlisted-esp-wallhack',
		th: 'enlisted-esp-wallhack',
		vi: 'enlisted-esp-wallhack',
		uk: 'enlisted-esp-chity',
		cs: 'enlisted-esp-wallhack',
		ro: 'enlisted-esp-wallhack',
		sv: 'enlisted-esp-wallhack',
	},
	'enlisted-aimbot': {
		en: 'enlisted-aimbot',
		es: 'trucos-enlisted-aimbot',
		fr: 'triche-enlisted-aimbot',
		de: 'enlisted-aimbot',
		pt: 'cheats-enlisted-aimbot',
		it: 'trucchi-enlisted-aimbot',
		nl: 'enlisted-aimbot',
		pl: 'cheaty-enlisted-aimbot',
		ru: 'enlisted-aimbot-chity',
		tr: 'enlisted-aimbot-hile',
		ar: 'enlisted-aimbot',
		ja: 'enlisted-aimbot',
		ko: 'enlisted-aimbot',
		zh: 'enlisted-aimbot',
		hi: 'enlisted-aimbot',
		id: 'enlisted-aimbot',
		th: 'enlisted-aimbot',
		vi: 'enlisted-aimbot',
		uk: 'enlisted-aimbot-chity',
		cs: 'enlisted-aimbot',
		ro: 'enlisted-aimbot',
		sv: 'enlisted-aimbot',
	},
	features: {
		en: 'features',
		es: 'caracteristicas-trucos-enlisted',
		fr: 'fonctionnalites-triche-enlisted',
		de: 'escape-from-enlisted-hacks-funktionen',
		pt: 'recursos-cheats-enlisted',
		it: 'funzioni-trucchi-enlisted',
		nl: 'escape-from-enlisted-hacks-functies',
		pl: 'funkcje-cheatow-enlisted',
		ru: 'funkcii-chitov-enlisted',
		tr: 'enlisted-hile-ozellikleri',
		ar: 'escape-from-enlisted-hacks-features',
		ja: 'escape-from-enlisted-hacks-features',
		ko: 'escape-from-enlisted-hacks-features',
		zh: 'escape-from-enlisted-hacks-features',
		hi: 'escape-from-enlisted-hacks-features',
		id: 'escape-from-enlisted-hacks-features',
		th: 'escape-from-enlisted-hacks-features',
		vi: 'escape-from-enlisted-hacks-features',
		uk: 'funkcii-chitiv-enlisted',
		cs: 'escape-from-enlisted-hacks-funkce',
		ro: 'functii-cheats-enlisted',
		sv: 'escape-from-enlisted-hacks-funktioner',
	},
	pricing: {
		en: 'pricing',
		es: 'precios-trucos-enlisted',
		fr: 'prix-triche-enlisted',
		de: 'escape-from-enlisted-hacks-preise',
		pt: 'precos-cheats-enlisted',
		it: 'prezzi-trucchi-enlisted',
		nl: 'escape-from-enlisted-hacks-prijzen',
		pl: 'ceny-cheatow-enlisted',
		ru: 'ceny-chitov-enlisted',
		tr: 'enlisted-hile-fiyatlari',
		ar: 'escape-from-enlisted-hacks-pricing',
		ja: 'escape-from-enlisted-hacks-pricing',
		ko: 'escape-from-enlisted-hacks-pricing',
		zh: 'escape-from-enlisted-hacks-pricing',
		hi: 'escape-from-enlisted-hacks-pricing',
		id: 'escape-from-enlisted-hacks-pricing',
		th: 'escape-from-enlisted-hacks-pricing',
		vi: 'escape-from-enlisted-hacks-pricing',
		uk: 'ciny-chitiv-enlisted',
		cs: 'escape-from-enlisted-hacks-ceny',
		ro: 'preturi-cheats-enlisted',
		sv: 'escape-from-enlisted-hacks-priser',
	},
	setup: {
		en: 'setup',
		es: 'instalacion-trucos-enlisted',
		fr: 'installation-triche-enlisted',
		de: 'escape-from-enlisted-hacks-installation',
		pt: 'instalacao-cheats-enlisted',
		it: 'installazione-trucchi-enlisted',
		nl: 'escape-from-enlisted-hacks-installatie',
		pl: 'instalacja-cheatow-enlisted',
		ru: 'ustanovka-chitov-enlisted',
		tr: 'enlisted-hile-kurulum',
		ar: 'escape-from-enlisted-hacks-setup',
		ja: 'escape-from-enlisted-hacks-setup',
		ko: 'escape-from-enlisted-hacks-setup',
		zh: 'escape-from-enlisted-hacks-setup',
		hi: 'escape-from-enlisted-hacks-setup',
		id: 'escape-from-enlisted-hacks-setup',
		th: 'escape-from-enlisted-hacks-setup',
		vi: 'escape-from-enlisted-hacks-setup',
		uk: 'vstanovka-chitiv-enlisted',
		cs: 'escape-from-enlisted-hacks-instalace',
		ro: 'instalare-cheats-enlisted',
		sv: 'escape-from-enlisted-hacks-installation',
	},
	updates: {
		en: 'updates',
		es: 'actualizaciones-trucos-enlisted',
		fr: 'mises-a-jour-triche-enlisted',
		de: 'escape-from-enlisted-hacks-updates',
		pt: 'atualizacoes-cheats-enlisted',
		it: 'aggiornamenti-trucchi-enlisted',
		nl: 'escape-from-enlisted-hacks-updates',
		pl: 'aktualizacje-cheatow-enlisted',
		ru: 'obnovleniya-chitov-enlisted',
		tr: 'enlisted-hile-guncellemeleri',
		ar: 'escape-from-enlisted-hacks-updates',
		ja: 'escape-from-enlisted-hacks-updates',
		ko: 'escape-from-enlisted-hacks-updates',
		zh: 'escape-from-enlisted-hacks-updates',
		hi: 'escape-from-enlisted-hacks-updates',
		id: 'escape-from-enlisted-hacks-updates',
		th: 'escape-from-enlisted-hacks-updates',
		vi: 'escape-from-enlisted-hacks-updates',
		uk: 'onovlennya-chitiv-enlisted',
		cs: 'escape-from-enlisted-hacks-aktualizace',
		ro: 'actualizari-cheats-enlisted',
		sv: 'escape-from-enlisted-hacks-uppdateringar',
	},
	faq: {
		en: 'faq',
		es: 'preguntas-trucos-enlisted',
		fr: 'faq-triche-enlisted',
		de: 'escape-from-enlisted-hacks-faq',
		pt: 'faq-cheats-enlisted',
		it: 'faq-trucchi-enlisted',
		nl: 'escape-from-enlisted-hacks-faq',
		pl: 'faq-cheatow-enlisted',
		ru: 'faq-chitov-enlisted',
		tr: 'enlisted-hile-sss',
		ar: 'escape-from-enlisted-hacks-faq',
		ja: 'escape-from-enlisted-hacks-faq',
		ko: 'escape-from-enlisted-hacks-faq',
		zh: 'escape-from-enlisted-hacks-faq',
		hi: 'escape-from-enlisted-hacks-faq',
		id: 'escape-from-enlisted-hacks-faq',
		th: 'escape-from-enlisted-hacks-faq',
		vi: 'escape-from-enlisted-hacks-faq',
		uk: 'faq-chitiv-enlisted',
		cs: 'escape-from-enlisted-hacks-faq',
		ro: 'faq-cheats-enlisted',
		sv: 'escape-from-enlisted-hacks-faq',
	},
	support: {
		en: 'support',
		es: 'soporte-trucos-enlisted',
		fr: 'support-triche-enlisted',
		de: 'escape-from-enlisted-hacks-support',
		pt: 'suporte-cheats-enlisted',
		it: 'supporto-trucchi-enlisted',
		nl: 'escape-from-enlisted-hacks-support',
		pl: 'wsparcie-cheatow-enlisted',
		ru: 'podderzhka-chitov-enlisted',
		tr: 'enlisted-hile-destek',
		ar: 'escape-from-enlisted-hacks-support',
		ja: 'escape-from-enlisted-hacks-support',
		ko: 'escape-from-enlisted-hacks-support',
		zh: 'escape-from-enlisted-hacks-support',
		hi: 'escape-from-enlisted-hacks-support',
		id: 'escape-from-enlisted-hacks-support',
		th: 'escape-from-enlisted-hacks-support',
		vi: 'escape-from-enlisted-hacks-support',
		uk: 'pidtrymka-chitiv-enlisted',
		cs: 'escape-from-enlisted-hacks-podpora',
		ro: 'suport-cheats-enlisted',
		sv: 'escape-from-enlisted-hacks-support',
	},
	undetected: {
		en: 'undetected-enlisted-hacks',
		es: 'trucos-enlisted-indetectables',
		fr: 'triche-enlisted-indetectable',
		de: 'unentdeckte-escape-from-enlisted-hacks',
		pt: 'cheats-enlisted-indetectaveis',
		it: 'trucchi-enlisted-indetectabili',
		nl: 'undetected-enlisted-hacks',
		pl: 'niewykrywalne-cheats-enlisted',
		ru: 'nedecektiruemye-chity-enlisted',
		tr: 'tespit-edilemeyen-enlisted-hileleri',
		ar: 'undetected-enlisted-hacks',
		ja: 'undetected-enlisted-hacks',
		ko: 'undetected-enlisted-hacks',
		zh: 'undetected-enlisted-hacks',
		hi: 'undetected-enlisted-hacks',
		id: 'undetected-enlisted-hacks',
		th: 'undetected-enlisted-hacks',
		vi: 'undetected-enlisted-hacks',
		uk: 'nedecektovani-chity-enlisted',
		cs: 'undetected-enlisted-hacks',
		ro: 'cheats-enlisted-nedetectabile',
		sv: 'undetected-enlisted-hacks',
	},
	wallhack: {
		en: 'enlisted-wallhack',
		es: 'wallhack-trucos-enlisted',
		fr: 'wallhack-triche-enlisted',
		de: 'enlisted-wallhack',
		pt: 'wallhack-cheats-enlisted',
		it: 'wallhack-trucchi-enlisted',
		nl: 'enlisted-wallhack',
		pl: 'wallhack-cheatow-enlisted',
		ru: 'wallhack-chity-enlisted',
		tr: 'enlisted-wallhack-hile',
		ar: 'enlisted-wallhack',
		ja: 'enlisted-wallhack',
		ko: 'enlisted-wallhack',
		zh: 'enlisted-wallhack',
		hi: 'enlisted-wallhack',
		id: 'enlisted-wallhack',
		th: 'enlisted-wallhack',
		vi: 'enlisted-wallhack',
		uk: 'wallhack-chity-enlisted',
		cs: 'enlisted-wallhack',
		ro: 'wallhack-cheats-enlisted',
		sv: 'enlisted-wallhack',
	},
	radar: {
		en: 'enlisted-vehicles',
		es: 'radar-hack-trucos-enlisted',
		fr: 'radar-hack-triche-enlisted',
		de: 'enlisted-vehicles',
		pt: 'radar-hack-cheats-enlisted',
		it: 'radar-hack-trucchi-enlisted',
		nl: 'enlisted-vehicles',
		pl: 'radar-hack-cheatow-enlisted',
		ru: 'radar-hack-chity-enlisted',
		tr: 'enlisted-vehicles',
		ar: 'enlisted-vehicles',
		ja: 'enlisted-vehicles',
		ko: 'enlisted-vehicles',
		zh: 'enlisted-vehicles',
		hi: 'enlisted-vehicles',
		id: 'enlisted-vehicles',
		th: 'enlisted-vehicles',
		vi: 'enlisted-vehicles',
		uk: 'radar-hack-chity-enlisted',
		cs: 'enlisted-vehicles',
		ro: 'radar-hack-cheats-enlisted',
		sv: 'enlisted-vehicles',
	},
	'eac': {
		en: 'eac-bypass',
		es: 'eac-bypass-trucos',
		fr: 'eac-bypass-triche',
		de: 'eac-bypass',
		pt: 'eac-bypass-cheats',
		it: 'eac-bypass-trucchi',
		nl: 'eac-bypass',
		pl: 'eac-bypass-cheatow',
		ru: 'eac-bypass-chity',
		tr: 'eac-bypass',
		ar: 'eac-bypass',
		ja: 'eac-bypass',
		ko: 'eac-bypass',
		zh: 'eac-bypass',
		hi: 'eac-bypass',
		id: 'eac-bypass',
		th: 'eac-bypass',
		vi: 'eac-bypass',
		uk: 'eac-bypass-chity',
		cs: 'eac-bypass',
		ro: 'eac-bypass-cheats',
		sv: 'eac-bypass',
	},
	'cheats-2026': {
		en: 'enlisted-hacks-2026',
		es: 'trucos-enlisted-2026',
		fr: 'triche-enlisted-2026',
		de: 'enlisted-hacks-2026',
		pt: 'cheats-enlisted-2026',
		it: 'trucchi-enlisted-2026',
		nl: 'enlisted-hacks-2026',
		pl: 'cheaty-enlisted-2026',
		ru: 'chity-enlisted-2026',
		tr: 'enlisted-hileleri-2026',
		ar: 'enlisted-hacks-2026',
		ja: 'enlisted-hacks-2026',
		ko: 'enlisted-hacks-2026',
		zh: 'enlisted-hacks-2026',
		hi: 'enlisted-hacks-2026',
		id: 'enlisted-hacks-2026',
		th: 'enlisted-hacks-2026',
		vi: 'enlisted-hacks-2026',
		uk: 'chity-enlisted-2026',
		cs: 'enlisted-hacks-2026',
		ro: 'cheats-enlisted-2026',
		sv: 'enlisted-hacks-2026',
	},
	hacks: {
		en: 'enlisted-hacks',
		es: 'hacks-trucos-enlisted',
		fr: 'hacks-triche-enlisted',
		de: 'enlisted-hacks',
		pt: 'hacks-cheats-enlisted',
		it: 'hacks-trucchi-enlisted',
		nl: 'enlisted-hacks',
		pl: 'hacks-cheatow-enlisted',
		ru: 'haksy-chity-enlisted',
		tr: 'enlisted-hile-hacks',
		ar: 'enlisted-hacks',
		ja: 'enlisted-hacks',
		ko: 'enlisted-hacks',
		zh: 'enlisted-hacks',
		hi: 'enlisted-hacks',
		id: 'enlisted-hacks',
		th: 'enlisted-hacks',
		vi: 'enlisted-hacks',
		uk: 'haksy-chity-enlisted',
		cs: 'enlisted-hacks',
		ro: 'hacks-cheats-enlisted',
		sv: 'enlisted-hacks',
	},
	'cheat-download': {
		en: 'enlisted-cheat-download',
		es: 'descarga-trucos-enlisted',
		fr: 'telechargement-triche-enlisted',
		de: 'enlisted-cheat-download',
		pt: 'download-cheats-enlisted',
		it: 'download-trucchi-enlisted',
		nl: 'enlisted-cheat-download',
		pl: 'pobieranie-cheatow-enlisted',
		ru: 'skachat-chity-enlisted',
		tr: 'enlisted-hile-indir',
		ar: 'enlisted-cheat-download',
		ja: 'enlisted-cheat-download',
		ko: 'enlisted-cheat-download',
		zh: 'enlisted-cheat-download',
		hi: 'enlisted-cheat-download',
		id: 'enlisted-cheat-download',
		th: 'enlisted-cheat-download',
		vi: 'enlisted-cheat-download',
		uk: 'zavantazhennya-chitiv-enlisted',
		cs: 'enlisted-cheat-download',
		ro: 'descarcare-cheats-enlisted',
		sv: 'enlisted-cheat-download',
	},
	'mod-menu': {
		en: 'enlisted-mod-menu',
		es: 'menu-mod-trucos-enlisted',
		fr: 'menu-mod-triche-enlisted',
		de: 'enlisted-mod-menu',
		pt: 'menu-mod-cheats-enlisted',
		it: 'menu-mod-trucchi-enlisted',
		nl: 'enlisted-mod-menu',
		pl: 'menu-mod-cheatow-enlisted',
		ru: 'mod-menu-chity-enlisted',
		tr: 'enlisted-mod-menu',
		ar: 'enlisted-mod-menu',
		ja: 'enlisted-mod-menu',
		ko: 'enlisted-mod-menu',
		zh: 'enlisted-mod-menu',
		hi: 'enlisted-mod-menu',
		id: 'enlisted-mod-menu',
		th: 'enlisted-mod-menu',
		vi: 'enlisted-mod-menu',
		uk: 'mod-menu-chity-enlisted',
		cs: 'enlisted-mod-menu',
		ro: 'meniu-mod-cheats-enlisted',
		sv: 'enlisted-mod-menu',
	},
	'soft-aim': {
		en: 'enlisted-soft-aim',
		es: 'soft-aim-trucos-enlisted',
		fr: 'soft-aim-triche-enlisted',
		de: 'enlisted-soft-aim',
		pt: 'soft-aim-cheats-enlisted',
		it: 'soft-aim-trucchi-enlisted',
		nl: 'enlisted-soft-aim',
		pl: 'soft-aim-cheatow-enlisted',
		ru: 'soft-aim-chity-enlisted',
		tr: 'enlisted-soft-aim',
		ar: 'enlisted-soft-aim',
		ja: 'enlisted-soft-aim',
		ko: 'enlisted-soft-aim',
		zh: 'enlisted-soft-aim',
		hi: 'enlisted-soft-aim',
		id: 'enlisted-soft-aim',
		th: 'enlisted-soft-aim',
		vi: 'enlisted-soft-aim',
		uk: 'soft-aim-chity-enlisted',
		cs: 'enlisted-soft-aim',
		ro: 'soft-aim-cheats-enlisted',
		sv: 'enlisted-soft-aim',
	},
	'best-cheats': {
		en: 'best-enlisted-hacks',
		es: 'mejores-trucos-enlisted',
		fr: 'meilleures-triches-enlisted',
		de: 'beste-escape-from-enlisted-hacks',
		pt: 'melhores-cheats-enlisted',
		it: 'migliori-trucchi-enlisted',
		nl: 'beste-escape-from-enlisted-hacks',
		pl: 'najlepsze-cheats-enlisted',
		ru: 'luchshie-chity-enlisted',
		tr: 'en-iyi-enlisted-hileleri',
		ar: 'best-enlisted-hacks',
		ja: 'best-enlisted-hacks',
		ko: 'best-enlisted-hacks',
		zh: 'best-enlisted-hacks',
		hi: 'best-enlisted-hacks',
		id: 'best-enlisted-hacks',
		th: 'best-enlisted-hacks',
		vi: 'best-enlisted-hacks',
		uk: 'naykrashchi-chity-enlisted',
		cs: 'nejlepsi-escape-from-enlisted-hacks',
		ro: 'cele-mai-bune-cheats-enlisted',
		sv: 'basta-escape-from-enlisted-hacks',
	},
	'aimbot-hack': {
		en: 'enlisted-aimbot-hack',
		es: 'aimbot-hack-trucos-enlisted',
		fr: 'aimbot-hack-triche-enlisted',
		de: 'enlisted-aimbot-hack',
		pt: 'aimbot-hack-cheats-enlisted',
		it: 'aimbot-hack-trucchi-enlisted',
		nl: 'enlisted-aimbot-hack',
		pl: 'aimbot-hack-cheatow-enlisted',
		ru: 'aimbot-hack-chity-enlisted',
		tr: 'enlisted-aimbot-hack',
		ar: 'enlisted-aimbot-hack',
		ja: 'enlisted-aimbot-hack',
		ko: 'enlisted-aimbot-hack',
		zh: 'enlisted-aimbot-hack',
		hi: 'enlisted-aimbot-hack',
		id: 'enlisted-aimbot-hack',
		th: 'enlisted-aimbot-hack',
		vi: 'enlisted-aimbot-hack',
		uk: 'aimbot-hack-chity-enlisted',
		cs: 'enlisted-aimbot-hack',
		ro: 'aimbot-hack-cheats-enlisted',
		sv: 'enlisted-aimbot-hack',
	},
	'esp-hack': {
		en: 'enlisted-esp-hack',
		es: 'esp-hack-trucos-enlisted',
		fr: 'esp-hack-triche-enlisted',
		de: 'enlisted-esp-hack',
		pt: 'esp-hack-cheats-enlisted',
		it: 'esp-hack-trucchi-enlisted',
		nl: 'enlisted-esp-hack',
		pl: 'esp-hack-cheatow-enlisted',
		ru: 'esp-hack-chity-enlisted',
		tr: 'enlisted-esp-hack',
		ar: 'enlisted-esp-hack',
		ja: 'enlisted-esp-hack',
		ko: 'enlisted-esp-hack',
		zh: 'enlisted-esp-hack',
		hi: 'enlisted-esp-hack',
		id: 'enlisted-esp-hack',
		th: 'enlisted-esp-hack',
		vi: 'enlisted-esp-hack',
		uk: 'esp-hack-chity-enlisted',
		cs: 'enlisted-esp-hack',
		ro: 'esp-hack-cheats-enlisted',
		sv: 'enlisted-esp-hack',
	},
	'unlock-all': {
		en: 'enlisted-unlock-all',
		es: 'unlock-all-trucos-enlisted',
		fr: 'unlock-all-triche-enlisted',
		de: 'enlisted-unlock-all',
		pt: 'unlock-all-cheats-enlisted',
		it: 'unlock-all-trucchi-enlisted',
		nl: 'enlisted-unlock-all',
		pl: 'unlock-all-cheatow-enlisted',
		ru: 'unlock-all-chity-enlisted',
		tr: 'enlisted-unlock-all',
		ar: 'enlisted-unlock-all',
		ja: 'enlisted-unlock-all',
		ko: 'enlisted-unlock-all',
		zh: 'enlisted-unlock-all',
		hi: 'enlisted-unlock-all',
		id: 'enlisted-unlock-all',
		th: 'enlisted-unlock-all',
		vi: 'enlisted-unlock-all',
		uk: 'unlock-all-chity-enlisted',
		cs: 'enlisted-unlock-all',
		ro: 'unlock-all-cheats-enlisted',
		sv: 'enlisted-unlock-all',
	},
	privacy: {
		en: 'privacy-policy',
		es: 'politica-privacidad',
		fr: 'politique-confidentialite',
		de: 'datenschutz',
		pt: 'politica-privacidade',
		it: 'privacy-policy',
		nl: 'privacybeleid',
		pl: 'polityka-prywatnosci',
		ru: 'politika-konfidencialnosti',
		tr: 'gizlilik-politikasi',
		ar: 'privacy-policy',
		ja: 'privacy-policy',
		ko: 'privacy-policy',
		zh: 'privacy-policy',
		hi: 'privacy-policy',
		id: 'privacy-policy',
		th: 'privacy-policy',
		vi: 'privacy-policy',
		uk: 'polityka-konfidentsijnosti',
		cs: 'ochrana-osobnich-udaju',
		ro: 'politica-confidentialitate',
		sv: 'integritetspolicy',
	},
	refund: {
		en: 'refund-policy',
		es: 'politica-reembolso',
		fr: 'politique-remboursement',
		de: 'rueckerstattung',
		pt: 'politica-reembolso',
		it: 'politica-rimborso',
		nl: 'terugbetalingsbeleid',
		pl: 'polityka-zwrotow',
		ru: 'politika-vozvrata',
		tr: 'iade-politikasi',
		ar: 'refund-policy',
		ja: 'refund-policy',
		ko: 'refund-policy',
		zh: 'refund-policy',
		hi: 'refund-policy',
		id: 'refund-policy',
		th: 'refund-policy',
		vi: 'refund-policy',
		uk: 'polityka-povorennya',
		cs: 'refund-policy',
		ro: 'politica-rambursare',
		sv: 'aterbetalningspolicy',
	},
	terms: {
		en: 'terms',
		es: 'terminos-uso',
		fr: 'conditions-utilisation',
		de: 'nutzungsbedingungen',
		pt: 'termos-uso',
		it: 'termini-uso',
		nl: 'gebruiksvoorwaarden',
		pl: 'regulamin',
		ru: 'usloviya-ispolzovaniya',
		tr: 'kullanim-kosullari',
		ar: 'terms',
		ja: 'terms',
		ko: 'terms',
		zh: 'terms',
		hi: 'terms',
		id: 'terms',
		th: 'terms',
		vi: 'terms',
		uk: 'umovy-vykorystannya',
		cs: 'podminky-uziti',
		ro: 'termeni-utilizare',
		sv: 'anvandarvillkor',
	},
};

export const pageIds = Object.keys(englishPaths) as PageId[];

export function getLocalizedPath(pageId: PageId, locale: LocaleCode): string {
	if (locale === defaultLocale) {
		return englishPaths[pageId];
	}
	const slug = localizedSlugs[pageId][locale];
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

/** Map English root paths to the correct locale URL (for CTAs and inline links). */
export function localizeInternalHref(href: string, locale: LocaleCode): string {
	if (!href || href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('#')) {
		return href;
	}
	const trimmed = href.replace(/\/+$/, '') || '/';
	const withSlash = trimmed === '/' ? '/' : `${trimmed}/`;
	for (const pageId of pageIds) {
		const english = englishPaths[pageId];
		if (english === withSlash || english.replace(/\/+$/, '') === trimmed) {
			const targetId = getCannibalTargetId(pageId) as PageId;
			return getLocalizedPath(targetId, locale);
		}
	}
	return href;
}

/** Canonical absolute URL — always https apex with trailing slash (matches Layout.astro). */
export function buildCanonicalUrl(path: string): string {
	const normalized =
		!path || path === '/'
			? '/'
			: path.endsWith('/') || path.includes('.')
				? path
				: `${path}/`;
	return new URL(normalized, siteConfig.url).href;
}

export function absoluteLocalizedUrl(pageId: PageId, locale: LocaleCode): string {
	return buildCanonicalUrl(getLocalizedPath(pageId, locale));
}

export type HreflangAlternate = { hreflang: string; href: string };

/** Self-referential hreflang for single-locale pages (reviews, 404). */
export function getSelfHreflangAlternates(
	path: string,
	locale: LocaleCode = defaultLocale,
): HreflangAlternate[] {
	const href = buildCanonicalUrl(path);
	return [
		{ hreflang: localeMap[locale].hreflang, href },
		{ hreflang: 'x-default', href },
	];
}

export function getHreflangAlternates(pageId: PageId, currentLocale: LocaleCode = defaultLocale) {
	const resolvedId = (isCannibalPageId(pageId) ? getCannibalTargetId(pageId) : pageId) as PageId;
	const byLocale = localeCodes.map((code) => ({
		hreflang: localeMap[code].hreflang,
		href: absoluteLocalizedUrl(resolvedId, code),
		code,
	}));
	const self = byLocale.find((alt) => alt.code === currentLocale)!;
	const others = byLocale.filter((alt) => alt.code !== currentLocale);
	const xDefault = {
		hreflang: 'x-default' as const,
		href: absoluteLocalizedUrl(resolvedId, defaultLocale),
	};
	// Self-referential hreflang first — required by Google/Seobility for the active locale.
	return [
		{ hreflang: self.hreflang, href: self.href },
		...others.map(({ hreflang, href }) => ({ hreflang, href })),
		xDefault,
	];
}

export function resolvePageIdFromPath(path: string): PageId | undefined {
	const normalized = path.endsWith('/') ? path : `${path}/`;
	for (const id of pageIds) {
		if (englishPaths[id] === normalized) return id;
	}
	return undefined;
}

/** Parsed locale + page from any site URL (English root or /{lang}/…). */
export type PageContext = {
	locale: LocaleCode;
	pageId?: PageId;
	isBlogIndex?: boolean;
	blogSlug?: string;
};

function normalizePathname(pathname: string): string {
	if (!pathname || pathname === '/') return '/';
	if (pathname.includes('.') || pathname.endsWith('/')) return pathname;
	return `${pathname}/`;
}

/** Resolve locale and page/blog context from the current URL path. */
export function resolvePageContextFromPath(pathname: string): PageContext {
	const path = normalizePathname(pathname);

	if (path === '/') {
		return { locale: defaultLocale, pageId: 'home' };
	}

	const segments = path.split('/').filter(Boolean);
	let locale: LocaleCode = defaultLocale;
	let offset = 0;

	if (segments.length > 0 && isLocaleCode(segments[0]) && segments[0] !== defaultLocale) {
		locale = segments[0];
		offset = 1;
	}

	const rest = segments.slice(offset);

	if (rest.length === 0) {
		return { locale, pageId: 'home' };
	}

	if (rest[0] === 'blog') {
		if (rest.length === 1) {
			return { locale, isBlogIndex: true };
		}
		return { locale, blogSlug: rest[1] };
	}

	if (locale === defaultLocale) {
		return { locale, pageId: resolvePageIdFromPath(path) };
	}

	return { locale, pageId: resolvePageFromLocalizedPath(locale, rest[0]) };
}

/** Target URL for the same page in another locale (non-blog pages). */
export function getPageLocaleSwitchHref(context: PageContext, targetLocale: LocaleCode): string {
	if (context.pageId) {
		return getLocalizedPath(context.pageId, targetLocale);
	}
	return getLocalizedPath('home', targetLocale);
}

export function hreflangLinksXml(pageId: PageId, escapeXml: (v: string) => string): string {
	return getHreflangAlternates(pageId)
		.map(
			(alt) =>
				`    <xhtml:link rel="alternate" hreflang="${escapeXml(alt.hreflang)}" href="${escapeXml(alt.href)}"/>`,
		)
		.join('\n');
}

export function resolvePageFromLocalizedPath(
	locale: LocaleCode,
	slug: string | undefined,
): PageId | undefined {
	if (!slug) return 'home';
	for (const pageId of pageIds) {
		if (localizedSlugs[pageId][locale] === slug) return pageId;
	}
	return undefined;
}

/** Map Accept-Language header to preferred locale (region-aware). */
export function localeFromAcceptLanguage(header: string | null): LocaleCode {
	if (!header) return defaultLocale;
	const prefs = header
		.split(',')
		.map((part) => {
			const [tag, qPart] = part.trim().split(';');
			const q = qPart?.startsWith('q=') ? Number.parseFloat(qPart.slice(2)) : 1;
			return { tag: tag.toLowerCase(), q };
		})
		.sort((a, b) => b.q - a.q);

	for (const { tag } of prefs) {
		const primary = tag.split('-')[0];
		if (localeCodes.includes(primary as LocaleCode)) return primary as LocaleCode;
	}
	return defaultLocale;
}

export function getNavForLocale(locale: LocaleCode, labels: Record<string, string>) {
	const items: { label: string; href: string; pageId?: PageId }[] = [
		{ label: labels.home, href: getLocalizedPath('home', locale), pageId: 'home' },
	{ label: labels.hacks ?? 'Hacks', href: getLocalizedPath('hacks', locale), pageId: 'hacks' },
		{ label: labels.aimbot, href: getLocalizedPath('enlisted-aimbot', locale), pageId: 'enlisted-aimbot' },
		{ label: labels.esp, href: getLocalizedPath('enlisted-esp', locale), pageId: 'enlisted-esp' },
		{ label: 'Blog', href: locale === defaultLocale ? '/blog/' : `/${locale}/blog/` },
		{ label: labels.features, href: getLocalizedPath('features', locale), pageId: 'features' },
		{ label: labels.pricing, href: getLocalizedPath('pricing', locale), pageId: 'pricing' },
		{ label: labels.setup, href: getLocalizedPath('setup', locale), pageId: 'setup' },
		{ label: labels.updates, href: getLocalizedPath('updates', locale), pageId: 'updates' },
		{ label: labels.faq, href: getLocalizedPath('faq', locale), pageId: 'faq' },
	];
	return items;
}
