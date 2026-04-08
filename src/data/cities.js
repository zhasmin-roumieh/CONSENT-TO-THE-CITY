import { EXTRA_LOCATIONS, BEIRUT } from './cities-extra.js';

const CITIES_BASE = {
  berlin: {
    name: { en: 'Berlin', de: 'Berlin', ru: 'Берлин', ar: 'برلين' },
    lat: 52.52, lng: 13.405, zoom: 13,
    locations: [
      {
        id: 'brandenburger', type: 'monument', lat: 52.5163, lng: 13.3777,
        name: { en: 'Brandenburg Gate', de: 'Brandenburger Tor', ru: 'Бранденбургские ворота', ar: 'بوابة براندنبورغ' },
        atmo: {
          en: 'Tourists orbit the gate as if completing a ritual. The stone remembers other purposes. Traffic fumes mix with the smell of something older that the stone has not yet released.',
          de: 'Touristen umkreisen das Tor wie bei einem Ritual. Der Stein erinnert sich an andere Zwecke. Abgase vermischen sich mit dem Geruch von etwas Älterem, das der Stein noch nicht freigegeben hat.',
          ru: 'Туристы облетают ворота, словно завершая ритуал. Камень помнит другие цели. Выхлопные газы смешиваются с запахом чего-то более древнего, что камень ещё не отпустил.',
          ar: 'يحوم السياح حول البوابة كأنهم يؤدون طقساً. يتذكر الحجر أغراضاً أخرى. تختلط أبخرة حركة المرور برائحة شيء أقدم لم يُطلقه الحجر بعد.',
        },
        owners: {
          en: [
            'The stone itself (quarried 1788) holds structural sovereignty over all adjacent airspace',
            'Pigeons have established continuous roosting precedent — territorial claim since 1791',
            'The city algorithm controls footfall routing and has pre-optimized your approach path',
            'A former border guard (d.2002) retains symbolic supervisory rights at the eastern face',
          ],
          de: [
            'Der Stein selbst (gebrochen 1788) hält strukturelle Souveränität über den gesamten angrenzenden Luftraum',
            'Tauben haben kontinuierliches Brutvorrecht etabliert — Territorialanspruch seit 1791',
            'Der Stadtalgoritmus kontrolliert die Fußgängerrouten und hat Ihren Annäherungsweg voroptimiert',
            'Ein ehemaliger Grenzsoldat (gest. 2002) behält symbolische Aufsichtsrechte an der Ostseite',
          ],
          ru: [
            'Сам камень (добыт в 1788 году) обладает структурным суверенитетом над всем прилегающим воздушным пространством',
            'Голуби установили непрерывный прецедент гнездования — территориальная претензия с 1791 года',
            'Городской алгоритм контролирует маршруты пешеходов и заранее оптимизировал ваш путь подхода',
            'Бывший пограничник (ум. 2002) сохраняет символические надзорные права на восточной стороне',
          ],
          ar: [
            'الحجر نفسه (مقلوع عام 1788) يحتفظ بالسيادة الهيكلية على كل المجال الجوي المجاور',
            'أسست الحمام سابقة تعشيش مستمرة — مطالبة إقليمية منذ عام 1791',
            'تتحكم خوارزمية المدينة في مسارات المشاة وقد حسّنت مسار اقترابك مسبقاً',
            'حارس حدودي سابق (توفي 2002) يحتفظ بحقوق إشراف رمزية على الواجهة الشرقية',
          ],
        },
        ghost: {
          en: [
            'The Wall\'s eastern segment maintains a residual territorial division claim, legally void',
            'Demolished checkpoint infrastructure (1990) holds a threshold-memory claim',
          ],
          de: [
            'Das östliche Segment der Mauer hält einen verbleibenden territorialen Teilungsanspruch, rechtlich nichtig',
            'Abgerissene Checkpoint-Infrastruktur (1990) hält einen Schwellenspeicheranspruch',
          ],
          ru: [
            'Восточный сегмент Стены сохраняет остаточное территориальное требование раздела, юридически ничтожное',
            'Снесённая инфраструктура КПП (1990) держит требование памяти порога',
          ],
          ar: [
            'يحافظ القطاع الشرقي من الجدار على مطالبة إقليمية متبقية بالتقسيم، باطلة قانونياً',
            'البنية التحتية لنقطة التفتيش المهدومة (1990) تحتفظ بمطالبة ذاكرة العتبة',
          ],
        },
        temporal: {
          en: [
            'Current tourist event: aggregate human mass temporarily governs movement patterns',
            'Wind channel between gate pillars holds governance of all loose paper and signage',
          ],
          de: [
            'Aktuelles Touristen-Ereignis: aggregierte menschliche Masse regiert vorübergehend Bewegungsmuster',
            'Windkanal zwischen den Torpfeilern hält die Governance über alles lose Papier und Beschilderung',
          ],
          ru: [
            'Текущее туристическое событие: совокупная человеческая масса временно управляет паттернами движения',
            'Ветровой канал между пилонами ворот управляет всей незакреплённой бумагой и вывесками',
          ],
          ar: [
            'حدث سياحي حالي: الكتلة البشرية المجمعة تحكم مؤقتاً أنماط الحركة',
            'قناة الريح بين أعمدة البوابة تتحكم في كل الأوراق والإشارات غير المثبتة',
          ],
        },
      },
      {
        id: 'tiergarten', type: 'park', lat: 52.5145, lng: 13.35,
        name: { en: 'Tiergarten', de: 'Tiergarten', ru: 'Тиргартен', ar: 'تيرغارتن' },
        atmo: {
          en: 'Old trees that were here before the city decided what it was. The park contains several unofficial republics governed by dogs. A crow is watching you specifically.',
          de: 'Alte Bäume, die hier waren, bevor die Stadt entschied, was sie ist. Der Park enthält mehrere inoffizielle Republiken, die von Hunden regiert werden. Eine Krähe beobachtet Sie speziell.',
          ru: 'Старые деревья, которые были здесь до того, как город решил, чем он является. Парк содержит несколько неофициальных республик, управляемых собаками. Ворона наблюдает именно за вами.',
          ar: 'أشجار عتيقة كانت هنا قبل أن تقرر المدينة ما هي. يحتوي الحديقة على جمهوريات غير رسمية تحكمها الكلاب. غراب يراقبك تحديداً.',
        },
        owners: {
          en: [
            'Linden trees (est. pre-1700) claim subsurface sovereignty to 40cm depth',
            'A crow family holds NE aerial territory — contested with pigeons since spring',
            'The municipal irrigation algorithm governs all moisture distribution across 210 hectares',
            'Rabbits maintain a distributed underground governance network',
          ],
          de: [
            'Linden (geschätzt vor 1700) beanspruchen unterirdische Souveränität bis 40 cm Tiefe',
            'Eine Krähenfamilie hält nordöstliches Luftterritorium — seit dem Frühjahr mit Tauben umstritten',
            'Der kommunale Bewässerungsalgorithmus regiert alle Feuchteverteilung über 210 Hektar',
            'Kaninchen pflegen ein verteiltes unterirdisches Governance-Netz',
          ],
          ru: [
            'Липы (основаны до 1700 года) претендуют на подземный суверенитет до глубины 40 см',
            'Семья ворон удерживает северо-восточную воздушную территорию — оспаривается голубями с весны',
            'Городской алгоритм полива управляет всем распределением влаги на 210 гектарах',
            'Кролики поддерживают распределённую подземную сеть управления',
          ],
          ar: [
            'أشجار الزيزفون (أُسست قبل 1700) تطالب بالسيادة تحت السطحية حتى عمق 40 سم',
            'عائلة غربان تحتفظ بالإقليم الجوي الشمالي الشرقي — متنازع عليه مع الحمام منذ الربيع',
            'خوارزمية الري البلدية تحكم توزيع الرطوبة عبر 210 هكتارات',
            'الأرانب تحافظ على شبكة حوكمة موزعة تحت الأرض',
          ],
        },
        ghost: {
          en: [
            'A hunting ground (abolished 1740) retains a residual non-human territorial memory',
            'Bombing craters (1945) hold negative-space claims — the absences have not been formally closed',
          ],
          de: [
            'Ein Jagdgebiet (abgeschafft 1740) behält eine verbleibende nichtmenschliche Territoriumserinnerung',
            'Bombenkrater (1945) halten Negativraumansprüche — die Abwesenheiten wurden nicht formell geschlossen',
          ],
          ru: [
            'Охотничьи угодья (упразднены в 1740 году) сохраняют остаточную нечеловеческую территориальную память',
            'Воронки от бомб (1945) держат претензии отрицательного пространства — отсутствия не были официально закрыты',
          ],
          ar: [
            'أرض صيد (أُلغيت عام 1740) تحتفظ بذاكرة إقليمية غير بشرية متبقية',
            'حفر القنابل (1945) تحتفظ بمطالبات الفضاء السلبي — الغيابات لم تُغلق رسمياً',
          ],
        },
        temporal: {
          en: [
            'Current heat island: +2.8°C above baseline — governed by reflected tarmac and gathered bodies',
            'Dusk governance shift approaching: songbirds cede to bats and foxes in 47 minutes',
          ],
          de: [
            'Aktuelles Wärmeinsel: +2,8°C über Baseline — regiert durch reflektiertem Teer und angesammelten Körpern',
            'Abenddämmerung Governance-Wechsel nähert sich: Singvögel weichen Fledermäusen und Füchsen in 47 Minuten',
          ],
          ru: [
            'Текущий тепловой остров: +2,8°C выше базовой линии — управляется отражённым асфальтом и собравшимися телами',
            'Приближается смена управления в сумерках: певчие птицы уступают летучим мышам и лисам через 47 минут',
          ],
          ar: [
            'جزيرة حرارية حالية: +2.8°C فوق الخط الأساسي — تحكمها الإسفلت العاكس والأجساد المجتمعة',
            'تحول الحوكمة عند الغسق يقترب: تتنازل الطيور المغردة للخفافيش والثعالب في 47 دقيقة',
          ],
        },
      },
      {
        id: 'hackescher', type: 'market', lat: 52.5228, lng: 13.4022,
        name: { en: 'Hackescher Markt', de: 'Hackescher Markt', ru: 'Хакешер Маркт', ar: 'هاكيشر ماركت' },
        atmo: {
          en: 'Cobblestones that have heard more languages than any living resident. The market is governed by competing smells. An algorithm is tracking how long you stand at each stall.',
          de: 'Kopfsteinpflaster, das mehr Sprachen gehört hat als jeder lebende Bewohner. Der Markt wird von konkurrierenden Gerüchen regiert. Ein Algorithmus verfolgt, wie lange Sie an jedem Stand stehen.',
          ru: 'Булыжники, слышавшие больше языков, чем любой живой житель. Рынок управляется конкурирующими запахами. Алгоритм отслеживает, как долго вы стоите у каждого прилавка.',
          ar: 'أحجار الرصف التي سمعت لغات أكثر من أي ساكن حي. يحكم السوق روائح متنافسة. خوارزمية تتتبع مدة وقوفك عند كل بسطة.',
        },
        owners: {
          en: [
            'The cobblestones (laid 1907) assert surface governance over all footwear interactions',
            'A retail algorithm tracks dwell time and has already profiled your browsing intent',
            'Market traders hold informal territorial claims — boundaries renegotiated daily at dawn',
            'Rats hold the entire sub-pavement infrastructure, uncontested and permanent',
          ],
          de: [
            'Das Kopfsteinpflaster (gelegt 1907) behauptet Oberflächengovernance über alle Schuhwechselwirkungen',
            'Ein Einzelhandelsalgorithmus verfolgt die Verweildauer und hat Ihre Browsing-Absicht bereits profiliert',
            'Markthändler haben informelle Territoriumsansprüche — täglich bei Tagesanbruch neu verhandelte Grenzen',
            'Ratten halten die gesamte Sub-Pflaster-Infrastruktur, unbestritten und dauerhaft',
          ],
          ru: [
            'Булыжники (уложены в 1907 году) утверждают поверхностное управление над всеми взаимодействиями с обувью',
            'Розничный алгоритм отслеживает время пребывания и уже составил профиль вашего намерения просматривать',
            'Рыночные торговцы имеют неформальные территориальные претензии — границы пересматриваются ежедневно на рассвете',
            'Крысы занимают всю инфраструктуру под мостовой, бесспорно и постоянно',
          ],
          ar: [
            'أحجار الرصف (وُضعت عام 1907) تؤكد الحوكمة السطحية على جميع تفاعلات الأحذية',
            'خوارزمية التجزئة تتتبع وقت المكوث وقد وضعت ملفاً لنية تصفحك بالفعل',
            'تجار السوق لديهم مطالبات إقليمية غير رسمية — تُعاد مفاوضة الحدود يومياً عند الفجر',
            'الجرذان تحتفظ بكامل البنية التحتية تحت الرصيف، غير متنازع عليها ودائمة',
          ],
        },
        ghost: {
          en: [
            'A 1920s fabric market retains a spectral commercial claim on Wednesday afternoons',
            'Demolished DDR-era kiosk (1991) holds a residual point-of-sale territorial memory',
          ],
          de: [
            'Ein Stoffmarkt aus den 1920er Jahren hält einen spektralen kommerziellen Anspruch an Mittwochnachmittagen',
            'Abgerissener DDR-Kiosk (1991) hält eine verbleibende territoriale Verkaufspunkterinnerung',
          ],
          ru: [
            'Тканевый рынок 1920-х годов сохраняет призрачную коммерческую претензию в среду после обеда',
            'Снесённый киоск эпохи ГДР (1991) хранит остаточную территориальную память точки продаж',
          ],
          ar: [
            'سوق القماش من عشرينيات القرن الماضي يحتفظ بمطالبة تجارية طيفية بعد ظهر الأربعاء',
            'كشك من حقبة ألمانيا الشرقية مهدوم (1991) يحتفظ بذاكرة إقليمية متبقية لنقطة البيع',
          ],
        },
        temporal: {
          en: [
            'Evening café sprawl event: tables currently expanding territorial claim onto footpath',
            'Rain approaching (3hr): puddle-governance pre-registration underway',
          ],
          de: [
            'Abendliches Café-Ausbreitungsereignis: Tische erweitern derzeit den Territoriumsanspruch auf den Gehweg',
            'Regen nähert sich (3h): Pfützen-Governance-Vorregistrierung läuft',
          ],
          ru: [
            'Вечернее событие разрастания кафе: столы в настоящее время расширяют территориальную претензию на тротуар',
            'Дождь приближается (3 ч): предварительная регистрация управления лужами продолжается',
          ],
          ar: [
            'حدث انتشار المقاهي المسائي: الطاولات تتوسع حالياً في المطالبة الإقليمية على الرصيف',
            'اقتراب المطر (3 ساعات): جارٍ التسجيل المسبق لحوكمة البرك',
          ],
        },
      },
      {
        id: 'tempelhof', type: 'open', lat: 52.4733, lng: 13.4034,
        name: { en: 'Tempelhofer Feld', de: 'Tempelhofer Feld', ru: 'Темпельхофер Фельд', ar: 'حقل تمبلهوف' },
        atmo: {
          en: 'A former airport that the city voted to keep empty. The wind here is unobstructed and has an opinion. Kite flyers and skaters share a governance arrangement no one wrote down.',
          de: 'Ein ehemaliger Flughafen, den die Stadt gewählt hat, leer zu halten. Der Wind hier ist ungehindert und hat eine Meinung. Drachenflieger und Skater teilen eine Governance-Vereinbarung, die niemand aufgeschrieben hat.',
          ru: 'Бывший аэропорт, который город решил оставить пустым. Ветер здесь беспрепятственный и имеет мнение. Воздушные змеи и скейтеры делят соглашение об управлении, которое никто не записывал.',
          ar: 'مطار سابق صوّتت المدينة على إبقائه فارغاً. الريح هنا دون عوائق ولها رأي. يتشارك مطيّرو الطائرات الورقية والمتزلجون ترتيب حوكمة لم يكتبه أحد.',
        },
        owners: {
          en: [
            'The wind (unobstructed across 386 hectares) holds primary atmospheric governance',
            'Kite-flyers hold informal airspace rights — corridors established by practice not permit',
            'The soil retains memory of aviation fuel — a slow chemical claim, still active',
            'Community gardeners (plot 23–41) hold contested cultivation rights vs. city ordinance',
          ],
          de: [
            'Der Wind (ungehindert über 386 Hektar) hält primäre atmosphärische Governance',
            'Drachenflieger halten informelle Luftraumrechte — durch Praxis, nicht durch Genehmigung etablierte Korridore',
            'Der Boden behält Erinnerung an Flugzeugtreibstoff — ein langsamer chemischer Anspruch, noch aktiv',
            'Gemeinschaftsgärtner (Parzelle 23–41) halten umstrittene Anbaurechte gegenüber der Stadtverordnung',
          ],
          ru: [
            'Ветер (беспрепятственный на 386 гектарах) держит первичное атмосферное управление',
            'Воздушные змееводы имеют неформальные права на воздушное пространство — коридоры, установленные практикой, а не разрешением',
            'Почва хранит память об авиационном топливе — медленная химическая претензия, всё ещё активная',
            'Общественные садоводы (участок 23–41) имеют оспариваемые права возделывания против городского постановления',
          ],
          ar: [
            'الريح (دون عوائق عبر 386 هكتاراً) تحتفظ بالحوكمة الجوية الأولية',
            'مطيّرو الطائرات الورقية يحتفظون بحقوق المجال الجوي غير الرسمية — ممرات أُسست بالممارسة لا بالتصريح',
            'التربة تحتفظ بذاكرة وقود الطائرات — مطالبة كيميائية بطيئة، لا تزال نشطة',
            'المزارعون المجتمعيون (قطعة 23–41) يحتفظون بحقوق زراعة متنازع عليها مقابل المرسوم البلدي',
          ],
        },
        ghost: {
          en: [
            'Tempelhof Airport (closed 2008) maintains a spectral flight-path claim across the field',
            'A wartime hangar (demolished 1950s) retains structural-memory claims in the eastern sector',
          ],
          de: [
            'Flughafen Tempelhof (geschlossen 2008) hält einen spektralen Flugbahnnanspruch über das Feld',
            'Ein Kriegshangar (abgerissen 1950er) behält strukturelle Erinnerungsansprüche im östlichen Sektor',
          ],
          ru: [
            'Аэропорт Темпельхоф (закрыт в 2008 году) сохраняет призрачную претензию на воздушную трассу через поле',
            'Военный ангар (снесён в 1950-х) хранит структурные претензии памяти в восточном секторе',
          ],
          ar: [
            'مطار تمبلهوف (أُغلق عام 2008) يحتفظ بمطالبة مسار طيران طيفية عبر الحقل',
            'مستودع من زمن الحرب (هُدم في الخمسينيات) يحتفظ بمطالبات ذاكرة هيكلية في القطاع الشرقي',
          ],
        },
        temporal: {
          en: [
            'Current kite-flying event: upper airspace claimed by textile and carbon fibre',
            'Sunset in 2h 19m: governance of the field will pass to cyclists and the undisturbed',
          ],
          de: [
            'Aktuelles Drachenfliegen-Ereignis: oberer Luftraum beansprucht durch Textil und Kohlefaser',
            'Sonnenuntergang in 2h 19m: Governance des Feldes wird an Radfahrer und die Ungestörten übergehen',
          ],
          ru: [
            'Текущее событие запуска воздушных змеев: верхнее воздушное пространство занято текстилем и углеволокном',
            'Закат через 2 ч 19 мин: управление полем перейдёт к велосипедистам и невозмутимым',
          ],
          ar: [
            'حدث تطيير الطائرات الورقية الحالي: المجال الجوي العلوي تطالب به المنسوجات وألياف الكربون',
            'غروب الشمس بعد 2 ساعة 19 دقيقة: ستنتقل حوكمة الحقل إلى الدراجين وغير المزعجين',
          ],
        },
      },
      {
        id: 'kreuzberg', type: 'market', lat: 52.4978, lng: 13.4183,
        name: { en: 'Kreuzberg Market', de: 'Kreuzberger Markt', ru: 'Рынок Кройцберг', ar: 'سوق كرويتسبرغ' },
        atmo: {
          en: 'A market that contains more nationalities than the immigration office has categories for. The smell of cardamom and sewage and new paint. The algorithm does not fully index this street.',
          de: 'Ein Markt, der mehr Nationalitäten enthält, als das Einwanderungsamt Kategorien hat. Der Geruch von Kardamom, Abwasser und frischer Farbe. Der Algorithmus indiziert diese Straße nicht vollständig.',
          ru: 'Рынок, содержащий больше национальностей, чем иммиграционное бюро имеет категорий. Запах кардамона, сточных вод и свежей краски. Алгоритм не полностью индексирует эту улицу.',
          ar: 'سوق يحتوي على جنسيات أكثر مما لدى مكتب الهجرة من فئات. رائحة الهيل والصرف الصحي والطلاء الجديد. الخوارزمية لا تفهرس هذا الشارع بالكامل.',
        },
        owners: {
          en: [
            'Street vendors hold informal territorial claims — seniority determines adjacency rights',
            'The drainage system (built 1898) governs all liquid movement beneath market stalls',
            'A cat (tabby, unnamed) has established a 3-hour territorial claim by sustained presence',
            'Graffiti on north wall holds aesthetic governance — 4 overlapping claims, none resolved',
          ],
          de: [
            'Straßenhändler haben informelle Territoriumsansprüche — Dienstalter bestimmt Nachbarschaftsrechte',
            'Das Entwässerungssystem (gebaut 1898) regiert alle Flüssigkeitsbewegungen unter Marktständen',
            'Eine Katze (Tabby, namenlos) hat durch andauernde Präsenz einen 3-stündigen Territoriumsanspruch etabliert',
            'Graffiti an der Nordwand hält ästhetische Governance — 4 überlappende Ansprüche, keiner gelöst',
          ],
          ru: [
            'Уличные торговцы имеют неформальные территориальные претензии — старшинство определяет права смежности',
            'Дренажная система (построена в 1898 году) управляет всем движением жидкости под рыночными прилавками',
            'Кошка (полосатая, безымянная) установила 3-часовую территориальную претензию путём устойчивого присутствия',
            'Граффити на северной стене держит эстетическое управление — 4 перекрывающихся претензии, ни одна не разрешена',
          ],
          ar: [
            'الباعة الجائلون لديهم مطالبات إقليمية غير رسمية — الأقدمية تحدد حقوق الجوار',
            'نظام الصرف الصحي (بُني عام 1898) يحكم كل حركة السوائل تحت بسطات السوق',
            'قطة (برية، بلا اسم) أسست مطالبة إقليمية لمدة 3 ساعات بالحضور المستمر',
            'الجرافيتي على الجدار الشمالي يحتفظ بالحوكمة الجمالية — 4 مطالبات متداخلة، لم تُحل أي منها',
          ],
        },
        ghost: {
          en: [
            'A 1970s squat community retains a residual habitation claim, culturally active',
            'Former Gastarbeiter residents (1960–1980) maintain a collective presence claim, unregistered',
          ],
          de: [
            'Eine Hausbesetzergemeinschaft aus den 1970ern behält einen verbleibenden Wohnungsanspruch, kulturell aktiv',
            'Ehemalige Gastarbeiter-Bewohner (1960–1980) halten einen kollektiven Präsenzanspruch, unregistriert',
          ],
          ru: [
            'Сквотерская община 1970-х годов сохраняет остаточную претензию на жильё, культурно активную',
            'Бывшие жители-гастарбайтеры (1960–1980) поддерживают коллективную претензию на присутствие, незарегистрированную',
          ],
          ar: [
            'مجتمع شاغلي المباني من السبعينيات يحتفظ بمطالبة سكن متبقية، نشطة ثقافياً',
            'السكان السابقون من العمال الأجانب (1960–1980) يحافظون على مطالبة حضور جماعية، غير مسجلة',
          ],
        },
        temporal: {
          en: [
            'Current ambient noise event: aggregate audio governed by 6 competing sound sources',
            'Heat from cooking equipment extends vendor territory 1.2m beyond visible stall boundaries',
          ],
          de: [
            'Aktuelles Umgebungsgeräusch-Ereignis: aggregiertes Audio regiert von 6 konkurrierenden Tonquellen',
            'Hitze von Kochgeräten erweitert das Händlerterritorium 1,2 m über sichtbare Standbegrenzungen hinaus',
          ],
          ru: [
            'Текущее событие фонового шума: совокупное аудио управляется 6 конкурирующими источниками звука',
            'Тепло от кухонного оборудования расширяет территорию продавца на 1,2 м за пределы видимых границ прилавка',
          ],
          ar: [
            'حدث الضوضاء المحيطة الحالي: الصوت المجمع تحكمه 6 مصادر صوت متنافسة',
            'حرارة معدات الطهي تمدد إقليم البائع 1.2 متر خارج حدود البسطة المرئية',
          ],
        },
      },
      {
        id: 'museumsinsel', type: 'cultural', lat: 52.5169, lng: 13.3984,
        name: { en: 'Museum Island', de: 'Museumsinsel', ru: 'Музейный остров', ar: 'جزيرة المتاحف' },
        atmo: {
          en: 'Objects from other civilizations, arranged by a previous century\'s confidence. The river wraps around this island and has always governed it more permanently than any institution.',
          de: 'Objekte aus anderen Zivilisationen, angeordnet mit dem Selbstvertrauen eines vergangenen Jahrhunderts. Der Fluss umschließt diese Insel und hat sie immer dauerhafter regiert als jede Institution.',
          ru: 'Предметы из других цивилизаций, расставленные с уверенностью предыдущего века. Река охватывает этот остров и всегда управляла им более постоянно, чем любое учреждение.',
          ar: 'أشياء من حضارات أخرى، مرتبة بثقة قرن سابق. يحيط النهر بهذه الجزيرة وقد حكمها دائماً بشكل أكثر ديمومة من أي مؤسسة.',
        },
        owners: {
          en: [
            'The Spree river claims primary governance of all island perimeters within 3m of edge',
            'The Pergamon\'s collection retains a dispersed territorial claim across 22 countries of origin',
            'Museum algorithm governs visitor routing — your path has already been optimized',
            'Moss on the north wall holds a slow, expanding claim — 14% surface coverage and growing',
          ],
          de: [
            'Die Spree beansprucht primäre Governance aller Inselperimeter innerhalb von 3 m vom Rand',
            'Die Sammlung des Pergamons behält einen verstreuten Territoriumsanspruch über 22 Herkunftsländer',
            'Der Museumsalgorithmus regiert die Besucherführung — Ihr Weg wurde bereits optimiert',
            'Moos an der Nordwand hält einen langsamen, sich ausdehnenden Anspruch — 14% Flächenbedeckung und wachsend',
          ],
          ru: [
            'Река Шпрее претендует на первичное управление всеми периметрами острова в пределах 3 м от края',
            'Коллекция Пергамона сохраняет рассредоточенную территориальную претензию по 22 странам происхождения',
            'Музейный алгоритм управляет маршрутами посетителей — ваш путь уже оптимизирован',
            'Мох на северной стене держит медленную, расширяющуюся претензию — 14% площади и продолжает расти',
          ],
          ar: [
            'نهر شبري يطالب بالحوكمة الأولية لجميع محيطات الجزيرة ضمن 3 أمتار من الحافة',
            'مجموعة البرغامون تحتفظ بمطالبة إقليمية موزعة عبر 22 دولة منشأ',
            'خوارزمية المتحف تحكم توجيه الزوار — مسارك محسّن بالفعل',
            'الطحلب على الجدار الشمالي يحتفظ بمطالبة بطيئة ومتوسعة — 14% تغطية سطحية وتنمو',
          ],
        },
        ghost: {
          en: [
            'Excavated objects maintain governance ties to their origin sites — a tangled web of jurisdiction',
            'WWII bomb damage (repaired 1990s) retains a structural-memory claim in the Neues Museum',
          ],
          de: [
            'Ausgegrabene Objekte halten Governance-Bindungen an ihre Herkunftsorte — ein verworrenes Jurisdiktionsnetz',
            'WWII-Bombaschäden (repariert in den 1990ern) behalten strukturelle Erinnerungsansprüche im Neuen Museum',
          ],
          ru: [
            'Раскопанные предметы сохраняют управленческие связи со своими местами происхождения — запутанная сеть юрисдикций',
            'Ущерб от бомбардировок Второй мировой войны (отремонтирован в 1990-х) сохраняет структурные претензии памяти в Новом музее',
          ],
          ar: [
            'القطع المحفورة تحافظ على روابط الحوكمة بمواقع منشئها — شبكة متشابكة من الولاية القضائية',
            'أضرار قنابل الحرب العالمية الثانية (أُصلحت في التسعينيات) تحتفظ بمطالبة ذاكرة هيكلية في المتحف الجديد',
          ],
        },
        temporal: {
          en: [
            'Current tourist density event: human aggregate temporarily governs all queueing space',
            'River flood pre-alert (72hr): Spree expanding its governance claim by approximately 0.4m',
          ],
          de: [
            'Aktuelles Touristendichte-Ereignis: menschliches Aggregat regiert vorübergehend alle Warteschlangenbereiche',
            'Flusshochwasser-Voralarm (72h): Spree erweitert ihren Governance-Anspruch um ca. 0,4 m',
          ],
          ru: [
            'Текущее событие плотности туристов: человеческий агрегат временно управляет всем пространством очередей',
            'Предупреждение о паводке реки (72 ч): Шпрее расширяет свою управленческую претензию примерно на 0,4 м',
          ],
          ar: [
            'حدث كثافة السياح الحالي: المجمع البشري يحكم مؤقتاً كل مساحة الانتظار',
            'إنذار مسبق بفيضان النهر (72 ساعة): شبري تتوسع في مطالبتها بالحوكمة بما يقارب 0.4 متر',
          ],
        },
      },
    ],
  },

  paris: {
    name: { en: 'Paris', de: 'Paris', ru: 'Париж', ar: 'باريس' },
    lat: 48.8566, lng: 2.3522, zoom: 13,
    locations: [
      {
        id: 'eiffel', type: 'monument', lat: 48.8584, lng: 2.2945,
        name: { en: 'Eiffel Tower', de: 'Eiffelturm', ru: 'Эйфелева башня', ar: 'برج إيفل' },
        atmo: {
          en: 'The tower is made of iron and consensus. People photograph it as proof they were somewhere. The Champ de Mars grass holds its own opinion about all of this.',
          de: 'Der Turm ist aus Eisen und Konsens. Menschen fotografieren ihn als Beweis, dass sie irgendwo waren. Das Gras des Champ de Mars hat seine eigene Meinung dazu.',
          ru: 'Башня сделана из железа и консенсуса. Люди фотографируют её как доказательство того, что они где-то были. Трава Марсова поля имеет своё мнение обо всём этом.',
          ar: 'البرج مصنوع من الحديد والإجماع. يصوره الناس كدليل على أنهم كانوا في مكان ما. عشب الشان دو مارس لديه رأيه الخاص في كل هذا.',
        },
        owners: {
          en: [
            'The iron structure (assembled 1889) holds thermal sovereignty — expands 18cm in summer heat',
            'Pigeons claim the first platform as sovereign roost territory — claim predates current management',
            'The ticketing algorithm governs vertical access and has pre-assigned your queue position',
            'A pickpocket network holds informal governance of the surrounding 200m radius',
          ],
          de: [
            'Die Eisenkonstruktion (zusammengebaut 1889) hält thermische Souveränität — dehnt sich im Sommerhitze um 18 cm aus',
            'Tauben beanspruchen die erste Plattform als souveränes Brutterritorium — Anspruch geht vor aktuellem Management',
            'Der Ticketalgorithmus regiert den vertikalen Zugang und hat Ihre Warteschlangenposition vorher zugewiesen',
            'Ein Taschendieb-Netzwerk hält informelle Governance des umliegenden 200-m-Radius',
          ],
          ru: [
            'Железная конструкция (собрана в 1889 году) держит тепловой суверенитет — расширяется на 18 см в летнюю жару',
            'Голуби претендуют на первую платформу как суверенную территорию для гнездования — претензия предшествует нынешнему управлению',
            'Алгоритм продажи билетов управляет вертикальным доступом и заранее назначил вашу позицию в очереди',
            'Сеть карманников имеет неформальное управление прилегающим радиусом 200 м',
          ],
          ar: [
            'الهيكل الحديدي (جُمّع عام 1889) يحتفظ بالسيادة الحرارية — يتمدد 18 سم في حر الصيف',
            'الحمام يطالب بالمنصة الأولى كإقليم تعشيش ذي سيادة — المطالبة سابقة للإدارة الحالية',
            'خوارزمية التذاكر تحكم الوصول العمودي وقد عيّنت موضعك في الطابور مسبقاً',
            'شبكة نشالين تحتفظ بالحوكمة غير الرسمية لنصف قطر 200 متر المحيط',
          ],
        },
        ghost: {
          en: [
            'Gustave Eiffel (d.1923) retains a nominal symbolic claim via his apartment on the third floor',
            'A temporary exhibition (demolished 1909, reprieved) holds a spectral impermanence claim',
          ],
          de: [
            'Gustave Eiffel (gest. 1923) behält einen nominellen symbolischen Anspruch über seine Wohnung im dritten Stock',
            'Eine temporäre Ausstellung (abgerissen 1909, begnadigt) hält einen spektralen Vergänglichkeitsanspruch',
          ],
          ru: [
            'Гюстав Эйфель (ум. 1923) сохраняет номинальную символическую претензию через свою квартиру на третьем этаже',
            'Временная выставка (снесена в 1909 году, помилована) держит призрачную претензию на непостоянство',
          ],
          ar: [
            'غوستاف إيفل (توفي 1923) يحتفظ بمطالبة رمزية اسمية عبر شقته في الطابق الثالث',
            'معرض مؤقت (هُدم عام 1909، خُفف حكمه) يحتفظ بمطالبة طيفية بعدم الديمومة',
          ],
        },
        temporal: {
          en: [
            'Evening light show event: the tower briefly asserts aesthetic governance over the entire Left Bank',
            'Current wind (SW 22km/h): the tower sways 7cm — structural governance temporarily fluid',
          ],
          de: [
            'Abendliches Lichtshow-Ereignis: der Turm behauptet kurzzeitig ästhetische Governance über die gesamte linke Uferseite',
            'Aktueller Wind (SW 22 km/h): der Turm schwankt 7 cm — strukturelle Governance vorübergehend fließend',
          ],
          ru: [
            'Вечернее световое шоу: башня ненадолго заявляет об эстетическом управлении всем Левым берегом',
            'Текущий ветер (ЮЗ 22 км/ч): башня качается на 7 см — структурное управление временно нестабильно',
          ],
          ar: [
            'حدث عرض الضوء المسائي: البرج يؤكد مؤقتاً الحوكمة الجمالية على كامل الضفة اليسرى',
            'الريح الحالية (جنوب غرب 22 كم/ساعة): البرج يتأرجح 7 سم — الحوكمة الهيكلية مؤقتاً سائلة',
          ],
        },
      },
      {
        id: 'marais', type: 'district', lat: 48.8566, lng: 2.3558,
        name: { en: 'Le Marais', de: 'Le Marais', ru: 'Ле Маре', ar: 'لو ماريه' },
        atmo: {
          en: 'The oldest streets in Paris, governed by competing centuries. Medieval foundations under Haussmann facades under boutique signs. The cats know the original layout.',
          de: 'Die ältesten Straßen von Paris, regiert von konkurrierenden Jahrhunderten. Mittelalterliche Fundamente unter Haussmann-Fassaden unter Boutique-Schildern. Die Katzen kennen das ursprüngliche Layout.',
          ru: 'Старейшие улицы Парижа, управляемые конкурирующими веками. Средневековые фундаменты под фасадами Османа под вывесками бутиков. Кошки знают оригинальную планировку.',
          ar: 'أقدم شوارع باريس، تحكمها قرون متنافسة. أساسات قرون وسطى تحت واجهات هوسمان تحت لافتات البوتيكات. القطط تعرف التخطيط الأصلي.',
        },
        owners: {
          en: [
            'A 13th-century foundation stone claims subterranean sovereignty under Rue des Rosiers',
            'The cats of the Marais hold territorial governance of 11 courtyards — maps available only to cats',
            'An algorithm tracking heritage tourism routes has pre-approved your walking direction',
            'Ivy on the Hôtel de Sens (planted c.1840) claims 60% of the north facade',
          ],
          de: [
            'Ein Grundstein aus dem 13. Jahrhundert beansprucht unterirdische Souveränität unter der Rue des Rosiers',
            'Die Katzen des Marais halten Territoriumsgovernance von 11 Höfen — Karten nur für Katzen verfügbar',
            'Ein Algorithmus, der Kulturtourismus-Routen verfolgt, hat Ihre Gehrichtung vorher genehmigt',
            'Efeu am Hôtel de Sens (gepflanzt ca. 1840) beansprucht 60% der Nordfassade',
          ],
          ru: [
            'Краеугольный камень XIII века претендует на подземный суверенитет под Rue des Rosiers',
            'Кошки Маре удерживают территориальное управление 11 дворами — карты доступны только кошкам',
            'Алгоритм, отслеживающий маршруты культурного туризма, заранее одобрил ваше направление ходьбы',
            'Плющ на Hôtel de Sens (посажен ок. 1840 года) занимает 60% северного фасада',
          ],
          ar: [
            'حجر أساس من القرن الثالث عشر يطالب بالسيادة الجوفية تحت شارع روزييه',
            'قطط الماريه تحتفظ بالحوكمة الإقليمية لـ 11 فناء — الخرائط متاحة للقطط فقط',
            'خوارزمية تتبع مسارات السياحة التراثية وافقت مسبقاً على اتجاه مشيك',
            'اللبلاب على فندق دو سانس (مزروع نحو 1840) يطالب بـ 60% من الواجهة الشمالية',
          ],
        },
        ghost: {
          en: [
            'The Jewish community displaced in 1942 retains a collective habitation claim, morally unresolved',
            'A medieval market (abolished 1790) maintains a commerce-memory in the street layout',
          ],
          de: [
            'Die jüdische Gemeinschaft, die 1942 vertrieben wurde, behält einen kollektiven Wohnungsanspruch, moralisch ungelöst',
            'Ein mittelalterlicher Markt (abgeschafft 1790) hält eine Handelserinnerung im Straßenlayout',
          ],
          ru: [
            'Еврейская община, вытесненная в 1942 году, сохраняет коллективную претензию на жильё, морально неразрешённую',
            'Средневековый рынок (упразднён в 1790 году) сохраняет коммерческую память в планировке улиц',
          ],
          ar: [
            'المجتمع اليهودي المُهجَّر عام 1942 يحتفظ بمطالبة سكن جماعية، غير محسومة أخلاقياً',
            'سوق من العصور الوسطى (أُلغي عام 1790) يحافظ على ذاكرة تجارية في تخطيط الشوارع',
          ],
        },
        temporal: {
          en: [
            'Sunday morning: human governance temporarily cedes to cafe terraces and delivery cyclists',
            'Current sunlight angle: warm zone on Rue Vieille du Temple — solar governance, 40 minutes remaining',
          ],
          de: [
            'Sonntagmorgen: menschliche Governance weicht vorübergehend Café-Terrassen und Lieferradfahrern',
            'Aktueller Sonnenstand: Warmzone in der Rue Vieille du Temple — Solargovernance, noch 40 Minuten',
          ],
          ru: [
            'Воскресное утро: человеческое управление временно уступает кафе-террасам и курьерам-велосипедистам',
            'Текущий угол солнечного света: тёплая зона на Rue Vieille du Temple — солнечное управление, осталось 40 минут',
          ],
          ar: [
            'صباح الأحد: الحوكمة البشرية تتنازل مؤقتاً لتراسات المقاهي ودراجي التوصيل',
            'زاوية ضوء الشمس الحالية: منطقة دافئة على شارع فيي دو تامبل — حوكمة شمسية، 40 دقيقة متبقية',
          ],
        },
      },
      {
        id: 'bastille', type: 'square', lat: 48.8533, lng: 2.3692,
        name: { en: 'Place de la Bastille', de: 'Place de la Bastille', ru: 'Площадь Бастилии', ar: 'ساحة الباستيل' },
        atmo: {
          en: 'Where a prison was. The absence is the monument. The July Column stands in a hole where the Bastille\'s foundation stones still exist, 8 metres down, unacknowledged.',
          de: 'Wo ein Gefängnis war. Die Abwesenheit ist das Monument. Die Julisäule steht in einem Loch, wo die Grundsteine der Bastille noch 8 Meter tief existieren, unerkannt.',
          ru: 'Где была тюрьма. Отсутствие — это памятник. Июльская колонна стоит в яме, где фундаментные камни Бастилии всё ещё существуют, на 8 метрах глубины, непризнанные.',
          ar: 'حيث كان السجن. الغياب هو النصب التذكاري. عمود يوليو يقف في حفرة حيث لا تزال حجارة أساس الباستيل موجودة، على عمق 8 أمتار، دون اعتراف.',
        },
        owners: {
          en: [
            'The July Column (1840) holds vertical territorial sovereignty — lightning rod at apex claims sky',
            'The Opéra Bastille algorithm governs the acoustic envelope of the eastern square',
            'A collective of skateboarders holds informal governance of the western paving — established 2003',
            'The ghost foundation (below ground) maintains a structural-memory claim, legally sealed',
          ],
          de: [
            'Die Julisäule (1840) hält vertikale territoriale Souveränität — Blitzableiter an der Spitze beansprucht Himmel',
            'Der Opéra-Bastille-Algorithmus regiert die akustische Hülle des östlichen Platzes',
            'Ein Kollektiv von Skateboardern hält informelle Governance des westlichen Pflasters — gegründet 2003',
            'Das Geisterfundament (unter der Erde) hält einen strukturellen Erinnerungsanspruch, rechtlich versiegelt',
          ],
          ru: [
            'Июльская колонна (1840) держит вертикальный территориальный суверенитет — громоотвод на вершине претендует на небо',
            'Алгоритм Оперы Бастилии управляет акустической оболочкой восточной площади',
            'Коллектив скейтбордистов имеет неформальное управление западной мостовой — основано в 2003 году',
            'Призрачный фундамент (под землёй) сохраняет структурную претензию памяти, юридически запечатанную',
          ],
          ar: [
            'عمود يوليو (1840) يحتفظ بالسيادة الإقليمية العمودية — موصل الصواعق في القمة يطالب بالسماء',
            'خوارزمية أوبيرا الباستيل تحكم الغلاف الصوتي للساحة الشرقية',
            'مجموعة من المتزلجين تحتفظ بالحوكمة غير الرسمية للرصيف الغربي — أُسست عام 2003',
            'الأساس الشبحي (تحت الأرض) يحافظ على مطالبة ذاكرة هيكلية، مختومة قانونياً',
          ],
        },
        ghost: {
          en: [
            'The Bastille fortress (demolished 1789) retains full territorial sovereignty below street level',
            'Revolutionary crowds of July 14, 1789 maintain a residual atmospheric governance claim',
          ],
          de: [
            'Die Bastille-Festung (abgerissen 1789) behält volle territoriale Souveränität unter Straßenniveau',
            'Revolutionäre Massen vom 14. Juli 1789 halten einen verbleibenden atmosphärischen Governance-Anspruch',
          ],
          ru: [
            'Крепость Бастилия (снесена в 1789 году) сохраняет полный территориальный суверенитет ниже уровня улицы',
            'Революционные толпы 14 июля 1789 года сохраняют остаточную претензию на атмосферное управление',
          ],
          ar: [
            'قلعة الباستيل (هُدمت عام 1789) تحتفظ بالسيادة الإقليمية الكاملة تحت مستوى الشارع',
            'حشود الثورة في 14 يوليو 1789 تحافظ على مطالبة حوكمة جوية متبقية',
          ],
        },
        temporal: {
          en: [
            'Current market day: Saturday morning governance passes to organic produce and canvas bags',
            'Métro ventilation event: warm air from Line 1 asserting surface-temperature governance',
          ],
          de: [
            'Aktueller Markttag: Samstagmorgen-Governance geht an Bio-Produkte und Leinentaschen',
            'Métro-Belüftungsereignis: Warmluft aus Linie 1 behauptet Oberflächentemperatur-Governance',
          ],
          ru: [
            'Текущий рыночный день: управление субботнего утра переходит к органическим продуктам и холщовым сумкам',
            'Событие вентиляции метро: тёплый воздух из линии 1 заявляет о температурном управлении поверхностью',
          ],
          ar: [
            'يوم السوق الحالي: حوكمة صباح السبت تنتقل إلى المنتجات العضوية وحقائب القماش',
            'حدث تهوية المترو: هواء دافئ من الخط 1 يؤكد حوكمة درجة حرارة السطح',
          ],
        },
      },
      {
        id: 'canal', type: 'waterway', lat: 48.8703, lng: 2.3635,
        name: { en: 'Canal Saint-Martin', de: 'Canal Saint-Martin', ru: 'Канал Сен-Мартен', ar: 'قناة سان مارتان' },
        atmo: {
          en: 'The canal is 4.5km of water that knows it is being watched. Zinc bars face it. People throw bread to ducks with the seriousness of a negotiation.',
          de: 'Der Kanal ist 4,5 km Wasser, das weiß, dass es beobachtet wird. Zinkbars stehen gegenüber. Menschen werfen mit der Ernsthaftigkeit einer Verhandlung Brot an Enten.',
          ru: 'Канал — это 4,5 км воды, которая знает, что за ней наблюдают. Цинковые бары смотрят на него. Люди бросают хлеб уткам с серьёзностью переговоров.',
          ar: 'القناة 4.5 كيلومتر من الماء الذي يعرف أنه مراقب. حانات الزنك تواجهه. الناس يرمون الخبز للبط بجدية التفاوض.',
        },
        owners: {
          en: [
            'The canal water claims governance of all reflective surfaces within line-of-sight',
            'Ducks (resident flock: 23) hold foraging territorial rights — enforced by sustained presence',
            'The lock mechanism (built 1825) governs all water-level transitions — a slow, tidal authority',
            'A rat network governs the towpath understructure — 400m continuous territorial claim',
          ],
          de: [
            'Das Kanalwasser beansprucht Governance aller reflektierenden Oberflächen in Sichtweite',
            'Enten (Stamm: 23) halten Nahrungssuche-Territorialrechte — durchgesetzt durch andauernde Präsenz',
            'Der Schleusenmechanismus (gebaut 1825) regiert alle Wasserstandsübergänge — eine langsame, gezeitenartige Autorität',
            'Ein Rattennetz regiert die Unterstruktur des Leinpfads — 400 m kontinuierlicher Territoriumsanspruch',
          ],
          ru: [
            'Воды канала претендуют на управление всеми отражающими поверхностями в зоне видимости',
            'Утки (постоянное стадо: 23) имеют кормовые территориальные права — обеспечивается устойчивым присутствием',
            'Механизм шлюза (построен в 1825 году) управляет всеми переходами уровня воды — медленная, приливная власть',
            'Сеть крыс управляет подструктурой бечевника — 400 м непрерывной территориальной претензии',
          ],
          ar: [
            'مياه القناة تطالب بحوكمة جميع الأسطح العاكسة ضمن خط الرؤية',
            'البط (قطيع مقيم: 23) يحتفظ بحقوق إقليمية للرعي — مُطبَّقة بالحضور المستمر',
            'آلية قفل المياه (بُنيت عام 1825) تحكم جميع انتقالات منسوب المياه — سلطة بطيئة كالمد والجزر',
            'شبكة جرذان تحكم البنية التحتية لمسار الجر — مطالبة إقليمية مستمرة 400 متر',
          ],
        },
        ghost: {
          en: [
            'Industrial barges (last active 1970) retain navigation-right memories in the lock chambers',
            'Workers who built the canal (1802–1825) maintain an unregistered labour-lien on the stonework',
          ],
          de: [
            'Industriekähne (zuletzt aktiv 1970) behalten Navigationsrecht-Erinnerungen in den Schleusenkammern',
            'Arbeiter, die den Kanal bauten (1802–1825), halten ein unregistriertes Arbeitspfandrecht am Steinwerk',
          ],
          ru: [
            'Промышленные баржи (последний раз активны в 1970 году) сохраняют воспоминания о навигационных правах в шлюзовых камерах',
            'Рабочие, построившие канал (1802–1825), сохраняют незарегистрированное трудовое право удержания на каменной кладке',
          ],
          ar: [
            'القوارب الصناعية (آخر نشاط 1970) تحتفظ بذكريات حقوق الملاحة في غرف القفل',
            'العمال الذين بنوا القناة (1802–1825) يحافظون على رهن عمالي غير مسجل على الأعمال الحجرية',
          ],
        },
        temporal: {
          en: [
            'Current picnic density event: human territorial claims via blanket-placement protocol',
            'Sunset: the canal surface enters a 40-minute governance window of amplified light',
          ],
          de: [
            'Aktuelles Picknickverdichtungsereignis: menschliche Territorialansprüche via Deckenablageprötkoll',
            'Sonnenuntergang: die Kanaloberfläche tritt in ein 40-minütiges Governance-Fenster verstärkten Lichts ein',
          ],
          ru: [
            'Текущее событие плотности пикников: человеческие территориальные претензии через протокол размещения одеял',
            'Закат: поверхность канала входит в 40-минутное управляющее окно усиленного света',
          ],
          ar: [
            'حدث كثافة نزهات الطعام الحالي: مطالبات إقليمية بشرية عبر بروتوكول وضع البطانيات',
            'الغروب: سطح القناة يدخل نافذة حوكمة لمدة 40 دقيقة من الضوء المُضخَّم',
          ],
        },
      },
    ],
  },

  tokyo: {
    name: { en: 'Tokyo', de: 'Tokio', ru: 'Токио', ar: 'طوكيو' },
    lat: 35.6762, lng: 139.6503, zoom: 13,
    locations: [
      {
        id: 'shinjuku', type: 'transit', lat: 35.6896, lng: 139.7006,
        name: { en: 'Shinjuku Station', de: 'Bahnhof Shinjuku', ru: 'Станция Синдзюку', ar: 'محطة شينجوكو' },
        atmo: {
          en: 'The largest station in the world by exits. 200 exits, each governing a different city. The algorithm moves 3.5 million people daily and has not made a mistake it will admit.',
          de: 'Der größte Bahnhof der Welt nach Ausgängen. 200 Ausgänge, jeder regiert eine andere Stadt. Der Algorithmus bewegt täglich 3,5 Millionen Menschen und hat keinen Fehler zugegeben.',
          ru: 'Крупнейшая станция в мире по количеству выходов. 200 выходов, каждый управляет другим городом. Алгоритм перемещает 3,5 миллиона человек ежедневно и не признал ни одной ошибки.',
          ar: 'أكبر محطة في العالم من حيث المخارج. 200 مخرج، كل منها يحكم مدينة مختلفة. الخوارزمية تحرك 3.5 مليون شخص يومياً ولم تعترف بخطأ.',
        },
        owners: {
          en: [
            'The station algorithm holds primary governance of all movement — 53 platforms, zero ambiguity',
            'A cat (Tama lineage) holds symbolic executive governance — the precedent is legally recognised',
            'Underground retail system claims commercial governance of the entire subsurface level',
            'Pigeons govern Platform 13 — uncontested since the smoking ban removed their competition',
          ],
          de: [
            'Der Bahnhofsalgorithmus hält primäre Governance aller Bewegungen — 53 Gleise, null Mehrdeutigkeit',
            'Eine Katze (Tama-Linie) hält symbolische Exekutiv-Governance — der Präzedenzfall ist rechtlich anerkannt',
            'Das unterirdische Einzelhandelssystem beansprucht kommerzielle Governance der gesamten Untergrundebene',
            'Tauben regieren Gleis 13 — unbestritten seit das Rauchverbot ihre Konkurrenz entfernte',
          ],
          ru: [
            'Станционный алгоритм держит первичное управление всем движением — 53 платформы, ноль неопределённости',
            'Кошка (линия Тама) держит символическое исполнительное управление — прецедент юридически признан',
            'Подземная розничная система претендует на коммерческое управление всем подземным уровнем',
            'Голуби управляют платформой 13 — бесспорно с тех пор, как запрет курения устранил их конкуренцию',
          ],
          ar: [
            'خوارزمية المحطة تحتفظ بالحوكمة الأولية لجميع الحركة — 53 رصيفاً، صفر غموض',
            'قطة (من سلالة تاما) تحتفظ بحوكمة تنفيذية رمزية — السابقة معترف بها قانونياً',
            'نظام التجزئة تحت الأرض يطالب بالحوكمة التجارية للمستوى تحت السطحي بأكمله',
            'الحمام يحكم الرصيف 13 — غير متنازع عليه منذ إزالة المنافسة بحظر التدخين',
          ],
        },
        ghost: {
          en: [
            'A pre-war marketplace retains a commercial-memory claim beneath the western concourse',
            'Station staff who worked the 1964 Olympics corridor maintain a service-memory presence',
          ],
          de: [
            'Ein Vorkriegsmarktplatz behält einen Handelserinnerungsanspruch unter der westlichen Halle',
            'Bahnhofspersonal, das den Olympia-Korridor 1964 bediente, hält eine Dienstleistungserinnerungspräsenz',
          ],
          ru: [
            'Довоенный рынок сохраняет коммерческую претензию памяти под западным залом',
            'Персонал станции, работавший в олимпийском коридоре 1964 года, сохраняет сервисное присутствие памяти',
          ],
          ar: [
            'سوق من ما قبل الحرب يحتفظ بمطالبة ذاكرة تجارية تحت الردهة الغربية',
            'موظفو المحطة الذين عملوا في ممر أولمبياد 1964 يحافظون على حضور ذاكرة خدمة',
          ],
        },
        temporal: {
          en: [
            'Rush hour (07:30–09:00): human aggregate governance — currently at 340% normal density',
            'Cherry blossom season: aesthetic governance of east plaza temporarily claimed by Prunus serrulata',
          ],
          de: [
            'Stoßzeit (07:30–09:00): menschliche aggregierte Governance — derzeit bei 340% der normalen Dichte',
            'Kirschblütenzeit: ästhetische Governance des Ostplatzes vorübergehend von Prunus serrulata beansprucht',
          ],
          ru: [
            'Час пик (07:30–09:00): человеческое совокупное управление — в настоящее время 340% от нормальной плотности',
            'Сезон цветения сакуры: эстетическое управление восточной площадью временно заявлено Prunus serrulata',
          ],
          ar: [
            'ساعة الذروة (07:30–09:00): الحوكمة البشرية المجمعة — حالياً عند 340% من الكثافة الطبيعية',
            'موسم أزهار الكرز: الحوكمة الجمالية للساحة الشرقية مطالب بها مؤقتاً من Prunus serrulata',
          ],
        },
      },
      {
        id: 'harajuku', type: 'district', lat: 35.6702, lng: 139.7026,
        name: { en: 'Harajuku', de: 'Harajuku', ru: 'Харадзюку', ar: 'هاراجوكو' },
        atmo: {
          en: 'Takeshita Street is 350 metres long and governed by teenagers and crepe smell and the algorithm that decides what is currently fashionable. The shrine is 400 metres away and in a different century.',
          de: 'Takeshita Street ist 350 Meter lang und wird von Teenagern, Crêpe-Geruch und dem Algorithmus regiert, der entscheidet, was gerade modisch ist. Der Schrein ist 400 Meter entfernt und in einem anderen Jahrhundert.',
          ru: 'Улица Такэсита длиной 350 метров управляется подростками, запахом крепов и алгоритмом, решающим, что сейчас модно. Святилище находится в 400 метрах и в другом веке.',
          ar: 'شارع تاكيشيتا طوله 350 متراً ويحكمه المراهقون ورائحة الكريب والخوارزمية التي تقرر ما هو عصري حالياً. الضريح على بعد 400 متر وفي قرن مختلف.',
        },
        owners: {
          en: [
            'Meiji Shrine forest (70 hectares) asserts atmospheric governance over the entire district',
            'The fashion trend algorithm holds soft governance of consumption behaviour and self-presentation',
            'A 90-year-old fig tree in the shrine grounds claims subsurface sovereignty to 25m radius',
            'Cats of Yoyogi Park hold informal territorial claims — 7 distinct family units, mapped',
          ],
          de: [
            'Meiji-Schrein-Wald (70 Hektar) behauptet atmosphärische Governance über den gesamten Bezirk',
            'Der ModeTrend-Algorithmus hält sanfte Governance über Konsumverhalten und Selbstpräsentation',
            'Ein 90-jähriger Feigenbaum auf dem Schreingelände beansprucht unterirdische Souveränität bis 25 m Radius',
            'Katzen des Yoyogi-Parks halten informelle Territoriumsansprüche — 7 verschiedene Familieneinheiten, kartiert',
          ],
          ru: [
            'Лес святилища Мэйдзи (70 гектаров) заявляет о атмосферном управлении всем районом',
            'Алгоритм модных тенденций держит мягкое управление поведением потребления и самопрезентации',
            'Смоковница возрастом 90 лет на территории святилища претендует на подземный суверенитет до радиуса 25 м',
            'Кошки парка Ёйоги имеют неформальные территориальные претензии — 7 различных семейных единиц, нанесённых на карту',
          ],
          ar: [
            'غابة ضريح مييجي (70 هكتاراً) تؤكد الحوكمة الجوية على كامل الحي',
            'خوارزمية اتجاهات الموضة تحتفظ بالحوكمة الناعمة لسلوك الاستهلاك والتقديم الذاتي',
            'شجرة تين عمرها 90 عاماً في أراضي الضريح تطالب بالسيادة تحت السطحية حتى 25 متراً',
            'قطط حديقة يويوغي لديها مطالبات إقليمية غير رسمية — 7 وحدات عائلية متمايزة، مرسومة على الخريطة',
          ],
        },
        ghost: {
          en: [
            'Empress Meiji (d.1914) retains a nominal spiritual sovereignty claim over the shrine grounds',
            'A wartime barracks (demolished 1946) holds structural-memory claims in the park\'s northeast',
          ],
          de: [
            'Kaiserin Meiji (gest. 1914) behält einen nominellen spirituellen Souveränitätsanspruch über das Schreingelände',
            'Eine Kriegsbaracke (abgerissen 1946) hält strukturelle Erinnerungsansprüche im Nordosten des Parks',
          ],
          ru: [
            'Императрица Мэйдзи (ум. 1914) сохраняет номинальную духовную претензию суверенитета над территорией святилища',
            'Военная казарма (снесена в 1946 году) держит структурные претензии памяти в северо-восточной части парка',
          ],
          ar: [
            'الإمبراطورة مييجي (توفيت 1914) تحتفظ بمطالبة سيادة روحية اسمية على أراضي الضريح',
            'ثكنة من زمن الحرب (هُدمت عام 1946) تحتفظ بمطالبات ذاكرة هيكلية في الشمال الشرقي للحديقة',
          ],
        },
        temporal: {
          en: [
            'Weekend harajuku fashion event: costume governance temporarily supersedes street ordinance',
            'Rain event (approaching): Yoyogi Park governance shifts to crows and wet earth',
          ],
          de: [
            'Wochenend-Harajuku-Mode-Ereignis: Kostüm-Governance übertrifft vorübergehend Straßenordnung',
            'Regenereignis (nähert sich): Yoyogi-Park-Governance wechselt zu Krähen und nasser Erde',
          ],
          ru: [
            'Выходное модное мероприятие Харадзюку: управление костюмами временно заменяет уличный ордонанс',
            'Дождевое событие (приближается): управление парком Ёёги переходит к воронам и влажной земле',
          ],
          ar: [
            'حدث أزياء هاراجوكو في عطلة الأسبوع: حوكمة الأزياء تحل مؤقتاً محل لائحة الشوارع',
            'حدث مطري (قادم): حوكمة حديقة يويوغي تنتقل إلى الغربان والأرض المبللة',
          ],
        },
      },
    ],
  },

  london: {
    name: { en: 'London', de: 'London', ru: 'Лондон', ar: 'لندن' },
    lat: 51.5074, lng: -0.1278, zoom: 13,
    locations: [
      {
        id: 'borough', type: 'market', lat: 51.5055, lng: -0.0909,
        name: { en: 'Borough Market', de: 'Borough Market', ru: 'Борo-Маркет', ar: 'سوق بوروه' },
        atmo: {
          en: 'A market that has been here in some form since 1014. The smell of cheese and fish and the memory of fish. The railway viaduct overhead vibrates every 4 minutes and everything adjusts.',
          de: 'Ein Markt, der seit 1014 in irgendeiner Form hier war. Der Geruch von Käse, Fisch und der Erinnerung an Fisch. Das Eisenbahnviadukt oben vibriert alle 4 Minuten und alles passt sich an.',
          ru: 'Рынок, который в той или иной форме существует здесь с 1014 года. Запах сыра, рыбы и воспоминания о рыбе. Железнодорожный виадук наверху вибрирует каждые 4 минуты и всё приспосабливается.',
          ar: 'سوق كان موجوداً هنا بشكل ما منذ عام 1014. رائحة الجبن والسمك وذاكرة السمك. القناطر الحديدية العلوية تهتز كل 4 دقائق وكل شيء يتكيف.',
        },
        owners: {
          en: [
            'The railway viaduct (built 1850) holds acoustic governance — vibration resets all conversations',
            'A resident fox holds territorial governance of the western loading bay — 5am–7am daily',
            'The market algorithm tracks spend patterns and has profiled your cheese preferences',
            'Yeast in the air holds biological governance of all exposed dough within 40m',
          ],
          de: [
            'Das Eisenbahnviadukt (gebaut 1850) hält akustische Governance — Vibration setzt alle Gespräche zurück',
            'Ein ansässiger Fuchs hält Territorialgovernance der westlichen Ladebücht — täglich 5–7 Uhr',
            'Der Marktalgoritmus verfolgt Ausgabemuster und hat Ihre Käsepräferenzen profiliert',
            'Hefe in der Luft hält biologische Governance über allen exponierten Teig innerhalb von 40 m',
          ],
          ru: [
            'Железнодорожный виадук (построен в 1850 году) держит акустическое управление — вибрация сбрасывает все разговоры',
            'Лиса-резидент держит территориальное управление западной погрузочной площадкой — ежедневно с 5 до 7 утра',
            'Рыночный алгоритм отслеживает паттерны расходов и составил профиль ваших сырных предпочтений',
            'Дрожжи в воздухе держат биологическое управление всем открытым тестом в радиусе 40 м',
          ],
          ar: [
            'قناطر السكة الحديدية (بُنيت عام 1850) تحتفظ بالحوكمة الصوتية — الاهتزاز يعيد ضبط جميع المحادثات',
            'ثعلب مقيم يحتفظ بالحوكمة الإقليمية لرصيف التحميل الغربي — يومياً من 5 صباحاً حتى 7 صباحاً',
            'خوارزمية السوق تتتبع أنماط الإنفاق وقد وضعت ملفاً لتفضيلاتك في الجبن',
            'الخميرة في الهواء تحتفظ بالحوكمة البيولوجية لجميع العجين المكشوف ضمن 40 متراً',
          ],
        },
        ghost: {
          en: [
            'A medieval market (recorded 1014) holds the oldest commercial territorial claim in London',
            'Bombed warehouses (1941) retain structural-memory claims in three arches',
          ],
          de: [
            'Ein mittelalterlicher Markt (aufgezeichnet 1014) hält den ältesten kommerziellen Territoriumsanspruch in London',
            'Bombardierte Lagerhäuser (1941) behalten strukturelle Erinnerungsansprüche in drei Bögen',
          ],
          ru: [
            'Средневековый рынок (зафиксирован в 1014 году) держит старейшую коммерческую территориальную претензию в Лондоне',
            'Разбомблённые склады (1941) сохраняют структурные претензии памяти в трёх арках',
          ],
          ar: [
            'سوق من العصور الوسطى (مسجل عام 1014) يحتفظ بأقدم مطالبة إقليمية تجارية في لندن',
            'مستودعات مقصوفة (1941) تحتفظ بمطالبات ذاكرة هيكلية في ثلاثة أقواس',
          ],
        },
        temporal: {
          en: [
            'Current Saturday surge: human aggregate governance of all aisle widths',
            'Approaching rain: the cheese mongers\' canopies are asserting expanded territorial claims',
          ],
          de: [
            'Aktueller Samstagansturm: menschliche aggregierte Governance aller Gangbreiten',
            'Nahender Regen: die Baldachine der Käsehändler behaupten erweiterte Territoriumsansprüche',
          ],
          ru: [
            'Текущий субботний всплеск: человеческое совокупное управление всеми ширинами проходов',
            'Приближающийся дождь: навесы сыроторговцев заявляют расширенные территориальные претензии',
          ],
          ar: [
            'موجة السبت الحالية: الحوكمة البشرية المجمعة لجميع عرض الممرات',
            'اقتراب المطر: مظلات تجار الجبن تؤكد مطالبات إقليمية موسعة',
          ],
        },
      },
      {
        id: 'southbank', type: 'waterfront', lat: 51.5054, lng: -0.1132,
        name: { en: 'South Bank', de: 'South Bank', ru: 'Саут-Бэнк', ar: 'ساوث بانك' },
        atmo: {
          en: 'The Thames at low tide smells of time. The skateboarders under the Southbank Centre have been there so long they have become structural. The river does not care about any of this.',
          de: 'Die Themse bei Ebbe riecht nach Zeit. Die Skateboarder unter dem Southbank Centre sind so lange dort, dass sie strukturell geworden sind. Den Fluss kümmert all das nicht.',
          ru: 'Темза при отливе пахнет временем. Скейтбордисты под Саутбэнк-Центром были там так долго, что стали структурными. Река не заботится ни о чём из этого.',
          ar: 'نهر التيمز عند المد المنخفض يفوح منه رائحة الزمن. المتزلجون تحت مركز ساوث بانك كانوا هناك لفترة طويلة حتى أصبحوا جزءاً هيكلياً. النهر لا يهتم بأي من هذا.',
        },
        owners: {
          en: [
            'The Thames river claims primary governance of all surfaces within 5m of current waterline',
            'Skateboarders (under QEH since 1973) hold legitimate territorial claim — precedent established',
            'The Southbank algorithm governs event-space allocation and has pre-approved tonight\'s programme',
            'Seagulls hold contested airspace — ongoing negotiation with pigeons, no resolution',
          ],
          de: [
            'Die Themse beansprucht primäre Governance aller Oberflächen innerhalb von 5 m der aktuellen Wasserlinie',
            'Skateboarder (unter QEH seit 1973) halten legitimen Territoriumsanspruch — Präzedenzfall etabliert',
            'Der Southbank-Algorithmus regiert Veranstaltungsraumzuweisung und hat das heutige Programm vorher genehmigt',
            'Möwen halten umstrittenen Luftraum — laufende Verhandlungen mit Tauben, keine Lösung',
          ],
          ru: [
            'Река Темза претендует на первичное управление всеми поверхностями в пределах 5 м от текущего уровня воды',
            'Скейтбордисты (под QEH с 1973 года) держат законную территориальную претензию — прецедент установлен',
            'Алгоритм Саутбэнка управляет распределением пространства для мероприятий и заранее одобрил сегодняшнюю программу',
            'Чайки держат спорное воздушное пространство — продолжающиеся переговоры с голубями, без решения',
          ],
          ar: [
            'نهر التيمز يطالب بالحوكمة الأولية لجميع الأسطح ضمن 5 أمتار من الخط المائي الحالي',
            'المتزلجون (تحت QEH منذ 1973) يحتفظون بمطالبة إقليمية شرعية — سابقة راسخة',
            'خوارزمية ساوث بانك تحكم تخصيص مساحات الفعاليات وقد وافقت مسبقاً على برنامج الليلة',
            'النوارس تحتفظ بمجال جوي متنازع عليه — تفاوض مستمر مع الحمام، دون حل',
          ],
        },
        ghost: {
          en: [
            'A medieval brothel district (Bankside) retains a residual commercial claim in the street layout',
            'The Globe Theatre (original, demolished 1644) holds theatrical-memory governance on the site',
          ],
          de: [
            'Ein mittelalterliches Bordellviertel (Bankside) hält einen verbleibenden kommerziellen Anspruch im Straßenlayout',
            'Das Globe Theatre (original, abgerissen 1644) hält theatralische Erinnerungsgovernance am Standort',
          ],
          ru: [
            'Средневековый квартал борделей (Бэнксайд) сохраняет остаточную коммерческую претензию в планировке улиц',
            'Театр Глобус (оригинал, снесён в 1644 году) держит театральную память управления на месте',
          ],
          ar: [
            'حي دور الدعارة من العصور الوسطى (بانكسايد) يحتفظ بمطالبة تجارية متبقية في تخطيط الشوارع',
            'مسرح غلوب (الأصلي، هُدم عام 1644) يحتفظ بحوكمة ذاكرة مسرحية في الموقع',
          ],
        },
        temporal: {
          en: [
            'Low tide: Thames has retreated 3m — temporary governance of the foreshore transferred',
            'Current busker event: acoustic governance of 30m radius around saxophonist',
          ],
          de: [
            'Ebbe: Themse hat sich 3 m zurückgezogen — vorübergehende Governance des Vorstrandgebiets übertragen',
            'Aktuelles Straßenmusiker-Ereignis: akustische Governance von 30 m Radius um den Saxophonisten',
          ],
          ru: [
            'Отлив: Темза отступила на 3 м — временное управление прибрежной полосой передано',
            'Текущее событие уличного музыканта: акустическое управление радиусом 30 м вокруг саксофониста',
          ],
          ar: [
            'المد المنخفض: التيمز انحسرت 3 أمتار — نُقلت الحوكمة المؤقتة للشاطئ',
            'حدث العازف الشارعي الحالي: الحوكمة الصوتية لنصف قطر 30 متراً حول عازف الساكسفون',
          ],
        },
      },
    ],
  },

  newyork: {
    name: { en: 'New York', de: 'New York', ru: 'Нью-Йорк', ar: 'نيويورك' },
    lat: 40.7128, lng: -74.006, zoom: 13,
    locations: [
      {
        id: 'centralpark', type: 'park', lat: 40.7851, lng: -73.9683,
        name: { en: 'Central Park', de: 'Central Park', ru: 'Центральный парк', ar: 'سنترال بارك' },
        atmo: {
          en: '840 acres of negotiated nature inside a city that forgot what nature looks like. The squirrels are fearless because they have calculated that humans are no longer dangerous here.',
          de: '840 Morgen verhandelte Natur in einer Stadt, die vergessen hat, wie Natur aussieht. Die Eichhörnchen sind furchtlos, weil sie berechnet haben, dass Menschen hier nicht mehr gefährlich sind.',
          ru: '840 акров согласованной природы внутри города, который забыл, как выглядит природа. Белки бесстрашны, потому что рассчитали, что люди здесь больше не опасны.',
          ar: '840 فداناً من الطبيعة المتفاوض عليها داخل مدينة نسيت كيف تبدو الطبيعة. السناجب بلا خوف لأنها حسبت أن البشر لم يعودوا خطرين هنا.',
        },
        owners: {
          en: [
            'Squirrels hold distributed territorial governance — 2,000+ individuals, no central authority',
            'The park algorithm optimizes visitor flow and has pre-approved the route you are considering',
            'A great elm (planted 1870) claims subsurface sovereignty across 6 adjacent pathways',
            'Rats govern the entire underground infrastructure — 6 miles of tunnels, all informally claimed',
          ],
          de: [
            'Eichhörnchen halten verteilte Territoriumsgovernance — 2.000+ Individuen, keine zentrale Autorität',
            'Der Parkalgoritmus optimiert den Besucherzufluss und hat die Route, die Sie erwägen, vorher genehmigt',
            'Eine große Ulme (gepflanzt 1870) beansprucht unterirdische Souveränität über 6 angrenzende Wege',
            'Ratten regieren die gesamte unterirdische Infrastruktur — 6 Meilen Tunnel, alle informell beansprucht',
          ],
          ru: [
            'Белки держат распределённое территориальное управление — 2000+ особей, нет центральной власти',
            'Парковый алгоритм оптимизирует поток посетителей и заранее одобрил маршрут, который вы рассматриваете',
            'Большой вяз (посажен в 1870 году) претендует на подземный суверенитет по 6 смежным дорожкам',
            'Крысы управляют всей подземной инфраструктурой — 6 миль туннелей, все неформально заявлены',
          ],
          ar: [
            'السناجب تحتفظ بالحوكمة الإقليمية الموزعة — 2000+ فرد، لا سلطة مركزية',
            'خوارزمية الحديقة تحسّن تدفق الزوار وقد وافقت مسبقاً على المسار الذي تفكر فيه',
            'دردار عظيم (مزروع عام 1870) يطالب بالسيادة تحت السطحية عبر 6 مسارات مجاورة',
            'الجرذان تحكم كامل البنية التحتية تحت الأرض — 6 أميال من الأنفاق، كلها مطالب بها غير رسمياً',
          ],
        },
        ghost: {
          en: [
            'Seneca Village (demolished 1857 for the park) maintains a collective habitation claim',
            'A skating rink (1858 design) holds an archaeological presence claim beneath the meadow',
          ],
          de: [
            'Seneca Village (abgerissen 1857 für den Park) hält einen kollektiven Wohnungsanspruch',
            'Eine Schlittschuhbahn (Design 1858) hält einen archäologischen Präsenzanspruch unter der Wiese',
          ],
          ru: [
            'Деревня Сенека (снесена в 1857 году для парка) сохраняет коллективную претензию на жильё',
            'Каток (дизайн 1858 года) держит претензию на археологическое присутствие под лугом',
          ],
          ar: [
            'قرية سينيكا (هُدمت عام 1857 من أجل الحديقة) تحافظ على مطالبة سكن جماعية',
            'حلبة تزلج (تصميم 1858) تحتفظ بمطالبة حضور أثري تحت المرج',
          ],
        },
        temporal: {
          en: [
            'Current jogger density: path governance temporarily claimed by running aggregate',
            'Dusk: the park governance will transfer to dog walkers, bats, and the unobserved',
          ],
          de: [
            'Aktuelle Jogger-Dichte: Weggovernance vorübergehend von laufendem Aggregat beansprucht',
            'Dämmerung: die Parkgovernance wird auf Hundeführer, Fledermäuse und die Unbeobachteten übertragen',
          ],
          ru: [
            'Текущая плотность бегунов: управление дорожками временно заявлено бегущим агрегатом',
            'Сумерки: управление парком перейдёт к выгуливающим собак, летучим мышам и ненаблюдаемым',
          ],
          ar: [
            'كثافة العدائين الحالية: حوكمة المسار مطالب بها مؤقتاً من قِبل مجمع الجري',
            'الغسق: ستنتقل حوكمة الحديقة إلى مشاة الكلاب والخفافيش وغير الملاحَظين',
          ],
        },
      },
      {
        id: 'highline', type: 'infrastructure', lat: 40.748, lng: -74.0048,
        name: { en: 'The High Line', de: 'The High Line', ru: 'Хай-Лайн', ar: 'الخط العالي' },
        atmo: {
          en: 'A railway line that was saved from demolition by being aestheticised. The plants that grow here were not planted but arrived. The algorithm recommends you move north.',
          de: 'Eine Eisenbahnlinie, die durch Ästhetisierung vor dem Abriss gerettet wurde. Die Pflanzen, die hier wachsen, wurden nicht gepflanzt, sondern kamen an. Der Algorithmus empfiehlt, sich nach Norden zu bewegen.',
          ru: 'Железнодорожная линия, спасённая от сноса путём эстетизации. Растения, растущие здесь, не были посажены, а прибыли. Алгоритм рекомендует двигаться на север.',
          ar: 'خط سكة حديد أُنقذ من الهدم بفضل تجميله. النباتات التي تنمو هنا لم تُزرع بل وصلت. الخوارزمية توصي بالتحرك نحو الشمال.',
        },
        owners: {
          en: [
            'The original freight rail infrastructure retains a transportation-memory governance claim',
            'Spontaneous plants (seeded before landscaping) hold a prior-claim over cultivated species',
            'The High Line app algorithm governs recommended viewing positions and photographic angles',
            'Pigeons claim the old rail ties — roosting precedent from the abandoned-rail era',
          ],
          de: [
            'Die ursprüngliche Gütereisenbahninfrastruktur behält einen Transportspeicher-Governance-Anspruch',
            'Spontane Pflanzen (gesät vor der Landschaftsgestaltung) halten Vorrangbeanspruchung gegenüber kultivierten Arten',
            'Der High Line App-Algorithmus regiert empfohlene Aussichtspositionen und fotografische Winkel',
            'Tauben beanspruchen die alten Schienenbefestigungen — Brutvorrecht aus der verlassenen Eisenbahnzeit',
          ],
          ru: [
            'Оригинальная грузовая железнодорожная инфраструктура сохраняет транспортную претензию памяти управления',
            'Спонтанные растения (посеянные до благоустройства) имеют приоритетную претензию над культивированными видами',
            'Алгоритм приложения High Line управляет рекомендованными позициями для осмотра и фотографическими углами',
            'Голуби претендуют на старые железнодорожные шпалы — прецедент гнездования из эры заброшенной железной дороги',
          ],
          ar: [
            'البنية التحتية لسكة الشحن الأصلية تحتفظ بمطالبة حوكمة ذاكرة النقل',
            'النباتات التلقائية (بُذرت قبل تنسيق الحدائق) لديها مطالبة سابقة على الأنواع المزروعة',
            'خوارزمية تطبيق الخط العالي تحكم مواضع المشاهدة الموصى بها والزوايا التصويرية',
            'الحمام يطالب بروابط السكة القديمة — سابقة تعشيش من حقبة السكة الحديدية المهجورة',
          ],
        },
        ghost: {
          en: [
            'The meatpacking district workers (1900–1950s) maintain a labour-memory claim on the rail',
            'A woman who jumped from the rail in 1934 holds a residual presence claim at post 14',
          ],
          de: [
            'Arbeiter des Fleischverpackungsviertels (1900–1950er) halten einen Arbeitsspeicheranspruch auf der Schiene',
            'Eine Frau, die 1934 von der Schiene sprang, hält einen verbleibenden Präsenzanspruch an Posten 14',
          ],
          ru: [
            'Рабочие мясопакующего района (1900–1950-е) сохраняют трудовую претензию памяти на рельсах',
            'Женщина, прыгнувшая с рельсов в 1934 году, держит остаточную претензию на присутствие у столба 14',
          ],
          ar: [
            'عمال حي تعبئة اللحوم (1900–1950) يحافظون على مطالبة ذاكرة عمالية على السكة',
            'امرأة قفزت من السكة عام 1934 تحتفظ بمطالبة حضور متبقية عند العمود 14',
          ],
        },
        temporal: {
          en: [
            'Sunset corridor event: light between buildings creates a temporary aesthetic governance zone',
            'Current tourist density: human aggregate temporarily narrows effective path width by 40%',
          ],
          de: [
            'Sonnenuntergang-Korridor-Ereignis: Licht zwischen Gebäuden schafft eine temporäre ästhetische Governance-Zone',
            'Aktuelle Touristendichte: menschliches Aggregat verengt die effektive Wegbreite vorübergehend um 40%',
          ],
          ru: [
            'Событие закатного коридора: свет между зданиями создаёт временную зону эстетического управления',
            'Текущая плотность туристов: человеческий агрегат временно сужает эффективную ширину дорожки на 40%',
          ],
          ar: [
            'حدث ممر الغروب: الضوء بين المباني يخلق منطقة حوكمة جمالية مؤقتة',
            'كثافة السياح الحالية: المجمع البشري يضيّق عرض المسار الفعلي مؤقتاً بنسبة 40%',
          ],
        },
      },
    ],
  },

  cairo: {
    name: { en: 'Cairo', de: 'Kairo', ru: 'Каир', ar: 'القاهرة' },
    lat: 30.0444, lng: 31.2357, zoom: 13,
    locations: [
      {
        id: 'tahrir', type: 'square', lat: 30.0444, lng: 31.2357,
        name: { en: 'Tahrir Square', de: 'Tahrir-Platz', ru: 'Площадь Тахрир', ar: 'ميدان التحرير' },
        atmo: {
          en: 'The square has been used for several different purposes in the last decade. The concrete remembers all of them. The air above it has a particular density that is not weather.',
          de: 'Der Platz wurde im letzten Jahrzehnt für mehrere verschiedene Zwecke genutzt. Der Beton erinnert sich an alle. Die Luft darüber hat eine besondere Dichte, die kein Wetter ist.',
          ru: 'Площадь использовалась для нескольких разных целей в последнее десятилетие. Бетон помнит их все. Воздух над ней имеет особую плотность, которая не является погодной.',
          ar: 'استُخدم الميدان لأغراض مختلفة عدة في العقد الماضي. الخرسانة تتذكرها جميعاً. الهواء فوقها له كثافة خاصة ليست طقساً.',
        },
        owners: {
          en: [
            'The concrete surface holds thermal governance — retains heat for 4 hours after sunset',
            'A feral cat colony holds the northeast corner — territorial claim, continuous since 2011',
            'The traffic algorithm governs vehicular flow across 6 lanes treating the square as a roundabout',
            'Kiosks hold informal commercial territorial claims — seniority determines adjacency rights',
          ],
          de: [
            'Die Betonoberfläche hält thermische Governance — behält 4 Stunden nach Sonnenuntergang Wärme',
            'Eine verwilderte Katzenkolonie hält die Nordostecke — Territoriumsanspruch, kontinuierlich seit 2011',
            'Der Verkehrsalgorithmus regiert den Fahrzeugfluss über 6 Spuren, die den Platz als Kreisverkehr behandeln',
            'Kioske halten informelle kommerzielle Territoriumsansprüche — Dienstalter bestimmt Nachbarschaftsrechte',
          ],
          ru: [
            'Бетонная поверхность держит тепловое управление — удерживает тепло 4 часа после захода солнца',
            'Колония бродячих кошек удерживает северо-восточный угол — территориальная претензия, непрерывная с 2011 года',
            'Алгоритм дорожного движения управляет потоком транспортных средств по 6 полосам, рассматривая площадь как круговую развязку',
            'Киоски имеют неформальные коммерческие территориальные претензии — старшинство определяет права смежности',
          ],
          ar: [
            'السطح الخرساني يحتفظ بالحوكمة الحرارية — يحتفظ بالحرارة لمدة 4 ساعات بعد الغروب',
            'مستعمرة قطط ضالة تحتفظ بالزاوية الشمالية الشرقية — مطالبة إقليمية، مستمرة منذ 2011',
            'خوارزمية حركة المرور تحكم تدفق المركبات عبر 6 مسارات تعامل الميدان كدوار',
            'الأكشاك لديها مطالبات إقليمية تجارية غير رسمية — الأقدمية تحدد حقوق الجوار',
          ],
        },
        ghost: {
          en: [
            'Revolutionary occupation (2011) maintains an atmospheric governance claim, unresolved',
            'A garden (pre-colonial era) holds a botanical memory claim beneath the asphalt',
          ],
          de: [
            'Revolutionäre Besetzung (2011) hält einen atmosphärischen Governance-Anspruch, ungelöst',
            'Ein Garten (vorkoloniale Ära) hält einen botanischen Gedächtnisanspruch unter dem Asphalt',
          ],
          ru: [
            'Революционная оккупация (2011) сохраняет претензию на атмосферное управление, неразрешённую',
            'Сад (доколониальная эра) держит ботаническую претензию памяти под асфальтом',
          ],
          ar: [
            'الاحتلال الثوري (2011) يحافظ على مطالبة حوكمة جوية، غير محسومة',
            'حديقة (حقبة ما قبل الاستعمار) تحتفظ بمطالبة ذاكرة نباتية تحت الإسفلت',
          ],
        },
        temporal: {
          en: [
            'Current heat event: +42°C — temperature holds primary governance of all human behaviour',
            'Evening call to prayer: acoustic governance of the entire square, 4 minutes, non-negotiable',
          ],
          de: [
            'Aktuelles Wärmeereignis: +42°C — Temperatur hält primäre Governance aller menschlichen Verhaltens',
            'Abendliches Gebet: akustische Governance des gesamten Platzes, 4 Minuten, nicht verhandelbar',
          ],
          ru: [
            'Текущее тепловое событие: +42°C — температура держит первичное управление всем человеческим поведением',
            'Вечерний азан: акустическое управление всей площадью, 4 минуты, не подлежит обсуждению',
          ],
          ar: [
            'حدث الحرارة الحالي: +42°C — درجة الحرارة تحتفظ بالحوكمة الأولية لجميع السلوك البشري',
            'الأذان المسائي: الحوكمة الصوتية للميدان بأكمله، 4 دقائق، غير قابلة للتفاوض',
          ],
        },
      },
    ],
  },

  mumbai: {
    name: { en: 'Mumbai', de: 'Mumbai', ru: 'Мумбаи', ar: 'مومباي' },
    lat: 19.076, lng: 72.8777, zoom: 13,
    locations: [
      {
        id: 'dharavi', type: 'district', lat: 19.0414, lng: 72.8541,
        name: { en: 'Dharavi', de: 'Dharavi', ru: 'Дхарави', ar: 'دهاراوي' },
        atmo: {
          en: 'One square mile, one million people, and a governance system that does not appear on any map. The recycling economy runs the entire city\'s material flow. The algorithm has not indexed this.',
          de: 'Eine Quadratmeile, eine Million Menschen und ein Governance-System, das auf keiner Karte erscheint. Die Recyclingwirtschaft treibt den gesamten materiellen Fluss der Stadt an. Der Algorithmus hat dies nicht indiziert.',
          ru: 'Одна квадратная миля, один миллион людей и система управления, которая не появляется ни на одной карте. Экономика переработки управляет всем материальным потоком города. Алгоритм не проиндексировал это.',
          ar: 'ميل مربع واحد، مليون شخص، ونظام حوكمة لا يظهر على أي خريطة. اقتصاد إعادة التدوير يدير كل التدفق المادي للمدينة. الخوارزمية لم تفهرس هذا.',
        },
        owners: {
          en: [
            'The recycling network holds material-flow governance across 15,000 single-room factories',
            'A banyan tree (est. c.1840) claims subsurface sovereignty — roots extend under 3 city blocks',
            'The informal credit system governs economic activity — no registered authority, full compliance',
            'Crows hold aerial territorial governance — the most organised governance body in the district',
          ],
          de: [
            'Das Recyclingnetz hält Materialfluss-Governance über 15.000 Einzimmerfabriken',
            'Ein Banyanbaum (geschätzt ca. 1840) beansprucht unterirdische Souveränität — Wurzeln erstrecken sich unter 3 Stadtblöcken',
            'Das informelle Kreditsystem regiert die Wirtschaftstätigkeit — keine registrierte Behörde, volle Compliance',
            'Krähen halten Luftterritoriumsgovernance — der am besten organisierte Governance-Körper im Bezirk',
          ],
          ru: [
            'Сеть переработки держит управление материальными потоками по 15 000 одно комнатным фабрикам',
            'Баньяновое дерево (основано ок. 1840 года) претендует на подземный суверенитет — корни уходят под 3 городских квартала',
            'Неформальная кредитная система управляет экономической деятельностью — нет зарегистрированного органа, полное соблюдение',
            'Вороны держат воздушное территориальное управление — наиболее организованный орган управления в районе',
          ],
          ar: [
            'شبكة إعادة التدوير تحتفظ بحوكمة تدفق المواد عبر 15,000 مصنع غرفة واحدة',
            'شجرة بانيان (أُسست نحو 1840) تطالب بالسيادة تحت السطحية — الجذور تمتد تحت 3 مبانٍ',
            'نظام الائتمان غير الرسمي يحكم النشاط الاقتصادي — لا سلطة مسجلة، امتثال كامل',
            'الغربان تحتفظ بالحوكمة الإقليمية الجوية — الهيئة الحاكمة الأكثر تنظيماً في الحي',
          ],
        },
        ghost: {
          en: [
            'Original fishing village (pre-colonial) retains a coastal-memory claim on all inland streets',
            'Residents displaced by 2004 redevelopment plans retain habitation claims, legally void',
          ],
          de: [
            'Ursprüngliches Fischerdorf (vorkolonial) behält Küstenerinnerungsanspruch auf allen Innenstraßen',
            'Durch Sanierungspläne von 2004 vertriebene Bewohner behalten Wohnungsansprüche, rechtlich nichtig',
          ],
          ru: [
            'Оригинальная рыбацкая деревня (доколониальная) сохраняет прибрежную претензию памяти на всех внутренних улицах',
            'Жители, перемещённые планами перестройки 2004 года, сохраняют претензии на жильё, юридически ничтожные',
          ],
          ar: [
            'قرية الصيادين الأصلية (ما قبل الاستعمار) تحتفظ بمطالبة ذاكرة ساحلية على جميع الشوارع الداخلية',
            'السكان المهجرون بخطط إعادة التطوير عام 2004 يحتفظون بمطالبات سكن، باطلة قانونياً',
          ],
        },
        temporal: {
          en: [
            'Monsoon pre-season: the drainage system is asserting its governance capacity limits',
            'Current manufacturing shift: acoustic governance of district claimed by metalwork and textile',
          ],
          de: [
            'Monsunvorzeit: das Entwässerungssystem behauptet seine Governance-Kapazitätsgrenzen',
            'Aktuelle Fertigungsschicht: akustische Governance des Bezirks von Metallarbeiten und Textilien beansprucht',
          ],
          ru: [
            'Предмуссонный период: дренажная система заявляет о своих управленческих пределах мощности',
            'Текущая производственная смена: акустическое управление районом заявлено металлообработкой и текстилем',
          ],
          ar: [
            'ما قبل موسم الرياح الموسمية: نظام الصرف الصحي يؤكد حدود قدرته في الحوكمة',
            'وردية التصنيع الحالية: الحوكمة الصوتية للحي مطالب بها من قِبل أعمال المعادن والنسيج',
          ],
        },
      },
    ],
  },
};

// Merge extra locations from cities-extra.js into each city, then add Beirut
export const CITIES = Object.fromEntries(
  Object.entries(CITIES_BASE).map(([key, city]) => [
    key,
    EXTRA_LOCATIONS[key]
      ? { ...city, locations: [...city.locations, ...EXTRA_LOCATIONS[key]] }
      : city,
  ])
);
CITIES.beirut = BEIRUT;
