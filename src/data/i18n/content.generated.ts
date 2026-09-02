import type { LocaleCode } from './locales';

export type PageSection = { h2: string; paragraphs: string[]; list?: string[] };
export type PageContent = {
	title: string;
	description: string;
	h1: string;
	intro: string;
	imageAlt: string;
	galleryTitle: string;
	heroImage: string;
	sections: PageSection[];
	ctaPrimary: string;
	ctaSecondary?: string;
	ctaSecondaryHref?: string;
};
export type LocaleUi = {
	nav: { home: string; hacks: string; aimbot: string; esp: string; features: string; pricing: string; setup: string; updates: string; faq: string; buyNow: string };
	hero: { accent: string; accentShort: string; subtitle: string; subtitleShort: string; buyNow: string; seeFeatures: string };
	trust: { status: string; statusNote: string; statusShort: string; delivery: string; platform: string; antiCheat: string; antiCheatShort: string };
	product: { title: string; addToCart: string; monthly: string; lifetime: string; available: string; gameBadge: string; platformBadge: string; statusBadge: string };
	reviews: { title: string; subtitle: string; outOf: string; countLabel: string };
	common: { buyNow: string; readGuide: string; language: string; officialLanguageNote: string; relatedPages: string };
	footer: { explore: string; help: string; tagline: string };
	images: {
		hero: string; espWallhack: string; aimbotCombat: string; squadFight: string; playerEsp: string;
		headerArt: string; cheatsPackage: string; rebootFight: string; battleRoyale: string; battleRoyaleIsland: string;
	};
};
export type PageId = 'home' | 'enlisted-esp' | 'enlisted-aimbot' | 'features' | 'pricing' | 'setup' | 'updates' | 'faq' | 'support' | 'undetected' | 'wallhack' | 'radar' | 'eac' | 'cheats-2026' | 'hacks' | 'cheat-download' | 'mod-menu' | 'soft-aim' | 'best-cheats' | 'aimbot-hack' | 'esp-hack' | 'unlock-all' | 'privacy' | 'refund' | 'terms';

export const i18nContent: Record<LocaleCode, { ui: LocaleUi; pages: Record<PageId, PageContent> }> = {
		en: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Pricing",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Buy Now",
				},
				hero: {
					accent: "2026 — Undetected ESP, Aimbot & Wallhack",
					accentShort: "Undetected enlisted hacks 2026",
					subtitle: "Enlisted hacks with enlisted esp, radar hack and enlisted aimbot for Windows PC — Easy Anti-Cheat maintenance included.",
					subtitleShort: "Enlisted esp, radar & aimbot for PC",
					buyNow: "Buy Enlisted Hacks",
					seeFeatures: "See Features",
				},
				trust: {
					status: "Online",
					statusNote: "Enlisted Hacks — undetected enlisted hacks live for Enlisted on Windows PC.",
					statusShort: "Live",
					delivery: "Instant digital delivery",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat maintenance supported",
					antiCheatShort: "Easy Anti-Cheat supported",
				},
				product: {
					title: "Enlisted Hacks",
					addToCart: "Add to Cart",
					monthly: "Monthly",
					lifetime: "Lifetime",
					available: "Available now",
					gameBadge: "Enlisted",
					platformBadge: "Windows PC",
					statusBadge: "Undetected enlisted hacks",
				},
				reviews: {
					title: "What players say",
					subtitle: "Recent feedback from Enlisted Hacks buyers",
					outOf: "out of 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Buy Enlisted Hacks",
					readGuide: "Read guide",
					language: "Language",
					officialLanguageNote: "English is official; other locales are translated.",
					relatedPages: "Related pages",
				},
				footer: {
					explore: "Explore",
					help: "Help & legal",
					tagline: "Undetected Enlisted hacks for PC.\nESP, wallhack, radar & aimbot.",
				},
				images: {
					hero: "Enlisted Hacks hero — ESP and aimbot overlay in Enlisted",
					espWallhack: "Wallhack outlines showing enemy soldiers and AI soldiers through walls",
					aimbotCombat: "Soft aim assist overlay during an Enlisted raid",
					squadFight: "Enlisted Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Enlisted raid",
					headerArt: "Aimbot view and bone priority controls for Enlisted",
					cheatsPackage: "2D radar threat overlay for Enlisted",
					rebootFight: "Aimbot assist during a Enlisted firefight",
					battleRoyale: "Enlisted Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Enlisted",
				},
			},
			pages: {
				home: {
					title: "Enlisted Hacks 2026 | Undetected ESP, Aimbot & Wallhack",
					description: "Enlisted hacks for Windows PC — ESP, soft aim, radar, and Easy Anti-Cheat updates. Compare plans and buy.",
					h1: "Enlisted Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Enlisted Hacks is the undetected enlisted hacks package for Windows PC — built for Enlisted on Windows PC. Enlisted esp wallhack, 2D radar, and enlisted aimbot with Easy Anti-Cheat maintenance after every major patch.",
					imageAlt: "Enlisted Hacks homepage hero — ESP and aimbot for Enlisted",
					galleryTitle: "Enlisted Hacks gallery — ESP, Aimbot and wallhack visuals",
					ctaPrimary: "Buy Enlisted Hacks",
					ctaSecondary: "See all features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why players choose Enlisted hacks in 2026",
							paragraphs: [
								"Enlisted rewards map awareness. Enlisted Hacks combines ESP wallhack for enemy players and loot, radar-style threat cues, and configurable Aimbot so you can read fights before committing — on raid, scav-run, and competitive lobbies.",
								"Official seasons, patches, and anti-cheat updates come from <a href=\"https://www.escapefromenlisted.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted</a> and <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat Anti-Cheat</a>. We rebuild ESP, radar, and Aimbot modules when those patches require maintenance — then post status on the <a href=\"/updates/\">Updates page</a>.",
								"Licenses ship digitally after payment confirmation. Monthly ($35) and lifetime ($150) plans include Easy Anti-Cheat maintenance rebuilds when anti-cheat or game patches require updates.",
								"Start with the <a href=\"/enlisted-hacks/\">Enlisted hacks pillar</a>, <a href=\"/enlisted-esp/\">ESP guide</a>, <a href=\"/enlisted-aimbot/\">Aimbot controls</a>, and <a href=\"/enlisted-hacks/\">undetected status</a> pages if you are comparing tools before checkout.",
							],
						},
						{
							h2: "ESP wallhack, radar hack, and Aimbot in one license",
							paragraphs: [
								"Instead of stacking separate tools, Enlisted Hacks bundles player ESP wallhack, loot markers, 2D radar overlays, and Aimbot profiles in one undetected package built for PMC raids and scav-runs — covering both “enlisted hacks” and “escape from enlisted hacks” search intent.",
								"Browse the <a href=\"/enlisted-esp/\">ESP</a>, <a href=\"/enlisted-aimbot/\">Aimbot</a>, <a href=\"/enlisted-esp/\">wallhack</a>, and <a href=\"/enlisted-vehicles/\">radar</a> pages for control details — or jump to <a href=\"/pricing/\">Pricing</a> for monthly and lifetime options.",
								"Before patch days, check <a href=\"https://www.escapefromenlisted.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted Support</a> for Battlestate Games service health, then confirm our maintenance notes so you are not queueing on an outdated build.",
								"Ready to buy? Open <a href=\"/pricing/\">Pricing</a>, follow <a href=\"/setup/\">Setup</a> after delivery, and keep <a href=\"/faq/\">FAQ</a> / <a href=\"/support/\">Support</a> bookmarked for license questions.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-esp.webp",
				},
				"enlisted-esp": {
					title: "Enlisted ESP 2026 | Player Boxes & Wallhack",
					description: "Enlisted ESP for Windows PC — player boxes, loot markers, and distance readouts. Part of our undetected enlisted hacks for Enlisted.",
					h1: "Enlisted ESP — Player Boxes & Wallhack",
					intro: "Enlisted esp visibility tools for raid and scav-run. Read enemy squads, enemy soldiers, AI soldiers, loot, and distance before you commit — toggleable enlisted esp wallhack overlays bundled in our enlisted hacks package.",
					imageAlt: "Enlisted ESP player boxes and distance readouts in a raid",
					galleryTitle: "Enlisted ESP overlay visuals",
					ctaPrimary: "Buy Enlisted Hacks",
					ctaSecondary: "Enlisted wallhack guide",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "What Enlisted ESP solves in raids",
							paragraphs: [
								"Enlisted maps punish incomplete information. Enlisted Hacks ESP wallhack helps you spot enemy squads early, spot enemy soldiers and AI soldiers before they push your angle, and mark capture points worth the detour.",
								"On raid, scav-run, and competitive lobbies, that visibility gap is often the difference between a clean third-party and a wiped squad. ESP ships bundled with radar overlays and Aimbot in one license.",
								"Enlisted’s live seasons and map updates are published by Battlestate Games (<a href=\"https://www.escapefromenlisted.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted</a>). When POIs or loot rules shift, ESP categories stay useful because they track players and containers — not a single static landmark.",
							],
						},
						{
							h2: "Player, boss, and loot ESP wallhack categories",
							paragraphs: [
								"Toggle enemy player outlines, boss markers, extract cues, and loot pins so only raid-critical ESP wallhack overlays stay active during rotations.",
								"Distance readouts and snapline options help you control engagement range. Team and enemy colour coding supports PMC raids and scav-runs lobbies alike.",
								"Compare category detail on the <a href=\"/enlisted-esp/\">wallhack page</a> and pair visibility with the <a href=\"/enlisted-vehicles/\">radar hack</a> for flanks outside your FOV.",
							],
							list: [
								"Enemy player ESP outlines with distance",
								"Loot and container markers for faster rotations",
								"Boss and extract awareness cues",
								"Toggleable categories to reduce overlay noise",
							],
						},
						{
							h2: "Undetected ESP with Easy Anti-Cheat maintenance",
							paragraphs: [
								"Enlisted Hacks ESP wallhack is maintained for Enlisted with rebuilds after Easy Anti-Cheat patches. Check the <a href=\"/updates/\">Updates page</a> before you queue — no cheat guarantees permanent undetected status.",
								"Read <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat Anti-Cheat</a> for how anti-cheat updates ship, then cross-check our <a href=\"/updates/\">Easy Anti-Cheat bypass maintenance guide</a> after major patches.",
								"Checkout includes instant digital delivery for Windows 10 and 11. After purchase, follow the <a href=\"/setup/\">Setup guide</a> and tune overlays before your first raid.",
							],
						},
						{
							h2: "ESP next steps — Aimbot, pricing, and support",
							paragraphs: [
								"ESP alone wins information wars; Aimbot covers the firefight. Review <a href=\"/enlisted-aimbot/\">Aimbot controls</a> if you want one license for visibility and assist.",
								"Compare monthly ($35) and lifetime ($150) on <a href=\"/pricing/\">Pricing</a>, then keep <a href=\"/support/\">Support</a> ready if activation needs a human reply.",
								"Still researching? The <a href=\"/enlisted-hacks/\">Enlisted hacks pillar</a> and <a href=\"/enlisted-hacks/\">2026 buyer guide</a> summarize the full stack.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-radar.webp",
				},
				"enlisted-aimbot": {
					title: "Enlisted Aimbot 2026 | Soft Aim for Windows PC",
					description: "Enlisted aimbot with soft aim tuning for Windows PC. FOV, bone priority, and hotkeys bundled with ESP boxes in our enlisted hacks package.",
					h1: "Enlisted Aimbot — Soft Aim for Windows PC",
					intro: "Configurable Aimbot tools for Enlisted firefights. Smoothness, FOV, bone priority, and per-weapon profiles — bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Enlisted aimbot and soft aim controls on Windows PC",
					galleryTitle: "Enlisted Aimbot combat previews",
					ctaPrimary: "Buy Enlisted Hacks",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Aimbot tuned for Enlisted combat pace",
							paragraphs: [
								"Enlisted mixes long-range AR fights with close-quarters SMG pushes. Enlisted Hacks Aimbot includes smoothness, FOV, and sensitivity controls tuned for that pace — with hotkey toggles mid-match.",
								"Bone priority and target selection options cover closest player, lowest health, or highest-threat targets during squad fights and close-range scav fights.",
								"Weapon balance and season rules change via <a href=\"https://www.escapefromenlisted.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted</a>. Revisit Aimbot FOV and smoothness after major combat patches so assist still matches the live TTK windows.",
							],
						},
						{
							h2: "Per-weapon Aimbot profiles",
							paragraphs: [
								"Save separate Aimbot profiles for ARs, SMGs, and bolt-actions. Switch between long-range DMR fights and dorms clears without reopening menus every raid.",
								"Prefer softer tracking? Read the <a href=\"/enlisted-aimbot/\">soft aim guide</a>.",
								"Aimbot ships alongside <a href=\"/enlisted-esp/\">ESP wallhack</a> and <a href=\"/enlisted-vehicles/\">2D radar</a> in the same Enlisted Hacks license.",
							],
							list: [
								"Smoothness, FOV, and sensitivity sliders",
								"Bone priority and threat-based targeting",
								"Hotkeys to toggle Aimbot mid-match",
								"Per-weapon profile slots for AR / SMG / bolt-action",
							],
						},
						{
							h2: "Easy Anti-Cheat maintenance for undetected Aimbot",
							paragraphs: [
								"Enlisted Hacks rebuilds Aimbot behavior when Easy Anti-Cheat or major Enlisted patches land. Maintenance notes appear on the <a href=\"/updates/\">Updates page</a> so you know when a new build is live.",
								"Cross-check service health on <a href=\"https://www.escapefromenlisted.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted Support</a> and anti-cheat context on <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat Anti-Cheat</a>, then follow our <a href=\"/updates/\">Easy Anti-Cheat maintenance guide</a> before queueing on patch day.",
								"Responsible settings matter — undetected status requires ongoing maintenance, not set-and-forget configs. Start with conservative smoothness, then tune.",
							],
						},
						{
							h2: "Buy Aimbot with ESP — pricing and setup",
							paragraphs: [
								"Every plan includes Aimbot plus ESP and radar. Compare options on <a href=\"/pricing/\">Pricing</a>, then activate with the <a href=\"/setup/\">Setup guide</a>.",
								"Questions about delivery or profiles? Use <a href=\"/faq/\">FAQ</a> or email <a href=\"/support/\">Support</a> with your order ID.",
								"Want the full control list first? Open <a href=\"/features/\">Features</a> before checkout.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-aimbot.webp",
				},
				features: {
					title: "Enlisted Hacks Features | ESP, Soft Aim & Radar",
					description: "Full enlisted hacks feature list: ESP boxes, soft aim, radar, and toggles for Windows PC. Review controls before checkout.",
					h1: "Enlisted Hacks Features — Full Control List",
					intro: "Every ESP wallhack, radar hack, and Aimbot control included in the Enlisted Hacks package for Enlisted on Windows PC — with Easy Anti-Cheat maintenance after major patches.",
					imageAlt: "Enlisted Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Enlisted Hacks feature gallery",
					ctaPrimary: "Buy Enlisted Hacks",
					ctaSecondary: "View pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ESP wallhack and visibility features",
							paragraphs: [
								"Enemy player ESP wallhack, boss and extract awareness cues, loot and container markers, distance readouts, snaplines, and toggleable ESP categories for raid-critical overlays only.",
								"Team and enemy colour coding supports PMC raids and scav-runs. Deep-dive the <a href=\"/enlisted-esp/\">ESP page</a> and <a href=\"/enlisted-esp/\">wallhack guide</a> for category-level detail.",
								"Map and loot systems evolve with <a href=\"https://www.escapefromenlisted.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted</a> wipe and map updates — toggleable ESP categories keep overlays useful when POIs rotate.",
							],
						},
						{
							h2: "Radar hack and Aimbot controls",
							paragraphs: [
								"2D radar overlay with directional threat cues, configurable range for rotations and late-raid extracts, plus Aimbot smoothness, FOV, bone priority, hotkeys, and per-weapon profiles.",
								"All tools share in-client toggles so you can adjust ESP, radar, and Aimbot during live Enlisted sessions. See <a href=\"/enlisted-vehicles/\">radar</a> and <a href=\"/enlisted-aimbot/\">Aimbot</a> for settings walkthroughs.",
								"Prefer a menu-first workflow? The <a href=\"/enlisted-hacks/\">mod menu page</a> explains mid-match toggles without alt-tabbing.",
							],
						},
						{
							h2: "Licensing, delivery, and Easy Anti-Cheat maintenance",
							paragraphs: [
								"Monthly ($35) and lifetime ($150) licenses with instant digital delivery. Easy Anti-Cheat maintenance rebuilds publish on the <a href=\"/updates/\">Updates page</a> after anti-cheat or game patches.",
								"Monitor <a href=\"https://www.escapefromenlisted.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted Support</a> on patch days, then confirm rebuild notes before you queue. Setup and billing help lives on <a href=\"/support/\">Support</a> and support@enlistedhacks.net.",
								"Next step: compare plans on <a href=\"/pricing/\">Pricing</a> or read <a href=\"/enlisted-hacks/\">how undetected maintenance works</a>.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
				},
				pricing: {
					title: "Enlisted Hacks Pricing | $35/mo or $150 Life",
					description: "Enlisted hacks pricing: $35/month or $150 lifetime for ESP, soft aim, and radar on Windows PC. Instant delivery — pick a plan.",
					h1: "Enlisted Hacks Pricing — Monthly & Lifetime",
					intro: "Choose monthly or lifetime access to undetected Enlisted Hacks — ESP wallhack, radar hack, and Aimbot for Enlisted on Windows PC. Instant digital delivery after payment.",
					imageAlt: "Enlisted Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Enlisted Hacks package visuals",
					ctaPrimary: "Buy Enlisted Hacks",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Monthly and lifetime Enlisted Hacks plans",
							paragraphs: [
								"Monthly license: $35 USD for 30 days of full ESP wallhack, radar hack, and Aimbot access with Easy Anti-Cheat maintenance included during your term.",
								"Lifetime license: $150 USD for long-term access to the same undetected Enlisted Hacks package — ideal if you play Enlisted regularly across seasons.",
								"Both plans unlock the same feature stack described on <a href=\"/features/\">Features</a>. Choose monthly to test, or lifetime if you already know you want the full toolkit.",
							],
						},
						{
							h2: "What every plan includes",
							paragraphs: [
								"Player ESP wallhack, loot markers, 2D radar overlays, Aimbot controls, in-client toggles, and maintenance rebuilds after Easy Anti-Cheat or major Enlisted patches.",
								"Season calendars and client updates come from <a href=\"https://www.escapefromenlisted.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted</a>. Active licenses receive rebuild access when we publish maintenance on <a href=\"/updates/\">Updates</a>.",
								"Digital delivery starts after payment confirmation. Keep your order reference for <a href=\"/support/\">Support</a> requests and follow <a href=\"/setup/\">Setup</a> for first launch.",
							],
						},
						{
							h2: "Refund, billing, and buying checklist",
							paragraphs: [
								"Review the <a href=\"/refund-policy/\">Refund Policy</a> before purchase. For billing or delivery issues, contact Support with your order details.",
								"Prices are listed in USD. Availability is worldwide for Windows 10 and 11 PCs.",
								"Still comparing tools? Read <a href=\"/enlisted-hacks/\">Enlisted hacks</a>, <a href=\"/enlisted-hacks/\">undetected status</a>, and <a href=\"/faq/\">FAQ</a> before you checkout.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-raid.webp",
				},
				setup: {
					title: "Enlisted Hacks Setup | Windows PC Guide",
					description: "Set up enlisted hacks on Windows PC — activate ESP boxes, soft aim profiles, and . Check Easy Anti-Cheat updates before your first queue.",
					h1: "Enlisted Hacks Setup — Windows PC Guide",
					intro: "Install and configure Enlisted Hacks for Enlisted on Windows 10 or 11. Activate your license, load ESP wallhack and Aimbot profiles, and verify Easy Anti-Cheat maintenance status before queueing.",
					imageAlt: "Enlisted Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Enlisted Hacks setup visuals",
					ctaPrimary: "Buy Enlisted Hacks",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Before you install Enlisted Hacks",
							paragraphs: [
								"Confirm your order email and license details. Check the <a href=\"/updates/\">Updates page</a> for the latest Easy Anti-Cheat maintenance build before launching Enlisted.",
								"Also glance at <a href=\"https://www.escapefromenlisted.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted Support</a> if Battlestate Games services look unstable on patch day — a platform outage is not a license fault.",
								"Enlisted Hacks requires Windows 10 or 11. Close conflicting overlay software that may interfere with ESP wallhack or Aimbot toggles.",
							],
						},
						{
							h2: "Activate ESP wallhack and Aimbot profiles",
							paragraphs: [
								"Follow the delivery instructions in your license email. Load default ESP wallhack categories for enemy soldiers, AI soldiers, and loot — then tune radar range and Aimbot smoothness to your playstyle.",
								"Use in-client hotkeys to toggle ESP, radar, and Aimbot mid-match. Details for Easy Anti-Cheat module live on <a href=\"/enlisted-esp/\">ESP</a>, <a href=\"/enlisted-aimbot/\">Aimbot</a>, and <a href=\"/enlisted-hacks/\">mod menu</a>.",
								"Prefer a soft tracking feel? Start with the <a href=\"/enlisted-aimbot/\">soft aim</a> recommendations before raising aggressiveness.",
							],
						},
						{
							h2: "After Enlisted or Easy Anti-Cheat patches",
							paragraphs: [
								"When Battlestate Games ships a major Enlisted update or Easy Anti-Cheat patch, revisit Updates before queueing. Download maintenance rebuilds when posted.",
								"Official anti-cheat background: <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat Anti-Cheat</a>. Our practical workflow is documented on the <a href=\"/updates/\">Easy Anti-Cheat bypass page</a> and <a href=\"/enlisted-hacks/\">undetected guide</a>.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if activation fails after a patch — include Windows version and error details for faster replies.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-radar.webp",
				},
				updates: {
					title: "Enlisted Hacks Updates | Easy Anti-Cheat Maintenance Log",
					description: "Enlisted hacks update log: Easy Anti-Cheat rebuilds for ESP boxes, soft aim, and radar on Windows PC. Check status before queueing after patches.",
					h1: "Enlisted Hacks Updates — Maintenance Log",
					intro: "Track Easy Anti-Cheat maintenance and Enlisted patch rebuilds for the undetected ESP wallhack, radar hack, and Aimbot package. Check here before queueing after major updates.",
					imageAlt: "Enlisted Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Enlisted patch and maintenance visuals",
					ctaPrimary: "Buy Enlisted Hacks",
					ctaSecondary: "Undetected status guide",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Why the Updates page matters",
							paragraphs: [
								"Enlisted and Easy Anti-Cheat receive frequent patches. Enlisted Hacks publishes maintenance notes when ESP wallhack, radar, or Aimbot behavior needs a rebuild.",
								"Use <a href=\"https://www.escapefromenlisted.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted Support</a> for Battlestate Games platform health and this page for Enlisted Hacks build status — both matter on big update days.",
								"Checking this log before you queue reduces surprises after game days or seasonal launches on raid and scav-run.",
							],
						},
						{
							h2: "What maintenance entries cover",
							paragraphs: [
								"Entries note Easy Anti-Cheat compatibility status, rebuilt ESP wallhack overlays, radar range fixes, Aimbot tuning after weapon balance changes, and digital delivery of new builds to active licenses.",
								"Lifetime and monthly subscribers receive rebuild access during active license terms. See <a href=\"/pricing/\">Pricing</a> if you need to renew.",
								"For context on why rebuilds happen, read the <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> and <a href=\"/enlisted-hacks/\">undetected Enlisted hacks</a> explainer.",
							],
						},
						{
							h2: "Staying undetected after patches",
							paragraphs: [
								"No cheat guarantees permanent undetected status. Combine maintenance updates with responsible in-game settings and patch awareness.",
								"Follow season notes from <a href=\"https://www.escapefromenlisted.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted</a>, then confirm our rebuild is live before you queue.",
								"For urgent status questions after a Easy Anti-Cheat update, contact <a href=\"/support/\">Support</a> with your license tier and last played build version.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-esp.webp",
				},
				faq: {
					title: "Enlisted Hacks FAQ | ESP, Soft Aim & Radar Answers",
					description: "Enlisted hacks FAQ: ESP boxes, soft aim, Easy Anti-Cheat maintenance, and pricing for PC. Clear answers before you buy.",
					h1: "Enlisted Hacks FAQ — Common Questions",
					intro: "Answers about undetected Enlisted Hacks — ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance, checkout, and Enlisted compatibility on Windows PC.",
					imageAlt: "Enlisted Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "Enlisted Hacks FAQ visuals",
					ctaPrimary: "Buy Enlisted Hacks",
					ctaSecondary: "Contact support",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "What is Enlisted Hacks?",
							paragraphs: [
								"Enlisted Hacks is an undetected cheat package for Enlisted on Windows PC. It includes ESP wallhack, 2D radar-style awareness, and Aimbot controls with Easy Anti-Cheat maintenance updates.",
								"Packages cover raid and scav-run. Explore <a href=\"/features/\">Features</a> for the full control list and <a href=\"/enlisted-esp/\">ESP</a> / <a href=\"/enlisted-aimbot/\">Aimbot</a> for module detail.",
								"Enlisted itself is published by Battlestate Games (<a href=\"https://www.escapefromenlisted.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted</a>). Cheats are third-party tools and may violate Battlestate Games' rules — use is at your own risk.",
							],
						},
						{
							h2: "Are Enlisted Hacks undetected in 2026?",
							paragraphs: [
								"Enlisted Hacks is maintained with rebuilds after Easy Anti-Cheat and game patches. Check the <a href=\"/updates/\">Updates page</a> for current status — no cheat can guarantee permanent undetected operation.",
								"Read <a href=\"/enlisted-hacks/\">undetected Enlisted hacks</a> and the <a href=\"/updates/\">Easy Anti-Cheat guide</a> for the maintenance workflow.",
								"Responsible settings and reading maintenance notes before queueing are essential.",
							],
						},
						{
							h2: "Delivery, pricing, and support",
							paragraphs: [
								"Licenses deliver digitally after payment confirmation. Monthly is $35; lifetime is $150 USD — see <a href=\"/pricing/\">Pricing</a>.",
								"Contact support@enlistedhacks.net or the <a href=\"/support/\">Support page</a> with order details for setup or billing help. First launch steps are on <a href=\"/setup/\">Setup</a>.",
								"Refund eligibility is covered in the <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
				},
				support: {
					title: "Enlisted Hacks Support | Help & Contact",
					description: "Contact enlisted hacks support for licenses, ESP setup, soft aim profiles, and on Windows PC. Include your order ID for faster help.",
					h1: "Enlisted Hacks Support — Contact Us",
					intro: "Get help with Enlisted Hacks licenses, checkout, ESP wallhack setup, Aimbot profiles, and Easy Anti-Cheat maintenance for Enlisted on Windows PC.",
					imageAlt: "Enlisted Hacks support page for license and setup help",
					galleryTitle: "Enlisted Hacks support resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "When to contact support",
							paragraphs: [
								"Reach out for order issues, license activation failures, ESP wallhack or Aimbot setup questions, and post-patch problems after Easy Anti-Cheat maintenance rebuilds.",
								"Include your order ID, license tier (monthly or lifetime), Windows version, and a clear description of the issue.",
								"Many answers already live in <a href=\"/faq/\">FAQ</a>, <a href=\"/setup/\">Setup</a>, and <a href=\"/updates/\">Updates</a> — check those first for faster resolution.",
							],
						},
						{
							h2: "Response times and scope",
							paragraphs: [
								"Support requests are reviewed daily. Enlisted Hacks support covers delivery, billing, setup, and maintenance — not in-game coaching or account recovery for Battlestate Games bans.",
								"Account and game policy questions belong with Battlestate Games. We can help with license delivery and product configuration only.",
								"Check the Updates page and FAQ before opening a ticket — many post-patch questions are answered there.",
							],
						},
						{
							h2: "Self-service resources",
							paragraphs: [
								"Setup guide, Features list, Updates log, Refund Policy, and Terms of Use are linked from the footer. Easy Anti-Cheat bypass notes live on the dedicated <a href=\"/updates/\">Easy Anti-Cheat page</a>.",
								"Email: support@enlistedhacks.net",
								"Ready to purchase or renew? Open <a href=\"/pricing/\">Pricing</a>. Need feature detail first? See <a href=\"/features/\">Features</a>.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-raid.webp",
				},
				undetected: {
					title: "Undetected Enlisted Hacks 2026 | Easy Anti-Cheat Maintenance",
					description: "Undetected enlisted hacks with Easy Anti-Cheat maintenance for ESP boxes, soft aim, and radar on Windows PC. Check status before you queue.",
					h1: "Undetected Enlisted Hacks — Easy Anti-Cheat Maintenance",
					intro: "How Enlisted Hacks stays maintained for Enlisted after Easy Anti-Cheat patches — ESP wallhack, radar hack, and Aimbot rebuilds for Windows PC.",
					imageAlt: "Enlisted Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected Enlisted Hacks visuals",
					ctaPrimary: "Buy Enlisted Hacks",
					ctaSecondary: "Easy Anti-Cheat bypass guide",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "What undetected means for Enlisted Hacks",
							paragraphs: [
								"Undetected Enlisted Hacks means the package is actively maintained against Easy Anti-Cheat and major Enlisted patches — not that detection is impossible forever.",
								"Rebuilds target ESP wallhack overlays, radar behavior, and Aimbot signatures after Easy Anti-Cheat security updates.",
								"Anti-cheat technology is documented by <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat Anti-Cheat</a>; Enlisted client updates ship through <a href=\"https://www.escapefromenlisted.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted</a>. Undetected status is an ongoing process tied to those releases.",
							],
						},
						{
							h2: "Easy Anti-Cheat maintenance workflow",
							paragraphs: [
								"When Easy Anti-Cheat or Enlisted updates ship, the team assesses ESP, radar, and Aimbot modules, publishes status on the <a href=\"/updates/\">Updates page</a>, and delivers rebuilt builds to active licenses.",
								"On patch mornings, also check <a href=\"https://www.escapefromenlisted.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted Support</a> for launcher outages that can look like product failures.",
								"Deep technical workflow: <a href=\"/updates/\">Easy Anti-Cheat bypass Enlisted guide</a>. Feature stack: <a href=\"/features/\">Features</a>.",
							],
						},
						{
							h2: "Responsible use and next steps",
							paragraphs: [
								"Combine maintenance with conservative in-game settings. Read the <a href=\"/faq/\">FAQ</a> and Updates log regularly — undetected status is not a one-time promise.",
								"Lifetime and monthly plans include rebuild access during active terms — see <a href=\"/pricing/\">Pricing</a>.",
								"New buyers should also read <a href=\"/enlisted-hacks/\">Enlisted hacks 2026</a> and complete <a href=\"/setup/\">Setup</a> after delivery.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-wallhack.webp",
				},
				wallhack: {
					title: "Enlisted Wallhack 2026 | ESP Boxes & Visibility",
					description: "Enlisted wallhack ESP with player boxes and loot markers for Windows PC. Undetected enlisted hacks — learn overlays and buy.",
					h1: "Enlisted Wallhack — ESP Boxes & Visibility",
					intro: "Enlisted wallhack ESP for Enlisted — see players, loot, bosses, and containers through toggleable wallhack overlays built for PMC raids and scav-runs.",
					imageAlt: "Enlisted wallhack visibility through walls in a raid",
					galleryTitle: "Enlisted wallhack ESP gallery",
					ctaPrimary: "Buy Enlisted Hacks",
					ctaSecondary: "Enlisted ESP page",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Wallhack ESP vs raw aim tools",
							paragraphs: [
								"A Enlisted wallhack focuses on information — player outlines, loot pins, boss threat cues — rather than automatic aiming. Enlisted Hacks bundles wallhack ESP with radar and optional Aimbot in one license.",
								"Toggle categories so only the wallhack overlays you need stay active during rotations and extract holds.",
								"For the broader ESP keyword page see <a href=\"/enlisted-esp/\">Enlisted ESP</a>; for combat assist see <a href=\"/enlisted-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "Map coverage for wallhack ESP",
							paragraphs: [
								"Wallhack overlays support raid, scav-run, and competitive lobbies with distance readouts and snaplines for engagement control.",
								"Season maps and POI changes are announced via <a href=\"https://www.escapefromenlisted.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted</a>. Wallhack remains useful because it tracks entities, not fixed landmarks alone.",
								"Pair wallhack awareness with <a href=\"/enlisted-vehicles/\">radar hack</a> cues for flanks during building and rooftop fights.",
							],
						},
						{
							h2: "Undetected wallhack maintenance",
							paragraphs: [
								"ESP wallhack modules rebuild after Easy Anti-Cheat patches. Follow the <a href=\"/updates/\">Updates page</a> and complete checkout for instant license delivery on Windows PC.",
								"Learn the full maintenance story on <a href=\"/enlisted-hacks/\">undetected Enlisted hacks</a> and <a href=\"/updates/\">Easy Anti-Cheat bypass</a>.",
								"Ready to buy? Compare <a href=\"/pricing/\">Pricing</a> or continue to the <a href=\"/enlisted-esp/\">ESP hack</a> landing for alternate search wording.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-wallhack.webp",
				},
				radar: {
					title: "Enlisted Radar Hack 2026 | 2D Threat Overlay",
					description: "Enlisted radar hack for flank awareness on Windows PC. Bundled with ESP boxes, soft aim, and radar in our enlisted hacks package.",
					h1: "Enlisted Radar Hack — 2D Threat Awareness",
					intro: "2D radar-style overlay for Enlisted — directional threat cues for nearby players outside your line of sight, bundled with ESP wallhack and Aimbot.",
					imageAlt: "Enlisted 2D radar overlay showing nearby threats",
					galleryTitle: "Enlisted radar hack visuals",
					ctaPrimary: "Buy Enlisted Hacks",
					ctaSecondary: "See ESP wallhack",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Why radar hack matters in Enlisted",
							paragraphs: [
								"raids fights happen in three dimensions — rooftops, windows, and flanks. A 2D radar overlay shows nearby player threats outside direct line of sight so you can reposition before a third party.",
								"Enlisted Hacks radar complements <a href=\"/enlisted-esp/\">ESP wallhack</a> markers during squad pushes and extract camp fights.",
								"Mode rules and seasonal changes come from <a href=\"https://www.escapefromenlisted.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted</a>. Radar range remains configurable when map scale or mobility meta shifts.",
							],
						},
						{
							h2: "Configurable radar range",
							paragraphs: [
								"Adjust radar range for early rotations versus tight extract holds. Directional cues highlight flanks during building clears and flank pushes across raid and scav-run.",
								"Toggle radar alongside ESP and Aimbot with in-client hotkeys during live matches — see the <a href=\"/enlisted-hacks/\">mod menu</a> page.",
								"Combat follow-up lives on <a href=\"/enlisted-aimbot/\">Aimbot</a> when you convert radar info into a fight.",
							],
						},
						{
							h2: "Maintenance and licensing",
							paragraphs: [
								"Radar hack modules receive Easy Anti-Cheat maintenance rebuilds with the full Enlisted Hacks package. Monthly and lifetime licenses include digital delivery — see <a href=\"/pricing/\">Pricing</a>.",
								"Check <a href=\"/updates/\">Updates</a> after major Enlisted patches before relying on previous radar configs.",
								"New to the stack? Start at <a href=\"/features/\">Features</a> or <a href=\"/enlisted-hacks/\">undetected status</a>.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-radar.webp",
				},
				eac: {
					title: "Easy Anti-Cheat Bypass Enlisted | Enlisted Hacks Maintenance",
					description: "How enlisted hacks rebuild after Easy Anti-Cheat patches — ESP boxes, soft aim, and radar maintenance for Windows PC. Read before queueing.",
					h1: "Easy Anti-Cheat Bypass — Enlisted Hacks Maintenance",
					intro: "Understand Easy Anti-Cheat maintenance for Enlisted Hacks — how ESP wallhack, radar hack, and Aimbot rebuild after Enlisted security updates.",
					imageAlt: "Enlisted Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat maintenance visuals",
					ctaPrimary: "Buy Enlisted Hacks",
					ctaSecondary: "Check updates",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat overview",
							paragraphs: [
								"Easy Anti-Cheat is Battlestate Games' anti-cheat for Enlisted on PC (see <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat Anti-Cheat</a>). Security updates can affect ESP wallhack, radar, and Aimbot behavior — requiring maintenance rebuilds for undetected packages.",
								"Enlisted Hacks monitors Easy Anti-Cheat patch notes and Enlisted seasonal updates from <a href=\"https://www.escapefromenlisted.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted</a> to schedule module reviews.",
								"“Easy Anti-Cheat bypass” in our wording means timely maintenance — not a permanent free pass around anti-cheat.",
							],
						},
						{
							h2: "What happens after a Easy Anti-Cheat patch",
							paragraphs: [
								"The team tests ESP overlays, radar signatures, and Aimbot profiles against the new build, publishes status on <a href=\"/updates/\">Updates</a>, and ships rebuilt packages to active licenses.",
								"Confirm Battlestate Games service health on <a href=\"https://www.escapefromenlisted.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted Support</a> if the launcher or matchmaking fails during the same window.",
								"Avoid queueing on old builds after major patch days until maintenance notes confirm a new release. Related reading: <a href=\"/enlisted-hacks/\">undetected Enlisted hacks</a>.",
							],
						},
						{
							h2: "No permanent bypass guarantee",
							paragraphs: [
								"Easy Anti-Cheat bypass in practice means timely maintenance. Read the undetected guide, <a href=\"/faq/\">FAQ</a>, and Updates log before every session.",
								"Contact <a href=\"/support/\">Support</a> if activation fails immediately after a posted rebuild.",
								"Buying for the first time? Compare <a href=\"/pricing/\">Pricing</a> and finish <a href=\"/setup/\">Setup</a> only after Updates shows a live build.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-aimbot.webp",
				},
				"cheats-2026": {
					title: "Enlisted Hacks 2026 | ESP Soft Aim & Radar",
					description: "Best enlisted hacks 2026: ESP boxes, soft aim, and radar for Windows PC. Undetected enlisted hacks with Easy Anti-Cheat maintenance — compare and buy.",
					h1: "Enlisted Hacks 2026 — ESP, Soft Aim & Radar",
					intro: "The 2026 Enlisted Hacks package for Enlisted — undetected ESP wallhack, radar hack, and Aimbot with Easy Anti-Cheat maintenance, instant delivery, and Windows PC support.",
					imageAlt: "Enlisted Hacks product overview for Enlisted",
					galleryTitle: "Enlisted Hacks 2026 gallery",
					ctaPrimary: "Buy Enlisted Hacks",
					ctaSecondary: "Compare features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Why enlisted hacks buyers choose Enlisted Hacks in 2026",
							paragraphs: [
								"2026 seasons bring new maps, weapons, and Easy Anti-Cheat updates. Enlisted Hacks bundles ESP wallhack, radar hack, and Aimbot with active maintenance — not a stale prior-year build.",
								"Track official season messaging on <a href=\"https://www.escapefromenlisted.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted</a>, then use our <a href=\"/updates/\">Updates log</a> for product rebuild timing.",
								"Monthly ($35) and lifetime ($150) plans cover raid and scav-run loops — see <a href=\"/pricing/\">Pricing</a>.",
							],
						},
						{
							h2: "Full feature stack for 2026 buyers",
							paragraphs: [
								"Player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, in-client toggles, and post-patch rebuilds — one license instead of stacking separate tools.",
								"Deep links: <a href=\"/enlisted-hacks/\">Enlisted hacks pillar</a>, <a href=\"/enlisted-esp/\">ESP</a>, <a href=\"/enlisted-aimbot/\">Aimbot</a>, <a href=\"/enlisted-esp/\">wallhack</a>, <a href=\"/enlisted-vehicles/\">radar</a>, <a href=\"/enlisted-hacks/\">undetected</a>.",
								"Instant digital delivery after checkout confirmation worldwide.",
							],
						},
						{
							h2: "Before you buy in 2026",
							paragraphs: [
								"Read the <a href=\"/enlisted-hacks/\">Enlisted hacks</a> pillar, Features, Pricing, Setup, and Updates pages. Check undetected status notes after every major patch — responsible use and maintenance awareness matter.",
								"Also compare the <a href=\"/enlisted-hacks/\">Enlisted hacks</a> checklist, <a href=\"/blog/enlisted-hacks-2026-whats-new/\">2026 blog guide</a>, and <a href=\"/faq/\">FAQ</a>.",
								"Support is available at support@enlistedhacks.net via the <a href=\"/support/\">Support page</a>.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-esp.webp",
				},
				hacks: {
					title: "Enlisted Hacks 2026 | Undetected ESP Aimbot Guide",
					description: "Enlisted hacks for Windows PC: undetected ESP wallhack, radar hack, and Aimbot with Easy Anti-Cheat maintenance. Compare enlisted hacks options and buy the full package.",
					h1: "Enlisted Hacks — Undetected ESP, Aimbot & Wallhack",
					intro: "Enlisted hacks for raid and scav-run combine ESP wallhack visibility, 2D radar-style threat cues, and Aimbot controls in one undetected Windows PC license — maintained after Easy Anti-Cheat patches. This is the pillar guide for enlisted hacks in 2026.",
					imageAlt: "Enlisted Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Enlisted hacks gallery — ESP, Aimbot, wallhack",
					ctaPrimary: "Buy Enlisted Hacks",
					ctaSecondary: "See undetected guide",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "What Enlisted hacks include in 2026",
							paragraphs: [
								"Players searching for Enlisted hacks usually want visibility and combat tools without stacking separate downloads. Enlisted Hacks bundles player ESP wallhack, loot markers, 2D radar overlays, and configurable Aimbot in one maintained package — the same toolkit often called enlisted hacks.",
								"Coverage spans raid and scav-run with in-client toggles for live matches. Monthly ($35) and lifetime ($150) licenses unlock the full stack.",
								"Official game updates come from <a href=\"https://www.escapefromenlisted.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted</a>; our hacks package tracks those releases via the <a href=\"/updates/\">Updates page</a>. Cross-check platform health on <a href=\"https://www.escapefromenlisted.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted Support</a> before patch-day queues.",
							],
						},
						{
							h2: "How this Enlisted hacks pillar fits nearby pages",
							paragraphs: [
								"Use this pillar for the core product overview. For year-specific buying notes, see the <a href=\"/enlisted-hacks/\">enlisted hacks 2026</a> and <a href=\"/enlisted-hacks/\">Enlisted hacks</a> pages cover buyer comparisons in cheats wording.",
								"Deep-dive modules: <a href=\"/enlisted-esp/\">Enlisted ESP</a>, <a href=\"/enlisted-aimbot/\">Enlisted Aimbot</a>, <a href=\"/enlisted-esp/\">wallhack</a>, <a href=\"/enlisted-vehicles/\">radar hack</a>, and <a href=\"/enlisted-aimbot/\">soft aim</a>.",
								"Blog guides expand Easy Anti-Cheat keyword: <a href=\"/blog/enlisted-hacks-complete-guide-2026/\">hacks complete guide</a>, <a href=\"/blog/escape-from-enlisted-hacks-buyers-guide/\">cheats buyers guide</a>, and <a href=\"/blog/undetected-enlisted-hacks-eac/\">undetected Easy Anti-Cheat notes</a>.",
							],
						},
						{
							h2: "Enlisted hacks vs single-feature tools",
							paragraphs: [
								"Standalone hacks often cover only wallhack or only aim assist. Enlisted Hacks maps the full raid loop: read enemy squads, track bosses and containers, spot flanks on radar, and tune Aimbot per weapon class.",
								"Compare the <a href=\"/enlisted-esp/\">ESP</a>, <a href=\"/enlisted-aimbot/\">Aimbot</a>, and <a href=\"/features/\">Features</a> pages — or review <a href=\"/pricing/\">Pricing</a> for monthly and lifetime licenses.",
								"Related landings: <a href=\"/setup/\">cheat download</a>, <a href=\"/enlisted-hacks/\">mod menu</a>, <a href=\"/enlisted-aimbot/\">aimbot</a>, <a href=\"/enlisted-esp/\">ESP</a>.",
							],
						},
						{
							h2: "Undetected Enlisted hacks with Easy Anti-Cheat maintenance",
							paragraphs: [
								"Undetected Enlisted hacks require rebuilds after Easy Anti-Cheat and major Enlisted patches. Check Updates before queueing — maintenance notes confirm when a new build is live. No package can promise permanent undetected status.",
								"See <a href=\"https://www.eac.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Easy Anti-Cheat Anti-Cheat</a> for anti-cheat background and our <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> for the practical workflow. Pair with <a href=\"/enlisted-hacks/\">undetected Enlisted hacks</a> for status language buyers expect.",
								"Digital delivery runs after checkout for Windows 10 and 11 PCs worldwide. After purchase, follow <a href=\"/setup/\">Setup</a> and keep <a href=\"/support/\">Support</a> ready with your order ID.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-raid.webp",
				},
				"cheat-download": {
					title: "Enlisted Hack Download 2026 | Instant Access",
					description: "Enlisted hack download with instant license delivery — ESP boxes, soft aim, and radar for Windows PC. Buy, activate, and play.",
					h1: "Enlisted Hack Download — Instant License Delivery",
					intro: "How Enlisted hack download works for Enlisted — digital license delivery after payment confirmation, with ESP wallhack, radar hack, and Aimbot access on Windows PC.",
					imageAlt: "Enlisted Hacks download and install delivery flow",
					galleryTitle: "Enlisted hack download visuals",
					ctaPrimary: "Buy Enlisted Hacks",
					ctaSecondary: "Setup guide",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "How Enlisted hack download delivery works",
							paragraphs: [
								"After checkout confirms payment, Enlisted Hacks license details arrive digitally by email. No physical shipment — access begins once activation instructions are delivered.",
								"Keep your order confirmation and license email ready for the <a href=\"/setup/\">Setup guide</a> and Support requests.",
								"If Battlestate Games services are down, check <a href=\"https://www.escapefromenlisted.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted Support</a> before assuming a download failure.",
							],
						},
						{
							h2: "What your download unlocks",
							paragraphs: [
								"Every Enlisted hack download includes player ESP wallhack, loot and container markers, 2D radar overlays, Aimbot profiles, and in-client toggles for PMC raids and scav-runs.",
								"Monthly ($35) and lifetime ($150) plans share the same feature stack — compare options on the <a href=\"/pricing/\">Pricing page</a>.",
								"Feature detail: <a href=\"/features/\">Features</a>. Module pages: <a href=\"/enlisted-esp/\">ESP</a>, <a href=\"/enlisted-aimbot/\">Aimbot</a>.",
							],
						},
						{
							h2: "After purchase — setup and updates",
							paragraphs: [
								"Follow Setup to activate ESP wallhack and Aimbot on Windows 10 or 11. When Enlisted or Easy Anti-Cheat patches ship, check the <a href=\"/updates/\">Updates page</a> for maintenance rebuilds.",
								"Contact <a href=\"/support/\">Support</a> with your order ID if delivery or activation fails within 24 hours of purchase.",
								"Also read <a href=\"/enlisted-hacks/\">undetected status</a> so you know what “download ready” means after a patch.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-raid.webp",
				},
				"mod-menu": {
					title: "Enlisted Mod Menu 2026 | ESP & Soft Aim Toggles",
					description: "Enlisted mod menu for in-match toggles — ESP boxes, soft aim, radar, and on Windows PC. Undetected enlisted hacks package.",
					h1: "Enlisted Mod Menu — In-Client Control Panel",
					intro: "Enlisted mod menu controls for Enlisted — toggle ESP wallhack categories, radar range, and Aimbot profiles mid-match without leaving your Enlisted session on Windows PC.",
					imageAlt: "Enlisted Hacks in-game menu controls",
					galleryTitle: "Enlisted mod menu gallery",
					ctaPrimary: "Buy Enlisted Hacks",
					ctaSecondary: "Full feature list",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What a Enlisted mod menu controls",
							paragraphs: [
								"A Enlisted mod menu is the in-client panel where you enable ESP wallhack overlays, adjust radar range, and switch Aimbot profiles during live matches. Enlisted Hacks keeps those toggles accessible with hotkeys.",
								"Toggle player outlines, loot markers, vehicle cues, and per-weapon Aimbot settings without alt-tabbing out of Enlisted.",
								"Control deep-dives: <a href=\"/enlisted-esp/\">ESP</a>, <a href=\"/enlisted-aimbot/\">Aimbot</a>, <a href=\"/enlisted-vehicles/\">radar</a>.",
							],
						},
						{
							h2: "Mod menu categories for PMC raids and scav-runs",
							paragraphs: [
								"Separate ESP wallhack categories for players, loot, containers, and bosses let you reduce overlay noise during rotations and extract holds.",
								"Radar hack range and Aimbot smoothness adjust from the same mod menu — useful when ${EXT.enlisted} seasons change fight distances and mobility.",
								"Soft tracking players should start with <a href=\"/enlisted-aimbot/\">soft aim</a> profiles before aggressive FOV.",
							],
						},
						{
							h2: "Maintained mod menu after Easy Anti-Cheat patches",
							paragraphs: [
								"Enlisted mod menu behavior is rebuilt when Easy Anti-Cheat or major Enlisted updates land. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> before queueing on patch days.",
								"Checkout with instant digital delivery for monthly and lifetime licenses — see <a href=\"/pricing/\">Pricing</a>.",
								"Need install steps? Open <a href=\"/setup/\">Setup</a> after your license email arrives.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-radar.webp",
				},
				"soft-aim": {
					title: "Enlisted Soft Aim 2026 | Smooth Aimbot Settings",
					description: "Enlisted soft aim settings for natural tracking on Windows PC. Smoothness, FOV, and bone priority — included in our enlisted hacks with ESP boxes.",
					h1: "Enlisted Soft Aim — Smooth Aimbot Controls",
					intro: "Enlisted soft aim settings for Enlisted — configurable Aimbot smoothness, FOV, bone priority, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Enlisted soft aim FOV and smoothness settings",
					galleryTitle: "Enlisted soft aim gallery",
					ctaPrimary: "Buy Enlisted Hacks",
					ctaSecondary: "Aimbot controls",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "What Enlisted soft aim means",
							paragraphs: [
								"Enlisted soft aim refers to Aimbot behavior tuned for smooth, natural-looking tracking rather than instant snap. Enlisted Hacks exposes smoothness, FOV, and sensitivity sliders so you control how assist feels in BR firefights.",
								"Bone priority and target selection cover closest player, lowest health, or highest-threat targets during squad fights.",
								"Full Aimbot documentation: <a href=\"/enlisted-aimbot/\">Enlisted Aimbot</a>. Alternate wording: <a href=\"/enlisted-aimbot/\">aimbot hack</a>.",
							],
						},
						{
							h2: "Soft aim profiles per weapon class",
							paragraphs: [
								"Save separate soft aim profiles for ARs, SMGs, and bolt-actions. Switch between long-range AR beams and close-quarters room clears with hotkeys mid-match.",
								"Weapon TTKs shift with <a href=\"https://www.escapefromenlisted.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted</a> balance patches — retune smoothness after major combat updates.",
								"Soft aim ships alongside <a href=\"/enlisted-esp/\">ESP wallhack</a> and <a href=\"/enlisted-vehicles/\">2D radar</a> overlays.",
							],
						},
						{
							h2: "Undetected soft aim with Easy Anti-Cheat maintenance",
							paragraphs: [
								"Aimbot modules rebuild after Easy Anti-Cheat patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — responsible settings and maintenance awareness matter for undetected play.",
								"Monthly and lifetime licenses checkout with digital delivery on Windows PC — <a href=\"/pricing/\">Pricing</a>.",
								"Activation help: <a href=\"/setup/\">Setup</a> · status questions: <a href=\"/support/\">Support</a>.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
				},
				"best-cheats": {
					title: "Best Enlisted Hacks 2026 | Buyer Guide",
					description: "Best enlisted hacks for 2026: ESP boxes, soft aim, and Easy Anti-Cheat maintenance on Windows PC. Use this checklist before checkout.",
					h1: "Best Enlisted Hacks — 2026 Buyer Guide",
					intro: "Compare the Enlisted hacks for Enlisted in 2026 — undetected ESP wallhack, radar hack, and Aimbot in one maintained package with Easy Anti-Cheat rebuilds and instant delivery.",
					imageAlt: "Enlisted Hacks overview for Enlisted on PC",
					galleryTitle: "Best Enlisted hacks gallery",
					ctaPrimary: "Buy Enlisted Hacks",
					ctaSecondary: "Compare pricing",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "What makes the Enlisted hacks in 2026",
							paragraphs: [
								"The Enlisted hacks combine active Easy Anti-Cheat maintenance, a full ESP wallhack and radar stack, configurable Aimbot, and clear update communication — not a stale build from a prior season.",
								"Enlisted Hacks covers raid and scav-run with in-client toggles and post-patch rebuilds.",
								"Verify the live game is healthy via <a href=\"https://www.escapefromenlisted.com/support\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted Support</a>, then confirm our <a href=\"/updates/\">Updates</a> note before you judge any package “best.”",
							],
						},
						{
							h2: "Best Enlisted hacks feature checklist",
							paragraphs: [
								"Look for player ESP wallhack, loot markers, 2D radar overlays, Aimbot profiles, hotkey toggles, and documented maintenance after Enlisted patches.",
								"Review <a href=\"/features/\">Features</a>, <a href=\"/enlisted-hacks/\">undetected status</a>, and <a href=\"/enlisted-hacks/\">Enlisted hacks 2026</a> before checkout — monthly ($35) and lifetime ($150) plans available.",
								"Module pages worth opening: <a href=\"/enlisted-esp/\">ESP</a>, <a href=\"/enlisted-aimbot/\">Aimbot</a>, <a href=\"/enlisted-hacks/\">hacks</a>.",
							],
						},
						{
							h2: "Buying the Enlisted hacks safely",
							paragraphs: [
								"Purchase through secure checkout for instant digital delivery. Read Setup, FAQ, and Updates pages before your first queue — and contact Support with order details if activation needs help.",
								"No cheat guarantees permanent undetected status — combine maintenance with responsible in-game settings.",
								"Remember: using cheats can violate Battlestate Games terms. Proceed only if you accept that risk.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-esp.webp",
				},
				"aimbot-hack": {
					title: "Enlisted Aimbot Hack 2026 | Soft Aim Assist",
					description: "Enlisted aimbot hack with soft aim for Windows PC. FOV, bone priority, and hotkeys — bundled with ESP boxes in our enlisted hacks package.",
					h1: "Enlisted Aimbot Hack — Soft Aim Assist",
					intro: "Enlisted aimbot hack tools for Enlisted — smoothness, FOV, bone priority, per-weapon profiles, and hotkey toggles bundled with ESP wallhack and radar in one undetected license.",
					imageAlt: "Enlisted aimbot hack controls and bone priority",
					galleryTitle: "Enlisted aimbot hack gallery",
					ctaPrimary: "Buy Enlisted Hacks",
					ctaSecondary: "Aimbot settings",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Enlisted aimbot hack vs visibility tools",
							paragraphs: [
								"A Enlisted aimbot hack focuses on assisted targeting during firefights — while ESP wallhack and radar handle map awareness. Enlisted Hacks bundles aimbot hack modules with visibility overlays in one license.",
								"Smoothness, FOV, and sensitivity controls tune assist for Enlisted combat pace across PMC raids and scav-runs.",
								"Prefer softer tracking language? See <a href=\"/enlisted-aimbot/\">soft aim</a>. Full settings: <a href=\"/enlisted-aimbot/\">Aimbot page</a>.",
							],
						},
						{
							h2: "Aimbot hack controls and hotkeys",
							paragraphs: [
								"Bone priority options cover head, chest, or dynamic targets. Hotkeys enable or disable aimbot hack mid-match without opening menus during rotations or late-raid extracts.",
								"Per-weapon profile slots separate long-range AR tuning from close-quarters SMG settings.",
								"Balance patches from <a href=\"https://www.escapefromenlisted.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted</a> can change ideal FOV — retune after major weapon updates.",
							],
						},
						{
							h2: "Undetected aimbot hack maintenance",
							paragraphs: [
								"Aimbot hack signatures rebuild after Easy Anti-Cheat updates. Follow the <a href=\"/updates/\">Updates page</a> and <a href=\"/updates/\">Easy Anti-Cheat bypass guide</a> before queueing after patch days.",
								"Checkout with instant digital delivery for Windows 10 and 11 — <a href=\"/pricing/\">Pricing</a>.",
								"Pair with <a href=\"/enlisted-esp/\">ESP</a> for the full information + assist loop.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
				},
				"esp-hack": {
					title: "Enlisted ESP Hack 2026 | Player Boxes & Loot",
					description: "Enlisted ESP hack with player boxes and loot markers for Windows PC. Undetected enlisted hacks with — see overlays and buy.",
					h1: "Enlisted ESP Hack — Player Boxes Guide",
					intro: "Enlisted ESP hack overlays for Enlisted — player outlines, boss threat cues, loot and container markers with distance readouts across raid and scav-run.",
					imageAlt: "Enlisted ESP hack boxes and loot markers",
					galleryTitle: "Enlisted ESP hack gallery",
					ctaPrimary: "Buy Enlisted Hacks",
					ctaSecondary: "ESP controls",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "What a Enlisted ESP hack shows",
							paragraphs: [
								"A Enlisted ESP hack renders enemy player outlines, vehicle positions, and loot pins through walls and terrain — closing the information gap before you commit to a fight.",
								"Distance readouts and snapline options help control engagement range during squad pushes and third-party scenarios.",
								"Canonical visibility guide: <a href=\"/enlisted-esp/\">Enlisted ESP</a>. Wallhack wording: <a href=\"/enlisted-esp/\">wallhack</a>.",
							],
						},
						{
							h2: "ESP hack categories for raids",
							paragraphs: [
								"Toggle player ESP hack, loot markers, chest pins, and vehicle cues independently so only raid-critical overlays stay active during rotations.",
								"Team and enemy colour coding supports PMC raids and scav-runs.",
								"POI and loot changes publish through <a href=\"https://www.escapefromenlisted.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted</a> — keep categories toggled to what the current map rewards.",
							],
						},
						{
							h2: "Undetected ESP hack with Easy Anti-Cheat maintenance",
							paragraphs: [
								"ESP hack modules rebuild after Easy Anti-Cheat and Enlisted patches. Check the <a href=\"/updates/\">Updates page</a> before queueing — pair ESP hack awareness with <a href=\"/enlisted-vehicles/\">radar hack</a> for flank reads.",
								"Licenses deliver digitally after checkout on Windows PC — see <a href=\"/pricing/\">Pricing</a>.",
								"Install steps: <a href=\"/setup/\">Setup</a>. Status questions: <a href=\"/enlisted-hacks/\">undetected guide</a>.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-wallhack.webp",
				},
				"unlock-all": {
					title: "Enlisted Unlock All 2026 | What It Really Means",
					description: "Enlisted unlock all explained vs real enlisted hacks — ESP boxes, soft aim, and radar for Windows PC. Know what you are buying.",
					h1: "Enlisted Unlock All — What Players Search For",
					intro: "Enlisted unlock all is a common search term for Enlisted — this page clarifies what unlock-all tools claim versus the ESP wallhack, radar hack, and Aimbot tools Enlisted Hacks actually provides on Windows PC.",
					imageAlt: "Enlisted Hacks license features overview",
					galleryTitle: "Enlisted unlock all guide visuals",
					ctaPrimary: "Buy Enlisted Hacks",
					ctaSecondary: "See features",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "What Enlisted unlock all usually means",
							paragraphs: [
								"Enlisted unlock all searches often refer to instant access to weapons, camos, skins, or battle pass tiers. Those claims differ from visibility and combat-assist tools like ESP wallhack and Aimbot.",
								"Enlisted Hacks focuses on in-match awareness — player ESP, loot markers, radar overlays, and configurable Aimbot — not account-wide cosmetic unlocks.",
								"Cosmetics and wipe progression items are sold through <a href=\"https://www.escapefromenlisted.com/\" target=\"_blank\" rel=\"noopener noreferrer\">Enlisted</a>. Be wary of unlock-all downloads that promise free skins — they are often scams.",
							],
						},
						{
							h2: "Visibility tools vs unlock-all claims",
							paragraphs: [
								"ESP wallhack helps you spot enemy squads, bosses, and capture points during live matches. Radar hack adds flank awareness; Aimbot covers combat assist with smoothness and hotkey controls.",
								"For loadout planning during a match, loot and container markers speed map rotations — see the <a href=\"/enlisted-esp/\">ESP</a> and <a href=\"/features/\">Features</a> pages for the full tool list.",
								"Related: <a href=\"/enlisted-hacks/\">Enlisted hacks</a> and <a href=\"/enlisted-hacks/\">Enlisted hacks</a>.",
							],
						},
						{
							h2: "Buying Enlisted Hacks for the right reasons",
							paragraphs: [
								"If you need undetected ESP wallhack, radar hack, and Aimbot for Enlisted on Windows PC, compare <a href=\"/pricing/\">Pricing</a> and read the <a href=\"/setup/\">Setup guide</a> before checkout.",
								"Check the <a href=\"/updates/\">Updates page</a> after Easy Anti-Cheat patches — maintenance rebuilds publish for active licenses.",
								"Questions? <a href=\"/faq/\">FAQ</a> and <a href=\"/support/\">Support</a> cover delivery and configuration — not cosmetic unlocks.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-radar.webp",
				},
				privacy: {
					title: "Privacy Policy | Enlisted Hacks",
					description: "Privacy policy for Enlisted Hacks. How we handle support emails, order data, and checkout for enlisted hacks licenses on enlistedhacks.net.",
					h1: "Privacy Policy",
					intro: "How Enlisted Hacks handles information when you browse enlistedhacks.net or contact support about a Enlisted license.",
					imageAlt: "Enlisted Hacks privacy policy page",
					galleryTitle: "Enlisted Hacks legal resources",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms of use",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we may collect",
							paragraphs: [
								"We may collect contact details you send by email, order references needed to resolve support requests, and basic technical data used to operate and secure the website.",
								"We do not sell personal data. Checkout payment details are processed by the checkout provider — review their privacy terms for transaction data.",
							],
							list: [
								"Contact details you send by email",
								"Order references for support requests",
								"Basic technical data for site security",
							],
						},
						{
							h2: "How information is used",
							paragraphs: [
								"Information is used to respond to support requests, process order issues, improve site reliability, and meet legal obligations when required.",
								"Analytics may use aggregated traffic data without identifying individual Enlisted Hacks customers.",
							],
						},
						{
							h2: "Your choices and contact",
							paragraphs: [
								"You may request correction or deletion of support email data by contacting support@enlistedhacks.net with your request details.",
								"Policy updates publish on this page. Continued use of enlistedhacks.net after updates means you accept the revised policy. Also see <a href=\"/terms/\">Terms of Use</a> and <a href=\"/refund-policy/\">Refund Policy</a>.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-aimbot.webp",
				},
				refund: {
					title: "Refund Policy | Enlisted Hacks",
					description: "Refund policy for Enlisted Hacks. Digital delivery terms and eligibility for enlisted hacks packages with ESP, soft aim, and radar.",
					h1: "Refund Policy",
					intro: "Refund terms for Enlisted Hacks licenses — ESP wallhack, radar hack, and Aimbot packages purchased through checkout for Enlisted.",
					imageAlt: "Enlisted Hacks refund policy page",
					galleryTitle: "Enlisted Hacks billing resources",
					ctaPrimary: "Contact support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery and eligibility",
							paragraphs: [
								"Enlisted Hacks licenses deliver digitally after payment confirmation. Because access begins immediately, refunds are limited to cases outlined below.",
								"Submit refund requests within 24 hours of purchase with your order ID and reason.",
							],
						},
						{
							h2: "When refunds may be approved",
							paragraphs: [
								"Duplicate charges, failed delivery despite confirmed payment, or technical activation failures verified by support may qualify for review.",
								"Refund decisions are final. Chargebacks without contacting support first may result in license revocation. See also <a href=\"/terms/\">Terms of Use</a>.",
							],
						},
						{
							h2: "How to request a refund",
							paragraphs: [
								"Email support@enlistedhacks.net with subject \"Refund Request\", your order ID, purchase date, and issue summary — or use the <a href=\"/support/\">Support page</a>.",
								"Approved refunds process back to the original payment method when possible. Pricing details live on <a href=\"/pricing/\">Pricing</a>.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-raid.webp",
				},
				terms: {
					title: "Terms of Use 2026 | Enlisted Hacks Rules",
					description: "Terms of use for enlistedhacks.net and Enlisted Hacks licenses. Usage rules, anti-cheat risk, and liability for Windows PC cheats.",
					h1: "Terms of Use",
					intro: "Terms governing use of enlistedhacks.net and Enlisted Hacks licenses for Enlisted on Windows PC.",
					imageAlt: "Enlisted Hacks terms of use page",
					galleryTitle: "Enlisted Hacks legal pages",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy policy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance and license scope",
							paragraphs: [
								"By purchasing or using Enlisted Hacks you agree to these terms. Licenses grant personal use of ESP wallhack, radar, and Aimbot tools for Enlisted on Windows PC only.",
								"Sharing, reselling, or reverse-engineering the package violates these terms and may revoke access.",
							],
						},
						{
							h2: "Risk and anti-cheat disclaimer",
							paragraphs: [
								"Using cheats in Enlisted may violate Battlestate Games terms and result in account penalties. Enlisted Hacks provides maintenance but does not guarantee undetected status or account safety.",
								"You assume all risk. We are not liable for bans, data loss, or damages arising from product use. See also <a href=\"/enlisted-hacks/\">undetected status</a>.",
							],
						},
						{
							h2: "Changes and governing law",
							paragraphs: [
								"We may update these terms by posting revisions on this page. Continued use after changes constitutes acceptance.",
								"Contact support@enlistedhacks.net for questions. Related policies: <a href=\"/privacy-policy/\">Privacy</a> and <a href=\"/refund-policy/\">Refunds</a>.",
							],
						},
					],
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
				},
			},
		},
		es: {
			ui: {
				nav: {
					home: "Inicio",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funciones",
					pricing: "Precios",
					setup: "Instalación",
					updates: "Actualizaciones",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Trucos Enlisted indetectables",
					accentShort: "Enlisted Hacks",
					subtitle: "ESP wallhack, radar hack y Aimbot para Enlisted en PC Windows — mantenimiento Easy Anti-Cheat incluido.",
					subtitleShort: "ESP, radar y Aimbot para Enlisted PC",
					buyNow: "Comprar ahora",
					seeFeatures: "Ver funciones",
				},
				trust: {
					status: "En línea",
					statusNote: "El paquete Enlisted Hacks está activo para Enlisted en PC Windows.",
					statusShort: "Activo",
					delivery: "Entrega digital instantánea",
					platform: "Windows 10 y 11",
					antiCheat: "Mantenimiento Easy Anti-Cheat incluido",
					antiCheatShort: "Easy Anti-Cheat incluido",
				},
				product: {
					title: "Enlisted Hacks",
					addToCart: "Añadir al carrito",
					monthly: "Mensual",
					lifetime: "De por vida",
					available: "Disponible ahora",
					gameBadge: "Enlisted",
					platformBadge: "PC Windows",
					statusBadge: "Paquete indetectable",
				},
				reviews: {
					title: "Lo que dicen los jugadores",
					subtitle: "Comentarios recientes de compradores de Enlisted Hacks",
					outOf: "de 5",
					countLabel: "reseñas",
				},
				common: {
					buyNow: "Comprar ahora",
					readGuide: "Leer guía",
					language: "Idioma",
					officialLanguageNote: "El inglés es el idioma oficial. Otras versiones están traducidas para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ayuda y legal",
					tagline: "ESP, wallhack, radar y Aimbot indetectables para Enlisted — checkout en Zadeyo.",
				},
				images: {
					hero: "Enlisted Hacks hero — ESP and aimbot overlay in Enlisted",
					espWallhack: "Wallhack outlines showing enemy soldiers and AI soldiers through walls",
					aimbotCombat: "Soft aim assist overlay during an Enlisted raid",
					squadFight: "Enlisted Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Enlisted raid",
					headerArt: "Aimbot view and bone priority controls for Enlisted",
					cheatsPackage: "2D radar threat overlay for Enlisted",
					rebootFight: "Aimbot assist during a Enlisted firefight",
					battleRoyale: "Enlisted Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Enlisted",
				},
			},
			pages: {
				home: {
					title: "Enlisted Hacks 2026 | ESP, Wallhack y Aimbot",
					description: "Trucos Enlisted indetectables para Enlisted en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Easy Anti-Cheat. Entrega digital",
					h1: "Enlisted Hacks — ESP, Wallhack y Aimbot indetectables",
					intro: "Paquete undetected para Enlisted en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Easy Anti-Cheat tras cada parche.",
					imageAlt: "Enlisted ESP player tags hack",
					galleryTitle: "Galería Enlisted Hacks — ESP, Aimbot y wallhack",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por qué eligen Enlisted Hacks en 2026",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Ideal para leer escuadrones enemigos en BR y scav-run.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "ESP wallhack, radar y Aimbot en una licencia",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Una licencia en lugar de herramientas separadas.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
					],
				},
				"enlisted-esp": {
					title: "ESP Enlisted | Cajas de jugador y wallhack",
					description: "ESP Enlisted: player boxes, loot markers, and wallhack overlays. entrega digital instantánea. indetectables — Windows PC.",
					h1: "ESP Enlisted",
					intro: "Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. ESP Enlisted.",
					imageAlt: "Enlisted ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "ESP Enlisted",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@enlistedhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"enlisted-aimbot": {
					title: "Aimbot Enlisted | Controles soft aim",
					description: "Aimbot Enlisted: soft aim, FOV, and per-weapon Aimbot profiles. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Aimbot Enlisted",
					intro: "Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Aimbot Enlisted.",
					imageAlt: "Enlisted aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Aimbot Enlisted",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@enlistedhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				features: {
					title: "Funciones | Lista completa de funciones",
					description: "Funciones: ESP, soft aim, radar controls. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Funciones",
					intro: "Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Funciones.",
					imageAlt: "Enlisted Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funciones",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funciones",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. ESP, soft aim, radar controls.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@enlistedhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				pricing: {
					title: "Precios | Mensual y de por vida",
					description: "Precios: $35 monthly or $150 lifetime licenses. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Precios",
					intro: "Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Precios.",
					imageAlt: "Enlisted Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Precios",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Precios",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@enlistedhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				setup: {
					title: "Instalación | Guía de instalación PC",
					description: "Instalación: Windows PC activation and first-launch setup. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Instalación",
					intro: "Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Instalación.",
					imageAlt: "Enlisted Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalación",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalación",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Windows PC activation and first-launch setup.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@enlistedhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				updates: {
					title: "Actualizaciones | Registro Easy Anti-Cheat",
					description: "Actualizaciones: Easy Anti-Cheat patch status and rebuild notes. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Actualizaciones",
					intro: "Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Actualizaciones.",
					imageAlt: "Enlisted Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Actualizaciones",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Actualizaciones",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@enlistedhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Preguntas frecuentes",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. entrega digital instantánea. indetectables — Windows PC.",
					h1: "FAQ",
					intro: "Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. FAQ.",
					imageAlt: "Enlisted Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@enlistedhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				support: {
					title: "Soporte | Ayuda y contacto",
					description: "Soporte: order help and license support contact. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soporte",
					intro: "Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Soporte.",
					imageAlt: "Enlisted Hacks support page for license and setup help",
					galleryTitle: "Soporte",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Soporte",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. order help and license support contact.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@enlistedhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				undetected: {
					title: "Trucos indetectables | Estado indetectable",
					description: "Trucos indetectables: undetected maintenance after Easy Anti-Cheat patches. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos indetectables",
					intro: "Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Trucos indetectables.",
					imageAlt: "Enlisted Hacks undetected status overview for Windows PC",
					galleryTitle: "Trucos indetectables",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Trucos indetectables",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@enlistedhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Enlisted | Visibilidad ESP",
					description: "Wallhack Enlisted: wallhack ESP for players, loot, and distance. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Wallhack Enlisted",
					intro: "Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Wallhack Enlisted.",
					imageAlt: "Enlisted wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Enlisted",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Wallhack Enlisted",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. wallhack ESP for players, loot, and distance.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@enlistedhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D de amenazas",
					description: "Radar hack: 2D radar cues for flanks and rotations. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Radar hack",
					intro: "Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Radar hack.",
					imageAlt: "Enlisted 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. 2D radar cues for flanks and rotations.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@enlistedhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Mantenimiento de parches",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Enlisted hacks. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "Enlisted Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. how Easy Anti-Cheat updates are handled for Enlisted hacks.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@enlistedhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Trucos Enlisted 2026 | Guía del comprador",
					description: "Trucos Enlisted 2026: 2026 Enlisted hacks checklist before checkout. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos Enlisted 2026",
					intro: "Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Trucos Enlisted 2026.",
					imageAlt: "Enlisted Hacks product overview for Enlisted",
					galleryTitle: "Trucos Enlisted 2026",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Trucos Enlisted 2026",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. 2026 Enlisted hacks checklist before checkout.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@enlistedhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				hacks: {
					title: "Trucos Enlisted | Guía ESP y Aimbot",
					description: "Trucos Enlisted: the Enlisted hacks pillar for ESP and Aimbot. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Trucos Enlisted",
					intro: "Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Trucos Enlisted.",
					imageAlt: "Enlisted Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Trucos Enlisted",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Trucos Enlisted",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. the Enlisted hacks pillar for ESP and Aimbot.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@enlistedhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descarga Enlisted Hacks | Acceso instantáneo",
					description: "Descarga Enlisted Hacks: digital license download after payment. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Descarga Enlisted Hacks",
					intro: "Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Descarga Enlisted Hacks.",
					imageAlt: "Enlisted Hacks download and install delivery flow",
					galleryTitle: "Descarga Enlisted Hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descarga Enlisted Hacks",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. digital license download after payment.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@enlistedhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menú mod Enlisted | Controles en partida",
					description: "Menú mod Enlisted: in-client ESP and soft aim toggles. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Menú mod Enlisted",
					intro: "Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Menú mod Enlisted.",
					imageAlt: "Enlisted Hacks in-game menu controls",
					galleryTitle: "Menú mod Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menú mod Enlisted",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. in-client ESP and soft aim toggles.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@enlistedhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Enlisted | Ajustes soft aim",
					description: "Soft aim Enlisted: smooth soft aim settings for Windows PC. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Soft aim Enlisted",
					intro: "Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Soft aim Enlisted.",
					imageAlt: "Enlisted soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Soft aim Enlisted",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. smooth soft aim settings for Windows PC.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@enlistedhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Mejores trucos Enlisted | Lista de compra",
					description: "Mejores trucos Enlisted: what to compare before buying Enlisted hacks. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Mejores trucos Enlisted",
					intro: "Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Mejores trucos Enlisted.",
					imageAlt: "Enlisted Hacks overview for Enlisted on PC",
					galleryTitle: "Mejores trucos Enlisted",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Mejores trucos Enlisted",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. what to compare before buying Enlisted hacks.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@enlistedhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Enlisted | Asistencia soft aim",
					description: "Hack aimbot Enlisted: undetected Aimbot hack assist for Enlisted. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack aimbot Enlisted",
					intro: "Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Hack aimbot Enlisted.",
					imageAlt: "Enlisted aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Enlisted",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. undetected Aimbot hack assist for Enlisted.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@enlistedhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Enlisted | Cajas y loot",
					description: "Hack ESP Enlisted: ESP hack boxes, loot pins, and distance. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Hack ESP Enlisted",
					intro: "Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Hack ESP Enlisted.",
					imageAlt: "Enlisted ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Enlisted",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Hack ESP Enlisted",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@enlistedhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Enlisted | Qué significa",
					description: "Unlock all Enlisted: unlock-all searches vs real ESP and Aimbot tools. entrega digital instantánea. indetectables — Windows PC.",
					h1: "Unlock all Enlisted",
					intro: "Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Unlock all Enlisted.",
					imageAlt: "Enlisted Hacks license features overview",
					galleryTitle: "Unlock all Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver funciones",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Enlisted",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "indetectables",
							paragraphs: [
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "entrega digital instantánea",
							paragraphs: [
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
								"Contacta support@enlistedhacks.net para solicitudes legales o de soporte.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidad | Enlisted Hacks",
					description: "Política de privacidad for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de privacidad",
					intro: "Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Política de privacidad for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer términos",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Información que recopilamos",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on enlistedhacks.net.",
							],
						},
						{
							h2: "Uso de la información",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Tus derechos",
							paragraphs: [
								"Contacta support@enlistedhacks.net para solicitudes legales o de soporte.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | Enlisted Hacks",
					description: "Política de reembolso for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Política de reembolso",
					intro: "Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Política de reembolso for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Entrega digital",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "Cuándo se aprueba",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Consulta la página Updates antes de jugar tras parches de Easy Anti-Cheat. Ningún cheat garantiza estado indetectable permanente.",
							],
						},
						{
							h2: "Cómo solicitar",
							paragraphs: [
								"Contacta support@enlistedhacks.net para solicitudes legales o de soporte.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Términos de uso | Enlisted Hacks",
					description: "Términos de uso for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Términos de uso",
					intro: "Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Términos de uso for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Leer privacidad",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Aceptación de términos",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licencias con entrega digital instantánea vía checkout Zadeyo. Planes $35/mes y $150 de por vida incluyen Easy Anti-Cheat maintenance.",
							],
						},
						{
							h2: "Riesgos y anti-cheat",
							paragraphs: [
								"Enlisted Hacks ofrece ESP wallhack, radar hack y enlisted aimbot indetectables para Enlisted en Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Cambios",
							paragraphs: [
								"Contacta support@enlistedhacks.net para solicitudes legales o de soporte.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
			},
		},
		fr: {
			ui: {
				nav: {
					home: "Accueil",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fonctions",
					pricing: "Tarifs",
					setup: "Installation",
					updates: "Mises à jour",
					faq: "FAQ",
					buyNow: "Acheter",
				},
				hero: {
					accent: "Triches Enlisted indétectables",
					accentShort: "Enlisted Hacks",
					subtitle: "ESP wallhack, radar hack et Aimbot pour Enlisted sur PC Windows — maintenance Easy Anti-Cheat incluse.",
					subtitleShort: "ESP, radar et Aimbot pour Enlisted PC",
					buyNow: "Acheter",
					seeFeatures: "Voir les fonctions",
				},
				trust: {
					status: "En ligne",
					statusNote: "Le pack Enlisted Hacks est actif pour Enlisted sur PC Windows.",
					statusShort: "Actif",
					delivery: "Livraison numérique instantanée",
					platform: "Windows 10 et 11",
					antiCheat: "Maintenance Easy Anti-Cheat incluse",
					antiCheatShort: "Easy Anti-Cheat inclus",
				},
				product: {
					title: "Enlisted Hacks",
					addToCart: "Ajouter au panier",
					monthly: "Mensuel",
					lifetime: "À vie",
					available: "Disponible",
					gameBadge: "Enlisted",
					platformBadge: "PC Windows",
					statusBadge: "Pack indétectable",
				},
				reviews: {
					title: "Ce que disent les joueurs",
					subtitle: "Avis récents des acheteurs Enlisted Hacks",
					outOf: "sur 5",
					countLabel: "avis",
				},
				common: {
					buyNow: "Acheter",
					readGuide: "Lire le guide",
					language: "Langue",
					officialLanguageNote: "L'anglais est la langue officielle. Les autres versions sont traduites pour le SEO mondial.",
					relatedPages: "Pages associées",
				},
				footer: {
					explore: "Explorer",
					help: "Aide et légal",
					tagline: "ESP, wallhack, radar et Aimbot indétectables pour Enlisted — checkout via Zadeyo.",
				},
				images: {
					hero: "Enlisted Hacks hero — ESP and aimbot overlay in Enlisted",
					espWallhack: "Wallhack outlines showing enemy soldiers and AI soldiers through walls",
					aimbotCombat: "Soft aim assist overlay during an Enlisted raid",
					squadFight: "Enlisted Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Enlisted raid",
					headerArt: "Aimbot view and bone priority controls for Enlisted",
					cheatsPackage: "2D radar threat overlay for Enlisted",
					rebootFight: "Aimbot assist during a Enlisted firefight",
					battleRoyale: "Enlisted Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Enlisted",
				},
			},
			pages: {
				home: {
					title: "Enlisted Hacks 2026 | ESP, Wallhack et Aimbot",
					description: "Triches Enlisted indétectables pour Enlisted sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Easy Anti-Cheat. Livraison",
					h1: "Enlisted Hacks — ESP, Wallhack et Aimbot indétectables",
					intro: "Pack undetected pour Enlisted sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Easy Anti-Cheat après chaque patch.",
					imageAlt: "Enlisted ESP player tags hack",
					galleryTitle: "Galerie Enlisted Hacks — ESP, Aimbot et wallhack",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Acheter Enlisted Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Pourquoi choisir Enlisted Hacks en 2026",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Parfait pour lire les escouades ennemies en BR et scav-run.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar et Aimbot en une licence",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Une licence au lieu d'outils séparés.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
					],
				},
				"enlisted-esp": {
					title: "ESP Enlisted | Boîtes joueur et wallhack",
					description: "ESP Enlisted: player boxes, loot markers, and wallhack overlays. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "ESP Enlisted",
					intro: "Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. ESP Enlisted.",
					imageAlt: "Enlisted ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Acheter Enlisted Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "ESP Enlisted",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@enlistedhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"enlisted-aimbot": {
					title: "Aimbot Enlisted | Contrôles soft aim",
					description: "Aimbot Enlisted: soft aim, FOV, and per-weapon Aimbot profiles. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Aimbot Enlisted",
					intro: "Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Aimbot Enlisted.",
					imageAlt: "Enlisted aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Acheter Enlisted Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Aimbot Enlisted",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@enlistedhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				features: {
					title: "Fonctions | Liste complète des fonctions",
					description: "Fonctions: ESP, soft aim, radar controls. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Fonctions",
					intro: "Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Fonctions.",
					imageAlt: "Enlisted Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fonctions",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter Enlisted Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fonctions",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. ESP, soft aim, radar controls.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@enlistedhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				pricing: {
					title: "Tarifs | Mensuel et à vie",
					description: "Tarifs: $35 monthly or $150 lifetime licenses. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Tarifs",
					intro: "Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Tarifs.",
					imageAlt: "Enlisted Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Tarifs",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Acheter Enlisted Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tarifs",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@enlistedhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				setup: {
					title: "Installation | Guide d'installation PC",
					description: "Installation: Windows PC activation and first-launch setup. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Installation",
					intro: "Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Installation.",
					imageAlt: "Enlisted Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Acheter Enlisted Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Windows PC activation and first-launch setup.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@enlistedhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				updates: {
					title: "Mises à jour | Journal Easy Anti-Cheat",
					description: "Mises à jour: Easy Anti-Cheat patch status and rebuild notes. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Mises à jour",
					intro: "Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Mises à jour.",
					imageAlt: "Enlisted Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Mises à jour",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Acheter Enlisted Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Mises à jour",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@enlistedhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Questions fréquentes",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "FAQ",
					intro: "Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. FAQ.",
					imageAlt: "Enlisted Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter Enlisted Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@enlistedhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				support: {
					title: "Support | Aide et contact",
					description: "Support: order help and license support contact. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Support",
					intro: "Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Support.",
					imageAlt: "Enlisted Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Acheter Enlisted Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. order help and license support contact.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@enlistedhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				undetected: {
					title: "Triches indétectables | Statut indétectable",
					description: "Triches indétectables: undetected maintenance after Easy Anti-Cheat patches. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches indétectables",
					intro: "Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Triches indétectables.",
					imageAlt: "Enlisted Hacks undetected status overview for Windows PC",
					galleryTitle: "Triches indétectables",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Acheter Enlisted Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Triches indétectables",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@enlistedhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Enlisted | Visibilité ESP",
					description: "Wallhack Enlisted: wallhack ESP for players, loot, and distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Wallhack Enlisted",
					intro: "Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Wallhack Enlisted.",
					imageAlt: "Enlisted wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Enlisted",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Acheter Enlisted Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Wallhack Enlisted",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. wallhack ESP for players, loot, and distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@enlistedhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D des menaces",
					description: "Radar hack: 2D radar cues for flanks and rotations. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Radar hack",
					intro: "Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Radar hack.",
					imageAlt: "Enlisted 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Acheter Enlisted Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. 2D radar cues for flanks and rotations.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@enlistedhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Maintenance des patchs",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Enlisted hacks. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Enlisted Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Acheter Enlisted Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. how Easy Anti-Cheat updates are handled for Enlisted hacks.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@enlistedhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Triches Enlisted 2026 | Guide acheteur",
					description: "Triches Enlisted 2026: 2026 Enlisted hacks checklist before checkout. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches Enlisted 2026",
					intro: "Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Triches Enlisted 2026.",
					imageAlt: "Enlisted Hacks product overview for Enlisted",
					galleryTitle: "Triches Enlisted 2026",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Acheter Enlisted Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Triches Enlisted 2026",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. 2026 Enlisted hacks checklist before checkout.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@enlistedhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				hacks: {
					title: "Triches Enlisted | Guide ESP et Aimbot",
					description: "Triches Enlisted: the Enlisted hacks pillar for ESP and Aimbot. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Triches Enlisted",
					intro: "Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Triches Enlisted.",
					imageAlt: "Enlisted Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Triches Enlisted",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Acheter Enlisted Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Triches Enlisted",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. the Enlisted hacks pillar for ESP and Aimbot.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@enlistedhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Téléchargement Enlisted Hacks | Accès instantané",
					description: "Téléchargement Enlisted Hacks: digital license download after payment. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Téléchargement Enlisted Hacks",
					intro: "Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Téléchargement Enlisted Hacks.",
					imageAlt: "Enlisted Hacks download and install delivery flow",
					galleryTitle: "Téléchargement Enlisted Hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Acheter Enlisted Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Téléchargement Enlisted Hacks",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. digital license download after payment.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@enlistedhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Enlisted | Contrôles en jeu",
					description: "Menu mod Enlisted: in-client ESP and soft aim toggles. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Menu mod Enlisted",
					intro: "Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Menu mod Enlisted.",
					imageAlt: "Enlisted Hacks in-game menu controls",
					galleryTitle: "Menu mod Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Acheter Enlisted Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Enlisted",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. in-client ESP and soft aim toggles.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@enlistedhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Enlisted | Réglages soft aim",
					description: "Soft aim Enlisted: smooth soft aim settings for Windows PC. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Soft aim Enlisted",
					intro: "Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Soft aim Enlisted.",
					imageAlt: "Enlisted soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter Enlisted Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Soft aim Enlisted",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. smooth soft aim settings for Windows PC.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@enlistedhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Meilleures triches Enlisted | Checklist acheteur",
					description: "Meilleures triches Enlisted: what to compare before buying Enlisted hacks. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Meilleures triches Enlisted",
					intro: "Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Meilleures triches Enlisted.",
					imageAlt: "Enlisted Hacks overview for Enlisted on PC",
					galleryTitle: "Meilleures triches Enlisted",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Acheter Enlisted Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Meilleures triches Enlisted",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. what to compare before buying Enlisted hacks.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@enlistedhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Enlisted | Assistance soft aim",
					description: "Hack aimbot Enlisted: undetected Aimbot hack assist for Enlisted. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack aimbot Enlisted",
					intro: "Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Hack aimbot Enlisted.",
					imageAlt: "Enlisted aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Acheter Enlisted Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Enlisted",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. undetected Aimbot hack assist for Enlisted.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@enlistedhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Enlisted | Boîtes et loot",
					description: "Hack ESP Enlisted: ESP hack boxes, loot pins, and distance. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Hack ESP Enlisted",
					intro: "Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Hack ESP Enlisted.",
					imageAlt: "Enlisted ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Enlisted",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Acheter Enlisted Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Hack ESP Enlisted",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@enlistedhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Enlisted | Ce que ça signifie",
					description: "Unlock all Enlisted: unlock-all searches vs real ESP and Aimbot tools. livraison numérique instantanée. indétectables — PC Windows.",
					h1: "Unlock all Enlisted",
					intro: "Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Unlock all Enlisted.",
					imageAlt: "Enlisted Hacks license features overview",
					galleryTitle: "Unlock all Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Acheter Enlisted Hacks",
					ctaSecondary: "Voir les fonctions",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Enlisted",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "indétectables",
							paragraphs: [
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "livraison numérique instantanée",
							paragraphs: [
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
								"Contactez support@enlistedhacks.net pour le support ou les demandes légales.",
							],
						},
					],
				},
				privacy: {
					title: "Politique de confidentialité | Enlisted Hacks",
					description: "Politique de confidentialité for Enlisted Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de confidentialité",
					intro: "Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Politique de confidentialité for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Lire conditions",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Informations collectées",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on enlistedhacks.net.",
							],
						},
						{
							h2: "Utilisation",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Vos droits",
							paragraphs: [
								"Contactez support@enlistedhacks.net pour le support ou les demandes légales.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Politique de remboursement | Enlisted Hacks",
					description: "Politique de remboursement for Enlisted Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politique de remboursement",
					intro: "Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Politique de remboursement for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Livraison numérique",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "Approbation",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Consultez Updates après les patchs Easy Anti-Cheat. Aucune triche ne garantit un statut indétectable permanent.",
							],
						},
						{
							h2: "Comment demander",
							paragraphs: [
								"Contactez support@enlistedhacks.net pour le support ou les demandes légales.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Conditions d'utilisation | Enlisted Hacks",
					description: "Conditions d'utilisation for Enlisted Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Conditions d'utilisation",
					intro: "Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Conditions d'utilisation for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptation",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licences avec livraison numérique instantanée via checkout Zadeyo. Forfaits 35 $/mois et 150 $ à vie incluent la maintenance Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risques",
							paragraphs: [
								"Enlisted Hacks combine ESP wallhack, radar hack et enlisted aimbot indétectables pour Enlisted sur PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Modifications",
							paragraphs: [
								"Contactez support@enlistedhacks.net pour le support ou les demandes légales.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
			},
		},
		de: {
			ui: {
				nav: {
					home: "Start",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Features",
					pricing: "Preise",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kaufen",
				},
				hero: {
					accent: "Undetected Enlisted Hacks",
					accentShort: "Enlisted Hacks",
					subtitle: "ESP Wallhack, Radar Hack und Aimbot für Enlisted auf Windows PC — Easy Anti-Cheat-Wartung inklusive.",
					subtitleShort: "ESP, Radar & Aimbot für Enlisted PC",
					buyNow: "Jetzt kaufen",
					seeFeatures: "Features ansehen",
				},
				trust: {
					status: "Online",
					statusNote: "Enlisted Hacks Paket ist live für Enlisted auf Windows PC.",
					statusShort: "Live",
					delivery: "Sofortige digitale Lieferung",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-Wartung unterstützt",
					antiCheatShort: "Easy Anti-Cheat Support",
				},
				product: {
					title: "Enlisted Hacks",
					addToCart: "In den Warenkorb",
					monthly: "Monatlich",
					lifetime: "Lifetime",
					available: "Jetzt verfügbar",
					gameBadge: "Enlisted",
					platformBadge: "Windows PC",
					statusBadge: "Undetected Paket",
				},
				reviews: {
					title: "Was Spieler sagen",
					subtitle: "Aktuelles Feedback von Enlisted Hacks Käufern",
					outOf: "von 5",
					countLabel: "Bewertungen",
				},
				common: {
					buyNow: "Jetzt kaufen",
					readGuide: "Guide lesen",
					language: "Sprache",
					officialLanguageNote: "Englisch ist die offizielle Sprache. Andere Locales sind für globales SEO übersetzt.",
					relatedPages: "Verwandte Seiten",
				},
				footer: {
					explore: "Entdecken",
					help: "Hilfe & Rechtliches",
					tagline: "Undetected ESP, Wallhack, Radar und Aimbot für Enlisted — Checkout über Zadeyo.",
				},
				images: {
					hero: "Enlisted Hacks hero — ESP and aimbot overlay in Enlisted",
					espWallhack: "Wallhack outlines showing enemy soldiers and AI soldiers through walls",
					aimbotCombat: "Soft aim assist overlay during an Enlisted raid",
					squadFight: "Enlisted Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Enlisted raid",
					headerArt: "Aimbot view and bone priority controls for Enlisted",
					cheatsPackage: "2D radar threat overlay for Enlisted",
					rebootFight: "Aimbot assist during a Enlisted firefight",
					battleRoyale: "Enlisted Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Enlisted",
				},
			},
			pages: {
				home: {
					title: "Enlisted Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected Enlisted Hacks für Enlisted auf PC. ESP Wallhack, Radar Hack und Aimbot mit Easy Anti-Cheat-Wartung. Sofortige digitale Lieferung.",
					h1: "Enlisted Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC Paket für Enlisted: ESP Wallhack, Radar und Aimbot mit Easy Anti-Cheat-Wartung nach jedem Patch.",
					imageAlt: "Enlisted ESP player tags hack",
					galleryTitle: "Enlisted Hacks Galerie — ESP, Aimbot und Wallhack",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Enlisted Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Warum Enlisted Hacks 2026 führt",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Ideal um feindliche Squads in BR und scav-run zu lesen.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "ESP Wallhack, Radar und Aimbot in einer Lizenz",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Eine Lizenz statt separater Tools.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
					],
				},
				"enlisted-esp": {
					title: "Enlisted ESP | Spielerboxen & Wallhack",
					description: "Enlisted ESP: player boxes, loot markers, and wallhack overlays. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Enlisted ESP",
					intro: "Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Enlisted ESP.",
					imageAlt: "Enlisted ESP player boxes and distance readouts in a raid",
					galleryTitle: "Enlisted ESP",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Enlisted ESP",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@enlistedhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"enlisted-aimbot": {
					title: "Enlisted Aimbot | Soft-Aim Steuerung",
					description: "Enlisted Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Enlisted Aimbot",
					intro: "Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Enlisted Aimbot.",
					imageAlt: "Enlisted aimbot and soft aim controls on Windows PC",
					galleryTitle: "Enlisted Aimbot",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Enlisted Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted Aimbot",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@enlistedhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				features: {
					title: "Features | Vollständige Feature-Liste",
					description: "Features: ESP, soft aim, radar controls. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Features",
					intro: "Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Features.",
					imageAlt: "Enlisted Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Features",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Enlisted Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Features",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. ESP, soft aim, radar controls.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@enlistedhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				pricing: {
					title: "Preise | Monatlich & Lifetime",
					description: "Preise: $35 monthly or $150 lifetime licenses. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Preise",
					intro: "Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Preise.",
					imageAlt: "Enlisted Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Preise",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Enlisted Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preise",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. $35 monthly or $150 lifetime licenses.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@enlistedhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup-Anleitung",
					description: "Setup: Windows PC activation and first-launch setup. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Setup",
					intro: "Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Setup.",
					imageAlt: "Enlisted Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Windows PC activation and first-launch setup.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@enlistedhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | Easy Anti-Cheat Wartungslog",
					description: "Updates: Easy Anti-Cheat patch status and rebuild notes. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Updates",
					intro: "Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Updates.",
					imageAlt: "Enlisted Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Enlisted Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@enlistedhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Häufige Fragen",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. FAQ.",
					imageAlt: "Enlisted Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Enlisted Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@enlistedhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Hilfe & Kontakt",
					description: "Support: order help and license support contact. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Support",
					intro: "Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Support.",
					imageAlt: "Enlisted Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Enlisted Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. order help and license support contact.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@enlistedhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Undetected Status",
					description: "Undetected Cheats: undetected maintenance after Easy Anti-Cheat patches. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Undetected Cheats.",
					imageAlt: "Enlisted Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Enlisted Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@enlistedhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Enlisted Wallhack | ESP Sichtbarkeit",
					description: "Enlisted Wallhack: wallhack ESP for players, loot, and distance. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Enlisted Wallhack",
					intro: "Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Enlisted Wallhack.",
					imageAlt: "Enlisted wallhack visibility through walls in a raid",
					galleryTitle: "Enlisted Wallhack",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Enlisted Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted Wallhack",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. wallhack ESP for players, loot, and distance.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@enlistedhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Bedrohungsradar",
					description: "Radar Hack: 2D radar cues for flanks and rotations. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Radar Hack.",
					imageAlt: "Enlisted 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. 2D radar cues for flanks and rotations.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@enlistedhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch-Wartung",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Enlisted hacks. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt: "Enlisted Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Enlisted Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. how Easy Anti-Cheat updates are handled for Enlisted hacks.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@enlistedhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Enlisted Hacks 2026 | Käuferleitfaden",
					description: "Enlisted Hacks 2026: 2026 Enlisted hacks checklist before checkout. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Enlisted Hacks 2026",
					intro: "Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Enlisted Hacks 2026.",
					imageAlt: "Enlisted Hacks product overview for Enlisted",
					galleryTitle: "Enlisted Hacks 2026",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Enlisted Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Enlisted Hacks 2026",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. 2026 Enlisted hacks checklist before checkout.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@enlistedhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				hacks: {
					title: "Enlisted Hacks | ESP Aimbot Guide",
					description: "Enlisted Hacks: the Enlisted hacks pillar for ESP and Aimbot. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Enlisted Hacks",
					intro: "Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Enlisted Hacks.",
					imageAlt: "Enlisted Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Enlisted Hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Enlisted Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted Hacks",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. the Enlisted hacks pillar for ESP and Aimbot.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@enlistedhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Enlisted Cheat Download | Sofortzugang",
					description: "Enlisted Cheat Download: digital license download after payment. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Enlisted Cheat Download",
					intro: "Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Enlisted Cheat Download.",
					imageAlt: "Enlisted Hacks download and install delivery flow",
					galleryTitle: "Enlisted Cheat Download",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Enlisted Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Enlisted Cheat Download",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. digital license download after payment.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@enlistedhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Enlisted Mod-Menü | In-Game Toggles",
					description: "Enlisted Mod-Menü: in-client ESP and soft aim toggles. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Enlisted Mod-Menü",
					intro: "Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Enlisted Mod-Menü.",
					imageAlt: "Enlisted Hacks in-game menu controls",
					galleryTitle: "Enlisted Mod-Menü",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted Mod-Menü",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. in-client ESP and soft aim toggles.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@enlistedhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Enlisted Soft Aim | Soft-Aim Einstellungen",
					description: "Enlisted Soft Aim: smooth soft aim settings for Windows PC. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Enlisted Soft Aim",
					intro: "Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Enlisted Soft Aim.",
					imageAlt: "Enlisted soft aim FOV and smoothness settings",
					galleryTitle: "Enlisted Soft Aim",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Enlisted Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Enlisted Soft Aim",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. smooth soft aim settings for Windows PC.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@enlistedhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste Enlisted Hacks | Käufer-Checkliste",
					description: "Beste Enlisted Hacks: what to compare before buying Enlisted hacks. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Beste Enlisted Hacks",
					intro: "Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Beste Enlisted Hacks.",
					imageAlt: "Enlisted Hacks overview for Enlisted on PC",
					galleryTitle: "Beste Enlisted Hacks",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Enlisted Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste Enlisted Hacks",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. what to compare before buying Enlisted hacks.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@enlistedhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Enlisted Aimbot Hack | Soft-Aim Assist",
					description: "Enlisted Aimbot Hack: undetected Aimbot hack assist for Enlisted. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Enlisted Aimbot Hack",
					intro: "Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Enlisted Aimbot Hack.",
					imageAlt: "Enlisted aimbot hack controls and bone priority",
					galleryTitle: "Enlisted Aimbot Hack",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Enlisted Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Enlisted Aimbot Hack",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. undetected Aimbot hack assist for Enlisted.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@enlistedhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Enlisted ESP Hack | Boxen & Loot",
					description: "Enlisted ESP Hack: ESP hack boxes, loot pins, and distance. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Enlisted ESP Hack",
					intro: "Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Enlisted ESP Hack.",
					imageAlt: "Enlisted ESP hack boxes and loot markers",
					galleryTitle: "Enlisted ESP Hack",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Enlisted Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted ESP Hack",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. ESP hack boxes, loot pins, and distance.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@enlistedhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Enlisted Unlock All | Was es bedeutet",
					description: "Enlisted Unlock All: unlock-all searches vs real ESP and Aimbot tools. sofortige digitale Lieferung. undetected — Windows PC.",
					h1: "Enlisted Unlock All",
					intro: "Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Enlisted Unlock All.",
					imageAlt: "Enlisted Hacks license features overview",
					galleryTitle: "Enlisted Unlock All",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks kaufen",
					ctaSecondary: "Features ansehen",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted Unlock All",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "sofortige digitale Lieferung",
							paragraphs: [
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
								"support@enlistedhacks.net für Support und rechtliche Anfragen.",
							],
						},
					],
				},
				privacy: {
					title: "Datenschutz | Enlisted Hacks",
					description: "Datenschutz for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Datenschutz",
					intro: "Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Datenschutz for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Nutzungsbedingungen",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Erhobene Daten",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on enlistedhacks.net.",
							],
						},
						{
							h2: "Datennutzung",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Ihre Rechte",
							paragraphs: [
								"support@enlistedhacks.net für Support und rechtliche Anfragen.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Rückerstattung | Enlisted Hacks",
					description: "Rückerstattung for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Rückerstattung",
					intro: "Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Rückerstattung for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digitale Lieferung",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "Genehmigung",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Updates-Seite nach Easy Anti-Cheat-Patches prüfen. Kein Cheat garantiert dauerhaft undetected Status.",
							],
						},
						{
							h2: "Anfrage stellen",
							paragraphs: [
								"support@enlistedhacks.net für Support und rechtliche Anfragen.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Nutzungsbedingungen | Enlisted Hacks",
					description: "Nutzungsbedingungen for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Nutzungsbedingungen",
					intro: "Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Nutzungsbedingungen for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Annahme",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Lizenzen mit sofortige digitale Lieferung über Zadeyo Checkout. $35/Monat und $150 Lifetime inkl. Easy Anti-Cheat-Wartung.",
							],
						},
						{
							h2: "Risiko",
							paragraphs: [
								"Enlisted Hacks bündelt ESP wallhack, radar hack und enlisted aimbot als undetected Paket für Enlisted auf Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Änderungen",
							paragraphs: [
								"support@enlistedhacks.net für Support und rechtliche Anfragen.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
			},
		},
		pt: {
			ui: {
				nav: {
					home: "Início",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Recursos",
					pricing: "Preços",
					setup: "Instalação",
					updates: "Atualizações",
					faq: "FAQ",
					buyNow: "Comprar",
				},
				hero: {
					accent: "Cheats Enlisted indetectáveis",
					accentShort: "Enlisted Hacks",
					subtitle: "ESP wallhack, radar hack e Aimbot para Enlisted no PC Windows — manutenção Easy Anti-Cheat incluída.",
					subtitleShort: "ESP, radar e Aimbot para Enlisted PC",
					buyNow: "Comprar agora",
					seeFeatures: "Ver recursos",
				},
				trust: {
					status: "Online",
					statusNote: "O pacote Enlisted Hacks está ativo para Enlisted no PC Windows.",
					statusShort: "Ativo",
					delivery: "Entrega digital instantânea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenção Easy Anti-Cheat incluída",
					antiCheatShort: "Easy Anti-Cheat incluído",
				},
				product: {
					title: "Enlisted Hacks",
					addToCart: "Adicionar ao carrinho",
					monthly: "Mensal",
					lifetime: "Vitalício",
					available: "Disponível agora",
					gameBadge: "Enlisted",
					platformBadge: "PC Windows",
					statusBadge: "Pacote indetectável",
				},
				reviews: {
					title: "O que os jogadores dizem",
					subtitle: "Feedback recente de compradores Enlisted Hacks",
					outOf: "de 5",
					countLabel: "avaliações",
				},
				common: {
					buyNow: "Comprar agora",
					readGuide: "Ler guia",
					language: "Idioma",
					officialLanguageNote: "Inglês é o idioma oficial. Outros idiomas são traduzidos para SEO global.",
					relatedPages: "Páginas relacionadas",
				},
				footer: {
					explore: "Explorar",
					help: "Ajuda e legal",
					tagline: "ESP, wallhack, radar e Aimbot indetectáveis para Enlisted — checkout via Zadeyo.",
				},
				images: {
					hero: "Enlisted Hacks hero — ESP and aimbot overlay in Enlisted",
					espWallhack: "Wallhack outlines showing enemy soldiers and AI soldiers through walls",
					aimbotCombat: "Soft aim assist overlay during an Enlisted raid",
					squadFight: "Enlisted Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Enlisted raid",
					headerArt: "Aimbot view and bone priority controls for Enlisted",
					cheatsPackage: "2D radar threat overlay for Enlisted",
					rebootFight: "Aimbot assist during a Enlisted firefight",
					battleRoyale: "Enlisted Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Enlisted",
				},
			},
			pages: {
				home: {
					title: "Enlisted Hacks 2026 | ESP, Wallhack e Aimbot",
					description: "Cheats Enlisted indetectáveis para Enlisted no PC. ESP wallhack, radar hack e Aimbot com manutenção Easy Anti-Cheat. Entrega digital",
					h1: "Enlisted Hacks — ESP, Wallhack e Aimbot indetectáveis",
					intro: "Pacote undetected para Enlisted no Windows PC: ESP wallhack, radar e Aimbot com manutenção Easy Anti-Cheat após cada patch.",
					imageAlt: "Enlisted ESP player tags hack",
					galleryTitle: "Galeria Enlisted Hacks — ESP, Aimbot e wallhack",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Por que escolher Enlisted Hacks em 2026",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Ideal para ler esquadrões inimigos em BR e scav-run.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot numa licença",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Uma licença em vez de ferramentas separadas.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
					],
				},
				"enlisted-esp": {
					title: "ESP Enlisted | Caixas de jogador e wallhack",
					description: "ESP Enlisted: player boxes, loot markers, and wallhack overlays. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "ESP Enlisted",
					intro: "Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. ESP Enlisted.",
					imageAlt: "Enlisted ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "ESP Enlisted",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@enlistedhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"enlisted-aimbot": {
					title: "Aimbot Enlisted | Controles soft aim",
					description: "Aimbot Enlisted: soft aim, FOV, and per-weapon Aimbot profiles. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Aimbot Enlisted",
					intro: "Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Aimbot Enlisted.",
					imageAlt: "Enlisted aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Aimbot Enlisted",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@enlistedhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				features: {
					title: "Recursos | Lista completa de recursos",
					description: "Recursos: ESP, soft aim, radar controls. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Recursos",
					intro: "Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Recursos.",
					imageAlt: "Enlisted Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Recursos",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Recursos",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. ESP, soft aim, radar controls.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@enlistedhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				pricing: {
					title: "Preços | Mensal e vitalício",
					description: "Preços: $35 monthly or $150 lifetime licenses. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Preços",
					intro: "Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Preços.",
					imageAlt: "Enlisted Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Preços",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Preços",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@enlistedhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				setup: {
					title: "Instalação | Guia de instalação PC",
					description: "Instalação: Windows PC activation and first-launch setup. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Instalação",
					intro: "Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Instalação.",
					imageAlt: "Enlisted Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalação",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalação",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Windows PC activation and first-launch setup.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@enlistedhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				updates: {
					title: "Atualizações | Registro Easy Anti-Cheat",
					description: "Atualizações: Easy Anti-Cheat patch status and rebuild notes. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Atualizações",
					intro: "Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Atualizações.",
					imageAlt: "Enlisted Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Atualizações",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Atualizações",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@enlistedhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Perguntas frequentes",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "FAQ",
					intro: "Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. FAQ.",
					imageAlt: "Enlisted Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@enlistedhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				support: {
					title: "Suporte | Ajuda e contato",
					description: "Suporte: order help and license support contact. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Suporte",
					intro: "Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Suporte.",
					imageAlt: "Enlisted Hacks support page for license and setup help",
					galleryTitle: "Suporte",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suporte",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. order help and license support contact.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@enlistedhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats indetectáveis | Status indetectável",
					description: "Cheats indetectáveis: undetected maintenance after Easy Anti-Cheat patches. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats indetectáveis",
					intro: "Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Cheats indetectáveis.",
					imageAlt: "Enlisted Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheats indetectáveis",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Cheats indetectáveis",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@enlistedhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Enlisted | Visibilidade ESP",
					description: "Wallhack Enlisted: wallhack ESP for players, loot, and distance. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Wallhack Enlisted",
					intro: "Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Wallhack Enlisted.",
					imageAlt: "Enlisted wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Enlisted",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Wallhack Enlisted",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. wallhack ESP for players, loot, and distance.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@enlistedhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D de ameaças",
					description: "Radar hack: 2D radar cues for flanks and rotations. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Radar hack",
					intro: "Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Radar hack.",
					imageAlt: "Enlisted 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. 2D radar cues for flanks and rotations.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@enlistedhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Manutenção de patches",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Enlisted hacks. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Enlisted Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. how Easy Anti-Cheat updates are handled for Enlisted hacks.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@enlistedhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Enlisted 2026 | Guia do comprador",
					description: "Cheats Enlisted 2026: 2026 Enlisted hacks checklist before checkout. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats Enlisted 2026",
					intro: "Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Cheats Enlisted 2026.",
					imageAlt: "Enlisted Hacks product overview for Enlisted",
					galleryTitle: "Cheats Enlisted 2026",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Cheats Enlisted 2026",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. 2026 Enlisted hacks checklist before checkout.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@enlistedhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Enlisted | Guia ESP e Aimbot",
					description: "Cheats Enlisted: the Enlisted hacks pillar for ESP and Aimbot. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Cheats Enlisted",
					intro: "Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Cheats Enlisted.",
					imageAlt: "Enlisted Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats Enlisted",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Enlisted",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. the Enlisted hacks pillar for ESP and Aimbot.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@enlistedhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Enlisted Hacks | Acesso instantâneo",
					description: "Download Enlisted Hacks: digital license download after payment. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Download Enlisted Hacks",
					intro: "Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Download Enlisted Hacks.",
					imageAlt: "Enlisted Hacks download and install delivery flow",
					galleryTitle: "Download Enlisted Hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Enlisted Hacks",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. digital license download after payment.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@enlistedhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Enlisted | Controles in-game",
					description: "Menu mod Enlisted: in-client ESP and soft aim toggles. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Menu mod Enlisted",
					intro: "Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Menu mod Enlisted.",
					imageAlt: "Enlisted Hacks in-game menu controls",
					galleryTitle: "Menu mod Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Enlisted",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. in-client ESP and soft aim toggles.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@enlistedhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Enlisted | Ajustes soft aim",
					description: "Soft aim Enlisted: smooth soft aim settings for Windows PC. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Soft aim Enlisted",
					intro: "Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Soft aim Enlisted.",
					imageAlt: "Enlisted soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Soft aim Enlisted",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. smooth soft aim settings for Windows PC.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@enlistedhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Melhores cheats Enlisted | Checklist do comprador",
					description: "Melhores cheats Enlisted: what to compare before buying Enlisted hacks. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Melhores cheats Enlisted",
					intro: "Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Melhores cheats Enlisted.",
					imageAlt: "Enlisted Hacks overview for Enlisted on PC",
					galleryTitle: "Melhores cheats Enlisted",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Melhores cheats Enlisted",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. what to compare before buying Enlisted hacks.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@enlistedhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Enlisted | Assistência soft aim",
					description: "Hack aimbot Enlisted: undetected Aimbot hack assist for Enlisted. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack aimbot Enlisted",
					intro: "Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Hack aimbot Enlisted.",
					imageAlt: "Enlisted aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Enlisted",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. undetected Aimbot hack assist for Enlisted.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@enlistedhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Enlisted | Caixas e loot",
					description: "Hack ESP Enlisted: ESP hack boxes, loot pins, and distance. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Hack ESP Enlisted",
					intro: "Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Hack ESP Enlisted.",
					imageAlt: "Enlisted ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Enlisted",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Hack ESP Enlisted",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@enlistedhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Enlisted | O que significa",
					description: "Unlock all Enlisted: unlock-all searches vs real ESP and Aimbot tools. entrega digital instantânea. indetectáveis — PC Windows.",
					h1: "Unlock all Enlisted",
					intro: "Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Unlock all Enlisted.",
					imageAlt: "Enlisted Hacks license features overview",
					galleryTitle: "Unlock all Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Comprar Enlisted Hacks",
					ctaSecondary: "Ver recursos",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Enlisted",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectáveis",
							paragraphs: [
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "entrega digital instantânea",
							paragraphs: [
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
								"Contacte support@enlistedhacks.net para suporte ou questões legais.",
							],
						},
					],
				},
				privacy: {
					title: "Política de privacidade | Enlisted Hacks",
					description: "Política de privacidade for Enlisted Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de privacidade",
					intro: "Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Política de privacidade for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on enlistedhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contacte support@enlistedhacks.net para suporte ou questões legais.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Política de reembolso | Enlisted Hacks",
					description: "Política de reembolso for Enlisted Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Política de reembolso",
					intro: "Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Política de reembolso for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verifique Updates após patches Easy Anti-Cheat. Nenhum cheat garante status indetectável permanente.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contacte support@enlistedhacks.net para suporte ou questões legais.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Termos de uso | Enlisted Hacks",
					description: "Termos de uso for Enlisted Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termos de uso",
					intro: "Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Termos de uso for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenças com entrega digital instantânea via checkout Zadeyo. Planos $35/mês e $150 vitalício incluem manutenção Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Enlisted Hacks reúne ESP wallhack, radar hack e enlisted aimbot indetectáveis para Enlisted no PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contacte support@enlistedhacks.net para suporte ou questões legais.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
			},
		},
		it: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funzioni",
					pricing: "Prezzi",
					setup: "Setup",
					updates: "Aggiornamenti",
					faq: "FAQ",
					buyNow: "Acquista",
				},
				hero: {
					accent: "Cheat Enlisted indetectable",
					accentShort: "Enlisted Hacks",
					subtitle: "ESP wallhack, radar hack e Aimbot per Enlisted su PC Windows — manutenzione Easy Anti-Cheat inclusa.",
					subtitleShort: "ESP, radar e Aimbot per Enlisted PC",
					buyNow: "Acquista ora",
					seeFeatures: "Vedi funzioni",
				},
				trust: {
					status: "Online",
					statusNote: "Il pacchetto Enlisted Hacks è attivo per Enlisted su PC Windows.",
					statusShort: "Attivo",
					delivery: "Consegna digitale istantanea",
					platform: "Windows 10 e 11",
					antiCheat: "Manutenzione Easy Anti-Cheat supportata",
					antiCheatShort: "Easy Anti-Cheat supportato",
				},
				product: {
					title: "Enlisted Hacks",
					addToCart: "Aggiungi al carrello",
					monthly: "Mensile",
					lifetime: "A vita",
					available: "Disponibile ora",
					gameBadge: "Enlisted",
					platformBadge: "PC Windows",
					statusBadge: "Pacchetto indetectable",
				},
				reviews: {
					title: "Cosa dicono i giocatori",
					subtitle: "Feedback recente dagli acquirenti Enlisted Hacks",
					outOf: "su 5",
					countLabel: "recensioni",
				},
				common: {
					buyNow: "Acquista ora",
					readGuide: "Leggi guida",
					language: "Lingua",
					officialLanguageNote: "L'inglese è la lingua ufficiale. Altre versioni sono tradotte per SEO globale.",
					relatedPages: "Pagine correlate",
				},
				footer: {
					explore: "Esplora",
					help: "Aiuto e legale",
					tagline: "ESP, wallhack, radar e Aimbot indetectable per Enlisted — checkout via Zadeyo.",
				},
				images: {
					hero: "Enlisted Hacks hero — ESP and aimbot overlay in Enlisted",
					espWallhack: "Wallhack outlines showing enemy soldiers and AI soldiers through walls",
					aimbotCombat: "Soft aim assist overlay during an Enlisted raid",
					squadFight: "Enlisted Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Enlisted raid",
					headerArt: "Aimbot view and bone priority controls for Enlisted",
					cheatsPackage: "2D radar threat overlay for Enlisted",
					rebootFight: "Aimbot assist during a Enlisted firefight",
					battleRoyale: "Enlisted Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Enlisted",
				},
			},
			pages: {
				home: {
					title: "Enlisted Hacks 2026 | ESP, Wallhack e Aimbot",
					description: "Cheat Enlisted indetectable per Enlisted su PC. ESP wallhack, radar hack e Aimbot con manutenzione Easy Anti-Cheat. Consegna digitale",
					h1: "Enlisted Hacks — ESP, Wallhack e Aimbot indetectable",
					intro: "Pacchetto undetected per Enlisted su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Easy Anti-Cheat dopo ogni patch.",
					imageAlt: "Enlisted ESP player tags hack",
					galleryTitle: "Galleria Enlisted Hacks — ESP, Aimbot e wallhack",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Acquista Enlisted Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Perché scegliere Enlisted Hacks nel 2026",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Ideale per leggere squadre nemiche in BR e scav-run.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar e Aimbot in una licenza",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Una licenza invece di tool separati.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
					],
				},
				"enlisted-esp": {
					title: "ESP Enlisted | Box giocatore e wallhack",
					description: "ESP Enlisted: player boxes, loot markers, and wallhack overlays. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "ESP Enlisted",
					intro: "Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. ESP Enlisted.",
					imageAlt: "Enlisted ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Acquista Enlisted Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "ESP Enlisted",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@enlistedhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"enlisted-aimbot": {
					title: "Aimbot Enlisted | Controlli soft aim",
					description: "Aimbot Enlisted: soft aim, FOV, and per-weapon Aimbot profiles. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aimbot Enlisted",
					intro: "Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Aimbot Enlisted.",
					imageAlt: "Enlisted aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Acquista Enlisted Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Aimbot Enlisted",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@enlistedhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				features: {
					title: "Funzioni | Elenco completo funzioni",
					description: "Funzioni: ESP, soft aim, radar controls. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Funzioni",
					intro: "Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Funzioni.",
					imageAlt: "Enlisted Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funzioni",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista Enlisted Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funzioni",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. ESP, soft aim, radar controls.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@enlistedhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				pricing: {
					title: "Prezzi | Mensile e lifetime",
					description: "Prezzi: $35 monthly or $150 lifetime licenses. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Prezzi",
					intro: "Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Prezzi.",
					imageAlt: "Enlisted Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Prezzi",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Acquista Enlisted Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prezzi",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@enlistedhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				setup: {
					title: "Setup | Guida setup PC",
					description: "Setup: Windows PC activation and first-launch setup. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Setup",
					intro: "Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Setup.",
					imageAlt: "Enlisted Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Acquista Enlisted Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Windows PC activation and first-launch setup.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@enlistedhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				updates: {
					title: "Aggiornamenti | Log manutenzione Easy Anti-Cheat",
					description: "Aggiornamenti: Easy Anti-Cheat patch status and rebuild notes. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Aggiornamenti",
					intro: "Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Aggiornamenti.",
					imageAlt: "Enlisted Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Aggiornamenti",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Acquista Enlisted Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Aggiornamenti",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@enlistedhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Domande frequenti",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "FAQ",
					intro: "Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. FAQ.",
					imageAlt: "Enlisted Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista Enlisted Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@enlistedhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				support: {
					title: "Supporto | Aiuto e contatto",
					description: "Supporto: order help and license support contact. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Supporto",
					intro: "Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Supporto.",
					imageAlt: "Enlisted Hacks support page for license and setup help",
					galleryTitle: "Supporto",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Acquista Enlisted Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Supporto",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. order help and license support contact.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@enlistedhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat indetectable | Stato indetectable",
					description: "Cheat indetectable: undetected maintenance after Easy Anti-Cheat patches. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat indetectable",
					intro: "Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Cheat indetectable.",
					imageAlt: "Enlisted Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheat indetectable",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Acquista Enlisted Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Cheat indetectable",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@enlistedhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Enlisted | Visibilità ESP",
					description: "Wallhack Enlisted: wallhack ESP for players, loot, and distance. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Wallhack Enlisted",
					intro: "Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Wallhack Enlisted.",
					imageAlt: "Enlisted wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Enlisted",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Acquista Enlisted Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Wallhack Enlisted",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. wallhack ESP for players, loot, and distance.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@enlistedhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | Radar 2D minacce",
					description: "Radar hack: 2D radar cues for flanks and rotations. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Radar hack",
					intro: "Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Radar hack.",
					imageAlt: "Enlisted 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Acquista Enlisted Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. 2D radar cues for flanks and rotations.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@enlistedhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Manutenzione patch",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Enlisted hacks. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Enlisted Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Acquista Enlisted Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. how Easy Anti-Cheat updates are handled for Enlisted hacks.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@enlistedhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Enlisted 2026 | Guida acquirente",
					description: "Cheat Enlisted 2026: 2026 Enlisted hacks checklist before checkout. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat Enlisted 2026",
					intro: "Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Cheat Enlisted 2026.",
					imageAlt: "Enlisted Hacks product overview for Enlisted",
					galleryTitle: "Cheat Enlisted 2026",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Acquista Enlisted Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Cheat Enlisted 2026",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. 2026 Enlisted hacks checklist before checkout.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@enlistedhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Enlisted | Guida ESP e Aimbot",
					description: "Cheat Enlisted: the Enlisted hacks pillar for ESP and Aimbot. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Cheat Enlisted",
					intro: "Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Cheat Enlisted.",
					imageAlt: "Enlisted Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Enlisted",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Acquista Enlisted Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Enlisted",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. the Enlisted hacks pillar for ESP and Aimbot.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@enlistedhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Enlisted Hacks | Accesso istantaneo",
					description: "Download Enlisted Hacks: digital license download after payment. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Download Enlisted Hacks",
					intro: "Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Download Enlisted Hacks.",
					imageAlt: "Enlisted Hacks download and install delivery flow",
					galleryTitle: "Download Enlisted Hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Acquista Enlisted Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Enlisted Hacks",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. digital license download after payment.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@enlistedhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Enlisted | Toggle in-game",
					description: "Mod menu Enlisted: in-client ESP and soft aim toggles. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Mod menu Enlisted",
					intro: "Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Mod menu Enlisted.",
					imageAlt: "Enlisted Hacks in-game menu controls",
					galleryTitle: "Mod menu Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Acquista Enlisted Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Enlisted",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. in-client ESP and soft aim toggles.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@enlistedhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Enlisted | Impostazioni soft aim",
					description: "Soft aim Enlisted: smooth soft aim settings for Windows PC. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Soft aim Enlisted",
					intro: "Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Soft aim Enlisted.",
					imageAlt: "Enlisted soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista Enlisted Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Soft aim Enlisted",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. smooth soft aim settings for Windows PC.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@enlistedhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Migliori cheat Enlisted | Checklist acquirente",
					description: "Migliori cheat Enlisted: what to compare before buying Enlisted hacks. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Migliori cheat Enlisted",
					intro: "Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Migliori cheat Enlisted.",
					imageAlt: "Enlisted Hacks overview for Enlisted on PC",
					galleryTitle: "Migliori cheat Enlisted",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Acquista Enlisted Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Migliori cheat Enlisted",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. what to compare before buying Enlisted hacks.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@enlistedhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Enlisted | Assist soft aim",
					description: "Hack aimbot Enlisted: undetected Aimbot hack assist for Enlisted. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack aimbot Enlisted",
					intro: "Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Hack aimbot Enlisted.",
					imageAlt: "Enlisted aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Acquista Enlisted Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Enlisted",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. undetected Aimbot hack assist for Enlisted.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@enlistedhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Enlisted | Box e loot",
					description: "Hack ESP Enlisted: ESP hack boxes, loot pins, and distance. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Hack ESP Enlisted",
					intro: "Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Hack ESP Enlisted.",
					imageAlt: "Enlisted ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Enlisted",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Acquista Enlisted Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Hack ESP Enlisted",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@enlistedhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Enlisted | Cosa significa",
					description: "Unlock all Enlisted: unlock-all searches vs real ESP and Aimbot tools. consegna digitale istantanea. indetectable — PC Windows.",
					h1: "Unlock all Enlisted",
					intro: "Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Unlock all Enlisted.",
					imageAlt: "Enlisted Hacks license features overview",
					galleryTitle: "Unlock all Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Acquista Enlisted Hacks",
					ctaSecondary: "Vedi funzioni",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Enlisted",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "indetectable",
							paragraphs: [
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "consegna digitale istantanea",
							paragraphs: [
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
								"Contatta support@enlistedhacks.net per supporto o richieste legali.",
							],
						},
					],
				},
				privacy: {
					title: "Informativa privacy | Enlisted Hacks",
					description: "Informativa privacy for Enlisted Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Informativa privacy",
					intro: "Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Informativa privacy for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on enlistedhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Contatta support@enlistedhacks.net per supporto o richieste legali.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Politica di rimborso | Enlisted Hacks",
					description: "Politica di rimborso for Enlisted Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica di rimborso",
					intro: "Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Politica di rimborso for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Controlla Updates dopo patch Easy Anti-Cheat. Nessun cheat garantisce stato indetectable permanente.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Contatta support@enlistedhacks.net per supporto o richieste legali.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Termini di utilizzo | Enlisted Hacks",
					description: "Termini di utilizzo for Enlisted Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termini di utilizzo",
					intro: "Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Termini di utilizzo for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licenze con consegna digitale istantanea via checkout Zadeyo. Piani $35/mese e $150 a vita includono manutenzione Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Enlisted Hacks unisce ESP wallhack, radar hack e enlisted aimbot indetectable per Enlisted su PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Contatta support@enlistedhacks.net per supporto o richieste legali.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
			},
		},
		nl: {
			ui: {
				nav: {
					home: "Home",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Functies",
					pricing: "Prijzen",
					setup: "Setup",
					updates: "Updates",
					faq: "FAQ",
					buyNow: "Kopen",
				},
				hero: {
					accent: "Undetected Enlisted Hacks",
					accentShort: "Enlisted Hacks",
					subtitle: "ESP wallhack, radar hack en Aimbot voor Enlisted op Windows PC — Easy Anti-Cheat-onderhoud inbegrepen.",
					subtitleShort: "ESP, radar & Aimbot voor Enlisted PC",
					buyNow: "Nu kopen",
					seeFeatures: "Bekijk functies",
				},
				trust: {
					status: "Online",
					statusNote: "Enlisted Hacks pakket is live voor Enlisted op Windows PC.",
					statusShort: "Live",
					delivery: "Directe digitale levering",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-onderhoud ondersteund",
					antiCheatShort: "Easy Anti-Cheat support",
				},
				product: {
					title: "Enlisted Hacks",
					addToCart: "In winkelwagen",
					monthly: "Maandelijks",
					lifetime: "Lifetime",
					available: "Nu beschikbaar",
					gameBadge: "Enlisted",
					platformBadge: "Windows PC",
					statusBadge: "Undetected pakket",
				},
				reviews: {
					title: "Wat spelers zeggen",
					subtitle: "Recente feedback van Enlisted Hacks kopers",
					outOf: "van 5",
					countLabel: "reviews",
				},
				common: {
					buyNow: "Nu kopen",
					readGuide: "Lees gids",
					language: "Taal",
					officialLanguageNote: "Engels is de officiële taal. Andere talen zijn vertaald voor wereldwijde SEO.",
					relatedPages: "Gerelateerde pagina's",
				},
				footer: {
					explore: "Verkennen",
					help: "Help & juridisch",
					tagline: "Undetected ESP, wallhack, radar en Aimbot voor Enlisted — checkout via Zadeyo.",
				},
				images: {
					hero: "Enlisted Hacks hero — ESP and aimbot overlay in Enlisted",
					espWallhack: "Wallhack outlines showing enemy soldiers and AI soldiers through walls",
					aimbotCombat: "Soft aim assist overlay during an Enlisted raid",
					squadFight: "Enlisted Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Enlisted raid",
					headerArt: "Aimbot view and bone priority controls for Enlisted",
					cheatsPackage: "2D radar threat overlay for Enlisted",
					rebootFight: "Aimbot assist during a Enlisted firefight",
					battleRoyale: "Enlisted Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Enlisted",
				},
			},
			pages: {
				home: {
					title: "Enlisted Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected Enlisted hacks voor Enlisted op PC. ESP wallhack, radar hack en Aimbot met Easy Anti-Cheat-onderhoud. Directe digitale levering.",
					h1: "Enlisted Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected Windows PC pakket voor Enlisted: ESP wallhack, radar en Aimbot met Easy Anti-Cheat-onderhoud na elke patch.",
					imageAlt: "Enlisted ESP player tags hack",
					galleryTitle: "Enlisted Hacks galerij — ESP, Aimbot en wallhack",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Enlisted Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Waarom Enlisted Hacks in 2026",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Ideaal om vijandelijke squads te lezen in BR en scav-run.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "ESP wallhack, radar en Aimbot in één licentie",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Eén licentie in plaats van losse tools.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
					],
				},
				"enlisted-esp": {
					title: "Enlisted ESP | Player Boxes & Wallhack",
					description: "Enlisted ESP: player boxes, loot markers, and wallhack overlays. directe digitale levering. undetected — Windows PC.",
					h1: "Enlisted ESP",
					intro: "Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Enlisted ESP.",
					imageAlt: "Enlisted ESP player boxes and distance readouts in a raid",
					galleryTitle: "Enlisted ESP",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Enlisted ESP",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@enlistedhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"enlisted-aimbot": {
					title: "Enlisted Aimbot | Soft Aim Controls",
					description: "Enlisted Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. directe digitale levering. undetected — Windows PC.",
					h1: "Enlisted Aimbot",
					intro: "Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Enlisted Aimbot.",
					imageAlt: "Enlisted aimbot and soft aim controls on Windows PC",
					galleryTitle: "Enlisted Aimbot",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Enlisted Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted Aimbot",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@enlistedhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				features: {
					title: "Functies | Full Feature List",
					description: "Functies: ESP, soft aim, radar controls. directe digitale levering. undetected — Windows PC.",
					h1: "Functies",
					intro: "Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Functies.",
					imageAlt: "Enlisted Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Functies",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Enlisted Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Functies",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. ESP, soft aim, radar controls.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@enlistedhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				pricing: {
					title: "Prijzen | Monthly & Lifetime",
					description: "Prijzen: $35 monthly or $150 lifetime licenses. directe digitale levering. undetected — Windows PC.",
					h1: "Prijzen",
					intro: "Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Prijzen.",
					imageAlt: "Enlisted Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Prijzen",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Enlisted Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prijzen",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@enlistedhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activation and first-launch setup. directe digitale levering. undetected — Windows PC.",
					h1: "Setup",
					intro: "Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Setup.",
					imageAlt: "Enlisted Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Windows PC activation and first-launch setup.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@enlistedhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				updates: {
					title: "Updates | Easy Anti-Cheat Maintenance Log",
					description: "Updates: Easy Anti-Cheat patch status and rebuild notes. directe digitale levering. undetected — Windows PC.",
					h1: "Updates",
					intro: "Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Updates.",
					imageAlt: "Enlisted Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Updates",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Enlisted Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Updates",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@enlistedhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. directe digitale levering. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. FAQ.",
					imageAlt: "Enlisted Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Enlisted Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@enlistedhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: order help and license support contact. directe digitale levering. undetected — Windows PC.",
					h1: "Support",
					intro: "Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Support.",
					imageAlt: "Enlisted Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Enlisted Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. order help and license support contact.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@enlistedhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected Cheats | Easy Anti-Cheat Safe Status",
					description: "Undetected Cheats: undetected maintenance after Easy Anti-Cheat patches. directe digitale levering. undetected — Windows PC.",
					h1: "Undetected Cheats",
					intro: "Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Undetected Cheats.",
					imageAlt: "Enlisted Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected Cheats",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Enlisted Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Undetected Cheats",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@enlistedhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				wallhack: {
					title: "Enlisted Wallhack | ESP Visibility",
					description: "Enlisted Wallhack: wallhack ESP for players, loot, and distance. directe digitale levering. undetected — Windows PC.",
					h1: "Enlisted Wallhack",
					intro: "Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Enlisted Wallhack.",
					imageAlt: "Enlisted wallhack visibility through walls in a raid",
					galleryTitle: "Enlisted Wallhack",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Enlisted Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted Wallhack",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. wallhack ESP for players, loot, and distance.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@enlistedhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. directe digitale levering. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Radar Hack.",
					imageAlt: "Enlisted 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. 2D radar cues for flanks and rotations.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@enlistedhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Enlisted hacks. directe digitale levering. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt: "Enlisted Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Enlisted Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. how Easy Anti-Cheat updates are handled for Enlisted hacks.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@enlistedhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Enlisted Hacks 2026 | Buyer Guide",
					description: "Enlisted Hacks 2026: 2026 Enlisted hacks checklist before checkout. directe digitale levering. undetected — Windows PC.",
					h1: "Enlisted Hacks 2026",
					intro: "Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Enlisted Hacks 2026.",
					imageAlt: "Enlisted Hacks product overview for Enlisted",
					galleryTitle: "Enlisted Hacks 2026",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Enlisted Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Enlisted Hacks 2026",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. 2026 Enlisted hacks checklist before checkout.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@enlistedhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				hacks: {
					title: "Enlisted Hacks | ESP Aimbot Guide",
					description: "Enlisted Hacks: the Enlisted hacks pillar for ESP and Aimbot. directe digitale levering. undetected — Windows PC.",
					h1: "Enlisted Hacks",
					intro: "Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Enlisted Hacks.",
					imageAlt: "Enlisted Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Enlisted Hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Enlisted Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted Hacks",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. the Enlisted hacks pillar for ESP and Aimbot.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@enlistedhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Enlisted Cheat Download | Instant Access",
					description: "Enlisted Cheat Download: digital license download after payment. directe digitale levering. undetected — Windows PC.",
					h1: "Enlisted Cheat Download",
					intro: "Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Enlisted Cheat Download.",
					imageAlt: "Enlisted Hacks download and install delivery flow",
					galleryTitle: "Enlisted Cheat Download",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Enlisted Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Enlisted Cheat Download",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. digital license download after payment.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@enlistedhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Enlisted Mod Menu | In-Game Toggles",
					description: "Enlisted Mod Menu: in-client ESP and soft aim toggles. directe digitale levering. undetected — Windows PC.",
					h1: "Enlisted Mod Menu",
					intro: "Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Enlisted Mod Menu.",
					imageAlt: "Enlisted Hacks in-game menu controls",
					galleryTitle: "Enlisted Mod Menu",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted Mod Menu",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. in-client ESP and soft aim toggles.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@enlistedhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Enlisted Soft Aim | Smooth Aim Settings",
					description: "Enlisted Soft Aim: smooth soft aim settings for Windows PC. directe digitale levering. undetected — Windows PC.",
					h1: "Enlisted Soft Aim",
					intro: "Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Enlisted Soft Aim.",
					imageAlt: "Enlisted soft aim FOV and smoothness settings",
					galleryTitle: "Enlisted Soft Aim",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Enlisted Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Enlisted Soft Aim",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. smooth soft aim settings for Windows PC.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@enlistedhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Beste Enlisted Hacks | Buyer Checklist",
					description: "Beste Enlisted Hacks: what to compare before buying Enlisted hacks. directe digitale levering. undetected — Windows PC.",
					h1: "Beste Enlisted Hacks",
					intro: "Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Beste Enlisted Hacks.",
					imageAlt: "Enlisted Hacks overview for Enlisted on PC",
					galleryTitle: "Beste Enlisted Hacks",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Enlisted Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Beste Enlisted Hacks",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. what to compare before buying Enlisted hacks.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@enlistedhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Enlisted Aimbot Hack | Soft Aim Assist",
					description: "Enlisted Aimbot Hack: undetected Aimbot hack assist for Enlisted. directe digitale levering. undetected — Windows PC.",
					h1: "Enlisted Aimbot Hack",
					intro: "Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Enlisted Aimbot Hack.",
					imageAlt: "Enlisted aimbot hack controls and bone priority",
					galleryTitle: "Enlisted Aimbot Hack",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Enlisted Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Enlisted Aimbot Hack",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. undetected Aimbot hack assist for Enlisted.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@enlistedhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Enlisted ESP Hack | Boxes & Loot",
					description: "Enlisted ESP Hack: ESP hack boxes, loot pins, and distance. directe digitale levering. undetected — Windows PC.",
					h1: "Enlisted ESP Hack",
					intro: "Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Enlisted ESP Hack.",
					imageAlt: "Enlisted ESP hack boxes and loot markers",
					galleryTitle: "Enlisted ESP Hack",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Enlisted Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted ESP Hack",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@enlistedhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Enlisted Unlock All | What It Means",
					description: "Enlisted Unlock All: unlock-all searches vs real ESP and Aimbot tools. directe digitale levering. undetected — Windows PC.",
					h1: "Enlisted Unlock All",
					intro: "Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Enlisted Unlock All.",
					imageAlt: "Enlisted Hacks license features overview",
					galleryTitle: "Enlisted Unlock All",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks kopen",
					ctaSecondary: "Bekijk functies",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted Unlock All",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "directe digitale levering",
							paragraphs: [
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
								"support@enlistedhacks.net voor support en juridische vragen.",
							],
						},
					],
				},
				privacy: {
					title: "Privacybeleid | Enlisted Hacks",
					description: "Privacybeleid for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Privacybeleid",
					intro: "Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Privacybeleid for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on enlistedhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@enlistedhacks.net voor support en juridische vragen.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Restitutiebeleid | Enlisted Hacks",
					description: "Restitutiebeleid for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Restitutiebeleid",
					intro: "Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Restitutiebeleid for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Check Updates na Easy Anti-Cheat-patches. Geen cheat garandeert permanent undetected status.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@enlistedhacks.net voor support en juridische vragen.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Gebruiksvoorwaarden | Enlisted Hacks",
					description: "Gebruiksvoorwaarden for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gebruiksvoorwaarden",
					intro: "Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Gebruiksvoorwaarden for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenties met directe digitale levering via Zadeyo checkout. $35/maand en $150 lifetime incl. Easy Anti-Cheat-onderhoud.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Enlisted Hacks bundelt ESP wallhack, radar hack en enlisted aimbot als undetected pakket voor Enlisted op Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@enlistedhacks.net voor support en juridische vragen.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
			},
		},
		pl: {
			ui: {
				nav: {
					home: "Strona główna",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkcje",
					pricing: "Cennik",
					setup: "Instalacja",
					updates: "Aktualizacje",
					faq: "FAQ",
					buyNow: "Kup teraz",
				},
				hero: {
					accent: "Undetected cheaty Enlisted",
					accentShort: "Enlisted Hacks",
					subtitle: "ESP wallhack, radar hack i Aimbot do Enlisted na PC Windows — konserwacja Easy Anti-Cheat w cenie.",
					subtitleShort: "ESP, radar i Aimbot dla Enlisted PC",
					buyNow: "Kup teraz",
					seeFeatures: "Zobacz funkcje",
				},
				trust: {
					status: "Online",
					statusNote: "Pakiet Enlisted Hacks jest aktywny dla Enlisted na PC Windows.",
					statusShort: "Aktywny",
					delivery: "Natychmiastowa dostawa cyfrowa",
					platform: "Windows 10 i 11",
					antiCheat: "Wsparcie konserwacji Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat wsparcie",
				},
				product: {
					title: "Enlisted Hacks",
					addToCart: "Dodaj do koszyka",
					monthly: "Miesięcznie",
					lifetime: "Dożywotnio",
					available: "Dostępne teraz",
					gameBadge: "Enlisted",
					platformBadge: "PC Windows",
					statusBadge: "Pakiet undetected",
				},
				reviews: {
					title: "Co mówią gracze",
					subtitle: "Ostatnie opinie kupujących Enlisted Hacks",
					outOf: "na 5",
					countLabel: "opinii",
				},
				common: {
					buyNow: "Kup teraz",
					readGuide: "Czytaj poradnik",
					language: "Język",
					officialLanguageNote: "Angielski jest językiem oficjalnym. Inne wersje są tłumaczone dla globalnego SEO.",
					relatedPages: "Powiązane strony",
				},
				footer: {
					explore: "Odkrywaj",
					help: "Pomoc i prawo",
					tagline: "Undetected ESP, wallhack, radar i Aimbot dla Enlisted — checkout przez Zadeyo.",
				},
				images: {
					hero: "Enlisted Hacks hero — ESP and aimbot overlay in Enlisted",
					espWallhack: "Wallhack outlines showing enemy soldiers and AI soldiers through walls",
					aimbotCombat: "Soft aim assist overlay during an Enlisted raid",
					squadFight: "Enlisted Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Enlisted raid",
					headerArt: "Aimbot view and bone priority controls for Enlisted",
					cheatsPackage: "2D radar threat overlay for Enlisted",
					rebootFight: "Aimbot assist during a Enlisted firefight",
					battleRoyale: "Enlisted Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Enlisted",
				},
			},
			pages: {
				home: {
					title: "Enlisted Hacks 2026 | ESP, Wallhack i Aimbot",
					description: "Undetected cheaty Enlisted dla Enlisted na PC. ESP wallhack, radar hack i Aimbot z konserwacją Easy Anti-Cheat. Natychmiastowa dostawa",
					h1: "Enlisted Hacks — Undetected ESP, Wallhack i Aimbot",
					intro: "Pakiet undetected dla Enlisted na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Easy Anti-Cheat po każdym patchu.",
					imageAlt: "Enlisted ESP player tags hack",
					galleryTitle: "Galeria Enlisted Hacks — ESP, Aimbot i wallhack",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Kup Enlisted Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Dlaczego Enlisted Hacks w 2026",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Idealny do czytania wrogich squadów w BR i scav-run.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar i Aimbot w jednej licencji",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Jedna licencja zamiast osobnych narzędzi.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
					],
				},
				"enlisted-esp": {
					title: "ESP Enlisted | Player Boxes & Wallhack",
					description: "ESP Enlisted: player boxes, loot markers, and wallhack overlays. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "ESP Enlisted",
					intro: "Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. ESP Enlisted.",
					imageAlt: "Enlisted ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Kup Enlisted Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "ESP Enlisted",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@enlistedhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"enlisted-aimbot": {
					title: "Aimbot Enlisted | Soft Aim Controls",
					description: "Aimbot Enlisted: soft aim, FOV, and per-weapon Aimbot profiles. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aimbot Enlisted",
					intro: "Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Aimbot Enlisted.",
					imageAlt: "Enlisted aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Kup Enlisted Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Aimbot Enlisted",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@enlistedhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				features: {
					title: "Funkcje | Full Feature List",
					description: "Funkcje: ESP, soft aim, radar controls. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Funkcje",
					intro: "Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Funkcje.",
					imageAlt: "Enlisted Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkcje",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Kup Enlisted Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkcje",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. ESP, soft aim, radar controls.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@enlistedhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				pricing: {
					title: "Cennik | Monthly & Lifetime",
					description: "Cennik: $35 monthly or $150 lifetime licenses. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cennik",
					intro: "Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Cennik.",
					imageAlt: "Enlisted Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Cennik",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Kup Enlisted Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Cennik",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@enlistedhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				setup: {
					title: "Instalacja | PC Setup Guide",
					description: "Instalacja: Windows PC activation and first-launch setup. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Instalacja",
					intro: "Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Instalacja.",
					imageAlt: "Enlisted Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalacja",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Kup Enlisted Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalacja",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Windows PC activation and first-launch setup.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@enlistedhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizacje | Easy Anti-Cheat Maintenance Log",
					description: "Aktualizacje: Easy Anti-Cheat patch status and rebuild notes. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Aktualizacje",
					intro: "Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Aktualizacje.",
					imageAlt: "Enlisted Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Aktualizacje",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Kup Enlisted Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Aktualizacje",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@enlistedhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. FAQ.",
					imageAlt: "Enlisted Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Kup Enlisted Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@enlistedhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				support: {
					title: "Wsparcie | Help & Contact",
					description: "Wsparcie: order help and license support contact. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wsparcie",
					intro: "Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Wsparcie.",
					imageAlt: "Enlisted Hacks support page for license and setup help",
					galleryTitle: "Wsparcie",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Kup Enlisted Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Wsparcie",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. order help and license support contact.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@enlistedhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				undetected: {
					title: "Cheaty undetected | Easy Anti-Cheat Safe Status",
					description: "Cheaty undetected: undetected maintenance after Easy Anti-Cheat patches. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty undetected",
					intro: "Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Cheaty undetected.",
					imageAlt: "Enlisted Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheaty undetected",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Kup Enlisted Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Cheaty undetected",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@enlistedhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Enlisted | ESP Visibility",
					description: "Wallhack Enlisted: wallhack ESP for players, loot, and distance. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Wallhack Enlisted",
					intro: "Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Wallhack Enlisted.",
					imageAlt: "Enlisted wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Enlisted",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Kup Enlisted Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Wallhack Enlisted",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. wallhack ESP for players, loot, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@enlistedhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Radar hack.",
					imageAlt: "Enlisted 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Kup Enlisted Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. 2D radar cues for flanks and rotations.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@enlistedhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Enlisted hacks. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Enlisted Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Kup Enlisted Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. how Easy Anti-Cheat updates are handled for Enlisted hacks.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@enlistedhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheaty Enlisted 2026 | Buyer Guide",
					description: "Cheaty Enlisted 2026: 2026 Enlisted hacks checklist before checkout. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty Enlisted 2026",
					intro: "Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Cheaty Enlisted 2026.",
					imageAlt: "Enlisted Hacks product overview for Enlisted",
					galleryTitle: "Cheaty Enlisted 2026",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Kup Enlisted Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Cheaty Enlisted 2026",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. 2026 Enlisted hacks checklist before checkout.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@enlistedhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				hacks: {
					title: "Cheaty Enlisted | ESP Aimbot Guide",
					description: "Cheaty Enlisted: the Enlisted hacks pillar for ESP and Aimbot. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Cheaty Enlisted",
					intro: "Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Cheaty Enlisted.",
					imageAlt: "Enlisted Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheaty Enlisted",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Kup Enlisted Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheaty Enlisted",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. the Enlisted hacks pillar for ESP and Aimbot.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@enlistedhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Pobieranie Enlisted Hacks | Instant Access",
					description: "Pobieranie Enlisted Hacks: digital license download after payment. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Pobieranie Enlisted Hacks",
					intro: "Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Pobieranie Enlisted Hacks.",
					imageAlt: "Enlisted Hacks download and install delivery flow",
					galleryTitle: "Pobieranie Enlisted Hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Kup Enlisted Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Pobieranie Enlisted Hacks",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. digital license download after payment.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@enlistedhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Enlisted | In-Game Toggles",
					description: "Mod menu Enlisted: in-client ESP and soft aim toggles. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Mod menu Enlisted",
					intro: "Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Mod menu Enlisted.",
					imageAlt: "Enlisted Hacks in-game menu controls",
					galleryTitle: "Mod menu Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Kup Enlisted Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Enlisted",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. in-client ESP and soft aim toggles.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@enlistedhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Enlisted | Smooth Aim Settings",
					description: "Soft aim Enlisted: smooth soft aim settings for Windows PC. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Soft aim Enlisted",
					intro: "Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Soft aim Enlisted.",
					imageAlt: "Enlisted soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Kup Enlisted Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Soft aim Enlisted",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. smooth soft aim settings for Windows PC.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@enlistedhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Najlepsze cheaty Enlisted | Buyer Checklist",
					description: "Najlepsze cheaty Enlisted: what to compare before buying Enlisted hacks. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Najlepsze cheaty Enlisted",
					intro: "Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Najlepsze cheaty Enlisted.",
					imageAlt: "Enlisted Hacks overview for Enlisted on PC",
					galleryTitle: "Najlepsze cheaty Enlisted",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Kup Enlisted Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Najlepsze cheaty Enlisted",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. what to compare before buying Enlisted hacks.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@enlistedhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Enlisted | Soft Aim Assist",
					description: "Hack aimbot Enlisted: undetected Aimbot hack assist for Enlisted. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack aimbot Enlisted",
					intro: "Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Hack aimbot Enlisted.",
					imageAlt: "Enlisted aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Kup Enlisted Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Enlisted",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. undetected Aimbot hack assist for Enlisted.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@enlistedhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Enlisted | Boxes & Loot",
					description: "Hack ESP Enlisted: ESP hack boxes, loot pins, and distance. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Hack ESP Enlisted",
					intro: "Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Hack ESP Enlisted.",
					imageAlt: "Enlisted ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Enlisted",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Kup Enlisted Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Hack ESP Enlisted",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@enlistedhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Enlisted | What It Means",
					description: "Unlock all Enlisted: unlock-all searches vs real ESP and Aimbot tools. natychmiastowa dostawa cyfrowa. undetected — PC Windows.",
					h1: "Unlock all Enlisted",
					intro: "Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Unlock all Enlisted.",
					imageAlt: "Enlisted Hacks license features overview",
					galleryTitle: "Unlock all Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Kup Enlisted Hacks",
					ctaSecondary: "Zobacz funkcje",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Enlisted",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "natychmiastowa dostawa cyfrowa",
							paragraphs: [
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
								"support@enlistedhacks.net w sprawach wsparcia i prawnych.",
							],
						},
					],
				},
				privacy: {
					title: "Polityka prywatności | Enlisted Hacks",
					description: "Polityka prywatności for Enlisted Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka prywatności",
					intro: "Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Polityka prywatności for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on enlistedhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@enlistedhacks.net w sprawach wsparcia i prawnych.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Polityka zwrotów | Enlisted Hacks",
					description: "Polityka zwrotów for Enlisted Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Polityka zwrotów",
					intro: "Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Polityka zwrotów for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Sprawdź Updates po patchach Easy Anti-Cheat. Żaden cheat nie gwarantuje permanentnego undetected statusu.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@enlistedhacks.net w sprawach wsparcia i prawnych.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Warunki użytkowania | Enlisted Hacks",
					description: "Warunki użytkowania for Enlisted Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Warunki użytkowania",
					intro: "Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Warunki użytkowania for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licencje z natychmiastowa dostawa cyfrowa przez checkout Zadeyo. Plany $35/mies. i $150 lifetime z konserwacją Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Enlisted Hacks łączy ESP wallhack, radar hack i enlisted aimbot jako pakiet undetected dla Enlisted na PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@enlistedhacks.net w sprawach wsparcia i prawnych.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
			},
		},
		ru: {
			ui: {
				nav: {
					home: "Главная",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функции",
					pricing: "Цены",
					setup: "Установка",
					updates: "Обновления",
					faq: "FAQ",
					buyNow: "Купить",
				},
				hero: {
					accent: "Undetected читы Enlisted",
					accentShort: "Enlisted Hacks",
					subtitle: "ESP wallhack, radar hack и Aimbot для Enlisted на Windows PC — обслуживание Easy Anti-Cheat включено.",
					subtitleShort: "ESP, radar и Aimbot для Enlisted PC",
					buyNow: "Купить",
					seeFeatures: "Смотреть функции",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет Enlisted Hacks активен для Enlisted на Windows PC.",
					statusShort: "Активен",
					delivery: "Мгновенная цифровая доставка",
					platform: "Windows 10 и 11",
					antiCheat: "Поддержка обслуживания Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat поддержка",
				},
				product: {
					title: "Enlisted Hacks",
					addToCart: "В корзину",
					monthly: "Месяц",
					lifetime: "Навсегда",
					available: "Доступно сейчас",
					gameBadge: "Enlisted",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Что говорят игроки",
					subtitle: "Недавние отзывы покупателей Enlisted Hacks",
					outOf: "из 5",
					countLabel: "отзывов",
				},
				common: {
					buyNow: "Купить",
					readGuide: "Читать гайд",
					language: "Язык",
					officialLanguageNote: "Английский — официальный язык. Другие версии переведены для глобального SEO.",
					relatedPages: "Похожие страницы",
				},
				footer: {
					explore: "Обзор",
					help: "Помощь и право",
					tagline: "Undetected ESP, wallhack, radar и Aimbot для Enlisted — оплата через Zadeyo.",
				},
				images: {
					hero: "Enlisted Hacks hero — ESP and aimbot overlay in Enlisted",
					espWallhack: "Wallhack outlines showing enemy soldiers and AI soldiers through walls",
					aimbotCombat: "Soft aim assist overlay during an Enlisted raid",
					squadFight: "Enlisted Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Enlisted raid",
					headerArt: "Aimbot view and bone priority controls for Enlisted",
					cheatsPackage: "2D radar threat overlay for Enlisted",
					rebootFight: "Aimbot assist during a Enlisted firefight",
					battleRoyale: "Enlisted Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Enlisted",
				},
			},
			pages: {
				home: {
					title: "Enlisted Hacks 2026 | ESP, Wallhack и Aimbot",
					description: "Undetected читы Enlisted для Enlisted на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Easy Anti-Cheat. Мгновенная цифровая",
					h1: "Enlisted Hacks — Undetected ESP, Wallhack и Aimbot",
					intro: "Undetected пакет для Enlisted на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Easy Anti-Cheat после патчей.",
					imageAlt: "Enlisted ESP player tags hack",
					galleryTitle: "Галерея Enlisted Hacks — ESP, Aimbot и wallhack",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Купить Enlisted Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Почему выбирают Enlisted Hacks в 2026",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Идеально для чтения вражеских отрядов в BR и scav-run.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar и Aimbot в одной лицензии",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Одна лицензия вместо отдельных инструментов.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
					],
				},
				"enlisted-esp": {
					title: "ESP Enlisted | Боксы игроков и wallhack",
					description: "ESP Enlisted: player boxes, loot markers, and wallhack overlays. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "ESP Enlisted",
					intro: "Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. ESP Enlisted.",
					imageAlt: "Enlisted ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Купить Enlisted Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "ESP Enlisted",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@enlistedhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"enlisted-aimbot": {
					title: "Aimbot Enlisted | Управление soft aim",
					description: "Aimbot Enlisted: soft aim, FOV, and per-weapon Aimbot profiles. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Aimbot Enlisted",
					intro: "Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Aimbot Enlisted.",
					imageAlt: "Enlisted aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Купить Enlisted Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Aimbot Enlisted",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@enlistedhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				features: {
					title: "Функции | Полный список функций",
					description: "Функции: ESP, soft aim, radar controls. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Функции",
					intro: "Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Функции.",
					imageAlt: "Enlisted Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функции",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Купить Enlisted Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функции",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. ESP, soft aim, radar controls.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@enlistedhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				pricing: {
					title: "Цены | Месяц и lifetime",
					description: "Цены: $35 monthly or $150 lifetime licenses. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Цены",
					intro: "Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Цены.",
					imageAlt: "Enlisted Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Цены",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Купить Enlisted Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Цены",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. $35 monthly or $150 lifetime licenses.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@enlistedhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				setup: {
					title: "Установка | Гайд по установке",
					description: "Установка: Windows PC activation and first-launch setup. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Установка",
					intro: "Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Установка.",
					imageAlt: "Enlisted Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Установка",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Купить Enlisted Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Установка",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Windows PC activation and first-launch setup.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@enlistedhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				updates: {
					title: "Обновления | Журнал Easy Anti-Cheat",
					description: "Обновления: Easy Anti-Cheat patch status and rebuild notes. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Обновления",
					intro: "Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Обновления.",
					imageAlt: "Enlisted Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Обновления",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Купить Enlisted Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Обновления",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@enlistedhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Частые вопросы",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. FAQ.",
					imageAlt: "Enlisted Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Купить Enlisted Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@enlistedhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				support: {
					title: "Поддержка | Помощь и контакт",
					description: "Поддержка: order help and license support contact. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Поддержка",
					intro: "Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Поддержка.",
					imageAlt: "Enlisted Hacks support page for license and setup help",
					galleryTitle: "Поддержка",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Купить Enlisted Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Поддержка",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. order help and license support contact.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@enlistedhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected читы | Статус undetected",
					description: "Undetected читы: undetected maintenance after Easy Anti-Cheat patches. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Undetected читы",
					intro: "Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Undetected читы.",
					imageAlt: "Enlisted Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected читы",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Купить Enlisted Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Undetected читы",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@enlistedhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Enlisted | Видимость ESP",
					description: "Wallhack Enlisted: wallhack ESP for players, loot, and distance. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Wallhack Enlisted",
					intro: "Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Wallhack Enlisted.",
					imageAlt: "Enlisted wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Enlisted",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Купить Enlisted Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Wallhack Enlisted",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. wallhack ESP for players, loot, and distance.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@enlistedhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D радар угроз",
					description: "Radar hack: 2D radar cues for flanks and rotations. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Radar hack.",
					imageAlt: "Enlisted 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Купить Enlisted Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. 2D radar cues for flanks and rotations.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@enlistedhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Обслуживание патчей",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Enlisted hacks. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "Enlisted Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Купить Enlisted Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. how Easy Anti-Cheat updates are handled for Enlisted hacks.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@enlistedhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Читы Enlisted 2026 | Гайд покупателя",
					description: "Читы Enlisted 2026: 2026 Enlisted hacks checklist before checkout. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы Enlisted 2026",
					intro: "Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Читы Enlisted 2026.",
					imageAlt: "Enlisted Hacks product overview for Enlisted",
					galleryTitle: "Читы Enlisted 2026",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Купить Enlisted Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Читы Enlisted 2026",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. 2026 Enlisted hacks checklist before checkout.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@enlistedhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				hacks: {
					title: "Читы Enlisted | Гайд ESP и Aimbot",
					description: "Читы Enlisted: the Enlisted hacks pillar for ESP and Aimbot. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Читы Enlisted",
					intro: "Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Читы Enlisted.",
					imageAlt: "Enlisted Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Читы Enlisted",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Купить Enlisted Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Читы Enlisted",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. the Enlisted hacks pillar for ESP and Aimbot.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@enlistedhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Скачать Enlisted Hacks | Мгновенный доступ",
					description: "Скачать Enlisted Hacks: digital license download after payment. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Скачать Enlisted Hacks",
					intro: "Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Скачать Enlisted Hacks.",
					imageAlt: "Enlisted Hacks download and install delivery flow",
					galleryTitle: "Скачать Enlisted Hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Купить Enlisted Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Скачать Enlisted Hacks",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. digital license download after payment.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@enlistedhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Enlisted | Игровые переключатели",
					description: "Мод-меню Enlisted: in-client ESP and soft aim toggles. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Мод-меню Enlisted",
					intro: "Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Мод-меню Enlisted.",
					imageAlt: "Enlisted Hacks in-game menu controls",
					galleryTitle: "Мод-меню Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Купить Enlisted Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Enlisted",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. in-client ESP and soft aim toggles.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@enlistedhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Enlisted | Настройки soft aim",
					description: "Soft aim Enlisted: smooth soft aim settings for Windows PC. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Soft aim Enlisted",
					intro: "Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Soft aim Enlisted.",
					imageAlt: "Enlisted soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Купить Enlisted Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Soft aim Enlisted",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. smooth soft aim settings for Windows PC.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@enlistedhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Лучшие читы Enlisted | Чеклист покупателя",
					description: "Лучшие читы Enlisted: what to compare before buying Enlisted hacks. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Лучшие читы Enlisted",
					intro: "Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Лучшие читы Enlisted.",
					imageAlt: "Enlisted Hacks overview for Enlisted on PC",
					galleryTitle: "Лучшие читы Enlisted",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Купить Enlisted Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Лучшие читы Enlisted",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. what to compare before buying Enlisted hacks.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@enlistedhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Enlisted | Soft aim ассист",
					description: "Хак aimbot Enlisted: undetected Aimbot hack assist for Enlisted. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак aimbot Enlisted",
					intro: "Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Хак aimbot Enlisted.",
					imageAlt: "Enlisted aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Купить Enlisted Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Хак aimbot Enlisted",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. undetected Aimbot hack assist for Enlisted.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@enlistedhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Enlisted | Боксы и лут",
					description: "Хак ESP Enlisted: ESP hack boxes, loot pins, and distance. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Хак ESP Enlisted",
					intro: "Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Хак ESP Enlisted.",
					imageAlt: "Enlisted ESP hack boxes and loot markers",
					galleryTitle: "Хак ESP Enlisted",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Купить Enlisted Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Хак ESP Enlisted",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. ESP hack boxes, loot pins, and distance.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@enlistedhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Enlisted | Что это значит",
					description: "Unlock all Enlisted: unlock-all searches vs real ESP and Aimbot tools. мгновенная цифровая доставка. undetected — Windows PC.",
					h1: "Unlock all Enlisted",
					intro: "Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Unlock all Enlisted.",
					imageAlt: "Enlisted Hacks license features overview",
					galleryTitle: "Unlock all Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Купить Enlisted Hacks",
					ctaSecondary: "Смотреть функции",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Enlisted",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "мгновенная цифровая доставка",
							paragraphs: [
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
								"support@enlistedhacks.net для поддержки и юридических вопросов.",
							],
						},
					],
				},
				privacy: {
					title: "Политика конфиденциальности | Enlisted Hacks",
					description: "Политика конфиденциальности for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика конфиденциальности",
					intro: "Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Политика конфиденциальности for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on enlistedhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@enlistedhacks.net для поддержки и юридических вопросов.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Политика возврата | Enlisted Hacks",
					description: "Политика возврата for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Политика возврата",
					intro: "Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Политика возврата for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Проверяйте Updates после патчей Easy Anti-Cheat. Ни один чит не гарантирует постоянный undetected статус.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@enlistedhacks.net для поддержки и юридических вопросов.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Условия использования | Enlisted Hacks",
					description: "Условия использования for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Условия использования",
					intro: "Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Условия использования for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Лицензии с мгновенная цифровая доставка через checkout Zadeyo. Тарифы $35/мес и $150 навсегда включают обслуживание Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Enlisted Hacks объединяет ESP wallhack, radar hack и enlisted aimbot в undetected пакете для Enlisted на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@enlistedhacks.net для поддержки и юридических вопросов.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
			},
		},
		tr: {
			ui: {
				nav: {
					home: "Ana sayfa",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Özellikler",
					pricing: "Fiyatlar",
					setup: "Kurulum",
					updates: "Güncellemeler",
					faq: "SSS",
					buyNow: "Satın al",
				},
				hero: {
					accent: "Undetected Enlisted hileleri",
					accentShort: "Enlisted Hacks",
					subtitle: "Enlisted Windows PC için ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat bakımı dahil.",
					subtitleShort: "Enlisted PC için ESP, radar ve Aimbot",
					buyNow: "Satın al",
					seeFeatures: "Özellikleri gör",
				},
				trust: {
					status: "Çevrimiçi",
					statusNote: "Enlisted Hacks paketi Enlisted Windows PC için aktif.",
					statusShort: "Aktif",
					delivery: "Anında dijital teslimat",
					platform: "Windows 10 ve 11",
					antiCheat: "Easy Anti-Cheat bakım desteği",
					antiCheatShort: "Easy Anti-Cheat destek",
				},
				product: {
					title: "Enlisted Hacks",
					addToCart: "Sepete ekle",
					monthly: "Aylık",
					lifetime: "Ömür boyu",
					available: "Şimdi mevcut",
					gameBadge: "Enlisted",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Oyuncular ne diyor",
					subtitle: "Enlisted Hacks alıcılarından son geri bildirimler",
					outOf: "/5",
					countLabel: "yorum",
				},
				common: {
					buyNow: "Satın al",
					readGuide: "Rehberi oku",
					language: "Dil",
					officialLanguageNote: "Resmi dil İngilizcedir. Diğer diller küresel SEO için çevrilmiştir.",
					relatedPages: "İlgili sayfalar",
				},
				footer: {
					explore: "Keşfet",
					help: "Yardım ve yasal",
					tagline: "Enlisted için undetected ESP, wallhack, radar ve Aimbot — Zadeyo checkout.",
				},
				images: {
					hero: "Enlisted Hacks hero — ESP and aimbot overlay in Enlisted",
					espWallhack: "Wallhack outlines showing enemy soldiers and AI soldiers through walls",
					aimbotCombat: "Soft aim assist overlay during an Enlisted raid",
					squadFight: "Enlisted Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Enlisted raid",
					headerArt: "Aimbot view and bone priority controls for Enlisted",
					cheatsPackage: "2D radar threat overlay for Enlisted",
					rebootFight: "Aimbot assist during a Enlisted firefight",
					battleRoyale: "Enlisted Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Enlisted",
				},
			},
			pages: {
				home: {
					title: "Enlisted Hacks 2026 | ESP, Wallhack ve Aimbot",
					description: "Enlisted için undetected hileler. ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat bakımı. Anında dijital teslimat.",
					h1: "Enlisted Hacks — Undetected ESP, Wallhack ve Aimbot",
					intro: "Enlisted Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Easy Anti-Cheat bakımı dahil.",
					imageAlt: "Enlisted ESP player tags hack",
					galleryTitle: "Enlisted Hacks galeri — ESP, Aimbot ve wallhack",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Enlisted Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026'da neden Enlisted Hacks",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. BR ve scav-run'da düşman squad okumak için ideal.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "ESP wallhack, radar ve Aimbot tek lisans",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Ayrı araçlar yerine tek lisans.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
					],
				},
				"enlisted-esp": {
					title: "Enlisted ESP | Player Boxes & Wallhack",
					description: "Enlisted ESP: player boxes, loot markers, and wallhack overlays. anında dijital teslimat. undetected — Windows PC.",
					h1: "Enlisted ESP",
					intro: "Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Enlisted ESP.",
					imageAlt: "Enlisted ESP player boxes and distance readouts in a raid",
					galleryTitle: "Enlisted ESP",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Enlisted ESP",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@enlistedhacks.net.",
							],
						},
					],
				},
				"enlisted-aimbot": {
					title: "Enlisted Aimbot | Soft Aim Controls",
					description: "Enlisted Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. anında dijital teslimat. undetected — Windows PC.",
					h1: "Enlisted Aimbot",
					intro: "Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Enlisted Aimbot.",
					imageAlt: "Enlisted aimbot and soft aim controls on Windows PC",
					galleryTitle: "Enlisted Aimbot",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Enlisted Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted Aimbot",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@enlistedhacks.net.",
							],
						},
					],
				},
				features: {
					title: "Özellikler | Full Feature List",
					description: "Özellikler: ESP, soft aim, radar controls. anında dijital teslimat. undetected — Windows PC.",
					h1: "Özellikler",
					intro: "Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Özellikler.",
					imageAlt: "Enlisted Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Özellikler",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Enlisted Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Özellikler",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. ESP, soft aim, radar controls.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@enlistedhacks.net.",
							],
						},
					],
				},
				pricing: {
					title: "Fiyatlar | Monthly & Lifetime",
					description: "Fiyatlar: $35 monthly or $150 lifetime licenses. anında dijital teslimat. undetected — Windows PC.",
					h1: "Fiyatlar",
					intro: "Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Fiyatlar.",
					imageAlt: "Enlisted Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Fiyatlar",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Enlisted Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Fiyatlar",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@enlistedhacks.net.",
							],
						},
					],
				},
				setup: {
					title: "Kurulum | PC Setup Guide",
					description: "Kurulum: Windows PC activation and first-launch setup. anında dijital teslimat. undetected — Windows PC.",
					h1: "Kurulum",
					intro: "Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Kurulum.",
					imageAlt: "Enlisted Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Kurulum",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Kurulum",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Windows PC activation and first-launch setup.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@enlistedhacks.net.",
							],
						},
					],
				},
				updates: {
					title: "Güncellemeler | Easy Anti-Cheat Maintenance Log",
					description: "Güncellemeler: Easy Anti-Cheat patch status and rebuild notes. anında dijital teslimat. undetected — Windows PC.",
					h1: "Güncellemeler",
					intro: "Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Güncellemeler.",
					imageAlt: "Enlisted Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Güncellemeler",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Enlisted Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Güncellemeler",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Easy Anti-Cheat patch status and rebuild notes.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@enlistedhacks.net.",
							],
						},
					],
				},
				faq: {
					title: "SSS | Common Answers",
					description: "SSS: ESP, soft aim, delivery, and Easy Anti-Cheat questions. anında dijital teslimat. undetected — Windows PC.",
					h1: "SSS",
					intro: "Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. SSS.",
					imageAlt: "Enlisted Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "SSS",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Enlisted Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "SSS",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@enlistedhacks.net.",
							],
						},
					],
				},
				support: {
					title: "Destek | Help & Contact",
					description: "Destek: order help and license support contact. anında dijital teslimat. undetected — Windows PC.",
					h1: "Destek",
					intro: "Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Destek.",
					imageAlt: "Enlisted Hacks support page for license and setup help",
					galleryTitle: "Destek",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Enlisted Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Destek",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. order help and license support contact.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@enlistedhacks.net.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected hileler | Easy Anti-Cheat Safe Status",
					description: "Undetected hileler: undetected maintenance after Easy Anti-Cheat patches. anında dijital teslimat. undetected — Windows PC.",
					h1: "Undetected hileler",
					intro: "Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Undetected hileler.",
					imageAlt: "Enlisted Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected hileler",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Enlisted Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Undetected hileler",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. undetected maintenance after Easy Anti-Cheat patches.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@enlistedhacks.net.",
							],
						},
					],
				},
				wallhack: {
					title: "Enlisted Wallhack | ESP Visibility",
					description: "Enlisted Wallhack: wallhack ESP for players, loot, and distance. anında dijital teslimat. undetected — Windows PC.",
					h1: "Enlisted Wallhack",
					intro: "Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Enlisted Wallhack.",
					imageAlt: "Enlisted wallhack visibility through walls in a raid",
					galleryTitle: "Enlisted Wallhack",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Enlisted Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted Wallhack",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@enlistedhacks.net.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. anında dijital teslimat. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Radar hack.",
					imageAlt: "Enlisted 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. 2D radar cues for flanks and rotations.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@enlistedhacks.net.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat bypass | Patch Maintenance",
					description: "Easy Anti-Cheat bypass: how Easy Anti-Cheat updates are handled for Enlisted hacks. anında dijital teslimat. undetected — Windows PC.",
					h1: "Easy Anti-Cheat bypass",
					intro: "Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Easy Anti-Cheat bypass.",
					imageAlt: "Enlisted Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat bypass",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Enlisted Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat bypass",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. how Easy Anti-Cheat updates are handled for Enlisted hacks.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@enlistedhacks.net.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Enlisted Hileleri 2026 | Buyer Guide",
					description: "Enlisted Hileleri 2026: 2026 Enlisted hacks checklist before checkout. anında dijital teslimat. undetected — Windows PC.",
					h1: "Enlisted Hileleri 2026",
					intro: "Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Enlisted Hileleri 2026.",
					imageAlt: "Enlisted Hacks product overview for Enlisted",
					galleryTitle: "Enlisted Hileleri 2026",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Enlisted Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Enlisted Hileleri 2026",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. 2026 Enlisted hacks checklist before checkout.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@enlistedhacks.net.",
							],
						},
					],
				},
				hacks: {
					title: "Enlisted Hileleri | ESP Aimbot Guide",
					description: "Enlisted Hileleri: the Enlisted hacks pillar for ESP and Aimbot. anında dijital teslimat. undetected — Windows PC.",
					h1: "Enlisted Hileleri",
					intro: "Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Enlisted Hileleri.",
					imageAlt: "Enlisted Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Enlisted Hileleri",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Enlisted Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted Hileleri",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. the Enlisted hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@enlistedhacks.net.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Enlisted Hile İndir | Instant Access",
					description: "Enlisted Hile İndir: digital license download after payment. anında dijital teslimat. undetected — Windows PC.",
					h1: "Enlisted Hile İndir",
					intro: "Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Enlisted Hile İndir.",
					imageAlt: "Enlisted Hacks download and install delivery flow",
					galleryTitle: "Enlisted Hile İndir",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Enlisted Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Enlisted Hile İndir",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. digital license download after payment.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@enlistedhacks.net.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Enlisted Mod Menü | In-Game Toggles",
					description: "Enlisted Mod Menü: in-client ESP and soft aim toggles. anında dijital teslimat. undetected — Windows PC.",
					h1: "Enlisted Mod Menü",
					intro: "Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Enlisted Mod Menü.",
					imageAlt: "Enlisted Hacks in-game menu controls",
					galleryTitle: "Enlisted Mod Menü",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted Mod Menü",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. in-client ESP and soft aim toggles.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@enlistedhacks.net.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Enlisted Soft Aim | Smooth Aim Settings",
					description: "Enlisted Soft Aim: smooth soft aim settings for Windows PC. anında dijital teslimat. undetected — Windows PC.",
					h1: "Enlisted Soft Aim",
					intro: "Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Enlisted Soft Aim.",
					imageAlt: "Enlisted soft aim FOV and smoothness settings",
					galleryTitle: "Enlisted Soft Aim",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Enlisted Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Enlisted Soft Aim",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. smooth soft aim settings for Windows PC.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@enlistedhacks.net.",
							],
						},
					],
				},
				"best-cheats": {
					title: "En İyi Enlisted Hileleri | Buyer Checklist",
					description: "En İyi Enlisted Hileleri: what to compare before buying Enlisted hacks. anında dijital teslimat. undetected — Windows PC.",
					h1: "En İyi Enlisted Hileleri",
					intro: "Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. En İyi Enlisted Hileleri.",
					imageAlt: "Enlisted Hacks overview for Enlisted on PC",
					galleryTitle: "En İyi Enlisted Hileleri",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Enlisted Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "En İyi Enlisted Hileleri",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. what to compare before buying Enlisted hacks.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@enlistedhacks.net.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Enlisted Aimbot Hilesi | Soft Aim Assist",
					description: "Enlisted Aimbot Hilesi: undetected Aimbot hack assist for Enlisted. anında dijital teslimat. undetected — Windows PC.",
					h1: "Enlisted Aimbot Hilesi",
					intro: "Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Enlisted Aimbot Hilesi.",
					imageAlt: "Enlisted aimbot hack controls and bone priority",
					galleryTitle: "Enlisted Aimbot Hilesi",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Enlisted Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Enlisted Aimbot Hilesi",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. undetected Aimbot hack assist for Enlisted.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@enlistedhacks.net.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Enlisted ESP Hilesi | Boxes & Loot",
					description: "Enlisted ESP Hilesi: ESP hack boxes, loot pins, and distance. anında dijital teslimat. undetected — Windows PC.",
					h1: "Enlisted ESP Hilesi",
					intro: "Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Enlisted ESP Hilesi.",
					imageAlt: "Enlisted ESP hack boxes and loot markers",
					galleryTitle: "Enlisted ESP Hilesi",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Enlisted Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted ESP Hilesi",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@enlistedhacks.net.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Enlisted Unlock All | What It Means",
					description: "Enlisted Unlock All: unlock-all searches vs real ESP and Aimbot tools. anında dijital teslimat. undetected — Windows PC.",
					h1: "Enlisted Unlock All",
					intro: "Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Enlisted Unlock All.",
					imageAlt: "Enlisted Hacks license features overview",
					galleryTitle: "Enlisted Unlock All",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks satın al",
					ctaSecondary: "Özellikleri gör",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted Unlock All",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "anında dijital teslimat",
							paragraphs: [
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
								"Destek ve yasal sorular için support@enlistedhacks.net.",
							],
						},
					],
				},
				privacy: {
					title: "Gizlilik politikası | Enlisted Hacks",
					description: "Gizlilik politikası for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Gizlilik politikası",
					intro: "Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Gizlilik politikası for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on enlistedhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"Destek ve yasal sorular için support@enlistedhacks.net.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				refund: {
					title: "İade politikası | Enlisted Hacks",
					description: "İade politikası for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "İade politikası",
					intro: "Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. İade politikası for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat yamalarından sonra Updates sayfasını kontrol edin. Hiçbir hile kalıcı undetected garantisi vermez.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"Destek ve yasal sorular için support@enlistedhacks.net.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Kullanım şartları | Enlisted Hacks",
					description: "Kullanım şartları for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Kullanım şartları",
					intro: "Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Kullanım şartları for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout ile anında dijital teslimat. $35/ay ve $150 ömür boyu planları Easy Anti-Cheat bakımı içerir.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Enlisted Hacks, Enlisted için Windows PC üzerinde ESP wallhack, radar hack ve enlisted aimbot undetected paket sunar. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"Destek ve yasal sorular için support@enlistedhacks.net.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
			},
		},
		ar: {
			ui: {
				nav: {
					home: "الرئيسية",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "الميزات",
					pricing: "الأسعار",
					setup: "التثبيت",
					updates: "التحديثات",
					faq: "الأسئلة",
					buyNow: "اشترِ الآن",
				},
				hero: {
					accent: "غش Enlisted غير مكتشف",
					accentShort: "Enlisted Hacks",
					subtitle: "ESP wallhack ورadar hack وAimbot لـ Enlisted على Windows PC — صيانة Easy Anti-Cheat مشمولة.",
					subtitleShort: "ESP ورadar وAimbot لـ Enlisted PC",
					buyNow: "اشترِ الآن",
					seeFeatures: "عرض الميزات",
				},
				trust: {
					status: "متصل",
					statusNote: "حزمة Enlisted Hacks نشطة لـ Enlisted على Windows PC.",
					statusShort: "نشط",
					delivery: "تسليم رقمي فوري",
					platform: "Windows 10 و11",
					antiCheat: "دعم صيانة Easy Anti-Cheat",
					antiCheatShort: "دعم Easy Anti-Cheat",
				},
				product: {
					title: "Enlisted Hacks",
					addToCart: "أضف إلى السلة",
					monthly: "شهري",
					lifetime: "مدى الحياة",
					available: "متوفر الآن",
					gameBadge: "Enlisted",
					platformBadge: "Windows PC",
					statusBadge: "حزمة غير مكتشفة",
				},
				reviews: {
					title: "ماذا يقول اللاعبون",
					subtitle: "آراء حديثة من مشتري Enlisted Hacks",
					outOf: "من 5",
					countLabel: "مراجعات",
				},
				common: {
					buyNow: "اشترِ الآن",
					readGuide: "اقرأ الدليل",
					language: "اللغة",
					officialLanguageNote: "الإنجليزية هي اللغة الرسمية. اللغات الأخرى مترجمة لتحسين SEO العالمي.",
					relatedPages: "صفحات ذات صلة",
				},
				footer: {
					explore: "استكشف",
					help: "المساعدة والقانون",
					tagline: "ESP وwallhack ورadar وAimbot غير مكتشف لـ Enlisted — الدفع عبر Zadeyo.",
				},
				images: {
					hero: "Enlisted Hacks hero — ESP and aimbot overlay in Enlisted",
					espWallhack: "Wallhack outlines showing enemy soldiers and AI soldiers through walls",
					aimbotCombat: "Soft aim assist overlay during an Enlisted raid",
					squadFight: "Enlisted Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Enlisted raid",
					headerArt: "Aimbot view and bone priority controls for Enlisted",
					cheatsPackage: "2D radar threat overlay for Enlisted",
					rebootFight: "Aimbot assist during a Enlisted firefight",
					battleRoyale: "Enlisted Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Enlisted",
				},
			},
			pages: {
				home: {
					title: "Enlisted Hacks 2026 | ESP وWallhack وAimbot",
					description: "غش Enlisted undetected لـ Enlisted على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat. تسليم رقمي فوري.",
					h1: "Enlisted Hacks — ESP وWallhack وAimbot غير مكتشف",
					intro: "حزمة undetected لـ Enlisted على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat.",
					imageAlt: "Enlisted ESP player tags hack",
					galleryTitle: "معرض Enlisted Hacks — ESP وAimbot وwallhack",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "اشترِ Enlisted Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "لماذا Enlisted Hacks في 2026",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. مثالي لقراءة فرق العدو في BR وscav-run.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack ورadar وAimbot في ترخيص واحد",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. ترخيص واحد بدلاً من أدوات منفصلة.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
					],
				},
				"enlisted-esp": {
					title: "ESP Enlisted | Player Boxes & Wallhack",
					description: "ESP Enlisted: player boxes, loot markers, and wallhack overlays. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "ESP Enlisted",
					intro: "Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. ESP Enlisted.",
					imageAlt: "Enlisted ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "اشترِ Enlisted Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "ESP Enlisted",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. player boxes, loot markers, and wallhack overlays.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@enlistedhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"enlisted-aimbot": {
					title: "Aimbot Enlisted | Soft Aim Controls",
					description: "Aimbot Enlisted: soft aim, FOV, and per-weapon Aimbot profiles. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Aimbot Enlisted",
					intro: "Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. Aimbot Enlisted.",
					imageAlt: "Enlisted aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "اشترِ Enlisted Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Aimbot Enlisted",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@enlistedhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				features: {
					title: "الميزات | Full Feature List",
					description: "الميزات: ESP, soft aim, radar controls. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الميزات",
					intro: "Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. الميزات.",
					imageAlt: "Enlisted Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "الميزات",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ Enlisted Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "الميزات",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. ESP, soft aim, radar controls.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@enlistedhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				pricing: {
					title: "الأسعار | Monthly & Lifetime",
					description: "الأسعار: $35 monthly or $150 lifetime licenses. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسعار",
					intro: "Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. الأسعار.",
					imageAlt: "Enlisted Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "الأسعار",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "اشترِ Enlisted Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الأسعار",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. $35 monthly or $150 lifetime licenses.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@enlistedhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				setup: {
					title: "التثبيت | PC Setup Guide",
					description: "التثبيت: Windows PC activation and first-launch setup. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التثبيت",
					intro: "Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. التثبيت.",
					imageAlt: "Enlisted Hacks setup guide screenshot for Windows PC",
					galleryTitle: "التثبيت",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "اشترِ Enlisted Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "التثبيت",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. Windows PC activation and first-launch setup.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@enlistedhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				updates: {
					title: "التحديثات | Easy Anti-Cheat Maintenance Log",
					description: "التحديثات: Easy Anti-Cheat patch status and rebuild notes. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "التحديثات",
					intro: "Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. التحديثات.",
					imageAlt: "Enlisted Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "التحديثات",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "اشترِ Enlisted Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "التحديثات",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@enlistedhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				faq: {
					title: "الأسئلة | Common Answers",
					description: "الأسئلة: ESP, soft aim, delivery, and Easy Anti-Cheat questions. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الأسئلة",
					intro: "Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. الأسئلة.",
					imageAlt: "Enlisted Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "الأسئلة",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ Enlisted Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "الأسئلة",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@enlistedhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				support: {
					title: "الدعم | Help & Contact",
					description: "الدعم: order help and license support contact. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "الدعم",
					intro: "Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. الدعم.",
					imageAlt: "Enlisted Hacks support page for license and setup help",
					galleryTitle: "الدعم",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "اشترِ Enlisted Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "الدعم",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. order help and license support contact.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@enlistedhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				undetected: {
					title: "غش undetected | Easy Anti-Cheat Safe Status",
					description: "غش undetected: undetected maintenance after Easy Anti-Cheat patches. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش undetected",
					intro: "Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. غش undetected.",
					imageAlt: "Enlisted Hacks undetected status overview for Windows PC",
					galleryTitle: "غش undetected",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "اشترِ Enlisted Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "غش undetected",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@enlistedhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Enlisted | ESP Visibility",
					description: "Wallhack Enlisted: wallhack ESP for players, loot, and distance. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Wallhack Enlisted",
					intro: "Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. Wallhack Enlisted.",
					imageAlt: "Enlisted wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Enlisted",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "اشترِ Enlisted Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Wallhack Enlisted",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. wallhack ESP for players, loot, and distance.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@enlistedhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Radar hack",
					intro: "Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. Radar hack.",
					imageAlt: "Enlisted 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "اشترِ Enlisted Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. 2D radar cues for flanks and rotations.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@enlistedhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Enlisted hacks. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "Enlisted Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "اشترِ Enlisted Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. how Easy Anti-Cheat updates are handled for Enlisted hacks.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@enlistedhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "غش Enlisted 2026 | Buyer Guide",
					description: "غش Enlisted 2026: 2026 Enlisted hacks checklist before checkout. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش Enlisted 2026",
					intro: "Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. غش Enlisted 2026.",
					imageAlt: "Enlisted Hacks product overview for Enlisted",
					galleryTitle: "غش Enlisted 2026",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "اشترِ Enlisted Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "غش Enlisted 2026",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. 2026 Enlisted hacks checklist before checkout.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@enlistedhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				hacks: {
					title: "غش Enlisted | ESP Aimbot Guide",
					description: "غش Enlisted: the Enlisted hacks pillar for ESP and Aimbot. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "غش Enlisted",
					intro: "Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. غش Enlisted.",
					imageAlt: "Enlisted Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "غش Enlisted",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "اشترِ Enlisted Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "غش Enlisted",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. the Enlisted hacks pillar for ESP and Aimbot.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@enlistedhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"cheat-download": {
					title: "تحميل Enlisted Hacks | Instant Access",
					description: "تحميل Enlisted Hacks: digital license download after payment. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "تحميل Enlisted Hacks",
					intro: "Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. تحميل Enlisted Hacks.",
					imageAlt: "Enlisted Hacks download and install delivery flow",
					galleryTitle: "تحميل Enlisted Hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "اشترِ Enlisted Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "تحميل Enlisted Hacks",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. digital license download after payment.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@enlistedhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"mod-menu": {
					title: "قائمة مود Enlisted | In-Game Toggles",
					description: "قائمة مود Enlisted: in-client ESP and soft aim toggles. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "قائمة مود Enlisted",
					intro: "Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. قائمة مود Enlisted.",
					imageAlt: "Enlisted Hacks in-game menu controls",
					galleryTitle: "قائمة مود Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "اشترِ Enlisted Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "قائمة مود Enlisted",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. in-client ESP and soft aim toggles.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@enlistedhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Enlisted | Smooth Aim Settings",
					description: "Soft aim Enlisted: smooth soft aim settings for Windows PC. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Soft aim Enlisted",
					intro: "Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. Soft aim Enlisted.",
					imageAlt: "Enlisted soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ Enlisted Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Soft aim Enlisted",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. smooth soft aim settings for Windows PC.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@enlistedhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"best-cheats": {
					title: "أفضل غش Enlisted | Buyer Checklist",
					description: "أفضل غش Enlisted: what to compare before buying Enlisted hacks. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "أفضل غش Enlisted",
					intro: "Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. أفضل غش Enlisted.",
					imageAlt: "Enlisted Hacks overview for Enlisted on PC",
					galleryTitle: "أفضل غش Enlisted",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "اشترِ Enlisted Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "أفضل غش Enlisted",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. what to compare before buying Enlisted hacks.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@enlistedhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "هاك Aimbot Enlisted | Soft Aim Assist",
					description: "هاك Aimbot Enlisted: undetected Aimbot hack assist for Enlisted. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك Aimbot Enlisted",
					intro: "Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. هاك Aimbot Enlisted.",
					imageAlt: "Enlisted aimbot hack controls and bone priority",
					galleryTitle: "هاك Aimbot Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "اشترِ Enlisted Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "هاك Aimbot Enlisted",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. undetected Aimbot hack assist for Enlisted.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@enlistedhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"esp-hack": {
					title: "هاك ESP Enlisted | Boxes & Loot",
					description: "هاك ESP Enlisted: ESP hack boxes, loot pins, and distance. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "هاك ESP Enlisted",
					intro: "Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. هاك ESP Enlisted.",
					imageAlt: "Enlisted ESP hack boxes and loot markers",
					galleryTitle: "هاك ESP Enlisted",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "اشترِ Enlisted Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "هاك ESP Enlisted",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. ESP hack boxes, loot pins, and distance.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@enlistedhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Enlisted | What It Means",
					description: "Unlock all Enlisted: unlock-all searches vs real ESP and Aimbot tools. تسليم رقمي فوري. غير مكتشف — Windows PC.",
					h1: "Unlock all Enlisted",
					intro: "Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. Unlock all Enlisted.",
					imageAlt: "Enlisted Hacks license features overview",
					galleryTitle: "Unlock all Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "اشترِ Enlisted Hacks",
					ctaSecondary: "عرض الميزات",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Enlisted",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "غير مكتشف",
							paragraphs: [
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "تسليم رقمي فوري",
							paragraphs: [
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
								"support@enlistedhacks.net للدعم والطلبات القانونية.",
							],
						},
					],
				},
				privacy: {
					title: "سياسة الخصوصية | Enlisted Hacks",
					description: "سياسة الخصوصية for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الخصوصية",
					intro: "Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. سياسة الخصوصية for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "اقرأ الشروط",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "المعلومات التي نجمعها",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on enlistedhacks.net.",
							],
						},
						{
							h2: "استخدام المعلومات",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "حقوقك",
							paragraphs: [
								"support@enlistedhacks.net للدعم والطلبات القانونية.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				refund: {
					title: "سياسة الاسترداد | Enlisted Hacks",
					description: "سياسة الاسترداد for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "سياسة الاسترداد",
					intro: "Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. سياسة الاسترداد for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "التسليم الرقمي",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "موافقة الاسترداد",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"راجع Updates بعد تص patches Easy Anti-Cheat. لا يضمن أي غش حالة undetected دائمة.",
							],
						},
						{
							h2: "كيفية الطلب",
							paragraphs: [
								"support@enlistedhacks.net للدعم والطلبات القانونية.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				terms: {
					title: "شروط الاستخدام | Enlisted Hacks",
					description: "شروط الاستخدام for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "شروط الاستخدام",
					intro: "Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. شروط الاستخدام for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "مراسلة الدعم",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "قبول الشروط",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"تراخيص مع تسليم رقمي فوري عبر checkout Zadeyo. خطط 35$/شهر و150$ مدى الحياة تشمل صيانة Easy Anti-Cheat.",
							],
						},
						{
							h2: "المخاطر",
							paragraphs: [
								"Enlisted Hacks يجمع ESP wallhack وradar hack وenlisted aimbot غير مكتشف لـ Enlisted على Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "التغييرات",
							paragraphs: [
								"support@enlistedhacks.net للدعم والطلبات القانونية.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
			},
		},
		ja: {
			ui: {
				nav: {
					home: "ホーム",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "機能",
					pricing: "料金",
					setup: "セットアップ",
					updates: "更新",
					faq: "FAQ",
					buyNow: "今すぐ購入",
				},
				hero: {
					accent: "Undetected Enlistedチート",
					accentShort: "Enlisted Hacks",
					subtitle: "Enlisted Windows PC向けESP wallhack、radar hack、Aimbot — Easy Anti-Cheatメンテナンス付き。",
					subtitleShort: "Enlisted PC向けESP・radar・Aimbot",
					buyNow: "今すぐ購入",
					seeFeatures: "機能を見る",
				},
				trust: {
					status: "オンライン",
					statusNote: "Enlisted HacksパッケージはEnlisted Windows PCで利用可能です。",
					statusShort: "稼働中",
					delivery: "即時デジタル配信",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheatメンテナンス対応",
					antiCheatShort: "Easy Anti-Cheat対応",
				},
				product: {
					title: "Enlisted Hacks",
					addToCart: "カートに追加",
					monthly: "月額",
					lifetime: "永久",
					available: "現在利用可能",
					gameBadge: "Enlisted",
					platformBadge: "Windows PC",
					statusBadge: "Undetectedパッケージ",
				},
				reviews: {
					title: "プレイヤーの声",
					subtitle: "Enlisted Hacks購入者からの最近のフィードバック",
					outOf: "/5",
					countLabel: "件のレビュー",
				},
				common: {
					buyNow: "今すぐ購入",
					readGuide: "ガイドを読む",
					language: "言語",
					officialLanguageNote: "英語が公式言語です。他言語はグローバルSEO向けに翻訳されています。",
					relatedPages: "関連ページ",
				},
				footer: {
					explore: "探索",
					help: "ヘルプと法務",
					tagline: "Enlisted向けundetected ESP、wallhack、radar、Aimbot — Zadeyoで購入。",
				},
				images: {
					hero: "Enlisted Hacks hero — ESP and aimbot overlay in Enlisted",
					espWallhack: "Wallhack outlines showing enemy soldiers and AI soldiers through walls",
					aimbotCombat: "Soft aim assist overlay during an Enlisted raid",
					squadFight: "Enlisted Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Enlisted raid",
					headerArt: "Aimbot view and bone priority controls for Enlisted",
					cheatsPackage: "2D radar threat overlay for Enlisted",
					rebootFight: "Aimbot assist during a Enlisted firefight",
					battleRoyale: "Enlisted Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Enlisted",
				},
			},
			pages: {
				home: {
					title: "Enlisted Hacks 2026 | ESP・Wallhack・Aimbot",
					description: "Enlisted向けundetectedチート。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheatメンテナンス。即時デジタル配信。",
					h1: "Enlisted Hacks — Undetected ESP・Wallhack・Aimbot",
					intro: "Enlisted Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheatメンテナンス付き。",
					imageAlt: "Enlisted hacks hero ESP aimbot wallhack",
					galleryTitle: "Enlisted Hacksギャラリー — ESP、Aimbot、wallhack",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Enlisted Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年にEnlisted Hacksを選ぶ理由",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。BRとscav-runで敵スクワッドを読むのに最適。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbotが1ライセンス",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。別ツールではなく1ライセンス。",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
					],
				},
				"enlisted-esp": {
					title: "Enlisted ESP | Player Boxes & Wallhack",
					description: "Enlisted ESP: player boxes, loot markers, and wallhack overlays. 即時デジタル配信. undetected — Windows PC.",
					h1: "Enlisted ESP",
					intro: "Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。Enlisted ESP.",
					imageAlt: "Enlisted ESP player boxes and distance readouts in a raid",
					galleryTitle: "Enlisted ESP",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Enlisted ESP",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@enlistedhacks.net",
							],
						},
					],
				},
				"enlisted-aimbot": {
					title: "Enlisted Aimbot | Soft Aim Controls",
					description: "Enlisted Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 即時デジタル配信. undetected — Windows PC.",
					h1: "Enlisted Aimbot",
					intro: "Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。Enlisted Aimbot.",
					imageAlt: "Enlisted aimbot and soft aim controls on Windows PC",
					galleryTitle: "Enlisted Aimbot",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Enlisted Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted Aimbot",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@enlistedhacks.net",
							],
						},
					],
				},
				features: {
					title: "機能 | Full Feature List",
					description: "機能: ESP, soft aim, radar controls. 即時デジタル配信. undetected — Windows PC.",
					h1: "機能",
					intro: "Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。機能.",
					imageAlt: "Enlisted Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "機能",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Enlisted Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "機能",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。ESP, soft aim, radar controls.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@enlistedhacks.net",
							],
						},
					],
				},
				pricing: {
					title: "料金 | Monthly & Lifetime",
					description: "料金: $35 monthly or $150 lifetime licenses. 即時デジタル配信. undetected — Windows PC.",
					h1: "料金",
					intro: "Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。料金.",
					imageAlt: "Enlisted Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "料金",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Enlisted Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "料金",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。$35 monthly or $150 lifetime licenses.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@enlistedhacks.net",
							],
						},
					],
				},
				setup: {
					title: "セットアップ | PC Setup Guide",
					description: "セットアップ: Windows PC activation and first-launch setup. 即時デジタル配信. undetected — Windows PC.",
					h1: "セットアップ",
					intro: "Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。セットアップ.",
					imageAlt: "Enlisted Hacks setup guide screenshot for Windows PC",
					galleryTitle: "セットアップ",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "セットアップ",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。Windows PC activation and first-launch setup.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@enlistedhacks.net",
							],
						},
					],
				},
				updates: {
					title: "更新 | Easy Anti-Cheat Maintenance Log",
					description: "更新: Easy Anti-Cheat patch status and rebuild notes. 即時デジタル配信. undetected — Windows PC.",
					h1: "更新",
					intro: "Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。更新.",
					imageAlt: "Enlisted Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "更新",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Enlisted Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。Easy Anti-Cheat patch status and rebuild notes.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@enlistedhacks.net",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. 即時デジタル配信. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。FAQ.",
					imageAlt: "Enlisted Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Enlisted Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@enlistedhacks.net",
							],
						},
					],
				},
				support: {
					title: "サポート | Help & Contact",
					description: "サポート: order help and license support contact. 即時デジタル配信. undetected — Windows PC.",
					h1: "サポート",
					intro: "Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。サポート.",
					imageAlt: "Enlisted Hacks support page for license and setup help",
					galleryTitle: "サポート",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Enlisted Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "サポート",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。order help and license support contact.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@enlistedhacks.net",
							],
						},
					],
				},
				undetected: {
					title: "Undetectedチート | Easy Anti-Cheat Safe Status",
					description: "Undetectedチート: undetected maintenance after Easy Anti-Cheat patches. 即時デジタル配信. undetected — Windows PC.",
					h1: "Undetectedチート",
					intro: "Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。Undetectedチート.",
					imageAlt: "Enlisted Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetectedチート",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Enlisted Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Undetectedチート",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。undetected maintenance after Easy Anti-Cheat patches.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@enlistedhacks.net",
							],
						},
					],
				},
				wallhack: {
					title: "Enlisted Wallhack | ESP Visibility",
					description: "Enlisted Wallhack: wallhack ESP for players, loot, and distance. 即時デジタル配信. undetected — Windows PC.",
					h1: "Enlisted Wallhack",
					intro: "Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。Enlisted Wallhack.",
					imageAlt: "Enlisted wallhack visibility through walls in a raid",
					galleryTitle: "Enlisted Wallhack",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Enlisted Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted Wallhack",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。wallhack ESP for players, loot, and distance.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@enlistedhacks.net",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. 即時デジタル配信. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。Radar Hack.",
					imageAlt: "Enlisted 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。2D radar cues for flanks and rotations.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@enlistedhacks.net",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Enlisted hacks. 即時デジタル配信. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。Easy Anti-Cheat Bypass.",
					imageAlt: "Enlisted Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Enlisted Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。how Easy Anti-Cheat updates are handled for Enlisted hacks.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@enlistedhacks.net",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Enlisted Hacks 2026 | Buyer Guide",
					description: "Enlisted Hacks 2026: 2026 Enlisted hacks checklist before checkout. 即時デジタル配信. undetected — Windows PC.",
					h1: "Enlisted Hacks 2026",
					intro: "Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。Enlisted Hacks 2026.",
					imageAlt: "Enlisted Hacks product overview for Enlisted",
					galleryTitle: "Enlisted Hacks 2026",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Enlisted Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Enlisted Hacks 2026",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。2026 Enlisted hacks checklist before checkout.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@enlistedhacks.net",
							],
						},
					],
				},
				hacks: {
					title: "Enlisted Hacks | ESP Aimbot Guide",
					description: "Enlisted Hacks: the Enlisted hacks pillar for ESP and Aimbot. 即時デジタル配信. undetected — Windows PC.",
					h1: "Enlisted Hacks",
					intro: "Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。Enlisted Hacks.",
					imageAlt: "Enlisted Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Enlisted Hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Enlisted Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted Hacks",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。the Enlisted hacks pillar for ESP and Aimbot.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@enlistedhacks.net",
							],
						},
					],
				},
				"cheat-download": {
					title: "Enlisted Cheat Download | Instant Access",
					description: "Enlisted Cheat Download: digital license download after payment. 即時デジタル配信. undetected — Windows PC.",
					h1: "Enlisted Cheat Download",
					intro: "Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。Enlisted Cheat Download.",
					imageAlt: "Enlisted Hacks download and install delivery flow",
					galleryTitle: "Enlisted Cheat Download",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Enlisted Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Enlisted Cheat Download",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。digital license download after payment.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@enlistedhacks.net",
							],
						},
					],
				},
				"mod-menu": {
					title: "Enlisted Mod Menu | In-Game Toggles",
					description: "Enlisted Mod Menu: in-client ESP and soft aim toggles. 即時デジタル配信. undetected — Windows PC.",
					h1: "Enlisted Mod Menu",
					intro: "Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。Enlisted Mod Menu.",
					imageAlt: "Enlisted Hacks in-game menu controls",
					galleryTitle: "Enlisted Mod Menu",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted Mod Menu",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。in-client ESP and soft aim toggles.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@enlistedhacks.net",
							],
						},
					],
				},
				"soft-aim": {
					title: "Enlisted Soft Aim | Smooth Aim Settings",
					description: "Enlisted Soft Aim: smooth soft aim settings for Windows PC. 即時デジタル配信. undetected — Windows PC.",
					h1: "Enlisted Soft Aim",
					intro: "Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。Enlisted Soft Aim.",
					imageAlt: "Enlisted soft aim FOV and smoothness settings",
					galleryTitle: "Enlisted Soft Aim",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Enlisted Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Enlisted Soft Aim",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。smooth soft aim settings for Windows PC.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@enlistedhacks.net",
							],
						},
					],
				},
				"best-cheats": {
					title: "最強Enlistedチート | Buyer Checklist",
					description: "最強Enlistedチート: what to compare before buying Enlisted hacks. 即時デジタル配信. undetected — Windows PC.",
					h1: "最強Enlistedチート",
					intro: "Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。最強Enlistedチート.",
					imageAlt: "Enlisted Hacks overview for Enlisted on PC",
					galleryTitle: "最強Enlistedチート",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Enlisted Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最強Enlistedチート",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。what to compare before buying Enlisted hacks.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@enlistedhacks.net",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Enlisted Aimbot Hack | Soft Aim Assist",
					description: "Enlisted Aimbot Hack: undetected Aimbot hack assist for Enlisted. 即時デジタル配信. undetected — Windows PC.",
					h1: "Enlisted Aimbot Hack",
					intro: "Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。Enlisted Aimbot Hack.",
					imageAlt: "Enlisted aimbot hack controls and bone priority",
					galleryTitle: "Enlisted Aimbot Hack",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Enlisted Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Enlisted Aimbot Hack",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。undetected Aimbot hack assist for Enlisted.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@enlistedhacks.net",
							],
						},
					],
				},
				"esp-hack": {
					title: "Enlisted ESP Hack | Boxes & Loot",
					description: "Enlisted ESP Hack: ESP hack boxes, loot pins, and distance. 即時デジタル配信. undetected — Windows PC.",
					h1: "Enlisted ESP Hack",
					intro: "Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。Enlisted ESP Hack.",
					imageAlt: "Enlisted ESP hack boxes and loot markers",
					galleryTitle: "Enlisted ESP Hack",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Enlisted Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted ESP Hack",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@enlistedhacks.net",
							],
						},
					],
				},
				"unlock-all": {
					title: "Enlisted Unlock All | What It Means",
					description: "Enlisted Unlock All: unlock-all searches vs real ESP and Aimbot tools. 即時デジタル配信. undetected — Windows PC.",
					h1: "Enlisted Unlock All",
					intro: "Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。Enlisted Unlock All.",
					imageAlt: "Enlisted Hacks license features overview",
					galleryTitle: "Enlisted Unlock All",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacksを購入",
					ctaSecondary: "機能を見る",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted Unlock All",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "即時デジタル配信",
							paragraphs: [
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
								"サポート・法務: support@enlistedhacks.net",
							],
						},
					],
				},
				privacy: {
					title: "プライバシーポリシー | Enlisted Hacks",
					description: "プライバシーポリシー for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "プライバシーポリシー",
					intro: "Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。プライバシーポリシー for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "利用規約",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "収集する情報",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on enlistedhacks.net.",
							],
						},
						{
							h2: "情報の利用",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "あなたの権利",
							paragraphs: [
								"サポート・法務: support@enlistedhacks.net",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				refund: {
					title: "返金ポリシー | Enlisted Hacks",
					description: "返金ポリシー for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "返金ポリシー",
					intro: "Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。返金ポリシー for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "デジタル配信",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "返金承認",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheatパッチ後はUpdatesページを確認。永久undetectedは保証されません。",
							],
						},
						{
							h2: "申請方法",
							paragraphs: [
								"サポート・法務: support@enlistedhacks.net",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				terms: {
					title: "利用規約 | Enlisted Hacks",
					description: "利用規約 for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "利用規約",
					intro: "Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。利用規約 for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "サポートにメール",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "規約への同意",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkoutで即時デジタル配信。$35/月と$150永久プランにEasy Anti-Cheatメンテナンス含む。",
							],
						},
						{
							h2: "リスク",
							paragraphs: [
								"Enlisted HacksはEnlisted向けWindows PC用ESP wallhack、radar hack、enlisted aimbotのundetectedパッケージです。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "変更",
							paragraphs: [
								"サポート・法務: support@enlistedhacks.net",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
			},
		},
		ko: {
			ui: {
				nav: {
					home: "홈",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "기능",
					pricing: "가격",
					setup: "설치",
					updates: "업데이트",
					faq: "FAQ",
					buyNow: "구매하기",
				},
				hero: {
					accent: "Undetected Enlisted 치트",
					accentShort: "Enlisted Hacks",
					subtitle: "Enlisted Windows PC용 ESP wallhack, radar hack, Aimbot — Easy Anti-Cheat 유지보수 포함.",
					subtitleShort: "Enlisted PC용 ESP, radar, Aimbot",
					buyNow: "지금 구매",
					seeFeatures: "기능 보기",
				},
				trust: {
					status: "온라인",
					statusNote: "Enlisted Hacks 패키지는 Enlisted Windows PC에서 이용 가능합니다.",
					statusShort: "가동 중",
					delivery: "즉시 디지털 배송",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat 유지보수 지원",
					antiCheatShort: "Easy Anti-Cheat 지원",
				},
				product: {
					title: "Enlisted Hacks",
					addToCart: "장바구니에 추가",
					monthly: "월간",
					lifetime: "평생",
					available: "지금 이용 가능",
					gameBadge: "Enlisted",
					platformBadge: "Windows PC",
					statusBadge: "Undetected 패키지",
				},
				reviews: {
					title: "플레이어 후기",
					subtitle: "Enlisted Hacks 구매자 최근 피드백",
					outOf: "/5",
					countLabel: "리뷰",
				},
				common: {
					buyNow: "지금 구매",
					readGuide: "가이드 읽기",
					language: "언어",
					officialLanguageNote: "영어가 공식 언어입니다. 다른 언어는 글로벌 SEO를 위해 번역되었습니다.",
					relatedPages: "관련 페이지",
				},
				footer: {
					explore: "탐색",
					help: "도움말 및 법적",
					tagline: "Enlisted용 undetected ESP, wallhack, radar, Aimbot — Zadeyo 결제.",
				},
				images: {
					hero: "Enlisted Hacks hero — ESP and aimbot overlay in Enlisted",
					espWallhack: "Wallhack outlines showing enemy soldiers and AI soldiers through walls",
					aimbotCombat: "Soft aim assist overlay during an Enlisted raid",
					squadFight: "Enlisted Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Enlisted raid",
					headerArt: "Aimbot view and bone priority controls for Enlisted",
					cheatsPackage: "2D radar threat overlay for Enlisted",
					rebootFight: "Aimbot assist during a Enlisted firefight",
					battleRoyale: "Enlisted Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Enlisted",
				},
			},
			pages: {
				home: {
					title: "Enlisted Hacks 2026 | ESP, Wallhack, Aimbot",
					description: "Enlisted undetected 치트. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat 유지보수. 즉시 디지털 배송.",
					h1: "Enlisted Hacks — Undetected ESP, Wallhack, Aimbot",
					intro: "Enlisted Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Easy Anti-Cheat 유지보수 포함.",
					imageAlt: "Enlisted hacks hero ESP aimbot wallhack",
					galleryTitle: "Enlisted Hacks 갤러리 — ESP, Aimbot, wallhack",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Enlisted Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026년 Enlisted Hacks를 선택하는 이유",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. BR 및 scav-run에서 적 분대 읽기에 이상적.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot 단일 라이선스",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. 별도 도구 대신 단일 라이선스.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
					],
				},
				"enlisted-esp": {
					title: "Enlisted ESP | Player Boxes & Wallhack",
					description: "Enlisted ESP: player boxes, loot markers, and wallhack overlays. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Enlisted ESP",
					intro: "Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. Enlisted ESP.",
					imageAlt: "Enlisted ESP player boxes and distance readouts in a raid",
					galleryTitle: "Enlisted ESP",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Enlisted ESP",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@enlistedhacks.net",
							],
						},
					],
				},
				"enlisted-aimbot": {
					title: "Enlisted Aimbot | Soft Aim Controls",
					description: "Enlisted Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Enlisted Aimbot",
					intro: "Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. Enlisted Aimbot.",
					imageAlt: "Enlisted aimbot and soft aim controls on Windows PC",
					galleryTitle: "Enlisted Aimbot",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Enlisted Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted Aimbot",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@enlistedhacks.net",
							],
						},
					],
				},
				features: {
					title: "기능 | Full Feature List",
					description: "기능: ESP, soft aim, radar controls. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "기능",
					intro: "Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. 기능.",
					imageAlt: "Enlisted Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "기능",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Enlisted Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "기능",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. ESP, soft aim, radar controls.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@enlistedhacks.net",
							],
						},
					],
				},
				pricing: {
					title: "가격 | Monthly & Lifetime",
					description: "가격: $35 monthly or $150 lifetime licenses. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "가격",
					intro: "Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. 가격.",
					imageAlt: "Enlisted Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "가격",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Enlisted Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "가격",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@enlistedhacks.net",
							],
						},
					],
				},
				setup: {
					title: "설치 | PC Setup Guide",
					description: "설치: Windows PC activation and first-launch setup. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "설치",
					intro: "Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. 설치.",
					imageAlt: "Enlisted Hacks setup guide screenshot for Windows PC",
					galleryTitle: "설치",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "설치",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. Windows PC activation and first-launch setup.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@enlistedhacks.net",
							],
						},
					],
				},
				updates: {
					title: "업데이트 | Easy Anti-Cheat Maintenance Log",
					description: "업데이트: Easy Anti-Cheat patch status and rebuild notes. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "업데이트",
					intro: "Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. 업데이트.",
					imageAlt: "Enlisted Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "업데이트",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Enlisted Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "업데이트",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. Easy Anti-Cheat patch status and rebuild notes.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@enlistedhacks.net",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. FAQ.",
					imageAlt: "Enlisted Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Enlisted Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@enlistedhacks.net",
							],
						},
					],
				},
				support: {
					title: "지원 | Help & Contact",
					description: "지원: order help and license support contact. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "지원",
					intro: "Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. 지원.",
					imageAlt: "Enlisted Hacks support page for license and setup help",
					galleryTitle: "지원",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Enlisted Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "지원",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. order help and license support contact.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@enlistedhacks.net",
							],
						},
					],
				},
				undetected: {
					title: "Undetected 치트 | Easy Anti-Cheat Safe Status",
					description: "Undetected 치트: undetected maintenance after Easy Anti-Cheat patches. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Undetected 치트",
					intro: "Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. Undetected 치트.",
					imageAlt: "Enlisted Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected 치트",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Enlisted Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Undetected 치트",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. undetected maintenance after Easy Anti-Cheat patches.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@enlistedhacks.net",
							],
						},
					],
				},
				wallhack: {
					title: "Enlisted Wallhack | ESP Visibility",
					description: "Enlisted Wallhack: wallhack ESP for players, loot, and distance. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Enlisted Wallhack",
					intro: "Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. Enlisted Wallhack.",
					imageAlt: "Enlisted wallhack visibility through walls in a raid",
					galleryTitle: "Enlisted Wallhack",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Enlisted Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted Wallhack",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@enlistedhacks.net",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. Radar Hack.",
					imageAlt: "Enlisted 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. 2D radar cues for flanks and rotations.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@enlistedhacks.net",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Enlisted hacks. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. Easy Anti-Cheat Bypass.",
					imageAlt: "Enlisted Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Enlisted Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. how Easy Anti-Cheat updates are handled for Enlisted hacks.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@enlistedhacks.net",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Enlisted Hacks 2026 | Buyer Guide",
					description: "Enlisted Hacks 2026: 2026 Enlisted hacks checklist before checkout. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Enlisted Hacks 2026",
					intro: "Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. Enlisted Hacks 2026.",
					imageAlt: "Enlisted Hacks product overview for Enlisted",
					galleryTitle: "Enlisted Hacks 2026",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Enlisted Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Enlisted Hacks 2026",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. 2026 Enlisted hacks checklist before checkout.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@enlistedhacks.net",
							],
						},
					],
				},
				hacks: {
					title: "Enlisted Hacks | ESP Aimbot Guide",
					description: "Enlisted Hacks: the Enlisted hacks pillar for ESP and Aimbot. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Enlisted Hacks",
					intro: "Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. Enlisted Hacks.",
					imageAlt: "Enlisted Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Enlisted Hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Enlisted Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted Hacks",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. the Enlisted hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@enlistedhacks.net",
							],
						},
					],
				},
				"cheat-download": {
					title: "Enlisted Cheat Download | Instant Access",
					description: "Enlisted Cheat Download: digital license download after payment. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Enlisted Cheat Download",
					intro: "Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. Enlisted Cheat Download.",
					imageAlt: "Enlisted Hacks download and install delivery flow",
					galleryTitle: "Enlisted Cheat Download",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Enlisted Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Enlisted Cheat Download",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. digital license download after payment.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@enlistedhacks.net",
							],
						},
					],
				},
				"mod-menu": {
					title: "Enlisted 모드 메뉴 | In-Game Toggles",
					description: "Enlisted 모드 메뉴: in-client ESP and soft aim toggles. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Enlisted 모드 메뉴",
					intro: "Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. Enlisted 모드 메뉴.",
					imageAlt: "Enlisted Hacks in-game menu controls",
					galleryTitle: "Enlisted 모드 메뉴",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted 모드 메뉴",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. in-client ESP and soft aim toggles.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@enlistedhacks.net",
							],
						},
					],
				},
				"soft-aim": {
					title: "Enlisted Soft Aim | Smooth Aim Settings",
					description: "Enlisted Soft Aim: smooth soft aim settings for Windows PC. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Enlisted Soft Aim",
					intro: "Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. Enlisted Soft Aim.",
					imageAlt: "Enlisted soft aim FOV and smoothness settings",
					galleryTitle: "Enlisted Soft Aim",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Enlisted Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Enlisted Soft Aim",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. smooth soft aim settings for Windows PC.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@enlistedhacks.net",
							],
						},
					],
				},
				"best-cheats": {
					title: "최고의 Enlisted 치트 | Buyer Checklist",
					description: "최고의 Enlisted 치트: what to compare before buying Enlisted hacks. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "최고의 Enlisted 치트",
					intro: "Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. 최고의 Enlisted 치트.",
					imageAlt: "Enlisted Hacks overview for Enlisted on PC",
					galleryTitle: "최고의 Enlisted 치트",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Enlisted Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "최고의 Enlisted 치트",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. what to compare before buying Enlisted hacks.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@enlistedhacks.net",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Enlisted 에임봇 핵 | Soft Aim Assist",
					description: "Enlisted 에임봇 핵: undetected Aimbot hack assist for Enlisted. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Enlisted 에임봇 핵",
					intro: "Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. Enlisted 에임봇 핵.",
					imageAlt: "Enlisted aimbot hack controls and bone priority",
					galleryTitle: "Enlisted 에임봇 핵",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Enlisted Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Enlisted 에임봇 핵",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. undetected Aimbot hack assist for Enlisted.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@enlistedhacks.net",
							],
						},
					],
				},
				"esp-hack": {
					title: "Enlisted ESP 핵 | Boxes & Loot",
					description: "Enlisted ESP 핵: ESP hack boxes, loot pins, and distance. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Enlisted ESP 핵",
					intro: "Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. Enlisted ESP 핵.",
					imageAlt: "Enlisted ESP hack boxes and loot markers",
					galleryTitle: "Enlisted ESP 핵",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Enlisted Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted ESP 핵",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@enlistedhacks.net",
							],
						},
					],
				},
				"unlock-all": {
					title: "Enlisted Unlock All | What It Means",
					description: "Enlisted Unlock All: unlock-all searches vs real ESP and Aimbot tools. 즉시 디지털 배송. undetected — Windows PC.",
					h1: "Enlisted Unlock All",
					intro: "Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. Enlisted Unlock All.",
					imageAlt: "Enlisted Hacks license features overview",
					galleryTitle: "Enlisted Unlock All",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks 구매",
					ctaSecondary: "기능 보기",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted Unlock All",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "즉시 디지털 배송",
							paragraphs: [
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
								"지원 및 법무: support@enlistedhacks.net",
							],
						},
					],
				},
				privacy: {
					title: "개인정보 처리방침 | Enlisted Hacks",
					description: "개인정보 처리방침 for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "개인정보 처리방침",
					intro: "Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. 개인정보 처리방침 for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on enlistedhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"지원 및 법무: support@enlistedhacks.net",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				refund: {
					title: "환불 정책 | Enlisted Hacks",
					description: "환불 정책 for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "환불 정책",
					intro: "Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. 환불 정책 for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat 패치 후 Updates 페이지 확인. 영구 undetected 보장 없음.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"지원 및 법무: support@enlistedhacks.net",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				terms: {
					title: "이용 약관 | Enlisted Hacks",
					description: "이용 약관 for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "이용 약관",
					intro: "Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. 이용 약관 for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "지원 이메일",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout으로 즉시 디지털 배송. $35/월 및 $150 평생 요금제에 Easy Anti-Cheat 유지보수 포함.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Enlisted Hacks는 Enlisted Windows PC용 ESP wallhack, radar hack, enlisted aimbot undetected 패키지입니다. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"지원 및 법무: support@enlistedhacks.net",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
			},
		},
		zh: {
			ui: {
				nav: {
					home: "首页",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "功能",
					pricing: "价格",
					setup: "安装",
					updates: "更新",
					faq: "常见问题",
					buyNow: "立即购买",
				},
				hero: {
					accent: "Undetected Enlisted作弊",
					accentShort: "Enlisted Hacks",
					subtitle: "适用于Enlisted Windows PC的ESP wallhack、radar hack和Aimbot — 含Easy Anti-Cheat维护。",
					subtitleShort: "Enlisted PC版ESP、radar与Aimbot",
					buyNow: "立即购买",
					seeFeatures: "查看功能",
				},
				trust: {
					status: "在线",
					statusNote: "Enlisted Hacks套餐已在Enlisted Windows PC上线。",
					statusShort: "运行中",
					delivery: "即时数字交付",
					platform: "Windows 10 和 11",
					antiCheat: "支持Easy Anti-Cheat维护",
					antiCheatShort: "Easy Anti-Cheat支持",
				},
				product: {
					title: "Enlisted Hacks",
					addToCart: "加入购物车",
					monthly: "月付",
					lifetime: "终身",
					available: "现已可用",
					gameBadge: "Enlisted",
					platformBadge: "Windows PC",
					statusBadge: "Undetected套餐",
				},
				reviews: {
					title: "玩家评价",
					subtitle: "Enlisted Hacks 买家近期反馈",
					outOf: "/5",
					countLabel: "条评价",
				},
				common: {
					buyNow: "立即购买",
					readGuide: "阅读指南",
					language: "语言",
					officialLanguageNote: "英语为官方语言。其他语言为全球SEO翻译版本。",
					relatedPages: "相关页面",
				},
				footer: {
					explore: "探索",
					help: "帮助与法律",
					tagline: "Enlisted undetected ESP、wallhack、radar与Aimbot — 通过Zadeyo结账。",
				},
				images: {
					hero: "Enlisted Hacks hero — ESP and aimbot overlay in Enlisted",
					espWallhack: "Wallhack outlines showing enemy soldiers and AI soldiers through walls",
					aimbotCombat: "Soft aim assist overlay during an Enlisted raid",
					squadFight: "Enlisted Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Enlisted raid",
					headerArt: "Aimbot view and bone priority controls for Enlisted",
					cheatsPackage: "2D radar threat overlay for Enlisted",
					rebootFight: "Aimbot assist during a Enlisted firefight",
					battleRoyale: "Enlisted Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Enlisted",
				},
			},
			pages: {
				home: {
					title: "Enlisted Hacks 2026 | ESP、Wallhack、Aimbot",
					description: "Enlisted undetected作弊。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat维护。即时数字交付。",
					h1: "Enlisted Hacks — Undetected ESP、Wallhack、Aimbot",
					intro: "Enlisted Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat维护。",
					imageAlt: "Enlisted hacks hero ESP aimbot wallhack",
					galleryTitle: "Enlisted Hacks图库 — ESP、Aimbot、wallhack",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "购买 Enlisted Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026年选择Enlisted Hacks的原因",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。适合在BR和scav-run中读取敌方小队。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "ESP wallhack、radar、Aimbot单一许可证",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。一个许可证而非多个工具。",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
					],
				},
				"enlisted-esp": {
					title: "Enlisted ESP | Player Boxes & Wallhack",
					description: "Enlisted ESP: player boxes, loot markers, and wallhack overlays. 即时数字交付. undetected — Windows PC.",
					h1: "Enlisted ESP",
					intro: "Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。Enlisted ESP.",
					imageAlt: "Enlisted ESP player boxes and distance readouts in a raid",
					galleryTitle: "Enlisted ESP",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "购买 Enlisted Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Enlisted ESP",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。player boxes, loot markers, and wallhack overlays.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@enlistedhacks.net",
							],
						},
					],
				},
				"enlisted-aimbot": {
					title: "Enlisted Aimbot | Soft Aim Controls",
					description: "Enlisted Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. 即时数字交付. undetected — Windows PC.",
					h1: "Enlisted Aimbot",
					intro: "Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。Enlisted Aimbot.",
					imageAlt: "Enlisted aimbot and soft aim controls on Windows PC",
					galleryTitle: "Enlisted Aimbot",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "购买 Enlisted Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted Aimbot",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。soft aim, FOV, and per-weapon Aimbot profiles.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@enlistedhacks.net",
							],
						},
					],
				},
				features: {
					title: "功能 | Full Feature List",
					description: "功能: ESP, soft aim, radar controls. 即时数字交付. undetected — Windows PC.",
					h1: "功能",
					intro: "Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。功能.",
					imageAlt: "Enlisted Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "功能",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "购买 Enlisted Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "功能",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。ESP, soft aim, radar controls.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@enlistedhacks.net",
							],
						},
					],
				},
				pricing: {
					title: "价格 | Monthly & Lifetime",
					description: "价格: $35 monthly or $150 lifetime licenses. 即时数字交付. undetected — Windows PC.",
					h1: "价格",
					intro: "Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。价格.",
					imageAlt: "Enlisted Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "价格",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "购买 Enlisted Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "价格",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。$35 monthly or $150 lifetime licenses.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@enlistedhacks.net",
							],
						},
					],
				},
				setup: {
					title: "安装 | PC Setup Guide",
					description: "安装: Windows PC activation and first-launch setup. 即时数字交付. undetected — Windows PC.",
					h1: "安装",
					intro: "Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。安装.",
					imageAlt: "Enlisted Hacks setup guide screenshot for Windows PC",
					galleryTitle: "安装",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "购买 Enlisted Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "安装",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。Windows PC activation and first-launch setup.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@enlistedhacks.net",
							],
						},
					],
				},
				updates: {
					title: "更新 | Easy Anti-Cheat Maintenance Log",
					description: "更新: Easy Anti-Cheat patch status and rebuild notes. 即时数字交付. undetected — Windows PC.",
					h1: "更新",
					intro: "Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。更新.",
					imageAlt: "Enlisted Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "更新",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "购买 Enlisted Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "更新",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。Easy Anti-Cheat patch status and rebuild notes.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@enlistedhacks.net",
							],
						},
					],
				},
				faq: {
					title: "常见问题 | Common Answers",
					description: "常见问题: ESP, soft aim, delivery, and Easy Anti-Cheat questions. 即时数字交付. undetected — Windows PC.",
					h1: "常见问题",
					intro: "Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。常见问题.",
					imageAlt: "Enlisted Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "常见问题",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "购买 Enlisted Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "常见问题",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@enlistedhacks.net",
							],
						},
					],
				},
				support: {
					title: "支持 | Help & Contact",
					description: "支持: order help and license support contact. 即时数字交付. undetected — Windows PC.",
					h1: "支持",
					intro: "Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。支持.",
					imageAlt: "Enlisted Hacks support page for license and setup help",
					galleryTitle: "支持",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "购买 Enlisted Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "支持",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。order help and license support contact.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@enlistedhacks.net",
							],
						},
					],
				},
				undetected: {
					title: "Undetected作弊 | Easy Anti-Cheat Safe Status",
					description: "Undetected作弊: undetected maintenance after Easy Anti-Cheat patches. 即时数字交付. undetected — Windows PC.",
					h1: "Undetected作弊",
					intro: "Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。Undetected作弊.",
					imageAlt: "Enlisted Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected作弊",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "购买 Enlisted Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Undetected作弊",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。undetected maintenance after Easy Anti-Cheat patches.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@enlistedhacks.net",
							],
						},
					],
				},
				wallhack: {
					title: "Enlisted Wallhack | ESP Visibility",
					description: "Enlisted Wallhack: wallhack ESP for players, loot, and distance. 即时数字交付. undetected — Windows PC.",
					h1: "Enlisted Wallhack",
					intro: "Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。Enlisted Wallhack.",
					imageAlt: "Enlisted wallhack visibility through walls in a raid",
					galleryTitle: "Enlisted Wallhack",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "购买 Enlisted Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted Wallhack",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。wallhack ESP for players, loot, and distance.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@enlistedhacks.net",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. 即时数字交付. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。Radar Hack.",
					imageAlt: "Enlisted 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "购买 Enlisted Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。2D radar cues for flanks and rotations.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@enlistedhacks.net",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Enlisted hacks. 即时数字交付. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。Easy Anti-Cheat Bypass.",
					imageAlt: "Enlisted Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "购买 Enlisted Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。how Easy Anti-Cheat updates are handled for Enlisted hacks.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@enlistedhacks.net",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Enlisted作弊 2026 | Buyer Guide",
					description: "Enlisted作弊 2026: 2026 Enlisted hacks checklist before checkout. 即时数字交付. undetected — Windows PC.",
					h1: "Enlisted作弊 2026",
					intro: "Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。Enlisted作弊 2026.",
					imageAlt: "Enlisted Hacks product overview for Enlisted",
					galleryTitle: "Enlisted作弊 2026",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "购买 Enlisted Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Enlisted作弊 2026",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。2026 Enlisted hacks checklist before checkout.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@enlistedhacks.net",
							],
						},
					],
				},
				hacks: {
					title: "Enlisted作弊 | ESP Aimbot Guide",
					description: "Enlisted作弊: the Enlisted hacks pillar for ESP and Aimbot. 即时数字交付. undetected — Windows PC.",
					h1: "Enlisted作弊",
					intro: "Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。Enlisted作弊.",
					imageAlt: "Enlisted Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Enlisted作弊",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "购买 Enlisted Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted作弊",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。the Enlisted hacks pillar for ESP and Aimbot.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@enlistedhacks.net",
							],
						},
					],
				},
				"cheat-download": {
					title: "Enlisted作弊下载 | Instant Access",
					description: "Enlisted作弊下载: digital license download after payment. 即时数字交付. undetected — Windows PC.",
					h1: "Enlisted作弊下载",
					intro: "Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。Enlisted作弊下载.",
					imageAlt: "Enlisted Hacks download and install delivery flow",
					galleryTitle: "Enlisted作弊下载",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "购买 Enlisted Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Enlisted作弊下载",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。digital license download after payment.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@enlistedhacks.net",
							],
						},
					],
				},
				"mod-menu": {
					title: "Enlisted修改菜单 | In-Game Toggles",
					description: "Enlisted修改菜单: in-client ESP and soft aim toggles. 即时数字交付. undetected — Windows PC.",
					h1: "Enlisted修改菜单",
					intro: "Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。Enlisted修改菜单.",
					imageAlt: "Enlisted Hacks in-game menu controls",
					galleryTitle: "Enlisted修改菜单",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "购买 Enlisted Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted修改菜单",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。in-client ESP and soft aim toggles.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@enlistedhacks.net",
							],
						},
					],
				},
				"soft-aim": {
					title: "Enlisted Soft Aim | Smooth Aim Settings",
					description: "Enlisted Soft Aim: smooth soft aim settings for Windows PC. 即时数字交付. undetected — Windows PC.",
					h1: "Enlisted Soft Aim",
					intro: "Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。Enlisted Soft Aim.",
					imageAlt: "Enlisted soft aim FOV and smoothness settings",
					galleryTitle: "Enlisted Soft Aim",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "购买 Enlisted Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Enlisted Soft Aim",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。smooth soft aim settings for Windows PC.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@enlistedhacks.net",
							],
						},
					],
				},
				"best-cheats": {
					title: "最佳Enlisted作弊 | Buyer Checklist",
					description: "最佳Enlisted作弊: what to compare before buying Enlisted hacks. 即时数字交付. undetected — Windows PC.",
					h1: "最佳Enlisted作弊",
					intro: "Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。最佳Enlisted作弊.",
					imageAlt: "Enlisted Hacks overview for Enlisted on PC",
					galleryTitle: "最佳Enlisted作弊",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "购买 Enlisted Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "最佳Enlisted作弊",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。what to compare before buying Enlisted hacks.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@enlistedhacks.net",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Enlisted自瞄外挂 | Soft Aim Assist",
					description: "Enlisted自瞄外挂: undetected Aimbot hack assist for Enlisted. 即时数字交付. undetected — Windows PC.",
					h1: "Enlisted自瞄外挂",
					intro: "Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。Enlisted自瞄外挂.",
					imageAlt: "Enlisted aimbot hack controls and bone priority",
					galleryTitle: "Enlisted自瞄外挂",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "购买 Enlisted Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Enlisted自瞄外挂",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。undetected Aimbot hack assist for Enlisted.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@enlistedhacks.net",
							],
						},
					],
				},
				"esp-hack": {
					title: "Enlisted ESP外挂 | Boxes & Loot",
					description: "Enlisted ESP外挂: ESP hack boxes, loot pins, and distance. 即时数字交付. undetected — Windows PC.",
					h1: "Enlisted ESP外挂",
					intro: "Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。Enlisted ESP外挂.",
					imageAlt: "Enlisted ESP hack boxes and loot markers",
					galleryTitle: "Enlisted ESP外挂",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "购买 Enlisted Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted ESP外挂",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。ESP hack boxes, loot pins, and distance.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@enlistedhacks.net",
							],
						},
					],
				},
				"unlock-all": {
					title: "Enlisted Unlock All | What It Means",
					description: "Enlisted Unlock All: unlock-all searches vs real ESP and Aimbot tools. 即时数字交付. undetected — Windows PC.",
					h1: "Enlisted Unlock All",
					intro: "Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。Enlisted Unlock All.",
					imageAlt: "Enlisted Hacks license features overview",
					galleryTitle: "Enlisted Unlock All",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "购买 Enlisted Hacks",
					ctaSecondary: "查看功能",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted Unlock All",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。unlock-all searches vs real ESP and Aimbot tools.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "即时数字交付",
							paragraphs: [
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
								"支持与法务：support@enlistedhacks.net",
							],
						},
					],
				},
				privacy: {
					title: "隐私政策 | Enlisted Hacks",
					description: "隐私政策 for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "隐私政策",
					intro: "Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。隐私政策 for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on enlistedhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"支持与法务：support@enlistedhacks.net",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				refund: {
					title: "退款政策 | Enlisted Hacks",
					description: "退款政策 for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "退款政策",
					intro: "Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。退款政策 for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。Contact email, Zadeyo order references, and basic site security data.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat补丁后请查看Updates页面。无任何作弊保证永久undetected。",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"支持与法务：support@enlistedhacks.net",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				terms: {
					title: "使用条款 | Enlisted Hacks",
					description: "使用条款 for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "使用条款",
					intro: "Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。使用条款 for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "邮件支持",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。Contact email, Zadeyo order references, and basic site security data.",
								"通过Zadeyo checkout即时数字交付。$35/月和$150终身含Easy Anti-Cheat维护。",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Enlisted Hacks为EnlistedWindows PC提供ESP wallhack、radar hack和enlisted aimbotundetected套餐。Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"支持与法务：support@enlistedhacks.net",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
			},
		},
		hi: {
			ui: {
				nav: {
					home: "होम",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "फ़ीचर्स",
					pricing: "कीमत",
					setup: "सेटअप",
					updates: "अपडेट",
					faq: "FAQ",
					buyNow: "अभी खरीदें",
				},
				hero: {
					accent: "Undetected Enlisted hacks",
					accentShort: "Enlisted Hacks",
					subtitle: "Enlisted Windows PC के लिए ESP wallhack, radar hack और Aimbot — Easy Anti-Cheat maintenance शामिल।",
					subtitleShort: "Enlisted PC के लिए ESP, radar और Aimbot",
					buyNow: "अभी खरीदें",
					seeFeatures: "फ़ीचर्स देखें",
				},
				trust: {
					status: "ऑनलाइन",
					statusNote: "Enlisted Hacks पैकेज Enlisted Windows PC के लिए सक्रिय है।",
					statusShort: "सक्रिय",
					delivery: "तुरंत डिजिटल डिलीवरी",
					platform: "Windows 10 और 11",
					antiCheat: "Easy Anti-Cheat maintenance समर्थित",
					antiCheatShort: "Easy Anti-Cheat समर्थित",
				},
				product: {
					title: "Enlisted Hacks",
					addToCart: "कार्ट में जोड़ें",
					monthly: "मासिक",
					lifetime: "लाइफ़टाइम",
					available: "अभी उपलब्ध",
					gameBadge: "Enlisted",
					platformBadge: "Windows PC",
					statusBadge: "Undetected पैकेज",
				},
				reviews: {
					title: "खिलाड़ी क्या कहते हैं",
					subtitle: "Enlisted Hacks खरीदारों की हाल की प्रतिक्रिया",
					outOf: "/5",
					countLabel: "समीक्षाएँ",
				},
				common: {
					buyNow: "अभी खरीदें",
					readGuide: "गाइड पढ़ें",
					language: "भाषा",
					officialLanguageNote: "अंग्रेज़ी आधिकारिक भाषा है। अन्य भाषाएँ वैश्विक SEO के लिए अनुवादित हैं।",
					relatedPages: "संबंधित पेज",
				},
				footer: {
					explore: "एक्सप्लोर",
					help: "सहायता और कानूनी",
					tagline: "Enlisted के लिए undetected ESP, wallhack, radar और Aimbot — Zadeyo checkout।",
				},
				images: {
					hero: "Enlisted Hacks hero — ESP and aimbot overlay in Enlisted",
					espWallhack: "Wallhack outlines showing enemy soldiers and AI soldiers through walls",
					aimbotCombat: "Soft aim assist overlay during an Enlisted raid",
					squadFight: "Enlisted Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Enlisted raid",
					headerArt: "Aimbot view and bone priority controls for Enlisted",
					cheatsPackage: "2D radar threat overlay for Enlisted",
					rebootFight: "Aimbot assist during a Enlisted firefight",
					battleRoyale: "Enlisted Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Enlisted",
				},
			},
			pages: {
				home: {
					title: "Enlisted Hacks 2026 | ESP, Wallhack और Aimbot",
					description: "Enlisted undetected cheats. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. Instant digital delivery.",
					h1: "Enlisted Hacks — Undetected ESP, Wallhack और Aimbot",
					intro: "Enlisted Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, Easy Anti-Cheat maintenance सहित.",
					imageAlt: "Enlisted hacks hero ESP aimbot wallhack",
					galleryTitle: "Enlisted Hacks gallery — ESP, Aimbot, wallhack",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Enlisted Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "2026 में Enlisted Hacks क्यों",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। BR और scav-run में दुश्मन squad पढ़ने के लिए आदर्श.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot एक लाइसेंस में",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। अलग टूल्स के बजाय एक लाइसेंस.",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
					],
				},
				"enlisted-esp": {
					title: "Enlisted ESP | Player Boxes & Wallhack",
					description: "Enlisted ESP: player boxes, loot markers, and wallhack overlays. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Enlisted ESP",
					intro: "Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। Enlisted ESP.",
					imageAlt: "Enlisted ESP player boxes and distance readouts in a raid",
					galleryTitle: "Enlisted ESP",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Enlisted ESP",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। player boxes, loot markers, and wallhack overlays.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@enlistedhacks.net",
							],
						},
					],
				},
				"enlisted-aimbot": {
					title: "Enlisted Aimbot | Soft Aim Controls",
					description: "Enlisted Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Enlisted Aimbot",
					intro: "Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। Enlisted Aimbot.",
					imageAlt: "Enlisted aimbot and soft aim controls on Windows PC",
					galleryTitle: "Enlisted Aimbot",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Enlisted Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted Aimbot",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। soft aim, FOV, and per-weapon Aimbot profiles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@enlistedhacks.net",
							],
						},
					],
				},
				features: {
					title: "फ़ीचर्स | Full Feature List",
					description: "फ़ीचर्स: ESP, soft aim, radar controls. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "फ़ीचर्स",
					intro: "Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। फ़ीचर्स.",
					imageAlt: "Enlisted Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "फ़ीचर्स",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Enlisted Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "फ़ीचर्स",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। ESP, soft aim, radar controls.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@enlistedhacks.net",
							],
						},
					],
				},
				pricing: {
					title: "कीमत | Monthly & Lifetime",
					description: "कीमत: $35 monthly or $150 lifetime licenses. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "कीमत",
					intro: "Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। कीमत.",
					imageAlt: "Enlisted Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "कीमत",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Enlisted Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "कीमत",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। $35 monthly or $150 lifetime licenses.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@enlistedhacks.net",
							],
						},
					],
				},
				setup: {
					title: "सेटअप | PC Setup Guide",
					description: "सेटअप: Windows PC activation and first-launch setup. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सेटअप",
					intro: "Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। सेटअप.",
					imageAlt: "Enlisted Hacks setup guide screenshot for Windows PC",
					galleryTitle: "सेटअप",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "सेटअप",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। Windows PC activation and first-launch setup.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@enlistedhacks.net",
							],
						},
					],
				},
				updates: {
					title: "अपडेट | Easy Anti-Cheat Maintenance Log",
					description: "अपडेट: Easy Anti-Cheat patch status and rebuild notes. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "अपडेट",
					intro: "Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। अपडेट.",
					imageAlt: "Enlisted Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "अपडेट",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Enlisted Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "अपडेट",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। Easy Anti-Cheat patch status and rebuild notes.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@enlistedhacks.net",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। FAQ.",
					imageAlt: "Enlisted Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Enlisted Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@enlistedhacks.net",
							],
						},
					],
				},
				support: {
					title: "सहायता | Help & Contact",
					description: "सहायता: order help and license support contact. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सहायता",
					intro: "Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। सहायता.",
					imageAlt: "Enlisted Hacks support page for license and setup help",
					galleryTitle: "सहायता",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Enlisted Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "सहायता",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। order help and license support contact.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@enlistedhacks.net",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | Easy Anti-Cheat Safe Status",
					description: "Undetected cheats: undetected maintenance after Easy Anti-Cheat patches. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। Undetected cheats.",
					imageAlt: "Enlisted Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Enlisted Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। undetected maintenance after Easy Anti-Cheat patches.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@enlistedhacks.net",
							],
						},
					],
				},
				wallhack: {
					title: "Enlisted Wallhack | ESP Visibility",
					description: "Enlisted Wallhack: wallhack ESP for players, loot, and distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Enlisted Wallhack",
					intro: "Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। Enlisted Wallhack.",
					imageAlt: "Enlisted wallhack visibility through walls in a raid",
					galleryTitle: "Enlisted Wallhack",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Enlisted Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted Wallhack",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। wallhack ESP for players, loot, and distance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@enlistedhacks.net",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। Radar Hack.",
					imageAlt: "Enlisted 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। 2D radar cues for flanks and rotations.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@enlistedhacks.net",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Enlisted hacks. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। Easy Anti-Cheat Bypass.",
					imageAlt: "Enlisted Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Enlisted Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। how Easy Anti-Cheat updates are handled for Enlisted hacks.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@enlistedhacks.net",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Enlisted Hacks 2026 | Buyer Guide",
					description: "Enlisted Hacks 2026: 2026 Enlisted hacks checklist before checkout. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Enlisted Hacks 2026",
					intro: "Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। Enlisted Hacks 2026.",
					imageAlt: "Enlisted Hacks product overview for Enlisted",
					galleryTitle: "Enlisted Hacks 2026",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Enlisted Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Enlisted Hacks 2026",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। 2026 Enlisted hacks checklist before checkout.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@enlistedhacks.net",
							],
						},
					],
				},
				hacks: {
					title: "Enlisted Hacks | ESP Aimbot Guide",
					description: "Enlisted Hacks: the Enlisted hacks pillar for ESP and Aimbot. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Enlisted Hacks",
					intro: "Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। Enlisted Hacks.",
					imageAlt: "Enlisted Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Enlisted Hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Enlisted Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted Hacks",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। the Enlisted hacks pillar for ESP and Aimbot.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@enlistedhacks.net",
							],
						},
					],
				},
				"cheat-download": {
					title: "Enlisted Cheat Download | Instant Access",
					description: "Enlisted Cheat Download: digital license download after payment. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Enlisted Cheat Download",
					intro: "Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। Enlisted Cheat Download.",
					imageAlt: "Enlisted Hacks download and install delivery flow",
					galleryTitle: "Enlisted Cheat Download",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Enlisted Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Enlisted Cheat Download",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। digital license download after payment.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@enlistedhacks.net",
							],
						},
					],
				},
				"mod-menu": {
					title: "Enlisted Mod Menu | In-Game Toggles",
					description: "Enlisted Mod Menu: in-client ESP and soft aim toggles. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Enlisted Mod Menu",
					intro: "Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। Enlisted Mod Menu.",
					imageAlt: "Enlisted Hacks in-game menu controls",
					galleryTitle: "Enlisted Mod Menu",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted Mod Menu",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। in-client ESP and soft aim toggles.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@enlistedhacks.net",
							],
						},
					],
				},
				"soft-aim": {
					title: "Enlisted Soft Aim | Smooth Aim Settings",
					description: "Enlisted Soft Aim: smooth soft aim settings for Windows PC. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Enlisted Soft Aim",
					intro: "Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। Enlisted Soft Aim.",
					imageAlt: "Enlisted soft aim FOV and smoothness settings",
					galleryTitle: "Enlisted Soft Aim",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Enlisted Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Enlisted Soft Aim",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। smooth soft aim settings for Windows PC.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@enlistedhacks.net",
							],
						},
					],
				},
				"best-cheats": {
					title: "सर्वश्रेष्ठ Enlisted Hacks | Buyer Checklist",
					description: "सर्वश्रेष्ठ Enlisted Hacks: what to compare before buying Enlisted hacks. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "सर्वश्रेष्ठ Enlisted Hacks",
					intro: "Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। सर्वश्रेष्ठ Enlisted Hacks.",
					imageAlt: "Enlisted Hacks overview for Enlisted on PC",
					galleryTitle: "सर्वश्रेष्ठ Enlisted Hacks",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Enlisted Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "सर्वश्रेष्ठ Enlisted Hacks",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। what to compare before buying Enlisted hacks.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@enlistedhacks.net",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Enlisted Aimbot Hack | Soft Aim Assist",
					description: "Enlisted Aimbot Hack: undetected Aimbot hack assist for Enlisted. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Enlisted Aimbot Hack",
					intro: "Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। Enlisted Aimbot Hack.",
					imageAlt: "Enlisted aimbot hack controls and bone priority",
					galleryTitle: "Enlisted Aimbot Hack",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Enlisted Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Enlisted Aimbot Hack",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। undetected Aimbot hack assist for Enlisted.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@enlistedhacks.net",
							],
						},
					],
				},
				"esp-hack": {
					title: "Enlisted ESP Hack | Boxes & Loot",
					description: "Enlisted ESP Hack: ESP hack boxes, loot pins, and distance. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Enlisted ESP Hack",
					intro: "Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। Enlisted ESP Hack.",
					imageAlt: "Enlisted ESP hack boxes and loot markers",
					galleryTitle: "Enlisted ESP Hack",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Enlisted Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted ESP Hack",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। ESP hack boxes, loot pins, and distance.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@enlistedhacks.net",
							],
						},
					],
				},
				"unlock-all": {
					title: "Enlisted Unlock All | What It Means",
					description: "Enlisted Unlock All: unlock-all searches vs real ESP and Aimbot tools. तुरंत डिजिटल डिलीवरी. undetected — Windows PC.",
					h1: "Enlisted Unlock All",
					intro: "Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। Enlisted Unlock All.",
					imageAlt: "Enlisted Hacks license features overview",
					galleryTitle: "Enlisted Unlock All",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Enlisted Hacks खरीदें",
					ctaSecondary: "फ़ीचर्स देखें",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted Unlock All",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। unlock-all searches vs real ESP and Aimbot tools.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "तुरंत डिजिटल डिलीवरी",
							paragraphs: [
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
								"सहायता: support@enlistedhacks.net",
							],
						},
					],
				},
				privacy: {
					title: "गोपनीयता नीति | Enlisted Hacks",
					description: "गोपनीयता नीति for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "गोपनीयता नीति",
					intro: "Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। गोपनीयता नीति for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on enlistedhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"सहायता: support@enlistedhacks.net",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				refund: {
					title: "रिफंड नीति | Enlisted Hacks",
					description: "रिफंड नीति for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "रिफंड नीति",
					intro: "Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। रिफंड नीति for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Easy Anti-Cheat पैच के बाद Updates पेज देखें। कोई भी cheat permanent undetected गारंटी नहीं देता।",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"सहायता: support@enlistedhacks.net",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				terms: {
					title: "उपयोग की शर्तें | Enlisted Hacks",
					description: "उपयोग की शर्तें for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "उपयोग की शर्तें",
					intro: "Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। उपयोग की शर्तें for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। Contact email, Zadeyo order references, and basic site security data.",
								"Zadeyo checkout से तुरंत डिजिटल डिलीवरी। $35/माह और $150 लाइफ़टाइम में Easy Anti-Cheat maintenance शामिल।",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Enlisted Hacks Enlisted के लिए Windows PC पर ESP wallhack, radar hack और enlisted aimbot undetected पैकेज देता है। Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"सहायता: support@enlistedhacks.net",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
			},
		},
		id: {
			ui: {
				nav: {
					home: "Beranda",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Fitur",
					pricing: "Harga",
					setup: "Setup",
					updates: "Pembaruan",
					faq: "FAQ",
					buyNow: "Beli sekarang",
				},
				hero: {
					accent: "Cheat Enlisted undetected",
					accentShort: "Enlisted Hacks",
					subtitle: "ESP wallhack, radar hack, dan Aimbot untuk Enlisted di PC Windows — pemeliharaan Easy Anti-Cheat termasuk.",
					subtitleShort: "ESP, radar & Aimbot untuk Enlisted PC",
					buyNow: "Beli sekarang",
					seeFeatures: "Lihat fitur",
				},
				trust: {
					status: "Online",
					statusNote: "Paket Enlisted Hacks aktif untuk Enlisted di PC Windows.",
					statusShort: "Aktif",
					delivery: "Pengiriman digital instan",
					platform: "Windows 10 & 11",
					antiCheat: "Pemeliharaan Easy Anti-Cheat didukung",
					antiCheatShort: "Easy Anti-Cheat didukung",
				},
				product: {
					title: "Enlisted Hacks",
					addToCart: "Tambah ke keranjang",
					monthly: "Bulanan",
					lifetime: "Seumur hidup",
					available: "Tersedia sekarang",
					gameBadge: "Enlisted",
					platformBadge: "Windows PC",
					statusBadge: "Paket undetected",
				},
				reviews: {
					title: "Apa kata pemain",
					subtitle: "Umpan balik terbaru dari pembeli Enlisted Hacks",
					outOf: "dari 5",
					countLabel: "ulasan",
				},
				common: {
					buyNow: "Beli sekarang",
					readGuide: "Baca panduan",
					language: "Bahasa",
					officialLanguageNote: "Bahasa Inggris adalah bahasa resmi. Bahasa lain diterjemahkan untuk SEO global.",
					relatedPages: "Halaman terkait",
				},
				footer: {
					explore: "Jelajahi",
					help: "Bantuan & legal",
					tagline: "ESP, wallhack, radar, dan Aimbot undetected untuk Enlisted — checkout via Zadeyo.",
				},
				images: {
					hero: "Enlisted Hacks hero — ESP and aimbot overlay in Enlisted",
					espWallhack: "Wallhack outlines showing enemy soldiers and AI soldiers through walls",
					aimbotCombat: "Soft aim assist overlay during an Enlisted raid",
					squadFight: "Enlisted Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Enlisted raid",
					headerArt: "Aimbot view and bone priority controls for Enlisted",
					cheatsPackage: "2D radar threat overlay for Enlisted",
					rebootFight: "Aimbot assist during a Enlisted firefight",
					battleRoyale: "Enlisted Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Enlisted",
				},
			},
			pages: {
				home: {
					title: "Enlisted Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Enlisted undetected untuk Enlisted di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Easy Anti-Cheat. Pengiriman digital",
					h1: "Enlisted Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Paket undetected Enlisted di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Easy Anti-Cheat.",
					imageAlt: "Enlisted ESP player tags hack",
					galleryTitle: "Galeri Enlisted Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Beli Enlisted Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mengapa Enlisted Hacks di 2026",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Ideal membaca squad musuh di BR dan scav-run.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot dalam satu lisensi",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Satu lisensi alih-alih alat terpisah.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
					],
				},
				"enlisted-esp": {
					title: "ESP Enlisted | Player Boxes & Wallhack",
					description: "ESP Enlisted: player boxes, loot markers, and wallhack overlays. pengiriman digital instan. undetected — PC Windows.",
					h1: "ESP Enlisted",
					intro: "Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. ESP Enlisted.",
					imageAlt: "Enlisted ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Beli Enlisted Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "ESP Enlisted",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. player boxes, loot markers, and wallhack overlays.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@enlistedhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"enlisted-aimbot": {
					title: "Aimbot Enlisted | Soft Aim Controls",
					description: "Aimbot Enlisted: soft aim, FOV, and per-weapon Aimbot profiles. pengiriman digital instan. undetected — PC Windows.",
					h1: "Aimbot Enlisted",
					intro: "Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Aimbot Enlisted.",
					imageAlt: "Enlisted aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Beli Enlisted Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Aimbot Enlisted",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@enlistedhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				features: {
					title: "Fitur | Full Feature List",
					description: "Fitur: ESP, soft aim, radar controls. pengiriman digital instan. undetected — PC Windows.",
					h1: "Fitur",
					intro: "Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Fitur.",
					imageAlt: "Enlisted Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Fitur",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Beli Enlisted Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Fitur",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. ESP, soft aim, radar controls.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@enlistedhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				pricing: {
					title: "Harga | Monthly & Lifetime",
					description: "Harga: $35 monthly or $150 lifetime licenses. pengiriman digital instan. undetected — PC Windows.",
					h1: "Harga",
					intro: "Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Harga.",
					imageAlt: "Enlisted Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Harga",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Beli Enlisted Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Harga",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. $35 monthly or $150 lifetime licenses.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@enlistedhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				setup: {
					title: "Setup | PC Setup Guide",
					description: "Setup: Windows PC activation and first-launch setup. pengiriman digital instan. undetected — PC Windows.",
					h1: "Setup",
					intro: "Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Setup.",
					imageAlt: "Enlisted Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Setup",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Beli Enlisted Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Setup",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Windows PC activation and first-launch setup.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@enlistedhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				updates: {
					title: "Pembaruan | Easy Anti-Cheat Maintenance Log",
					description: "Pembaruan: Easy Anti-Cheat patch status and rebuild notes. pengiriman digital instan. undetected — PC Windows.",
					h1: "Pembaruan",
					intro: "Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Pembaruan.",
					imageAlt: "Enlisted Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Pembaruan",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Beli Enlisted Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Pembaruan",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@enlistedhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. pengiriman digital instan. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. FAQ.",
					imageAlt: "Enlisted Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Beli Enlisted Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@enlistedhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				support: {
					title: "Dukungan | Help & Contact",
					description: "Dukungan: order help and license support contact. pengiriman digital instan. undetected — PC Windows.",
					h1: "Dukungan",
					intro: "Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Dukungan.",
					imageAlt: "Enlisted Hacks support page for license and setup help",
					galleryTitle: "Dukungan",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Beli Enlisted Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Dukungan",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. order help and license support contact.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@enlistedhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | Easy Anti-Cheat Safe Status",
					description: "Cheat undetected: undetected maintenance after Easy Anti-Cheat patches. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Cheat undetected.",
					imageAlt: "Enlisted Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Beli Enlisted Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@enlistedhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Enlisted | ESP Visibility",
					description: "Wallhack Enlisted: wallhack ESP for players, loot, and distance. pengiriman digital instan. undetected — PC Windows.",
					h1: "Wallhack Enlisted",
					intro: "Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Wallhack Enlisted.",
					imageAlt: "Enlisted wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Enlisted",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Beli Enlisted Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Wallhack Enlisted",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. wallhack ESP for players, loot, and distance.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@enlistedhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. pengiriman digital instan. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Radar hack.",
					imageAlt: "Enlisted 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Beli Enlisted Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. 2D radar cues for flanks and rotations.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@enlistedhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Enlisted hacks. pengiriman digital instan. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Enlisted Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Beli Enlisted Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. how Easy Anti-Cheat updates are handled for Enlisted hacks.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@enlistedhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Enlisted 2026 | Buyer Guide",
					description: "Cheat Enlisted 2026: 2026 Enlisted hacks checklist before checkout. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Enlisted 2026",
					intro: "Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Cheat Enlisted 2026.",
					imageAlt: "Enlisted Hacks product overview for Enlisted",
					galleryTitle: "Cheat Enlisted 2026",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Beli Enlisted Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Cheat Enlisted 2026",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. 2026 Enlisted hacks checklist before checkout.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@enlistedhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Enlisted | ESP Aimbot Guide",
					description: "Cheat Enlisted: the Enlisted hacks pillar for ESP and Aimbot. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Enlisted",
					intro: "Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Cheat Enlisted.",
					imageAlt: "Enlisted Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Enlisted",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Beli Enlisted Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Enlisted",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. the Enlisted hacks pillar for ESP and Aimbot.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@enlistedhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Download Cheat Enlisted | Instant Access",
					description: "Download Cheat Enlisted: digital license download after payment. pengiriman digital instan. undetected — PC Windows.",
					h1: "Download Cheat Enlisted",
					intro: "Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Download Cheat Enlisted.",
					imageAlt: "Enlisted Hacks download and install delivery flow",
					galleryTitle: "Download Cheat Enlisted",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Beli Enlisted Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Download Cheat Enlisted",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. digital license download after payment.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@enlistedhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Menu mod Enlisted | In-Game Toggles",
					description: "Menu mod Enlisted: in-client ESP and soft aim toggles. pengiriman digital instan. undetected — PC Windows.",
					h1: "Menu mod Enlisted",
					intro: "Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Menu mod Enlisted.",
					imageAlt: "Enlisted Hacks in-game menu controls",
					galleryTitle: "Menu mod Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Beli Enlisted Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Menu mod Enlisted",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. in-client ESP and soft aim toggles.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@enlistedhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Enlisted | Smooth Aim Settings",
					description: "Soft aim Enlisted: smooth soft aim settings for Windows PC. pengiriman digital instan. undetected — PC Windows.",
					h1: "Soft aim Enlisted",
					intro: "Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Soft aim Enlisted.",
					imageAlt: "Enlisted soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Beli Enlisted Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Soft aim Enlisted",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. smooth soft aim settings for Windows PC.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@enlistedhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Enlisted terbaik | Buyer Checklist",
					description: "Cheat Enlisted terbaik: what to compare before buying Enlisted hacks. pengiriman digital instan. undetected — PC Windows.",
					h1: "Cheat Enlisted terbaik",
					intro: "Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Cheat Enlisted terbaik.",
					imageAlt: "Enlisted Hacks overview for Enlisted on PC",
					galleryTitle: "Cheat Enlisted terbaik",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Beli Enlisted Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Enlisted terbaik",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. what to compare before buying Enlisted hacks.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@enlistedhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Enlisted | Soft Aim Assist",
					description: "Hack aimbot Enlisted: undetected Aimbot hack assist for Enlisted. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack aimbot Enlisted",
					intro: "Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Hack aimbot Enlisted.",
					imageAlt: "Enlisted aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Beli Enlisted Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Enlisted",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. undetected Aimbot hack assist for Enlisted.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@enlistedhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Enlisted | Boxes & Loot",
					description: "Hack ESP Enlisted: ESP hack boxes, loot pins, and distance. pengiriman digital instan. undetected — PC Windows.",
					h1: "Hack ESP Enlisted",
					intro: "Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Hack ESP Enlisted.",
					imageAlt: "Enlisted ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Enlisted",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Beli Enlisted Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Hack ESP Enlisted",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. ESP hack boxes, loot pins, and distance.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@enlistedhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Enlisted | What It Means",
					description: "Unlock all Enlisted: unlock-all searches vs real ESP and Aimbot tools. pengiriman digital instan. undetected — PC Windows.",
					h1: "Unlock all Enlisted",
					intro: "Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Unlock all Enlisted.",
					imageAlt: "Enlisted Hacks license features overview",
					galleryTitle: "Unlock all Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Beli Enlisted Hacks",
					ctaSecondary: "Lihat fitur",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Enlisted",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "pengiriman digital instan",
							paragraphs: [
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
								"support@enlistedhacks.net untuk dukungan dan legal.",
							],
						},
					],
				},
				privacy: {
					title: "Kebijakan privasi | Enlisted Hacks",
					description: "Kebijakan privasi for Enlisted Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan privasi",
					intro: "Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Kebijakan privasi for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on enlistedhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@enlistedhacks.net untuk dukungan dan legal.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Kebijakan refund | Enlisted Hacks",
					description: "Kebijakan refund for Enlisted Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Kebijakan refund",
					intro: "Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Kebijakan refund for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Periksa Updates setelah patch Easy Anti-Cheat. Tidak ada cheat yang menjamin undetected permanen.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@enlistedhacks.net untuk dukungan dan legal.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Syarat penggunaan | Enlisted Hacks",
					description: "Syarat penggunaan for Enlisted Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Syarat penggunaan",
					intro: "Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Syarat penggunaan for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"pengiriman digital instan via checkout Zadeyo. Paket $35/bulan dan $150 seumur hidup termasuk pemeliharaan Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Enlisted Hacks menyediakan ESP wallhack, radar hack, dan enlisted aimbot undetected untuk Enlisted di PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@enlistedhacks.net untuk dukungan dan legal.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
			},
		},
		th: {
			ui: {
				nav: {
					home: "หน้าแรก",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "ฟีเจอร์",
					pricing: "ราคา",
					setup: "ติดตั้ง",
					updates: "อัปเดต",
					faq: "FAQ",
					buyNow: "ซื้อเลย",
				},
				hero: {
					accent: "Enlisted hacks ไม่ถูกตรวจจับ",
					accentShort: "Enlisted Hacks",
					subtitle: "ESP wallhack, radar hack และ Aimbot สำหรับ Enlisted บน Windows PC — รวมการดูแล Easy Anti-Cheat",
					subtitleShort: "ESP, radar และ Aimbot สำหรับ Enlisted PC",
					buyNow: "ซื้อเลย",
					seeFeatures: "ดูฟีเจอร์",
				},
				trust: {
					status: "ออนไลน์",
					statusNote: "แพ็กเกจ Enlisted Hacks พร้อมใช้งานสำหรับ Enlisted บน Windows PC",
					statusShort: "ใช้งาน",
					delivery: "จัดส่งดิจิทัลทันที",
					platform: "Windows 10 และ 11",
					antiCheat: "รองรับการดูแล Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat รองรับ",
				},
				product: {
					title: "Enlisted Hacks",
					addToCart: "เพิ่มในตะกร้า",
					monthly: "รายเดือน",
					lifetime: "ตลอดชีพ",
					available: "พร้อมใช้งาน",
					gameBadge: "Enlisted",
					platformBadge: "Windows PC",
					statusBadge: "แพ็กเกจ undetected",
				},
				reviews: {
					title: "ผู้เล่นพูดว่าอย่างไร",
					subtitle: "ความคิดเห็นล่าสุดจากผู้ซื้อ Enlisted Hacks",
					outOf: "จาก 5",
					countLabel: "รีวิว",
				},
				common: {
					buyNow: "ซื้อเลย",
					readGuide: "อ่านคู่มือ",
					language: "ภาษา",
					officialLanguageNote: "ภาษาอังกฤษเป็นภาษาทางการ ภาษาอื่นแปลเพื่อ SEO ระดับโลก",
					relatedPages: "หน้าที่เกี่ยวข้อง",
				},
				footer: {
					explore: "สำรวจ",
					help: "ช่วยเหลือและกฎหมาย",
					tagline: "ESP, wallhack, radar และ Aimbot ไม่ถูกตรวจจับสำหรับ Enlisted — ชำระผ่าน Zadeyo",
				},
				images: {
					hero: "Enlisted Hacks hero — ESP and aimbot overlay in Enlisted",
					espWallhack: "Wallhack outlines showing enemy soldiers and AI soldiers through walls",
					aimbotCombat: "Soft aim assist overlay during an Enlisted raid",
					squadFight: "Enlisted Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Enlisted raid",
					headerArt: "Aimbot view and bone priority controls for Enlisted",
					cheatsPackage: "2D radar threat overlay for Enlisted",
					rebootFight: "Aimbot assist during a Enlisted firefight",
					battleRoyale: "Enlisted Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Enlisted",
				},
			},
			pages: {
				home: {
					title: "Enlisted Hacks 2026 | ESP, Wallhack และ Aimbot",
					description: "Cheat Enlisted undetected สำหรับ Enlisted บน PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. จัดส่งดิจิทัลทันที.",
					h1: "Enlisted Hacks — Undetected ESP, Wallhack และ Aimbot",
					intro: "แพ็ก undetected สำหรับ Enlisted บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Easy Anti-Cheat maintenance",
					imageAlt: "Enlisted ESP player tags hack",
					galleryTitle: "แกลเลอรี Enlisted Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "ซื้อ Enlisted Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "ทำไมเลือก Enlisted Hacks ปี 2026",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC เหมาะสำหรับอ่าน squad ศัตรูใน BR และ scav-run",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC ใบอนุญาตเดียวแทนเครื่องมือแยก",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
					],
				},
				"enlisted-esp": {
					title: "Enlisted ESP | Player Boxes & Wallhack",
					description: "Enlisted ESP: player boxes, loot markers, and wallhack overlays. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Enlisted ESP",
					intro: "Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC Enlisted ESP.",
					imageAlt: "Enlisted ESP player boxes and distance readouts in a raid",
					galleryTitle: "Enlisted ESP",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "ซื้อ Enlisted Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Enlisted ESP",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC player boxes, loot markers, and wallhack overlays.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@enlistedhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"enlisted-aimbot": {
					title: "Enlisted Aimbot | Soft Aim Controls",
					description: "Enlisted Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Enlisted Aimbot",
					intro: "Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC Enlisted Aimbot.",
					imageAlt: "Enlisted aimbot and soft aim controls on Windows PC",
					galleryTitle: "Enlisted Aimbot",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "ซื้อ Enlisted Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted Aimbot",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC soft aim, FOV, and per-weapon Aimbot profiles.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@enlistedhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				features: {
					title: "ฟีเจอร์ | Full Feature List",
					description: "ฟีเจอร์: ESP, soft aim, radar controls. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ฟีเจอร์",
					intro: "Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC ฟีเจอร์.",
					imageAlt: "Enlisted Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "ฟีเจอร์",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ Enlisted Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "ฟีเจอร์",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC ESP, soft aim, radar controls.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@enlistedhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				pricing: {
					title: "ราคา | Monthly & Lifetime",
					description: "ราคา: $35 monthly or $150 lifetime licenses. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ราคา",
					intro: "Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC ราคา.",
					imageAlt: "Enlisted Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "ราคา",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "ซื้อ Enlisted Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ราคา",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC $35 monthly or $150 lifetime licenses.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@enlistedhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				setup: {
					title: "ติดตั้ง | PC Setup Guide",
					description: "ติดตั้ง: Windows PC activation and first-launch setup. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ติดตั้ง",
					intro: "Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC ติดตั้ง.",
					imageAlt: "Enlisted Hacks setup guide screenshot for Windows PC",
					galleryTitle: "ติดตั้ง",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "ซื้อ Enlisted Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "ติดตั้ง",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC Windows PC activation and first-launch setup.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@enlistedhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				updates: {
					title: "อัปเดต | Easy Anti-Cheat Maintenance Log",
					description: "อัปเดต: Easy Anti-Cheat patch status and rebuild notes. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "อัปเดต",
					intro: "Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC อัปเดต.",
					imageAlt: "Enlisted Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "อัปเดต",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "ซื้อ Enlisted Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "อัปเดต",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC Easy Anti-Cheat patch status and rebuild notes.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@enlistedhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC FAQ.",
					imageAlt: "Enlisted Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ Enlisted Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@enlistedhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				support: {
					title: "สนับสนุน | Help & Contact",
					description: "สนับสนุน: order help and license support contact. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "สนับสนุน",
					intro: "Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC สนับสนุน.",
					imageAlt: "Enlisted Hacks support page for license and setup help",
					galleryTitle: "สนับสนุน",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "ซื้อ Enlisted Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "สนับสนุน",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC order help and license support contact.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@enlistedhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | Easy Anti-Cheat Safe Status",
					description: "Cheats undetected: undetected maintenance after Easy Anti-Cheat patches. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheats undetected",
					intro: "Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC Cheats undetected.",
					imageAlt: "Enlisted Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "ซื้อ Enlisted Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC undetected maintenance after Easy Anti-Cheat patches.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@enlistedhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				wallhack: {
					title: "Enlisted Wallhack | ESP Visibility",
					description: "Enlisted Wallhack: wallhack ESP for players, loot, and distance. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Enlisted Wallhack",
					intro: "Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC Enlisted Wallhack.",
					imageAlt: "Enlisted wallhack visibility through walls in a raid",
					galleryTitle: "Enlisted Wallhack",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "ซื้อ Enlisted Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted Wallhack",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC wallhack ESP for players, loot, and distance.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@enlistedhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC Radar Hack.",
					imageAlt: "Enlisted 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "ซื้อ Enlisted Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC 2D radar cues for flanks and rotations.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@enlistedhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Enlisted hacks. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC Easy Anti-Cheat Bypass.",
					imageAlt: "Enlisted Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "ซื้อ Enlisted Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC how Easy Anti-Cheat updates are handled for Enlisted hacks.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@enlistedhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Enlisted Hacks 2026 | Buyer Guide",
					description: "Enlisted Hacks 2026: 2026 Enlisted hacks checklist before checkout. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Enlisted Hacks 2026",
					intro: "Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC Enlisted Hacks 2026.",
					imageAlt: "Enlisted Hacks product overview for Enlisted",
					galleryTitle: "Enlisted Hacks 2026",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "ซื้อ Enlisted Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Enlisted Hacks 2026",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC 2026 Enlisted hacks checklist before checkout.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@enlistedhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				hacks: {
					title: "Enlisted Hacks | ESP Aimbot Guide",
					description: "Enlisted Hacks: the Enlisted hacks pillar for ESP and Aimbot. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Enlisted Hacks",
					intro: "Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC Enlisted Hacks.",
					imageAlt: "Enlisted Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Enlisted Hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "ซื้อ Enlisted Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted Hacks",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC the Enlisted hacks pillar for ESP and Aimbot.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@enlistedhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"cheat-download": {
					title: "ดาวน์โหลด Enlisted Hacks | Instant Access",
					description: "ดาวน์โหลด Enlisted Hacks: digital license download after payment. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "ดาวน์โหลด Enlisted Hacks",
					intro: "Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC ดาวน์โหลด Enlisted Hacks.",
					imageAlt: "Enlisted Hacks download and install delivery flow",
					galleryTitle: "ดาวน์โหลด Enlisted Hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "ซื้อ Enlisted Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "ดาวน์โหลด Enlisted Hacks",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC digital license download after payment.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@enlistedhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"mod-menu": {
					title: "เมนูมอด Enlisted | In-Game Toggles",
					description: "เมนูมอด Enlisted: in-client ESP and soft aim toggles. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "เมนูมอด Enlisted",
					intro: "Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC เมนูมอด Enlisted.",
					imageAlt: "Enlisted Hacks in-game menu controls",
					galleryTitle: "เมนูมอด Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "ซื้อ Enlisted Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "เมนูมอด Enlisted",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC in-client ESP and soft aim toggles.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@enlistedhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"soft-aim": {
					title: "Enlisted Soft Aim | Smooth Aim Settings",
					description: "Enlisted Soft Aim: smooth soft aim settings for Windows PC. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Enlisted Soft Aim",
					intro: "Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC Enlisted Soft Aim.",
					imageAlt: "Enlisted soft aim FOV and smoothness settings",
					galleryTitle: "Enlisted Soft Aim",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ Enlisted Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Enlisted Soft Aim",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC smooth soft aim settings for Windows PC.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@enlistedhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Enlisted ที่ดีที่สุด | Buyer Checklist",
					description: "Cheat Enlisted ที่ดีที่สุด: what to compare before buying Enlisted hacks. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Cheat Enlisted ที่ดีที่สุด",
					intro: "Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC Cheat Enlisted ที่ดีที่สุด.",
					imageAlt: "Enlisted Hacks overview for Enlisted on PC",
					galleryTitle: "Cheat Enlisted ที่ดีที่สุด",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "ซื้อ Enlisted Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Enlisted ที่ดีที่สุด",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC what to compare before buying Enlisted hacks.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@enlistedhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack Aimbot Enlisted | Soft Aim Assist",
					description: "Hack Aimbot Enlisted: undetected Aimbot hack assist for Enlisted. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack Aimbot Enlisted",
					intro: "Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC Hack Aimbot Enlisted.",
					imageAlt: "Enlisted aimbot hack controls and bone priority",
					galleryTitle: "Hack Aimbot Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "ซื้อ Enlisted Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Hack Aimbot Enlisted",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC undetected Aimbot hack assist for Enlisted.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@enlistedhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Enlisted | Boxes & Loot",
					description: "Hack ESP Enlisted: ESP hack boxes, loot pins, and distance. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Hack ESP Enlisted",
					intro: "Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC Hack ESP Enlisted.",
					imageAlt: "Enlisted ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Enlisted",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "ซื้อ Enlisted Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Hack ESP Enlisted",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC ESP hack boxes, loot pins, and distance.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@enlistedhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				"unlock-all": {
					title: "Enlisted Unlock All | What It Means",
					description: "Enlisted Unlock All: unlock-all searches vs real ESP and Aimbot tools. จัดส่งดิจิทัลทันที. undetected — Windows PC.",
					h1: "Enlisted Unlock All",
					intro: "Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC Enlisted Unlock All.",
					imageAlt: "Enlisted Hacks license features overview",
					galleryTitle: "Enlisted Unlock All",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "ซื้อ Enlisted Hacks",
					ctaSecondary: "ดูฟีเจอร์",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted Unlock All",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC unlock-all searches vs real ESP and Aimbot tools.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "จัดส่งดิจิทัลทันที",
							paragraphs: [
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
								"support@enlistedhacks.net สำหรับการสนับสนุน",
							],
						},
					],
				},
				privacy: {
					title: "นโยบายความเป็นส่วนตัว | Enlisted Hacks",
					description: "นโยบายความเป็นส่วนตัว for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายความเป็นส่วนตัว",
					intro: "Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC นโยบายความเป็นส่วนตัว for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on enlistedhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@enlistedhacks.net สำหรับการสนับสนุน",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				refund: {
					title: "นโยบายการคืนเงิน | Enlisted Hacks",
					description: "นโยบายการคืนเงิน for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "นโยบายการคืนเงิน",
					intro: "Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC นโยบายการคืนเงิน for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"ตรวจ Updates หลังแพตช์ Easy Anti-Cheat ไม่มี cheat รับประกัน undetected ถาวร",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@enlistedhacks.net สำหรับการสนับสนุน",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				terms: {
					title: "ข้อกำหนดการใช้งาน | Enlisted Hacks",
					description: "ข้อกำหนดการใช้งาน for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "ข้อกำหนดการใช้งาน",
					intro: "Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC ข้อกำหนดการใช้งาน for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC Contact email, Zadeyo order references, and basic site security data.",
								"จัดส่งดิจิทัลทันที ผ่าน checkout Zadeyo แพ็ก $35/เดือน และ $150 ตลอดชีพ รวมการดูแล Easy Anti-Cheat",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Enlisted Hacks รวม ESP wallhack, radar hack และ enlisted aimbot แบบ undetected สำหรับ Enlisted บน Windows PC Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@enlistedhacks.net สำหรับการสนับสนุน",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
			},
		},
		vi: {
			ui: {
				nav: {
					home: "Trang chủ",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Tính năng",
					pricing: "Giá",
					setup: "Cài đặt",
					updates: "Cập nhật",
					faq: "FAQ",
					buyNow: "Mua ngay",
				},
				hero: {
					accent: "Cheat Enlisted undetected",
					accentShort: "Enlisted Hacks",
					subtitle: "ESP wallhack, radar hack và Aimbot cho Enlisted trên PC Windows — bảo trì Easy Anti-Cheat bao gồm.",
					subtitleShort: "ESP, radar & Aimbot cho Enlisted PC",
					buyNow: "Mua ngay",
					seeFeatures: "Xem tính năng",
				},
				trust: {
					status: "Trực tuyến",
					statusNote: "Gói Enlisted Hacks đang hoạt động cho Enlisted trên PC Windows.",
					statusShort: "Hoạt động",
					delivery: "Giao hàng kỹ thuật số tức thì",
					platform: "Windows 10 & 11",
					antiCheat: "Hỗ trợ bảo trì Easy Anti-Cheat",
					antiCheatShort: "Hỗ trợ Easy Anti-Cheat",
				},
				product: {
					title: "Enlisted Hacks",
					addToCart: "Thêm vào giỏ",
					monthly: "Hàng tháng",
					lifetime: "Trọn đời",
					available: "Có sẵn ngay",
					gameBadge: "Enlisted",
					platformBadge: "Windows PC",
					statusBadge: "Gói undetected",
				},
				reviews: {
					title: "Người chơi nói gì",
					subtitle: "Phản hồi gần đây từ người mua Enlisted Hacks",
					outOf: "/5",
					countLabel: "đánh giá",
				},
				common: {
					buyNow: "Mua ngay",
					readGuide: "Đọc hướng dẫn",
					language: "Ngôn ngữ",
					officialLanguageNote: "Tiếng Anh là ngôn ngữ chính thức. Các ngôn ngữ khác được dịch cho SEO toàn cầu.",
					relatedPages: "Trang liên quan",
				},
				footer: {
					explore: "Khám phá",
					help: "Trợ giúp & pháp lý",
					tagline: "ESP, wallhack, radar và Aimbot undetected cho Enlisted — thanh toán qua Zadeyo.",
				},
				images: {
					hero: "Enlisted Hacks hero — ESP and aimbot overlay in Enlisted",
					espWallhack: "Wallhack outlines showing enemy soldiers and AI soldiers through walls",
					aimbotCombat: "Soft aim assist overlay during an Enlisted raid",
					squadFight: "Enlisted Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Enlisted raid",
					headerArt: "Aimbot view and bone priority controls for Enlisted",
					cheatsPackage: "2D radar threat overlay for Enlisted",
					rebootFight: "Aimbot assist during a Enlisted firefight",
					battleRoyale: "Enlisted Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Enlisted",
				},
			},
			pages: {
				home: {
					title: "Enlisted Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Cheat Enlisted undetected cho Enlisted trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Easy Anti-Cheat. Giao hàng kỹ thuật số tức",
					h1: "Enlisted Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Gói undetected Enlisted trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Easy Anti-Cheat.",
					imageAlt: "Enlisted ESP player tags hack",
					galleryTitle: "Thư viện Enlisted Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Mua Enlisted Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Vì sao chọn Enlisted Hacks 2026",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Lý tưởng đọc squad địch trong BR và scav-run.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar, Aimbot trong một giấy phép",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Một giấy phép thay vì công cụ riêng.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
					],
				},
				"enlisted-esp": {
					title: "ESP Enlisted | Player Boxes & Wallhack",
					description: "ESP Enlisted: player boxes, loot markers, and wallhack overlays. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "ESP Enlisted",
					intro: "Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. ESP Enlisted.",
					imageAlt: "Enlisted ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Mua Enlisted Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "ESP Enlisted",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. player boxes, loot markers, and wallhack overlays.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@enlistedhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"enlisted-aimbot": {
					title: "Aimbot Enlisted | Soft Aim Controls",
					description: "Aimbot Enlisted: soft aim, FOV, and per-weapon Aimbot profiles. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Aimbot Enlisted",
					intro: "Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Aimbot Enlisted.",
					imageAlt: "Enlisted aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Mua Enlisted Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Aimbot Enlisted",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@enlistedhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				features: {
					title: "Tính năng | Full Feature List",
					description: "Tính năng: ESP, soft aim, radar controls. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tính năng",
					intro: "Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Tính năng.",
					imageAlt: "Enlisted Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Tính năng",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Mua Enlisted Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Tính năng",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. ESP, soft aim, radar controls.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@enlistedhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				pricing: {
					title: "Giá | Monthly & Lifetime",
					description: "Giá: $35 monthly or $150 lifetime licenses. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Giá",
					intro: "Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Giá.",
					imageAlt: "Enlisted Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Giá",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Mua Enlisted Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Giá",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. $35 monthly or $150 lifetime licenses.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@enlistedhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				setup: {
					title: "Cài đặt | PC Setup Guide",
					description: "Cài đặt: Windows PC activation and first-launch setup. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cài đặt",
					intro: "Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Cài đặt.",
					imageAlt: "Enlisted Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Cài đặt",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Mua Enlisted Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Cài đặt",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Windows PC activation and first-launch setup.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@enlistedhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				updates: {
					title: "Cập nhật | Easy Anti-Cheat Maintenance Log",
					description: "Cập nhật: Easy Anti-Cheat patch status and rebuild notes. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cập nhật",
					intro: "Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Cập nhật.",
					imageAlt: "Enlisted Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Cập nhật",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Mua Enlisted Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Cập nhật",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@enlistedhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. FAQ.",
					imageAlt: "Enlisted Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Mua Enlisted Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@enlistedhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				support: {
					title: "Hỗ trợ | Help & Contact",
					description: "Hỗ trợ: order help and license support contact. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hỗ trợ",
					intro: "Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Hỗ trợ.",
					imageAlt: "Enlisted Hacks support page for license and setup help",
					galleryTitle: "Hỗ trợ",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Mua Enlisted Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Hỗ trợ",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. order help and license support contact.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@enlistedhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				undetected: {
					title: "Cheat undetected | Easy Anti-Cheat Safe Status",
					description: "Cheat undetected: undetected maintenance after Easy Anti-Cheat patches. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat undetected",
					intro: "Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Cheat undetected.",
					imageAlt: "Enlisted Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheat undetected",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Mua Enlisted Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Cheat undetected",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@enlistedhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Enlisted | ESP Visibility",
					description: "Wallhack Enlisted: wallhack ESP for players, loot, and distance. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Wallhack Enlisted",
					intro: "Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Wallhack Enlisted.",
					imageAlt: "Enlisted wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Enlisted",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Mua Enlisted Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Wallhack Enlisted",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. wallhack ESP for players, loot, and distance.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@enlistedhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Radar hack.",
					imageAlt: "Enlisted 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Mua Enlisted Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. 2D radar cues for flanks and rotations.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@enlistedhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Enlisted hacks. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Enlisted Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Mua Enlisted Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. how Easy Anti-Cheat updates are handled for Enlisted hacks.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@enlistedhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheat Enlisted 2026 | Buyer Guide",
					description: "Cheat Enlisted 2026: 2026 Enlisted hacks checklist before checkout. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Enlisted 2026",
					intro: "Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Cheat Enlisted 2026.",
					imageAlt: "Enlisted Hacks product overview for Enlisted",
					galleryTitle: "Cheat Enlisted 2026",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Mua Enlisted Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Cheat Enlisted 2026",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. 2026 Enlisted hacks checklist before checkout.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@enlistedhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				hacks: {
					title: "Cheat Enlisted | ESP Aimbot Guide",
					description: "Cheat Enlisted: the Enlisted hacks pillar for ESP and Aimbot. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Enlisted",
					intro: "Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Cheat Enlisted.",
					imageAlt: "Enlisted Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheat Enlisted",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Mua Enlisted Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheat Enlisted",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. the Enlisted hacks pillar for ESP and Aimbot.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@enlistedhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Tải Cheat Enlisted | Instant Access",
					description: "Tải Cheat Enlisted: digital license download after payment. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Tải Cheat Enlisted",
					intro: "Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Tải Cheat Enlisted.",
					imageAlt: "Enlisted Hacks download and install delivery flow",
					galleryTitle: "Tải Cheat Enlisted",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Mua Enlisted Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Tải Cheat Enlisted",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. digital license download after payment.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@enlistedhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Mod menu Enlisted | In-Game Toggles",
					description: "Mod menu Enlisted: in-client ESP and soft aim toggles. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Mod menu Enlisted",
					intro: "Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Mod menu Enlisted.",
					imageAlt: "Enlisted Hacks in-game menu controls",
					galleryTitle: "Mod menu Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Mua Enlisted Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Mod menu Enlisted",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. in-client ESP and soft aim toggles.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@enlistedhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Enlisted | Smooth Aim Settings",
					description: "Soft aim Enlisted: smooth soft aim settings for Windows PC. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Soft aim Enlisted",
					intro: "Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Soft aim Enlisted.",
					imageAlt: "Enlisted soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Mua Enlisted Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Soft aim Enlisted",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. smooth soft aim settings for Windows PC.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@enlistedhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cheat Enlisted tốt nhất | Buyer Checklist",
					description: "Cheat Enlisted tốt nhất: what to compare before buying Enlisted hacks. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Cheat Enlisted tốt nhất",
					intro: "Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Cheat Enlisted tốt nhất.",
					imageAlt: "Enlisted Hacks overview for Enlisted on PC",
					galleryTitle: "Cheat Enlisted tốt nhất",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Mua Enlisted Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cheat Enlisted tốt nhất",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. what to compare before buying Enlisted hacks.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@enlistedhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Enlisted | Soft Aim Assist",
					description: "Hack aimbot Enlisted: undetected Aimbot hack assist for Enlisted. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack aimbot Enlisted",
					intro: "Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Hack aimbot Enlisted.",
					imageAlt: "Enlisted aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Mua Enlisted Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Enlisted",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. undetected Aimbot hack assist for Enlisted.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@enlistedhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Enlisted | Boxes & Loot",
					description: "Hack ESP Enlisted: ESP hack boxes, loot pins, and distance. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Hack ESP Enlisted",
					intro: "Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Hack ESP Enlisted.",
					imageAlt: "Enlisted ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Enlisted",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Mua Enlisted Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Hack ESP Enlisted",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. ESP hack boxes, loot pins, and distance.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@enlistedhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Enlisted | What It Means",
					description: "Unlock all Enlisted: unlock-all searches vs real ESP and Aimbot tools. giao hàng kỹ thuật số tức thì. undetected — PC Windows.",
					h1: "Unlock all Enlisted",
					intro: "Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Unlock all Enlisted.",
					imageAlt: "Enlisted Hacks license features overview",
					galleryTitle: "Unlock all Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Mua Enlisted Hacks",
					ctaSecondary: "Xem tính năng",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Enlisted",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "giao hàng kỹ thuật số tức thì",
							paragraphs: [
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
								"support@enlistedhacks.net cho hỗ trợ và pháp lý.",
							],
						},
					],
				},
				privacy: {
					title: "Chính sách bảo mật | Enlisted Hacks",
					description: "Chính sách bảo mật for Enlisted Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách bảo mật",
					intro: "Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Chính sách bảo mật for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on enlistedhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@enlistedhacks.net cho hỗ trợ và pháp lý.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Chính sách hoàn tiền | Enlisted Hacks",
					description: "Chính sách hoàn tiền for Enlisted Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Chính sách hoàn tiền",
					intro: "Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Chính sách hoàn tiền for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Kiểm tra Updates sau bản vá Easy Anti-Cheat. Không cheat nào đảm bảo undetected vĩnh viễn.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@enlistedhacks.net cho hỗ trợ và pháp lý.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Điều khoản sử dụng | Enlisted Hacks",
					description: "Điều khoản sử dụng for Enlisted Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Điều khoản sử dụng",
					intro: "Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Điều khoản sử dụng for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"giao hàng kỹ thuật số tức thì qua checkout Zadeyo. Gói $35/tháng và $150 trọn đời gồm bảo trì Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Enlisted Hacks cung cấp ESP wallhack, radar hack và enlisted aimbot undetected cho Enlisted trên PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@enlistedhacks.net cho hỗ trợ và pháp lý.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
			},
		},
		uk: {
			ui: {
				nav: {
					home: "Головна",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Функції",
					pricing: "Ціни",
					setup: "Встановлення",
					updates: "Оновлення",
					faq: "FAQ",
					buyNow: "Купити",
				},
				hero: {
					accent: "Undetected чіти Enlisted",
					accentShort: "Enlisted Hacks",
					subtitle: "ESP wallhack, radar hack і Aimbot для Enlisted на Windows PC — обслуговування Easy Anti-Cheat включено.",
					subtitleShort: "ESP, radar і Aimbot для Enlisted PC",
					buyNow: "Купити",
					seeFeatures: "Дивитися функції",
				},
				trust: {
					status: "Онлайн",
					statusNote: "Пакет Enlisted Hacks активний для Enlisted на Windows PC.",
					statusShort: "Активний",
					delivery: "Миттєва цифрова доставка",
					platform: "Windows 10 і 11",
					antiCheat: "Підтримка обслуговування Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat підтримка",
				},
				product: {
					title: "Enlisted Hacks",
					addToCart: "До кошика",
					monthly: "Щомісяця",
					lifetime: "Назавжди",
					available: "Доступно зараз",
					gameBadge: "Enlisted",
					platformBadge: "Windows PC",
					statusBadge: "Undetected пакет",
				},
				reviews: {
					title: "Що кажуть гравці",
					subtitle: "Останні відгуки покупців Enlisted Hacks",
					outOf: "з 5",
					countLabel: "відгуків",
				},
				common: {
					buyNow: "Купити",
					readGuide: "Читати гайд",
					language: "Мова",
					officialLanguageNote: "Англійська — офіційна мова. Інші версії перекладені для глобального SEO.",
					relatedPages: "Пов'язані сторінки",
				},
				footer: {
					explore: "Огляд",
					help: "Допомога та право",
					tagline: "Undetected ESP, wallhack, radar і Aimbot для Enlisted — оплата через Zadeyo.",
				},
				images: {
					hero: "Enlisted Hacks hero — ESP and aimbot overlay in Enlisted",
					espWallhack: "Wallhack outlines showing enemy soldiers and AI soldiers through walls",
					aimbotCombat: "Soft aim assist overlay during an Enlisted raid",
					squadFight: "Enlisted Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Enlisted raid",
					headerArt: "Aimbot view and bone priority controls for Enlisted",
					cheatsPackage: "2D radar threat overlay for Enlisted",
					rebootFight: "Aimbot assist during a Enlisted firefight",
					battleRoyale: "Enlisted Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Enlisted",
				},
			},
			pages: {
				home: {
					title: "Enlisted Hacks 2026 | ESP, Wallhack і Aimbot",
					description: "Undetected чіти Enlisted для Enlisted на PC. ESP wallhack, radar hack, Aimbot, обслуговування Easy Anti-Cheat. Мгновенная цифровая",
					h1: "Enlisted Hacks — Undetected ESP, Wallhack і Aimbot",
					intro: "Undetected пакет для Enlisted на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Easy Anti-Cheat.",
					imageAlt: "Enlisted ESP player tags hack",
					galleryTitle: "Галерея Enlisted Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Купити Enlisted Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чому Enlisted Hacks у 2026",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Ідеально для читання ворожих загонів у BR і scav-run.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar і Aimbot в одній ліцензії",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Одна ліцензія замість окремих інструментів.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
					],
				},
				"enlisted-esp": {
					title: "ESP Enlisted | Player Boxes & Wallhack",
					description: "ESP Enlisted: player boxes, loot markers, and wallhack overlays. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "ESP Enlisted",
					intro: "Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. ESP Enlisted.",
					imageAlt: "Enlisted ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Купити Enlisted Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "ESP Enlisted",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@enlistedhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"enlisted-aimbot": {
					title: "Aimbot Enlisted | Soft Aim Controls",
					description: "Aimbot Enlisted: soft aim, FOV, and per-weapon Aimbot profiles. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Aimbot Enlisted",
					intro: "Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Aimbot Enlisted.",
					imageAlt: "Enlisted aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Купити Enlisted Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Aimbot Enlisted",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@enlistedhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				features: {
					title: "Функції | Full Feature List",
					description: "Функції: ESP, soft aim, radar controls. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Функції",
					intro: "Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Функції.",
					imageAlt: "Enlisted Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Функції",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Купити Enlisted Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Функції",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. ESP, soft aim, radar controls.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@enlistedhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				pricing: {
					title: "Ціни | Monthly & Lifetime",
					description: "Ціни: $35 monthly or $150 lifetime licenses. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Ціни",
					intro: "Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Ціни.",
					imageAlt: "Enlisted Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Ціни",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Купити Enlisted Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ціни",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. $35 monthly or $150 lifetime licenses.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@enlistedhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				setup: {
					title: "Встановлення | PC Setup Guide",
					description: "Встановлення: Windows PC activation and first-launch setup. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Встановлення",
					intro: "Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Встановлення.",
					imageAlt: "Enlisted Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Встановлення",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Купити Enlisted Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Встановлення",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Windows PC activation and first-launch setup.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@enlistedhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				updates: {
					title: "Оновлення | Easy Anti-Cheat Maintenance Log",
					description: "Оновлення: Easy Anti-Cheat patch status and rebuild notes. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Оновлення",
					intro: "Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Оновлення.",
					imageAlt: "Enlisted Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Оновлення",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Купити Enlisted Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Оновлення",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@enlistedhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. FAQ.",
					imageAlt: "Enlisted Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Купити Enlisted Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@enlistedhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				support: {
					title: "Підтримка | Help & Contact",
					description: "Підтримка: order help and license support contact. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Підтримка",
					intro: "Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Підтримка.",
					imageAlt: "Enlisted Hacks support page for license and setup help",
					galleryTitle: "Підтримка",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Купити Enlisted Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Підтримка",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. order help and license support contact.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@enlistedhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected чіти | Easy Anti-Cheat Safe Status",
					description: "Undetected чіти: undetected maintenance after Easy Anti-Cheat patches. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Undetected чіти",
					intro: "Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Undetected чіти.",
					imageAlt: "Enlisted Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected чіти",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Купити Enlisted Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Undetected чіти",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@enlistedhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Enlisted | ESP Visibility",
					description: "Wallhack Enlisted: wallhack ESP for players, loot, and distance. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Wallhack Enlisted",
					intro: "Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Wallhack Enlisted.",
					imageAlt: "Enlisted wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Enlisted",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Купити Enlisted Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Wallhack Enlisted",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. wallhack ESP for players, loot, and distance.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@enlistedhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Radar hack",
					intro: "Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Radar hack.",
					imageAlt: "Enlisted 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Купити Enlisted Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. 2D radar cues for flanks and rotations.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@enlistedhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Enlisted hacks. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Bypass Easy Anti-Cheat.",
					imageAlt: "Enlisted Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Купити Enlisted Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. how Easy Anti-Cheat updates are handled for Enlisted hacks.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@enlistedhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Чіти Enlisted 2026 | Buyer Guide",
					description: "Чіти Enlisted 2026: 2026 Enlisted hacks checklist before checkout. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти Enlisted 2026",
					intro: "Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Чіти Enlisted 2026.",
					imageAlt: "Enlisted Hacks product overview for Enlisted",
					galleryTitle: "Чіти Enlisted 2026",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Купити Enlisted Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Чіти Enlisted 2026",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. 2026 Enlisted hacks checklist before checkout.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@enlistedhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				hacks: {
					title: "Чіти Enlisted | ESP Aimbot Guide",
					description: "Чіти Enlisted: the Enlisted hacks pillar for ESP and Aimbot. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Чіти Enlisted",
					intro: "Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Чіти Enlisted.",
					imageAlt: "Enlisted Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Чіти Enlisted",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Купити Enlisted Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Чіти Enlisted",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. the Enlisted hacks pillar for ESP and Aimbot.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@enlistedhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Завантаження Enlisted Hacks | Instant Access",
					description: "Завантаження Enlisted Hacks: digital license download after payment. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Завантаження Enlisted Hacks",
					intro: "Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Завантаження Enlisted Hacks.",
					imageAlt: "Enlisted Hacks download and install delivery flow",
					galleryTitle: "Завантаження Enlisted Hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Купити Enlisted Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Завантаження Enlisted Hacks",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. digital license download after payment.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@enlistedhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Мод-меню Enlisted | In-Game Toggles",
					description: "Мод-меню Enlisted: in-client ESP and soft aim toggles. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Мод-меню Enlisted",
					intro: "Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Мод-меню Enlisted.",
					imageAlt: "Enlisted Hacks in-game menu controls",
					galleryTitle: "Мод-меню Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Купити Enlisted Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Мод-меню Enlisted",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. in-client ESP and soft aim toggles.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@enlistedhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Enlisted | Smooth Aim Settings",
					description: "Soft aim Enlisted: smooth soft aim settings for Windows PC. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Soft aim Enlisted",
					intro: "Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Soft aim Enlisted.",
					imageAlt: "Enlisted soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Купити Enlisted Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Soft aim Enlisted",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. smooth soft aim settings for Windows PC.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@enlistedhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Найкращі чіти Enlisted | Buyer Checklist",
					description: "Найкращі чіти Enlisted: what to compare before buying Enlisted hacks. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Найкращі чіти Enlisted",
					intro: "Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Найкращі чіти Enlisted.",
					imageAlt: "Enlisted Hacks overview for Enlisted on PC",
					galleryTitle: "Найкращі чіти Enlisted",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Купити Enlisted Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Найкращі чіти Enlisted",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. what to compare before buying Enlisted hacks.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@enlistedhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Хак aimbot Enlisted | Soft Aim Assist",
					description: "Хак aimbot Enlisted: undetected Aimbot hack assist for Enlisted. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак aimbot Enlisted",
					intro: "Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Хак aimbot Enlisted.",
					imageAlt: "Enlisted aimbot hack controls and bone priority",
					galleryTitle: "Хак aimbot Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Купити Enlisted Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Хак aimbot Enlisted",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. undetected Aimbot hack assist for Enlisted.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@enlistedhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Хак ESP Enlisted | Boxes & Loot",
					description: "Хак ESP Enlisted: ESP hack boxes, loot pins, and distance. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Хак ESP Enlisted",
					intro: "Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Хак ESP Enlisted.",
					imageAlt: "Enlisted ESP hack boxes and loot markers",
					galleryTitle: "Хак ESP Enlisted",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Купити Enlisted Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Хак ESP Enlisted",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. ESP hack boxes, loot pins, and distance.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@enlistedhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Enlisted | What It Means",
					description: "Unlock all Enlisted: unlock-all searches vs real ESP and Aimbot tools. миттєва цифрова доставка. undetected — Windows PC.",
					h1: "Unlock all Enlisted",
					intro: "Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Unlock all Enlisted.",
					imageAlt: "Enlisted Hacks license features overview",
					galleryTitle: "Unlock all Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Купити Enlisted Hacks",
					ctaSecondary: "Дивитися функції",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Enlisted",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "миттєва цифрова доставка",
							paragraphs: [
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
								"support@enlistedhacks.net для підтримки та правових питань.",
							],
						},
					],
				},
				privacy: {
					title: "Політика конфіденційності | Enlisted Hacks",
					description: "Політика конфіденційності for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика конфіденційності",
					intro: "Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Політика конфіденційності for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on enlistedhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@enlistedhacks.net для підтримки та правових питань.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Політика повернення | Enlisted Hacks",
					description: "Політика повернення for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Політика повернення",
					intro: "Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Політика повернення for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Перевіряйте Updates після патчів Easy Anti-Cheat. Жоден чит не гарантує постійний undetected статус.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@enlistedhacks.net для підтримки та правових питань.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Умови використання | Enlisted Hacks",
					description: "Умови використання for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Умови використання",
					intro: "Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Умови використання for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Ліцензії з миттєва цифрова доставка через checkout Zadeyo. Тарифи $35/міс і $150 назавжди включають обслуговування Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Enlisted Hacks об'єднує ESP wallhack, radar hack і enlisted aimbot у undetected пакеті для Enlisted на Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@enlistedhacks.net для підтримки та правових питань.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
			},
		},
		cs: {
			ui: {
				nav: {
					home: "Domů",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funkce",
					pricing: "Ceny",
					setup: "Instalace",
					updates: "Aktualizace",
					faq: "FAQ",
					buyNow: "Koupit",
				},
				hero: {
					accent: "Undetected Enlisted hacky",
					accentShort: "Enlisted Hacks",
					subtitle: "ESP wallhack, radar hack a Aimbot pro Enlisted na Windows PC — údržba Easy Anti-Cheat v ceně.",
					subtitleShort: "ESP, radar a Aimbot pro Enlisted PC",
					buyNow: "Koupit",
					seeFeatures: "Zobrazit funkce",
				},
				trust: {
					status: "Online",
					statusNote: "Balíček Enlisted Hacks je aktivní pro Enlisted na Windows PC.",
					statusShort: "Aktivní",
					delivery: "Okamžité digitální doručení",
					platform: "Windows 10 a 11",
					antiCheat: "Podpora údržby Easy Anti-Cheat",
					antiCheatShort: "Easy Anti-Cheat podpora",
				},
				product: {
					title: "Enlisted Hacks",
					addToCart: "Přidat do košíku",
					monthly: "Měsíčně",
					lifetime: "Doživotně",
					available: "Dostupné nyní",
					gameBadge: "Enlisted",
					platformBadge: "Windows PC",
					statusBadge: "Undetected balíček",
				},
				reviews: {
					title: "Co říkají hráči",
					subtitle: "Nedávná zpětná vazba od kupujících Enlisted Hacks",
					outOf: "z 5",
					countLabel: "recenzí",
				},
				common: {
					buyNow: "Koupit",
					readGuide: "Číst průvodce",
					language: "Jazyk",
					officialLanguageNote: "Angličtina je oficiální jazyk. Ostatní jazyky jsou přeloženy pro globální SEO.",
					relatedPages: "Související stránky",
				},
				footer: {
					explore: "Prozkoumat",
					help: "Nápověda a právo",
					tagline: "Undetected ESP, wallhack, radar a Aimbot pro Enlisted — checkout přes Zadeyo.",
				},
				images: {
					hero: "Enlisted Hacks hero — ESP and aimbot overlay in Enlisted",
					espWallhack: "Wallhack outlines showing enemy soldiers and AI soldiers through walls",
					aimbotCombat: "Soft aim assist overlay during an Enlisted raid",
					squadFight: "Enlisted Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Enlisted raid",
					headerArt: "Aimbot view and bone priority controls for Enlisted",
					cheatsPackage: "2D radar threat overlay for Enlisted",
					rebootFight: "Aimbot assist during a Enlisted firefight",
					battleRoyale: "Enlisted Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Enlisted",
				},
			},
			pages: {
				home: {
					title: "Enlisted Hacks 2026 | ESP, Wallhack a Aimbot",
					description: "Undetected Enlisted hacky pro Enlisted na PC. ESP wallhack, radar hack, Aimbot, údržba Easy Anti-Cheat. Okamžité digitální doručení.",
					h1: "Enlisted Hacks — Undetected ESP, Wallhack a Aimbot",
					intro: "Undetected balíček pro Enlisted na Windows PC: ESP wallhack, radar, Aimbot s údržbou Easy Anti-Cheat.",
					imageAlt: "Enlisted ESP player tags hack",
					galleryTitle: "Galerie Enlisted Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Koupit Enlisted Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Proč Enlisted Hacks v roce 2026",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Ideální pro čtení nepřátelských squadů v BR a scav-run.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar a Aimbot v jedné licenci",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Jedna licence místo samostatných nástrojů.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
					],
				},
				"enlisted-esp": {
					title: "Enlisted ESP | Player Boxes & Wallhack",
					description: "Enlisted ESP: player boxes, loot markers, and wallhack overlays. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Enlisted ESP",
					intro: "Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Enlisted ESP.",
					imageAlt: "Enlisted ESP player boxes and distance readouts in a raid",
					galleryTitle: "Enlisted ESP",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Koupit Enlisted Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Enlisted ESP",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@enlistedhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"enlisted-aimbot": {
					title: "Enlisted Aimbot | Soft Aim Controls",
					description: "Enlisted Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Enlisted Aimbot",
					intro: "Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Enlisted Aimbot.",
					imageAlt: "Enlisted aimbot and soft aim controls on Windows PC",
					galleryTitle: "Enlisted Aimbot",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Koupit Enlisted Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted Aimbot",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@enlistedhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				features: {
					title: "Funkce | Full Feature List",
					description: "Funkce: ESP, soft aim, radar controls. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Funkce",
					intro: "Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Funkce.",
					imageAlt: "Enlisted Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funkce",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit Enlisted Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funkce",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. ESP, soft aim, radar controls.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@enlistedhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				pricing: {
					title: "Ceny | Monthly & Lifetime",
					description: "Ceny: $35 monthly or $150 lifetime licenses. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Ceny",
					intro: "Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Ceny.",
					imageAlt: "Enlisted Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Ceny",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Koupit Enlisted Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Ceny",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@enlistedhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				setup: {
					title: "Instalace | PC Setup Guide",
					description: "Instalace: Windows PC activation and first-launch setup. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Instalace",
					intro: "Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Instalace.",
					imageAlt: "Enlisted Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalace",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Koupit Enlisted Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalace",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Windows PC activation and first-launch setup.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@enlistedhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				updates: {
					title: "Aktualizace | Easy Anti-Cheat Maintenance Log",
					description: "Aktualizace: Easy Anti-Cheat patch status and rebuild notes. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Aktualizace",
					intro: "Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Aktualizace.",
					imageAlt: "Enlisted Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Aktualizace",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Koupit Enlisted Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Aktualizace",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@enlistedhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. okamžité digitální doručení. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. FAQ.",
					imageAlt: "Enlisted Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit Enlisted Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@enlistedhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				support: {
					title: "Podpora | Help & Contact",
					description: "Podpora: order help and license support contact. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Podpora",
					intro: "Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Podpora.",
					imageAlt: "Enlisted Hacks support page for license and setup help",
					galleryTitle: "Podpora",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Koupit Enlisted Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Podpora",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. order help and license support contact.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@enlistedhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheaty | Easy Anti-Cheat Safe Status",
					description: "Undetected cheaty: undetected maintenance after Easy Anti-Cheat patches. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Undetected cheaty",
					intro: "Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Undetected cheaty.",
					imageAlt: "Enlisted Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected cheaty",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Koupit Enlisted Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Undetected cheaty",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@enlistedhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				wallhack: {
					title: "Enlisted Wallhack | ESP Visibility",
					description: "Enlisted Wallhack: wallhack ESP for players, loot, and distance. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Enlisted Wallhack",
					intro: "Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Enlisted Wallhack.",
					imageAlt: "Enlisted wallhack visibility through walls in a raid",
					galleryTitle: "Enlisted Wallhack",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Koupit Enlisted Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted Wallhack",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. wallhack ESP for players, loot, and distance.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@enlistedhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Radar Hack.",
					imageAlt: "Enlisted 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Koupit Enlisted Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. 2D radar cues for flanks and rotations.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@enlistedhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Enlisted hacks. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt: "Enlisted Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Koupit Enlisted Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. how Easy Anti-Cheat updates are handled for Enlisted hacks.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@enlistedhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Enlisted hacky 2026 | Buyer Guide",
					description: "Enlisted hacky 2026: 2026 Enlisted hacks checklist before checkout. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Enlisted hacky 2026",
					intro: "Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Enlisted hacky 2026.",
					imageAlt: "Enlisted Hacks product overview for Enlisted",
					galleryTitle: "Enlisted hacky 2026",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Koupit Enlisted Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Enlisted hacky 2026",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. 2026 Enlisted hacks checklist before checkout.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@enlistedhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				hacks: {
					title: "Enlisted hacky | ESP Aimbot Guide",
					description: "Enlisted hacky: the Enlisted hacks pillar for ESP and Aimbot. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Enlisted hacky",
					intro: "Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Enlisted hacky.",
					imageAlt: "Enlisted Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Enlisted hacky",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Koupit Enlisted Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted hacky",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. the Enlisted hacks pillar for ESP and Aimbot.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@enlistedhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Stáhnout Enlisted Hacks | Instant Access",
					description: "Stáhnout Enlisted Hacks: digital license download after payment. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Stáhnout Enlisted Hacks",
					intro: "Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Stáhnout Enlisted Hacks.",
					imageAlt: "Enlisted Hacks download and install delivery flow",
					galleryTitle: "Stáhnout Enlisted Hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Koupit Enlisted Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Stáhnout Enlisted Hacks",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. digital license download after payment.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@enlistedhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Enlisted mod menu | In-Game Toggles",
					description: "Enlisted mod menu: in-client ESP and soft aim toggles. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Enlisted mod menu",
					intro: "Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Enlisted mod menu.",
					imageAlt: "Enlisted Hacks in-game menu controls",
					galleryTitle: "Enlisted mod menu",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Koupit Enlisted Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted mod menu",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. in-client ESP and soft aim toggles.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@enlistedhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Enlisted Soft Aim | Smooth Aim Settings",
					description: "Enlisted Soft Aim: smooth soft aim settings for Windows PC. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Enlisted Soft Aim",
					intro: "Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Enlisted Soft Aim.",
					imageAlt: "Enlisted soft aim FOV and smoothness settings",
					galleryTitle: "Enlisted Soft Aim",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit Enlisted Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Enlisted Soft Aim",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. smooth soft aim settings for Windows PC.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@enlistedhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Nejlepší Enlisted hacky | Buyer Checklist",
					description: "Nejlepší Enlisted hacky: what to compare before buying Enlisted hacks. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Nejlepší Enlisted hacky",
					intro: "Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Nejlepší Enlisted hacky.",
					imageAlt: "Enlisted Hacks overview for Enlisted on PC",
					galleryTitle: "Nejlepší Enlisted hacky",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Koupit Enlisted Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Nejlepší Enlisted hacky",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. what to compare before buying Enlisted hacks.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@enlistedhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Enlisted aimbot hack | Soft Aim Assist",
					description: "Enlisted aimbot hack: undetected Aimbot hack assist for Enlisted. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Enlisted aimbot hack",
					intro: "Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Enlisted aimbot hack.",
					imageAlt: "Enlisted aimbot hack controls and bone priority",
					galleryTitle: "Enlisted aimbot hack",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Koupit Enlisted Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Enlisted aimbot hack",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. undetected Aimbot hack assist for Enlisted.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@enlistedhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Enlisted ESP hack | Boxes & Loot",
					description: "Enlisted ESP hack: ESP hack boxes, loot pins, and distance. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Enlisted ESP hack",
					intro: "Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Enlisted ESP hack.",
					imageAlt: "Enlisted ESP hack boxes and loot markers",
					galleryTitle: "Enlisted ESP hack",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Koupit Enlisted Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted ESP hack",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@enlistedhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Enlisted Unlock All | What It Means",
					description: "Enlisted Unlock All: unlock-all searches vs real ESP and Aimbot tools. okamžité digitální doručení. undetected — Windows PC.",
					h1: "Enlisted Unlock All",
					intro: "Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Enlisted Unlock All.",
					imageAlt: "Enlisted Hacks license features overview",
					galleryTitle: "Enlisted Unlock All",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Koupit Enlisted Hacks",
					ctaSecondary: "Zobrazit funkce",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted Unlock All",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "okamžité digitální doručení",
							paragraphs: [
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
								"support@enlistedhacks.net pro podporu a právní dotazy.",
							],
						},
					],
				},
				privacy: {
					title: "Zásady ochrany soukromí | Enlisted Hacks",
					description: "Zásady ochrany soukromí for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady ochrany soukromí",
					intro: "Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Zásady ochrany soukromí for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on enlistedhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@enlistedhacks.net pro podporu a právní dotazy.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Zásady vrácení peněz | Enlisted Hacks",
					description: "Zásady vrácení peněz for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Zásady vrácení peněz",
					intro: "Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Zásady vrácení peněz for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Po patchích Easy Anti-Cheat zkontrolujte Updates. Žádný cheat negarantuje trvalý undetected stav.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@enlistedhacks.net pro podporu a právní dotazy.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Podmínky použití | Enlisted Hacks",
					description: "Podmínky použití for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Podmínky použití",
					intro: "Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Podmínky použití for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licence s okamžité digitální doručení přes checkout Zadeyo. Plány $35/měs. a $150 lifetime včetně údržby Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Enlisted Hacks spojuje ESP wallhack, radar hack a enlisted aimbot jako undetected balíček pro Enlisted na Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@enlistedhacks.net pro podporu a právní dotazy.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
			},
		},
		ro: {
			ui: {
				nav: {
					home: "Acasă",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funcții",
					pricing: "Prețuri",
					setup: "Instalare",
					updates: "Actualizări",
					faq: "FAQ",
					buyNow: "Cumpără",
				},
				hero: {
					accent: "Cheats Enlisted undetected",
					accentShort: "Enlisted Hacks",
					subtitle: "ESP wallhack, radar hack și Aimbot pentru Enlisted pe PC Windows — mentenanță Easy Anti-Cheat inclusă.",
					subtitleShort: "ESP, radar și Aimbot pentru Enlisted PC",
					buyNow: "Cumpără acum",
					seeFeatures: "Vezi funcții",
				},
				trust: {
					status: "Online",
					statusNote: "Pachetul Enlisted Hacks este activ pentru Enlisted pe PC Windows.",
					statusShort: "Activ",
					delivery: "Livrare digitală instantă",
					platform: "Windows 10 și 11",
					antiCheat: "Mentenanță Easy Anti-Cheat suportată",
					antiCheatShort: "Easy Anti-Cheat suportat",
				},
				product: {
					title: "Enlisted Hacks",
					addToCart: "Adaugă în coș",
					monthly: "Lunar",
					lifetime: "Pe viață",
					available: "Disponibil acum",
					gameBadge: "Enlisted",
					platformBadge: "Windows PC",
					statusBadge: "Pachet undetected",
				},
				reviews: {
					title: "Ce spun jucătorii",
					subtitle: "Feedback recent de la cumpărătorii Enlisted Hacks",
					outOf: "din 5",
					countLabel: "recenzii",
				},
				common: {
					buyNow: "Cumpără acum",
					readGuide: "Citește ghidul",
					language: "Limbă",
					officialLanguageNote: "Engleza este limba oficială. Alte limbi sunt traduse pentru SEO global.",
					relatedPages: "Pagini related",
				},
				footer: {
					explore: "Explorează",
					help: "Ajutor și legal",
					tagline: "ESP, wallhack, radar și Aimbot undetected pentru Enlisted — checkout via Zadeyo.",
				},
				images: {
					hero: "Enlisted Hacks hero — ESP and aimbot overlay in Enlisted",
					espWallhack: "Wallhack outlines showing enemy soldiers and AI soldiers through walls",
					aimbotCombat: "Soft aim assist overlay during an Enlisted raid",
					squadFight: "Enlisted Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Enlisted raid",
					headerArt: "Aimbot view and bone priority controls for Enlisted",
					cheatsPackage: "2D radar threat overlay for Enlisted",
					rebootFight: "Aimbot assist during a Enlisted firefight",
					battleRoyale: "Enlisted Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Enlisted",
				},
			},
			pages: {
				home: {
					title: "Enlisted Hacks 2026 | ESP, Wallhack și Aimbot",
					description: "Cheats Enlisted undetected pentru Enlisted pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Easy Anti-Cheat. Livrare digitală",
					h1: "Enlisted Hacks — Undetected ESP, Wallhack și Aimbot",
					intro: "Pachet undetected Enlisted pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Easy Anti-Cheat.",
					imageAlt: "Enlisted ESP player tags hack",
					galleryTitle: "Galerie Enlisted Hacks — ESP, Aimbot, wallhack",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Cumpără Enlisted Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "De ce Enlisted Hacks în 2026",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Ideal pentru citirea squad-urilor inamice în BR și scav-run.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "ESP wallhack, radar și Aimbot într-o licență",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. O licență în loc de instrumente separate.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
					],
				},
				"enlisted-esp": {
					title: "ESP Enlisted | Player Boxes & Wallhack",
					description: "ESP Enlisted: player boxes, loot markers, and wallhack overlays. livrare digitală instantă. undetected — PC Windows.",
					h1: "ESP Enlisted",
					intro: "Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. ESP Enlisted.",
					imageAlt: "Enlisted ESP player boxes and distance readouts in a raid",
					galleryTitle: "ESP Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Cumpără Enlisted Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "ESP Enlisted",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. player boxes, loot markers, and wallhack overlays.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@enlistedhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"enlisted-aimbot": {
					title: "Aimbot Enlisted | Soft Aim Controls",
					description: "Aimbot Enlisted: soft aim, FOV, and per-weapon Aimbot profiles. livrare digitală instantă. undetected — PC Windows.",
					h1: "Aimbot Enlisted",
					intro: "Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Aimbot Enlisted.",
					imageAlt: "Enlisted aimbot and soft aim controls on Windows PC",
					galleryTitle: "Aimbot Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Cumpără Enlisted Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Aimbot Enlisted",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@enlistedhacks.net pentru suport și legal.",
							],
						},
					],
				},
				features: {
					title: "Funcții | Full Feature List",
					description: "Funcții: ESP, soft aim, radar controls. livrare digitală instantă. undetected — PC Windows.",
					h1: "Funcții",
					intro: "Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Funcții.",
					imageAlt: "Enlisted Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funcții",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără Enlisted Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funcții",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. ESP, soft aim, radar controls.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@enlistedhacks.net pentru suport și legal.",
							],
						},
					],
				},
				pricing: {
					title: "Prețuri | Monthly & Lifetime",
					description: "Prețuri: $35 monthly or $150 lifetime licenses. livrare digitală instantă. undetected — PC Windows.",
					h1: "Prețuri",
					intro: "Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Prețuri.",
					imageAlt: "Enlisted Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Prețuri",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Cumpără Enlisted Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Prețuri",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. $35 monthly or $150 lifetime licenses.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@enlistedhacks.net pentru suport și legal.",
							],
						},
					],
				},
				setup: {
					title: "Instalare | PC Setup Guide",
					description: "Instalare: Windows PC activation and first-launch setup. livrare digitală instantă. undetected — PC Windows.",
					h1: "Instalare",
					intro: "Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Instalare.",
					imageAlt: "Enlisted Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Instalare",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Cumpără Enlisted Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Instalare",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Windows PC activation and first-launch setup.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@enlistedhacks.net pentru suport și legal.",
							],
						},
					],
				},
				updates: {
					title: "Actualizări | Easy Anti-Cheat Maintenance Log",
					description: "Actualizări: Easy Anti-Cheat patch status and rebuild notes. livrare digitală instantă. undetected — PC Windows.",
					h1: "Actualizări",
					intro: "Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Actualizări.",
					imageAlt: "Enlisted Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Actualizări",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Cumpără Enlisted Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Actualizări",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Easy Anti-Cheat patch status and rebuild notes.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@enlistedhacks.net pentru suport și legal.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. livrare digitală instantă. undetected — PC Windows.",
					h1: "FAQ",
					intro: "Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. FAQ.",
					imageAlt: "Enlisted Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără Enlisted Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@enlistedhacks.net pentru suport și legal.",
							],
						},
					],
				},
				support: {
					title: "Suport | Help & Contact",
					description: "Suport: order help and license support contact. livrare digitală instantă. undetected — PC Windows.",
					h1: "Suport",
					intro: "Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Suport.",
					imageAlt: "Enlisted Hacks support page for license and setup help",
					galleryTitle: "Suport",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Cumpără Enlisted Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Suport",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. order help and license support contact.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@enlistedhacks.net pentru suport și legal.",
							],
						},
					],
				},
				undetected: {
					title: "Cheats undetected | Easy Anti-Cheat Safe Status",
					description: "Cheats undetected: undetected maintenance after Easy Anti-Cheat patches. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats undetected",
					intro: "Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Cheats undetected.",
					imageAlt: "Enlisted Hacks undetected status overview for Windows PC",
					galleryTitle: "Cheats undetected",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Cumpără Enlisted Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Cheats undetected",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. undetected maintenance after Easy Anti-Cheat patches.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@enlistedhacks.net pentru suport și legal.",
							],
						},
					],
				},
				wallhack: {
					title: "Wallhack Enlisted | ESP Visibility",
					description: "Wallhack Enlisted: wallhack ESP for players, loot, and distance. livrare digitală instantă. undetected — PC Windows.",
					h1: "Wallhack Enlisted",
					intro: "Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Wallhack Enlisted.",
					imageAlt: "Enlisted wallhack visibility through walls in a raid",
					galleryTitle: "Wallhack Enlisted",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Cumpără Enlisted Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Wallhack Enlisted",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. wallhack ESP for players, loot, and distance.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@enlistedhacks.net pentru suport și legal.",
							],
						},
					],
				},
				radar: {
					title: "Radar hack | 2D Threat Overlay",
					description: "Radar hack: 2D radar cues for flanks and rotations. livrare digitală instantă. undetected — PC Windows.",
					h1: "Radar hack",
					intro: "Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Radar hack.",
					imageAlt: "Enlisted 2D radar overlay showing nearby threats",
					galleryTitle: "Radar hack",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Cumpără Enlisted Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Radar hack",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. 2D radar cues for flanks and rotations.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@enlistedhacks.net pentru suport și legal.",
							],
						},
					],
				},
				eac: {
					title: "Bypass Easy Anti-Cheat | Patch Maintenance",
					description: "Bypass Easy Anti-Cheat: how Easy Anti-Cheat updates are handled for Enlisted hacks. livrare digitală instantă. undetected — PC Windows.",
					h1: "Bypass Easy Anti-Cheat",
					intro: "Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Bypass Easy Anti-Cheat.",
					imageAlt: "Enlisted Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Bypass Easy Anti-Cheat",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Cumpără Enlisted Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Bypass Easy Anti-Cheat",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. how Easy Anti-Cheat updates are handled for Enlisted hacks.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@enlistedhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Cheats Enlisted 2026 | Buyer Guide",
					description: "Cheats Enlisted 2026: 2026 Enlisted hacks checklist before checkout. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats Enlisted 2026",
					intro: "Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Cheats Enlisted 2026.",
					imageAlt: "Enlisted Hacks product overview for Enlisted",
					galleryTitle: "Cheats Enlisted 2026",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Cumpără Enlisted Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Cheats Enlisted 2026",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. 2026 Enlisted hacks checklist before checkout.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@enlistedhacks.net pentru suport și legal.",
							],
						},
					],
				},
				hacks: {
					title: "Cheats Enlisted | ESP Aimbot Guide",
					description: "Cheats Enlisted: the Enlisted hacks pillar for ESP and Aimbot. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cheats Enlisted",
					intro: "Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Cheats Enlisted.",
					imageAlt: "Enlisted Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Cheats Enlisted",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Cumpără Enlisted Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Cheats Enlisted",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. the Enlisted hacks pillar for ESP and Aimbot.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@enlistedhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Descărcare Enlisted Hacks | Instant Access",
					description: "Descărcare Enlisted Hacks: digital license download after payment. livrare digitală instantă. undetected — PC Windows.",
					h1: "Descărcare Enlisted Hacks",
					intro: "Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Descărcare Enlisted Hacks.",
					imageAlt: "Enlisted Hacks download and install delivery flow",
					galleryTitle: "Descărcare Enlisted Hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Cumpără Enlisted Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Descărcare Enlisted Hacks",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. digital license download after payment.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@enlistedhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Meniu mod Enlisted | In-Game Toggles",
					description: "Meniu mod Enlisted: in-client ESP and soft aim toggles. livrare digitală instantă. undetected — PC Windows.",
					h1: "Meniu mod Enlisted",
					intro: "Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Meniu mod Enlisted.",
					imageAlt: "Enlisted Hacks in-game menu controls",
					galleryTitle: "Meniu mod Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Cumpără Enlisted Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Meniu mod Enlisted",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. in-client ESP and soft aim toggles.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@enlistedhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Soft aim Enlisted | Smooth Aim Settings",
					description: "Soft aim Enlisted: smooth soft aim settings for Windows PC. livrare digitală instantă. undetected — PC Windows.",
					h1: "Soft aim Enlisted",
					intro: "Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Soft aim Enlisted.",
					imageAlt: "Enlisted soft aim FOV and smoothness settings",
					galleryTitle: "Soft aim Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără Enlisted Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Soft aim Enlisted",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. smooth soft aim settings for Windows PC.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@enlistedhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Cele mai bune cheats Enlisted | Buyer Checklist",
					description: "Cele mai bune cheats Enlisted: what to compare before buying Enlisted hacks. livrare digitală instantă. undetected — PC Windows.",
					h1: "Cele mai bune cheats Enlisted",
					intro: "Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Cele mai bune cheats Enlisted.",
					imageAlt: "Enlisted Hacks overview for Enlisted on PC",
					galleryTitle: "Cele mai bune cheats Enlisted",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Cumpără Enlisted Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Cele mai bune cheats Enlisted",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. what to compare before buying Enlisted hacks.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@enlistedhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Hack aimbot Enlisted | Soft Aim Assist",
					description: "Hack aimbot Enlisted: undetected Aimbot hack assist for Enlisted. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack aimbot Enlisted",
					intro: "Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Hack aimbot Enlisted.",
					imageAlt: "Enlisted aimbot hack controls and bone priority",
					galleryTitle: "Hack aimbot Enlisted",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Cumpără Enlisted Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Hack aimbot Enlisted",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. undetected Aimbot hack assist for Enlisted.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@enlistedhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Hack ESP Enlisted | Boxes & Loot",
					description: "Hack ESP Enlisted: ESP hack boxes, loot pins, and distance. livrare digitală instantă. undetected — PC Windows.",
					h1: "Hack ESP Enlisted",
					intro: "Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Hack ESP Enlisted.",
					imageAlt: "Enlisted ESP hack boxes and loot markers",
					galleryTitle: "Hack ESP Enlisted",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Cumpără Enlisted Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Hack ESP Enlisted",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. ESP hack boxes, loot pins, and distance.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@enlistedhacks.net pentru suport și legal.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Unlock all Enlisted | What It Means",
					description: "Unlock all Enlisted: unlock-all searches vs real ESP and Aimbot tools. livrare digitală instantă. undetected — PC Windows.",
					h1: "Unlock all Enlisted",
					intro: "Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Unlock all Enlisted.",
					imageAlt: "Enlisted Hacks license features overview",
					galleryTitle: "Unlock all Enlisted",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Cumpără Enlisted Hacks",
					ctaSecondary: "Vezi funcții",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Unlock all Enlisted",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. unlock-all searches vs real ESP and Aimbot tools.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "livrare digitală instantă",
							paragraphs: [
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
								"support@enlistedhacks.net pentru suport și legal.",
							],
						},
					],
				},
				privacy: {
					title: "Politica de confidențialitate | Enlisted Hacks",
					description: "Politica de confidențialitate for Enlisted Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de confidențialitate",
					intro: "Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Politica de confidențialitate for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on enlistedhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@enlistedhacks.net pentru suport și legal.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Politica de rambursare | Enlisted Hacks",
					description: "Politica de rambursare for Enlisted Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Politica de rambursare",
					intro: "Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Politica de rambursare for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Verificați Updates după patch-uri Easy Anti-Cheat. Niciun cheat nu garantează undetected permanent.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@enlistedhacks.net pentru suport și legal.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Termeni de utilizare | Enlisted Hacks",
					description: "Termeni de utilizare for Enlisted Hacks — ESP wallhack, Aimbot, PC Windows.",
					h1: "Termeni de utilizare",
					intro: "Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Termeni de utilizare for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Contact email, Zadeyo order references, and basic site security data.",
								"Licențe cu livrare digitală instantă via checkout Zadeyo. Planuri $35/lună și $150 pe viață includ mentenanță Easy Anti-Cheat.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Enlisted Hacks combină ESP wallhack, radar hack și enlisted aimbot undetected pentru Enlisted pe PC Windows. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@enlistedhacks.net pentru suport și legal.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
			},
		},
		sv: {
			ui: {
				nav: {
					home: "Hem",
					hacks: "Hacks",
					aimbot: "Aimbot",
					esp: "ESP",
					features: "Funktioner",
					pricing: "Priser",
					setup: "Installation",
					updates: "Uppdateringar",
					faq: "FAQ",
					buyNow: "Köp nu",
				},
				hero: {
					accent: "Undetected Enlisted hacks",
					accentShort: "Enlisted Hacks",
					subtitle: "ESP wallhack, radar hack och Aimbot för Enlisted på Windows PC — Easy Anti-Cheat-underhåll ingår.",
					subtitleShort: "ESP, radar & Aimbot för Enlisted PC",
					buyNow: "Köp nu",
					seeFeatures: "Se funktioner",
				},
				trust: {
					status: "Online",
					statusNote: "Enlisted Hacks-paketet är live för Enlisted på Windows PC.",
					statusShort: "Live",
					delivery: "Omedelbar digital leverans",
					platform: "Windows 10 & 11",
					antiCheat: "Easy Anti-Cheat-underhåll stöds",
					antiCheatShort: "Easy Anti-Cheat stöd",
				},
				product: {
					title: "Enlisted Hacks",
					addToCart: "Lägg i varukorg",
					monthly: "Månadsvis",
					lifetime: "Lifetime",
					available: "Tillgänglig nu",
					gameBadge: "Enlisted",
					platformBadge: "Windows PC",
					statusBadge: "Undetected paket",
				},
				reviews: {
					title: "Vad spelare säger",
					subtitle: "Senaste feedback från Enlisted Hacks-köpare",
					outOf: "av 5",
					countLabel: "recensioner",
				},
				common: {
					buyNow: "Köp nu",
					readGuide: "Läs guide",
					language: "Språk",
					officialLanguageNote: "Engelska är det officiella språket. Andra språk är översatta för global SEO.",
					relatedPages: "Relaterade sidor",
				},
				footer: {
					explore: "Utforska",
					help: "Hjälp & juridik",
					tagline: "Undetected ESP, wallhack, radar och Aimbot för Enlisted — checkout via Zadeyo.",
				},
				images: {
					hero: "Enlisted Hacks hero — ESP and aimbot overlay in Enlisted",
					espWallhack: "Wallhack outlines showing enemy soldiers and AI soldiers through walls",
					aimbotCombat: "Soft aim assist overlay during an Enlisted raid",
					squadFight: "Enlisted Hacks combat overlay during a squad fight",
					playerEsp: "Player ESP boxes and distance readouts in a Enlisted raid",
					headerArt: "Aimbot view and bone priority controls for Enlisted",
					cheatsPackage: "2D radar threat overlay for Enlisted",
					rebootFight: "Aimbot assist during a Enlisted firefight",
					battleRoyale: "Enlisted Hacks in-raid overview for Windows PC",
					battleRoyaleIsland: "ESP markers for loot and extracts in Enlisted",
				},
			},
			pages: {
				home: {
					title: "Enlisted Hacks 2026 | ESP, Wallhack & Aimbot",
					description: "Undetected Enlisted hacks för Enlisted på PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat-underhåll. Omedelbar digital leverans.",
					h1: "Enlisted Hacks — Undetected ESP, Wallhack & Aimbot",
					intro: "Undetected paket för Enlisted på Windows PC: ESP wallhack, radar, Aimbot med Easy Anti-Cheat-underhåll.",
					imageAlt: "Enlisted ESP player tags hack",
					galleryTitle: "Enlisted Hacks galleri — ESP, Aimbot, wallhack",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Köp Enlisted Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Varför Enlisted Hacks 2026",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Ideal för att läsa fiendesquads i BR och scav-run.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "ESP wallhack, radar och Aimbot i en licens",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. En licens istället för separata verktyg.",
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
					],
				},
				"enlisted-esp": {
					title: "Enlisted ESP | Player Boxes & Wallhack",
					description: "Enlisted ESP: player boxes, loot markers, and wallhack overlays. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Enlisted ESP",
					intro: "Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Enlisted ESP.",
					imageAlt: "Enlisted ESP player boxes and distance readouts in a raid",
					galleryTitle: "Enlisted ESP",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Köp Enlisted Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Enlisted ESP",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. player boxes, loot markers, and wallhack overlays.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@enlistedhacks.net för support och juridik.",
							],
						},
					],
				},
				"enlisted-aimbot": {
					title: "Enlisted Aimbot | Soft Aim Controls",
					description: "Enlisted Aimbot: soft aim, FOV, and per-weapon Aimbot profiles. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Enlisted Aimbot",
					intro: "Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Enlisted Aimbot.",
					imageAlt: "Enlisted aimbot and soft aim controls on Windows PC",
					galleryTitle: "Enlisted Aimbot",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Köp Enlisted Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted Aimbot",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. soft aim, FOV, and per-weapon Aimbot profiles.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@enlistedhacks.net för support och juridik.",
							],
						},
					],
				},
				features: {
					title: "Funktioner | Full Feature List",
					description: "Funktioner: ESP, soft aim, radar controls. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Funktioner",
					intro: "Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Funktioner.",
					imageAlt: "Enlisted Hacks features — ESP, soft aim, and radar screenshots",
					galleryTitle: "Funktioner",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Köp Enlisted Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Funktioner",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. ESP, soft aim, radar controls.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@enlistedhacks.net för support och juridik.",
							],
						},
					],
				},
				pricing: {
					title: "Priser | Monthly & Lifetime",
					description: "Priser: $35 monthly or $150 lifetime licenses. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Priser",
					intro: "Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Priser.",
					imageAlt: "Enlisted Hacks store plans for monthly and lifetime licenses",
					galleryTitle: "Priser",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Köp Enlisted Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Priser",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. $35 monthly or $150 lifetime licenses.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@enlistedhacks.net för support och juridik.",
							],
						},
					],
				},
				setup: {
					title: "Installation | PC Setup Guide",
					description: "Installation: Windows PC activation and first-launch setup. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Installation",
					intro: "Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Installation.",
					imageAlt: "Enlisted Hacks setup guide screenshot for Windows PC",
					galleryTitle: "Installation",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Köp Enlisted Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "Installation",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Windows PC activation and first-launch setup.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@enlistedhacks.net för support och juridik.",
							],
						},
					],
				},
				updates: {
					title: "Uppdateringar | Easy Anti-Cheat Maintenance Log",
					description: "Uppdateringar: Easy Anti-Cheat patch status and rebuild notes. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Uppdateringar",
					intro: "Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Uppdateringar.",
					imageAlt: "Enlisted Hacks live status after Easy Anti-Cheat and game patches",
					galleryTitle: "Uppdateringar",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Köp Enlisted Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Uppdateringar",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Easy Anti-Cheat patch status and rebuild notes.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@enlistedhacks.net för support och juridik.",
							],
						},
					],
				},
				faq: {
					title: "FAQ | Common Answers",
					description: "FAQ: ESP, soft aim, delivery, and Easy Anti-Cheat questions. omedelbar digital leverans. undetected — Windows PC.",
					h1: "FAQ",
					intro: "Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. FAQ.",
					imageAlt: "Enlisted Hacks FAQ — delivery, setup, and update answers",
					galleryTitle: "FAQ",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Köp Enlisted Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/support/",
					sections: [
						{
							h2: "FAQ",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. ESP, soft aim, delivery, and Easy Anti-Cheat questions.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@enlistedhacks.net för support och juridik.",
							],
						},
					],
				},
				support: {
					title: "Support | Help & Contact",
					description: "Support: order help and license support contact. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Support",
					intro: "Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Support.",
					imageAlt: "Enlisted Hacks support page for license and setup help",
					galleryTitle: "Support",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Köp Enlisted Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Support",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. order help and license support contact.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@enlistedhacks.net för support och juridik.",
							],
						},
					],
				},
				undetected: {
					title: "Undetected cheats | Easy Anti-Cheat Safe Status",
					description: "Undetected cheats: undetected maintenance after Easy Anti-Cheat patches. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Undetected cheats",
					intro: "Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Undetected cheats.",
					imageAlt: "Enlisted Hacks undetected status overview for Windows PC",
					galleryTitle: "Undetected cheats",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Köp Enlisted Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Undetected cheats",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. undetected maintenance after Easy Anti-Cheat patches.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@enlistedhacks.net för support och juridik.",
							],
						},
					],
				},
				wallhack: {
					title: "Enlisted Wallhack | ESP Visibility",
					description: "Enlisted Wallhack: wallhack ESP for players, loot, and distance. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Enlisted Wallhack",
					intro: "Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Enlisted Wallhack.",
					imageAlt: "Enlisted wallhack visibility through walls in a raid",
					galleryTitle: "Enlisted Wallhack",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Köp Enlisted Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted Wallhack",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. wallhack ESP for players, loot, and distance.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@enlistedhacks.net för support och juridik.",
							],
						},
					],
				},
				radar: {
					title: "Radar Hack | 2D Threat Overlay",
					description: "Radar Hack: 2D radar cues for flanks and rotations. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Radar Hack",
					intro: "Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Radar Hack.",
					imageAlt: "Enlisted 2D radar overlay showing nearby threats",
					galleryTitle: "Radar Hack",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Köp Enlisted Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Radar Hack",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. 2D radar cues for flanks and rotations.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@enlistedhacks.net för support och juridik.",
							],
						},
					],
				},
				eac: {
					title: "Easy Anti-Cheat Bypass | Patch Maintenance",
					description: "Easy Anti-Cheat Bypass: how Easy Anti-Cheat updates are handled for Enlisted hacks. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Easy Anti-Cheat Bypass",
					intro: "Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Easy Anti-Cheat Bypass.",
					imageAlt: "Enlisted Hacks maintenance after a Easy Anti-Cheat patch",
					galleryTitle: "Easy Anti-Cheat Bypass",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Köp Enlisted Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/updates/",
					sections: [
						{
							h2: "Easy Anti-Cheat Bypass",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. how Easy Anti-Cheat updates are handled for Enlisted hacks.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@enlistedhacks.net för support och juridik.",
							],
						},
					],
				},
				"cheats-2026": {
					title: "Enlisted Hacks 2026 | Buyer Guide",
					description: "Enlisted Hacks 2026: 2026 Enlisted hacks checklist before checkout. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Enlisted Hacks 2026",
					intro: "Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Enlisted Hacks 2026.",
					imageAlt: "Enlisted Hacks product overview for Enlisted",
					galleryTitle: "Enlisted Hacks 2026",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Köp Enlisted Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/enlisted-hacks/",
					sections: [
						{
							h2: "Enlisted Hacks 2026",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. 2026 Enlisted hacks checklist before checkout.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@enlistedhacks.net för support och juridik.",
							],
						},
					],
				},
				hacks: {
					title: "Enlisted Hacks | ESP Aimbot Guide",
					description: "Enlisted Hacks: the Enlisted hacks pillar for ESP and Aimbot. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Enlisted Hacks",
					intro: "Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Enlisted Hacks.",
					imageAlt: "Enlisted Hacks product page — ESP, aimbot, and radar",
					galleryTitle: "Enlisted Hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Köp Enlisted Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted Hacks",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. the Enlisted hacks pillar for ESP and Aimbot.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@enlistedhacks.net för support och juridik.",
							],
						},
					],
				},
				"cheat-download": {
					title: "Enlisted Cheat Download | Instant Access",
					description: "Enlisted Cheat Download: digital license download after payment. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Enlisted Cheat Download",
					intro: "Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Enlisted Cheat Download.",
					imageAlt: "Enlisted Hacks download and install delivery flow",
					galleryTitle: "Enlisted Cheat Download",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Köp Enlisted Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/setup/",
					sections: [
						{
							h2: "Enlisted Cheat Download",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. digital license download after payment.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@enlistedhacks.net för support och juridik.",
							],
						},
					],
				},
				"mod-menu": {
					title: "Enlisted Mod-meny | In-Game Toggles",
					description: "Enlisted Mod-meny: in-client ESP and soft aim toggles. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Enlisted Mod-meny",
					intro: "Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Enlisted Mod-meny.",
					imageAlt: "Enlisted Hacks in-game menu controls",
					galleryTitle: "Enlisted Mod-meny",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Köp Enlisted Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted Mod-meny",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. in-client ESP and soft aim toggles.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@enlistedhacks.net för support och juridik.",
							],
						},
					],
				},
				"soft-aim": {
					title: "Enlisted Soft Aim | Smooth Aim Settings",
					description: "Enlisted Soft Aim: smooth soft aim settings for Windows PC. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Enlisted Soft Aim",
					intro: "Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Enlisted Soft Aim.",
					imageAlt: "Enlisted soft aim FOV and smoothness settings",
					galleryTitle: "Enlisted Soft Aim",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Köp Enlisted Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Enlisted Soft Aim",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. smooth soft aim settings for Windows PC.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@enlistedhacks.net för support och juridik.",
							],
						},
					],
				},
				"best-cheats": {
					title: "Bästa Enlisted Hacks | Buyer Checklist",
					description: "Bästa Enlisted Hacks: what to compare before buying Enlisted hacks. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Bästa Enlisted Hacks",
					intro: "Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Bästa Enlisted Hacks.",
					imageAlt: "Enlisted Hacks overview for Enlisted on PC",
					galleryTitle: "Bästa Enlisted Hacks",
					heroImage: "/images/enlisted-hacks-esp.webp",
					ctaPrimary: "Köp Enlisted Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/pricing/",
					sections: [
						{
							h2: "Bästa Enlisted Hacks",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. what to compare before buying Enlisted hacks.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@enlistedhacks.net för support och juridik.",
							],
						},
					],
				},
				"aimbot-hack": {
					title: "Enlisted Aimbot Hack | Soft Aim Assist",
					description: "Enlisted Aimbot Hack: undetected Aimbot hack assist for Enlisted. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Enlisted Aimbot Hack",
					intro: "Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Enlisted Aimbot Hack.",
					imageAlt: "Enlisted aimbot hack controls and bone priority",
					galleryTitle: "Enlisted Aimbot Hack",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Köp Enlisted Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/enlisted-aimbot/",
					sections: [
						{
							h2: "Enlisted Aimbot Hack",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. undetected Aimbot hack assist for Enlisted.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@enlistedhacks.net för support och juridik.",
							],
						},
					],
				},
				"esp-hack": {
					title: "Enlisted ESP Hack | Boxes & Loot",
					description: "Enlisted ESP Hack: ESP hack boxes, loot pins, and distance. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Enlisted ESP Hack",
					intro: "Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Enlisted ESP Hack.",
					imageAlt: "Enlisted ESP hack boxes and loot markers",
					galleryTitle: "Enlisted ESP Hack",
					heroImage: "/images/enlisted-hacks-wallhack.webp",
					ctaPrimary: "Köp Enlisted Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/enlisted-esp/",
					sections: [
						{
							h2: "Enlisted ESP Hack",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. ESP hack boxes, loot pins, and distance.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@enlistedhacks.net för support och juridik.",
							],
						},
					],
				},
				"unlock-all": {
					title: "Enlisted Unlock All | What It Means",
					description: "Enlisted Unlock All: unlock-all searches vs real ESP and Aimbot tools. omedelbar digital leverans. undetected — Windows PC.",
					h1: "Enlisted Unlock All",
					intro: "Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Enlisted Unlock All.",
					imageAlt: "Enlisted Hacks license features overview",
					galleryTitle: "Enlisted Unlock All",
					heroImage: "/images/enlisted-hacks-radar.webp",
					ctaPrimary: "Köp Enlisted Hacks",
					ctaSecondary: "Se funktioner",
					ctaSecondaryHref: "/features/",
					sections: [
						{
							h2: "Enlisted Unlock All",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. unlock-all searches vs real ESP and Aimbot tools.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "undetected",
							paragraphs: [
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "omedelbar digital leverans",
							paragraphs: [
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
								"support@enlistedhacks.net för support och juridik.",
							],
						},
					],
				},
				privacy: {
					title: "Integritetspolicy | Enlisted Hacks",
					description: "Integritetspolicy for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Integritetspolicy",
					intro: "Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Integritetspolicy for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read terms",
					ctaSecondaryHref: "/terms/",
					sections: [
						{
							h2: "Information we collect",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Payment details are processed by Zadeyo checkout — not stored on enlistedhacks.net.",
							],
						},
						{
							h2: "How we use data",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "Your rights",
							paragraphs: [
								"support@enlistedhacks.net för support och juridik.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				refund: {
					title: "Återbetalningspolicy | Enlisted Hacks",
					description: "Återbetalningspolicy for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Återbetalningspolicy",
					intro: "Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Återbetalningspolicy for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-raid.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Digital delivery",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "Refund approval",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Kontrollera Updates efter Easy Anti-Cheat-patchar. Ingen cheat garanterar permanent undetected status.",
							],
						},
						{
							h2: "How to request",
							paragraphs: [
								"support@enlistedhacks.net för support och juridik.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
				terms: {
					title: "Användarvillkor | Enlisted Hacks",
					description: "Användarvillkor for Enlisted Hacks — ESP wallhack, Aimbot, Windows PC.",
					h1: "Användarvillkor",
					intro: "Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Användarvillkor for enlistedhacks.net and Enlisted licenses.",
					imageAlt: "enlisted hacks",
					galleryTitle: "enlisted hacks",
					heroImage: "/images/enlisted-hacks-aimbot-view.webp",
					ctaPrimary: "Email support",
					ctaSecondary: "Read privacy",
					ctaSecondaryHref: "/privacy-policy/",
					sections: [
						{
							h2: "Acceptance of terms",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Contact email, Zadeyo order references, and basic site security data.",
								"Licenser med omedelbar digital leverans via Zadeyo checkout. $35/mån och $150 lifetime inkl. Easy Anti-Cheat-underhåll.",
							],
						},
						{
							h2: "Risk disclaimer",
							paragraphs: [
								"Enlisted Hacks kombinerar ESP wallhack, radar hack och enlisted aimbot som undetected paket för Enlisted på Windows PC. Support responses, order resolution, and legal compliance when required.",
								"Using cheats may violate Epic Games terms — you assume all ban risk.",
							],
						},
						{
							h2: "Policy changes",
							paragraphs: [
								"support@enlistedhacks.net för support och juridik.",
								"Email: support@enlistedhacks.net",
							],
						},
					],
				},
			},
		},
	};
