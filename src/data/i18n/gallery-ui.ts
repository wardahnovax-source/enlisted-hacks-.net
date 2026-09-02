import type { LocaleCode } from './locales';

export type GalleryUi = {
	eyebrow: string;
	title: string;
	subtitle: string;
	lead: string;
	highlights: { title: string; copy: string }[];
	updatesLabel: string;
	updatesShort: string;
};

export const galleryUi: Record<LocaleCode, GalleryUi> = {
	en: {
		eyebrow: 'enlisted hacks',
		title: 'enlisted hacks gallery',
		subtitle: 'Simple enlisted hacks visuals — ESP, wallhack, aimbot, and radar for Enlisted on PC.',
		lead: 'Enlisted Hacks helps you spot enemy soldiers, AI soldiers, loot, and extracts with ESP, aimbot, and radar in one license.',
		highlights: [
			{ title: 'enlisted hacks esp', copy: 'See players through walls with enlisted hacks esp and wallhack overlays.' },
			{ title: 'enlisted hacks radar', copy: 'Track nearby threats with enlisted hacks radar before you push or extract.' },
			{ title: 'enlisted hacks aimbot', copy: 'Use soft aim and aimbot controls tuned for Enlisted raids on Windows PC.' },
		],
		updatesLabel: 'enlisted hacks updates',
		updatesShort: 'Updates',
	},
	es: {
		eyebrow: 'Enlisted Hacks',
		title: 'Galería Enlisted',
		subtitle: 'Visuales de Enlisted con loadouts, peleas de escuadrón y combate raid — junto a herramientas ESP, radar y Aimbot.',
		lead: 'Enlisted Hacks está pensado para el loop BR de Enlisted: leer el mapa, rastrear escuadrones enemigos, lootear y sobrevivir al extract.',
		highlights: [
			{ title: 'ESP de players y escuadrones', copy: 'Detecta players enemigos y contornos de escuadrón en Customs y scav-run para elegir peleas con mejor información.' },
			{ title: 'Marcadores de loot y cofres', copy: 'Resalta loadouts, cofres y loot de alto nivel sin saturar la pantalla en plena partida.' },
			{ title: 'Controles Aimbot Enlisted', copy: 'Ajusta suavidad, prioridad de objetivo y teclas para AR, SMG y francotirador antes de comprar.' },
		],
		updatesLabel: 'Actualizaciones Enlisted Hacks',
		updatesShort: 'Updates',
	},
	fr: {
		eyebrow: 'Enlisted Hacks',
		title: 'Galerie Enlisted',
		subtitle: 'Visuels Enlisted — loadouts, combats d\'escouade et raid — avec ESP, radar et Aimbot.',
		lead: 'Enlisted Hacks suit la boucle BR de Enlisted : lire la carte, suivre les escouades, loot et survivre au extract.',
		highlights: [
			{ title: 'ESP players & escouades', copy: 'Repérez les players ennemis sur Customs et scav-run pour choisir vos engagements.' },
			{ title: 'Marqueurs loot & coffres', copy: 'Mettez en évidence loadouts, coffres et loot haut niveau sans encombrer l\'écran.' },
			{ title: 'Réglages Aimbot Enlisted', copy: 'Ajustez fluidité, priorité cible et raccourcis pour AR, SMG et sniper.' },
		],
		updatesLabel: 'Mises à jour Enlisted Hacks',
		updatesShort: 'Updates',
	},
	de: {
		eyebrow: 'Enlisted Hacks',
		title: 'Enlisted Galerie',
		subtitle: 'Enlisted-Bilder zu Loadouts, Squad-Kämpfen und raid — mit ESP, Radar und Aimbot.',
		lead: 'Enlisted Hacks passt zur Raid-Schleife von Enlisted: Karte lesen, Gegner-Trupps tracken, looten und Extract überleben.',
		highlights: [
			{ title: 'Player- & Squad-ESP', copy: 'Erkenne feindliche Playeren auf Customs und scav-run für bessere Rotationsentscheidungen.' },
			{ title: 'Loot- & Vertragsmarker', copy: 'Hebe Loadout-Drops, Verträge und High-Tier-Loot hervor ohne Screen-Spam.' },
			{ title: 'Enlisted Aimbot Steuerung', copy: 'Feinjustiere Glätte, Zielpriorität und Hotkeys für AR, SMG und Sniper.' },
		],
		updatesLabel: 'Enlisted Hacks Updates',
		updatesShort: 'Updates',
	},
	pt: {
		eyebrow: 'Enlisted Hacks',
		title: 'Galeria Enlisted',
		subtitle: 'Visuais de Enlisted com loadouts, combates de esquadrão e raid — com ESP, radar e Aimbot.',
		lead: 'Enlisted Hacks segue o loop BR do Enlisted: ler o mapa, rastrear esquadrões, lootar e sobreviver ao extract.',
		highlights: [
			{ title: 'ESP de players e esquadrões', copy: 'Detecte players inimigos em Customs e scav-run para escolher lutas com melhor intel.' },
			{ title: 'Marcadores de loot e cofres', copy: 'Destaque loadouts, cofres e loot de alto nível sem poluir a tela.' },
			{ title: 'Controles Aimbot Enlisted', copy: 'Ajuste suavidade, prioridade de alvo e atalhos para AR, SMG e sniper.' },
		],
		updatesLabel: 'Atualizações Enlisted Hacks',
		updatesShort: 'Updates',
	},
	it: {
		eyebrow: 'Enlisted Hacks',
		title: 'Galleria Enlisted',
		subtitle: 'Immagini Enlisted — loadout, scontri di squadra e raid — con ESP, radar e Aimbot.',
		lead: 'Enlisted Hacks è pensato per il loop BR di Enlisted: leggere la mappa, tracciare squadre nemiche, loot e sopravvivere al extract.',
		highlights: [
			{ title: 'ESP playeri e squadre', copy: 'Individua playeri nemici su Customs e scav-run per scegliere i fight con più intel.' },
			{ title: 'Marker loot e coffreti', copy: 'Evidenzia loadout, coffreti e loot di alto livello senza riempire lo schermo.' },
			{ title: 'Controlli Aimbot Enlisted', copy: 'Regola smoothness, priorità bersaglio e hotkey per AR, SMG e sniper.' },
		],
		updatesLabel: 'Aggiornamenti Enlisted Hacks',
		updatesShort: 'Updates',
	},
	nl: {
		eyebrow: 'Enlisted Hacks',
		title: 'Enlisted galerij',
		subtitle: 'Enlisted-beelden van loadouts, squadgevechten en raid — met ESP, radar en Aimbot.',
		lead: 'Enlisted Hacks volgt de raid-loop van Enlisted: kaart lezen, vijandelijke squads volgen, looten en de extract overleven.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spot vijandelijke players op Customs en scav-run voor betere rotatiebeslissingen.' },
			{ title: 'Loot- & chestmarkers', copy: 'Markeer loadout-drops, chesten en high-tier loot zonder schermoverlast.' },
			{ title: 'Enlisted Aimbot instellingen', copy: 'Stel smoothness, doelprioriteit en hotkeys af voor AR, SMG en sniper.' },
		],
		updatesLabel: 'Enlisted Hacks updates',
		updatesShort: 'Updates',
	},
	pl: {
		eyebrow: 'Enlisted Hacks',
		title: 'Galeria Enlisted',
		subtitle: 'Grafiki Enlisted — loadouty, walki drużynowe i raid — z ESP, radar i Aimbot.',
		lead: 'Enlisted Hacks pasuje do pętli BR Enlisted: czytaj mapę, śledź wrogie drużyny, lootuj i przeżyj extract.',
		highlights: [
			{ title: 'ESP players i drużyn', copy: 'Wykrywaj wrogich players na Customs i scav-run dla lepszych decyzji rotacyjnych.' },
			{ title: 'Markery lootu i skrzyń', copy: 'Podświetlaj loadouty, petity i wysokiej klasy loot bez zaśmiecania ekranu.' },
			{ title: 'Sterowanie Aimbot Enlisted', copy: 'Dostosuj płynność, priorytet celu i skróty dla AR, SMG i snajperki.' },
		],
		updatesLabel: 'Aktualizacje Enlisted Hacks',
		updatesShort: 'Updates',
	},
	ru: {
		eyebrow: 'Enlisted Hacks',
		title: 'Галерея Enlisted',
		subtitle: 'Визуалы Enlisted — лоадауты, бои отрядов и raid — с ESP, радаром и Aimbot.',
		lead: 'Enlisted Hacks создан для рейд-циклу Enlisted: читать карту, отслеживать вражеские отряды, лут и выживать в extract.',
		highlights: [
			{ title: 'ESP игроков и отрядов', copy: 'Замечайте вражеских игроков на Customs и scav-run для лучших решений по ротации.' },
			{ title: 'Маркеры лута и сундуков', copy: 'Подсвечивайте loadout, сундуки и высокий лут без перегрузки экрана.' },
			{ title: 'Настройки Aimbot Enlisted', copy: 'Настройте плавность, приоритет цели и горячие клавиши для AR, SMG и снайперки.' },
		],
		updatesLabel: 'Обновления Enlisted Hacks',
		updatesShort: 'Updates',
	},
	tr: {
		eyebrow: 'Enlisted Hacks',
		title: 'Enlisted galerisi',
		subtitle: 'Loadout, takım savaşları ve raid görselleri — ESP, radar ve Aimbot ile.',
		lead: 'Enlisted Hacks, Enlisted BR döngüsü için: haritayı oku, düşman takımları izle, loot al ve extract\'da hayatta kal.',
		highlights: [
			{ title: 'Player ve takım ESP', copy: 'Customs ve scav-run\'da düşman playerleri görerek daha iyi rotasyon kararları alın.' },
			{ title: 'Loot ve kontrat işaretleri', copy: 'Loadout, kontrat ve üst seviye loot\'u ekranı doldurmadan vurgulayın.' },
			{ title: 'Enlisted Aimbot kontrolleri', copy: 'AR, SMG ve sniper için yumuşaklık, hedef önceliği ve kısayolları ayarlayın.' },
		],
		updatesLabel: 'Enlisted Hacks güncellemeleri',
		updatesShort: 'Updates',
	},
	ar: {
		eyebrow: 'Enlisted Hacks',
		title: 'معرض Enlisted',
		subtitle: 'صور Enlisted — loadouts ومعارك الفرق وraid — مع ESP ورادار وAimbot.',
		lead: 'Enlisted Hacks مبني لحلقة BR في Enlisted: قراءة الخريطة، تتبع الفرق، جمع اللوت والنجاة في extract.',
		highlights: [
			{ title: 'ESP للمشغلين والفرق', copy: 'اكتشف players المعادين على Customs وscav-run لاختيار القتالات بذكاء.' },
			{ title: 'علامات اللوت والصناديق', copy: 'أبرز loadouts والصناديق واللوت العالي دون ازدحام الشاشة.' },
			{ title: 'تحكم Aimbot Enlisted', copy: 'اضبط النعومة وأولوية الهدف والاختصارات للـ AR وSMG والقناص.' },
		],
		updatesLabel: 'تحديثات Enlisted Hacks',
		updatesShort: 'Updates',
	},
	ja: {
		eyebrow: 'Enlisted Hacks',
		title: 'Enlisted ギャラリー',
		subtitle: 'ロードアウト、スクワッド戦、BRコンバットのEnlistedビジュアル — ESP、レーダー、エイムボット付き。',
		lead: 'Enlisted HacksはEnlistedのBRループ向け：マップを読み、敵スクワッドを追跡し、ルートしてextractを生き延びる。',
		highlights: [
			{ title: 'players＆スクワッドESP', copy: 'Customsとscav-runで敵playersを把握し、ローテ判断を改善。' },
			{ title: 'ルート＆チェストマーカー', copy: 'ロードアウト、チェスト、高ティアルートを画面を埋めずに表示。' },
			{ title: 'Enlistedエイムボット設定', copy: 'AR、SMG、スナイパー向けにスムーズさ、ターゲット優先度、ホットキーを調整。' },
		],
		updatesLabel: 'Enlisted Hacks更新',
		updatesShort: 'Updates',
	},
	ko: {
		eyebrow: 'Enlisted Hacks',
		title: 'Enlisted 갤러리',
		subtitle: '로드아웃, 스쿼드 전투, BR 컴뱃 Enlisted 비주얼 — ESP, 레이더, 에임봇 포함.',
		lead: 'Enlisted Hacks는 Enlisted BR 루프용: 맵 읽기, 적 스쿼드 추적, 루트 수집, extract 생존.',
		highlights: [
			{ title: 'players & 스쿼드 ESP', copy: 'Customs와 scav-run에서 적 players를 파악해 로테이션 결정을 개선.' },
			{ title: '루트 & 상자 마커', copy: '로드아웃, 상자, 고티어 루트를 화면을 가리지 않고 강조.' },
			{ title: 'Enlisted 에임봇 컨트롤', copy: 'AR, SMG, 스나이퍼용 부드러움, 타겟 우선순위, 단축키 조정.' },
		],
		updatesLabel: 'Enlisted Hacks 업데이트',
		updatesShort: 'Updates',
	},
	zh: {
		eyebrow: 'Enlisted Hacks',
		title: 'Enlisted 图库',
		subtitle: 'Enlisted 视觉 — 配装、小队战斗和大逃杀 — 配合 ESP、雷达和自瞄。',
		lead: 'Enlisted Hacks 为 Enlisted BR 循环设计：读图、追踪敌方小队、搜刮并在 extract 存活。',
		highlights: [
			{ title: 'players与小队 ESP', copy: '在 Customs 和 scav-run 发现敌方players，做出更好的转点决策。' },
			{ title: '物资与宝箱标记', copy: '高亮配装、宝箱和高级物资，不遮挡屏幕。' },
			{ title: 'Enlisted 自瞄控制', copy: '调整 AR、SMG 和狙击的平滑度、目标优先级和热键。' },
		],
		updatesLabel: 'Enlisted Hacks 更新',
		updatesShort: 'Updates',
	},
	hi: {
		eyebrow: 'Enlisted Hacks',
		title: 'Enlisted गैलरी',
		subtitle: 'Loadout, squad fights और raid visuals — ESP, radar और Aimbot के साथ।',
		lead: 'Enlisted Hacks Enlisted BR loop के लिए: map पढ़ें, enemy squads track करें, loot करें और extract survive करें।',
		highlights: [
			{ title: 'Player & Squad ESP', copy: 'Customs और scav-run पर enemy players spot करें बेहतर rotation decisions के लिए।' },
			{ title: 'Loot & Chest Markers', copy: 'Loadout drops, chests और high-tier loot highlight करें screen clutter के बिना।' },
			{ title: 'Enlisted Aimbot Controls', copy: 'AR, SMG और sniper के लिए smoothness, target priority और hotkeys tune करें।' },
		],
		updatesLabel: 'Enlisted Hacks updates',
		updatesShort: 'Updates',
	},
	id: {
		eyebrow: 'Enlisted Hacks',
		title: 'Galeri Enlisted',
		subtitle: 'Visual Enlisted — loadout, pertempuran squad, dan raid — dengan ESP, radar, dan Aimbot.',
		lead: 'Enlisted Hacks untuk loop BR Enlisted: baca peta, lacak squad musuh, loot, dan selamat di extract.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Deteksi player musuh di Customs dan scav-run untuk keputusan rotasi lebih baik.' },
			{ title: 'Marker loot & peti', copy: 'Sorot loadout, peti, dan loot tier tinggi tanpa membanjiri layar.' },
			{ title: 'Kontrol Aimbot Enlisted', copy: 'Atur smoothness, prioritas target, dan hotkey untuk AR, SMG, dan sniper.' },
		],
		updatesLabel: 'Update Enlisted Hacks',
		updatesShort: 'Updates',
	},
	th: {
		eyebrow: 'Enlisted Hacks',
		title: 'แกลเลอรี Enlisted',
		subtitle: 'ภาพ Enlisted — loadout การต่อสู้ทีม และ raid — พร้อม ESP เรดาร์และ Aimbot',
		lead: 'Enlisted Hacks สำหรับลูป BR ของ Enlisted: อ่านแผนที่ ติดตามทีมศัตรู เก็บ loot และรอด extract',
		highlights: [
			{ title: 'ESP ผู้เล่นและทีม', copy: 'มองเห็นศัตรูบน Customs และ scav-run เพื่อตัดสินใจหมุนเวียนได้ดีขึ้น' },
			{ title: 'มาร์กเกอร์ loot และหีบ', copy: 'เน้น loadout หีบและ loot ระดับสูงโดยไม่รกหน้าจอ' },
			{ title: 'ควบคุม Aimbot Enlisted', copy: 'ปรับความนุ่ม ลำดับเป้าหมาย และ hotkey สำหรับ AR SMG และ sniper' },
		],
		updatesLabel: 'อัปเดต Enlisted Hacks',
		updatesShort: 'Updates',
	},
	vi: {
		eyebrow: 'Enlisted Hacks',
		title: 'Thư viện Enlisted',
		subtitle: 'Hình ảnh Enlisted — loadout, chiến đấu squad và raid — với ESP, radar và Aimbot.',
		lead: 'Enlisted Hacks cho vòng BR Enlisted: đọc bản đồ, theo dõi squad địch, loot và sống sót extract.',
		highlights: [
			{ title: 'ESP player & squad', copy: 'Phát hiện player địch trên Customs và scav-run để quyết định rotate tốt hơn.' },
			{ title: 'Đánh dấu loot & rương', copy: 'Làm nổi bật loadout, rương và loot cao cấp mà không che màn hình.' },
			{ title: 'Điều khiển Aimbot Enlisted', copy: 'Tinh chỉnh độ mượt, ưu tiên mục tiêu và phím tắt cho AR, SMG và sniper.' },
		],
		updatesLabel: 'Cập nhật Enlisted Hacks',
		updatesShort: 'Updates',
	},
	uk: {
		eyebrow: 'Enlisted Hacks',
		title: 'Галерея Enlisted',
		subtitle: 'Візуали Enlisted — loadout, бої загонів і raid — з ESP, радаром і Aimbot.',
		lead: 'Enlisted Hacks для рейд-циклу Enlisted: читати карту, відстежувати ворожі загони, лут і виживати в extract.',
		highlights: [
			{ title: 'ESP гравців і загонів', copy: 'Помічайте ворожих гравців на Customs і scav-run для кращих ротацій.' },
			{ title: 'Маркери луту й скринь', copy: 'Підсвічуйте loadout, контракти та високий лут без перевантаження екрана.' },
			{ title: 'Налаштування Aimbot Enlisted', copy: 'Налаштуйте плавність, пріоритет цілі та гарячі клавіші для AR, SMG і снайперки.' },
		],
		updatesLabel: 'Оновлення Enlisted Hacks',
		updatesShort: 'Updates',
	},
	cs: {
		eyebrow: 'Enlisted Hacks',
		title: 'Galerie Enlisted',
		subtitle: 'Enlisted vizuály — loadouty, squad souboje a raid — s ESP, radarem a Aimbot.',
		lead: 'Enlisted Hacks pro BR smyčku Enlisted: číst mapu, sledovat nepřátelské squady, loot a přežít extract.',
		highlights: [
			{ title: 'ESP players a squadů', copy: 'Spozorujte nepřátelské operátory na Customs a scav-run pro lepší rotační rozhodnutí.' },
			{ title: 'Markery lootu a petitů', copy: 'Zvýrazněte loadouty, petity a high-tier loot bez přeplnění obrazovky.' },
			{ title: 'Ovládání Aimbot Enlisted', copy: 'Nastavte smoothness, prioritu cíle a hotkeys pro AR, SMG a sniper.' },
		],
		updatesLabel: 'Aktualizace Enlisted Hacks',
		updatesShort: 'Updates',
	},
	ro: {
		eyebrow: 'Enlisted Hacks',
		title: 'Galerie Enlisted',
		subtitle: 'Vizualuri Enlisted — loadout, lupte de squad și raid — cu ESP, radar și Aimbot.',
		lead: 'Enlisted Hacks pentru bucla BR Enlisted: citește harta, urmărește squad-uri inamice, loot și supraviețuiește extract.',
		highlights: [
			{ title: 'ESP playeri și squad-uri', copy: 'Detectează playeri inamici pe Customs și scav-run pentru decizii de rotație mai bune.' },
			{ title: 'Markere loot și cheste', copy: 'Evidențiază loadout-uri, cheste și loot de nivel înalt fără a aglomera ecranul.' },
			{ title: 'Controale Aimbot Enlisted', copy: 'Ajustează smoothness, prioritate țintă și hotkeys pentru AR, SMG și sniper.' },
		],
		updatesLabel: 'Actualizări Enlisted Hacks',
		updatesShort: 'Updates',
	},
	sv: {
		eyebrow: 'Enlisted Hacks',
		title: 'Enlisted galleri',
		subtitle: 'Enlisted-bilder — loadouts, squadstrider och raid — med ESP, radar och Aimbot.',
		lead: 'Enlisted Hacks för Enlisted:s raid-loop: läs kartan, spåra fiendesquads, loota och överlev extract.',
		highlights: [
			{ title: 'Player- & squad-ESP', copy: 'Spotta fiendeplayerer på Customs och scav-run för bättre rotationsbeslut.' },
			{ title: 'Loot- & petitsmarkörer', copy: 'Markera loadout-drops, petit och high-tier loot utan skärmklutter.' },
			{ title: 'Enlisted Aimbot-kontroller', copy: 'Justera smoothness, målprioritet och snabbtangenter för AR, SMG och sniper.' },
		],
		updatesLabel: 'Enlisted Hacks uppdateringar',
		updatesShort: 'Updates',
	},
};

export function getGalleryUi(locale: LocaleCode): GalleryUi {
	return galleryUi[locale];
}
