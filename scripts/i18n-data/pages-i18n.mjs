import { HERO_IMAGES, clampTitle, clampDesc, section, stripZadeyoFromMeta } from './constants.mjs';
import { phrases } from './phrases.mjs';
import { PAGE_IMAGE_ALTS } from './image-alts.mjs';

/** Page-specific translated meta for home across locales. */
const PAGE_META_HOME = {
	es: { title: 'Enlisted Hacks 2026 | ESP, Wallhack y Aimbot', desc: 'Trucos Enlisted indetectables para Enlisted en PC. ESP wallhack, radar hack y Aimbot con mantenimiento Easy Anti-Cheat. Entrega digital instantánea.', h1: 'Enlisted Hacks — ESP, Wallhack y Aimbot indetectables', intro: 'Paquete undetected para Enlisted en Windows PC: ESP wallhack, radar y Aimbot con mantenimiento Easy Anti-Cheat tras cada parche.', imageAlt: 'Enlisted ESP player tags hack', gallery: 'Galería Enlisted Hacks — ESP, Aimbot y wallhack', cta2: 'Ver funciones', h2a: 'Por qué eligen Enlisted Hacks en 2026', h2b: 'ESP wallhack, radar y Aimbot en una licencia', topicA: 'Ideal para leer escuadrones enemigos en BR y scav-run.', topicB: 'Una licencia en lugar de herramientas separadas.' },
	fr: { title: 'Enlisted Hacks 2026 | ESP, Wallhack et Aimbot', desc: 'Triches Enlisted indétectables pour Enlisted sur PC. ESP wallhack, radar hack et Aimbot avec maintenance Easy Anti-Cheat. Livraison numérique instantanée.', h1: 'Enlisted Hacks — ESP, Wallhack et Aimbot indétectables', intro: 'Pack undetected pour Enlisted sur PC Windows : ESP wallhack, radar et Aimbot avec maintenance Easy Anti-Cheat après chaque patch.', imageAlt: 'Enlisted ESP player tags hack', gallery: 'Galerie Enlisted Hacks — ESP, Aimbot et wallhack', cta2: 'Voir les fonctions', h2a: 'Pourquoi choisir Enlisted Hacks en 2026', h2b: 'ESP wallhack, radar et Aimbot en une licence', topicA: 'Parfait pour lire les escouades ennemies en BR et scav-run.', topicB: 'Une licence au lieu d\'outils séparés.' },
	de: { title: 'Enlisted Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Enlisted Hacks für Enlisted auf PC. ESP Wallhack, Radar Hack und Aimbot mit Easy Anti-Cheat-Wartung. Sofortige digitale Lieferung.', h1: 'Enlisted Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC Paket für Enlisted: ESP Wallhack, Radar und Aimbot mit Easy Anti-Cheat-Wartung nach jedem Patch.', imageAlt: 'Enlisted ESP player tags hack', gallery: 'Enlisted Hacks Galerie — ESP, Aimbot und Wallhack', cta2: 'Features ansehen', h2a: 'Warum Enlisted Hacks 2026 führt', h2b: 'ESP Wallhack, Radar und Aimbot in einer Lizenz', topicA: 'Ideal um feindliche Squads in BR und scav-run zu lesen.', topicB: 'Eine Lizenz statt separater Tools.' },
	pt: { title: 'Enlisted Hacks 2026 | ESP, Wallhack e Aimbot', desc: 'Cheats Enlisted indetectáveis para Enlisted no PC. ESP wallhack, radar hack e Aimbot com manutenção Easy Anti-Cheat. Entrega digital instantánea.', h1: 'Enlisted Hacks — ESP, Wallhack e Aimbot indetectáveis', intro: 'Pacote undetected para Enlisted no Windows PC: ESP wallhack, radar e Aimbot com manutenção Easy Anti-Cheat após cada patch.', imageAlt: 'Enlisted ESP player tags hack', gallery: 'Galeria Enlisted Hacks — ESP, Aimbot e wallhack', cta2: 'Ver recursos', h2a: 'Por que escolher Enlisted Hacks em 2026', h2b: 'ESP wallhack, radar e Aimbot numa licença', topicA: 'Ideal para ler esquadrões inimigos em BR e scav-run.', topicB: 'Uma licença em vez de ferramentas separadas.' },
	it: { title: 'Enlisted Hacks 2026 | ESP, Wallhack e Aimbot', desc: 'Cheat Enlisted indetectable per Enlisted su PC. ESP wallhack, radar hack e Aimbot con manutenzione Easy Anti-Cheat. Consegna digitale istantanea.', h1: 'Enlisted Hacks — ESP, Wallhack e Aimbot indetectable', intro: 'Pacchetto undetected per Enlisted su PC Windows: ESP wallhack, radar e Aimbot con manutenzione Easy Anti-Cheat dopo ogni patch.', imageAlt: 'Enlisted ESP player tags hack', gallery: 'Galleria Enlisted Hacks — ESP, Aimbot e wallhack', cta2: 'Vedi funzioni', h2a: 'Perché scegliere Enlisted Hacks nel 2026', h2b: 'ESP wallhack, radar e Aimbot in una licenza', topicA: 'Ideale per leggere squadre nemiche in BR e scav-run.', topicB: 'Una licenza invece di tool separati.' },
	nl: { title: 'Enlisted Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Enlisted hacks voor Enlisted op PC. ESP wallhack, radar hack en Aimbot met Easy Anti-Cheat-onderhoud. Directe digitale levering.', h1: 'Enlisted Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected Windows PC pakket voor Enlisted: ESP wallhack, radar en Aimbot met Easy Anti-Cheat-onderhoud na elke patch.', imageAlt: 'Enlisted ESP player tags hack', gallery: 'Enlisted Hacks galerij — ESP, Aimbot en wallhack', cta2: 'Bekijk functies', h2a: 'Waarom Enlisted Hacks in 2026', h2b: 'ESP wallhack, radar en Aimbot in één licentie', topicA: 'Ideaal om vijandelijke squads te lezen in BR en scav-run.', topicB: 'Eén licentie in plaats van losse tools.' },
	pl: { title: 'Enlisted Hacks 2026 | ESP, Wallhack i Aimbot', desc: 'Undetected cheaty Enlisted dla Enlisted na PC. ESP wallhack, radar hack i Aimbot z konserwacją Easy Anti-Cheat. Natychmiastowa dostawa cyfrowa.', h1: 'Enlisted Hacks — Undetected ESP, Wallhack i Aimbot', intro: 'Pakiet undetected dla Enlisted na Windows PC: ESP wallhack, radar i Aimbot z konserwacją Easy Anti-Cheat po każdym patchu.', imageAlt: 'Enlisted ESP player tags hack', gallery: 'Galeria Enlisted Hacks — ESP, Aimbot i wallhack', cta2: 'Zobacz funkcje', h2a: 'Dlaczego Enlisted Hacks w 2026', h2b: 'ESP wallhack, radar i Aimbot w jednej licencji', topicA: 'Idealny do czytania wrogich squadów w BR i scav-run.', topicB: 'Jedna licencja zamiast osobnych narzędzi.' },
	ru: { title: 'Enlisted Hacks 2026 | ESP, Wallhack и Aimbot', desc: 'Undetected читы Enlisted для Enlisted на PC. ESP wallhack, radar hack и Aimbot с обслуживанием Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'Enlisted Hacks — Undetected ESP, Wallhack и Aimbot', intro: 'Undetected пакет для Enlisted на Windows PC: ESP wallhack, radar и Aimbot с обслуживанием Easy Anti-Cheat после патчей.', imageAlt: 'Enlisted ESP player tags hack', gallery: 'Галерея Enlisted Hacks — ESP, Aimbot и wallhack', cta2: 'Смотреть функции', h2a: 'Почему выбирают Enlisted Hacks в 2026', h2b: 'ESP wallhack, radar и Aimbot в одной лицензии', topicA: 'Идеально для чтения вражеских отрядов в BR и scav-run.', topicB: 'Одна лицензия вместо отдельных инструментов.' },
	tr: { title: 'Enlisted Hacks 2026 | ESP, Wallhack ve Aimbot', desc: 'Enlisted için undetected hileler. ESP wallhack, radar hack ve Aimbot — Easy Anti-Cheat bakımı. Anında dijital teslimat.', h1: 'Enlisted Hacks — Undetected ESP, Wallhack ve Aimbot', intro: 'Enlisted Windows PC undetected paketi: ESP wallhack, radar ve Aimbot — Easy Anti-Cheat bakımı dahil.', imageAlt: 'Enlisted ESP player tags hack', gallery: 'Enlisted Hacks galeri — ESP, Aimbot ve wallhack', cta2: 'Özellikleri gör', h2a: '2026\'da neden Enlisted Hacks', h2b: 'ESP wallhack, radar ve Aimbot tek lisans', topicA: 'BR ve scav-run\'da düşman squad okumak için ideal.', topicB: 'Ayrı araçlar yerine tek lisans.' },
	ar: { title: 'Enlisted Hacks 2026 | ESP وWallhack وAimbot', desc: 'غش Enlisted undetected لـ Enlisted على PC. ESP wallhack ورadar hack وAimbot مع صيانة Easy Anti-Cheat. تسليم رقمي فوري.', h1: 'Enlisted Hacks — ESP وWallhack وAimbot غير مكتشف', intro: 'حزمة undetected لـ Enlisted على Windows PC: ESP wallhack ورadar وAimbot مع صيانة Easy Anti-Cheat.', imageAlt: 'Enlisted ESP player tags hack', gallery: 'معرض Enlisted Hacks — ESP وAimbot وwallhack', cta2: 'عرض الميزات', h2a: 'لماذا Enlisted Hacks في 2026', h2b: 'ESP wallhack ورadar وAimbot في ترخيص واحد', topicA: 'مثالي لقراءة فرق العدو في BR وscav-run.', topicB: 'ترخيص واحد بدلاً من أدوات منفصلة.' },
	ja: { title: 'Enlisted Hacks 2026 | ESP・Wallhack・Aimbot', desc: 'Enlisted向けundetectedチート。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheatメンテナンス。即時デジタル配信。', h1: 'Enlisted Hacks — Undetected ESP・Wallhack・Aimbot', intro: 'Enlisted Windows PC向けundetectedパッケージ：ESP wallhack、radar、Aimbot、Easy Anti-Cheatメンテナンス付き。', imageAlt: 'Enlisted hacks hero ESP aimbot wallhack', gallery: 'Enlisted Hacksギャラリー — ESP、Aimbot、wallhack', cta2: '機能を見る', h2a: '2026年にEnlisted Hacksを選ぶ理由', h2b: 'ESP wallhack、radar、Aimbotが1ライセンス', topicA: 'BRとscav-runで敵スクワッドを読むのに最適。', topicB: '別ツールではなく1ライセンス。' },
	ko: { title: 'Enlisted Hacks 2026 | ESP, Wallhack, Aimbot', desc: 'Enlisted undetected 치트. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat 유지보수. 즉시 디지털 배송.', h1: 'Enlisted Hacks — Undetected ESP, Wallhack, Aimbot', intro: 'Enlisted Windows PC undetected 패키지: ESP wallhack, radar, Aimbot, Easy Anti-Cheat 유지보수 포함.', imageAlt: 'Enlisted hacks hero ESP aimbot wallhack', gallery: 'Enlisted Hacks 갤러리 — ESP, Aimbot, wallhack', cta2: '기능 보기', h2a: '2026년 Enlisted Hacks를 선택하는 이유', h2b: 'ESP wallhack, radar, Aimbot 단일 라이선스', topicA: 'BR 및 scav-run에서 적 분대 읽기에 이상적.', topicB: '별도 도구 대신 단일 라이선스.' },
	zh: { title: 'Enlisted Hacks 2026 | ESP、Wallhack、Aimbot', desc: 'Enlisted undetected作弊。ESP wallhack、radar hack、Aimbot、Easy Anti-Cheat维护。即时数字交付。', h1: 'Enlisted Hacks — Undetected ESP、Wallhack、Aimbot', intro: 'Enlisted Windows PC undetected套餐：ESP wallhack、radar、Aimbot，含Easy Anti-Cheat维护。', imageAlt: 'Enlisted hacks hero ESP aimbot wallhack', gallery: 'Enlisted Hacks图库 — ESP、Aimbot、wallhack', cta2: '查看功能', h2a: '2026年选择Enlisted Hacks的原因', h2b: 'ESP wallhack、radar、Aimbot单一许可证', topicA: '适合在BR和scav-run中读取敌方小队。', topicB: '一个许可证而非多个工具。' },
	hi: { title: 'Enlisted Hacks 2026 | ESP, Wallhack और Aimbot', desc: 'Enlisted undetected cheats. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. Instant digital delivery.', h1: 'Enlisted Hacks — Undetected ESP, Wallhack और Aimbot', intro: 'Enlisted Windows PC undetected पैकेज: ESP wallhack, radar, Aimbot, Easy Anti-Cheat maintenance सहित.', imageAlt: 'Enlisted hacks hero ESP aimbot wallhack', gallery: 'Enlisted Hacks gallery — ESP, Aimbot, wallhack', cta2: 'फ़ीचर्स देखें', h2a: '2026 में Enlisted Hacks क्यों', h2b: 'ESP wallhack, radar, Aimbot एक लाइसेंस में', topicA: 'BR और scav-run में दुश्मन squad पढ़ने के लिए आदर्श.', topicB: 'अलग टूल्स के बजाय एक लाइसेंस.' },
	id: { title: 'Enlisted Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Enlisted undetected untuk Enlisted di PC. ESP wallhack, radar hack, Aimbot, pemeliharaan Easy Anti-Cheat. Pengiriman digital instan.', h1: 'Enlisted Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Paket undetected Enlisted di Windows PC: ESP wallhack, radar, Aimbot dengan pemeliharaan Easy Anti-Cheat.', imageAlt: 'Enlisted ESP player tags hack', gallery: 'Galeri Enlisted Hacks — ESP, Aimbot, wallhack', cta2: 'Lihat fitur', h2a: 'Mengapa Enlisted Hacks di 2026', h2b: 'ESP wallhack, radar, Aimbot dalam satu lisensi', topicA: 'Ideal membaca squad musuh di BR dan scav-run.', topicB: 'Satu lisensi alih-alih alat terpisah.' },
	th: { title: 'Enlisted Hacks 2026 | ESP, Wallhack และ Aimbot', desc: 'Cheat Enlisted undetected สำหรับ Enlisted บน PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat maintenance. จัดส่งดิจิทัลทันที.', h1: 'Enlisted Hacks — Undetected ESP, Wallhack และ Aimbot', intro: 'แพ็ก undetected สำหรับ Enlisted บน Windows PC: ESP wallhack, radar, Aimbot พร้อม Easy Anti-Cheat maintenance', imageAlt: 'Enlisted ESP player tags hack', gallery: 'แกลเลอรี Enlisted Hacks — ESP, Aimbot, wallhack', cta2: 'ดูฟีเจอร์', h2a: 'ทำไมเลือก Enlisted Hacks ปี 2026', h2b: 'ESP wallhack, radar, Aimbot ในใบอนุญาตเดียว', topicA: 'เหมาะสำหรับอ่าน squad ศัตรูใน BR และ scav-run', topicB: 'ใบอนุญาตเดียวแทนเครื่องมือแยก' },
	vi: { title: 'Enlisted Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Cheat Enlisted undetected cho Enlisted trên PC. ESP wallhack, radar hack, Aimbot, bảo trì Easy Anti-Cheat. Giao hàng kỹ thuật số tức thì.', h1: 'Enlisted Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Gói undetected Enlisted trên Windows PC: ESP wallhack, radar, Aimbot với bảo trì Easy Anti-Cheat.', imageAlt: 'Enlisted ESP player tags hack', gallery: 'Thư viện Enlisted Hacks — ESP, Aimbot, wallhack', cta2: 'Xem tính năng', h2a: 'Vì sao chọn Enlisted Hacks 2026', h2b: 'ESP wallhack, radar, Aimbot trong một giấy phép', topicA: 'Lý tưởng đọc squad địch trong BR và scav-run.', topicB: 'Một giấy phép thay vì công cụ riêng.' },
	uk: { title: 'Enlisted Hacks 2026 | ESP, Wallhack і Aimbot', desc: 'Undetected чіти Enlisted для Enlisted на PC. ESP wallhack, radar hack, Aimbot, обслуговування Easy Anti-Cheat. Мгновенная цифровая доставка.', h1: 'Enlisted Hacks — Undetected ESP, Wallhack і Aimbot', intro: 'Undetected пакет для Enlisted на Windows PC: ESP wallhack, radar, Aimbot з обслуговуванням Easy Anti-Cheat.', imageAlt: 'Enlisted ESP player tags hack', gallery: 'Галерея Enlisted Hacks — ESP, Aimbot, wallhack', cta2: 'Дивитися функції', h2a: 'Чому Enlisted Hacks у 2026', h2b: 'ESP wallhack, radar і Aimbot в одній ліцензії', topicA: 'Ідеально для читання ворожих загонів у BR і scav-run.', topicB: 'Одна ліцензія замість окремих інструментів.' },
	cs: { title: 'Enlisted Hacks 2026 | ESP, Wallhack a Aimbot', desc: 'Undetected Enlisted hacky pro Enlisted na PC. ESP wallhack, radar hack, Aimbot, údržba Easy Anti-Cheat. Okamžité digitální doručení.', h1: 'Enlisted Hacks — Undetected ESP, Wallhack a Aimbot', intro: 'Undetected balíček pro Enlisted na Windows PC: ESP wallhack, radar, Aimbot s údržbou Easy Anti-Cheat.', imageAlt: 'Enlisted ESP player tags hack', gallery: 'Galerie Enlisted Hacks — ESP, Aimbot, wallhack', cta2: 'Zobrazit funkce', h2a: 'Proč Enlisted Hacks v roce 2026', h2b: 'ESP wallhack, radar a Aimbot v jedné licenci', topicA: 'Ideální pro čtení nepřátelských squadů v BR a scav-run.', topicB: 'Jedna licence místo samostatných nástrojů.' },
	ro: { title: 'Enlisted Hacks 2026 | ESP, Wallhack și Aimbot', desc: 'Cheats Enlisted undetected pentru Enlisted pe PC. ESP wallhack, radar hack, Aimbot, mentenanță Easy Anti-Cheat. Livrare digitală instantă.', h1: 'Enlisted Hacks — Undetected ESP, Wallhack și Aimbot', intro: 'Pachet undetected Enlisted pe Windows PC: ESP wallhack, radar, Aimbot cu mentenanță Easy Anti-Cheat.', imageAlt: 'Enlisted ESP player tags hack', gallery: 'Galerie Enlisted Hacks — ESP, Aimbot, wallhack', cta2: 'Vezi funcții', h2a: 'De ce Enlisted Hacks în 2026', h2b: 'ESP wallhack, radar și Aimbot într-o licență', topicA: 'Ideal pentru citirea squad-urilor inamice în BR și scav-run.', topicB: 'O licență în loc de instrumente separate.' },
	sv: { title: 'Enlisted Hacks 2026 | ESP, Wallhack & Aimbot', desc: 'Undetected Enlisted hacks för Enlisted på PC. ESP wallhack, radar hack, Aimbot, Easy Anti-Cheat-underhåll. Omedelbar digital leverans.', h1: 'Enlisted Hacks — Undetected ESP, Wallhack & Aimbot', intro: 'Undetected paket för Enlisted på Windows PC: ESP wallhack, radar, Aimbot med Easy Anti-Cheat-underhåll.', imageAlt: 'Enlisted ESP player tags hack', gallery: 'Enlisted Hacks galleri — ESP, Aimbot, wallhack', cta2: 'Se funktioner', h2a: 'Varför Enlisted Hacks 2026', h2b: 'ESP wallhack, radar och Aimbot i en licens', topicA: 'Ideal för att läsa fiendesquads i BR och scav-run.', topicB: 'En licens istället för separata verktyg.' },
};

function buildHome(locale) {
	const p = phrases[locale];
	const m = PAGE_META_HOME[locale];
	return {
		title: clampTitle(stripZadeyoFromMeta(m.title)),
		description: clampDesc(stripZadeyoFromMeta(m.desc)),
		h1: m.h1,
		intro: m.intro,
		imageAlt: m.imageAlt,
		galleryTitle: m.gallery,
		heroImage: HERO_IMAGES.home,
		ctaPrimary: p.buy,
		ctaSecondary: m.cta2,
		ctaSecondaryHref: '/features/',
		sections: [
			section(m.h2a, p.s1(m.topicA), p.s2()),
			section(m.h2b, p.s1(m.topicB), p.s3()),
		],
	};
}

/** Unique title/desc tails per page — English base + locale overrides for hero H1/subtitle. */
const PAGE_META_TAILS = {
	'enlisted-esp': { suffix: 'Player Boxes & Wallhack', focus: 'player boxes, loot markers, and wallhack overlays', altKeyword: 'ESP wallhack overlay' },
	'enlisted-aimbot': { suffix: 'Soft Aim Controls', focus: 'soft aim, FOV, and per-weapon Aimbot profiles', altKeyword: 'aimbot combat' },
	features: { suffix: 'Full Feature List', focus: 'ESP, soft aim, radar controls', altKeyword: 'cheats package ESP aimbot' },
	pricing: { suffix: 'Monthly & Lifetime', focus: '$35 monthly or $150 lifetime licenses', altKeyword: 'cheats pricing' },
	setup: { suffix: 'PC Setup Guide', focus: 'Windows PC activation and first-launch setup', altKeyword: 'setup PC activation' },
	updates: { suffix: 'Easy Anti-Cheat Maintenance Log', focus: 'Easy Anti-Cheat patch status and rebuild notes', altKeyword: 'updates Easy Anti-Cheat maintenance' },
	faq: { suffix: 'Common Answers', focus: 'ESP, soft aim, delivery, and Easy Anti-Cheat questions', altKeyword: 'FAQ ESP aimbot' },
	support: { suffix: 'Help & Contact', focus: 'order help and license support contact', altKeyword: 'support license help' },
	undetected: { suffix: 'Easy Anti-Cheat Safe Status', focus: 'undetected maintenance after Easy Anti-Cheat patches', altKeyword: 'undetected cheats ESP' },
	wallhack: { suffix: 'ESP Visibility', focus: 'wallhack ESP for players, loot, and distance', altKeyword: 'wallhack ESP visibility' },
	radar: { suffix: '2D Threat Overlay', focus: '2D radar cues for flanks and rotations', altKeyword: 'radar hack overlay' },
	eac: { suffix: 'Patch Maintenance', focus: 'how Easy Anti-Cheat updates are handled for Enlisted hacks', altKeyword: 'Easy Anti-Cheat bypass ESP aimbot' },
	'cheats-2026': { suffix: 'Buyer Guide', focus: '2026 Enlisted hacks checklist before checkout', altKeyword: 'cheats 2026 ESP aimbot' },
	hacks: { suffix: 'ESP Aimbot Guide', focus: 'the Enlisted hacks pillar for ESP and Aimbot', altKeyword: 'hacks ESP aimbot' },
	'cheat-download': { suffix: 'Instant Access', focus: 'digital license download after payment', altKeyword: 'cheat download ESP aimbot' },
	'mod-menu': { suffix: 'In-Game Toggles', focus: 'in-client ESP and soft aim toggles', altKeyword: 'mod menu ESP aimbot' },
	'soft-aim': { suffix: 'Smooth Aim Settings', focus: 'smooth soft aim settings for Windows PC', altKeyword: 'soft aim aimbot' },
	'best-cheats': { suffix: 'Buyer Checklist', focus: 'what to compare before buying Enlisted hacks', altKeyword: 'best cheats ESP aimbot' },
	'aimbot-hack': { suffix: 'Soft Aim Assist', focus: 'undetected Aimbot hack assist for Enlisted', altKeyword: 'aimbot hack combat' },
	'esp-hack': { suffix: 'Boxes & Loot', focus: 'ESP hack boxes, loot pins, and distance', altKeyword: 'ESP hack wallhack' },
	'unlock-all': { suffix: 'What It Means', focus: 'unlock-all searches vs real ESP and Aimbot tools', altKeyword: 'unlock all ESP aimbot' },
};

/** Localized H1 suffixes (title/subtitle language change on product pages). */
const SUFFIX_I18N = {
	es: {
		'enlisted-esp': 'Cajas de jugador y wallhack',
		'enlisted-aimbot': 'Controles soft aim',
		features: 'Lista completa de funciones',
		pricing: 'Mensual y de por vida',
		setup: 'Guía de instalación PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Preguntas frecuentes',
		support: 'Ayuda y contacto',
		undetected: 'Estado indetectable',
		wallhack: 'Visibilidad ESP',
		radar: 'Radar 2D de amenazas',
		eac: 'Mantenimiento de parches',
		'cheats-2026': 'Guía del comprador',
		hacks: 'Guía ESP y Aimbot',
		'cheat-download': 'Acceso instantáneo',
		'mod-menu': 'Controles en partida',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Lista de compra',
		'aimbot-hack': 'Asistencia soft aim',
		'esp-hack': 'Cajas y loot',
		'unlock-all': 'Qué significa',
	},
	fr: {
		'enlisted-esp': 'Boîtes joueur et wallhack',
		'enlisted-aimbot': 'Contrôles soft aim',
		features: 'Liste complète des fonctions',
		pricing: 'Mensuel et à vie',
		setup: 'Guide d\'installation PC',
		updates: 'Journal Easy Anti-Cheat',
		faq: 'Questions fréquentes',
		support: 'Aide et contact',
		undetected: 'Statut indétectable',
		wallhack: 'Visibilité ESP',
		radar: 'Radar 2D des menaces',
		eac: 'Maintenance des patchs',
		'cheats-2026': 'Guide acheteur',
		hacks: 'Guide ESP et Aimbot',
		'cheat-download': 'Accès instantané',
		'mod-menu': 'Contrôles en jeu',
		'soft-aim': 'Réglages soft aim',
		'best-cheats': 'Checklist acheteur',
		'aimbot-hack': 'Assistance soft aim',
		'esp-hack': 'Boîtes et loot',
		'unlock-all': 'Ce que ça signifie',
	},
	de: {
		'enlisted-esp': 'Spielerboxen & Wallhack',
		'enlisted-aimbot': 'Soft-Aim Steuerung',
		features: 'Vollständige Feature-Liste',
		pricing: 'Monatlich & Lifetime',
		setup: 'PC Setup-Anleitung',
		updates: 'Easy Anti-Cheat Wartungslog',
		faq: 'Häufige Fragen',
		support: 'Hilfe & Kontakt',
		undetected: 'Undetected Status',
		wallhack: 'ESP Sichtbarkeit',
		radar: '2D Bedrohungsradar',
		eac: 'Patch-Wartung',
		'cheats-2026': 'Käuferleitfaden',
		hacks: 'ESP Aimbot Guide',
		'cheat-download': 'Sofortzugang',
		'mod-menu': 'In-Game Toggles',
		'soft-aim': 'Soft-Aim Einstellungen',
		'best-cheats': 'Käufer-Checkliste',
		'aimbot-hack': 'Soft-Aim Assist',
		'esp-hack': 'Boxen & Loot',
		'unlock-all': 'Was es bedeutet',
	},
	pt: {
		'enlisted-esp': 'Caixas de jogador e wallhack',
		'enlisted-aimbot': 'Controles soft aim',
		features: 'Lista completa de recursos',
		pricing: 'Mensal e vitalício',
		setup: 'Guia de instalação PC',
		updates: 'Registro Easy Anti-Cheat',
		faq: 'Perguntas frequentes',
		support: 'Ajuda e contato',
		undetected: 'Status indetectável',
		wallhack: 'Visibilidade ESP',
		radar: 'Radar 2D de ameaças',
		eac: 'Manutenção de patches',
		'cheats-2026': 'Guia do comprador',
		hacks: 'Guia ESP e Aimbot',
		'cheat-download': 'Acesso instantâneo',
		'mod-menu': 'Controles in-game',
		'soft-aim': 'Ajustes soft aim',
		'best-cheats': 'Checklist do comprador',
		'aimbot-hack': 'Assistência soft aim',
		'esp-hack': 'Caixas e loot',
		'unlock-all': 'O que significa',
	},
	it: {
		'enlisted-esp': 'Box giocatore e wallhack',
		'enlisted-aimbot': 'Controlli soft aim',
		features: 'Elenco completo funzioni',
		pricing: 'Mensile e lifetime',
		setup: 'Guida setup PC',
		updates: 'Log manutenzione Easy Anti-Cheat',
		faq: 'Domande frequenti',
		support: 'Aiuto e contatto',
		undetected: 'Stato indetectable',
		wallhack: 'Visibilità ESP',
		radar: 'Radar 2D minacce',
		eac: 'Manutenzione patch',
		'cheats-2026': 'Guida acquirente',
		hacks: 'Guida ESP e Aimbot',
		'cheat-download': 'Accesso istantaneo',
		'mod-menu': 'Toggle in-game',
		'soft-aim': 'Impostazioni soft aim',
		'best-cheats': 'Checklist acquirente',
		'aimbot-hack': 'Assist soft aim',
		'esp-hack': 'Box e loot',
		'unlock-all': 'Cosa significa',
	},
	ru: {
		'enlisted-esp': 'Боксы игроков и wallhack',
		'enlisted-aimbot': 'Управление soft aim',
		features: 'Полный список функций',
		pricing: 'Месяц и lifetime',
		setup: 'Гайд по установке',
		updates: 'Журнал Easy Anti-Cheat',
		faq: 'Частые вопросы',
		support: 'Помощь и контакт',
		undetected: 'Статус undetected',
		wallhack: 'Видимость ESP',
		radar: '2D радар угроз',
		eac: 'Обслуживание патчей',
		'cheats-2026': 'Гайд покупателя',
		hacks: 'Гайд ESP и Aimbot',
		'cheat-download': 'Мгновенный доступ',
		'mod-menu': 'Игровые переключатели',
		'soft-aim': 'Настройки soft aim',
		'best-cheats': 'Чеклист покупателя',
		'aimbot-hack': 'Soft aim ассист',
		'esp-hack': 'Боксы и лут',
		'unlock-all': 'Что это значит',
	},
};

function productPage(locale, pageKey, topicName, cta2href) {
	const p = phrases[locale];
	const home = PAGE_META_HOME[locale];
	const meta = PAGE_META_TAILS[pageKey] ?? { suffix: 'Enlisted Hacks', focus: 'ESP wallhack, radar, and Aimbot', altKeyword: 'ESP aimbot wallhack' };
	const suffix = SUFFIX_I18N[locale]?.[pageKey] ?? meta.suffix;
	const titleBase = `${topicName} | ${suffix}`;
	return {
		title: clampTitle(stripZadeyoFromMeta(titleBase)),
		description: clampDesc(
			stripZadeyoFromMeta(`${topicName}: ${meta.focus}. ${p.delivery}. ${p.undetected} — ${p.win}.`),
		),
		h1: topicName,
		intro: p.s1(`${topicName}.`),
		imageAlt: PAGE_IMAGE_ALTS[pageKey] || `${topicName} — Enlisted Hacks screenshot`,
		galleryTitle: topicName,
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: p.buy,
		ctaSecondary: home.cta2,
		ctaSecondaryHref: cta2href,
		sections: [
			section(topicName, p.s1(`${meta.focus}.`), p.s2()),
			section(`${p.undetected}`, p.s3(), p.s2()),
			section(p.delivery, p.s2(), p.legal()),
		],
	};
}

const TOPIC_NAMES = {
	'enlisted-esp': { en: 'Enlisted ESP', es: 'ESP Enlisted', fr: 'ESP Enlisted', de: 'Enlisted ESP', pt: 'ESP Enlisted', it: 'ESP Enlisted', nl: 'Enlisted ESP', pl: 'ESP Enlisted', ru: 'ESP Enlisted', tr: 'Enlisted ESP', ar: 'ESP Enlisted', ja: 'Enlisted ESP', ko: 'Enlisted ESP', zh: 'Enlisted ESP', hi: 'Enlisted ESP', id: 'ESP Enlisted', th: 'Enlisted ESP', vi: 'ESP Enlisted', uk: 'ESP Enlisted', cs: 'Enlisted ESP', ro: 'ESP Enlisted', sv: 'Enlisted ESP' },
	'enlisted-aimbot': { en: 'Enlisted Aimbot', es: 'Aimbot Enlisted', fr: 'Aimbot Enlisted', de: 'Enlisted Aimbot', pt: 'Aimbot Enlisted', it: 'Aimbot Enlisted', nl: 'Enlisted Aimbot', pl: 'Aimbot Enlisted', ru: 'Aimbot Enlisted', tr: 'Enlisted Aimbot', ar: 'Aimbot Enlisted', ja: 'Enlisted Aimbot', ko: 'Enlisted Aimbot', zh: 'Enlisted Aimbot', hi: 'Enlisted Aimbot', id: 'Aimbot Enlisted', th: 'Enlisted Aimbot', vi: 'Aimbot Enlisted', uk: 'Aimbot Enlisted', cs: 'Enlisted Aimbot', ro: 'Aimbot Enlisted', sv: 'Enlisted Aimbot' },
	features: { en: 'Features', es: 'Funciones', fr: 'Fonctions', de: 'Features', pt: 'Recursos', it: 'Funzioni', nl: 'Functies', pl: 'Funkcje', ru: 'Функции', tr: 'Özellikler', ar: 'الميزات', ja: '機能', ko: '기능', zh: '功能', hi: 'फ़ीचर्स', id: 'Fitur', th: 'ฟีเจอร์', vi: 'Tính năng', uk: 'Функції', cs: 'Funkce', ro: 'Funcții', sv: 'Funktioner' },
	pricing: { en: 'Pricing', es: 'Precios', fr: 'Tarifs', de: 'Preise', pt: 'Preços', it: 'Prezzi', nl: 'Prijzen', pl: 'Cennik', ru: 'Цены', tr: 'Fiyatlar', ar: 'الأسعار', ja: '料金', ko: '가격', zh: '价格', hi: 'कीमत', id: 'Harga', th: 'ราคา', vi: 'Giá', uk: 'Ціни', cs: 'Ceny', ro: 'Prețuri', sv: 'Priser' },
	setup: { en: 'Setup', es: 'Instalación', fr: 'Installation', de: 'Setup', pt: 'Instalação', it: 'Setup', nl: 'Setup', pl: 'Instalacja', ru: 'Установка', tr: 'Kurulum', ar: 'التثبيت', ja: 'セットアップ', ko: '설치', zh: '安装', hi: 'सेटअप', id: 'Setup', th: 'ติดตั้ง', vi: 'Cài đặt', uk: 'Встановлення', cs: 'Instalace', ro: 'Instalare', sv: 'Installation' },
	updates: { en: 'Updates', es: 'Actualizaciones', fr: 'Mises à jour', de: 'Updates', pt: 'Atualizações', it: 'Aggiornamenti', nl: 'Updates', pl: 'Aktualizacje', ru: 'Обновления', tr: 'Güncellemeler', ar: 'التحديثات', ja: '更新', ko: '업데이트', zh: '更新', hi: 'अपडेट', id: 'Pembaruan', th: 'อัปเดต', vi: 'Cập nhật', uk: 'Оновлення', cs: 'Aktualizace', ro: 'Actualizări', sv: 'Uppdateringar' },
	faq: { en: 'FAQ', es: 'FAQ', fr: 'FAQ', de: 'FAQ', pt: 'FAQ', it: 'FAQ', nl: 'FAQ', pl: 'FAQ', ru: 'FAQ', tr: 'SSS', ar: 'الأسئلة', ja: 'FAQ', ko: 'FAQ', zh: '常见问题', hi: 'FAQ', id: 'FAQ', th: 'FAQ', vi: 'FAQ', uk: 'FAQ', cs: 'FAQ', ro: 'FAQ', sv: 'FAQ' },
	support: { en: 'Support', es: 'Soporte', fr: 'Support', de: 'Support', pt: 'Suporte', it: 'Supporto', nl: 'Support', pl: 'Wsparcie', ru: 'Поддержка', tr: 'Destek', ar: 'الدعم', ja: 'サポート', ko: '지원', zh: '支持', hi: 'सहायता', id: 'Dukungan', th: 'สนับสนุน', vi: 'Hỗ trợ', uk: 'Підтримка', cs: 'Podpora', ro: 'Suport', sv: 'Support' },
	undetected: { en: 'Undetected Cheats', es: 'Trucos indetectables', fr: 'Triches indétectables', de: 'Undetected Cheats', pt: 'Cheats indetectáveis', it: 'Cheat indetectable', nl: 'Undetected Cheats', pl: 'Cheaty undetected', ru: 'Undetected читы', tr: 'Undetected hileler', ar: 'غش undetected', ja: 'Undetectedチート', ko: 'Undetected 치트', zh: 'Undetected作弊', hi: 'Undetected cheats', id: 'Cheat undetected', th: 'Cheats undetected', vi: 'Cheat undetected', uk: 'Undetected чіти', cs: 'Undetected cheaty', ro: 'Cheats undetected', sv: 'Undetected cheats' },
	wallhack: { en: 'Enlisted Wallhack', es: 'Wallhack Enlisted', fr: 'Wallhack Enlisted', de: 'Enlisted Wallhack', pt: 'Wallhack Enlisted', it: 'Wallhack Enlisted', nl: 'Enlisted Wallhack', pl: 'Wallhack Enlisted', ru: 'Wallhack Enlisted', tr: 'Enlisted Wallhack', ar: 'Wallhack Enlisted', ja: 'Enlisted Wallhack', ko: 'Enlisted Wallhack', zh: 'Enlisted Wallhack', hi: 'Enlisted Wallhack', id: 'Wallhack Enlisted', th: 'Enlisted Wallhack', vi: 'Wallhack Enlisted', uk: 'Wallhack Enlisted', cs: 'Enlisted Wallhack', ro: 'Wallhack Enlisted', sv: 'Enlisted Wallhack' },
	radar: { en: 'Radar Hack', es: 'Radar hack', fr: 'Radar hack', de: 'Radar Hack', pt: 'Radar hack', it: 'Radar hack', nl: 'Radar Hack', pl: 'Radar hack', ru: 'Radar hack', tr: 'Radar hack', ar: 'Radar hack', ja: 'Radar Hack', ko: 'Radar Hack', zh: 'Radar Hack', hi: 'Radar Hack', id: 'Radar hack', th: 'Radar Hack', vi: 'Radar hack', uk: 'Radar hack', cs: 'Radar Hack', ro: 'Radar hack', sv: 'Radar Hack' },
	eac: { en: 'Easy Anti-Cheat Bypass', es: 'Bypass Easy Anti-Cheat', fr: 'Bypass Easy Anti-Cheat', de: 'Easy Anti-Cheat Bypass', pt: 'Bypass Easy Anti-Cheat', it: 'Bypass Easy Anti-Cheat', nl: 'Easy Anti-Cheat Bypass', pl: 'Bypass Easy Anti-Cheat', ru: 'Bypass Easy Anti-Cheat', tr: 'Easy Anti-Cheat bypass', ar: 'Bypass Easy Anti-Cheat', ja: 'Easy Anti-Cheat Bypass', ko: 'Easy Anti-Cheat Bypass', zh: 'Easy Anti-Cheat Bypass', hi: 'Easy Anti-Cheat Bypass', id: 'Bypass Easy Anti-Cheat', th: 'Easy Anti-Cheat Bypass', vi: 'Bypass Easy Anti-Cheat', uk: 'Bypass Easy Anti-Cheat', cs: 'Easy Anti-Cheat Bypass', ro: 'Bypass Easy Anti-Cheat', sv: 'Easy Anti-Cheat Bypass' },
	'cheats-2026': { en: 'Enlisted Hacks 2026', es: 'Trucos Enlisted 2026', fr: 'Triches Enlisted 2026', de: 'Enlisted Hacks 2026', pt: 'Cheats Enlisted 2026', it: 'Cheat Enlisted 2026', nl: 'Enlisted Hacks 2026', pl: 'Cheaty Enlisted 2026', ru: 'Читы Enlisted 2026', tr: 'Enlisted Hileleri 2026', ar: 'غش Enlisted 2026', ja: 'Enlisted Hacks 2026', ko: 'Enlisted Hacks 2026', zh: 'Enlisted作弊 2026', hi: 'Enlisted Hacks 2026', id: 'Cheat Enlisted 2026', th: 'Enlisted Hacks 2026', vi: 'Cheat Enlisted 2026', uk: 'Чіти Enlisted 2026', cs: 'Enlisted hacky 2026', ro: 'Cheats Enlisted 2026', sv: 'Enlisted Hacks 2026' },
	hacks: { en: 'Enlisted Hacks', es: 'Trucos Enlisted', fr: 'Triches Enlisted', de: 'Enlisted Hacks', pt: 'Cheats Enlisted', it: 'Cheat Enlisted', nl: 'Enlisted Hacks', pl: 'Cheaty Enlisted', ru: 'Читы Enlisted', tr: 'Enlisted Hileleri', ar: 'غش Enlisted', ja: 'Enlisted Hacks', ko: 'Enlisted Hacks', zh: 'Enlisted作弊', hi: 'Enlisted Hacks', id: 'Cheat Enlisted', th: 'Enlisted Hacks', vi: 'Cheat Enlisted', uk: 'Чіти Enlisted', cs: 'Enlisted hacky', ro: 'Cheats Enlisted', sv: 'Enlisted Hacks' },
	'cheat-download': { en: 'Enlisted Cheat Download', es: 'Descarga Enlisted Hacks', fr: 'Téléchargement Enlisted Hacks', de: 'Enlisted Cheat Download', pt: 'Download Enlisted Hacks', it: 'Download Enlisted Hacks', nl: 'Enlisted Cheat Download', pl: 'Pobieranie Enlisted Hacks', ru: 'Скачать Enlisted Hacks', tr: 'Enlisted Hile İndir', ar: 'تحميل Enlisted Hacks', ja: 'Enlisted Cheat Download', ko: 'Enlisted Cheat Download', zh: 'Enlisted作弊下载', hi: 'Enlisted Cheat Download', id: 'Download Cheat Enlisted', th: 'ดาวน์โหลด Enlisted Hacks', vi: 'Tải Cheat Enlisted', uk: 'Завантаження Enlisted Hacks', cs: 'Stáhnout Enlisted Hacks', ro: 'Descărcare Enlisted Hacks', sv: 'Enlisted Cheat Download' },
	'mod-menu': { en: 'Enlisted Mod Menu', es: 'Menú mod Enlisted', fr: 'Menu mod Enlisted', de: 'Enlisted Mod-Menü', pt: 'Menu mod Enlisted', it: 'Mod menu Enlisted', nl: 'Enlisted Mod Menu', pl: 'Mod menu Enlisted', ru: 'Мод-меню Enlisted', tr: 'Enlisted Mod Menü', ar: 'قائمة مود Enlisted', ja: 'Enlisted Mod Menu', ko: 'Enlisted 모드 메뉴', zh: 'Enlisted修改菜单', hi: 'Enlisted Mod Menu', id: 'Menu mod Enlisted', th: 'เมนูมอด Enlisted', vi: 'Mod menu Enlisted', uk: 'Мод-меню Enlisted', cs: 'Enlisted mod menu', ro: 'Meniu mod Enlisted', sv: 'Enlisted Mod-meny' },
	'soft-aim': { en: 'Enlisted Soft Aim', es: 'Soft aim Enlisted', fr: 'Soft aim Enlisted', de: 'Enlisted Soft Aim', pt: 'Soft aim Enlisted', it: 'Soft aim Enlisted', nl: 'Enlisted Soft Aim', pl: 'Soft aim Enlisted', ru: 'Soft aim Enlisted', tr: 'Enlisted Soft Aim', ar: 'Soft aim Enlisted', ja: 'Enlisted Soft Aim', ko: 'Enlisted Soft Aim', zh: 'Enlisted Soft Aim', hi: 'Enlisted Soft Aim', id: 'Soft aim Enlisted', th: 'Enlisted Soft Aim', vi: 'Soft aim Enlisted', uk: 'Soft aim Enlisted', cs: 'Enlisted Soft Aim', ro: 'Soft aim Enlisted', sv: 'Enlisted Soft Aim' },
	'best-cheats': { en: 'Best Enlisted Hacks', es: 'Mejores trucos Enlisted', fr: 'Meilleures triches Enlisted', de: 'Beste Enlisted Hacks', pt: 'Melhores cheats Enlisted', it: 'Migliori cheat Enlisted', nl: 'Beste Enlisted Hacks', pl: 'Najlepsze cheaty Enlisted', ru: 'Лучшие читы Enlisted', tr: 'En İyi Enlisted Hileleri', ar: 'أفضل غش Enlisted', ja: '最強Enlistedチート', ko: '최고의 Enlisted 치트', zh: '最佳Enlisted作弊', hi: 'सर्वश्रेष्ठ Enlisted Hacks', id: 'Cheat Enlisted terbaik', th: 'Cheat Enlisted ที่ดีที่สุด', vi: 'Cheat Enlisted tốt nhất', uk: 'Найкращі чіти Enlisted', cs: 'Nejlepší Enlisted hacky', ro: 'Cele mai bune cheats Enlisted', sv: 'Bästa Enlisted Hacks' },
	'aimbot-hack': { en: 'Enlisted Aimbot Hack', es: 'Hack aimbot Enlisted', fr: 'Hack aimbot Enlisted', de: 'Enlisted Aimbot Hack', pt: 'Hack aimbot Enlisted', it: 'Hack aimbot Enlisted', nl: 'Enlisted Aimbot Hack', pl: 'Hack aimbot Enlisted', ru: 'Хак aimbot Enlisted', tr: 'Enlisted Aimbot Hilesi', ar: 'هاك Aimbot Enlisted', ja: 'Enlisted Aimbot Hack', ko: 'Enlisted 에임봇 핵', zh: 'Enlisted自瞄外挂', hi: 'Enlisted Aimbot Hack', id: 'Hack aimbot Enlisted', th: 'Hack Aimbot Enlisted', vi: 'Hack aimbot Enlisted', uk: 'Хак aimbot Enlisted', cs: 'Enlisted aimbot hack', ro: 'Hack aimbot Enlisted', sv: 'Enlisted Aimbot Hack' },
	'esp-hack': { en: 'Enlisted ESP Hack', es: 'Hack ESP Enlisted', fr: 'Hack ESP Enlisted', de: 'Enlisted ESP Hack', pt: 'Hack ESP Enlisted', it: 'Hack ESP Enlisted', nl: 'Enlisted ESP Hack', pl: 'Hack ESP Enlisted', ru: 'Хак ESP Enlisted', tr: 'Enlisted ESP Hilesi', ar: 'هاك ESP Enlisted', ja: 'Enlisted ESP Hack', ko: 'Enlisted ESP 핵', zh: 'Enlisted ESP外挂', hi: 'Enlisted ESP Hack', id: 'Hack ESP Enlisted', th: 'Hack ESP Enlisted', vi: 'Hack ESP Enlisted', uk: 'Хак ESP Enlisted', cs: 'Enlisted ESP hack', ro: 'Hack ESP Enlisted', sv: 'Enlisted ESP Hack' },
	'unlock-all': { en: 'Enlisted Unlock All', es: 'Unlock all Enlisted', fr: 'Unlock all Enlisted', de: 'Enlisted Unlock All', pt: 'Unlock all Enlisted', it: 'Unlock all Enlisted', nl: 'Enlisted Unlock All', pl: 'Unlock all Enlisted', ru: 'Unlock all Enlisted', tr: 'Enlisted Unlock All', ar: 'Unlock all Enlisted', ja: 'Enlisted Unlock All', ko: 'Enlisted Unlock All', zh: 'Enlisted Unlock All', hi: 'Enlisted Unlock All', id: 'Unlock all Enlisted', th: 'Enlisted Unlock All', vi: 'Unlock all Enlisted', uk: 'Unlock all Enlisted', cs: 'Enlisted Unlock All', ro: 'Unlock all Enlisted', sv: 'Enlisted Unlock All' },
};

const CTA2_HREF = {
	'enlisted-esp': '/enlisted-hacks/',
	'enlisted-aimbot': '/enlisted-esp/',
	features: '/pricing/',
	pricing: '/setup/',
	setup: '/support/',
	updates: '/enlisted-hacks/',
	faq: '/support/',
	support: '/setup/',
	undetected: '/enlisted-hacks/',
	wallhack: '/enlisted-esp/',
	radar: '/enlisted-esp/',
	eac: '/updates/',
	'cheats-2026': '/enlisted-hacks/',
	hacks: '/features/',
	'cheat-download': '/setup/',
	'mod-menu': '/features/',
	'soft-aim': '/enlisted-aimbot/',
	'best-cheats': '/pricing/',
	'aimbot-hack': '/enlisted-aimbot/',
	'esp-hack': '/enlisted-esp/',
	'unlock-all': '/features/',
};

function buildLegal(locale, pageKey, kind) {
	const p = phrases[locale];
	const titles = {
		privacy: { es: 'Política de privacidad', fr: 'Politique de confidentialité', de: 'Datenschutz', pt: 'Política de privacidade', it: 'Informativa privacy', nl: 'Privacybeleid', pl: 'Polityka prywatności', ru: 'Политика конфиденциальности', tr: 'Gizlilik politikası', ar: 'سياسة الخصوصية', ja: 'プライバシーポリシー', ko: '개인정보 처리방침', zh: '隐私政策', hi: 'गोपनीयता नीति', id: 'Kebijakan privasi', th: 'นโยบายความเป็นส่วนตัว', vi: 'Chính sách bảo mật', uk: 'Політика конфіденційності', cs: 'Zásady ochrany soukromí', ro: 'Politica de confidențialitate', sv: 'Integritetspolicy' },
		refund: { es: 'Política de reembolso', fr: 'Politique de remboursement', de: 'Rückerstattung', pt: 'Política de reembolso', it: 'Politica di rimborso', nl: 'Restitutiebeleid', pl: 'Polityka zwrotów', ru: 'Политика возврата', tr: 'İade politikası', ar: 'سياسة الاسترداد', ja: '返金ポリシー', ko: '환불 정책', zh: '退款政策', hi: 'रिफंड नीति', id: 'Kebijakan refund', th: 'นโยบายการคืนเงิน', vi: 'Chính sách hoàn tiền', uk: 'Політика повернення', cs: 'Zásady vrácení peněz', ro: 'Politica de rambursare', sv: 'Återbetalningspolicy' },
		terms: { es: 'Términos de uso', fr: 'Conditions d\'utilisation', de: 'Nutzungsbedingungen', pt: 'Termos de uso', it: 'Termini di utilizzo', nl: 'Gebruiksvoorwaarden', pl: 'Warunki użytkowania', ru: 'Условия использования', tr: 'Kullanım şartları', ar: 'شروط الاستخدام', ja: '利用規約', ko: '이용 약관', zh: '使用条款', hi: 'उपयोग की शर्तें', id: 'Syarat penggunaan', th: 'ข้อกำหนดการใช้งาน', vi: 'Điều khoản sử dụng', uk: 'Умови використання', cs: 'Podmínky použití', ro: 'Termeni de utilizare', sv: 'Användarvillkor' },
	};
	const h1 = titles[kind][locale] ?? (kind === 'privacy' ? 'Privacy Policy' : kind === 'refund' ? 'Refund Policy' : 'Terms of Use');
	return {
		title: clampTitle(stripZadeyoFromMeta(`${h1} | Enlisted Hacks`)),
		description: clampDesc(stripZadeyoFromMeta(`${h1} for Enlisted Hacks — ESP wallhack, Aimbot, ${p.win}.`)),
		h1,
		intro: p.s1(`${h1} for enlistedhacks.net and Enlisted licenses.`),
		imageAlt: 'enlisted hacks',
		galleryTitle: 'enlisted hacks',
		heroImage: HERO_IMAGES[pageKey],
		ctaPrimary: locale === 'ar' ? 'مراسلة الدعم' : locale === 'ja' ? 'サポートにメール' : locale === 'ko' ? '지원 이메일' : locale === 'zh' ? '邮件支持' : 'Email support',
		ctaSecondary: kind === 'privacy' ? (locale === 'es' ? 'Leer términos' : locale === 'fr' ? 'Lire conditions' : locale === 'de' ? 'Nutzungsbedingungen' : locale === 'ar' ? 'اقرأ الشروط' : locale === 'ja' ? '利用規約' : 'Read terms') : kind === 'refund' ? (locale === 'es' ? 'Leer privacidad' : 'Read privacy') : (locale === 'es' ? 'Leer privacidad' : 'Read privacy'),
		ctaSecondaryHref: kind === 'privacy' ? '/terms/' : '/privacy-policy/',
		sections: [
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Información que recopilamos' : locale === 'fr' ? 'Informations collectées' : locale === 'de' ? 'Erhobene Daten' : locale === 'ar' ? 'المعلومات التي نجمعها' : locale === 'ja' ? '収集する情報' : 'Information we collect') :
				kind === 'refund' ? (locale === 'es' ? 'Entrega digital' : locale === 'fr' ? 'Livraison numérique' : locale === 'de' ? 'Digitale Lieferung' : locale === 'ar' ? 'التسليم الرقمي' : locale === 'ja' ? 'デジタル配信' : 'Digital delivery') :
				(locale === 'es' ? 'Aceptación de términos' : locale === 'fr' ? 'Acceptation' : locale === 'de' ? 'Annahme' : locale === 'ar' ? 'قبول الشروط' : locale === 'ja' ? '規約への同意' : 'Acceptance of terms'),
				p.s1('Contact email, Zadeyo order references, and basic site security data.'),
				kind === 'privacy' ? 'Payment details are processed by Zadeyo checkout — not stored on enlistedhacks.net.' : p.s2(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Uso de la información' : locale === 'fr' ? 'Utilisation' : locale === 'de' ? 'Datennutzung' : locale === 'ar' ? 'استخدام المعلومات' : locale === 'ja' ? '情報の利用' : 'How we use data') :
				kind === 'refund' ? (locale === 'es' ? 'Cuándo se aprueba' : locale === 'fr' ? 'Approbation' : locale === 'de' ? 'Genehmigung' : locale === 'ar' ? 'موافقة الاسترداد' : locale === 'ja' ? '返金承認' : 'Refund approval') :
				(locale === 'es' ? 'Riesgos y anti-cheat' : locale === 'fr' ? 'Risques' : locale === 'de' ? 'Risiko' : locale === 'ar' ? 'المخاطر' : locale === 'ja' ? 'リスク' : 'Risk disclaimer'),
				p.s1('Support responses, order resolution, and legal compliance when required.'),
				kind === 'terms' ? 'Using cheats may violate Epic Games terms — you assume all ban risk.' : p.s3(),
			),
			section(
				kind === 'privacy' ? (locale === 'es' ? 'Tus derechos' : locale === 'fr' ? 'Vos droits' : locale === 'de' ? 'Ihre Rechte' : locale === 'ar' ? 'حقوقك' : locale === 'ja' ? 'あなたの権利' : 'Your rights') :
				kind === 'refund' ? (locale === 'es' ? 'Cómo solicitar' : locale === 'fr' ? 'Comment demander' : locale === 'de' ? 'Anfrage stellen' : locale === 'ar' ? 'كيفية الطلب' : locale === 'ja' ? '申請方法' : 'How to request') :
				(locale === 'es' ? 'Cambios' : locale === 'fr' ? 'Modifications' : locale === 'de' ? 'Änderungen' : locale === 'ar' ? 'التغييرات' : locale === 'ja' ? '変更' : 'Policy changes'),
				p.legal(),
				'Email: support@enlistedhacks.net',
			),
		],
	};
}

/** Build all pages for a non-English locale. */
export function buildPagesForLocale(locale) {
	const pages = { home: buildHome(locale) };
	for (const [pageKey, names] of Object.entries(TOPIC_NAMES)) {
		pages[pageKey] = productPage(locale, pageKey, names[locale], CTA2_HREF[pageKey]);
	}
	for (const kind of ['privacy', 'refund', 'terms']) {
		pages[kind] = buildLegal(locale, kind, kind);
	}
	return pages;
}
