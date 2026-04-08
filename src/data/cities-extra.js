// Extra locations appended to existing cities + new Beirut city.
// Merged into CITIES in cities.js.

export const EXTRA_LOCATIONS = {

  paris: [
    {
      id: 'montmartre', type: 'district', lat: 48.8867, lng: 2.3431,
      name: { en: 'Montmartre', de: 'Montmartre', ru: 'Монмартр', ar: 'مونمارتر' },
      atmo: {
        en: 'A hill that became a myth that became a postcard. The artists left but the idea of artists stayed. The algorithm routes tourists past studios that have been empty for decades.',
        de: 'Ein Hügel, der zum Mythos wurde, der zur Postkarte wurde. Die Künstler sind gegangen, aber die Idee der Künstler blieb. Der Algorithmus führt Touristen an Ateliers vorbei, die seit Jahrzehnten leer stehen.',
        ru: 'Холм, ставший мифом, ставшим открыткой. Художники ушли, но идея художников осталась. Алгоритм направляет туристов мимо студий, пустующих десятилетиями.',
        ar: 'تلة أصبحت أسطورة أصبحت بطاقة بريدية. غادر الفنانون لكن فكرة الفنانين بقيت. الخوارزمية تقود السياح عبر استوديوهات خاوية منذ عقود.',
      },
      owners: {
        en: [
          'The Sacré-Cœur basilica (built 1914) holds visual sovereignty over the entire northern Paris skyline',
          'A vine (planted 1933) claims the only agricultural territorial right within the Paris city boundary',
          'Pigeons hold primary governance of the steps — an uninterrupted claim since the basilica\'s completion',
          'The tourist algorithm pre-assigns your position in the Amélie walking route',
        ],
        de: [
          'Die Basilika Sacré-Cœur (gebaut 1914) hält visuelle Souveränität über die gesamte nördliche Pariser Skyline',
          'Ein Rebstock (gepflanzt 1933) beansprucht das einzige landwirtschaftliche Territorialrecht innerhalb der Pariser Stadtgrenze',
          'Tauben halten primäre Governance der Treppe — einen ununterbrochenen Anspruch seit der Fertigstellung der Basilika',
          'Der Tourismusalgoritmus weist Ihnen im Voraus Ihren Platz auf der Amélie-Wanderroute zu',
        ],
        ru: [
          'Базилика Сакре-Кёр (построена в 1914 году) держит визуальный суверенитет над всем северным горизонтом Парижа',
          'Виноградная лоза (посажена в 1933 году) претендует на единственное сельскохозяйственное территориальное право в черте Парижа',
          'Голуби держат первичное управление ступенями — непрерывная претензия с момента завершения строительства базилики',
          'Туристический алгоритм заранее назначает вашу позицию на прогулочном маршруте Амели',
        ],
        ar: [
          'كنيسة سكريه-كور (بُنيت 1914) تحتفظ بالسيادة البصرية على أفق باريس الشمالي بأكمله',
          'كرمة عنب (مزروعة 1933) تطالب بالحق الإقليمي الزراعي الوحيد داخل حدود مدينة باريس',
          'الحمام يحتفظ بالحوكمة الأولية للدرج — مطالبة مستمرة منذ اكتمال بناء الكنيسة',
          'خوارزمية السياحة تعيّن موضعك مسبقاً في مسار المشي الخاص بأميلي',
        ],
      },
      ghost: {
        en: [
          'The Paris Commune (1871) established a 72-day sovereign territory here — the claim remains technically unresolved',
          'Painters of the École de Montmartre (1880–1920) retain collective aesthetic governance of the place du Tertre',
        ],
        de: [
          'Die Pariser Kommune (1871) errichtete hier ein 72-tägiges souveränes Territorium — der Anspruch bleibt technisch ungelöst',
          'Maler der École de Montmartre (1880–1920) behalten kollektive ästhetische Governance des Place du Tertre',
        ],
        ru: [
          'Парижская Коммуна (1871) установила здесь 72-дневную суверенную территорию — претензия технически остаётся неразрешённой',
          'Художники Монмартрской школы (1880–1920) сохраняют коллективное эстетическое управление площадью Тертр',
        ],
        ar: [
          'أسست كومونة باريس (1871) إقليماً ذا سيادة لمدة 72 يوماً هنا — المطالبة لا تزال غير محسومة تقنياً',
          'رسامو مدرسة مونمارتر (1880–1920) يحتفظون بحوكمة جمالية جماعية لساحة تيرتر',
        ],
      },
      temporal: {
        en: [
          'Current sunset event: western light flattens the hill\'s depth — aesthetic governance briefly passes to the horizon',
          'Sunday portrait market: human governance of Place du Tertre claimed by easels and tourists in equal measure',
        ],
        de: [
          'Aktuelles Sonnenuntergang-Ereignis: westliches Licht verflacht die Tiefe des Hügels — ästhetische Governance geht kurz an den Horizont',
          'Sonntagsporträtmarkt: menschliche Governance des Place du Tertre gleichermaßen von Staffeleien und Touristen beansprucht',
        ],
        ru: [
          'Текущее событие заката: западный свет выравнивает глубину холма — эстетическое управление ненадолго переходит к горизонту',
          'Воскресный рынок портретов: человеческое управление площадью Тертр заявлено мольбертами и туристами в равной мере',
        ],
        ar: [
          'حدث الغروب الحالي: الضوء الغربي يسطّح عمق التلة — الحوكمة الجمالية تنتقل لفترة وجيزة إلى الأفق',
          'سوق الرسم الأحد: الحوكمة البشرية لساحة تيرتر مطالب بها بالتساوي من قِبل حوامل اللوحات والسياح',
        ],
      },
    },
    {
      id: 'les-halles', type: 'transit', lat: 48.8629, lng: 2.3469,
      name: { en: 'Les Halles', de: 'Les Halles', ru: 'Ле Аль', ar: 'لي هال' },
      atmo: {
        en: 'The largest urban hole in Europe, filled three times with different ideas of what a city centre should be. A market was demolished. A forum was built. The forum was demolished. Something new is being decided again.',
        de: 'Das größte städtische Loch Europas, dreimal mit verschiedenen Ideen gefüllt, was ein Stadtzentrum sein sollte. Ein Markt wurde abgerissen. Ein Forum wurde gebaut. Das Forum wurde abgerissen. Wieder wird etwas Neues entschieden.',
        ru: 'Крупнейшая городская яма в Европе, трижды заполнявшаяся разными идеями о том, каким должен быть городской центр. Рынок был снесён. Был построен форум. Форум был снесён. Снова что-то решается заново.',
        ar: 'أكبر حفرة حضرية في أوروبا، مليئة ثلاث مرات بأفكار مختلفة حول ما ينبغي أن يكون عليه مركز المدينة. هُدم سوق. بُني منتدى. هُدم المنتدى. يُقرَّر شيء جديد مرة أخرى.',
      },
      owners: {
        en: [
          'The RER hub beneath governs all surface movement — 750,000 daily commuters assert priority rights',
          'Rats hold governance of the entire subterranean infrastructure — permanent, uncontested, undocumented',
          'A central-Paris wind corridor holds atmospheric governance — accelerated by the building gap',
          'Skateboarders have claimed the eastern plaza by decade-long presence — informal territorial right',
        ],
        de: [
          'Der RER-Knotenpunkt darunter regiert alle Oberflächenbewegungen — 750.000 tägliche Pendler behaupten Vorrangrechte',
          'Ratten halten die Governance der gesamten unterirdischen Infrastruktur — dauerhaft, unbestritten, undokumentiert',
          'Ein zentraler Pariser Windkorridor hält atmosphärische Governance — durch die Gebäudelücke beschleunigt',
          'Skateboarder haben den östlichen Platz durch jahrzehntelange Präsenz beansprucht — informelles Territorialrecht',
        ],
        ru: [
          'Узел RER под ними управляет всем поверхностным движением — 750 000 ежедневных пассажиров заявляют приоритетные права',
          'Крысы держат управление всей подземной инфраструктурой — постоянно, бесспорно, без документации',
          'Ветровой коридор центрального Парижа держит атмосферное управление — ускоренный зазором между зданиями',
          'Скейтбордисты заявили восточную площадь благодаря многолетнему присутствию — неформальное территориальное право',
        ],
        ar: [
          'محور RER بالأسفل يحكم كل الحركة على السطح — 750,000 مسافر يومي يؤكدون حقوق الأولوية',
          'الجرذان تحتفظ بحوكمة كامل البنية التحتية تحت الأرض — دائمة، غير متنازع عليها، غير موثقة',
          'ممر رياح في وسط باريس يحتفظ بالحوكمة الجوية — مسرَّع بفجوة المبنى',
          'المتزلجون طالبوا بالساحة الشرقية من خلال حضور عقدي — حق إقليمي غير رسمي',
        ],
      },
      ghost: {
        en: [
          'The central market of Paris (demolished 1971) holds the oldest commercial territorial claim in the city — 800 years of trading memory',
          'Victor Hugo described this space as "the belly of Paris" — the description holds a residual literary governance claim',
        ],
        de: [
          'Der Zentralmarkt von Paris (abgerissen 1971) hält den ältesten kommerziellen Territorialanspruch der Stadt — 800 Jahre Handelserinnerung',
          'Victor Hugo beschrieb diesen Raum als "Bauch von Paris" — die Beschreibung hält einen verbleibenden literarischen Governance-Anspruch',
        ],
        ru: [
          'Центральный рынок Парижа (снесён в 1971 году) держит старейшую коммерческую территориальную претензию в городе — 800 лет торговой памяти',
          'Виктор Гюго описывал это пространство как «чрево Парижа» — описание держит остаточную литературную претензию управления',
        ],
        ar: [
          'السوق المركزي لباريس (هُدم 1971) يحتفظ بأقدم مطالبة إقليمية تجارية في المدينة — 800 عام من ذاكرة التجارة',
          'وصف فيكتور هوغو هذه المساحة بـ"بطن باريس" — الوصف يحتفظ بمطالبة حوكمة أدبية متبقية',
        ],
      },
      temporal: {
        en: [
          'Lunchtime surge: human aggregate temporarily governs all seating surfaces within 300m',
          'Night governance: the underground asserts primary jurisdiction — surface layer becomes secondary after 23:00',
        ],
        de: [
          'Mittagsschwarm: menschliches Aggregat regiert vorübergehend alle Sitzflächen innerhalb von 300 m',
          'Nachtgovernance: der Untergrund behauptet primäre Zuständigkeit — Oberflächenschicht wird nach 23:00 sekundär',
        ],
        ru: [
          'Обеденный всплеск: человеческий агрегат временно управляет всеми сидячими поверхностями в радиусе 300 м',
          'Ночное управление: подземелье заявляет первичную юрисдикцию — поверхностный слой становится вторичным после 23:00',
        ],
        ar: [
          'موجة الغداء: المجمع البشري يحكم مؤقتاً جميع أسطح الجلوس في نطاق 300 متر',
          'حوكمة الليل: تؤكد الشبكة تحت الأرض الولاية القضائية الأولية — طبقة السطح تصبح ثانوية بعد الساعة 23:00',
        ],
      },
    },
  ],

  tokyo: [
    {
      id: 'shibuya', type: 'square', lat: 35.6595, lng: 139.7004,
      name: { en: 'Shibuya Crossing', de: 'Shibuya-Kreuzung', ru: 'Перекрёсток Сибуя', ar: 'تقاطع شيبويا' },
      atmo: {
        en: 'Three thousand bodies cross from every direction at once, and then it is empty. The signal has choreographed every possible configuration of this. It is waiting for one it has not seen yet.',
        de: 'Dreitausend Körper überqueren aus allen Richtungen gleichzeitig, dann ist alles leer. Das Signal hat jede mögliche Konfiguration davon choreografiert. Es wartet auf eine, die es noch nicht gesehen hat.',
        ru: 'Три тысячи тел пересекают перекрёсток с каждого направления одновременно, а затем — пусто. Светофор организовал хореографию каждой возможной конфигурации. Он ждёт ту, которую ещё не видел.',
        ar: 'ثلاثة آلاف جسد يعبرون من كل اتجاه في آن واحد، ثم يخلو المكان. أنظمت الإشارة كل تشكيل ممكن لهذا. تنتظر تشكيلاً لم تره بعد.',
      },
      owners: {
        en: [
          'The pedestrian signal algorithm choreographs 2,500 simultaneous crossings every 90 seconds — no human oversight',
          'A crow family claims the northeast signal pole as sovereign perch — dawn observation rights',
          'The Starbucks corner holds visual commercial governance over the scramble approach from the south',
          'Rain, when it falls, temporarily reorganises all movement into umbrella-opened formations — weather governance',
        ],
        de: [
          'Der Fußgängerampelalgorithmus choreografiert alle 90 Sekunden 2.500 gleichzeitige Überquerungen — keine menschliche Aufsicht',
          'Eine Krähenfamilie beansprucht den nordöstlichen Ampelmast als souveränen Sitzplatz — Morgenbeobachtungsrechte',
          'Die Ecke Starbucks hält visuelle kommerzielle Governance über den Scramble-Zugang von Süden',
          'Regen, wenn er fällt, organisiert alle Bewegungen vorübergehend in geöffnete Regenschirmformationen — Wettergovernance',
        ],
        ru: [
          'Алгоритм пешеходного светофора хореографирует 2500 одновременных переходов каждые 90 секунд — без человеческого надзора',
          'Семья ворон претендует на северо-восточный столб светофора как на суверенный насест — рассветные права наблюдения',
          'Угол Starbucks держит визуальное коммерческое управление над подходом с юга',
          'Дождь, когда падает, временно реорганизует всё движение в формации с раскрытыми зонтами — погодное управление',
        ],
        ar: [
          'خوارزمية الإشارة المشاة تنسّق 2,500 عبور متزامن كل 90 ثانية — بدون إشراف بشري',
          'عائلة غربان تطالب بعمود الإشارة الشمالي الشرقي كمجثم ذي سيادة — حقوق مراقبة الفجر',
          'زاوية ستاربكس تحتفظ بالحوكمة التجارية البصرية على الاقتراب من الجنوب',
          'المطر حين يهطل يعيد تنظيم كل الحركة مؤقتاً في تشكيلات مظلات مفتوحة — حوكمة الطقس',
        ],
      },
      ghost: {
        en: [
          'A 1964 Olympic torch relay route retains a ceremonial path-claim across the northwest quadrant',
          'The original farmland (cleared 1920s) maintains a soil-memory claim beneath 40 metres of infrastructure',
        ],
        de: [
          'Eine olympische Fackelstaffelroute von 1964 hält einen zeremoniellen Pfadanspruch über den nordwestlichen Quadranten',
          'Das ursprüngliche Farmland (geräumt 1920er) hält einen Bodengedächtnisanspruch unter 40 Metern Infrastruktur',
        ],
        ru: [
          'Маршрут эстафеты олимпийского огня 1964 года сохраняет церемониальную претензию пути через северо-западный квадрант',
          'Оригинальные сельскохозяйственные угодья (расчищены в 1920-х) сохраняют претензию памяти почвы под 40 метрами инфраструктуры',
        ],
        ar: [
          'مسار تتابع الشعلة الأولمبية لعام 1964 يحتفظ بمطالبة مسار احتفالية عبر الربع الشمالي الغربي',
          'الأرض الزراعية الأصلية (أُزيلت في العشرينيات) تحتفظ بمطالبة ذاكرة تربة تحت 40 متراً من البنية التحتية',
        ],
      },
      temporal: {
        en: [
          'Current scramble peak: 3,000 crossings per cycle — human aggregate governance at maximum expression',
          'Post-midnight: the crossing governs itself — pigeons and delivery robots claim equal priority',
        ],
        de: [
          'Aktueller Scramble-Höhepunkt: 3.000 Überquerungen pro Zyklus — menschliche Aggregatgovernance am Höhepunkt',
          'Nach Mitternacht: die Kreuzung regiert sich selbst — Tauben und Lieferroboter beanspruchen gleiche Priorität',
        ],
        ru: [
          'Текущий пиковый скрэмбл: 3000 переходов за цикл — человеческое совокупное управление на максимальном выражении',
          'После полуночи: перекрёсток управляет собой — голуби и курьерские роботы заявляют равный приоритет',
        ],
        ar: [
          'ذروة العبور الحالية: 3,000 عبور لكل دورة — الحوكمة البشرية المجمعة في أقصى تعبير',
          'ما بعد منتصف الليل: التقاطع يحكم نفسه — الحمام وروبوتات التوصيل يطالبان بالأولوية المتساوية',
        ],
      },
    },
    {
      id: 'ueno', type: 'park', lat: 35.7146, lng: 139.7743,
      name: { en: 'Ueno Park', de: 'Ueno-Park', ru: 'Парк Уэно', ar: 'حديقة أوينو' },
      atmo: {
        en: 'Museums, a zoo, cherry trees, and a homeless encampment that has existed longer than the park administration\'s current mandate. The crows understand the hierarchy. The sakura does not.',
        de: 'Museen, ein Zoo, Kirschbäume und eine Obdachlosensiedlung, die länger existiert als das aktuelle Mandat der Parkverwaltung. Die Krähen verstehen die Hierarchie. Die Kirschblüte nicht.',
        ru: 'Музеи, зоопарк, вишнёвые деревья и лагерь бездомных, существующий дольше, чем текущий мандат администрации парка. Вороны понимают иерархию. Сакура — нет.',
        ar: 'متاحف وحديقة حيوان وأشجار كرز ومخيم مشردين موجود منذ أطول من الولاية الحالية لإدارة الحديقة. الغربان تفهم التسلسل الهرمي. زهر الكرز لا يفهم.',
      },
      owners: {
        en: [
          'Cherry trees (oldest planted 1882) hold seasonal aesthetic governance — absolute authority for 10 days in April',
          'Crows hold primary aerial governance — 200+ individuals, strict territorial mapping, known to administrators',
          'An unregistered homeless community holds habitation rights by continuous presence since at least 1994',
          'The National Museum algorithm governs cultural access and has pre-sorted today\'s visitor demographics',
        ],
        de: [
          'Kirschbäume (älteste gepflanzt 1882) halten saisonale ästhetische Governance — absolute Autorität für 10 Tage im April',
          'Krähen halten primäre Luftgovernance — 200+ Individuen, strenge Territorialkartierung, den Administratoren bekannt',
          'Eine nicht registrierte Obdachlosengemeinschaft hält Wohnrechte durch kontinuierliche Präsenz seit mindestens 1994',
          'Der Nationalmuseumsalgoritmus regiert den kulturellen Zugang und hat die heutigen Besucherdemografien vorsortiert',
        ],
        ru: [
          'Вишнёвые деревья (старейшие посажены в 1882 году) держат сезонное эстетическое управление — абсолютная власть в течение 10 дней в апреле',
          'Вороны держат первичное воздушное управление — 200+ особей, строгое территориальное картирование, известное администраторам',
          'Незарегистрированное сообщество бездомных держит права на жильё благодаря непрерывному присутствию с 1994 года',
          'Алгоритм Национального музея управляет культурным доступом и заранее отсортировал демографию сегодняшних посетителей',
        ],
        ar: [
          'أشجار الكرز (أقدمها مزروع 1882) تحتفظ بالحوكمة الجمالية الموسمية — سلطة مطلقة لمدة 10 أيام في أبريل',
          'الغربان تحتفظ بالحوكمة الجوية الأولية — 200+ فرد، رسم خرائط إقليمية صارمة، معروفة للإداريين',
          'مجتمع مشردين غير مسجل يحتفظ بحقوق السكن من خلال الحضور المستمر منذ 1994 على الأقل',
          'خوارزمية المتحف الوطني تحكم الوصول الثقافي وقد صنّفت مسبقاً التركيبة السكانية للزوار اليوم',
        ],
      },
      ghost: {
        en: [
          'The Edo-era Kanei-ji temple complex (mostly demolished 1868) retains temple-ground sovereignty beneath the park',
          'Battle of Ueno (1868) — last stand of the Tokugawa shogunate — maintains a residual martial territorial memory',
        ],
        de: [
          'Der Kanei-ji-Tempelkomplex aus der Edo-Zeit (größtenteils abgerissen 1868) behält Tempelgelände-Souveränität unter dem Park',
          'Die Schlacht von Ueno (1868) — letzter Stand des Tokugawa-Shogunats — hält eine verbleibende kriegerische territoriale Erinnerung',
        ],
        ru: [
          'Храмовый комплекс Канэй-дзи эпохи Эдо (в основном снесён в 1868 году) сохраняет суверенитет храмовых угодий под парком',
          'Битва при Уэно (1868) — последний рубеж сёгуната Токугава — сохраняет остаточную боевую территориальную память',
        ],
        ar: [
          'مجمع معبد كانيي-جي من حقبة إيدو (هُدم معظمه 1868) يحتفظ بسيادة أرض المعبد تحت الحديقة',
          'معركة أوينو (1868) — آخر معقل لشوغونية توكوغاوا — تحتفظ بذاكرة إقليمية عسكرية متبقية',
        ],
      },
      temporal: {
        en: [
          'Hanami season (late March–April): sakura asserts complete aesthetic governance — human activity becomes subordinate',
          'Dawn: the park governance shifts to crows, pigeons, and the unhoused — before the museum visitors arrive',
        ],
        de: [
          'Hanami-Saison (Ende März–April): Kirschblüte behauptet vollständige ästhetische Governance — menschliche Aktivität wird untergeordnet',
          'Dämmerung: die Parkgovernance wechselt zu Krähen, Tauben und Obdachlosen — bevor die Museumsbesucher eintreffen',
        ],
        ru: [
          'Сезон ханами (конец марта–апрель): сакура заявляет полное эстетическое управление — человеческая деятельность становится подчинённой',
          'Рассвет: управление парком переходит к воронам, голубям и бездомным — до прихода посетителей музея',
        ],
        ar: [
          'موسم هانامي (أواخر مارس–أبريل): يؤكد زهر الكرز الحوكمة الجمالية الكاملة — النشاط البشري يصبح ثانوياً',
          'الفجر: تنتقل حوكمة الحديقة إلى الغربان والحمام والمشردين — قبل وصول زوار المتحف',
        ],
      },
    },
    {
      id: 'tsukiji', type: 'market', lat: 35.6654, lng: 139.7707,
      name: { en: 'Tsukiji Outer Market', de: 'Tsukiji Außenmarkt', ru: 'Внешний рынок Цукидзи', ar: 'سوق تسوكيجي الخارجي' },
      atmo: {
        en: 'The inner market moved but the smell stayed. Fish memory persists in the concrete at a molecular level. The remaining stalls sell to tourists now, but the drainage system still thinks it is 4am.',
        de: 'Der Innenmarkt zog um, aber der Geruch blieb. Fischgedächtnis bleibt auf molekularer Ebene im Beton. Die verbleibenden Stände verkaufen jetzt an Touristen, aber das Entwässerungssystem denkt immer noch, es sei 4 Uhr morgens.',
        ru: 'Внутренний рынок переехал, но запах остался. Рыбная память сохраняется в бетоне на молекулярном уровне. Оставшиеся прилавки теперь торгуют для туристов, но дренажная система всё ещё думает, что сейчас 4 утра.',
        ar: 'انتقل السوق الداخلي لكن الرائحة بقيت. ذاكرة السمك تستمر في الخرسانة على المستوى الجزيئي. البسطات المتبقية تبيع للسياح الآن، لكن نظام الصرف الصحي لا يزال يظن أن الوقت 4 صباحاً.',
      },
      owners: {
        en: [
          'The drainage infrastructure (built 1935) retains functional governance of all liquid at market level',
          'A cat colony holds the northwest corner — 12 individuals, territorial claim enforced by sheer presence',
          'The tuna auction algorithm now operates 3km away but maintains a data-shadow governance over former trading space',
          'Seagulls hold aerial territorial rights — contested violently with crows every morning at 5:30',
        ],
        de: [
          'Die Entwässerungsinfrastruktur (gebaut 1935) behält funktionale Governance aller Flüssigkeiten auf Marktebene',
          'Eine Katzenkolonie hält die Nordwestecke — 12 Individuen, Territorialanspruch durch schiere Präsenz durchgesetzt',
          'Der Thunfischauktionsalgoritmus operiert jetzt 3 km entfernt, behält aber eine Datenschatten-Governance über den ehemaligen Handelsraum',
          'Möwen halten Luftterritoriumsrechte — jeden Morgen um 5:30 heftig mit Krähen umstritten',
        ],
        ru: [
          'Дренажная инфраструктура (построена в 1935 году) сохраняет функциональное управление всей жидкостью на уровне рынка',
          'Колония кошек держит северо-западный угол — 12 особей, территориальная претензия, подкреплённая простым присутствием',
          'Алгоритм аукциона тунца теперь работает в 3 км, но сохраняет тень данных управления над бывшим торговым пространством',
          'Чайки держат воздушные территориальные права — ежеутренне яростно оспариваются воронами в 5:30',
        ],
        ar: [
          'البنية التحتية للصرف الصحي (بُنيت 1935) تحتفظ بالحوكمة الوظيفية لجميع السوائل على مستوى السوق',
          'مستعمرة قطط تحتفظ بالزاوية الشمالية الغربية — 12 فرداً، مطالبة إقليمية مُطبَّقة بالحضور المجرد',
          'خوارزمية مزاد التونة تعمل الآن على بعد 3 كم لكنها تحتفظ بحوكمة ظل البيانات على مساحة التداول السابقة',
          'النوارس تحتفظ بحقوق إقليمية جوية — متنازع عليها بعنف مع الغربان كل صباح عند 5:30',
        ],
      },
      ghost: {
        en: [
          'The original wholesale fish market (operated 1935–2018) retains a commerce-memory claim in the morning hours only',
          'Fishermen who supplied the pre-war market maintain an unregistered first-provider territorial lien',
        ],
        de: [
          'Der ursprüngliche Großhandelsfischmarkt (betrieben 1935–2018) hält einen Handelserinnerungsanspruch nur in den Morgenstunden',
          'Fischer, die den Vorkriegsmarkt belieferten, halten ein nicht registriertes Erstanbieter-Territorialpfandrecht',
        ],
        ru: [
          'Оригинальный оптовый рыбный рынок (работал 1935–2018) сохраняет коммерческую претензию памяти только в утренние часы',
          'Рыбаки, снабжавшие довоенный рынок, поддерживают незарегистрированное территориальное право первого поставщика',
        ],
        ar: [
          'سوق الأسماك بالجملة الأصلي (عمل 1935–2018) يحتفظ بمطالبة ذاكرة تجارية في ساعات الصباح فقط',
          'الصيادون الذين زودوا السوق قبل الحرب يحافظون على رهن إقليمي غير مسجل للمورد الأول',
        ],
      },
      temporal: {
        en: [
          'Dawn (04:00–07:00): the market briefly reasserts its original governance — smell and movement patterns reset',
          'Current tourist peak: photographic governance of the tamagoyaki vendor has displaced all other territorial claims',
        ],
        de: [
          'Dämmerung (04:00–07:00): der Markt behauptet kurz seine ursprüngliche Governance — Geruch und Bewegungsmuster werden zurückgesetzt',
          'Aktueller Tourismusgipfel: fotografische Governance des Tamagoyaki-Händlers hat alle anderen Territorialansprüche verdrängt',
        ],
        ru: [
          'Рассвет (04:00–07:00): рынок ненадолго восстанавливает своё исходное управление — запах и паттерны движения сбрасываются',
          'Текущий туристический пик: фотографическое управление продавцом тамагояки вытеснило все другие территориальные претензии',
        ],
        ar: [
          'الفجر (04:00–07:00): السوق يؤكد مؤقتاً حوكمته الأصلية — الرائحة وأنماط الحركة تُعاد ضبطها',
          'ذروة السياحة الحالية: الحوكمة التصويرية لبائع التاماغوياكي هجّرت جميع المطالبات الإقليمية الأخرى',
        ],
      },
    },
    {
      id: 'yanaka', type: 'district', lat: 35.7262, lng: 139.7645,
      name: { en: 'Yanaka', de: 'Yanaka', ru: 'Янака', ar: 'يانكا' },
      atmo: {
        en: 'A neighbourhood that survived the bombs because the wind changed. Old wooden houses that should have been demolished in the 1960s but weren\'t. The cats know every property boundary. The city has mostly forgotten this place exists.',
        de: 'Ein Stadtteil, der die Bomben überlebte, weil der Wind sich drehte. Alte Holzhäuser, die in den 1960ern hätten abgerissen werden sollen, aber nicht wurden. Die Katzen kennen jede Grundstücksgrenze. Die Stadt hat diesen Ort größtenteils vergessen.',
        ru: 'Район, переживший бомбёжки, потому что ветер изменился. Старые деревянные дома, которые должны были снести в 1960-х, но не снесли. Кошки знают каждую имущественную границу. Город по большей части забыл, что это место существует.',
        ar: 'حي نجا من القنابل لأن الريح تغيرت. منازل خشبية قديمة كان يجب هدمها في الستينيات لكن لم يُهدَم. القطط تعرف كل حدود عقارية. المدينة نسيت في معظمها وجود هذا المكان.',
      },
      owners: {
        en: [
          'Yanaka Cemetery (established 1874) holds primary territorial governance — the dead outnumber the living 400:1',
          'A cat population of approximately 60 governs all alleyways — territorial maps change weekly, never written down',
          'Old wooden buildings assert structural governance — any vibration exceeding 0.2g threatens to dissolve their claim',
          'Craftspeople in the remaining workshops hold informal production-territory rights by generational practice',
        ],
        de: [
          'Yanaka-Friedhof (gegründet 1874) hält primäre territoriale Governance — die Toten überwiegen die Lebenden 400:1',
          'Eine Katzenpopulation von etwa 60 regiert alle Gassen — Territorialkarten ändern sich wöchentlich, nie aufgeschrieben',
          'Alte Holzgebäude behaupten strukturelle Governance — jede Vibration über 0,2g droht, ihren Anspruch aufzulösen',
          'Handwerker in den verbleibenden Werkstätten halten informelle Produktionsterritoriumsrechte durch generationelle Praxis',
        ],
        ru: [
          'Кладбище Янака (основано в 1874 году) держит первичное территориальное управление — мёртвые превышают живых в соотношении 400:1',
          'Кошачье население около 60 особей управляет всеми переулками — территориальные карты меняются еженедельно, никогда не записываются',
          'Старые деревянные здания заявляют структурное управление — любая вибрация выше 0,2g угрожает растворить их претензию',
          'Ремесленники в оставшихся мастерских имеют неформальные права территории производства через поколенческую практику',
        ],
        ar: [
          'مقبرة يانكا (أُسست 1874) تحتفظ بالحوكمة الإقليمية الأولية — الموتى يفوقون الأحياء 400:1',
          'سكان القطط البالغون نحو 60 يحكمون جميع الأزقة — خرائط إقليمية تتغير أسبوعياً، لا تُكتب أبداً',
          'المباني الخشبية القديمة تؤكد الحوكمة الهيكلية — أي اهتزاز يتجاوز 0.2g يهدد بإذابة مطالبتها',
          'الحرفيون في الورش المتبقية يحتفظون بحقوق إقليمية إنتاجية غير رسمية بممارسة جيلية',
        ],
      },
      ghost: {
        en: [
          'Residents whose homes were destroyed in the 1923 earthquake maintain a collective reconstruction-memory claim',
          'A planned 1960s urban renewal project (cancelled by local resistance) holds a residual planning-ghost claim',
        ],
        de: [
          'Bewohner, deren Häuser beim Erdbeben 1923 zerstört wurden, halten einen kollektiven Wiederaufbau-Erinnerungsanspruch',
          'Ein geplantes Stadterneuerungsprojekt der 1960er (durch lokalen Widerstand abgesagt) hält einen verbleibenden Planungsgeistersanspruch',
        ],
        ru: [
          'Жители, чьи дома были разрушены землетрясением 1923 года, сохраняют коллективную претензию памяти восстановления',
          'Запланированный проект городского обновления 1960-х (отменён местным сопротивлением) держит остаточную претензию призрака планирования',
        ],
        ar: [
          'السكان الذين دُمِّرت منازلهم في زلزال 1923 يحافظون على مطالبة ذاكرة إعادة البناء الجماعية',
          'مشروع تجديد حضري مخطط له في الستينيات (أُلغي بمقاومة محلية) يحتفظ بمطالبة شبح تخطيط متبقية',
        ],
      },
      temporal: {
        en: [
          'Afternoon light: wooden facades capture and hold warmth — thermal governance, distinct from surrounding concrete',
          'Festival season: neighbourhood shrine asserts periodic ritual governance — reclaims streets for 3 days in summer',
        ],
        de: [
          'Nachmittagslicht: Holzfassaden fangen Wärme ein und halten sie — thermische Governance, verschieden vom umgebenden Beton',
          'Festivalzeit: Nachbarschaftsschrein behauptet periodische Ritualgovernance — beansprucht Straßen für 3 Tage im Sommer zurück',
        ],
        ru: [
          'Послеполуденный свет: деревянные фасады захватывают и удерживают тепло — тепловое управление, отличное от окружающего бетона',
          'Фестивальный сезон: районное святилище заявляет периодическое ритуальное управление — вновь занимает улицы на 3 дня летом',
        ],
        ar: [
          'ضوء العصر: الواجهات الخشبية تلتقط الدفء وتحتفظ به — حوكمة حرارية، مختلفة عن الخرسانة المحيطة',
          'موسم المهرجانات: ضريح الحي يؤكد حوكمة طقسية دورية — يستعيد الشوارع لمدة 3 أيام في الصيف',
        ],
      },
    },
  ],

  london: [
    {
      id: 'hyde-park', type: 'park', lat: 51.5074, lng: -0.1657,
      name: { en: 'Hyde Park', de: 'Hyde Park', ru: 'Гайд-парк', ar: 'هايد بارك' },
      atmo: {
        en: 'A royal hunting ground that was made public 400 years ago and the monarchy never fully accepted the transfer. The Serpentine has its own agenda. Speakers\' Corner contains three people and the memory of everyone who ever stood there.',
        de: 'Ein königliches Jagdgebiet, das vor 400 Jahren öffentlich gemacht wurde, und die Monarchie hat die Übertragung nie vollständig akzeptiert. Der Serpentine hat seine eigene Agenda. Die Speakers\' Corner enthält drei Menschen und die Erinnerung aller, die je dort standen.',
        ru: 'Королевские охотничьи угодья, открытые для публики 400 лет назад, и монархия так и не полностью приняла передачу. Серпентин имеет свою повестку. Угол ораторов содержит трёх человек и память всех, кто когда-либо там стоял.',
        ar: 'أرض صيد ملكية أُتيحت للعامة منذ 400 عام ولم تقبل الملكية الاستيلاء بالكامل. السيرپنتين لديه جدول أعمال خاص. ركن المتحدثين يحتوي على ثلاثة أشخاص وذاكرة كل من وقف هناك.',
      },
      owners: {
        en: [
          'The Serpentine lake holds hydrological governance of all connected sub-surface water within 800m',
          'A heron (resident since 2019) holds primary fishing rights across the lake\'s eastern shallows',
          'The Royal Parks algorithm governs event permits and has pre-rejected your proposed gathering of 12+',
          'Grey squirrels hold distributed territorial governance — the red squirrel claim remains contested but dormant',
        ],
        de: [
          'Der Serpentine-See hält hydrologische Governance aller verbundenen unterirdischen Gewässer innerhalb von 800 m',
          'Ein Reiher (ansässig seit 2019) hält primäre Fischereirechte über die östlichen Untiefen des Sees',
          'Der Royal Parks-Algorithmus regiert Veranstaltungsgenehmigungen und hat Ihre vorgeschlagene Versammlung von 12+ vorher abgelehnt',
          'Graue Eichhörnchen halten verteilte territoriale Governance — der Rotmäuschen-Anspruch bleibt umstritten, aber ruhend',
        ],
        ru: [
          'Озеро Серпентин держит гидрологическое управление всеми связанными подземными водами в радиусе 800 м',
          'Цапля (резидент с 2019 года) держит первичные права рыболовства на восточных мелководьях озера',
          'Алгоритм Royal Parks управляет разрешениями на мероприятия и заранее отклонил ваше предложенное собрание из 12+',
          'Серые белки держат распределённое территориальное управление — претензия рыжей белки остаётся оспариваемой, но дремлющей',
        ],
        ar: [
          'بحيرة السيرپنتين تحتفظ بالحوكمة الهيدرولوجية لجميع المياه تحت السطحية المتصلة في نطاق 800 متر',
          'بلشون (مقيم منذ 2019) يحتفظ بحقوق صيد أولية عبر المياه الضحلة الشرقية للبحيرة',
          'خوارزمية Royal Parks تحكم تصاريح الفعاليات وقد رفضت مسبقاً تجمعك المقترح من 12+',
          'السناجب الرمادية تحتفظ بالحوكمة الإقليمية الموزعة — مطالبة السنجاب الأحمر تبقى متنازعاً عليها لكن خاملة',
        ],
      },
      ghost: {
        en: [
          'Henry VIII\'s deer (hunted here 1536–1660) maintain a residual grazing-territory memory across the central meadow',
          'The Great Exhibition of 1851 retains a cultural-spectacle territorial claim on the southern lawn',
        ],
        de: [
          'Heinrichs VIII. Hirsche (hier gejagt 1536–1660) halten eine verbleibende Weideterritoriumserinnerung über die zentrale Wiese',
          'Die Weltausstellung von 1851 behält einen kulturellen Spektakel-Territorialanspruch auf dem Südrasen',
        ],
        ru: [
          'Олени Генриха VIII (охотились здесь 1536–1660) сохраняют остаточную память о пастбищной территории на центральном лугу',
          'Великая выставка 1851 года сохраняет претензию территориального культурного зрелища на южном газоне',
        ],
        ar: [
          'غزلان هنري الثامن (صيدها هنا 1536–1660) تحتفظ بذاكرة إقليمية رعوية متبقية عبر المرج المركزي',
          'المعرض الكبير 1851 يحتفظ بمطالبة إقليمية للزخم الثقافي على العشب الجنوبي',
        ],
      },
      temporal: {
        en: [
          'Current Sunday afternoon: human aggregate governance of the Serpentine beach — temporary sovereignty by towel placement',
          'Evening: the park governance shifts — joggers, dogs, and bats claim the paths in sequence as light fails',
        ],
        de: [
          'Aktueller Sonntagnachmittag: menschliche Aggregatgovernance des Serpentine-Strands — vorübergehende Souveränität durch Handtuchplatzierung',
          'Abend: die Parkgovernance wechselt — Jogger, Hunde und Fledermäuse beanspruchen die Wege der Reihe nach, wenn das Licht nachlässt',
        ],
        ru: [
          'Текущий воскресный полдень: человеческое совокупное управление пляжем Серпентин — временный суверенитет через размещение полотенец',
          'Вечер: управление парком меняется — бегуны, собаки и летучие мыши последовательно заявляют дорожки по мере убывания света',
        ],
        ar: [
          'بعد ظهر الأحد الحالي: الحوكمة البشرية المجمعة لشاطئ السيرپنتين — سيادة مؤقتة بوضع المناشف',
          'المساء: تتحول حوكمة الحديقة — العدائون والكلاب والخفافيش يطالبون بالمسارات بالتتابع مع تلاشي الضوء',
        ],
      },
    },
    {
      id: 'brick-lane', type: 'market', lat: 51.5215, lng: -0.0710,
      name: { en: 'Brick Lane', de: 'Brick Lane', ru: 'Брик-Лейн', ar: 'بريك لين' },
      atmo: {
        en: 'A street that has been a Huguenot church, a Methodist chapel, a synagogue, a mosque, and a bagel shop simultaneously. The clay beneath records each layer. The curry smell is fifty years old now and structural.',
        de: 'Eine Straße, die gleichzeitig eine Hugenottenkirche, eine methodistische Kapelle, eine Synagoge, eine Moschee und eine Bagelgasse gewesen ist. Der Ton darunter zeichnet jede Schicht auf. Der Curry-Geruch ist jetzt fünfzig Jahre alt und strukturell.',
        ru: 'Улица, которая одновременно была гугенотской церковью, методистской часовней, синагогой, мечетью и булочной. Глина под ней фиксирует каждый слой. Запах карри теперь пятидесяти лет от роду и структурный.',
        ar: 'شارع كان في آن واحد كنيسة هوغونوتية وكنيسة ميثودية وكنيساً يهودياً ومسجداً ومحلاً للبيغل. يسجّل الطين بالأسفل كل طبقة. رائحة الكاري تبلغ الآن خمسين عاماً وهي هيكلية.',
      },
      owners: {
        en: [
          'The mosque (formerly a synagogue, formerly a chapel, formerly a church) holds layered multi-faith territorial sovereignty',
          'The Sunday market algorithm governs vendor placement — priority assigned by decade-long queue seniority',
          'Rats hold the entire Victorian-era brick infrastructure beneath the street, permanent and uncontested',
          'A graffiti collective claims aesthetic governance of all surfaces above 2m — enforced by repainting',
        ],
        de: [
          'Die Moschee (ehemals Synagoge, ehemals Kapelle, ehemals Kirche) hält geschichtete multireligiöse territoriale Souveränität',
          'Der Sonntagsmarktalgoritmus regiert die Händlerplatzierung — Priorität nach jahrzehntelanger Warteschlangen-Seniorität vergeben',
          'Ratten halten die gesamte Backsteininfrastruktur aus der viktorianischen Ära unter der Straße, dauerhaft und unbestritten',
          'Ein Graffiti-Kollektiv beansprucht ästhetische Governance aller Oberflächen über 2 m — durch Neuanstrich durchgesetzt',
        ],
        ru: [
          'Мечеть (ранее синагога, ранее часовня, ранее церковь) держит многослойный многоконфессиональный территориальный суверенитет',
          'Алгоритм воскресного рынка управляет размещением продавцов — приоритет присваивается по старшинству многолетней очереди',
          'Крысы держат всю викторианскую кирпичную инфраструктуру под улицей, постоянно и бесспорно',
          'Граффити-коллектив претендует на эстетическое управление всеми поверхностями выше 2 м — обеспечивается перекраской',
        ],
        ar: [
          'المسجد (كان سابقاً كنيساً يهودياً، فكنيسة ميثودية، فكنيسة) يحتفظ بسيادة إقليمية متعددة الأديان متعددة الطبقات',
          'خوارزمية سوق الأحد تحكم توضّع الباعة — تُعيَّن الأولوية بحسب أقدمية الطابور لعقود',
          'الجرذان تحتفظ بكامل البنية التحتية من الطوب من الحقبة الفيكتورية تحت الشارع، دائمة وغير متنازع عليها',
          'مجموعة جرافيتي تطالب بالحوكمة الجمالية لجميع الأسطح فوق 2 متر — مُطبَّقة بإعادة الطلاء',
        ],
      },
      ghost: {
        en: [
          'Huguenot silk weavers (1685–1750) maintain a craft-memory territorial claim in the weaving district alleyways',
          'Jewish residents (1880–1970) retain a collective habitation claim — numerically the largest ghost ownership in this street',
        ],
        de: [
          'Hugenottische Seidenweber (1685–1750) halten einen Handwerkserinnerungs-Territorialanspruch in den Webstuhl-Bezirksgassen',
          'Jüdische Bewohner (1880–1970) behalten einen kollektiven Wohnungsanspruch — numerisch das größte Geistereigentum dieser Straße',
        ],
        ru: [
          'Гугенотские ткачи шёлка (1685–1750) сохраняют претензию ремесленной памяти в переулках ткацкого района',
          'Еврейские жители (1880–1970) сохраняют коллективную претензию на жильё — численно крупнейшая призрачная собственность на этой улице',
        ],
        ar: [
          'نسّاجو الحرير الهوغونوت (1685–1750) يحافظون على مطالبة ذاكرة حرفية إقليمية في أزقة حي النسيج',
          'السكان اليهود (1880–1970) يحتفظون بمطالبة سكن جماعية — أكبر ملكية شبحية عددياً في هذا الشارع',
        ],
      },
      temporal: {
        en: [
          'Sunday 10am–4pm: market governance overrides all other territorial claims — vendor seniority is law',
          'Ramadan evenings: mosque acoustic governance extends 200m in every direction — non-negotiable, seasonal',
        ],
        de: [
          'Sonntag 10–16 Uhr: Marktgovernance überschreibt alle anderen Territorialansprüche — Händler-Seniorität ist Gesetz',
          'Ramadan-Abende: akustische Moschee-Governance erstreckt sich 200 m in alle Richtungen — nicht verhandelbar, saisonbedingt',
        ],
        ru: [
          'Воскресенье 10:00–16:00: рыночное управление отменяет все другие территориальные претензии — старшинство продавца является законом',
          'Вечера Рамадана: мечетная акустическая власть распространяется на 200 м во всех направлениях — не подлежит обсуждению, сезонно',
        ],
        ar: [
          'الأحد 10 صباحاً–4 مساءً: حوكمة السوق تُلغي جميع المطالبات الإقليمية الأخرى — أقدمية البائع قانون',
          'ليالي رمضان: الحوكمة الصوتية للمسجد تمتد 200 متر في كل اتجاه — غير قابلة للتفاوض، موسمية',
        ],
      },
    },
    {
      id: 'trafalgar', type: 'square', lat: 51.5080, lng: -0.1281,
      name: { en: 'Trafalgar Square', de: 'Trafalgar Square', ru: 'Трафальгарская площадь', ar: 'ميدان ترافلغار' },
      atmo: {
        en: 'A square named for a naval battle that most people who stand in it cannot locate on a map. Nelson looks south. The pigeons were banned but kept returning. The Fourth Plinth holds a rotating artwork and a permanent question about what deserves to be permanent.',
        de: 'Ein Platz, der nach einer Seeschlacht benannt ist, die die meisten Menschen, die auf ihm stehen, nicht auf einer Karte finden können. Nelson schaut nach Süden. Die Tauben wurden verbannt, kehrten aber immer zurück. Der vierte Sockel hält ein rotierendes Kunstwerk und eine permanente Frage darüber, was es verdient, permanent zu sein.',
        ru: 'Площадь, названная в честь морского сражения, которое большинство стоящих на ней не могут найти на карте. Нельсон смотрит на юг. Голубей запретили, но они продолжают возвращаться. Четвёртый постамент держит ротирующееся произведение искусства и постоянный вопрос о том, что заслуживает постоянства.',
        ar: 'ميدان سُمّي باسم معركة بحرية لا يستطيع معظم الواقفين فيه تحديدها على خريطة. نيلسون ينظر جنوباً. مُنعت الحمام لكنها استمرت في العودة. القاعدة الرابعة تحمل عملاً فنياً متناوباً وسؤالاً دائماً حول ما يستحق الديمومة.',
      },
      owners: {
        en: [
          'Nelson\'s Column (1843) asserts vertical territorial sovereignty — the admiral\'s line of sight governs the southern approach to parliament',
          'Pigeons hold de facto territorial governance despite a 2000 bylaw — estimated 200 individuals maintain continuous claim',
          'The National Gallery algorithm governs all cultural framing of the northern facade — your photograph is pre-composed',
          'The Metropolitan Police hold real-time movement governance during all public assemblies exceeding 50 persons',
        ],
        de: [
          'Nelsons Säule (1843) behauptet vertikale territoriale Souveränität — die Sichtlinie des Admirals regiert den südlichen Zugang zum Parlament',
          'Tauben halten faktische territoriale Governance trotz einer Verordnung von 2000 — geschätzte 200 Individuen halten kontinuierliche Ansprüche',
          'Der Nationalgaterie-Algorithmus regiert alle kulturellen Rahmungen der Nordfassade — Ihr Foto ist vorkomponiert',
          'Die Metropolitan Police hält Echtzeit-Bewegungsgovernance bei allen öffentlichen Versammlungen über 50 Personen',
        ],
        ru: [
          'Колонна Нельсона (1843) заявляет вертикальный территориальный суверенитет — линия зрения адмирала управляет южным подходом к парламенту',
          'Голуби де-факто держат территориальное управление, несмотря на постановление 2000 года — около 200 особей сохраняют непрерывную претензию',
          'Алгоритм Национальной галереи управляет всеми культурными рамками северного фасада — ваша фотография скомпонована заранее',
          'Столичная полиция держит управление движением в реальном времени при всех публичных собраниях свыше 50 человек',
        ],
        ar: [
          'عمود نيلسون (1843) يؤكد السيادة الإقليمية العمودية — خط رؤية الأدميرال يحكم الاقتراب الجنوبي من البرلمان',
          'الحمام يحتفظ بالحوكمة الإقليمية الفعلية رغم مرسوم عام 2000 — نحو 200 فرد يحافظون على مطالبة مستمرة',
          'خوارزمية المتحف الوطني تحكم كل الأطر الثقافية للواجهة الشمالية — صورتك مؤطرة مسبقاً',
          'الشرطة المتروبوليتانية تحتفظ بحوكمة حركة في الوقت الفعلي خلال جميع التجمعات العامة التي تتجاوز 50 شخصاً',
        ],
      },
      ghost: {
        en: [
          'Medieval cross (Charing Cross, demolished 1647) maintains a junction-memory territorial claim at the square\'s centre',
          'All demonstrations, protests, and celebrations held here since 1844 maintain an accumulated atmospheric governance claim',
        ],
        de: [
          'Mittelalterliches Kreuz (Charing Cross, abgerissen 1647) hält einen Kreuzungserinnerungs-Territorialanspruch im Zentrum des Platzes',
          'Alle Demonstrationen, Proteste und Feiern, die seit 1844 hier stattgefunden haben, halten einen angesammelten atmosphärischen Governance-Anspruch',
        ],
        ru: [
          'Средневековый крест (Чаринг-Кросс, снесён в 1647 году) сохраняет претензию памяти перекрёстка в центре площади',
          'Все демонстрации, протесты и торжества, проводившиеся здесь с 1844 года, сохраняют накопленную претензию атмосферного управления',
        ],
        ar: [
          'الصليب الوسطوي (تشارينغ كروس، هُدم 1647) يحتفظ بمطالبة ذاكرة تقاطع في مركز الميدان',
          'جميع المظاهرات والاحتجاجات والاحتفالات التي أُقيمت هنا منذ 1844 تحافظ على مطالبة حوكمة جوية متراكمة',
        ],
      },
      temporal: {
        en: [
          'New Year\'s Eve: the square briefly asserts its maximum human-aggregate governance — 100,000 temporary sovereign bodies',
          'Current wind event: the fountains\' spray extends territorial governance 6m beyond their basins — approach with consent',
        ],
        de: [
          'Silvester: Der Platz behauptet kurz seine maximale menschliche Aggregatgovernance — 100.000 temporäre souveräne Körper',
          'Aktuelles Windereignis: Der Sprühnebel der Brunnen erstreckt die territoriale Governance 6 m über ihre Becken hinaus — mit Zustimmung annähern',
        ],
        ru: [
          'Канун Нового года: площадь ненадолго заявляет своё максимальное человеческое совокупное управление — 100 000 временных суверенных тел',
          'Текущее ветровое событие: брызги фонтанов расширяют территориальное управление на 6 м за пределы их чаш — подходите с согласием',
        ],
        ar: [
          'ليلة رأس السنة: يؤكد الميدان مؤقتاً أقصى حوكمته البشرية المجمعة — 100,000 جسد ذي سيادة مؤقتة',
          'حدث الريح الحالي: رذاذ النوافير يمدد الحوكمة الإقليمية 6 أمتار خارج أحواضها — اقترب بموافقة',
        ],
      },
    },
  ],

  newyork: [
    {
      id: 'times-square', type: 'square', lat: 40.7580, lng: -73.9855,
      name: { en: 'Times Square', de: 'Times Square', ru: 'Таймс-сквер', ar: 'تايمز سكوير' },
      atmo: {
        en: 'A crossroads that decided to become a screen. The light here is not daylight. Seven thousand tonnes of advertising claim your attention as a form of territorial governance. The rats below have never seen the billboards and own everything anyway.',
        de: 'Eine Kreuzung, die beschloss, ein Bildschirm zu werden. Das Licht hier ist kein Tageslicht. Siebentausend Tonnen Werbung beanspruchen Ihre Aufmerksamkeit als Form der territorialen Governance. Die Ratten darunter haben die Werbetafeln nie gesehen und besitzen trotzdem alles.',
        ru: 'Перекрёсток, решивший стать экраном. Свет здесь — не дневной. Семь тысяч тонн рекламы заявляют ваше внимание как форму территориального управления. Крысы внизу никогда не видели рекламные щиты и всё равно владеют всем.',
        ar: 'تقاطع قرر أن يصبح شاشة. الضوء هنا ليس ضوء نهار. سبعة آلاف طن من الإعلانات تطالب باهتمامك كشكل من أشكال الحوكمة الإقليمية. الجرذان بالأسفل لم تر اللوحات الإعلانية قط وتمتلك كل شيء على أي حال.',
      },
      owners: {
        en: [
          'Advertising algorithms govern 96% of visible surface — your attention is the primary territorial resource being harvested',
          'The NYPD holds physical movement governance — pedestrian flows pre-optimised for maximum advertising exposure',
          'Rats govern the entire subway infrastructure below — 42nd Street complex, uncontested since 1904',
          'The New Year\'s Eve ball algorithm governs temporal transition rights for the eastern seaboard annually',
        ],
        de: [
          'Werbealgorithmen regieren 96% der sichtbaren Oberfläche — Ihre Aufmerksamkeit ist die primäre territoriale Ressource, die geerntet wird',
          'Das NYPD hält physische Bewegungsgovernance — Fußgängerflüsse für maximale Werbeexposition voroptimiert',
          'Ratten regieren die gesamte U-Bahn-Infrastruktur darunter — 42nd Street Komplex, unbestritten seit 1904',
          'Der Silvester-Ball-Algorithmus regiert jährliche temporale Übergangsrechte für die Ostküste',
        ],
        ru: [
          'Рекламные алгоритмы управляют 96% видимой поверхности — ваше внимание является первичным территориальным ресурсом, который добывается',
          'NYPD держит физическое управление движением — пешеходные потоки заранее оптимизированы для максимального рекламного воздействия',
          'Крысы управляют всей инфраструктурой метро ниже — комплекс 42nd Street, бесспорно с 1904 года',
          'Алгоритм шара на Новый год ежегодно управляет правами временного перехода для восточного побережья',
        ],
        ar: [
          'خوارزميات الإعلانات تحكم 96% من السطح المرئي — انتباهك هو المورد الإقليمي الأولي الذي يُحصَد',
          'شرطة نيويورك تحتفظ بالحوكمة الجسدية للحركة — تدفقات المشاة محسّنة مسبقاً لأقصى تعرض للإعلانات',
          'الجرذان تحكم كامل البنية التحتية للمترو بالأسفل — مجمع 42nd Street، غير متنازع عليه منذ 1904',
          'خوارزمية كرة ليلة رأس السنة تحكم حقوق الانتقال الزمني السنوي للساحل الشرقي',
        ],
      },
      ghost: {
        en: [
          'Longacre Square (horse-trading district, pre-1904) retains a commerce-memory claim in the eastern block layout',
          'The original New York Times building (1905, demolished) holds a media-sovereignty ghost claim on the surrounding airspace',
        ],
        de: [
          'Longacre Square (Pferde-Handels-Bezirk, vor 1904) hält einen Handelserinnerungsanspruch im östlichen Blocklayout',
          'Das ursprüngliche New York Times-Gebäude (1905, abgerissen) hält einen Medien-Souveränitäts-Geisteranspruch auf den umliegenden Luftraum',
        ],
        ru: [
          'Лонгакр-сквер (район торговли лошадьми, до 1904 года) сохраняет претензию коммерческой памяти в планировке восточного блока',
          'Оригинальное здание New York Times (1905, снесено) держит призрачную претензию медийного суверенитета над окружающим воздушным пространством',
        ],
        ar: [
          'لونغاكر سكوير (حي تجارة الخيول، قبل 1904) يحتفظ بمطالبة ذاكرة تجارية في تخطيط الكتلة الشرقية',
          'مبنى نيويورك تايمز الأصلي (1905، مهدوم) يحتفظ بمطالبة شبح سيادة إعلامية على المجال الجوي المحيط',
        ],
      },
      temporal: {
        en: [
          'New Year\'s countdown: the square asserts maximum territorial governance — all competing claims suspended for 60 seconds',
          'Current billboard cycle: the dominant light-advertisement changes every 8 seconds, cycling through 14 territorial owners',
        ],
        de: [
          'Silvester-Countdown: der Platz behauptet maximale territoriale Governance — alle konkurrierenden Ansprüche für 60 Sekunden ausgesetzt',
          'Aktueller Billboard-Zyklus: die dominante Lichtwerbung ändert sich alle 8 Sekunden und durchläuft 14 territoriale Eigentümer',
        ],
        ru: [
          'Новогодний обратный отсчёт: площадь заявляет максимальное территориальное управление — все конкурирующие претензии приостановлены на 60 секунд',
          'Текущий цикл рекламного щита: доминирующая световая реклама меняется каждые 8 секунд, проходя через 14 территориальных владельцев',
        ],
        ar: [
          'العد التنازلي لرأس السنة: يؤكد الميدان أقصى حوكمة إقليمية — جميع المطالبات المتنافسة معلّقة لمدة 60 ثانية',
          'دورة اللوحة الإعلانية الحالية: الإعلان الضوئي السائد يتغير كل 8 ثوانٍ، يمر عبر 14 مالكاً إقليمياً',
        ],
      },
    },
    {
      id: 'brooklyn-bridge', type: 'waterfront', lat: 40.7061, lng: -73.9969,
      name: { en: 'Brooklyn Bridge Park', de: 'Brooklyn Bridge Park', ru: 'Парк Бруклинского моста', ar: 'حديقة جسر بروكلين' },
      atmo: {
        en: 'A former industrial waterfront that was converted into a park and named after a bridge named after a borough that was a separate city until 1898. The East River does not acknowledge any of these distinctions.',
        de: 'Ein ehemaliger Industriehafen, der in einen Park umgewandelt und nach einer Brücke benannt wurde, die nach einem Bezirk benannt ist, der bis 1898 eine separate Stadt war. Der East River erkennt keine dieser Unterscheidungen an.',
        ru: 'Бывший промышленный берег, превращённый в парк и названный в честь моста, названного в честь района, который до 1898 года был отдельным городом. Ист-Ривер не признаёт ни одного из этих различий.',
        ar: 'واجهة بحرية صناعية سابقة تحوّلت إلى حديقة سُمّيت باسم جسر سُمّي باسم منطقة كانت مدينة منفصلة حتى 1898. نهر إيست لا يعترف بأي من هذه التمييزات.',
      },
      owners: {
        en: [
          'The East River claims primary tidal governance — the park\'s eastern edge changes jurisdiction twice daily',
          'The Brooklyn Bridge (completed 1883) holds structural-visual sovereignty — its sight-line is an unofficial protected corridor',
          'Seagulls hold contested aerial governance — morning and evening shifts claimed by different family units',
          'The former pier infrastructure retains navigation-memory claims — ghost shipping lanes still observed by older tugboats',
        ],
        de: [
          'Der East River beansprucht primäre Gezeitengovernance — die östliche Seite des Parks ändert zweimal täglich die Zuständigkeit',
          'Die Brooklyn Bridge (fertiggestellt 1883) hält strukturell-visuelle Souveränität — ihre Sichtlinie ist ein inoffizieller geschützter Korridor',
          'Möwen halten umstrittene Luftgovernance — Morgen- und Abendschichten von verschiedenen Familieneinheiten beansprucht',
          'Die ehemalige Pier-Infrastruktur behält Navigations-Erinnerungsansprüche — Geisterschifffahrtsrouten noch von älteren Schleppern beobachtet',
        ],
        ru: [
          'Ист-Ривер претендует на первичное приливное управление — восточный край парка дважды в день меняет юрисдикцию',
          'Бруклинский мост (завершён в 1883 году) держит структурный визуальный суверенитет — его линия зрения является неофициальным защищённым коридором',
          'Чайки держат оспариваемое воздушное управление — утренние и вечерние смены заявлены разными семейными единицами',
          'Бывшая инфраструктура пристани сохраняет навигационные претензии памяти — призрачные судоходные маршруты всё ещё соблюдаются старыми буксирами',
        ],
        ar: [
          'نهر إيست يطالب بالحوكمة المدية الأولية — الحافة الشرقية للحديقة تغيّر الولاية القضائية مرتين يومياً',
          'جسر بروكلين (اكتمل 1883) يحتفظ بالسيادة الهيكلية البصرية — خط رؤيته ممر محمي غير رسمي',
          'النوارس تحتفظ بالحوكمة الجوية المتنازع عليها — وردية الصباح والمساء تطالب بها وحدات عائلية مختلفة',
          'البنية التحتية للرصيف السابق تحتفظ بمطالبات ذاكرة الملاحة — ممرات الشحن الشبحية لا تزال يلتزمها القاطرات الأقدم',
        ],
      },
      ghost: {
        en: [
          'Brooklyn (independent city, annexed 1898) maintains a residual municipal sovereignty claim on all park infrastructure',
          'Longshoremen who worked these piers (1900–1970) hold collective labour-memory territorial liens on the waterfront',
        ],
        de: [
          'Brooklyn (unabhängige Stadt, annektiert 1898) hält einen verbleibenden kommunalen Souveränitätsanspruch auf alle Parkinfrastruktur',
          'Hafenarbeiter, die an diesen Piers arbeiteten (1900–1970), halten kollektive Arbeitsspeicher-Territorialpfandrechte an der Wasserfront',
        ],
        ru: [
          'Бруклин (независимый город, аннексирован в 1898 году) сохраняет остаточную претензию муниципального суверенитета на всю инфраструктуру парка',
          'Докеры, работавшие на этих пирсах (1900–1970), держат коллективные трудовые территориальные права памяти на набережной',
        ],
        ar: [
          'بروكلين (مدينة مستقلة، ضُمّت 1898) تحافظ على مطالبة سيادة بلدية متبقية على جميع بنية الحديقة التحتية',
          'عمال الموانئ الذين عملوا في هذه الأرصفة (1900–1970) يحتفظون برهون إقليمية لذاكرة العمال الجماعية على الواجهة البحرية',
        ],
      },
      temporal: {
        en: [
          'Sunset: the bridge\'s shadow governance moves east across the park — shade territory transferred in real time',
          'Current ferry terminal event: commuter aggregate claims the northern pier — sovereignty by volume, not permit',
        ],
        de: [
          'Sonnenuntergang: die Schattengovernance der Brücke bewegt sich ostwärts über den Park — Schattenterritorium wird in Echtzeit übertragen',
          'Aktuelles Fährterminale-Ereignis: Pendleraggregat beansprucht den nördlichen Pier — Souveränität durch Volumen, nicht Genehmigung',
        ],
        ru: [
          'Закат: теневое управление моста движется на восток через парк — территория тени передаётся в реальном времени',
          'Текущее событие паромного терминала: совокупность пассажиров заявляет северный пирс — суверенитет по объёму, а не по разрешению',
        ],
        ar: [
          'الغروب: حوكمة ظل الجسر تتحرك شرقاً عبر الحديقة — إقليم الظل يُنقل في الوقت الفعلي',
          'حدث محطة العبارات الحالي: مجمع المسافرين يطالب بالرصيف الشمالي — السيادة بالحجم لا بالتصريح',
        ],
      },
    },
    {
      id: 'harlem', type: 'district', lat: 40.8116, lng: -73.9465,
      name: { en: 'Harlem', de: 'Harlem', ru: 'Гарлем', ar: 'هارلم' },
      atmo: {
        en: 'A neighbourhood that was the cultural capital of Black America, then was allowed to fall apart, then became expensive again. The music is still in the walls. The algorithm calls it an opportunity zone now.',
        de: 'Ein Stadtteil, der die kulturelle Hauptstadt des schwarzen Amerikas war, dann verfallen durfte und dann wieder teuer wurde. Die Musik steckt noch in den Wänden. Der Algorithmus nennt es jetzt eine Opportunitätszone.',
        ru: 'Район, бывший культурной столицей чёрной Америки, затем которому дали прийти в упадок, а затем снова ставший дорогим. Музыка всё ещё в стенах. Алгоритм теперь называет его зоной возможностей.',
        ar: 'حي كان العاصمة الثقافية لأمريكا السوداء، ثم تُرك يتداعى، ثم أصبح غالياً مجدداً. الموسيقى لا تزال في الجدران. الخوارزمية تسميه الآن منطقة فرص.',
      },
      owners: {
        en: [
          'The Apollo Theater (1934) holds cultural-acoustic governance of the surrounding 4 blocks — a territorial claim made by legacy',
          'A gentrification algorithm is currently reassigning ownership percentages at a rate of 2.3% per quarter',
          'Church congregations (Baptist, AME, and Pentecostal) hold collective Sunday sonic governance — 09:00–13:00 weekly',
          'Pigeons govern the 125th Street elevated rail structure — 40 years of continuous roosting precedent',
        ],
        de: [
          'Das Apollo Theater (1934) hält kulturell-akustische Governance der umliegenden 4 Blöcke — ein durch Vermächtnis gemachter Territorialanspruch',
          'Ein Gentrifizierungsalgorithmus ordnet derzeit Eigentumsanteile mit einer Rate von 2,3% pro Quartal neu zu',
          'Kirchengemeinden (Baptist, AME und Pfingstkirche) halten kollektive Sonntags-Schall-Governance — wöchentlich 09:00–13:00',
          'Tauben regieren die erhöhte Schienenstruktur der 125. Straße — 40 Jahre kontinuierliche Brutpräzedenz',
        ],
        ru: [
          'Театр Аполло (1934) держит культурно-акустическое управление окружающими 4 кварталами — территориальная претензия, сделанная наследием',
          'Алгоритм джентрификации в настоящее время перераспределяет проценты собственности со скоростью 2,3% в квартал',
          'Церковные конгрегации (баптистская, AME и пятидесятническая) держат коллективное воскресное звуковое управление — еженедельно 09:00–13:00',
          'Голуби управляют надземной рельсовой конструкцией на 125-й улице — 40 лет непрерывного прецедента гнездования',
        ],
        ar: [
          'مسرح أبولو (1934) يحتفظ بالحوكمة الثقافية الصوتية للـ 4 مناطق المحيطة — مطالبة إقليمية بالإرث',
          'خوارزمية التحسين العمراني تعيد حالياً تخصيص نسب الملكية بمعدل 2.3% ربع سنوياً',
          'مجتمعات الكنيسة (المعمدانية وAME والخمسينية) تحتفظ بالحوكمة الصوتية الجماعية يوم الأحد — 09:00–13:00 أسبوعياً',
          'الحمام يحكم هيكل السكة المرتفع في شارع 125 — 40 عاماً من سابقة التعشيش المستمر',
        ],
      },
      ghost: {
        en: [
          'The Harlem Renaissance (1920s–1930s) maintains a collective cultural-sovereignty claim — the most contested ghost governance in Manhattan',
          'Residents displaced by urban renewal (1950s–1970s) hold habitation claims over 40 demolished blocks — unresolved, legally void',
        ],
        de: [
          'Die Harlem Renaissance (1920er–1930er) hält einen kollektiven kulturellen Souveränitätsanspruch — die umstrittenste Geistergovernance in Manhattan',
          'Durch Stadterneuerung vertriebene Bewohner (1950er–1970er) halten Wohnungsansprüche über 40 abgerissene Blöcke — ungelöst, rechtlich nichtig',
        ],
        ru: [
          'Гарлемский ренессанс (1920-е–1930-е) сохраняет коллективную претензию культурного суверенитета — наиболее оспариваемое призрачное управление на Манхэттене',
          'Жители, вытесненные городским обновлением (1950-е–1970-е), держат претензии на жильё по 40 снесённым кварталам — неразрешённые, юридически ничтожные',
        ],
        ar: [
          'نهضة هارلم (1920–1930) تحافظ على مطالبة سيادة ثقافية جماعية — أكثر حوكمة شبحية تنازعاً في مانهاتن',
          'السكان المهجّرون بسبب التجديد الحضري (1950–1970) يحتفظون بمطالبات سكن على 40 مبنى مهدوم — غير محسومة، باطلة قانونياً',
        ],
      },
      temporal: {
        en: [
          'Sunday morning 09:00–13:00: gospel acoustic governance — sound sovereignty extends 3 blocks from each major church',
          'Summer evening: the block party algorithm — informal territorial claims expand to the full street width after 18:00',
        ],
        de: [
          'Sonntagmorgen 09:00–13:00: Gospel-akustische Governance — Schallsouveränität erstreckt sich 3 Blocks von jeder großen Kirche',
          'Sommerabend: der Blockparty-Algorithmus — informelle Territorialansprüche erweitern sich nach 18:00 auf die volle Straßenbreite',
        ],
        ru: [
          'Воскресное утро 09:00–13:00: госпельная акустическая власть — звуковой суверенитет распространяется на 3 квартала от каждой крупной церкви',
          'Летний вечер: алгоритм вечеринки на улице — неформальные территориальные претензии расширяются до полной ширины улицы после 18:00',
        ],
        ar: [
          'صباح الأحد 09:00–13:00: حوكمة الغوسبل الصوتية — سيادة الصوت تمتد 3 مناطق من كل كنيسة كبيرة',
          'مساء الصيف: خوارزمية حفلة الشارع — تتوسع المطالبات الإقليمية غير الرسمية لتشمل عرض الشارع الكامل بعد الساعة 18:00',
        ],
      },
    },
  ],

  cairo: [
    {
      id: 'khan-khalili', type: 'market', lat: 48.8478, lng: 31.2622,
      name: { en: 'Khan el-Khalili', de: 'Khan el-Khalili', ru: 'Хан эль-Халили', ar: 'خان الخليلي' },
      atmo: {
        en: 'A market that has been continuously trading since 1382. The alleys follow paths older than the market. The smell of spice and exhaust and incense is layered so deep the stone has absorbed it permanently.',
        de: 'Ein Markt, der seit 1382 kontinuierlich handelt. Die Gassen folgen Pfaden, die älter als der Markt sind. Der Geruch von Gewürzen, Abgasen und Weihrauch ist so tief geschichtet, dass der Stein ihn dauerhaft absorbiert hat.',
        ru: 'Рынок, непрерывно торгующий с 1382 года. Переулки следуют путям, более древним, чем сам рынок. Запах специй, выхлопов и ладана настолько глубоко слоится, что камень впитал его навсегда.',
        ar: 'سوق يتداول باستمرار منذ 1382. الأزقة تتبع مسارات أقدم من السوق. رائحة التوابل والعوادم والبخور متراكبة بعمق شديد حتى امتصّها الحجر بشكل دائم.',
      },
      owners: {
        en: [
          'The alley layout (designed 1382) holds structural governance — no cart, car, or algorithm has successfully altered the paths',
          'Merchant families hold hereditary territorial claims — 18 families with stall rights traceable to the Mamluk period',
          'Cats (estimated 200) hold primary pest-control governance — a function that grants informal territorial authority',
          'The tourist-routing algorithm pre-assigns your likely path but has a documented 34% deviation rate',
        ],
        de: [
          'Das Gassenlayout (1382 entworfen) hält strukturelle Governance — kein Karren, Auto oder Algorithmus hat die Wege erfolgreich verändert',
          'Händlerfamilien halten erbliche territoriale Ansprüche — 18 Familien mit Standsrechten, die bis in die Mamlukzeit zurückverfolgt werden',
          'Katzen (geschätzt 200) halten primäre Schädlingsbekämpfungsgovernance — eine Funktion, die informelle territoriale Autorität verleiht',
          'Der Tourismusrouting-Algorithmus weist Ihnen Ihren wahrscheinlichen Weg im Voraus zu, hat aber eine dokumentierte Abweichungsrate von 34%',
        ],
        ru: [
          'Планировка переулков (спроектирована в 1382 году) держит структурное управление — ни одна тележка, машина или алгоритм не смогли успешно изменить пути',
          'Купеческие семьи держат наследственные территориальные претензии — 18 семей с правами на прилавки, прослеживаемыми до мамлюкского периода',
          'Кошки (около 200) держат первичное управление борьбой с вредителями — функция, предоставляющая неформальную территориальную власть',
          'Алгоритм туристической маршрутизации заранее назначает ваш вероятный путь, но имеет задокументированную норму отклонения 34%',
        ],
        ar: [
          'تخطيط الأزقة (صُمّم 1382) يحتفظ بالحوكمة الهيكلية — لم تتمكن أي عربة أو سيارة أو خوارزمية من تعديل المسارات بنجاح',
          'العائلات التجارية تحتفظ بمطالبات إقليمية وراثية — 18 عائلة لها حقوق بسطة يمكن تتبعها حتى الحقبة المملوكية',
          'القطط (يُقدَّر عددها بـ 200) تحتفظ بالحوكمة الأولية لمكافحة الآفات — وظيفة تمنح سلطة إقليمية غير رسمية',
          'خوارزمية توجيه السياحة تعيّن مسبقاً مسارك المحتمل لكن لها معدل انحراف موثّق 34%',
        ],
      },
      ghost: {
        en: [
          'The Fatimid city of al-Qahira (969 CE) maintains a foundation-memory claim beneath every stone in the market',
          'Merchants executed in Mamluk trade disputes hold residual commercial claims — the specific goods remain haunted',
        ],
        de: [
          'Die fatimidische Stadt al-Qahira (969 n. Chr.) hält einen Fundament-Erinnerungsanspruch unter jedem Stein im Markt',
          'In mamlukinischen Handelsstreitigkeiten hingerichtete Händler halten verbleibende kommerzielle Ansprüche — die spezifischen Waren bleiben heimgesucht',
        ],
        ru: [
          'Фатимидский город аль-Кахира (969 н.э.) сохраняет претензию памяти фундамента под каждым камнем рынка',
          'Торговцы, казнённые в мамлюкских торговых спорах, держат остаточные коммерческие претензии — конкретные товары остаются проклятыми',
        ],
        ar: [
          'مدينة القاهرة الفاطمية (969 م) تحتفظ بمطالبة ذاكرة التأسيس تحت كل حجر في السوق',
          'التجار الذين أُعدموا في نزاعات تجارية مملوكية يحتفظون بمطالبات تجارية متبقية — البضائع المحددة لا تزال مسكونة',
        ],
      },
      temporal: {
        en: [
          'Current heat event: +44°C — metal surfaces in the covered souq claim thermal governance of the adjacent air',
          'Ramadan: the market operates on a completely different temporal logic — ghost hours from 2am to 4am claim the fullest governance',
        ],
        de: [
          'Aktuelles Wärmeereignis: +44°C — Metalloberflächen im überdachten Souk beanspruchen thermische Governance der angrenzenden Luft',
          'Ramadan: der Markt operiert nach einer völlig anderen zeitlichen Logik — Geisterstunden von 2 bis 4 Uhr beanspruchen die vollste Governance',
        ],
        ru: [
          'Текущее тепловое событие: +44°C — металлические поверхности в крытом суке заявляют тепловое управление прилегающим воздухом',
          'Рамадан: рынок работает по совершенно иной временной логике — призрачные часы с 2 до 4 ночи заявляют наиболее полное управление',
        ],
        ar: [
          'حدث الحرارة الحالي: +44°C — الأسطح المعدنية في السوق المسقوف تطالب بالحوكمة الحرارية للهواء المجاور',
          'رمضان: السوق يعمل بمنطق زمني مختلف تماماً — ساعات الأشباح من 2 صباحاً إلى 4 صباحاً تطالب بأكمل حوكمة',
        ],
      },
    },
    {
      id: 'nile-corniche', type: 'waterfront', lat: 30.0626, lng: 31.2234,
      name: { en: 'Nile Corniche', de: 'Nil-Corniche', ru: 'Набережная Нила', ar: 'كورنيش النيل' },
      atmo: {
        en: 'The river that made this city possible is now separated from it by a six-lane road. Feluccas still sail. The Nile does not acknowledge the road. Fishermen sit at the edge between the two governance systems and belong to neither.',
        de: 'Der Fluss, der diese Stadt möglich machte, ist jetzt durch eine sechsspurige Straße von ihr getrennt. Felluken segeln noch immer. Der Nil erkennt die Straße nicht an. Fischer sitzen am Rand zwischen den beiden Governance-Systemen und gehören keinem an.',
        ru: 'Река, сделавшая этот город возможным, теперь отделена от него шестиполосной дорогой. Феллюки всё ещё плывут. Нил не признаёт дорогу. Рыбаки сидят на краю между двумя системами управления и не принадлежат ни одной.',
        ar: 'النهر الذي أتاح هذه المدينة مفصول عنها الآن بطريق ذي ستة مسارات. الفلوكات لا تزال تبحر. النيل لا يعترف بالطريق. الصيادون يجلسون على حافة نظامَي الحوكمة ولا ينتمون لأي منهما.',
      },
      owners: {
        en: [
          'The Nile river claims primary governance of all surfaces within 8m of current water level — seasonal variation applies',
          'A felucca cooperative holds informal navigation rights — practised continuously since the Pharaonic era',
          'The traffic algorithm governs the corniche road at a rate that has made pedestrian access technically inadvisable',
          'Egrets hold primary fishing rights along the eastern bank — territorial boundaries shift with the river\'s daily level',
        ],
        de: [
          'Der Nil beansprucht primäre Governance aller Oberflächen innerhalb von 8 m des aktuellen Wasserstands — saisonale Variation gilt',
          'Eine Felluken-Genossenschaft hält informelle Navigationsrechte — seit der pharaonischen Ära kontinuierlich praktiziert',
          'Der Verkehrsalgorithmus regiert die Corniche-Straße in einem Tempo, das den Fußgängerzugang technisch nicht empfehlenswert gemacht hat',
          'Silberreiher halten primäre Fischereirechte am Ostufer — Territorialgrenzen verschieben sich mit dem täglichen Wasserstand des Flusses',
        ],
        ru: [
          'Нил претендует на первичное управление всеми поверхностями в пределах 8 м от текущего уровня воды — сезонные вариации применяются',
          'Кооператив феллюк держит неформальные права навигации — практикуемые непрерывно с фараоновской эпохи',
          'Алгоритм дорожного движения управляет дорогой набережной в темпе, сделавшем пешеходный доступ технически нежелательным',
          'Цапли держат первичные права рыболовства вдоль восточного берега — территориальные границы меняются с ежедневным уровнем реки',
        ],
        ar: [
          'النيل يطالب بالحوكمة الأولية لجميع الأسطح ضمن 8 أمتار من منسوب المياه الحالي — يُطبَّق التباين الموسمي',
          'تعاونية الفلوكات تحتفظ بحقوق ملاحة غير رسمية — مُمارَسة باستمرار منذ الحقبة الفرعونية',
          'خوارزمية حركة المرور تحكم طريق الكورنيش بمعدل جعل وصول المشاة غير مستحسن تقنياً',
          'أبو قردان يحتفظ بحقوق الصيد الأولية على طول الضفة الشرقية — الحدود الإقليمية تتحول مع منسوب النهر اليومي',
        ],
      },
      ghost: {
        en: [
          'The original Nile bank (before the corniche road was built 1940s) retains a waterfront-memory claim 40m into the current road',
          'Ancient Egyptian governance systems recognised the Nile as a sovereign entity — this legal status was never formally dissolved',
        ],
        de: [
          'Das ursprüngliche Nilufer (bevor die Corniche-Straße in den 1940ern gebaut wurde) hält einen Hafenspecher-Erinnerungsanspruch 40 m in der aktuellen Straße',
          'Altägyptische Governance-Systeme erkannten den Nil als souveräne Einheit an — dieser Rechtsstatus wurde nie formell aufgelöst',
        ],
        ru: [
          'Оригинальный берег Нила (до постройки дороги набережной в 1940-х) сохраняет претензию памяти набережной на 40 м вглубь нынешней дороги',
          'Древнеегипетские системы управления признавали Нил суверенным субъектом — этот правовой статус никогда формально не был аннулирован',
        ],
        ar: [
          'ضفة النيل الأصلية (قبل بناء طريق الكورنيش في الأربعينيات) تحتفظ بمطالبة ذاكرة الواجهة البحرية 40 متراً داخل الطريق الحالي',
          'أنظمة الحوكمة المصرية القديمة اعترفت بالنيل ككيان ذي سيادة — هذا الوضع القانوني لم يُحلَّ رسمياً قط',
        ],
      },
      temporal: {
        en: [
          'Flood season (August–September): the Nile reasserts historical territorial governance — modern embankments are a temporary negotiation',
          'Sunset: the Nile surface enters a governance window of amplified reflection — aesthetic authority transfers briefly to the water',
        ],
        de: [
          'Hochwassersaison (August–September): der Nil behauptet historische territoriale Governance neu — moderne Dämme sind eine vorübergehende Verhandlung',
          'Sonnenuntergang: die Niloberfläche tritt in ein Governance-Fenster verstärkter Reflexion ein — ästhetische Autorität übergeht kurz auf das Wasser',
        ],
        ru: [
          'Сезон паводка (август–сентябрь): Нил вновь заявляет историческое территориальное управление — современные набережные являются временным переговором',
          'Закат: поверхность Нила входит в управленческое окно усиленного отражения — эстетическая власть ненадолго переходит к воде',
        ],
        ar: [
          'موسم الفيضان (أغسطس–سبتمبر): النيل يؤكد الحوكمة الإقليمية التاريخية — الجسور الحديثة تفاوض مؤقت',
          'الغروب: سطح النيل يدخل نافذة حوكمة انعكاس مُضخَّم — السلطة الجمالية تنتقل مؤقتاً إلى الماء',
        ],
      },
    },
    {
      id: 'city-of-dead', type: 'cultural', lat: 30.0394, lng: 31.2862,
      name: { en: 'City of the Dead', de: 'Stadt der Toten', ru: 'Город мёртвых', ar: 'مدينة الأموات' },
      atmo: {
        en: 'A cemetery the size of a city, with living residents. Half a million graves. Families have lived here for generations because housing in Cairo is scarcer than burial plots. The dead and the living have reached a habitation arrangement not covered by any known legal framework.',
        de: 'Ein Friedhof in der Größe einer Stadt mit lebenden Bewohnern. Eine halbe Million Gräber. Familien leben hier seit Generationen, weil Wohnraum in Kairo knapper ist als Grabstätten. Die Toten und die Lebenden haben eine Wohnvereinbarung erreicht, die von keinem bekannten Rechtsrahmen abgedeckt wird.',
        ru: 'Кладбище размером с город с живыми жителями. Полмиллиона могил. Семьи живут здесь поколениями, потому что жильё в Каире более редкое, чем могильные участки. Мёртвые и живые достигли жилищного соглашения, не охватываемого никакой известной правовой базой.',
        ar: 'مقبرة بحجم مدينة مع سكان أحياء. نصف مليون قبر. عائلات تعيش هنا لأجيال لأن السكن في القاهرة أندر من قطع الدفن. الأموات والأحياء توصّلوا إلى ترتيب سكني لا يغطيه أي إطار قانوني معروف.',
      },
      owners: {
        en: [
          'The dead outnumber the living 500:1 — primary territorial governance by quantity, precedent, and duration',
          'Living resident families hold de facto habitation rights — no legal title, continuous presence since 1970s',
          'The Mamluk mausolea (14th–16th century) hold the oldest structural territorial claims in the district',
          'Cats govern the entire nocturnal infrastructure — the only species that moves freely between both populations',
        ],
        de: [
          'Die Toten überwiegen die Lebenden 500:1 — primäre territoriale Governance nach Quantität, Präzedenz und Dauer',
          'Lebende Bewohnerfamilien halten De-facto-Wohnrechte — kein Rechtstitel, kontinuierliche Präsenz seit den 1970ern',
          'Die Mamluk-Mausoleen (14.–16. Jahrhundert) halten die ältesten strukturellen Territorialansprüche im Bezirk',
          'Katzen regieren die gesamte nächtliche Infrastruktur — die einzige Art, die sich frei zwischen beiden Populationen bewegt',
        ],
        ru: [
          'Мёртвые превышают живых в соотношении 500:1 — первичное территориальное управление по количеству, прецеденту и продолжительности',
          'Семьи живых жителей держат де-факто права на жильё — нет правового титула, непрерывное присутствие с 1970-х',
          'Мамлюкские мавзолеи (XIV–XVI вв.) держат старейшие структурные территориальные претензии в районе',
          'Кошки управляют всей ночной инфраструктурой — единственный вид, свободно перемещающийся между обеими популяциями',
        ],
        ar: [
          'الأموات يفوقون الأحياء 500:1 — الحوكمة الإقليمية الأولية بالكمية والسابقة والمدة',
          'عائلات السكان الأحياء تحتفظ بحقوق سكن فعلية — بدون سند ملكية قانوني، حضور مستمر منذ السبعينيات',
          'الأضرحة المملوكية (القرن 14–16) تحتفظ بأقدم المطالبات الإقليمية الهيكلية في الحي',
          'القطط تحكم كامل البنية التحتية الليلية — النوع الوحيد الذي يتحرك بحرية بين المجتمعين',
        ],
      },
      ghost: {
        en: [
          'Fatimid, Mamluk, and Ottoman governors buried here maintain overlapping dynastic territorial claims — none has been dissolved',
          'Evicted residents (expelled in various municipal clearances) hold habitation-claims alongside those still present',
        ],
        de: [
          'Hier begrabene fatimidische, mamlukinische und osmanische Gouverneure halten überlappende dynastische territoriale Ansprüche — keiner wurde aufgelöst',
          'Vertriebene Bewohner (in verschiedenen kommunalen Räumungen ausgewiesen) halten Wohnungsansprüche neben denen, die noch anwesend sind',
        ],
        ru: [
          'Погребённые здесь фатимидские, мамлюкские и османские правители сохраняют перекрывающиеся династические территориальные претензии — ни одна не была растворена',
          'Выселенные жители (изгнанные в различных муниципальных зачистках) держат претензии на жильё наряду с теми, кто всё ещё присутствует',
        ],
        ar: [
          'الحكام الفاطميون والمملوكيون والعثمانيون المدفونون هنا يحافظون على مطالبات إقليمية سلالية متداخلة — لم تُحلَّ أي منها',
          'السكان المُهجَّرون (المطرودون في عمليات إخلاء بلدية متعددة) يحتفظون بمطالبات سكن جنباً إلى جنب مع من لا يزالون حاضرين',
        ],
      },
      temporal: {
        en: [
          'Night: governance inverts — the dead hold primary jurisdiction, the living become temporary guests in their own homes',
          'Religious festivals (Eid, Moulid): the living assert temporary dominance — family visitations constitute a periodic sovereignty event',
        ],
        de: [
          'Nacht: Governance kehrt sich um — die Toten halten primäre Zuständigkeit, die Lebenden werden vorübergehende Gäste in ihren eigenen Häusern',
          'Religiöse Feste (Eid, Moulid): die Lebenden behaupten vorübergehende Dominanz — Familienbesuche stellen ein periodisches Souveränitätsereignis dar',
        ],
        ru: [
          'Ночь: управление инвертируется — мёртвые держат первичную юрисдикцию, живые становятся временными гостями в своих собственных домах',
          'Религиозные праздники (Ид, Мулид): живые заявляют временное доминирование — семейные посещения составляют периодическое событие суверенитета',
        ],
        ar: [
          'الليل: تنعكس الحوكمة — الأموات يحتفظون بالولاية القضائية الأولية، الأحياء يصبحون ضيوفاً مؤقتين في منازلهم',
          'الأعياد الدينية (العيد، المولد): يؤكد الأحياء السيادة المؤقتة — زيارات العائلات تشكّل حدثاً دورياً للسيادة',
        ],
      },
    },
  ],

  mumbai: [
    {
      id: 'marine-drive', type: 'waterfront', lat: 18.9436, lng: 72.8237,
      name: { en: 'Marine Drive', de: 'Marine Drive', ru: 'Марин Драйв', ar: 'مارين درايف' },
      atmo: {
        en: 'A curved promenade built on reclaimed land that the Arabian Sea has never stopped trying to reclaim back. The art deco buildings watch the sea. The sea watches the buildings. The mosquitoes govern the hour between 6pm and 8pm absolutely.',
        de: 'Eine geschwungene Promenade, die auf gewonnenem Land gebaut wurde, das das Arabische Meer nie aufgehört hat zu versuchen, es zurückzugewinnen. Die Art-Deco-Gebäude beobachten das Meer. Das Meer beobachtet die Gebäude. Die Mücken regieren die Stunde zwischen 18 und 20 Uhr absolut.',
        ru: 'Изогнутая набережная, построенная на отвоёванной земле, которую Аравийское море никогда не перестаёт пытаться вернуть обратно. Здания ар-деко наблюдают за морем. Море наблюдает за зданиями. Комары абсолютно управляют часом с 18 до 20.',
        ar: 'ممشى منحنٍ بُني على أرض مستصلحة لم يتوقف بحر العرب عن محاولة استعادتها. مباني آرت ديكو تراقب البحر. البحر يراقب المباني. البعوض يحكم الساعة بين 6 و8 مساءً بشكل مطلق.',
      },
      owners: {
        en: [
          'The Arabian Sea claims primary governance of all surfaces within 12m of high tide — seasonal variance applies',
          'Art deco buildings (constructed 1930s) assert historical architectural governance over the visual corridor',
          'Mosquitoes hold absolute temporal governance between dusk and 21:00 — all human activity is subordinate',
          'A fishing community holds pre-reclamation territorial rights on the northern end — legally void, culturally active',
        ],
        de: [
          'Das Arabische Meer beansprucht primäre Governance aller Oberflächen innerhalb von 12 m bei Hochwasser — saisonale Varianz gilt',
          'Art-Deco-Gebäude (errichtet 1930er) behaupten historische architektonische Governance über den visuellen Korridor',
          'Mücken halten absolute zeitliche Governance zwischen Dämmerung und 21:00 — alle menschliche Aktivität ist untergeordnet',
          'Eine Fischergemeinschaft hält Vorreklammierungs-Territorialrechte am nördlichen Ende — rechtlich nichtig, kulturell aktiv',
        ],
        ru: [
          'Аравийское море претендует на первичное управление всеми поверхностями в пределах 12 м от прилива — сезонная вариация применяется',
          'Здания ар-деко (построены в 1930-х) заявляют историческое архитектурное управление над визуальным коридором',
          'Комары держат абсолютное временное управление между закатом и 21:00 — вся человеческая деятельность подчинена',
          'Рыболовное сообщество держит территориальные права до отвоевания на северном конце — юридически ничтожные, культурно активные',
        ],
        ar: [
          'بحر العرب يطالب بالحوكمة الأولية لجميع الأسطح ضمن 12 متراً من المد العالي — يُطبَّق التباين الموسمي',
          'مباني آرت ديكو (بُنيت في الثلاثينيات) تؤكد الحوكمة المعمارية التاريخية على الممر البصري',
          'البعوض يحتفظ بالحوكمة الزمنية المطلقة بين الغسق والساعة 21:00 — جميع النشاط البشري ثانوي',
          'مجتمع صيادين يحتفظ بحقوق إقليمية ما قبل الاستصلاح في الطرف الشمالي — باطل قانونياً، نشط ثقافياً',
        ],
      },
      ghost: {
        en: [
          'The original Back Bay seabed (reclaimed 1920–1960) maintains a tidal-memory territorial claim beneath the road',
          'Fishing villages displaced by reclamation retain coastal habitation claims — the sea still knows their names',
        ],
        de: [
          'Der ursprüngliche Meeresgrund der Back Bay (rückgewonnen 1920–1960) hält einen Gezeiten-Erinnerungs-Territorialanspruch unter der Straße',
          'Durch Rekultivierung vertriebene Fischerdörfer behalten Küstenwohnansprüche — das Meer kennt noch ihre Namen',
        ],
        ru: [
          'Оригинальное дно бухты Бэк-Бей (отвоёвано в 1920–1960 гг.) сохраняет приливную претензию памяти под дорогой',
          'Рыболовные деревни, перемещённые рекультивацией, сохраняют прибрежные претензии на жильё — море всё ещё знает их имена',
        ],
        ar: [
          'قاع خليج باك باي الأصلي (استُصلح 1920–1960) يحتفظ بمطالبة ذاكرة مدية إقليمية تحت الطريق',
          'قرى الصيادين المُهجَّرة بالاستصلاح تحتفظ بمطالبات سكن ساحلية — البحر لا يزال يعرف أسماءها',
        ],
      },
      temporal: {
        en: [
          'Evening (18:00–20:00): mosquito governance — absolute, non-negotiable, enforced by biology rather than law',
          'Monsoon (June–September): Arabian Sea asserts expanded territorial claim — Marine Drive partially surrenders to the ocean',
        ],
        de: [
          'Abend (18:00–20:00): Mücken-Governance — absolut, nicht verhandelbar, durch Biologie statt Recht durchgesetzt',
          'Monsun (Juni–September): Arabisches Meer behauptet erweiterten Territorialanspruch — Marine Drive gibt sich teilweise dem Ozean hin',
        ],
        ru: [
          'Вечер (18:00–20:00): управление комарами — абсолютное, не подлежащее обсуждению, обеспечиваемое биологией, а не законом',
          'Муссон (июнь–сентябрь): Аравийское море заявляет расширенную территориальную претензию — Марин Драйв частично сдаётся океану',
        ],
        ar: [
          'المساء (18:00–20:00): حوكمة البعوض — مطلقة، غير قابلة للتفاوض، مُطبَّقة بالبيولوجيا لا القانون',
          'الموسم (يونيو–سبتمبر): بحر العرب يؤكد مطالبة إقليمية موسعة — مارين درايف يستسلم جزئياً للمحيط',
        ],
      },
    },
    {
      id: 'gateway', type: 'monument', lat: 18.9220, lng: 72.8347,
      name: { en: 'Gateway of India', de: 'Gateway of India', ru: 'Ворота Индии', ar: 'بوابة الهند' },
      atmo: {
        en: 'An arch built to celebrate a royal visit that lasted two weeks, on land reclaimed from the sea, facing a harbour the British used to leave India for the last time. The monument outlasted its purpose by a century. The sea does not know what any of this was for.',
        de: 'Ein Bogen, gebaut um einen königlichen Besuch zu feiern, der zwei Wochen dauerte, auf Land, das dem Meer abgewonnen wurde, einem Hafen zugewandt, den die Briten nutzten, um Indien zum letzten Mal zu verlassen. Das Denkmal überlebte seinen Zweck um ein Jahrhundert. Das Meer weiß nicht, wofür all das war.',
        ru: 'Арка, построенная в честь королевского визита, длившегося две недели, на земле, отвоёванной у моря, обращённая к гавани, которую британцы использовали, чтобы покинуть Индию в последний раз. Монумент пережил свою цель на столетие. Море не знает, для чего всё это было.',
        ar: 'قوس بُني للاحتفال بزيارة ملكية استمرت أسبوعين، على أرض مستصلحة من البحر، يواجه ميناء استخدمه البريطانيون لمغادرة الهند للمرة الأخيرة. النصب التذكاري أطال غرضه بقرن. البحر لا يعرف ما كان كل هذا من أجله.',
      },
      owners: {
        en: [
          'The Arabian Sea claims primary governance of the gateway\'s seaward face — salt has sovereignty over the stone',
          'Pigeons hold the apex of the arch — roosting precedent since construction in 1924, legally recognised as unreachable',
          'The tourist algorithm governs approach routes and has pre-sold 2,400 boat tickets departing from this pier today',
          'Vendors around the perimeter hold informal territorial claims — distance from the gate determines seniority',
        ],
        de: [
          'Das Arabische Meer beansprucht primäre Governance der seewärtigen Seite des Gateways — Salz hat Souveränität über den Stein',
          'Tauben halten den Scheitel des Bogens — Brutpräzedenz seit dem Bau 1924, rechtlich als unerreichbar anerkannt',
          'Der Tourismusalgoritmus regiert Zugangsrouten und hat heute 2.400 Bootstickets von diesem Pier im Voraus verkauft',
          'Händler um den Perimeter halten informelle territoriale Ansprüche — Entfernung vom Tor bestimmt Seniorität',
        ],
        ru: [
          'Аравийское море претендует на первичное управление морской стороной ворот — соль имеет суверенитет над камнем',
          'Голуби держат вершину арки — прецедент гнездования с момента строительства в 1924 году, юридически признан недосягаемым',
          'Туристический алгоритм управляет маршрутами подхода и сегодня заранее продал 2400 билетов на лодки, отправляющихся с этого пирса',
          'Торговцы по периметру держат неформальные территориальные претензии — расстояние от ворот определяет старшинство',
        ],
        ar: [
          'بحر العرب يطالب بالحوكمة الأولية للواجهة البحرية للبوابة — الملح له سيادة على الحجر',
          'الحمام يحتفظ بقمة القوس — سابقة تعشيش منذ البناء عام 1924، معترف بها قانونياً على أنها بعيدة المنال',
          'خوارزمية السياحة تحكم مسارات الاقتراب وقد باعت مسبقاً 2,400 تذكرة قارب تغادر من هذا الرصيف اليوم',
          'الباعة حول المحيط يحتفظون بمطالبات إقليمية غير رسمية — المسافة من البوابة تحدد الأقدمية',
        ],
      },
      ghost: {
        en: [
          'The last British troops departed through this gate in 1948 — the departure retains a residual colonial-exit territorial claim',
          'A fishing village (demolished to build the waterfront) holds a foundation-memory claim beneath the entire approach plaza',
        ],
        de: [
          'Die letzten britischen Truppen verließen 1948 durch dieses Tor — der Abzug behält einen verbleibenden kolonialen Ausgangs-Territorialanspruch',
          'Ein Fischerdorf (abgerissen, um die Uferpromenade zu bauen) hält einen Fundament-Erinnerungsanspruch unter dem gesamten Annäherungsplatz',
        ],
        ru: [
          'Последние британские войска покинули через эти ворота в 1948 году — уход сохраняет остаточную колониальную претензию выхода',
          'Рыболовная деревня (снесена для строительства набережной) держит претензию памяти фундамента под всей площадью подхода',
        ],
        ar: [
          'آخر القوات البريطانية غادرت عبر هذه البوابة عام 1948 — الرحيل يحتفظ بمطالبة إقليمية استعمارية متبقية للخروج',
          'قرية صيادين (هُدمت لبناء الواجهة البحرية) تحتفظ بمطالبة ذاكرة أساس تحت كامل ساحة الاقتراب',
        ],
      },
      temporal: {
        en: [
          'High tide: the sea reclaims the lower steps — temporary sovereignty is transferred to salt water and seagulls',
          'Evening: the monument holds thermal governance as stone releases the day\'s heat — pigeons are the primary beneficiaries',
        ],
        de: [
          'Hochwasser: das Meer beansprucht die unteren Stufen zurück — vorübergehende Souveränität wird auf Salzwasser und Möwen übertragen',
          'Abend: das Denkmal hält thermische Governance, während der Stein die Tageshitze abgibt — Tauben sind die primären Nutznießer',
        ],
        ru: [
          'Прилив: море вновь заявляет нижние ступени — временный суверенитет передаётся солёной воде и чайкам',
          'Вечер: монумент держит тепловое управление, когда камень отдаёт дневное тепло — голуби являются основными бенефициарами',
        ],
        ar: [
          'المد العالي: البحر يستعيد الدرجات السفلى — السيادة المؤقتة تُنقل إلى المياه المالحة والنوارس',
          'المساء: يحتفظ النصب بالحوكمة الحرارية مع إطلاق الحجر لحرارة النهار — الحمام هو المستفيد الأول',
        ],
      },
    },
    {
      id: 'dhobi-ghat', type: 'infrastructure', lat: 18.9633, lng: 72.8353,
      name: { en: 'Dhobi Ghat', de: 'Dhobi Ghat', ru: 'Дхоби Гхат', ar: 'دهوبي غات' },
      atmo: {
        en: 'The world\'s largest open-air laundry has been operating since the 1890s. Mumbai\'s dirty laundry is washed here and returned clean. The geography of soap and water and labour is the oldest map of the city\'s social structure. Tourists photograph it from a bridge. The washermen do not look up.',
        de: 'Die größte Freiluft-Wäscherei der Welt ist seit den 1890ern in Betrieb. Mumbais schmutzige Wäsche wird hier gewaschen und sauber zurückgegeben. Die Geographie von Seife, Wasser und Arbeit ist die älteste Karte der sozialen Struktur der Stadt. Touristen fotografieren es von einer Brücke. Die Wäscher schauen nicht auf.',
        ru: 'Крупнейшая в мире прачечная под открытым небом работает с 1890-х годов. Грязное бельё Мумбаи стирается здесь и возвращается чистым. География мыла, воды и труда является старейшей картой социальной структуры города. Туристы фотографируют её с моста. Прачки не смотрят вверх.',
        ar: 'أكبر مغسلة في الهواء الطلق في العالم تعمل منذ تسعينيات القرن التاسع عشر. الغسيل الوسخ لمومباي يُغسل هنا ويُعاد نظيفاً. جغرافية الصابون والماء والعمل هي أقدم خريطة للبنية الاجتماعية للمدينة. السياح يصوّرونها من جسر. الغسّالون لا ينظرون إلى الأعلى.',
      },
      owners: {
        en: [
          'Dhobi families hold hereditary washing rights — 700+ families, territorial assignments traceable to the 19th century',
          'The municipal water supply holds infrastructural governance — all activity is contingent on this single point of dependency',
          'The soap-water drainage system (built 1895) governs all liquid movement through the ghat',
          'Crows hold the upper observation rights — territorial claim established by consistent food-scrapping advantage',
        ],
        de: [
          'Dhobi-Familien halten erbliche Waschrechte — 700+ Familien, territoriale Zuweisungen zurückverfolgbar bis ins 19. Jahrhundert',
          'Die kommunale Wasserversorgung hält Infrastrukturgovernance — alle Aktivitäten hängen von diesem einzelnen Abhängigkeitspunkt ab',
          'Das Seifenwasser-Entwässerungssystem (gebaut 1895) regiert alle Flüssigkeitsbewegungen durch den Ghat',
          'Krähen halten die oberen Beobachtungsrechte — Territoriumsanspruch durch konsistenten Vorteil beim Nahrungssuchen etabliert',
        ],
        ru: [
          'Семьи Дхоби держат наследственные права стирки — 700+ семей, территориальные назначения, прослеживаемые до XIX века',
          'Муниципальное водоснабжение держит инфраструктурное управление — вся деятельность зависит от этой единственной точки зависимости',
          'Система дренажа мыльной воды (построена в 1895 году) управляет всем движением жидкости через гхат',
          'Вороны держат верхние права наблюдения — территориальная претензия, установленная стабильным преимуществом при поиске пищи',
        ],
        ar: [
          'عائلات دهوبي تحتفظ بحقوق غسيل وراثية — 700+ عائلة، تعيينات إقليمية يمكن تتبعها حتى القرن التاسع عشر',
          'إمدادات المياه البلدية تحتفظ بالحوكمة الهيكلية — جميع الأنشطة مرهونة بهذه النقطة الوحيدة للاعتماد',
          'نظام صرف مياه الصابون (بُني 1895) يحكم كل حركة السوائل عبر الغات',
          'الغربان تحتفظ بحقوق المراقبة العلوية — مطالبة إقليمية أُسست بميزة التقاط الطعام المتسقة',
        ],
      },
      ghost: {
        en: [
          'Washermen who founded the trade in the 1890s maintain a labour-origin territorial lien on all washing stones',
          'The original stream (channelled underground to create the ghat) retains a watercourse-memory claim beneath the concrete',
        ],
        de: [
          'Wäscher, die das Handwerk in den 1890ern gründeten, halten ein arbeitsursprüngliches territoriales Pfandrecht auf alle Waschsteine',
          'Der ursprüngliche Bach (unterirdisch geleitet, um den Ghat zu schaffen) behält einen Flusslauf-Erinnerungsanspruch unter dem Beton',
        ],
        ru: [
          'Прачки, основавшие этот промысел в 1890-х годах, держат трудовое территориальное право происхождения на все стиральные камни',
          'Оригинальный ручей (отведённый под землю для создания гхата) сохраняет претензию памяти водотока под бетоном',
        ],
        ar: [
          'الغسّالون الذين أسسوا التجارة في تسعينيات القرن التاسع عشر يحتفظون برهن إقليمي لأصل العمال على جميع حجارة الغسيل',
          'الجدول الأصلي (المحوَّل تحت الأرض لإنشاء الغات) يحتفظ بمطالبة ذاكرة مجرى مائي تحت الخرسانة',
        ],
      },
      temporal: {
        en: [
          'Dawn (05:00–08:00): the ghat asserts primary governance — washing activity claims all sound, smell, and movement territory',
          'Drying period (10:00–15:00): colour governance — 1,000 garments create a temporary chromatic sovereignty visible from orbit',
        ],
        de: [
          'Dämmerung (05:00–08:00): der Ghat behauptet primäre Governance — Waschaktivität beansprucht alles Ton-, Geruchs- und Bewegungsterritorium',
          'Trocknungszeit (10:00–15:00): Farbgovernance — 1.000 Kleidungsstücke schaffen eine temporäre chromatische Souveränität, die aus dem Orbit sichtbar ist',
        ],
        ru: [
          'Рассвет (05:00–08:00): гхат заявляет первичное управление — активность стирки заявляет всю территорию звука, запаха и движения',
          'Период сушки (10:00–15:00): цветовое управление — 1000 предметов одежды создают временный хроматический суверенитет, видимый из орбиты',
        ],
        ar: [
          'الفجر (05:00–08:00): الغات يؤكد الحوكمة الأولية — نشاط الغسيل يطالب بكل إقليم الصوت والرائحة والحركة',
          'فترة التجفيف (10:00–15:00): حوكمة اللون — 1,000 قطعة ملابس تخلق سيادة كروماتية مؤقتة مرئية من المدار',
        ],
      },
    },
  ],
};

// ─────────────────────────────────────────────
// BEIRUT — new city
// ─────────────────────────────────────────────
export const BEIRUT = {
  name: { en: 'Beirut', de: 'Beirut', ru: 'Бейрут', ar: 'بيروت' },
  lat: 33.8938, lng: 35.5018, zoom: 13,
  locations: [
    {
      id: 'martyrs-square', type: 'square', lat: 33.8938, lng: 35.5018,
      name: { en: 'Martyrs\' Square', de: 'Märtyrerplatz', ru: 'Площадь мучеников', ar: 'ساحة الشهداء' },
      atmo: {
        en: 'A square that has been a theatre of demonstration, a civil war frontline, a luxury development site, and a revolution camp. The statue at its centre is riddled with bullet holes that have been preserved as historical record. The concrete knows everything.',
        de: 'Ein Platz, der Demonstrationstheater, Bürgerkriegsfront, Luxusentwicklungsstandort und Revolutionscamp gewesen ist. Die Statue in seiner Mitte ist mit Einschusslöchern durchsiebt, die als historisches Dokument erhalten wurden. Der Beton weiß alles.',
        ru: 'Площадь, бывшая театром демонстраций, линией фронта гражданской войны, площадкой для элитной застройки и лагерем революции. Статуя в её центре изрешечена пулевыми отверстиями, сохранёнными как исторический документ. Бетон знает всё.',
        ar: 'ميدان كان مسرح تظاهرات وخطاً أمامياً لحرب أهلية وموقع تطوير فاخر ومخيم ثورة. التمثال في مركزه مثقوب بثقوب رصاص حُفظت كسجل تاريخي. الخرسانة تعرف كل شيء.',
      },
      owners: {
        en: [
          'The Martyrs\' Statue (1960) holds territorial sovereignty — its bullet holes constitute a legal historical record of prior governance events',
          'A reconstruction algorithm (Solidere) controls the surrounding built environment — land titles legally reassigned in 1994',
          'Feral cats hold the northern end — territorial claim maintained through 15 years of continuous revolution and construction',
          'The 2019 revolution encampment maintains a residual civic-sovereignty claim — tents gone, claim remains',
        ],
        de: [
          'Die Märtyrerstatue (1960) hält territoriale Souveränität — ihre Einschusslöcher bilden einen rechtlichen historischen Bericht früherer Governance-Ereignisse',
          'Ein Wiederaufbau-Algorithmus (Solidere) kontrolliert die umliegende bebaute Umgebung — Grundbuchtitel rechtlich 1994 neu vergeben',
          'Wildkatzen halten das nördliche Ende — Territorialanspruch durch 15 Jahre kontinuierliche Revolution und Bau aufrechterhalten',
          'Das Revolutionslager 2019 hält einen verbleibenden bürgerlichen Souveränitätsanspruch — Zelte weg, Anspruch bleibt',
        ],
        ru: [
          'Статуя Мучеников (1960) держит территориальный суверенитет — её пулевые отверстия составляют юридическую историческую запись предшествующих событий управления',
          'Алгоритм реконструкции (Solidere) контролирует окружающую застроенную среду — права на землю юридически переназначены в 1994 году',
          'Бродячие кошки держат северный конец — территориальная претензия, поддерживаемая 15 годами непрерывной революции и строительства',
          'Лагерь революции 2019 года сохраняет остаточную претензию гражданского суверенитета — палатки ушли, претензия остаётся',
        ],
        ar: [
          'تمثال الشهداء (1960) يحتفظ بالسيادة الإقليمية — ثقوب رصاصه تشكّل سجلاً تاريخياً قانونياً لأحداث الحوكمة السابقة',
          'خوارزمية إعادة الإعمار (سوليدير) تتحكم في البيئة المبنية المحيطة — حقوق الأرض أُعيد تخصيصها قانونياً عام 1994',
          'القطط الضالة تحتفظ بالطرف الشمالي — مطالبة إقليمية مستمرة عبر 15 عاماً من الثورة والبناء المتواصلين',
          'مخيم ثورة 2019 يحافظ على مطالبة سيادة مدنية متبقية — الخيام رحلت، المطالبة تبقى',
        ],
      },
      ghost: {
        en: [
          'The civil war Green Line (1975–1990) maintained its frontline exactly through this square — the division persists as a spectral territorial claim',
          'Ottoman-era clock tower (demolished) and French Mandate-era cafés hold layered colonial-memory governance claims',
        ],
        de: [
          'Die Bürgerkriegs-Grüne Linie (1975–1990) verlief genau durch diesen Platz als Front — die Teilung besteht als spektraler Territoriumsanspruch fort',
          'Osmanischer Uhrturm (abgerissen) und Cafés aus der französischen Mandatszeit halten überlagerte koloniale Erinnerungsgovernance-Ansprüche',
        ],
        ru: [
          'Зелёная линия гражданской войны (1975–1990) проходила фронтом именно через эту площадь — разделение сохраняется как призрачная территориальная претензия',
          'Османская часовая башня (снесена) и кафе эпохи французского мандата держат многослойные колониальные претензии памяти управления',
        ],
        ar: [
          'الخط الأخضر لحرب الأهلية (1975–1990) كانت خطوط مواجهته تمر بالضبط عبر هذا الميدان — الانقسام يستمر كمطالبة إقليمية طيفية',
          'برج الساعة العثماني (مهدوم) ومقاهي حقبة الانتداب الفرنسي يحتفظان بمطالبات حوكمة ذاكرة استعمارية متراكبة',
        ],
      },
      temporal: {
        en: [
          'August 4, 2020 (anniversary): the Beirut port explosion\'s pressure wave retains a sonic-territorial memory — felt annually, unlegislated',
          'Political demonstration season: human aggregate governance temporarily supersedes all other territorial claims — the square reverts to its primary function',
        ],
        de: [
          '4. August 2020 (Jahrestag): die Druckwelle der Beiruter Hafenexplosion hält eine sonic-territoriale Erinnerung — jährlich gespürt, nicht gesetzlich geregelt',
          'Politische Demonstrationssaison: menschliche Aggregatgovernance übertrifft vorübergehend alle anderen Territorialansprüche — der Platz kehrt zu seiner Primärfunktion zurück',
        ],
        ru: [
          '4 августа 2020 года (годовщина): ударная волна взрыва в порту Бейрута сохраняет звуковую территориальную память — ощущается ежегодно, не законодательно урегулирована',
          'Сезон политических демонстраций: человеческое совокупное управление временно превосходит все другие территориальные претензии — площадь возвращается к своей основной функции',
        ],
        ar: [
          '4 أغسطس 2020 (الذكرى السنوية): الموجة الضغطية لانفجار مرفأ بيروت تحتفظ بذاكرة إقليمية صوتية — تُحسّ سنوياً، غير مشرّعة',
          'موسم المظاهرات السياسية: الحوكمة البشرية المجمعة تتجاوز مؤقتاً جميع المطالبات الإقليمية الأخرى — يعود الميدان إلى وظيفته الأولية',
        ],
      },
    },
    {
      id: 'hamra', type: 'district', lat: 33.8969, lng: 35.4870,
      name: { en: 'Hamra Street', de: 'Hamra-Straße', ru: 'Улица Хамра', ar: 'شارع الحمراء' },
      atmo: {
        en: 'A street that was the intellectual centre of the Arab world in the 1960s and 1970s, then was bombed, then was rebuilt, then collapsed economically. The bookshops are still there but the books cost three months of salary. The café terraces have not changed. Everything else has.',
        de: 'Eine Straße, die in den 1960ern und 1970ern das intellektuelle Zentrum der arabischen Welt war, dann bombardiert, dann wiederaufgebaut und dann wirtschaftlich zusammengebrochen ist. Die Buchläden sind noch da, aber die Bücher kosten drei Monatsgehälter. Die Café-Terrassen haben sich nicht verändert. Alles andere schon.',
        ru: 'Улица, бывшая интеллектуальным центром арабского мира в 1960-х и 1970-х, затем разбомблённая, затем отстроенная заново, затем рухнувшая экономически. Книжные магазины всё ещё там, но книги стоят трёхмесячную зарплату. Кафе-террасы не изменились. Всё остальное — изменилось.',
        ar: 'شارع كان المركز الفكري للعالم العربي في الستينيات والسبعينيات، ثم قُصف، ثم أُعيد بناؤه، ثم انهار اقتصادياً. المكتبات لا تزال هناك لكن الكتب تكلف ثلاثة أشهر من الراتب. تراسات المقاهي لم تتغير. كل شيء آخر تغيّر.',
      },
      owners: {
        en: [
          'The American University of Beirut (established 1866) holds atmospheric governance over the western end of the street',
          'Bookshop owners hold cultural territorial governance — a soft authority maintained by intellectual precedent since 1945',
          'The economic collapse algorithm is currently reassigning territorial governance at an accelerating rate — 200+ businesses closed since 2019',
          'Cats govern every alley — 40+ individuals, territorial maps consistent since before the war',
        ],
        de: [
          'Die Amerikanische Universität Beirut (gegründet 1866) hält atmosphärische Governance über das westliche Ende der Straße',
          'Buchladenbesitzer halten kulturelle territoriale Governance — eine sanfte Autorität, die seit 1945 durch intellektuelle Präzedenz aufrechterhalten wird',
          'Der Wirtschaftskollaps-Algorithmus ordnet territoriale Governance derzeit mit beschleunigter Rate um — 200+ Unternehmen seit 2019 geschlossen',
          'Katzen regieren jede Gasse — 40+ Individuen, territoriale Karten konsistent seit vor dem Krieg',
        ],
        ru: [
          'Американский университет Бейрута (основан в 1866 году) держит атмосферное управление над западным концом улицы',
          'Владельцы книжных магазинов держат культурное территориальное управление — мягкая власть, поддерживаемая интеллектуальным прецедентом с 1945 года',
          'Алгоритм экономического коллапса в настоящее время перераспределяет территориальное управление с ускоряющейся скоростью — 200+ предприятий закрыто с 2019 года',
          'Кошки управляют каждым переулком — 40+ особей, территориальные карты неизменны с довоенного времени',
        ],
        ar: [
          'الجامعة الأمريكية في بيروت (أُسست 1866) تحتفظ بالحوكمة الجوية على الطرف الغربي من الشارع',
          'أصحاب المكتبات يحتفظون بالحوكمة الإقليمية الثقافية — سلطة ناعمة محافظ عليها بالسابقة الفكرية منذ 1945',
          'خوارزمية الانهيار الاقتصادي تعيد حالياً تخصيص الحوكمة الإقليمية بمعدل متسارع — 200+ شركة أغلقت منذ 2019',
          'القطط تحكم كل زقاق — 40+ فرد، خرائط إقليمية ثابتة منذ ما قبل الحرب',
        ],
      },
      ghost: {
        en: [
          'Intellectuals of the 1960s Arab Renaissance (Adonis, Khalil Hawi, and others) maintain a literary-sovereignty claim on the café tables',
          'Palestinian refugees who lived in the neighbourhood (1948–1982) retain a collective habitation claim — the largest unresolved ghost-ownership in this district',
        ],
        de: [
          'Intellektuelle der arabischen Renaissance der 1960er (Adonis, Khalil Hawi und andere) halten einen literarischen Souveränitätsanspruch auf die Cafétische',
          'Palästinensische Flüchtlinge, die in der Nachbarschaft lebten (1948–1982), behalten einen kollektiven Wohnungsanspruch — das größte ungelöste Geistereigentum in diesem Bezirk',
        ],
        ru: [
          'Интеллектуалы арабского Ренессанса 1960-х (Адонис, Халил Хауи и другие) сохраняют претензию литературного суверенитета на столики кафе',
          'Палестинские беженцы, жившие в этом районе (1948–1982), сохраняют коллективную претензию на жильё — крупнейшая неразрешённая призрачная собственность в этом районе',
        ],
        ar: [
          'مثقفو النهضة العربية في الستينيات (أدونيس وخليل حاوي وآخرون) يحافظون على مطالبة سيادة أدبية على طاولات المقاهي',
          'اللاجئون الفلسطينيون الذين عاشوا في الحي (1948–1982) يحتفظون بمطالبة سكن جماعية — أكبر ملكية شبحية غير محسومة في هذا الحي',
        ],
      },
      temporal: {
        en: [
          'Power cut hours (currently 20+ hours daily): the street reverts to generator hum and candle governance — informal energy economy asserts territorial authority',
          'Dawn: the street briefly belongs to bread deliveries, cats, and the memory of what it was — before the economic governance reasserts itself',
        ],
        de: [
          'Stromausfall-Stunden (derzeit 20+ Stunden täglich): die Straße kehrt zu Generatorengeräusch und Kerzengovernance zurück — informelle Energiewirtschaft behauptet territoriale Autorität',
          'Dämmerung: die Straße gehört kurz Brotlieferungen, Katzen und der Erinnerung, was sie war — bevor die wirtschaftliche Governance sich wieder behauptet',
        ],
        ru: [
          'Часы отключения электроэнергии (в настоящее время 20+ часов в день): улица возвращается к гулу генераторов и управлению свечами — неформальная энергетическая экономика заявляет территориальную власть',
          'Рассвет: улица ненадолго принадлежит доставке хлеба, кошкам и памяти о том, чем она была — до того как экономическое управление вновь утверждает себя',
        ],
        ar: [
          'ساعات انقطاع الكهرباء (حالياً 20+ ساعة يومياً): يعود الشارع إلى دندنة المولّد وحوكمة الشمعة — الاقتصاد الطاقوي غير الرسمي يؤكد السلطة الإقليمية',
          'الفجر: يعود الشارع لفترة وجيزة لتوصيلات الخبز والقطط وذاكرة ما كان — قبل أن تؤكد الحوكمة الاقتصادية نفسها مجدداً',
        ],
      },
    },
    {
      id: 'gemmayzeh', type: 'district', lat: 33.8893, lng: 35.5136,
      name: { en: 'Gemmayzeh', de: 'Gemmayzeh', ru: 'Жемайзе', ar: 'الجميزة' },
      atmo: {
        en: 'A neighbourhood that rebuilt itself three times: after the civil war, after the 2006 war, after the 2020 explosion. The old buildings tilt at angles that have become normal here. Glass still exists in the walls from August 4th. The bars opened again six months later.',
        de: 'Ein Stadtteil, der sich dreimal neu aufgebaut hat: nach dem Bürgerkrieg, nach dem Krieg 2006, nach der Explosion 2020. Die alten Gebäude neigen sich in Winkeln, die hier normal geworden sind. Glas aus dem 4. August steckt noch immer in den Wänden. Die Bars öffneten sechs Monate später wieder.',
        ru: 'Район, отстраивавший себя трижды: после гражданской войны, после войны 2006 года, после взрыва 2020 года. Старые здания наклонены под углами, ставшими здесь нормальными. Стекло от 4 августа всё ещё сидит в стенах. Бары открылись снова через шесть месяцев.',
        ar: 'حي أعاد بناء نفسه ثلاث مرات: بعد الحرب الأهلية، بعد حرب 2006، بعد انفجار 2020. المباني القديمة تميل بزوايا أصبحت طبيعية هنا. الزجاج لا يزال موجوداً في الجدران من 4 أغسطس. فُتحت الحانات مرة أخرى بعد ستة أشهر.',
      },
      owners: {
        en: [
          'Ottoman-era buildings (1880s–1920s) assert structural sovereignty — their tilting walls have legal precedence over newer foundations',
          'The explosion blast zone (August 4, 2020) retains a pressure-wave territorial claim — structural damage constitutes a form of ongoing governance',
          'Bar and restaurant operators hold informal evening territorial claims — outdoor tables constitute daily sovereignty assertions',
          'A fig tree (planted pre-1975) has survived the civil war and explosion — it holds the oldest continuous territorial claim on this block',
        ],
        de: [
          'Osmanische Gebäude (1880er–1920er) behaupten strukturelle Souveränität — ihre sich neigenden Wände haben Rechtspräzedenz gegenüber neueren Fundamenten',
          'Die Explosionssprengzone (4. August 2020) behält einen Druckwellen-Territorialanspruch — Strukturschäden bilden eine Form andauernder Governance',
          'Bar- und Restaurantbetreiber halten informelle Abend-Territorialansprüche — Außentische stellen tägliche Souveränitätsbehauptungen dar',
          'Ein Feigenbaum (gepflanzt vor 1975) hat den Bürgerkrieg und die Explosion überlebt — er hält den ältesten kontinuierlichen Territorialanspruch in diesem Block',
        ],
        ru: [
          'Османские здания (1880-е–1920-е) заявляют структурный суверенитет — их наклоняющиеся стены имеют юридический прецедент над более новыми фундаментами',
          'Зона взрыва (4 августа 2020 года) сохраняет территориальную претензию ударной волны — структурный ущерб составляет форму продолжающегося управления',
          'Операторы баров и ресторанов держат неформальные вечерние территориальные претензии — столики на улице составляют ежедневные заявления суверенитета',
          'Фиговое дерево (посажено до 1975 года) пережило гражданскую войну и взрыв — оно держит старейшую непрерывную территориальную претензию на этом квартале',
        ],
        ar: [
          'مباني الحقبة العثمانية (1880–1920) تؤكد السيادة الهيكلية — جدرانها المائلة لها سابقة قانونية على الأساسات الأحدث',
          'منطقة الانفجار (4 أغسطس 2020) تحتفظ بمطالبة إقليمية للموجة الضغطية — الأضرار الهيكلية تشكل شكلاً من أشكال الحوكمة المستمرة',
          'مشغّلو الحانات والمطاعم يحتفظون بمطالبات إقليمية مسائية غير رسمية — الطاولات الخارجية تشكّل إعلانات سيادة يومية',
          'شجرة تين (مزروعة قبل 1975) نجت من الحرب الأهلية والانفجار — تحتفظ بأقدم مطالبة إقليمية مستمرة في هذه الكتلة',
        ],
      },
      ghost: {
        en: [
          'August 4, 2020: 218 dead, 6,500 injured, 300,000 displaced — the explosion maintains an unresolvable governance claim over every damaged structure',
          'The civil war\'s snipers on this street (1975–1990) retain sight-line territorial memories through specific windows and across specific rooftops',
        ],
        de: [
          '4. August 2020: 218 Tote, 6.500 Verletzte, 300.000 Vertriebene — die Explosion hält einen unlösbaren Governance-Anspruch über jede beschädigte Struktur',
          'Die Heckenschützen des Bürgerkriegs auf dieser Straße (1975–1990) behalten Sichtlinien-Territoriums-Erinnerungen durch bestimmte Fenster und über bestimmte Dächer',
        ],
        ru: [
          '4 августа 2020 года: 218 погибших, 6500 раненых, 300 000 перемещённых — взрыв сохраняет неразрешимую претензию управления над каждой повреждённой конструкцией',
          'Снайперы гражданской войны на этой улице (1975–1990) сохраняют территориальные воспоминания линии прицела через определённые окна и поперёк определённых крыш',
        ],
        ar: [
          '4 أغسطس 2020: 218 قتيلاً، 6,500 جريحاً، 300,000 نازح — الانفجار يحتفظ بمطالبة حوكمة غير قابلة للحل على كل بنية متضررة',
          'قناصو الحرب الأهلية في هذا الشارع (1975–1990) يحتفظون بذكريات إقليمية لخط النظر عبر نوافذ محددة وعبر أسطح محددة',
        ],
      },
      temporal: {
        en: [
          'Every August 4: the neighbourhood briefly remembers it is also a disaster site — grief constitutes a form of temporary atmospheric governance',
          'Summer nights: bar terraces assert maximum territorial governance — the street becomes a semi-sovereign zone until 03:00',
        ],
        de: [
          'Jeder 4. August: die Nachbarschaft erinnert sich kurz, dass sie auch ein Katastrophenort ist — Trauer bildet eine Form vorübergehender atmosphärischer Governance',
          'Sommernächte: Bar-Terrassen behaupten maximale territoriale Governance — die Straße wird bis 03:00 zu einer halb-souveränen Zone',
        ],
        ru: [
          'Каждый 4 августа: район ненадолго вспоминает, что он также является местом катастрофы — горе составляет форму временного атмосферного управления',
          'Летние ночи: террасы баров заявляют максимальное территориальное управление — улица становится полусуверенной зоной до 03:00',
        ],
        ar: [
          'كل 4 أغسطس: يتذكر الحي لفترة وجيزة أنه أيضاً موقع كارثة — الحزن يشكّل شكلاً من أشكال الحوكمة الجوية المؤقتة',
          'ليالي الصيف: تراسات الحانات تؤكد أقصى حوكمة إقليمية — يصبح الشارع منطقة شبه سيادية حتى الساعة 03:00',
        ],
      },
    },
    {
      id: 'corniche-beirut', type: 'waterfront', lat: 33.8948, lng: 35.4795,
      name: { en: 'Corniche Beirut', de: 'Corniche Beirut', ru: 'Корниш Бейрута', ar: 'كورنيش بيروت' },
      atmo: {
        en: 'A promenade where the city goes to breathe. Fishermen cast lines from the same spots their fathers used. Runners, families, old men with backgammon boards, and the sea. The sea here has a particular restlessness. It knows what is just across the water.',
        de: 'Eine Promenade, auf die die Stadt geht, um zu atmen. Fischer werfen Leinen von denselben Stellen, die ihre Väter nutzten. Läufer, Familien, alte Männer mit Backgammon-Brettern und das Meer. Das Meer hier hat eine besondere Unruhe. Es weiß, was direkt jenseits des Wassers ist.',
        ru: 'Набережная, куда город приходит дышать. Рыбаки забрасывают удочки с тех же мест, что использовали их отцы. Бегуны, семьи, старики с досками для нард и море. Море здесь имеет особое беспокойство. Оно знает, что прямо за водой.',
        ar: 'ممشى تذهب إليه المدينة لتتنفس. الصيادون يرمون خيوطهم من نفس الأماكن التي استخدمها آباؤهم. العدائون والعائلات والرجال العجائز مع طاولات الطاولة والبحر. للبحر هنا قلق خاص. يعرف ما يوجد عبر الماء مباشرة.',
      },
      owners: {
        en: [
          'The Mediterranean Sea claims primary governance of all surfaces within 6m of the sea wall — a claim it enforces through winter storms',
          'Fishermen hold continuous-practice territorial rights at 14 specific casting points — unchallenged for three generations',
          'The Raouché rocks (natural landmark) hold geological territorial sovereignty — older than any governance system in this city',
          'A coffee cart operator holds informal territorial governance of the northern section — established by 23 years of daily presence',
        ],
        de: [
          'Das Mittelmeer beansprucht primäre Governance aller Oberflächen innerhalb von 6 m der Seemauer — ein Anspruch, den es durch Winterstürme durchsetzt',
          'Fischer halten kontinuierliche Praxis-Territorialrechte an 14 spezifischen Wurfpunkten — drei Generationen lang unbestritten',
          'Die Raouché-Felsen (natürliches Wahrzeichen) halten geologische territoriale Souveränität — älter als jedes Governance-System in dieser Stadt',
          'Ein Kaffeewagen-Betreiber hält informelle territoriale Governance des nördlichen Abschnitts — etabliert durch 23 Jahre täglicher Präsenz',
        ],
        ru: [
          'Средиземное море претендует на первичное управление всеми поверхностями в пределах 6 м морской стены — претензия, которую оно обеспечивает через зимние штормы',
          'Рыбаки держат территориальные права непрерывной практики в 14 конкретных точках заброса — оспаривались три поколения',
          'Скалы Рауше (природная достопримечательность) держат геологический территориальный суверенитет — старше любой системы управления в этом городе',
          'Оператор кофейного ларька держит неформальное территориальное управление северным участком — установлено 23-летним ежедневным присутствием',
        ],
        ar: [
          'البحر الأبيض المتوسط يطالب بالحوكمة الأولية لجميع الأسطح ضمن 6 أمتار من الجدار البحري — مطالبة يُطبّقها عبر عواصف الشتاء',
          'الصيادون يحتفظون بحقوق إقليمية الممارسة المستمرة في 14 نقطة رمي محددة — غير متنازع عليها منذ ثلاثة أجيال',
          'صخور الروشة (معلم طبيعي) تحتفظ بالسيادة الإقليمية الجيولوجية — أقدم من أي نظام حوكمة في هذه المدينة',
          'مشغّل عربة القهوة يحتفظ بالحوكمة الإقليمية غير الرسمية للقسم الشمالي — أُسست بـ 23 عاماً من الحضور اليومي',
        ],
      },
      ghost: {
        en: [
          'The civil war sea-battles (1975–1990) have left a residual maritime-conflict territorial memory in the water just offshore',
          'The original fishing village (pre-French Mandate) maintains a coastal habitation claim beneath the concrete promenade',
        ],
        de: [
          'Die Seeschlachten des Bürgerkriegs (1975–1990) haben eine verbleibende maritime Konflikterinnerung im Wasser direkt vor der Küste hinterlassen',
          'Das ursprüngliche Fischerdorf (vor dem französischen Mandat) hält einen Küstenwohnanspruch unter der Betonnpromenade',
        ],
        ru: [
          'Морские сражения гражданской войны (1975–1990) оставили остаточную территориальную память морского конфликта в воде прямо у берега',
          'Оригинальная рыболовная деревня (до французского мандата) сохраняет претензию прибрежного жилья под бетонной набережной',
        ],
        ar: [
          'معارك البحر في الحرب الأهلية (1975–1990) تركت ذاكرة إقليمية متبقية للنزاع البحري في الماء قبالة الشاطئ مباشرة',
          'قرية الصيادين الأصلية (قبل الانتداب الفرنسي) تحتفظ بمطالبة سكن ساحلية تحت ممشى الخرسانة',
        ],
      },
      temporal: {
        en: [
          'Sunset: the corniche enters its peak governance event — 10,000 daily visitors assert simultaneous territorial claims via presence',
          'Winter storm season: the sea reasserts its historical jurisdiction — waves cross the sea wall and temporarily dissolve the promenade\'s governance claims',
        ],
        de: [
          'Sonnenuntergang: die Corniche tritt in ihr Höhepunkt-Governance-Ereignis ein — 10.000 tägliche Besucher behaupten gleichzeitige Territorialansprüche durch Präsenz',
          'Wintersturmsaison: das Meer behauptet seine historische Zuständigkeit neu — Wellen überqueren die Seemauer und lösen vorübergehend die Governance-Ansprüche der Promenade auf',
        ],
        ru: [
          'Закат: корниш входит в своё пиковое управленческое событие — 10 000 ежедневных посетителей одновременно заявляют территориальные претензии через присутствие',
          'Сезон зимних штормов: море вновь заявляет свою историческую юрисдикцию — волны пересекают морскую стену и временно растворяют претензии набережной',
        ],
        ar: [
          'الغروب: يدخل الكورنيش في حدث حوكمته الذروي — 10,000 زائر يومي يؤكدون مطالبات إقليمية متزامنة عبر الحضور',
          'موسم عواصف الشتاء: البحر يؤكد ولايته القضائية التاريخية مجدداً — الأمواج تعبر الجدار البحري وتذيب مؤقتاً مطالبات الحوكمة للكورنيش',
        ],
      },
    },
    {
      id: 'mar-mikhael', type: 'district', lat: 33.8880, lng: 35.5160,
      name: { en: 'Mar Mikhael', de: 'Mar Mikhael', ru: 'Мар Михаэль', ar: 'مار مخايل' },
      atmo: {
        en: 'An Armenian neighbourhood that became a nightlife district that was devastated by an explosion. The blast epicentre was 800 metres from here. The church survived. The bars were rebuilt before the apartments. The neighbourhood is now three things simultaneously and has not decided which one it is.',
        de: 'Ein armenisches Viertel, das zu einem Nachtlebenbezirk wurde, der durch eine Explosion verwüstet wurde. Das Explosionszentrum war 800 Meter von hier entfernt. Die Kirche überlebte. Die Bars wurden vor den Wohnungen wieder aufgebaut. Das Viertel ist jetzt gleichzeitig drei Dinge und hat nicht entschieden, welches es ist.',
        ru: 'Армянский квартал, ставший районом ночной жизни, опустошённым взрывом. Эпицентр взрыва был в 800 метрах отсюда. Церковь выжила. Бары были отстроены раньше квартир. Квартал сейчас одновременно три вещи и не решил, какой из них является.',
        ar: 'حي أرمني أصبح حي حياة ليلية ودُمِّر بانفجار. مركز الانفجار كان على بعد 800 متر من هنا. الكنيسة نجت. أُعيد بناء الحانات قبل الشقق. الحي الآن ثلاثة أشياء في آن واحد ولم يقرر أيها هو.',
      },
      owners: {
        en: [
          'The Armenian Apostolic Church (est. 1930s) holds spiritual territorial governance — survived the civil war, Israeli strikes, and the port explosion',
          'The 2020 explosion blast damage retains an ongoing structural-governance claim — 47% of buildings still unrepaired',
          'Bar and gallery owners hold the evening territorial claims — reconstruction as cultural assertion',
          'An old mulberry tree near the church claims the oldest continuous biological territorial right in this district',
        ],
        de: [
          'Die Armenisch-Apostolische Kirche (gegründet 1930er) hält spirituelle territoriale Governance — überlebte den Bürgerkrieg, israelische Angriffe und die Hafenexplosion',
          'Der Explosionsschaden 2020 behält einen andauernden strukturellen Governance-Anspruch — 47% der Gebäude noch nicht repariert',
          'Bar- und Galeriebesitzer halten die Abend-Territorialansprüche — Rekonstruktion als kulturelle Behauptung',
          'Ein alter Maulbeerbaum nahe der Kirche beansprucht das älteste kontinuierliche biologische Territorialrecht in diesem Bezirk',
        ],
        ru: [
          'Армянская Апостольская церковь (основана в 1930-х) держит духовное территориальное управление — пережила гражданскую войну, израильские удары и взрыв порта',
          'Взрывной ущерб 2020 года сохраняет продолжающуюся структурную претензию управления — 47% зданий всё ещё не отремонтировано',
          'Владельцы баров и галерей держат вечерние территориальные претензии — реконструкция как культурное заявление',
          'Старая шелковица рядом с церковью претендует на старейшее непрерывное биологическое территориальное право в этом районе',
        ],
        ar: [
          'الكنيسة الرسولية الأرمنية (أُسست في الثلاثينيات) تحتفظ بالحوكمة الإقليمية الروحية — نجت من الحرب الأهلية والضربات الإسرائيلية وانفجار المرفأ',
          'أضرار انفجار 2020 تحتفظ بمطالبة حوكمة هيكلية مستمرة — 47% من المباني لا تزال غير مُرممة',
          'أصحاب الحانات والغاليريهات يحتفظون بالمطالبات الإقليمية المسائية — إعادة الإعمار كتأكيد ثقافي',
          'شجرة توت قديمة بالقرب من الكنيسة تطالب بأقدم حق إقليمي بيولوجي مستمر في هذا الحي',
        ],
      },
      ghost: {
        en: [
          'The port explosion of August 4, 2020 — 218 dead in greater Beirut, hundreds in this district specifically — retains an unresolvable presence claim',
          'Armenian genocide survivors who settled here (post-1915) maintain the founding habitation claim of this entire neighbourhood',
        ],
        de: [
          'Die Hafenexplosion vom 4. August 2020 — 218 Tote im Großraum Beirut, Hunderte in diesem Bezirk speziell — behält einen unlösbaren Präsenzanspruch',
          'Armenische Genozid-Überlebende, die sich hier niederließen (nach 1915), halten den Gründungswohnanspruch dieses gesamten Viertels',
        ],
        ru: [
          'Взрыв порта 4 августа 2020 года — 218 погибших в большом Бейруте, сотни конкретно в этом районе — сохраняет неразрешимую претензию присутствия',
          'Выжившие в Геноциде армян, поселившиеся здесь (после 1915 года), держат основополагающую претензию на жильё всего этого района',
        ],
        ar: [
          'انفجار المرفأ في 4 أغسطس 2020 — 218 قتيلاً في بيروت الكبرى، مئات في هذا الحي تحديداً — يحتفظ بمطالبة حضور غير قابلة للحل',
          'الناجون من الإبادة الأرمنية الذين استقروا هنا (بعد 1915) يحتفظون بمطالبة السكن التأسيسية لهذا الحي بأكمله',
        ],
      },
      temporal: {
        en: [
          'August 4, every year: the district pauses — grief temporarily replaces nightlife as the primary governance mode',
          'Late night (23:00–03:00): music and generator hum create a temporary acoustic sovereignty — the neighbourhood\'s most visible governance assertion',
        ],
        de: [
          '4. August, jedes Jahr: der Bezirk pausiert — Trauer ersetzt vorübergehend das Nachtleben als primären Governance-Modus',
          'Spätnacht (23:00–03:00): Musik und Generatorengeräusch schaffen eine vorübergehende akustische Souveränität — die sichtbarste Governance-Behauptung des Viertels',
        ],
        ru: [
          '4 августа, каждый год: район делает паузу — горе временно заменяет ночную жизнь как основной режим управления',
          'Поздняя ночь (23:00–03:00): музыка и гул генератора создают временный акустический суверенитет — наиболее видимое заявление управления квартала',
        ],
        ar: [
          '4 أغسطس كل عام: يتوقف الحي — الحزن يحل مؤقتاً محل الحياة الليلية كنمط الحوكمة الأولي',
          'وقت متأخر من الليل (23:00–03:00): الموسيقى ودندنة المولّد تخلقان سيادة صوتية مؤقتة — التأكيد الأكثر وضوحاً للحوكمة في الحي',
        ],
      },
    },
  ],
};
