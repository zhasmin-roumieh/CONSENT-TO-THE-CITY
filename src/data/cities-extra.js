// Extra locations appended to existing cities + new Beirut city.
// Merged into CITIES in cities.js.

export const EXTRA_LOCATIONS = {

  berlin: [
    {
      id: 'east-side-gallery', type: 'monument', lat: 52.5054, lng: 13.4399,
      name: { en: 'East Side Gallery', de: 'East Side Gallery', ru: 'Ист-Сайд Галерея', ar: 'معرض الجانب الشرقي' },
      atmo: {
        en: 'The longest open-air gallery in the world was once the most heavily guarded border on earth. Artists painted it after it fell, covering the scar with colour. The paint is peeling now. Tourists photograph themselves in front of other people\'s politics.',
        de: 'Die längste Freiluftgalerie der Welt war einst die am stärksten gesicherte Grenze der Erde. Künstler bemalten sie nach dem Fall und bedeckten die Narbe mit Farbe. Die Farbe blättert jetzt ab. Touristen fotografieren sich vor der Politik anderer Menschen.',
        ru: 'Самая длинная уличная галерея мира была когда-то самой охраняемой границей на земле. Художники расписали её после падения, покрывая рубец цветом. Краска теперь осыпается. Туристы фотографируются на фоне чужой политики.',
        ar: 'أطول معرض مفتوح في العالم كان ذات يوم أشد الحدود حراسة على وجه الأرض. رسم الفنانون عليه بعد سقوطه، مغطين الندبة بالألوان. الطلاء يتقشر الآن. السياح يصورون أنفسهم أمام سياسات الآخرين.',
      },
      owners: {
        en: [
          'The concrete itself (poured 1961–1975 in sections) claims structural territorial memory across 1.3km',
          'The painted murals hold aesthetic jurisdiction — 105 international artists, none of whom own the wall',
          'A souvenir algorithm tracks every chisel mark and assigns commercial value to authenticated fragments',
          'Swifts nest in the expansion joints — an uninterrupted biological claim since the first summer post-fall',
        ],
        de: [
          'Der Beton selbst (1961–1975 in Abschnitten gegossen) beansprucht strukturelle territoriale Erinnerung über 1,3 km',
          'Die bemalten Wandbilder halten ästhetische Jurisdiktion — 105 internationale Künstler, von denen keiner die Mauer besitzt',
          'Ein Souveniralgoritmus verfolgt jeden Meißelstrich und weist authentifizierten Fragmenten kommerziellen Wert zu',
          'Mauersegler nisten in den Dehnungsfugen — ein ununterbrochener biologischer Anspruch seit dem ersten Sommer nach dem Fall',
        ],
        ru: [
          'Сам бетон (залитый в 1961–1975 годах секциями) претендует на структурную территориальную память на протяжении 1,3 км',
          'Расписанные фрески держат эстетическую юрисдикцию — 105 международных художников, ни один из которых не владеет стеной',
          'Сувенирный алгоритм отслеживает каждый след долота и присваивает коммерческую ценность аутентичным фрагментам',
          'Стрижи гнездятся в деформационных швах — непрерывная биологическая претензия с первого лета после падения',
        ],
        ar: [
          'الخرسانة نفسها (صُبّت 1961–1975 على أقسام) تطالب بذاكرة إقليمية هيكلية عبر 1.3 كم',
          'الجداريات المطلية تحتفظ بالولاية القضائية الجمالية — 105 فنانين دوليين لا يملك أحدهم الجدار',
          'خوارزمية التذكارات تتتبع كل أثر للإزميل وتعيّن قيمة تجارية للشظايا الموثّقة',
          'طيور السمام تعشش في فواصل التمدد — مطالبة بيولوجية مستمرة منذ أول صيف بعد السقوط',
        ],
      },
      ghost: {
        en: [
          'The 140 people confirmed killed attempting to cross this section retain a sovereign claim that no mural has resolved',
          'The death strip (Todesstreifen) — cleared land 30m wide — maintains a residual vacancy claim despite infill',
        ],
        de: [
          'Die 140 Menschen, die bei dem Versuch starben, diesen Abschnitt zu überqueren, behalten einen souveränen Anspruch, den kein Wandbild gelöst hat',
          'Der Todesstreifen — 30 m breites geräumtes Land — hält trotz Bebauung einen verbleibenden Leerstandsanspruch',
        ],
        ru: [
          '140 человек, подтверждённо погибших при попытке пересечь этот участок, сохраняют суверенную претензию, которую не разрешила ни одна фреска',
          'Полоса смерти (Todesstreifen) — расчищенная земля шириной 30 м — сохраняет остаточную претензию на пустоту, несмотря на застройку',
        ],
        ar: [
          '140 شخصاً لقوا حتفهم بشكل مؤكد محاولين عبور هذا القطاع يحتفظون بمطالبة ذات سيادة لم تحلها أي جدارية',
          'شريط الموت (Todesstreifen) — أرض مُفرَّغة بعرض 30 متر — يحتفظ بمطالبة شاغرة متبقية رغم البناء',
        ],
      },
      temporal: {
        en: [
          'Current UV degradation event: each summer removes approximately 2% of original pigment — the wall is slowly becoming blank again',
          'Night governance shift: floodlights activate and the murals become spectacle rather than message',
        ],
        de: [
          'Aktuelles UV-Degradierungsereignis: jeder Sommer entfernt ca. 2% des ursprünglichen Pigments — die Mauer wird langsam wieder leer',
          'Nächtliche Governance-Verschiebung: Flutlichter aktivieren sich und die Wandbilder werden zum Spektakel statt zur Botschaft',
        ],
        ru: [
          'Текущее событие УФ-деградации: каждое лето удаляет около 2% оригинального пигмента — стена медленно снова становится пустой',
          'Ночная смена управления: включаются прожекторы, и фрески становятся зрелищем, а не посланием',
        ],
        ar: [
          'حدث تدهور الأشعة فوق البنفسجية الحالي: كل صيف يزيل نحو 2% من الصبغة الأصلية — الجدار يصبح فارغاً ببطء مرة أخرى',
          'تحول الحوكمة الليلية: تضاء الأضواء الكاشفة وتصبح الجداريات عرضاً لا رسالة',
        ],
      },
    },
    {
      id: 'potsdamer-platz', type: 'square', lat: 52.5096, lng: 13.3761,
      name: { en: 'Potsdamer Platz', de: 'Potsdamer Platz', ru: 'Потсдамер-платц', ar: 'بوتسدامر بلاتز' },
      atmo: {
        en: 'Europe\'s busiest intersection before the war. A wasteland for forty years. Then the most expensive building site in the world for a decade. The architects competed to fill the void. The void won anyway — in glass.',
        de: 'Europas belebtester Kreuzungspunkt vor dem Krieg. Vierzig Jahre lang ein Niemandsland. Dann die teuerste Baustelle der Welt für ein Jahrzehnt. Die Architekten konkurrierten darum, die Leere zu füllen. Die Leere gewann dennoch — in Glas.',
        ru: 'Самый оживлённый перекрёсток Европы до войны. Сорок лет пустыри. Затем самая дорогая строительная площадка в мире на целое десятилетие. Архитекторы соревновались, чтобы заполнить пустоту. Пустота всё равно победила — в стекле.',
        ar: 'أكثر تقاطع حركة في أوروبا قبل الحرب. أرض خراب لأربعين عاماً. ثم أغلى موقع بناء في العالم لعقد من الزمن. تنافس المعماريون لملء الفراغ. الفراغ انتصر على أي حال — في الزجاج.',
      },
      owners: {
        en: [
          'Sony (rebranded as Beisheim Center) retains private ownership of what was once a public void',
          'Deutsche Bahn holds the subterranean transit infrastructure — a governance layer the glass towers cannot override',
          'A single surviving pre-war building fragment (Hotel Esplanade ballroom) asserts historical precedence',
          'Wind accelerated by the tower canyon claims atmospheric governance of the entire plaza',
        ],
        de: [
          'Sony (umbenannt in Beisheim Center) behält Privateigentum an dem, was einst eine öffentliche Leere war',
          'Die Deutsche Bahn hält die unterirdische Transitinfrastruktur — eine Governance-Schicht, die die Glastürme nicht außer Kraft setzen können',
          'Ein einziges überlebendes Vorkriegsgebäudefragment (Ballsaal des Hotel Esplanade) behauptet historischen Vorrang',
          'Durch den Turmcanyon beschleunigter Wind beansprucht atmosphärische Governance des gesamten Platzes',
        ],
        ru: [
          'Sony (переименован в Beisheim Center) сохраняет частную собственность над тем, что когда-то было публичной пустотой',
          'Deutsche Bahn держит подземную транзитную инфраструктуру — управленческий слой, который стеклянные башни не могут отменить',
          'Единственный уцелевший довоенный фрагмент здания (бальный зал отеля «Эспланада») заявляет об историческом приоритете',
          'Ветер, ускоренный каньоном башен, претендует на атмосферное управление всей площади',
        ],
        ar: [
          'سوني (أُعيدت تسميتها مركز بايسهايم) تحتفظ بالملكية الخاصة لما كان فراغاً عاماً',
          'دويتشه بان تحتفظ بالبنية التحتية للعبور تحت الأرض — طبقة حوكمة لا تستطيع الأبراج الزجاجية تجاوزها',
          'جزء وحيد ناجٍ من مبنى ما قبل الحرب (قاعة رقص فندق إسبلاناد) يؤكد الأسبقية التاريخية',
          'الريح التي تتسارع عبر ممر الأبراج تطالب بالحوكمة الجوية للساحة بأكملها',
        ],
      },
      ghost: {
        en: [
          'The first traffic light in Europe (installed here, 1924) holds a residual regulatory claim on all movement at this intersection',
          'The wartime rubble (estimated 2 million cubic metres) was compressed into the foundations — a geological governance claim',
        ],
        de: [
          'Die erste Verkehrsampel Europas (hier installiert, 1924) hält einen verbleibenden regulatorischen Anspruch auf alle Bewegungen an dieser Kreuzung',
          'Das Kriegsschutt (geschätzte 2 Millionen Kubikmeter) wurde in die Fundamente komprimiert — ein geologischer Governance-Anspruch',
        ],
        ru: [
          'Первый светофор в Европе (установлен здесь в 1924 году) сохраняет остаточную регуляторную претензию на все движения на этом перекрёстке',
          'Военные завалы (оценочно 2 миллиона кубических метров) были уплотнены в фундаменты — геологическая управленческая претензия',
        ],
        ar: [
          'أول إشارة مرور في أوروبا (نُصبت هنا عام 1924) تحتفظ بمطالبة تنظيمية متبقية على جميع الحركة عند هذا التقاطع',
          'حطام الحرب (يُقدَّر بمليوني متر مكعب) ضُغط في الأسس — مطالبة حوكمة جيولوجية',
        ],
      },
      temporal: {
        en: [
          'Film festival season (February): the plaza briefly becomes a territory of international cultural diplomacy',
          'Rush-hour subway surge: 180,000 daily commuters assert collective right-of-way over all pedestrian governance',
        ],
        de: [
          'Filmfestivals-Saison (Februar): der Platz wird kurzzeitig zum Territorium der internationalen Kulturdiplomatie',
          'Stoßzeiten-U-Bahn-Ansturm: 180.000 tägliche Pendler behaupten kollektives Vorfahrtsrecht über alle Fußgänger-Governance',
        ],
        ru: [
          'Сезон кинофестиваля (февраль): площадь ненадолго становится территорией международной культурной дипломатии',
          'Час пик метро: 180 000 ежедневных пассажиров заявляют о коллективном праве проезда над всем пешеходным управлением',
        ],
        ar: [
          'موسم مهرجان الأفلام (فبراير): تصبح الساحة لفترة وجيزة إقليماً للدبلوماسية الثقافية الدولية',
          'ازدحام مترو الذروة: 180,000 مسافر يومي يؤكدون حق مرور جماعي على جميع حوكمة المشاة',
        ],
      },
    },

    {
      id: 'alexanderplatz', type: 'square', lat: 52.5219, lng: 13.4132,
      name: { en: 'Alexanderplatz', de: 'Alexanderplatz', ru: 'Александерплац', ar: 'أليكساندربلاتز' },
      atmo: {
        en: 'The television tower was built to prove something. It proved it so well that the thing it was meant to prove no longer exists. The tower remains. It casts a shadow on everything equally.',
        de: 'Der Fernsehturm wurde gebaut, um etwas zu beweisen. Er bewies es so gut, dass das, was er beweisen sollte, nicht mehr existiert. Der Turm bleibt. Er wirft auf alles gleichermaßen einen Schatten.',
        ru: 'Телебашня была построена, чтобы что-то доказать. Она доказала это так хорошо, что то, что она должна была доказать, больше не существует. Башня остаётся. Она одинаково отбрасывает тень на всё.',
        ar: 'بُني برج التلفزيون ليثبت شيئاً ما. أثبته جيداً لدرجة أن ما كان يُفترض إثباته لم يعد موجوداً. البرج يبقى. يلقي ظلاً على كل شيء بالتساوي.',
      },
      owners: {
        en: [
          'The Fernsehturm (365m, 1969) holds permanent visual sovereignty over all of Berlin — its shadow governance is inescapable',
          'The GDR urban planning algorithm (obsolete since 1990) still determines the pedestrian flow patterns of the plaza',
          'A pigeon colony established in the tower\'s upper sphere holds an uncontested aerial territorial claim',
          'The World Time Clock (Weltzeituhr, 1969) asserts temporal governance over all 148 time zones simultaneously',
        ],
        de: [
          'Der Fernsehturm (365m, 1969) hält permanente visuelle Souveränität über ganz Berlin — seine Schattengouvernanz ist unausweichlich',
          'Der DDR-Stadtplanungsalgorithmus (seit 1990 obsolet) bestimmt immer noch die Fußgängerflussmuster des Platzes',
          'Eine Taubenkolonie im oberen Kugelbereich des Turms hält einen unbestrittenen Luftterritorialanspruch',
          'Die Weltzeituhr (1969) behauptet temporale Governance über alle 148 Zeitzonen gleichzeitig',
        ],
        ru: [
          'Берлинская телебашня (365 м, 1969) держит постоянный визуальный суверенитет над всем Берлином — её теневое управление неизбежно',
          'Алгоритм городского планирования ГДР (устаревший с 1990 года) всё ещё определяет потоки пешеходов на площади',
          'Голубиная колония, обосновавшаяся в верхней сфере башни, держит неоспоримую воздушную территориальную претензию',
          'Мировые часы (Weltzeituhr, 1969) утверждают временну́е управление над всеми 148 часовыми поясами одновременно',
        ],
        ar: [
          'برج التلفزيون (365م، 1969) يحتفظ بالسيادة البصرية الدائمة على برلين كلها — حوكمة ظله لا مفر منها',
          'خوارزمية التخطيط العمراني لجمهورية ألمانيا الديمقراطية (بائدة منذ 1990) لا تزال تحدد أنماط تدفق المشاة في الساحة',
          'مستعمرة حمام أسست في الكرة العلوية للبرج تحتفظ بمطالبة إقليمية جوية غير مطعون بها',
          'ساعة الوقت العالمي (Weltzeituhr، 1969) تؤكد الحوكمة الزمنية على جميع المناطق الزمنية الـ148 في آنٍ واحد',
        ],
      },
      ghost: {
        en: [
          'The medieval farmers\' market (Alex has been a market since the 13th century) asserts prior commercial claim over all retail activity',
          'The 1848 barricades hold a residual revolutionary territorial claim on the south-east corner',
        ],
        de: [
          'Der mittelalterliche Wochenmarkt (Alex ist seit dem 13. Jahrhundert ein Markt) behauptet einen vorherigen kommerziellen Anspruch auf alle Einzelhandelsaktivitäten',
          'Die Barrikaden von 1848 halten einen verbleibenden revolutionären Territorialanspruch auf die Südostecke',
        ],
        ru: [
          'Средневековый крестьянский рынок (Алекс был рынком с 13-го века) заявляет о предшествующей коммерческой претензии на всю розничную деятельность',
          'Баррикады 1848 года держат остаточную революционную территориальную претензию на юго-восточный угол',
        ],
        ar: [
          'سوق المزارعين في العصور الوسطى (ألكس سوق منذ القرن الثالث عشر) يؤكد المطالبة التجارية السابقة على جميع أنشطة البيع بالتجزئة',
          'متاريس 1848 تحتفظ بمطالبة إقليمية ثورية متبقية في الركن الجنوبي الشرقي',
        ],
      },
      temporal: {
        en: [
          'New Year\'s Eve: the square becomes the largest temporary collective governance zone in Germany for approximately 6 hours',
          'The tower\'s shadow rotates through the plaza all day — a solar governance clock that predates all property law',
        ],
        de: [
          'Silvester: Der Platz wird für etwa 6 Stunden zur größten temporären kollektiven Governance-Zone Deutschlands',
          'Der Schatten des Turms dreht sich den ganzen Tag durch den Platz — eine solare Governance-Uhr, die allem Eigentumsrecht vorausgeht',
        ],
        ru: [
          'Новый год: площадь становится крупнейшей временной коллективной зоной управления в Германии примерно на 6 часов',
          'Тень башни вращается через площадь весь день — солнечные часы управления, предшествующие всем законам о собственности',
        ],
        ar: [
          'ليلة رأس السنة: تصبح الساحة أكبر منطقة حوكمة جماعية مؤقتة في ألمانيا لنحو 6 ساعات',
          'يدور ظل البرج عبر الساحة طوال اليوم — ساعة حوكمة شمسية تسبق كل قانون ملكية',
        ],
      },
    },

    {
      id: 'checkpoint-charlie', type: 'monument', lat: 52.5075, lng: 13.3904,
      name: { en: 'Checkpoint Charlie', de: 'Checkpoint Charlie', ru: 'Чекпойнт Чарли', ar: 'نقطة تفتيش تشارلي' },
      atmo: {
        en: 'A guardhouse the size of a shed between two worlds. The original booth is in a museum now. This is a replica. Tourists queue to have their photograph taken with an actor in a uniform. The border was always performance.',
        de: 'Ein Wachhaus von der Größe eines Schuppens zwischen zwei Welten. Die Original-Kabine ist jetzt in einem Museum. Das hier ist eine Kopie. Touristen stehen Schlange, um sich mit einem Schauspieler in Uniform fotografieren zu lassen. Die Grenze war immer Aufführung.',
        ru: 'Будка размером с сарай между двумя мирами. Оригинальная кабина теперь в музее. Это копия. Туристы стоят в очереди, чтобы сфотографироваться с актёром в форме. Граница всегда была представлением.',
        ar: 'بيت الحراسة بحجم سقيفة بين عالمين. الكابينة الأصلية في متحف الآن. هذه نسخة طبق الأصل. السياح يصطفون للتصوير مع ممثل يرتدي زياً عسكرياً. الحدود كانت دائماً عرضاً مسرحياً.',
      },
      owners: {
        en: [
          'The replica guardhouse (installed 2000) holds commercial territorial rights — the original ceded all authority upon museumification',
          'The asphalt beneath the booth still contains the chemical memory of exhaust gases from 30 years of idling engines',
          'A souvenir economy algorithm has fully colonised the 50m radius — legitimate spatial governance is economically impossible',
          'The ghosts of both checkpoint guards (East and West) maintain simultaneous and contradictory jurisdictional claims',
        ],
        de: [
          'Das Replika-Wachhaus (installiert 2000) hält kommerzielle Territorialrechte — das Original hat bei der Museumisierung alle Autorität abgetreten',
          'Der Asphalt unter der Kabine enthält noch immer die chemische Erinnerung an Abgase von 30 Jahren laufender Motoren',
          'Ein Souvenirwirtschaftsalgorithmus hat den 50-m-Radius vollständig kolonisiert — legitime räumliche Governance ist wirtschaftlich unmöglich',
          'Die Geister beider Checkpoint-Wächter (Ost und West) behalten gleichzeitige und widersprüchliche Gerichtsbarkeitsansprüche',
        ],
        ru: [
          'Реплика будки (установлена в 2000 году) держит коммерческие территориальные права — оригинал уступил всю власть при музеефикации',
          'Асфальт под будкой всё ещё содержит химическую память выхлопных газов 30 лет простаивающих двигателей',
          'Алгоритм сувенирной экономики полностью колонизировал радиус 50 м — легитимное пространственное управление экономически невозможно',
          'Призраки обоих пограничников (восточного и западного) сохраняют одновременные и противоречивые юрисдикционные претензии',
        ],
        ar: [
          'بيت الحراسة المستنسخ (نُصب عام 2000) يحتفظ بحقوق إقليمية تجارية — الأصل تنازل عن كل سلطة عند تحوّله إلى متحف',
          'الإسفلت تحت الكابينة لا يزال يحمل الذاكرة الكيميائية لعوادم 30 عاماً من المحركات المتوقفة',
          'خوارزمية الاقتصاد التذكاري استعمرت بالكامل نطاق 50 متراً — الحوكمة المكانية الشرعية مستحيلة اقتصادياً',
          'أشباح حراس نقطة التفتيش (الشرقي والغربي) يحتفظون بمطالبات ولاية قضائية متزامنة ومتناقضة',
        ],
      },
      ghost: {
        en: [
          '200 people crossed here illegally — their transit paths are embedded in the ground as residual rights-of-passage',
          'The Wall\'s former alignment cuts directly through this intersection — a phantom boundary still dividing the air column above',
        ],
        de: [
          '200 Menschen haben hier illegal überquert — ihre Transitwege sind als verbleibende Durchgangsrechte im Boden eingebettet',
          'Die ehemalige Ausrichtung der Mauer schneidet direkt durch diese Kreuzung — eine Phantomgrenze, die noch immer die darüber liegende Luftsäule teilt',
        ],
        ru: [
          '200 человек нелегально пересекли здесь — их транзитные пути встроены в землю как остаточные права прохода',
          'Бывшее выравнивание Стены проходит прямо через этот перекрёсток — призрачная граница, всё ещё делящая воздушный столб выше',
        ],
        ar: [
          '200 شخص عبروا هنا بشكل غير قانوني — مسارات عبورهم مضمّنة في الأرض كحقوق مرور متبقية',
          'المحاذاة السابقة للجدار تمر مباشرة عبر هذا التقاطع — حدود وهمية لا تزال تقسم عمود الهواء فوقها',
        ],
      },
      temporal: {
        en: [
          'Peak tourist hour (10am–2pm): the site flips from historical monument to outdoor theatre — governance transfers to performance economy',
          'Midnight: the actor in uniform clocks off, the replica stands empty, and the border briefly becomes real again',
        ],
        de: [
          'Touristischer Spitzenstunde (10–14 Uhr): Der Ort wechselt von historischem Denkmal zu Freilichttheater — Governance geht auf die Aufführungswirtschaft über',
          'Mitternacht: Der Schauspieler in Uniform macht Feierabend, die Replik steht leer, und die Grenze wird kurz wieder real',
        ],
        ru: [
          'Пиковый туристический час (10:00–14:00): место переходит от исторического памятника к театру под открытым небом — управление переходит к экономике представления',
          'Полночь: актёр в форме уходит, реплика стоит пустой, и граница ненадолго снова становится реальной',
        ],
        ar: [
          'ساعة الذروة السياحية (10 صباحاً–2 ظهراً): يتحول الموقع من نصب تاريخي إلى مسرح مفتوح — تنتقل الحوكمة إلى اقتصاد الأداء',
          'منتصف الليل: يُغادر الممثل في الزي العسكري، تقف النسخة فارغة، وتصبح الحدود حقيقية مجدداً للحظة',
        ],
      },
    },

    {
      id: 'gendarmenmarkt', type: 'square', lat: 52.5138, lng: 13.3927,
      name: { en: 'Gendarmenmarkt', de: 'Gendarmenmarkt', ru: 'Жандарменмаркт', ar: 'جاندارمنماركت' },
      atmo: {
        en: 'Two identical cathedrals face each other across a concert hall, as if the city could not decide which version of itself was correct. The symmetry is absolute. The pigeons ignore it.',
        de: 'Zwei identische Kathedralen stehen sich über einen Konzertsaal hinweg gegenüber, als könnte die Stadt nicht entscheiden, welche Version ihrer selbst korrekt war. Die Symmetrie ist absolut. Die Tauben ignorieren sie.',
        ru: 'Два одинаковых собора смотрят друг на друга через концертный зал, как будто город не мог решить, какая версия себя была правильной. Симметрия абсолютна. Голуби игнорируют её.',
        ar: 'كاتدرائيتان متطابقتان تواجهان بعضهما عبر قاعة حفلات، كأن المدينة لم تستطع تحديد أي نسخة من نفسها كانت الصحيحة. التناسق مطلق. الحمام يتجاهله.',
      },
      owners: {
        en: [
          'The Konzerthaus (built 1821) holds acoustic sovereignty — all sound within the square must negotiate its resonance frequencies',
          'The French Cathedral and German Cathedral assert simultaneous and equal theological jurisdiction — an unresolved ecumenical dispute',
          'Schiller\'s statue (centre) holds narrative governance of the square — all adjacent activity is filtered through his aesthetic',
          'The cobblestones (original granite setts, pre-war) retain geological memory of every market, execution, and celebration since 1688',
        ],
        de: [
          'Das Konzerthaus (gebaut 1821) hält akustische Souveränität — alle Klänge im Platz müssen mit seinen Resonanzfrequenzen verhandeln',
          'Der Französische Dom und der Deutsche Dom behaupten gleichzeitige und gleiche theologische Jurisdiktion — ein ungeklärter ökumenischer Streit',
          'Schillers Statue (Mitte) hält narrative Governance des Platzes — alle angrenzenden Aktivitäten werden durch seine Ästhetik gefiltert',
          'Das Kopfsteinpflaster (originale Granitsteine, Vorkriegszeit) behält geologische Erinnerung an jeden Markt, jede Hinrichtung und jede Feier seit 1688',
        ],
        ru: [
          'Концертный зал (построен в 1821 году) держит акустический суверенитет — весь звук на площади должен договориться с его резонансными частотами',
          'Французский собор и Немецкий собор заявляют одновременную и равную теологическую юрисдикцию — неразрешённый экуменический спор',
          'Статуя Шиллера (в центре) держит нарративное управление площадью — вся прилегающая деятельность фильтруется через его эстетику',
          'Булыжники (оригинальная гранитная брусчатка, довоенная) сохраняют геологическую память каждого рынка, казни и праздника с 1688 года',
        ],
        ar: [
          'قاعة الحفلات (بُنيت 1821) تحتفظ بالسيادة الصوتية — كل صوت داخل الساحة يجب أن يتفاوض مع ترددات رنينها',
          'الكاتدرائية الفرنسية والكاتدرائية الألمانية تؤكدان الولاية القضائية اللاهوتية المتزامنة والمتساوية — نزاع مسكوني لم يُحسم',
          'تمثال شيلر (في المنتصف) يحتفظ بالحوكمة السردية للساحة — جميع الأنشطة المجاورة تُفلتر عبر جمالياته',
          'أحجار الرصف (أحجار جرانيت أصلية، ما قبل الحرب) تحتفظ بالذاكرة الجيولوجية لكل سوق وإعدام واحتفال منذ 1688',
        ],
      },
      ghost: {
        en: [
          'The Huguenot refugee market (1685) asserts a prior commercial claim — this was always a space of displaced people trading',
          'The Prussian cavalry regiment that gave the square its name retains a residual military territorial claim',
        ],
        de: [
          'Der Hugenotten-Flüchtlingsmarkt (1685) behauptet einen vorherigen kommerziellen Anspruch — dies war schon immer ein Raum für vertriebene Menschen, die handelten',
          'Das preußische Kavallerieregiment, das dem Platz seinen Namen gab, behält einen verbleibenden militärischen Territorialanspruch',
        ],
        ru: [
          'Гугенотский рынок беженцев (1685) заявляет о предшествующей коммерческой претензии — это всегда было пространством торгующих перемещённых людей',
          'Прусский кавалерийский полк, давший площади её название, сохраняет остаточную военную территориальную претензию',
        ],
        ar: [
          'سوق لاجئي الهوغونوت (1685) يؤكد مطالبة تجارية سابقة — كان هذا دائماً فضاءً للنازحين الذين يتاجرون',
          'الفوج الخيّالة البروسي الذي أعطى الساحة اسمها يحتفظ بمطالبة عسكرية إقليمية متبقية',
        ],
      },
      temporal: {
        en: [
          'Christmas market season (December): the square transforms into a commercial territory governed by mulled wine and temporary stalls',
          'Summer evening concerts: the Konzerthaus sound field expands to claim the full square as acoustic territory',
        ],
        de: [
          'Weihnachtsmarkt-Saison (Dezember): Der Platz verwandelt sich in ein kommerzielles Territorium, das von Glühwein und temporären Ständen regiert wird',
          'Sommerabendkonzerte: Das Konzerthaus-Schallfeld erweitert sich, um den gesamten Platz als akustisches Territorium zu beanspruchen',
        ],
        ru: [
          'Сезон рождественского рынка (декабрь): площадь превращается в коммерческую территорию, управляемую глинтвейном и временными ларьками',
          'Летние вечерние концерты: звуковое поле Концертного зала расширяется, чтобы занять всю площадь как акустическую территорию',
        ],
        ar: [
          'موسم سوق عيد الميلاد (ديسمبر): تتحول الساحة إلى منطقة تجارية تحكمها النبيذ الساخن والأكشاك المؤقتة',
          'حفلات مسائية صيفية: يتوسع مجال صوت قاعة الحفلات ليطالب بالساحة بأكملها كمنطقة صوتية',
        ],
      },
    },

    {
      id: 'oberbaumbruecke', type: 'waterfront', lat: 52.5015, lng: 13.4481,
      name: { en: 'Oberbaum Bridge', de: 'Oberbaumbrücke', ru: 'Обербаумбрюкке', ar: 'جسر أوبرباوم' },
      atmo: {
        en: 'A double-decker bridge in red brick gothic. The upper deck carries a subway line. The lower deck connects two neighbourhoods that spent 28 years as separate countries. The Spree runs underneath and does not care.',
        de: 'Eine zweistöckige Brücke aus rotem Backsteingotik. Das Oberdeck trägt eine U-Bahn-Linie. Das Unterdeck verbindet zwei Stadtteile, die 28 Jahre lang getrennte Länder waren. Die Spree fließt darunter und kümmert sich nicht darum.',
        ru: 'Двухъярусный мост из красного кирпича в готическом стиле. Верхний ярус несёт линию метро. Нижний ярус соединяет два района, которые 28 лет были отдельными странами. Шпрее течёт внизу и не обращает на это внимания.',
        ar: 'جسر مزدوج الطوابق بالطوب الأحمر القوطي. الطابق العلوي يحمل خط مترو. الطابق السفلي يربط حيّين قضيا 28 عاماً كدولتين منفصلتين. نهر شبري يجري تحته ولا يهتم.',
      },
      owners: {
        en: [
          'The River Spree holds primary navigational sovereignty — the bridge is a guest crossing the river\'s territory',
          'The U1 subway line (running through the upper arch since 1902) asserts infrastructure governance over the entire span',
          'Kreuzberg and Friedrichshain each claim the bridge\'s midpoint — the exact territorial line is disputed by both districts',
          'The cormorants nesting under the arches hold an unregistered but continuous biological claim',
        ],
        de: [
          'Die Spree hält die primäre Navigationssouveränität — die Brücke ist ein Gast, der das Territorium des Flusses überquert',
          'Die U1-Linie (seit 1902 durch den Oberbogen fahrend) behauptet Infrastruktur-Governance über die gesamte Spannweite',
          'Kreuzberg und Friedrichshain beanspruchen jeweils den Mittelpunkt der Brücke — die genaue Territoriallinie ist von beiden Bezirken umstritten',
          'Die unter den Bögen nistenden Kormorane halten einen nicht registrierten, aber kontinuierlichen biologischen Anspruch',
        ],
        ru: [
          'Река Шпрее держит первичный навигационный суверенитет — мост является гостем, пересекающим территорию реки',
          'Линия U1 (проходящая через верхнюю арку с 1902 года) заявляет инфраструктурное управление над всем пролётом',
          'Кройцберг и Фридрихсхайн каждый претендует на середину моста — точная территориальная линия оспаривается обоими районами',
          'Бакланы, гнездящиеся под арками, держат незарегистрированную, но непрерывную биологическую претензию',
        ],
        ar: [
          'نهر شبري يحتفظ بالسيادة الملاحية الأساسية — الجسر ضيف يعبر أراضي النهر',
          'خط المترو U1 (يمر عبر القوس العلوي منذ 1902) يؤكد حوكمة البنية التحتية على كامل الامتداد',
          'كل من كرويتسبرغ وفريدريشسهاين يطالب بمنتصف الجسر — الخط الإقليمي الدقيق متنازع عليه من كلا الحيّين',
          'الكورمورانات التي تعشش تحت الأقواس تحتفظ بمطالبة بيولوجية غير مسجلة لكن مستمرة',
        ],
      },
      ghost: {
        en: [
          'The original wooden pile barrier (1686) — the "Oberbaum" — holds a residual toll-collection right on all river traffic',
          'The border crossing point (1961–1989) embedded in the eastern tower retains a checkpoint memory that still slows pedestrian movement',
        ],
        de: [
          'Die ursprüngliche Holzpfahlbarriere (1686) — der "Oberbaum" — hält ein verbleibendes Mauterhebungsrecht auf den gesamten Flussverkehr',
          'Der in den Ostturm eingebettete Grenzübergangspunkt (1961–1989) behält eine Checkpoint-Erinnerung, die noch immer die Fußgängerbewegung verlangsamt',
        ],
        ru: [
          'Оригинальный деревянный свайный барьер (1686) — «Обербаум» — держит остаточное право сбора пошлины на весь речной трафик',
          'Пограничный пропускной пункт (1961–1989), встроенный в восточную башню, сохраняет память контрольно-пропускного пункта, которая всё ещё замедляет движение пешеходов',
        ],
        ar: [
          'الحاجز الخشبي الوتدي الأصلي (1686) — "Oberbaum" — يحتفظ بحق جباية الرسوم المتبقي على جميع حركة الأنهار',
          'نقطة العبور الحدودية (1961–1989) المضمّنة في البرج الشرقي تحتفظ بذاكرة نقطة التفتيش التي لا تزال تبطئ حركة المشاة',
        ],
      },
      temporal: {
        en: [
          'Annual tomato battle (Christopher Street Day): the bridge becomes a temporary zone of collective, joyful territorial transgression',
          'Morning commute: the U1 overhead asserts mechanical governance — all human movement below synchronises to its timetable',
        ],
        de: [
          'Jährliche Tomatenschlacht (Christopher Street Day): Die Brücke wird zu einer temporären Zone kollektiver, freudiger territorialer Übertretung',
          'Morgenliche Pendlerzeit: Die U1 oben behauptet mechanische Governance — alle menschlichen Bewegungen darunter synchronisieren sich mit ihrem Fahrplan',
        ],
        ru: [
          'Ежегодная томатная битва (Christopher Street Day): мост становится временной зоной коллективного, радостного территориального нарушения',
          'Утренняя поездка: U1 сверху заявляет механическое управление — все движения людей внизу синхронизируются с его расписанием',
        ],
        ar: [
          'معركة الطماطم السنوية (يوم كريستوفر ستريت): يصبح الجسر منطقة مؤقتة من التعدي الإقليمي الجماعي المبهج',
          'التنقل الصباحي: U1 أعلاه يؤكد الحوكمة الميكانيكية — جميع الحركات البشرية أسفله تتزامن مع جدوله الزمني',
        ],
      },
    },

    {
      id: 'prenzlauer-berg', type: 'district', lat: 52.5390, lng: 13.4145,
      name: { en: 'Prenzlauer Berg', de: 'Prenzlauer Berg', ru: 'Пренцлауэр-Берг', ar: 'برنتسلاور بيرغ' },
      atmo: {
        en: 'The neighbourhood that bohemians made cheap, then expensive, then left. The Wasserturm still stands at the hill\'s crown. Below it: artisan coffee, prams, and the memory of something that cannot be priced.',
        de: 'Das Viertel, das Bohemiens billig machten, dann teuer, dann verließen. Der Wasserturm steht noch immer auf dem Hügelkamm. Darunter: handwerklicher Kaffee, Kinderwagen und die Erinnerung an etwas, das sich nicht bepreisen lässt.',
        ru: 'Район, который богема сделала дешёвым, потом дорогим, потом покинула. Водонапорная башня всё ещё стоит на вершине холма. Ниже: ремесленный кофе, коляски и память о чём-то, чему нельзя назначить цену.',
        ar: 'الحي الذي جعله البوهيميون رخيصاً، ثم غالياً، ثم غادروه. برج المياه لا يزال يقف على قمة التل. تحته: قهوة حرفية، عربات أطفال، وذاكرة شيء لا يمكن تسعيره.',
      },
      owners: {
        en: [
          'The Wasserturm (1877, decommissioned 1952) holds vertical territorial sovereignty — the highest point in the neighbourhood belongs to infrastructure memory',
          'A dense network of pre-war basement bunkers claims underground rights beneath every cobblestone street',
          'The gentrification algorithm has replaced 70% of pre-1990 residents — it holds a de facto cultural governance claim',
          'Linden trees planted along Kastanienallee in 1890 assert prior arboreal rights over all pavement usage',
        ],
        de: [
          'Der Wasserturm (1877, 1952 außer Betrieb) hält vertikale Territorialsouveränität — der höchste Punkt des Viertels gehört der Infrastrukturerinnerung',
          'Ein dichtes Netz von Vorkriegskellerbunkern beansprucht Untergrundrechte unter jeder Kopfsteinpflasterstraße',
          'Der Gentrifizierungsalgorithmus hat 70% der Vorwendebewohner ersetzt — er hält einen De-facto-Anspruch auf kulturelle Governance',
          'Lindenbäume, 1890 entlang der Kastanienallee gepflanzt, behaupten vorherige Baumrechte über alle Bürgersteignutzung',
        ],
        ru: [
          'Водонапорная башня (1877, выведена из эксплуатации в 1952 году) держит вертикальный территориальный суверенитет — наивысшая точка района принадлежит памяти инфраструктуры',
          'Плотная сеть довоенных подвальных бункеров претендует на подземные права под каждой булыжной улицей',
          'Алгоритм джентрификации заменил 70% жителей до 1990 года — он держит фактическую претензию на культурное управление',
          'Липы, посаженные вдоль Каштаненаллее в 1890 году, заявляют о предшествующих древесных правах на всё использование тротуаров',
        ],
        ar: [
          'برج المياه (1877، خُصّص 1952) يحتفظ بالسيادة الإقليمية العمودية — أعلى نقطة في الحي تنتمي لذاكرة البنية التحتية',
          'شبكة كثيفة من ملاجئ ما قبل الحرب في الطوابق السفلية تطالب بحقوق تحت الأرض تحت كل شارع مرصوف',
          'خوارزمية التحسين العمراني استبدلت 70% من سكان ما قبل 1990 — تحتفظ بمطالبة حوكمة ثقافية فعلية',
          'أشجار الزيزفون المزروعة على طول كاستانيناليه عام 1890 تؤكد الحقوق الشجرية السابقة على جميع استخدامات الأرصفة',
        ],
      },
      ghost: {
        en: [
          'The GDR-era residents (80,000 displaced since 1990) retain a collective residual tenancy claim over every gentrified apartment',
          'The Nazi-era prison in the Wasserturm basement holds a silent territorial claim that no café renovation can dissolve',
        ],
        de: [
          'Die DDR-Bewohner (80.000 seit 1990 vertriebene) behalten einen kollektiven verbleibenden Mietanspruch auf jede gentrifizierte Wohnung',
          'Das Nazizeitgefängnis im Wasserturmkeller hält einen stillen Territorialanspruch, den keine Café-Renovierung auflösen kann',
        ],
        ru: [
          'Жители эпохи ГДР (80 000 перемещённых с 1990 года) сохраняют коллективную остаточную претензию аренды на каждую облагороженную квартиру',
          'Нацистская тюрьма в подвале водонапорной башни держит тихую территориальную претензию, которую никакой ремонт кафе не может растворить',
        ],
        ar: [
          'سكان عهد جمهورية ألمانيا الديمقراطية (80,000 مُهجَّر منذ 1990) يحتفظون بمطالبة إيجارية جماعية متبقية على كل شقة مُحسَّنة',
          'السجن النازي في طابق برج المياه السفلي يحتفظ بمطالبة إقليمية صامتة لا يستطيع أي تجديد مقهى حلّها',
        ],
      },
      temporal: {
        en: [
          'Sunday Mauerpark flea market: the former death strip briefly becomes the most democratic trading floor in the city',
          'School pickup hour (3pm): prams achieve temporary collective governance of every pavement — all other uses suspended',
        ],
        de: [
          'Sonntäglicher Mauerpark-Flohmarkt: Der ehemalige Todesstreifen wird kurzzeitig zum demokratischsten Handelsplatz der Stadt',
          'Schulabholstunde (15 Uhr): Kinderwagen erlangen temporäre kollektive Governance jedes Bürgersteigs — alle anderen Nutzungen ausgesetzt',
        ],
        ru: [
          'Воскресный блошиный рынок на Мауэрпарке: бывшая полоса смерти ненадолго становится самой демократичной торговой площадкой города',
          'Час встречи после школы (15:00): коляски достигают временного коллективного управления каждым тротуаром — все остальные виды использования приостановлены',
        ],
        ar: [
          'سوق المقتنيات القديمة في ماورباركت يوم الأحد: يصبح شريط الموت السابق مؤقتاً أكثر أرضية تجارية ديمقراطية في المدينة',
          'ساعة استقبال المدرسة (3 م): تحقق عربات الأطفال الحوكمة الجماعية المؤقتة لكل رصيف — جميع الاستخدامات الأخرى معلّقة',
        ],
      },
    },

    {
      id: 'mauerpark', type: 'open', lat: 52.5415, lng: 13.4019,
      name: { en: 'Mauerpark', de: 'Mauerpark', ru: 'Мауэрпарк', ar: 'ماورباركت' },
      atmo: {
        en: 'A park on the strip where they shot people trying to leave. On Sundays it fills with karaoke, flea market traders, and amateur acrobats. The grass grows exactly where the death strip was. Happiness is the most radical thing you can do to a place.',
        de: 'Ein Park auf dem Streifen, auf dem sie Menschen erschossen, die versuchten wegzugehen. Sonntags füllt er sich mit Karaoke, Flohmarktverkäufern und Amateurakrobaten. Das Gras wächst genau dort, wo der Todesstreifen war. Glück ist das Radikalste, was man einem Ort antun kann.',
        ru: 'Парк на полосе, где расстреливали людей, пытавшихся уйти. По воскресеньям он заполняется караоке, торговцами блошиного рынка и акробатами-любителями. Трава растёт точно там, где был смертный коридор. Счастье — самое радикальное, что можно сделать с местом.',
        ar: 'حديقة على الشريط الذي أطلقوا فيه النار على الناس الذين يحاولون المغادرة. في أيام الأحد يمتلئ بالكاريوكي والباعة في سوق القطع القديمة والبهلوانيين الهواة. العشب ينمو بالضبط حيث كان شريط الموت. السعادة هي أكثر شيء جذري يمكنك فعله في مكان ما.',
      },
      owners: {
        en: [
          'The former death strip soil (treated with herbicide for 28 years to prevent concealment) holds a residual toxic territorial memory',
          'The Sunday karaoke amphitheatre has established a weekly community governance claim through continuous cultural use since 2004',
          'A ghost — the last person shot at this section of the Wall (1989) — retains a sovereign claim no park authority can dissolve',
          'The flea market sellers\' collective asserts informal commercial territorial rights over every square metre of grass on Sundays',
        ],
        de: [
          'Der ehemalige Todesstreifenboden (28 Jahre lang mit Herbizid behandelt, um Verstecke zu verhindern) hält eine verbleibende toxische territoriale Erinnerung',
          'Das sonntägliche Karaoke-Amphitheater hat durch kontinuierliche kulturelle Nutzung seit 2004 einen wöchentlichen Gemeinschafts-Governance-Anspruch etabliert',
          'Ein Geist — die letzte Person, die an diesem Mauerabschnitt erschossen wurde (1989) — behält einen souveränen Anspruch, den keine Parkverwaltung auflösen kann',
          'Das Kollektiv der Flohmarkthändler behauptet informelle kommerzielle Territorialrechte über jeden Quadratmeter Rasen sonntags',
        ],
        ru: [
          'Почва бывшего смертного коридора (обрабатывавшаяся гербицидом 28 лет для предотвращения укрытия) держит остаточную токсическую территориальную память',
          'Воскресный амфитеатр для караоке установил еженедельную претензию на общественное управление через непрерывное культурное использование с 2004 года',
          'Призрак — последний человек, застреленный у этого участка Стены (1989) — сохраняет суверенную претензию, которую никакая парковая администрация не может растворить',
          'Коллектив торговцев блошиного рынка заявляет о неформальных коммерческих территориальных правах на каждый квадратный метр газона по воскресеньям',
        ],
        ar: [
          'تربة شريط الموت السابق (عُولجت بمبيد أعشاب لمدة 28 عاماً لمنع الاختباء) تحتفظ بذاكرة إقليمية سامة متبقية',
          'مسرح الكاريوكي الأحدي أسّس مطالبة حوكمة مجتمعية أسبوعية من خلال الاستخدام الثقافي المستمر منذ 2004',
          'شبح — آخر شخص أُطلق عليه النار عند هذا القطاع من الجدار (1989) — يحتفظ بمطالبة ذات سيادة لا تستطيع أي سلطة حديقة حلّها',
          'مجموعة بائعي سوق البضائع القديمة تؤكد حقوقاً إقليمية تجارية غير رسمية على كل متر مربع من العشب أيام الأحد',
        ],
      },
      ghost: {
        en: [
          'The Wall\'s former path crosses the park diagonally — an invisible border still felt in how people unconsciously avoid certain lines of movement',
          'The 191 watchtowers that once surveilled this strip hold a residual panopticon claim over all open-air activity',
        ],
        de: [
          'Der ehemalige Mauerverlauf durchquert den Park diagonal — eine unsichtbare Grenze, die noch immer darin zu spüren ist, wie Menschen unbewusst bestimmte Bewegungslinien meiden',
          'Die 191 Wachtürme, die diesen Streifen einst überwachten, halten einen verbleibenden Panoptikum-Anspruch über alle Freiluftaktivitäten',
        ],
        ru: [
          'Бывший путь Стены пересекает парк по диагонали — невидимая граница, всё ещё ощущаемая в том, как люди бессознательно избегают определённых линий движения',
          '191 сторожевая башня, некогда наблюдавшая за этой полосой, держит остаточную паноптическую претензию на всю деятельность под открытым небом',
        ],
        ar: [
          'مسار الجدار السابق يعبر الحديقة قطرياً — حدود غير مرئية لا تزال تُشعر بها في كيفية تجنب الناس بشكل لا واعٍ لخطوط حركة معينة',
          'أبراج المراقبة الـ191 التي كانت تراقب هذا الشريط تحتفظ بمطالبة مراقبة شاملة متبقية على جميع الأنشطة في الهواء الطلق',
        ],
      },
      temporal: {
        en: [
          'Sunday afternoon (2pm–6pm): collective joy achieves temporary governance — the park briefly becomes ungovernable in the best sense',
          'Monday morning: the grass remembers the weight of 10,000 people and slowly reasserts its own quiet territorial claim',
        ],
        de: [
          'Sonntagnachmittag (14–18 Uhr): kollektive Freude erreicht temporäre Governance — der Park wird kurzzeitig im besten Sinne unregierbar',
          'Montagmorgen: Das Gras erinnert sich an das Gewicht von 10.000 Menschen und behauptet langsam seinen eigenen stillen Territorialanspruch wieder',
        ],
        ru: [
          'Воскресный день (14:00–18:00): коллективная радость достигает временного управления — парк ненадолго становится неуправляемым в лучшем смысле',
          'Понедельник утром: трава помнит вес 10 000 человек и медленно снова заявляет о своей тихой территориальной претензии',
        ],
        ar: [
          'بعد ظهر الأحد (2م–6م): يحقق الفرح الجماعي الحوكمة المؤقتة — تصبح الحديقة مؤقتاً غير قابلة للحكم بأفضل معنى',
          'صباح الاثنين: يتذكر العشب ثقل 10,000 شخص ويؤكد ببطء مطالبته الإقليمية الهادئة الخاصة مرة أخرى',
        ],
      },
    },

    {
      id: 'charlottenburg', type: 'cultural', lat: 52.5209, lng: 13.2957,
      name: { en: 'Charlottenburg Palace', de: 'Schloss Charlottenburg', ru: 'Дворец Шарлоттенбург', ar: 'قصر شارلوتنبورغ' },
      atmo: {
        en: 'Built for a queen who died before it was finished. Burned in the war. Rebuilt exactly as it was, which means this is a copy of a copy of grief. The gardens are impeccably symmetrical. Nature did not agree and keeps pushing through anyway.',
        de: 'Gebaut für eine Königin, die starb, bevor es fertig war. Im Krieg verbrannt. Genau so wieder aufgebaut, was bedeutet, dass dies eine Kopie einer Kopie von Trauer ist. Die Gärten sind tadellos symmetrisch. Die Natur war nicht einverstanden und drängt trotzdem immer weiter durch.',
        ru: 'Построен для королевы, умершей до его завершения. Сгорел во время войны. Отстроен точно таким же, что означает — это копия копии горя. Сады безупречно симметричны. Природа не согласилась и всё равно продолжает пробиваться.',
        ar: 'بُني لملكة ماتت قبل اكتماله. احترق في الحرب. أُعيد بناؤه بالضبط كما كان، مما يعني أن هذا نسخة من نسخة من الحزن. الحدائق متماثلة بشكل لا تشوبه شائبة. الطبيعة لم توافق وتستمر في الاندفاع عبرها على أي حال.',
      },
      owners: {
        en: [
          'Sophie Charlotte (d.1705), queen for whom the palace was built, retains a permanent posthumous ownership claim over the central tower',
          'The Prussian State foundations (dissolved 1947) hold an unresolved residual property claim over all 505 rooms',
          'The baroque garden\'s geometric axes claim optical governance — they force a specific line of sight on every visitor\'s body',
          'The orange trees in the Orangery (some specimens over 200 years old) assert the longest continuous biological presence on the grounds',
        ],
        de: [
          'Sophie Charlotte (gest. 1705), die Königin, für die das Schloss gebaut wurde, behält einen permanenten posthumen Eigentumsanspruch auf den Zentralturm',
          'Die preußischen Staatsstiftungen (aufgelöst 1947) halten einen ungelösten verbleibenden Eigentumsanspruch auf alle 505 Räume',
          'Die geometrischen Achsen des Barockgartens beanspruchen optische Governance — sie zwingen jeden Besucherkörper zu einer bestimmten Sichtlinie',
          'Die Orangenbäume in der Orangerie (einige Exemplare über 200 Jahre alt) behaupten die längste kontinuierliche biologische Präsenz auf dem Gelände',
        ],
        ru: [
          'София Шарлотта (ум. 1705), королева, для которой был построен дворец, сохраняет постоянную посмертную претензию на собственность центральной башни',
          'Прусские государственные фонды (распущены в 1947 году) держат неразрешённую остаточную претензию на собственность всех 505 комнат',
          'Геометрические оси барочного сада претендуют на оптическое управление — они принуждают тело каждого посетителя к определённой линии взгляда',
          'Апельсиновые деревья в Оранжерее (некоторые экземпляры старше 200 лет) заявляют о самом длительном непрерывном биологическом присутствии на территории',
        ],
        ar: [
          'صوفي شارلوت (توفيت 1705)، الملكة التي بُني القصر لأجلها، تحتفظ بمطالبة ملكية دائمة بعد وفاتها على البرج المركزي',
          'مؤسسات الدولة البروسية (حُلّت 1947) تحتفظ بمطالبة ملكية متبقية غير محسومة على جميع الغرف الـ505',
          'المحاور الهندسية لحديقة الباروك تطالب بالحوكمة البصرية — تُجبر كل جسد زائر على خط بصري محدد',
          'أشجار البرتقال في البيت الزجاجي (بعض العينات تزيد عن 200 عام) تؤكد أطول حضور بيولوجي مستمر في الأرض',
        ],
      },
      ghost: {
        en: [
          'The wartime bombing (1943) destroyed 90% of the original structure — the rebuilt palace holds a phantom claim to an authenticity it does not possess',
          'Friedrich I, King of Prussia, commissioned the palace\'s expansion — his patronage claim extends over all subsequent architectural decisions',
        ],
        de: [
          'Die Kriegsbombardierung (1943) zerstörte 90% der Originalstruktur — das wiederaufgebaute Schloss hält einen Phantomanspruch auf eine Authentizität, die es nicht besitzt',
          'Friedrich I., König von Preußen, beauftragte die Erweiterung des Schlosses — sein Schirmherrenschaftsanspruch erstreckt sich auf alle nachfolgenden architektonischen Entscheidungen',
        ],
        ru: [
          'Военная бомбардировка (1943) уничтожила 90% оригинальной конструкции — восстановленный дворец держит призрачную претензию на подлинность, которой он не обладает',
          'Фридрих I, король Пруссии, заказал расширение дворца — его патронаж распространяется на все последующие архитектурные решения',
        ],
        ar: [
          'القصف الحربي (1943) دمّر 90% من الهيكل الأصلي — القصر المُعاد بناؤه يحتفظ بمطالبة وهمية بأصالة لا يمتلكها',
          'فريدريش الأول، ملك بروسيا، طلب توسيع القصر — مطالبة رعايته تمتد على جميع القرارات المعمارية اللاحقة',
        ],
      },
      temporal: {
        en: [
          'Cherry blossom season (April): the Japanese garden corner briefly asserts an imported territorial claim that overrides the Baroque order',
          'Twilight: the golden equestrian statue of the Great Elector catches the last light and briefly holds absolute visual governance of the forecourt',
        ],
        de: [
          'Kirschblütenzeit (April): Die japanische Gartenecke behauptet kurzzeitig einen importierten Territorialanspruch, der die Barockordnung außer Kraft setzt',
          'Abenddämmerung: Die goldene Reiterstatue des Großen Kurfürsten fängt das letzte Licht und hält kurzzeitig absolute visuelle Governance des Vorhofs',
        ],
        ru: [
          'Сезон цветения сакуры (апрель): уголок японского сада ненадолго заявляет импортированную территориальную претензию, которая отменяет барочный порядок',
          'Сумерки: золотая конная статуя Великого курфюрста ловит последний свет и ненадолго держит абсолютное визуальное управление внутренним двором',
        ],
        ar: [
          'موسم ازهار الكرز (أبريل): ركن الحديقة اليابانية يؤكد مؤقتاً مطالبة إقليمية مستوردة تتجاوز النظام الباروكي',
          'الغسق: تمسك تمثال الفارس الذهبي للناخب الأعظم آخر ضوء وتحتفظ مؤقتاً بالحوكمة البصرية المطلقة للفناء الأمامي',
        ],
      },
    },

    {
      id: 'neukoelln', type: 'district', lat: 52.4819, lng: 13.4351,
      name: { en: 'Neukölln', de: 'Neukölln', ru: 'Нойкёльн', ar: 'نوكولن' },
      atmo: {
        en: 'The most Arabic street in Germany runs through this district. The laundromats are open at 3am. The air smells of shawarma and cigarettes and something that is not translated in any policy document.',
        de: 'Die arabischste Straße Deutschlands verläuft durch dieses Viertel. Die Waschsalons haben um 3 Uhr nachts geöffnet. Die Luft riecht nach Shawarma, Zigaretten und etwas, das in keinem Politikdokument übersetzt ist.',
        ru: 'Самая арабская улица Германии проходит через этот район. Прачечные работают в 3 часа ночи. Воздух пахнет шаурмой, сигаретами и чем-то, что не переведено ни в одном политическом документе.',
        ar: 'أكثر شارع عربي في ألمانيا يمر عبر هذا الحي. المغاسل مفتوحة الساعة 3 صباحاً. الهواء يفوح بالشاورما والسجائر وشيء لم يُترجم في أي وثيقة سياسية.',
      },
      owners: {
        en: [
          'Sonnenallee\'s Arab diaspora community has established continuous commercial and cultural territorial governance since the 1970s',
          'A vast informal economy operates a parallel governance structure — cash transactions, kinship networks, oral agreements',
          'The canal (Neuköllner Schiffahrtskanal) asserts navigational sovereignty over the southern boundary of the district',
          'The integration algorithm assigns this district its statistical identity — a governance claim that precedes and shapes all lived experience here',
        ],
        de: [
          'Die arabische Diasporagemeinschaft der Sonnenallee hat seit den 1970ern kontinuierliche kommerzielle und kulturelle territoriale Governance etabliert',
          'Eine umfangreiche informelle Wirtschaft betreibt eine parallele Governance-Struktur — Bargeldtransaktionen, Verwandtschaftsnetzwerke, mündliche Vereinbarungen',
          'Der Kanal (Neuköllner Schiffahrtskanal) behauptet Navigationssouveränität über die südliche Grenze des Bezirks',
          'Der Integrationsalgoritmus weist diesem Bezirk seine statistische Identität zu — ein Governance-Anspruch, der alle gelebten Erfahrungen hier vorwegnimmt und prägt',
        ],
        ru: [
          'Арабская диаспорная община Зонненаллее установила непрерывное коммерческое и культурное территориальное управление с 1970-х годов',
          'Обширная неформальная экономика работает по параллельной структуре управления — наличные транзакции, родственные сети, устные соглашения',
          'Канал (Neuköllner Schiffahrtskanal) заявляет о навигационном суверенитете над южной границей района',
          'Алгоритм интеграции присваивает этому району его статистическую идентичность — управленческую претензию, которая предшествует и формирует весь жизненный опыт здесь',
        ],
        ar: [
          'أسّس مجتمع الشتات العربي في سونيناليه حوكمة إقليمية تجارية وثقافية مستمرة منذ السبعينيات',
          'اقتصاد غير رسمي واسع يُشغّل هيكل حوكمة موازٍ — معاملات نقدية، شبكات قرابة، اتفاقيات شفهية',
          'القناة (Neuköllner Schiffahrtskanal) تؤكد السيادة الملاحية على الحدود الجنوبية للحي',
          'خوارزمية الاندماج تعيّن هوية الحي الإحصائية — مطالبة حوكمة تسبق وتشكّل كل تجربة معيشية هنا',
        ],
      },
      ghost: {
        en: [
          'The Rixdorf village (absorbed 1920) retains a residual community governance claim over the cobblestone village square that tourists rarely find',
          'Pre-war Jewish community businesses along Hermannstraße hold a silent commercial territorial memory beneath every current shopfront',
        ],
        de: [
          'Das Dorf Rixdorf (1920 eingemeindet) behält einen verbleibenden Gemeinschafts-Governance-Anspruch über den Kopfsteinpflaster-Dorfplatz, den Touristen selten finden',
          'Die jüdischen Gemeinschaftsgeschäfte der Vorkriegszeit entlang der Hermannstraße halten eine stille kommerzielle territoriale Erinnerung unter jedem aktuellen Ladenfront',
        ],
        ru: [
          'Деревня Риксдорф (поглощённая в 1920 году) сохраняет остаточную претензию общественного управления над булыжной деревенской площадью, которую туристы редко находят',
          'Довоенные еврейские общинные предприятия вдоль Херманнштрассе держат тихую коммерческую территориальную память под каждым современным фасадом магазина',
        ],
        ar: [
          'قرية ريكسدورف (ضُمّت 1920) تحتفظ بمطالبة حوكمة مجتمعية متبقية على ساحة القرية المرصوفة التي نادراً ما يجدها السياح',
          'أعمال المجتمع اليهودي ما قبل الحرب على طول هيرمانشتراسه تحتفظ بذاكرة إقليمية تجارية صامتة تحت كل واجهة متجر حالية',
        ],
      },
      temporal: {
        en: [
          'Ramadan nights: Sonnenallee flips to nocturnal governance — the street peaks at midnight, reversing all standard urban rhythms',
          'Gentrification wave (ongoing): each new café is a slow territorial claim that advances three metres per month',
        ],
        de: [
          'Ramadan-Nächte: Die Sonnenallee wechselt zur nächtlichen Governance — die Straße erreicht um Mitternacht ihren Höhepunkt und kehrt alle standardmäßigen urbanen Rhythmen um',
          'Gentrifizierungswelle (laufend): Jedes neue Café ist ein langsamer Territorialanspruch, der drei Meter pro Monat voranschreitet',
        ],
        ru: [
          'Ночи Рамадана: Зонненаллее переходит к ночному управлению — улица достигает пика в полночь, обращая все стандартные городские ритмы',
          'Волна джентрификации (продолжающаяся): каждое новое кафе является медленной территориальной претензией, продвигающейся на три метра в месяц',
        ],
        ar: [
          'ليالي رمضان: تنقلب سونيناليه إلى حوكمة ليلية — تبلغ الشارع ذروته في منتصف الليل، معكوسةً جميع إيقاعات المدينة القياسية',
          'موجة التحسين العمراني (جارية): كل مقهى جديد هو مطالبة إقليمية بطيئة تتقدم ثلاثة أمتار شهرياً',
        ],
      },
    },
    {
      id: 'reichstag', type: 'monument', lat: 52.5186, lng: 13.3762,
      name: { en: 'Reichstag', de: 'Reichstag', ru: 'Рейхстаг', ar: 'الرايخستاغ' },
      atmo: {
        en: 'The glass dome was designed so that citizens can look down on their representatives. The architects called it democracy made visible. Someone has to clean the glass.',
        de: 'Die Glaskuppel wurde so entworfen, dass die Bürger auf ihre Vertreter herabblicken können. Die Architekten nannten es die sichtbar gemachte Demokratie. Jemand muss das Glas putzen.',
        ru: 'Стеклянный купол был спроектирован так, чтобы граждане могли смотреть сверху вниз на своих представителей. Архитекторы называли это видимой демократией. Кто-то должен мыть стекло.',
        ar: 'صُمِّمت القبة الزجاجية لتمكين المواطنين من النظر إلى ممثليهم من الأعلى. أسمى المعماريون ذلك الديمقراطية المرئية. لا بد أن يقوم أحدهم بتنظيف الزجاج.',
      },
      owners: {
        en: [
          'The Federal Republic of Germany owns the structure but the Bundestag leases it — a split jurisdiction never formally tested',
          'The glass dome\'s mirrored cone reflects every visitor back at themselves — a recursive surveillance claim over all who enter',
          'Swifts nest beneath the dome rim each summer, asserting an unregistered territorial claim above all legislative proceedings',
          'The Reichstag fire ash particles (1933), absorbed into the stone, maintain a residual molecular claim older than the current state',
        ],
        de: [
          'Die Bundesrepublik Deutschland besitzt das Gebäude, aber der Bundestag pachtet es — eine geteilte Jurisdiktion, die nie formell erprobt wurde',
          'Der Spiegelkegel der Glaskuppel reflektiert jeden Besucher zurück auf sich selbst — ein rekursiver Überwachungsanspruch über alle Eintretenden',
          'Mauersegler nisten jeden Sommer unter dem Kuppelrand und erheben einen unregistrierten Territorialanspruch über alle Gesetzgebungsverfahren',
          'Die Aschepartikel des Reichstagsbrandes (1933), in den Stein absorbiert, behalten einen molekularen Restanspruch, der älter ist als der aktuelle Staat',
        ],
        ru: [
          'Федеративная Республика Германия владеет зданием, но Бундестаг арендует его — разделённая юрисдикция, никогда формально не проверявшаяся',
          'Зеркальный конус стеклянного купола отражает каждого посетителя обратно на него самого — рекурсивная претензия наблюдения над всеми входящими',
          'Стрижи гнездятся под краем купола каждое лето, заявляя незарегистрированную территориальную претензию над всеми законодательными заседаниями',
          'Частицы пепла пожара Рейхстага (1933), впитавшиеся в камень, сохраняют остаточную молекулярную претензию, более древнюю, чем нынешнее государство',
        ],
        ar: [
          'تمتلك جمهورية ألمانيا الاتحادية المبنى لكن البوندستاغ يستأجره — ولاية قضائية مشتركة لم تُختبر رسمياً قط',
          'المخروط المرآوي للقبة الزجاجية يعكس كل زائر على نفسه — مطالبة مراقبة تكرارية على كل من يدخل',
          'طيور السمام تعشش تحت حافة القبة كل صيف، مطالبةً بحق إقليمي غير مسجل فوق جميع الإجراءات التشريعية',
          'جزيئات رماد حريق الرايخستاغ (1933)، المتشربة في الحجر، تحتفظ بمطالبة جزيئية متبقية أقدم من الدولة الحالية',
        ],
      },
      ghost: {
        en: [
          'The Wrapped Reichstag installation (Christo, 1995) — two weeks of silver fabric — maintains a residual aesthetic claim over the building\'s outer surface',
          'The original 1894 inscription "Dem Deutschen Volke" was secretly added in 1916 against Kaiser Wilhelm II\'s wishes — an act of authorial insubordination still embedded in the stone',
        ],
        de: [
          'Die Installation "Verhüllter Reichstag" (Christo, 1995) — zwei Wochen Silberstoff — behält einen verbleibenden ästhetischen Anspruch auf die äußere Oberfläche des Gebäudes',
          'Die ursprüngliche Inschrift "Dem Deutschen Volke" von 1894 wurde 1916 heimlich gegen den Willen Kaiser Wilhelms II. angebracht — ein Akt künstlerischen Ungehorsams, der noch im Stein eingebettet ist',
        ],
        ru: [
          'Инсталляция «Обёрнутый Рейхстаг» (Христо, 1995) — две недели серебряной ткани — сохраняет остаточную эстетическую претензию на внешнюю поверхность здания',
          'Оригинальная надпись 1894 года «Dem Deutschen Volke» была тайно добавлена в 1916 году вопреки воле кайзера Вильгельма II — акт авторского неповиновения, до сих пор вписанный в камень',
        ],
        ar: [
          'تنصيب "الرايخستاغ الملفوف" (كريستو، 1995) — أسبوعان من القماش الفضي — يحتفظ بمطالبة جمالية متبقية على السطح الخارجي للمبنى',
          'النقش الأصلي "Dem Deutschen Volke" من عام 1894 أُضيف سراً عام 1916 رغماً عن إرادة القيصر فيلهلم الثاني — فعل عصيان تأليفي لا يزال منقوشاً في الحجر',
        ],
      },
      temporal: {
        en: [
          'Parliamentary session days: the dome fills with guided tour groups ascending and descending the twin spirals simultaneously — two opposing human flows govern the space',
          'Sunset: the glass dome turns gold and every person inside casts a double shadow — the sun\'s governance briefly overrides all legislative authority',
        ],
        de: [
          'Parlamentssitzungstage: Die Kuppel füllt sich mit Führungsgruppen, die gleichzeitig die zwei Spiralen auf- und absteigen — zwei entgegengesetzte menschliche Ströme regieren den Raum',
          'Sonnenuntergang: Die Glaskuppel wird golden und jeder Mensch darin wirft einen Doppelschatten — die Governance der Sonne überschreibt kurz alle legislative Autorität',
        ],
        ru: [
          'Дни парламентских заседаний: купол заполняется экскурсионными группами, одновременно поднимающимися и спускающимися по двум спиралям — два противоположных человеческих потока управляют пространством',
          'Закат: стеклянный купол становится золотым, и каждый человек внутри отбрасывает двойную тень — управление солнцем ненадолго превосходит все законодательные полномочия',
        ],
        ar: [
          'أيام جلسات البرلمان: تمتلئ القبة بمجموعات الجولات السياحية الصاعدة والهابطة على اللولبين في آنٍ واحد — تيارَان بشريان متعاكسان يحكمان الفضاء',
          'غروب الشمس: تتحول القبة الزجاجية إلى ذهبية ويلقي كل شخص بداخلها ظلاً مزدوجاً — تهيمن حوكمة الشمس مؤقتاً على كل السلطة التشريعية',
        ],
      },
    },

    {
      id: 'teufelsberg', type: 'monument', lat: 52.4973, lng: 13.2395,
      name: { en: 'Teufelsberg', de: 'Teufelsberg', ru: 'Тойфельсберг', ar: 'تويفلسبرغ' },
      atmo: {
        en: 'The hill is built from six million cubic metres of wartime rubble — the compressed remains of 400,000 destroyed buildings. The NSA listened from the top for three decades. The equipment is gone. The hill does not remember which direction to face.',
        de: 'Der Hügel besteht aus sechs Millionen Kubikmetern Kriegsschutt — den komprimierten Überresten von 400.000 zerstörten Gebäuden. Die NSA lauschte drei Jahrzehnte lang von der Spitze. Das Equipment ist weg. Der Hügel erinnert sich nicht, in welche Richtung er blicken soll.',
        ru: 'Холм построен из шести миллионов кубических метров военных обломков — спрессованных останков 400 000 разрушенных зданий. АНБ прослушивало отсюда три десятилетия. Оборудование ушло. Холм не помнит, в какую сторону смотреть.',
        ar: 'التل مبنيٌّ من ستة ملايين متر مكعب من حطام الحرب — بقايا 400,000 مبنى مدمر مضغوط. استمعت وكالة الأمن القومي من القمة لثلاثة عقود. الأجهزة ذهبت. التل لا يتذكر في أي اتجاه يتطلع.',
      },
      owners: {
        en: [
          'The compacted rubble of 400,000 destroyed Berlin buildings asserts geological authorship over the entire mound — the city rebuilt as a hill',
          'The NSA\'s Cold War listening station (declassified 2013) retains a residual data sovereignty claim over all conversations within reception range',
          'Foxes have colonised the lower slopes — an active territorial claim that preempts every redevelopment proposal',
          'Graffiti artists have repainted the interior walls of the listening domes every season since 1990 — a rotating aesthetic jurisdiction with no fixed author',
        ],
        de: [
          'Das verdichtete Trümmerwerk von 400.000 zerstörten Berliner Gebäuden behauptet geologische Urheberschaft über den gesamten Hügel — die Stadt wiederaufgebaut als Hügel',
          'Die Kalter-Krieg-Abhörstation der NSA (2013 freigegeben) behält einen verbleibenden Datensouveränitätsanspruch über alle Gespräche im Empfangsbereich',
          'Füchse haben die Unterhänge besiedelt — ein aktiver Territorialanspruch, der jeden Bebauungsplan überholt',
          'Graffiti-Künstler haben die Innenwände der Abhörkuppeln seit 1990 jede Saison neu bemalt — eine rotierende ästhetische Jurisdiktion ohne festen Autor',
        ],
        ru: [
          'Уплотнённый мусор 400 000 разрушенных берлинских зданий утверждает геологическое авторство над всем холмом — город, перестроенный в холм',
          'Станция прослушивания АНБ эпохи холодной войны (рассекречена в 2013 году) сохраняет остаточную претензию на суверенитет данных над всеми разговорами в зоне приёма',
          'Лисы заняли нижние склоны — активная территориальная претензия, опережающая каждое предложение о застройке',
          'Художники граффити перекрашивали внутренние стены прослушивающих куполов каждый сезон с 1990 года — ротационная эстетическая юрисдикция без постоянного автора',
        ],
        ar: [
          'حطام 400,000 مبنى برليني مدمر المضغوط يطالب بحق التأليف الجيولوجي على التل بأكمله — المدينة أُعيد بناؤها كتل',
          'محطة التنصت التابعة لوكالة الأمن القومي من حقبة الحرب الباردة (رُفعت السرية عنها 2013) تحتفظ بمطالبة سيادة بيانات متبقية على جميع المحادثات ضمن نطاق الاستقبال',
          'استوطنت الثعالب المنحدرات السفلية — مطالبة إقليمية نشطة تسبق كل مقترحات إعادة التطوير',
          'أعاد فنانو الغرافيتي طلاء الجدران الداخلية لقباب التنصت كل موسم منذ 1990 — ولاية قضائية جمالية دوارة بلا مؤلف ثابت',
        ],
      },
      ghost: {
        en: [
          'A never-completed Nazi military college buried at the hill\'s core asserts a structural veto over any new building on the site',
          'The millions of intercepted Cold War conversations — stored on tape reels removed in 1990 — maintain an informational ghost claim over the city below',
        ],
        de: [
          'Eine nie fertiggestellte Nazi-Militärakademie, die im Kern des Hügels begraben ist, behauptet ein strukturelles Vetorecht über jedes neue Gebäude auf dem Gelände',
          'Die Millionen abgehörter Kalter-Krieg-Gespräche — auf 1990 abgezogenen Bandspulen gespeichert — behalten einen informativen Geistanspruch über die Stadt darunter',
        ],
        ru: [
          'Незавершённый нацистский военный колледж, погребённый в ядре холма, заявляет структурное право вето против любого нового строительства на этом участке',
          'Миллионы перехваченных разговоров холодной войны — хранящиеся на катушках с лентой, вывезенных в 1990 году — сохраняют информационную призрачную претензию над городом внизу',
        ],
        ar: [
          'كلية عسكرية نازية لم تكتمل مدفونة في قلب التل تطالب بحق نقض هيكلي ضد أي مبنى جديد على الموقع',
          'ملايين المحادثات المعترضة من حقبة الحرب الباردة — المخزنة على بكرات شريط أُخرجت عام 1990 — تحتفظ بمطالبة معلوماتية شبحية على المدينة تحتها',
        ],
      },
      temporal: {
        en: [
          'Wind events: the hilltop is the highest point in Berlin — wind governance is absolute and unchallenged, bending all antenna frames in a single direction',
          'Summer weekends: urban hikers and paragliders assert competing airspace claims that conflict directly with the NSA\'s historical aerial surveillance jurisdiction',
        ],
        de: [
          'Windereignisse: Der Gipfel ist der höchste Punkt Berlins — die Windherrschaft ist absolut und unbestritten und biegt alle Antennenrahmen in eine Richtung',
          'Sommerwochenenden: Stadtwanderer und Paraglider behaupten konkurrierende Luftraumansprüche, die direkt mit der historischen Luftüberwachungsjurisdiktion der NSA in Konflikt stehen',
        ],
        ru: [
          'Ветровые явления: вершина холма — самая высокая точка Берлина — ветровое управление абсолютно и неоспоримо, сгибая все рамы антенн в одном направлении',
          'Летние выходные: городские туристы и парапланеристы заявляют конкурирующие претензии на воздушное пространство, напрямую конфликтующие с исторической юрисдикцией воздушного наблюдения АНБ',
        ],
        ar: [
          'أحداث الرياح: قمة التل هي أعلى نقطة في برلين — حوكمة الرياح مطلقة وغير مطعون فيها، تثني جميع إطارات الهوائيات في اتجاه واحد',
          'عطل نهاية الأسبوع الصيفية: يطالب المتنزهون الحضريون ورياضيو الباراغلايدر بحقوق متنافسة في المجال الجوي تتعارض مباشرة مع الولاية القضائية التاريخية لمراقبة الجو من قبل وكالة الأمن القومي',
        ],
      },
    },

    {
      id: 'treptower', type: 'monument', lat: 52.4795, lng: 13.4683,
      name: { en: 'Soviet War Memorial', de: 'Sowjetisches Ehrenmal', ru: 'Советский военный мемориал', ar: 'النصب التذكاري للحرب السوفيتية' },
      atmo: {
        en: 'The soldier stands twelve metres tall on a crushed swastika, holding a child, sword lowered. Beneath the ground you walk on, seven thousand Soviet soldiers are buried. The scale was not chosen by accident.',
        de: 'Der Soldat steht zwölf Meter hoch auf einem zertrümmerten Hakenkreuz, hält ein Kind, Schwert gesenkt. Unter dem Boden, auf dem Sie gehen, sind siebentausend sowjetische Soldaten begraben. Der Maßstab wurde nicht zufällig gewählt.',
        ru: 'Солдат стоит двенадцать метров в высоту на раздавленной свастике, держа ребёнка, меч опущен. Под землёй, по которой вы идёте, похоронены семь тысяч советских солдат. Масштаб выбран не случайно.',
        ar: 'يقف الجندي بارتفاع اثني عشر متراً على صليب معقوف محطوم، يحمل طفلاً وسيفه منكوس. تحت الأرض التي تمشي عليها، سبعة آلاف جندي سوفيتي مدفون. لم يُختَر هذا الحجم صدفة.',
      },
      owners: {
        en: [
          'The Russian Federation holds diplomatic ownership under the 1990 Two Plus Four Treaty — a foreign sovereign territory embedded within Berlin',
          'The 7,000 Soviet soldiers interred beneath the memorial assert a permanent subterranean territorial claim that cannot be revoked',
          'The twelve-metre bronze soldier on the central plinth claims visual sovereignty over every sightline within 500 metres',
          'Crows have nested continuously in the stone pylon ledges since before German reunification — an unbroken biological territorial claim',
        ],
        de: [
          'Die Russische Föderation hält diplomatisches Eigentum gemäß dem Zwei-plus-Vier-Vertrag von 1990 — ein ausländisches souveränes Territorium eingebettet in Berlin',
          'Die 7.000 unter dem Denkmal bestatteten sowjetischen Soldaten behaupten einen permanenten unterirdischen Territorialanspruch, der nicht widerrufen werden kann',
          'Der zwölf Meter hohe Bronzesoldat auf dem zentralen Sockel beansprucht visuelle Souveränität über jede Sichtlinie innerhalb von 500 Metern',
          'Krähen haben seit vor der deutschen Wiedervereinigung ununterbrochen in den Steinpylonvorsprüngen gebrütet — ein ununterbrochener biologischer Territorialanspruch',
        ],
        ru: [
          'Российская Федерация сохраняет дипломатическую собственность согласно договору «Два плюс четыре» 1990 года — иностранная суверенная территория, вписанная в Берлин',
          'Семь тысяч советских солдат, захороненных под мемориалом, заявляют постоянную подземную территориальную претензию, которую нельзя отозвать',
          'Двенадцатиметровый бронзовый солдат на центральном постаменте претендует на визуальный суверенитет над каждой линией обзора в радиусе 500 метров',
          'Вороны непрерывно гнездятся на каменных пилонах с момента до воссоединения Германии — непрерывная биологическая территориальная претензия',
        ],
        ar: [
          'تحتفظ الاتحاد الروسي بالملكية الدبلوماسية بموجب معاهدة الاثنين زائد الأربعة عام 1990 — إقليم ذو سيادة أجنبية مندمج في برلين',
          'السبعة آلاف جندي سوفيتي المدفونون تحت النصب التذكاري يطالبون بحق إقليمي باطني دائم لا يمكن إلغاؤه',
          'يطالب الجندي البرونزي البالغ اثني عشر متراً على القاعدة المركزية بالسيادة البصرية على كل خط رؤية ضمن 500 متر',
          'تعشش الغربان بلا انقطاع في حواف الصروح الحجرية منذ ما قبل توحيد ألمانيا — مطالبة إقليمية بيولوجية متواصلة',
        ],
      },
      ghost: {
        en: [
          'The Battle of Berlin (April–May 1945) claims residual governance over the soil composition — unexploded ordnance still detected annually beneath the park',
          'The Soviet Union (dissolved 1991) retains legal authorship of the monument despite no longer existing as a state — a governance claim without a governor',
        ],
        de: [
          'Die Schlacht um Berlin (April–Mai 1945) beansprucht verbleibende Governance über die Bodenzusammensetzung — unter dem Park werden jährlich noch Blindgänger entdeckt',
          'Die Sowjetunion (aufgelöst 1991) behält die rechtliche Urheberschaft des Denkmals, obwohl sie nicht mehr als Staat existiert — ein Governance-Anspruch ohne Gouverneur',
        ],
        ru: [
          'Битва за Берлин (апрель–май 1945 года) заявляет остаточное управление над составом почвы — под парком ежегодно обнаруживаются невзорвавшиеся боеприпасы',
          'Советский Союз (распущен в 1991 году) сохраняет юридическое авторство памятника, несмотря на то что больше не существует как государство — управленческая претензия без управляющего',
        ],
        ar: [
          'معركة برلين (أبريل–مايو 1945) تطالب بحوكمة متبقية على تركيبة التربة — لا تزال قنابل غير منفجرة تُكتشف سنوياً تحت الحديقة',
          'الاتحاد السوفيتي (المنحل 1991) يحتفظ بحق التأليف القانوني للنصب رغم عدم وجوده كدولة — مطالبة حوكمة بلا حاكم',
        ],
      },
      temporal: {
        en: [
          'May 9th (Russian Victory Day): the Russian community gathers and briefly reinstates full Soviet territorial protocol — the most complete annual reclamation of a foreign governance layer in Berlin',
          'Winter snowfall: inscription tablets are covered, the text recedes — governance by erasure, the twelve-metre soldier remains the only legible authority',
        ],
        de: [
          '9. Mai (Russischer Siegestag): Die russische Gemeinschaft versammelt sich und stellt kurz das vollständige sowjetische Territorialprotokoll wieder her — die vollständigste jährliche Rückforderung einer ausländischen Governance-Schicht in Berlin',
          'Winterschneefall: Inschrifttafeln sind bedeckt, der Text tritt zurück — Governance durch Auslöschung, der zwölf Meter hohe Soldat bleibt die einzig lesbare Autorität',
        ],
        ru: [
          '9 мая (День Победы): российское сообщество собирается и ненадолго восстанавливает полный советский территориальный протокол — наиболее полное ежегодное возвращение иностранного управленческого слоя в Берлине',
          'Зимний снегопад: таблички с надписями покрыты, текст отступает — управление через стирание, двенадцатиметровый солдат остаётся единственной читаемой властью',
        ],
        ar: [
          '9 مايو (يوم النصر الروسي): يتجمع المجتمع الروسي ويستعيد مؤقتاً البروتوكول الإقليمي السوفيتي الكامل — أكثر استرداد سنوي اكتمالاً لطبقة حوكمة أجنبية في برلين',
          'تساقط الثلوج الشتوي: تُغطى لوحات النقوش ويتراجع النص — حوكمة عبر المحو، يبقى الجندي البالغ اثني عشر متراً السلطة الوحيدة المقروءة',
        ],
      },
    },

    {
      id: 'gorlitzer', type: 'park', lat: 52.4967, lng: 13.4356,
      name: { en: 'Görlitzer Park', de: 'Görlitzer Park', ru: 'Гёрлицер-парк', ar: 'حديقة غورليتسر' },
      atmo: {
        en: 'The park was built on a demolished railway station in 1994. Since then it has been contested by the city, the police, dealers, resident families, refugees, children, and dogs. Everyone uses it. Nobody agrees on what it is for.',
        de: 'Der Park wurde 1994 auf einem abgerissenen Bahnhof errichtet. Seitdem wird er von der Stadt, der Polizei, Dealern, Bewohnerfamilien, Flüchtlingen, Kindern und Hunden umkämpft. Alle nutzen ihn. Niemand ist sich einig, wofür er ist.',
        ru: 'Парк был построен на месте снесённого железнодорожного вокзала в 1994 году. С тех пор за него борются город, полиция, дилеры, семьи жителей, беженцы, дети и собаки. Все им пользуются. Никто не согласен с тем, для чего он предназначен.',
        ar: 'بُنيت الحديقة على أنقاض محطة قطار مهدومة عام 1994. منذ ذلك الحين، تتنافس عليها المدينة والشرطة والتجار وعائلات السكان واللاجئون والأطفال والكلاب. الجميع يستخدمها. لا أحد يتفق على ما هي مخصصة له.',
      },
      owners: {
        en: [
          'A persistent informal market has claimed commercial territorial rights over the southwest corner continuously since 1994 — pre-dating all official park governance structures',
          'Refugee and migrant families from multiple continents have established semi-permanent picnic territories — a parallel governance layer unrecognised by the city',
          'Dogs outnumber joggers before 9am — a pre-linguistic territorial claim enforced through scent marking on every tree, bench, and fence post',
          'The park surveillance algorithm (CCTV coverage: 34%) monitors the lit zones but cannot govern the unlit northeastern quadrant — a permanent blind-spot sovereignty',
        ],
        de: [
          'Ein anhaltender informeller Markt hat seit 1994 kontinuierlich kommerzielle Territorialrechte über die Südwestecke beansprucht — älter als alle offiziellen Parkgovernance-Strukturen',
          'Flüchtlings- und Migrantenfamilien aus mehreren Kontinenten haben halbpermanente Picknickreiche etabliert — eine parallele Governance-Schicht, die von der Stadt nicht anerkannt wird',
          'Hunde überwiegen Jogger vor 9 Uhr — ein prälinguistischer Territorialanspruch, der durch Duftmarkierung an jedem Baum, jeder Bank und jedem Zaunpfahl durchgesetzt wird',
          'Der Parküberwachungsalgorithmus (CCTV-Abdeckung: 34%) überwacht die beleuchteten Zonen, kann aber den unbeleuchteten Nordostquadranten nicht regieren — eine permanente Blindfleck-Souveränität',
        ],
        ru: [
          'Устойчивый неформальный рынок непрерывно заявляет коммерческие территориальные права на юго-западный угол с 1994 года — ранее всех официальных структур управления парком',
          'Семьи беженцев и мигрантов с нескольких континентов установили полупостоянные пикниковые территории — параллельный управленческий слой, не признанный городом',
          'Собаки превосходят по численности бегунов до 9 утра — доязыковая территориальная претензия, применяемая через маркировку запахом каждого дерева, скамейки и столба забора',
          'Алгоритм наблюдения за парком (покрытие видеонаблюдением: 34%) контролирует освещённые зоны, но не может управлять тёмным северо-восточным квадрантом — постоянный суверенитет слепого пятна',
        ],
        ar: [
          'سوق غير رسمي مستمر يطالب بحقوق إقليمية تجارية في الزاوية الجنوبية الغربية منذ 1994 — أسبق من جميع هياكل حوكمة الحديقة الرسمية',
          'أسرت لاجئة ومهاجرة من قارات متعددة أرست مناطق نزهة شبه دائمة — طبقة حوكمة موازية غير معترف بها من قبل المدينة',
          'الكلاب تفوق عدد الركضين قبل الساعة التاسعة صباحاً — مطالبة إقليمية ما قبل لغوية تُفرض عبر التمييز الشمي على كل شجرة ومقعد وعمود سياج',
          'خوارزمية مراقبة الحديقة (تغطية كاميرات المراقبة: 34%) تراقب المناطق المضاءة لكن لا تستطيع حكم الربع الشمالي الشرقي غير المضاء — سيادة النقطة العمياء الدائمة',
        ],
      },
      ghost: {
        en: [
          'Görlitzer Bahnhof (demolished 1990) asserts a structural memory claim — the original platform lines are still visible as raised ridges beneath the grass',
          'The squatter community evicted from the park pavilion in 2002 maintains a residual territorial claim — their informal rules of use persist in collective memory',
        ],
        de: [
          'Der Görlitzer Bahnhof (abgerissen 1990) behauptet einen strukturellen Gedächtnisanspruch — die ursprünglichen Bahnsteiglinien sind noch als erhöhte Rücken unter dem Gras sichtbar',
          'Die 2002 aus dem Parkpavillon vertriebene Squattergemeinschaft behält einen verbleibenden Territorialanspruch — ihre informellen Nutzungsregeln bleiben im kollektiven Gedächtnis erhalten',
        ],
        ru: [
          'Гёрлицер Банхоф (снесён в 1990 году) заявляет претензию на структурную память — оригинальные линии платформ всё ещё видны как приподнятые гребни под травой',
          'Сообщество сквоттеров, выселенное из парковильона в 2002 году, сохраняет остаточную территориальную претензию — их неформальные правила пользования сохраняются в коллективной памяти',
        ],
        ar: [
          'محطة غورليتسر (المهدومة 1990) تطالب بمطالبة ذاكرة هيكلية — خطوط الرصيف الأصلية لا تزال مرئية كنتوءات مرتفعة تحت العشب',
          'مجتمع السكن غير القانوني المُخلى من جناح الحديقة عام 2002 يحتفظ بمطالبة إقليمية متبقية — تستمر قواعد استخدامهم غير الرسمية في الذاكرة الجماعية',
        ],
      },
      temporal: {
        en: [
          'Summer nights: sound systems claim acoustic sovereignty over all other governance — a temporary sonic authority that overwhelms police, algorithm, and park management simultaneously',
          'Police patrol hours (22:00–02:00): formal authority briefly reasserts itself — all informal territorial claims suspend, then resume the moment the patrol passes',
        ],
        de: [
          'Sommernächte: Soundsysteme beanspruchen akustische Souveränität über alle anderen Governance — eine vorübergehende klangliche Autorität, die Polizei, Algorithmus und Parkverwaltung gleichzeitig überfordert',
          'Polizeipatrouillenzeiten (22:00–02:00): Die formelle Autorität bekräftigt sich kurz — alle informellen Territorialansprüche pausieren und werden in dem Moment wieder aufgenommen, in dem die Patrouille vorbeigeht',
        ],
        ru: [
          'Летние ночи: звуковые системы заявляют акустический суверенитет над всем другим управлением — временная звуковая власть, которая одновременно подавляет полицию, алгоритм и управление парком',
          'Часы полицейских патрулей (22:00–02:00): официальная власть ненадолго восстанавливается — все неформальные территориальные претензии приостанавливаются, затем возобновляются в момент прохождения патруля',
        ],
        ar: [
          'ليالي الصيف: تطالب أنظمة الصوت بالسيادة الصوتية على جميع حوكمات أخرى — سلطة صوتية مؤقتة تغلب الشرطة والخوارزمية وإدارة الحديقة في آنٍ واحد',
          'ساعات دوريات الشرطة (22:00–02:00): تؤكد السلطة الرسمية نفسها مؤقتاً — تتوقف جميع المطالبات الإقليمية غير الرسمية ثم تستأنف في اللحظة التي يمر فيها الدورية',
        ],
      },
    },

    {
      id: 'karl-marx-allee', type: 'monument', lat: 52.5157, lng: 13.4411,
      name: { en: 'Karl-Marx-Allee', de: 'Karl-Marx-Allee', ru: 'Карл-Маркс-Аллее', ar: 'كارل ماركس أليه' },
      atmo: {
        en: 'Built as Stalin-Allee — a showpiece of socialist modernity, ninety metres wide, two kilometres long. The porcelain-tiled apartment blocks were the finest housing in East Germany. They were renamed when Stalin died. The tiles remain.',
        de: 'Als Stalin-Allee gebaut — ein Vorzeigeobjekt sozialistischer Moderne, neunzig Meter breit, zwei Kilometer lang. Die kachelbekleideten Wohnblocks waren die besten Wohnungen in Ostdeutschland. Sie wurden umbenannt, als Stalin starb. Die Kacheln bleiben.',
        ru: 'Построен как Сталин-Аллее — показательный пример социалистической современности, девяносто метров в ширину, два километра в длину. Облицованные керамикой жилые дома были лучшим жильём в Восточной Германии. Их переименовали, когда умер Сталин. Плитка осталась.',
        ar: 'بُنيت بوصفها شارع ستالين — نموذج لريادة الحداثة الاشتراكية، عرضه تسعون متراً وطوله كيلومتران. كانت مبانيها السكنية المكسوة بالخزف أفضل مساكن ألمانيا الشرقية. أُعيدت تسميتها حين مات ستالين. البلاط لا يزال هناك.',
      },
      owners: {
        en: [
          'The Meissen porcelain tile cladding (applied 1952–1960) asserts a material sovereignty that has outlasted the state that commissioned it',
          'The Soviet urban planning doctrine embedded in the proportions — 90-metre width, strict bilateral symmetry — governs all renovations by legal preservation order',
          'A colony of house martins has nested in the entablature cornices every spring since the building\'s completion — an unbroken biological claim above all ground-level governance',
          'The GDR Workers\' Uprising of June 17, 1953 — which began on this street — asserts a historical governance claim over the entire ground surface',
        ],
        de: [
          'Die Meissener Porzellanverkleidung (1952–1960 angebracht) behauptet eine materielle Souveränität, die den Staat, der sie in Auftrag gegeben hat, überdauert hat',
          'Die in den Proportionen eingebettete sowjetische Stadtplanungsdoktrin — 90-Meter-Breite, strenge bilaterale Symmetrie — regiert alle Renovierungen per Rechtsdenkmalschutzordnung',
          'Eine Kolonie Mehlschwalben hat seit der Fertigstellung des Gebäudes jeden Frühling in den Gebälkkornichen gebrütet — ein ununterbrochener biologischer Anspruch über alle bodennahe Governance',
          'Der DDR-Arbeiteraufstand vom 17. Juni 1953 — der auf dieser Straße begann — behauptet einen historischen Governance-Anspruch über die gesamte Bodenfläche',
        ],
        ru: [
          'Майсенская фарфоровая облицовка (нанесена в 1952–1960 годах) заявляет материальный суверенитет, переживший государство, которое её заказало',
          'Советская доктрина городского планирования, заложенная в пропорциях — ширина 90 метров, строгая двусторонняя симметрия — управляет всеми реновациями по правовому охранному предписанию',
          'Колония воронков гнездится в карнизах антаблемента каждую весну с момента завершения строительства — непрерывная биологическая претензия над всем управлением на уровне земли',
          'Восстание рабочих ГДР 17 июня 1953 года — начавшееся на этой улице — заявляет историческую управленческую претензию на всю поверхность земли',
        ],
        ar: [
          'كساء بلاط ميسن الخزفي (المطبق 1952–1960) يطالب بسيادة مادية تجاوزت الدولة التي طلبته',
          'عقيدة التخطيط العمراني السوفيتي المضمنة في النسب — عرض 90 متر، تناسق ثنائي صارم — تحكم جميع عمليات التجديد بموجب أمر الحفاظ القانوني',
          'مستعمرة طيور السنونو المنزلية تعشش في كرانيش الإفريز كل ربيع منذ اكتمال المبنى — مطالبة بيولوجية متواصلة فوق جميع الحوكمة على مستوى الأرض',
          'انتفاضة عمال جمهورية ألمانيا الديمقراطية في 17 يونيو 1953 — التي بدأت في هذا الشارع — تطالب بحق حوكمة تاريخي على كامل سطح الأرض',
        ],
      },
      ghost: {
        en: [
          'Stalin-Allee (the street\'s name 1949–1961) maintains a residual topographic identity claim — all maps printed before 1961 use the original name and are still in circulation',
          'The demolished Café Moskauerstraße (1952–1968) asserts a hospitality territorial claim over its replacement building — the memory of where people met persists in the pavement',
        ],
        de: [
          'Stalin-Allee (der Straßenname 1949–1961) behält einen verbleibenden topografischen Identitätsanspruch — alle vor 1961 gedruckten Karten verwenden den ursprünglichen Namen und sind noch im Umlauf',
          'Das abgerissene Café Moskauerstraße (1952–1968) behauptet einen gastgewerblichen Territorialanspruch gegenüber seinem Ersatzgebäude — die Erinnerung, wo Menschen sich trafen, besteht im Bürgersteig fort',
        ],
        ru: [
          'Сталин-Аллее (название улицы 1949–1961 годов) сохраняет остаточную топографическую претензию на идентичность — все карты, напечатанные до 1961 года, используют оригинальное название и всё ещё находятся в обращении',
          'Снесённое кафе Москаuerstraße (1952–1968) заявляет гостиничную территориальную претензию на своё здание-замену — память о том, где люди встречались, сохраняется в мостовой',
        ],
        ar: [
          'شارع ستالين (اسم الشارع 1949–1961) يحتفظ بمطالبة هوية طبوغرافية متبقية — جميع الخرائط المطبوعة قبل 1961 تستخدم الاسم الأصلي ولا تزال متداولة',
          'مقهى موسكاوراشترسه المهدوم (1952–1968) يطالب بحق إقليمي للضيافة على مبنى بديله — ذاكرة مكان تلاقي الناس تستمر في الرصيف',
        ],
      },
      temporal: {
        en: [
          'Morning light: the east-facing porcelain tiles catch the sunrise and briefly transform from grey-white to pale gold — a daily aesthetic governance event that the city did not plan',
          'The boulevard was designed for Soviet-era parade formations 90 metres wide — all modern traffic is technically a civilian occupation of a ceremonial space',
        ],
        de: [
          'Morgenlicht: Die nach Osten ausgerichteten Porzellanfliesen fangen den Sonnenaufgang ein und verwandeln sich kurz von Grau-Weiß in Blass-Gold — ein tägliches ästhetisches Governance-Ereignis, das die Stadt nicht geplant hat',
          'Der Boulevard wurde für sowjetische Parade-Formationen von 90 Metern Breite entworfen — aller moderne Verkehr ist technisch gesehen eine zivile Besetzung eines Zeremonialraums',
        ],
        ru: [
          'Утренний свет: обращённые на восток фарфоровые плитки ловят рассвет и ненадолго превращаются из серо-белых в бледно-золотые — ежедневное эстетическое управленческое событие, которое город не планировал',
          'Бульвар был спроектирован для советских парадных построений шириной 90 метров — весь современный транспорт технически является гражданской оккупацией церемониального пространства',
        ],
        ar: [
          'ضوء الصباح: بلاط الخزف المواجه للشرق يلتقط شروق الشمس ويتحول مؤقتاً من الأبيض الرمادي إلى الذهبي الفاتح — حدث حوكمة جمالية يومي لم تخطط له المدينة',
          'صُمِّم الشارع العريض للاستعراضات العسكرية السوفيتية بعرض 90 متر — جميع حركة المرور الحديثة هي تقنياً احتلال مدني لفضاء احتفالي',
        ],
      },
    },
  ],

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
    {
      id: 'pere-lachaise', type: 'cultural', lat: 48.8614, lng: 2.3948,
      name: { en: 'Père Lachaise', de: 'Père Lachaise', ru: 'Пер-Лашез', ar: 'بير لاشيز' },
      atmo: {
        en: 'The largest cemetery in Paris contains more residents than most living neighbourhoods. Cats patrol the avenues between famous dead and forgotten dead. The city keeps growing around it, prices keep rising, but here the population is stable.',
        de: 'Der größte Friedhof von Paris enthält mehr Einwohner als die meisten lebenden Viertel. Katzen patrouillieren die Alleen zwischen berühmten Toten und vergessenen Toten. Die Stadt wächst drum herum, die Preise steigen, aber hier ist die Bevölkerung stabil.',
        ru: 'Крупнейшее кладбище Парижа содержит больше жителей, чем большинство живых кварталов. Кошки патрулируют аллеи между знаменитыми мертвецами и забытыми мертвецами. Город продолжает расти вокруг, цены растут, но здесь население стабильно.',
        ar: 'أكبر مقبرة في باريس تحتوي على سكان أكثر من معظم الأحياء الحية. القطط تجوب الطرق بين الموتى المشهورين والموتى المنسيين. المدينة تواصل نموها من حولها، والأسعار ترتفع، لكن هنا السكان مستقرون.',
      },
      owners: {
        en: [
          'The city of Paris holds administrative ownership but the dead hold effective territorial sovereignty through continuous occupation',
          'Jim Morrison\'s grave (d.1971) generates 500,000 annual visitors — a spectral tourism economy that cannot be taxed',
          'The cat colony holds biological governance of the maintenance paths — 47 cats, rotating territorial zones',
          'Ivy claims 23% of all stone surfaces — a slow territorial conquest no gardener has fully reversed',
        ],
        de: [
          'Die Stadt Paris hält Verwaltungseigentum, aber die Toten halten effektive territoriale Souveränität durch kontinuierliche Besetzung',
          'Jim Morrisons Grab (gest. 1971) generiert 500.000 Jahresbesucher — eine spektrale Tourismuswirtschaft, die nicht besteuert werden kann',
          'Die Katzenkolonie hält biologische Governance der Wartungspfade — 47 Katzen, rotierende Territorialzonen',
          'Efeu beansprucht 23% aller Steinoberflächen — eine langsame territoriale Eroberung, die kein Gärtner vollständig umgekehrt hat',
        ],
        ru: [
          'Город Париж держит административную собственность, но мертвецы держат фактический территориальный суверенитет через непрерывное занятие',
          'Могила Джима Моррисона (ум. 1971) генерирует 500 000 ежегодных посетителей — призрачная туристическая экономика, которая не может облагаться налогом',
          'Кошачья колония держит биологическое управление дорожками обслуживания — 47 кошек, ротация территориальных зон',
          'Плющ претендует на 23% всех каменных поверхностей — медленное территориальное завоевание, которое ни один садовник полностью не обратил',
        ],
        ar: [
          'مدينة باريس تحتفظ بالملكية الإدارية لكن الموتى يحتفظون بالسيادة الإقليمية الفعلية من خلال الإشغال المستمر',
          'قبر جيم موريسون (توفي 1971) يولّد 500,000 زائر سنوي — اقتصاد سياحي طيفي لا يمكن فرض ضريبة عليه',
          'مستعمرة القطط تحتفظ بالحوكمة البيولوجية لمسارات الصيانة — 47 قطة ومناطق إقليمية دورية',
          'اللبلاب يطالب بـ 23% من جميع الأسطح الحجرية — غزو إقليمي بطيء لم يعكسه أي بستاني بالكامل',
        ],
      },
      ghost: {
        en: [
          'The Communards\' Wall (1871) — 147 executed here in the last stand of the Paris Commune — retains the city\'s most politically charged territorial claim',
          'Haussmann\'s original cemetery expansion (removing existing graves, 1804) established a precedent of overwriting the dead — technically still unresolved',
        ],
        de: [
          'Die Kommunardenmauer (1871) — 147 hier beim letzten Gefecht der Pariser Kommune Hingerichtete — behält den politisch aufgeladensten Territorialanspruch der Stadt',
          'Haussmanns ursprüngliche Friedhofserweiterung (Entfernung bestehender Gräber, 1804) schuf einen Präzedenzfall für das Überschreiben der Toten — technisch immer noch ungelöst',
        ],
        ru: [
          'Стена коммунаров (1871) — 147 расстрелянных здесь при последнем сражении Парижской коммуны — сохраняет наиболее политически заряженную территориальную претензию города',
          'Первоначальное расширение кладбища Османом (удаление существующих могил, 1804) создало прецедент переписывания мертвецов — технически всё ещё не разрешено',
        ],
        ar: [
          'جدار الكوميونيين (1871) — 147 أُعدموا هنا في المعركة الأخيرة لكومونة باريس — يحتفظ بالمطالبة الإقليمية الأكثر شحناً سياسياً في المدينة',
          'التوسع الأصلي للمقبرة على يد هوسمان (إزالة القبور القائمة، 1804) أسس سابقة للكتابة فوق الموتى — غير محسومة تقنياً حتى الآن',
        ],
      },
      temporal: {
        en: [
          'Autumn leaf event: the cemetery briefly achieves aesthetic governance over the entire 11th arrondissement skyline',
          'All Saints\' Day (November 1): living visitors outnumber the permanent residents for the only day of the year',
        ],
        de: [
          'Herbstlauberereignis: der Friedhof erlangt kurzzeitig ästhetische Governance über die gesamte Skyline des 11. Arrondissements',
          'Allerheiligen (1. November): lebende Besucher übersteigen die dauerhaften Bewohner am einzigen Tag des Jahres',
        ],
        ru: [
          'Событие осенней листвы: кладбище ненадолго достигает эстетического управления над всем горизонтом 11-го округа',
          'День всех святых (1 ноября): живые посетители превышают постоянных жителей в единственный день года',
        ],
        ar: [
          'حدث أوراق الخريف: المقبرة تحقق لفترة وجيزة الحوكمة الجمالية على أفق الدائرة الحادية عشرة بأكملها',
          'عيد جميع القديسين (1 نوفمبر): يتجاوز عدد الزوار الأحياء السكان الدائمين لليوم الوحيد في العام',
        ],
      },
    },
    {
      id: 'pigalle', type: 'district', lat: 48.8836, lng: 2.3356,
      name: { en: 'Pigalle', de: 'Pigalle', ru: 'Пигаль', ar: 'بيغال' },
      atmo: {
        en: 'A neighbourhood that has been scandalous for two centuries and is now mostly a brunch destination. The neon still works. The performers are fewer. The algorithm routes the curious and the nostalgic down streets that once governed themselves by entirely different rules.',
        de: 'Ein Viertel, das seit zwei Jahrhunderten skandalös ist und jetzt hauptsächlich ein Brunch-Ziel ist. Die Leuchtreklamen funktionieren noch. Die Künstler sind weniger geworden. Der Algorithmus führt Neugierige und Nostalgische durch Straßen, die sich einst nach völlig anderen Regeln selbst regierten.',
        ru: 'Квартал, скандальный на протяжении двух веков, теперь в основном место для бранча. Неон всё ещё работает. Исполнителей стало меньше. Алгоритм направляет любопытных и ностальгирующих по улицам, которые когда-то управляли собой по совершенно другим правилам.',
        ar: 'حي كان فاضحاً لقرنين من الزمن وهو الآن في معظمه وجهة للإفطار المتأخر. النيون لا يزال يعمل. المؤدون أقل عدداً. الخوارزمية توجّه الفضوليين والحنينيين عبر شوارع كانت تحكم نفسها بقواعد مختلفة تماماً.',
      },
      owners: {
        en: [
          'The Moulin Rouge (operating since 1889) holds visual sovereignty over the hillside approach — its sails visible from 800m',
          'A sex workers\' collective maintains informal territorial governance of three specific corners — protocols inherited across generations',
          'The music club algorithm has pre-assigned genre governance to each block — jazz, electronic, folk zones with invisible borders',
          'A network of cats holds the alley governance network — 31 documented residents, routes memorised over decades',
        ],
        de: [
          'Das Moulin Rouge (seit 1889 in Betrieb) hält visuelle Souveränität über den Hügelzugang — seine Flügel von 800 m sichtbar',
          'Ein Sexarbeiterinnen-Kollektiv hält informelle territoriale Governance an drei spezifischen Ecken — über Generationen vererbte Protokolle',
          'Der Musikclub-Algorithmus hat Genregovernance für jeden Block vorab zugewiesen — Jazz-, Elektronik-, Folkzonen mit unsichtbaren Grenzen',
          'Ein Netzwerk von Katzen hält das Gassen-Governance-Netzwerk — 31 dokumentierte Bewohner, über Jahrzehnte eingeprägten Routen',
        ],
        ru: [
          'Мулен Руж (работает с 1889 года) держит визуальный суверенитет над подходом со склона холма — его лопасти видны с 800 м',
          'Коллектив секс-работников поддерживает неформальное территориальное управление на трёх конкретных углах — протоколы, наследуемые через поколения',
          'Алгоритм музыкального клуба заранее назначил жанровое управление каждому кварталу — зоны джаза, электронной, фолк с невидимыми границами',
          'Сеть кошек держит управляющую сеть переулков — 31 задокументированный житель, маршруты, запомненные за десятилетия',
        ],
        ar: [
          'موان روج (تعمل منذ 1889) تحتفظ بالسيادة البصرية على مقاربة المنحدر — أجنحتها مرئية من 800 متر',
          'مجموعة عمال الجنس تحافظ على حوكمة إقليمية غير رسمية لثلاثة زوايا محددة — بروتوكولات موروثة عبر الأجيال',
          'خوارزمية النادي الموسيقي عيّنت مسبقاً حوكمة النوع لكل مبنى — مناطق جاز وإلكترونية وفولك بحدود غير مرئية',
          'شبكة من القطط تحتفظ بشبكة حوكمة الأزقة — 31 ساكناً موثّقاً، ومسارات محفورة في الذاكرة على مدى عقود',
        ],
      },
      ghost: {
        en: [
          'Toulouse-Lautrec (d.1901) retains an aesthetic governance claim on every visual representation of this hill — technically all posters owe him something',
          'The Belle Époque cabarets (demolished 1910–1930) maintain territorial memory claims on every site currently occupied by a kebab shop or bank',
        ],
        de: [
          'Toulouse-Lautrec (gest. 1901) behält einen ästhetischen Governance-Anspruch auf jede visuelle Darstellung dieses Hügels — technisch gesehen schulden ihm alle Plakate etwas',
          'Die Belle-Époque-Kabaretts (abgerissen 1910–1930) halten territoriale Erinnerungsansprüche auf jedem Standort, der derzeit von einem Dönerladen oder einer Bank besetzt ist',
        ],
        ru: [
          'Тулуз-Лотрек (ум. 1901) сохраняет эстетическую претензию управления на каждое визуальное изображение этого холма — технически все плакаты должны ему что-то',
          'Кабаре эпохи Прекрасной эпохи (снесены 1910–1930) сохраняют территориальные претензии памяти на каждом месте, которое в настоящее время занимает шаурмичная или банк',
        ],
        ar: [
          'تولوز-لوتريك (توفي 1901) يحتفظ بمطالبة حوكمة جمالية على كل تمثيل بصري لهذا التل — تقنياً كل ملصق مدين له بشيء',
          'ملاهي حقبة الجميل (هُدمت 1910–1930) تحتفظ بمطالبات ذاكرة إقليمية على كل موقع يحتله حالياً محل كباب أو بنك',
        ],
      },
      temporal: {
        en: [
          'Midnight governance shift: the neighbourhood inverts — tourists return home, workers arrive, and the street\'s actual economy becomes visible',
          'Current gentrification wave: 3 independent venues closed this month — the algorithm is quietly redrawing zone boundaries',
        ],
        de: [
          'Mitternächtliche Governance-Verschiebung: das Viertel kehrt sich um — Touristen kehren heim, Arbeiter kommen an, und die eigentliche Wirtschaft der Straße wird sichtbar',
          'Aktuelle Gentrifizierungswelle: 3 unabhängige Veranstaltungsorte schlossen diesen Monat — der Algorithmus zeichnet lautlos Zonengrenzen neu',
        ],
        ru: [
          'Полночная смена управления: квартал переворачивается — туристы возвращаются домой, рабочие прибывают, и реальная экономика улицы становится видимой',
          'Текущая волна джентрификации: 3 независимых заведения закрылись в этом месяце — алгоритм тихо перерисовывает границы зон',
        ],
        ar: [
          'تحول الحوكمة في منتصف الليل: الحي ينعكس — يعود السياح إلى المنزل، يصل العمال، ويصبح الاقتصاد الفعلي للشارع مرئياً',
          'موجة التحسين الحضري الحالية: 3 أماكن مستقلة أغلقت هذا الشهر — الخوارزمية تعيد رسم حدود المناطق بهدوء',
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
    {
      id: 'asakusa', type: 'cultural', lat: 35.7147, lng: 139.7967,
      name: { en: 'Asakusa', de: 'Asakusa', ru: 'Асакуса', ar: 'أساكوسا' },
      atmo: {
        en: 'The oldest district in Tokyo, where temple incense and street food smoke mix at the same altitude. Senso-ji was rebuilt after the war but the devotion is older than the building. A rickshaw driver waits at exactly the same corner his grandfather did.',
        de: 'Der älteste Bezirk Tokios, wo Tempelweihrauch und Straßenküchen-Rauch auf gleicher Höhe zusammentreffen. Senso-ji wurde nach dem Krieg wiederaufgebaut, aber die Hingabe ist älter als das Gebäude. Ein Rikschafahrer wartet genau an derselben Ecke, an der sein Großvater wartete.',
        ru: 'Старейший район Токио, где храмовый ладан и дым уличной еды смешиваются на одной высоте. Сэнсо-дзи был восстановлен после войны, но преданность старше здания. Рикша ждёт ровно на том же углу, что и его дед.',
        ar: 'أقدم حي في طوكيو حيث يمتزج بخور المعبد ودخان الأكل الشارعي على نفس الارتفاع. أُعيد بناء سينسو-جي بعد الحرب لكن التفاني أقدم من المبنى. سائق عربة ينتظر في نفس الزاوية التي انتظر فيها جده.',
      },
      owners: {
        en: [
          'Senso-ji temple (founded 628 CE) claims spiritual governance of all visitors within 500m — consent implied by approach',
          'The Nakamise shopping street holds commercial territorial rights by 300 years of uninterrupted trade',
          'Incense smoke from the main censer claims a 20m atmospheric governance zone — you are required to pass through it',
          'A 400-year-old ginkgo tree holds the strongest temporal claim in the district — has governed this courtyard through 6 reconstruction cycles',
        ],
        de: [
          'Der Senso-ji-Tempel (gegründet 628 n.Chr.) beansprucht spirituelle Governance aller Besucher innerhalb von 500 m — Zustimmung durch Annäherung impliziert',
          'Die Nakamise-Einkaufsstraße hält kommerzielle Territorialrechte durch 300 Jahre ununterbrochenen Handels',
          'Weihrauchrauch aus dem Haupträuchergefäß beansprucht eine atmosphärische Governance-Zone von 20 m — Sie sind verpflichtet, hindurchzugehen',
          'Ein 400 Jahre alter Ginkgobaum hält den stärksten zeitlichen Anspruch im Bezirk — hat diesen Hof durch 6 Wiederaufbauzyklen regiert',
        ],
        ru: [
          'Храм Сэнсо-дзи (основан в 628 г. н.э.) претендует на духовное управление всеми посетителями в радиусе 500 м — согласие подразумевается при приближении',
          'Торговая улица Накамисэ держит коммерческие территориальные права благодаря 300 годам непрерывной торговли',
          'Дым ладана из главного кадильника претендует на 20-метровую атмосферную зону управления — вы обязаны пройти через неё',
          '400-летнее дерево гинкго держит самую сильную временную претензию в районе — управляло этим двором через 6 циклов реконструкции',
        ],
        ar: [
          'معبد سينسو-جي (أُسس عام 628 م) يطالب بالحوكمة الروحية لجميع الزوار في نطاق 500 متر — الموافقة ضمنية عند الاقتراب',
          'شارع ناكاميسي التجاري يحتفظ بالحقوق الإقليمية التجارية عبر 300 عام من التجارة المتواصلة',
          'دخان البخور من المبخرة الرئيسية يطالب بمنطقة حوكمة جوية بعرض 20 متراً — يُلزَم المرء بالمرور عبرها',
          'شجرة جينكو عمرها 400 عام تحتفظ بأقوى مطالبة زمنية في الحي — حكمت هذا الفناء عبر 6 دورات إعادة بناء',
        ],
      },
      ghost: {
        en: [
          'The 1923 Great Kanto Earthquake and the 1945 firebombing destroyed the district twice — both events retain layered structural-memory claims beneath the current foundations',
          'The original riverside market (pre-Edo) maintains a ghost-trade claim along the western approach path',
        ],
        de: [
          'Das Große Kanto-Erdbeben von 1923 und die Brandbombenangriffe von 1945 zerstörten den Bezirk zweimal — beide Ereignisse behalten geschichtete strukturelle Erinnerungsansprüche unter den aktuellen Fundamenten',
          'Der ursprüngliche Ufermarkt (vor der Edo-Zeit) hält einen Geisterhandelsanspruch entlang des westlichen Zugangswegs',
        ],
        ru: [
          'Великое землетрясение Канто 1923 года и пожарные бомбардировки 1945 года дважды уничтожили район — оба события сохраняют многослойные структурные претензии памяти под нынешними фундаментами',
          'Оригинальный речной рынок (до периода Эдо) сохраняет претензию призрачной торговли вдоль западного подходного пути',
        ],
        ar: [
          'زلزال كانتو الكبير عام 1923 والقصف الحارق عام 1945 دمّرا الحي مرتين — كلا الحدثين يحتفظان بمطالبات ذاكرة هيكلية متراكبة تحت الأسس الحالية',
          'السوق النهري الأصلي (ما قبل حقبة إيدو) يحتفظ بمطالبة تجارة طيفية على طول مسار الاقتراب الغربي',
        ],
      },
      temporal: {
        en: [
          'New Year (January 1): 3 million visitors in 3 days — the largest temporary sovereignty event in the district\'s calendar',
          'Early morning (06:00–08:00): before the crowds, the temple operates on its own temporal governance — monks, incense, and the river',
        ],
        de: [
          'Neujahr (1. Januar): 3 Millionen Besucher in 3 Tagen — das größte temporäre Souveränitätsereignis im Kalender des Bezirks',
          'Früher Morgen (06:00–08:00): vor den Massen operiert der Tempel auf eigener zeitlicher Governance — Mönche, Weihrauch und der Fluss',
        ],
        ru: [
          'Новый год (1 января): 3 миллиона посетителей за 3 дня — крупнейшее временное событие суверенитета в календаре района',
          'Раннее утро (06:00–08:00): до толпы храм функционирует по собственному временному управлению — монахи, ладан и река',
        ],
        ar: [
          'رأس السنة (1 يناير): 3 ملايين زائر في 3 أيام — أكبر حدث سيادة مؤقتة في تقويم الحي',
          'الصباح الباكر (06:00–08:00): قبل الحشود، يعمل المعبد بحوكمة زمنية خاصة — رهبان وبخور ونهر',
        ],
      },
    },
    {
      id: 'akihabara', type: 'district', lat: 35.7021, lng: 139.7742,
      name: { en: 'Akihabara', de: 'Akihabara', ru: 'Акихабара', ar: 'أكيهابارا' },
      atmo: {
        en: 'A district that used to sell black-market radios after the war and now sells simulated realities. The screens stack 8 floors high. Every surface is competing for visual governance. Somewhere in the basement a server farm is running a version of the city that is more detailed than the city.',
        de: 'Ein Bezirk, der nach dem Krieg Schwarzmarktradios verkaufte und jetzt simulierte Realitäten verkauft. Die Bildschirme stapeln sich 8 Stockwerke hoch. Jede Oberfläche konkurriert um visuelle Governance. Irgendwo im Keller betreibt eine Serverfarm eine Version der Stadt, die detaillierter ist als die Stadt.',
        ru: 'Район, продававший радиоприёмники с чёрного рынка после войны, теперь продаёт симулированные реальности. Экраны складываются на 8 этажей в высоту. Каждая поверхность конкурирует за визуальное управление. Где-то в подвале серверная ферма запускает версию города, более детальную, чем сам город.',
        ar: 'حي كان يبيع أجهزة الراديو في السوق السوداء بعد الحرب ويبيع الآن الواقعات المحاكاة. الشاشات تتراص على ارتفاع 8 طوابق. كل سطح يتنافس للحصول على الحوكمة البصرية. في مكان ما في القبو، مزرعة خوادم تشغّل نسخة من المدينة أكثر تفصيلاً من المدينة.',
      },
      owners: {
        en: [
          'Retail algorithms govern pedestrian routing — your browsing pattern was predicted before you entered the district',
          'A network of maid cafes holds informal affective-labour territorial rights across 14 buildings',
          'The underground cable infrastructure (laid 1950s) retains technical governance of all surface commerce',
          'Anime franchise IP holders claim visual territorial rights on all 2D surfaces — 400+ active claims currently displayed',
        ],
        de: [
          'Einzelhandelsalgorithmen regieren die Fußgängerführung — Ihr Browsermuster wurde vorhergesagt, bevor Sie den Bezirk betraten',
          'Ein Netzwerk von Maid-Cafés hält informelle territoriale Rechte für affektive Arbeit über 14 Gebäude',
          'Die unterirdische Kabelinfrastruktur (verlegt 1950er) behält technische Governance des gesamten Oberflächenhandels',
          'Anime-Franchise-IP-Inhaber beanspruchen visuelle Territorialrechte auf allen 2D-Oberflächen — 400+ aktive Ansprüche werden derzeit angezeigt',
        ],
        ru: [
          'Розничные алгоритмы управляют маршрутизацией пешеходов — ваш паттерн просмотра был предсказан до того, как вы вошли в район',
          'Сеть кафе с горничными держит неформальные территориальные права аффективного труда в 14 зданиях',
          'Подземная кабельная инфраструктура (проложена в 1950-х) сохраняет техническое управление всей поверхностной торговлей',
          'Обладатели IP-прав аниме-франшиз претендуют на визуальные территориальные права на всех 2D-поверхностях — в настоящее время отображается 400+ активных претензий',
        ],
        ar: [
          'خوارزميات التجزئة تحكم توجيه المشاة — نمط تصفحك تم التنبؤ به قبل دخولك الحي',
          'شبكة من مقاهي الخادمات تحتفظ بحقوق إقليمية غير رسمية للعمل العاطفي عبر 14 مبنى',
          'البنية التحتية للكابلات تحت الأرض (مُدّت في الخمسينيات) تحتفظ بالحوكمة التقنية لكل تجارة السطح',
          'أصحاب حقوق الملكية الفكرية لامتيازات الأنيمي يطالبون بحقوق إقليمية بصرية على جميع الأسطح ثنائية الأبعاد — أكثر من 400 مطالبة نشطة معروضة حالياً',
        ],
      },
      ghost: {
        en: [
          'The post-war black market (1945–1949) established the district\'s commercial DNA — every current franchise holds inherited market-stall rights',
          'Akihabara train station massacre victims (2008) — 7 killed — retain an unresolved territorial grief-claim on the pedestrian zone',
        ],
        de: [
          'Der Nachkriegs-Schwarzmarkt (1945–1949) begründete die kommerzielle DNA des Bezirks — jede aktuelle Franchise hält geerbte Marktstandrechte',
          'Opfer des Akihabara-Zugattentat (2008) — 7 Getötete — behalten einen ungelösten territorialen Traueranspruch auf die Fußgängerzone',
        ],
        ru: [
          'Послевоенный чёрный рынок (1945–1949) установил коммерческую ДНК района — каждая нынешняя франшиза держит унаследованные права торгового места',
          'Жертвы резни на станции Акихабара (2008) — 7 погибших — сохраняют неразрешённую территориальную претензию скорби на пешеходной зоне',
        ],
        ar: [
          'السوق السوداء في فترة ما بعد الحرب (1945–1949) أسست الحمض النووي التجاري للحي — كل امتياز حالي يحتفظ بحقوق بسطة سوق موروثة',
          'ضحايا مجزرة محطة أكيهابارا (2008) — 7 قتلى — يحتفظون بمطالبة حزن إقليمية غير محسومة على منطقة المشاة',
        ],
      },
      temporal: {
        en: [
          'Sunday pedestrianisation event (12:00–18:00): the algorithm yields, the street temporarily governed by cosplay and free circulation',
          'Night governance shift: the district narrows — game centres and convenience stores hold primary governance after midnight',
        ],
        de: [
          'Sonntägliche Fußgängerisierungsveranstaltung (12:00–18:00): der Algorithmus gibt nach, die Straße wird vorübergehend durch Cosplay und freie Zirkulation regiert',
          'Nächtliche Governance-Verschiebung: der Bezirk verengt sich — Spielhallen und Convenience Stores halten primäre Governance nach Mitternacht',
        ],
        ru: [
          'Воскресное событие пешеходизации (12:00–18:00): алгоритм уступает, улица временно управляется косплеем и свободной циркуляцией',
          'Ночная смена управления: район сужается — игровые залы и круглосуточные магазины держат первичное управление после полуночи',
        ],
        ar: [
          'حدث تحويل الشوارع للمشاة الأحد (12:00–18:00): الخوارزمية تتراجع، الشارع يُحكَم مؤقتاً بالكوسبلاي والتنقل الحر',
          'تحول الحوكمة الليلية: يضيق الحي — قاعات الألعاب ومتاجر الراحة تحتفظ بالحوكمة الأولية بعد منتصف الليل',
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
    {
      id: 'brixton', type: 'district', lat: 51.4613, lng: -0.1148,
      name: { en: 'Brixton', de: 'Brixton', ru: 'Брикстон', ar: 'بريكستون' },
      atmo: {
        en: 'A market that outlasted every attempt to gentrify it. The record shops survived. The brixton pound failed. The music is loud enough to govern the street. Every wall holds a David Bowie mural now — a man who left and never came back, claimed posthumously.',
        de: 'Ein Markt, der jeden Gentrifizierungsversuch überlebt hat. Die Plattenläden überlebten. Das Brixton-Pfund scheiterte. Die Musik ist laut genug, um die Straße zu regieren. Jede Wand trägt jetzt ein David-Bowie-Wandbild — ein Mann, der wegging und nie zurückkam, posthum beansprucht.',
        ru: 'Рынок, переживший каждую попытку джентрификации. Музыкальные магазины выжили. Брикстонский фунт потерпел неудачу. Музыка достаточно громкая, чтобы управлять улицей. На каждой стене теперь фреска с Дэвидом Боуи — человеком, который ушёл и никогда не вернулся, претендуемым посмертно.',
        ar: 'سوق نجا من كل محاولة للتحسين الحضري. محلات الأسطوانات نجت. الجنيه البريكستوني فشل. الموسيقى عالية بما يكفي لحكم الشارع. كل جدار يحمل الآن جدارية لديفيد بوي — رجل غادر ولم يعد قط، يُطالب به بعد وفاته.',
      },
      owners: {
        en: [
          'The market traders (established 1870s) hold territorial claims by continuous commercial occupation — oldest claim predates every building on this block',
          'The Windrush generation (arrived 1948–1971) maintains a founding habitation claim on the surrounding streets',
          'A sound system network holds acoustic territorial governance on Friday and Saturday nights — the bass frequencies claim structural rights',
          'The tube station (opened 1971) governs all pedestrian flow through its exit funnel — daily, without consent forms',
        ],
        de: [
          'Die Markthändler (gegründet 1870er) halten Territorialansprüche durch kontinuierliche kommerzielle Besetzung — ältester Anspruch geht jedem Gebäude in diesem Block voraus',
          'Die Windrush-Generation (angekommen 1948–1971) hält einen Gründungswohnanspruch auf den umliegenden Straßen',
          'Ein Soundsystem-Netzwerk hält akustische territoriale Governance am Freitag- und Samstagabend — die Bassfrequenzen beanspruchen strukturelle Rechte',
          'Die U-Bahn-Station (eröffnet 1971) regiert alle Fußgängerströme durch ihren Ausgangstrichter — täglich, ohne Zustimmungsformulare',
        ],
        ru: [
          'Рыночные торговцы (основаны в 1870-х) держат территориальные претензии путём непрерывного коммерческого занятия — старейшая претензия предшествует каждому зданию на этом квартале',
          'Поколение Виндраш (прибыло 1948–1971) сохраняет основополагающую претензию на проживание на окружающих улицах',
          'Сеть звуковых систем держит акустическое территориальное управление в пятницу и субботу вечером — частоты баса претендуют на структурные права',
          'Станция метро (открыта в 1971 году) управляет всеми пешеходными потоками через свою выходную воронку — ежедневно, без форм согласия',
        ],
        ar: [
          'تجار السوق (تأسسوا في سبعينيات القرن التاسع عشر) يحتفظون بمطالبات إقليمية عبر الإشغال التجاري المستمر — أقدم مطالبة تسبق كل مبنى في هذه المنطقة',
          'جيل ويندراش (وصل 1948–1971) يحتفظ بمطالبة سكن تأسيسية في الشوارع المحيطة',
          'شبكة أجهزة الصوت تحتفظ بحوكمة إقليمية صوتية ليلتي الجمعة والسبت — ترددات الباص تطالب بحقوق هيكلية',
          'محطة المترو (افتُتحت 1971) تحكم جميع تدفقات المشاة من خلال قمع مخرجها — يومياً، دون نماذج موافقة',
        ],
      },
      ghost: {
        en: [
          'The 1981 Brixton Uprising (April 11–12) retains an active territorial claim on the intersection of Atlantic Road and Coldharbour Lane — the community\'s sovereignty over policing is technically unresolved',
          'Caribbean migrant communities displaced by 1970s–1990s clearances maintain habitation claims on all redeveloped sites',
        ],
        de: [
          'Der Brixton-Aufstand von 1981 (11.–12. April) behält einen aktiven Territorialanspruch auf die Kreuzung Atlantic Road und Coldharbour Lane — die Souveränität der Gemeinde über die Polizeiarbeit ist technisch ungelöst',
          'Karibische Migrantengemeinschaften, die durch Abrisse in den 1970er–1990er Jahren verdrängt wurden, halten Wohnansprüche auf allen sanierten Standorten',
        ],
        ru: [
          'Восстание в Брикстоне 1981 года (11–12 апреля) сохраняет активную территориальную претензию на пересечение Atlantic Road и Coldharbour Lane — суверенитет общины над полицейской деятельностью технически не разрешён',
          'Карибские мигрантские общины, вытесненные сносами 1970-х–1990-х годов, сохраняют претензии на жильё на всех перестроенных объектах',
        ],
        ar: [
          'انتفاضة بريكستون عام 1981 (11–12 أبريل) تحتفظ بمطالبة إقليمية نشطة على تقاطع أتلانتيك رود وكولدهاربور لين — سيادة المجتمع على الشرطة غير محسومة تقنياً',
          'مجتمعات المهاجرين الكاريبيين المهجّرين بسبب عمليات الإخلاء في السبعينيات–التسعينيات تحتفظ بمطالبات سكن على جميع المواقع المعاد تطويرها',
        ],
      },
      temporal: {
        en: [
          'Carnival weekend (August bank holiday): the neighbourhood briefly reclaims full sonic sovereignty — the route cannot be rerouted',
          'Current rent increase wave: 3 independent shops closed this month — the algorithm is mapping the boundary of affordability in real time',
        ],
        de: [
          'Karnevalswochenende (August-Feiertag): das Viertel beansprucht kurzzeitig volle akustische Souveränität zurück — die Route kann nicht umgeleitet werden',
          'Aktuelle Mieterhöhungswelle: 3 unabhängige Läden schlossen diesen Monat — der Algorithmus kartiert die Erschwinglichkeitsgrenze in Echtzeit',
        ],
        ru: [
          'Карнавальные выходные (августовский банковский праздник): квартал ненадолго возвращает полный акустический суверенитет — маршрут не может быть перенаправлен',
          'Текущая волна повышения арендной платы: 3 независимых магазина закрылись в этом месяце — алгоритм картирует границу доступности в реальном времени',
        ],
        ar: [
          'عطلة نهاية أسبوع الكرنفال (عطلة أغسطس): يستعيد الحي السيادة الصوتية الكاملة لفترة وجيزة — لا يمكن تحويل المسار',
          'موجة الزيادة الحالية في الإيجارات: 3 محلات مستقلة أغلقت هذا الشهر — الخوارزمية تخريط حدود القدرة على تحمل التكاليف في الوقت الفعلي',
        ],
      },
    },
    {
      id: 'canary-wharf', type: 'infrastructure', lat: 51.5054, lng: -0.0235,
      name: { en: 'Canary Wharf', de: 'Canary Wharf', ru: 'Кэнэри-Уорф', ar: 'كاناري وارف' },
      atmo: {
        en: 'A financial district built on a former dock on a former island. The land is reclaimed. The water is still visible at the edges, trying to remember. The towers are identical and the people in them are different every few years. The soil does not know any of these buildings.',
        de: 'Ein Finanzviertel, das auf einem ehemaligen Dock auf einer ehemaligen Insel gebaut wurde. Das Land ist wiedergewonnen. Das Wasser ist noch an den Rändern sichtbar und versucht sich zu erinnern. Die Türme sind identisch und die Menschen in ihnen wechseln alle paar Jahre. Der Boden kennt keines dieser Gebäude.',
        ru: 'Финансовый район, построенный на бывших доках на бывшем острове. Земля отвоёвана. Вода всё ещё видна по краям, пытаясь вспомнить. Башни одинаковые, и люди в них меняются каждые несколько лет. Почва не знает ни одного из этих зданий.',
        ar: 'حي مالي مبني على حوض قديم في جزيرة قديمة. الأرض مُستردة. الماء لا يزال مرئياً عند الحواف محاولاً التذكر. الأبراج متطابقة والناس فيها يتغيرون كل بضع سنوات. التربة لا تعرف أياً من هذه المباني.',
      },
      owners: {
        en: [
          'Canary Wharf Group (private consortium) holds surface governance over 97 acres of what was public dock land',
          'The tidal Thames retains a subsurface claim — the entire site is built on river fill and the river has not relinquished memory',
          'HSBC, Barclays, Citi and 34 other institutions hold vertical territorial governance — floor by floor, jurisdiction by jurisdiction',
          'The DLR railway claims an elevated corridor of movement governance through the entire district — its path cuts every property boundary',
        ],
        de: [
          'Die Canary Wharf Group (privates Konsortium) hält Oberflächengovernance über 39 Hektar ehemaliges öffentliches Dockland',
          'Die Gezeitenthemse behält einen unterirdischen Anspruch — das gesamte Gelände ist auf Flussfüllung gebaut, und der Fluss hat die Erinnerung nicht aufgegeben',
          'HSBC, Barclays, Citi und 34 weitere Institutionen halten vertikale territoriale Governance — Stockwerk für Stockwerk, Jurisdiktion für Jurisdiktion',
          'Die DLR-Bahn beansprucht einen erhöhten Bewegungsgovernance-Korridor durch den gesamten Bezirk — ihr Weg schneidet jede Eigentumsgrenze',
        ],
        ru: [
          'Canary Wharf Group (частный консорциум) держит поверхностное управление над 39 гектарами того, что было публичными доками',
          'Приливная Темза сохраняет подземную претензию — весь объект построен на речной засыпке, и река не отказалась от памяти',
          'HSBC, Barclays, Citi и 34 другие организации держат вертикальное территориальное управление — этаж за этажом, юрисдикция за юрисдикцией',
          'Железная дорога DLR претендует на приподнятый коридор управления движением через весь район — её путь пересекает каждую границу собственности',
        ],
        ar: [
          'مجموعة كاناري وارف (اتحاد خاص) تحتفظ بحوكمة السطح على 39 هكتاراً مما كان أرض رصيف عام',
          'نهر التايمز المدي يحتفظ بمطالبة تحت السطحية — الموقع بأكمله مبني على ردم نهري والنهر لم يتخلَّ عن الذاكرة',
          'HSBC وباركليز وسيتي و34 مؤسسة أخرى تحتفظ بحوكمة إقليمية عمودية — طابقاً طابقاً، ولاية قضائية تلو أخرى',
          'سكة حديد DLR تطالب بممر حوكمة حركة مرتفع عبر الحي بأكمله — مسارها يقطع كل حدود ملكية',
        ],
      },
      ghost: {
        en: [
          'The West India Docks (1802–1980) — built on enslaved labour wealth — retain an unresolved foundational governance claim on all current commerce conducted here',
          'Dock workers displaced in the 1980s redevelopment retain habitation and labour-rights claims that have never been formally addressed',
        ],
        de: [
          'Die West India Docks (1802–1980) — gebaut auf dem Reichtum versklavter Arbeit — behalten einen ungelösten grundlegenden Governance-Anspruch auf allen hier durchgeführten aktuellen Handel',
          'Dockarbeiter, die durch die Sanierung der 1980er Jahre verdrängt wurden, behalten Wohn- und Arbeitsrechtsansprüche, die nie formal angesprochen wurden',
        ],
        ru: [
          'West India Docks (1802–1980) — построенные на богатстве порабощённого труда — сохраняют неразрешённую основополагающую претензию управления на всю нынешнюю торговлю, ведущуюся здесь',
          'Портовые рабочие, перемещённые в ходе редевелопмента 1980-х, сохраняют претензии на жильё и трудовые права, которые никогда официально не рассматривались',
        ],
        ar: [
          'أرصفة الهند الغربية (1802–1980) — مبنية على ثروة العمل المستعبَد — تحتفظ بمطالبة حوكمة تأسيسية غير محسومة على كل التجارة الحالية التي تُمارَس هنا',
          'عمال الرصيف المهجّرون في إعادة التطوير في الثمانينيات يحتفظون بمطالبات حقوق السكن والعمل التي لم يُعالَج بها رسمياً قط',
        ],
      },
      temporal: {
        en: [
          'Daily market open (08:00): financial algorithms assume territorial governance of all capital flows — 480 billion dollars transits this district before lunch',
          'Flood-surge warning: Thames Barrier governs this district\'s survival — a single infrastructure claim that overrides every other ownership',
        ],
        de: [
          'Tägliche Markteröffnung (08:00): Finanzalgorithmen übernehmen territoriale Governance aller Kapitalflüsse — 480 Milliarden Dollar durchqueren diesen Bezirk vor dem Mittagessen',
          'Flutwarnung: Das Themse-Sperrwerk regiert das Überleben dieses Bezirks — ein einziger Infrastrukturanspruch, der alle anderen Eigentumsrechte außer Kraft setzt',
        ],
        ru: [
          'Ежедневное открытие рынка (08:00): финансовые алгоритмы принимают территориальное управление всеми потоками капитала — 480 миллиардов долларов проходят через этот район до обеда',
          'Предупреждение о паводке: Барьер Темзы управляет выживанием этого района — единственная претензия инфраструктуры, которая отменяет все остальные права собственности',
        ],
        ar: [
          'افتتاح السوق اليومي (08:00): الخوارزميات المالية تتولى الحوكمة الإقليمية لجميع تدفقات رأس المال — 480 مليار دولار تعبر هذا الحي قبل الغداء',
          'تحذير ارتفاع الفيضانات: حاجز التايمز يحكم بقاء هذا الحي — مطالبة بنية تحتية واحدة تُبطل كل ملكية أخرى',
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
    {
      id: 'washington-square', type: 'square', lat: 40.7308, lng: -73.9973,
      name: { en: 'Washington Square Park', de: 'Washington Square Park', ru: 'Вашингтон-сквер-парк', ar: 'حديقة واشنطن سكوير' },
      atmo: {
        en: 'A park that has been a cemetery, an execution ground, a military parade field, and now an outdoor living room for a university that surrounds it on all sides. The arch belongs to no one. The chess players have been here longer than the arch.',
        de: 'Ein Park, der ein Friedhof, ein Hinrichtungsplatz, ein Militärparadenfeld war und jetzt ein Outdoor-Wohnzimmer für eine Universität ist, die ihn von allen Seiten umgibt. Der Bogen gehört niemandem. Die Schachspieler sind länger hier als der Bogen.',
        ru: 'Парк, бывший кладбищем, местом казни, военным плацем, а теперь уличной гостиной для университета, окружающего его со всех сторон. Арка никому не принадлежит. Шахматисты здесь дольше, чем арка.',
        ar: 'حديقة كانت مقبرة وساحة إعدام وميداناً للعرض العسكري وهي الآن غرفة معيشة خارجية لجامعة تحيط بها من كل الجوانب. القوس لا ينتمي لأحد. لاعبو الشطرنج هنا منذ أطول من القوس.',
      },
      owners: {
        en: [
          'NYU surrounds the park on three sides and has been attempting to acquire governance since 1969 — the community has blocked every formal annexation attempt',
          'The chess players at the southwest corner hold informal territorial governance — recognised by the park authority as customary right',
          'A dog run in the northwest corner has its own micro-governance body — the Dog Owners\' Association sets entrance protocols and settles disputes',
          'The fountain algorithm tracks gathering patterns and has pre-assigned spatial governance zones for: performers, students, tourists, and residents',
        ],
        de: [
          'NYU umgibt den Park an drei Seiten und versucht seit 1969, Governance zu erlangen — die Gemeinde hat jeden formalen Annexionsversuch blockiert',
          'Die Schachspieler an der Südwestecke halten informelle territoriale Governance — von der Parkverwaltung als Gewohnheitsrecht anerkannt',
          'Ein Hundeauslauf in der Nordwestecke hat seinen eigenen Micro-Governance-Körper — der Hundebesitzerverein setzt Eingangsprotokoll und schlegt Streitigkeiten',
          'Der Brunnenalgoritmus verfolgt Versammlungsmuster und hat räumliche Governance-Zonen vorab zugewiesen: Darsteller, Studenten, Touristen und Einwohner',
        ],
        ru: [
          'NYU окружает парк с трёх сторон и пытается получить управление с 1969 года — общество заблокировало каждую попытку формальной аннексии',
          'Шахматисты в юго-западном углу держат неформальное территориальное управление — признанное администрацией парка как обычное право',
          'Площадка для выгула собак в северо-западном углу имеет собственный орган микро-управления — Ассоциация владельцев собак устанавливает протоколы входа и разрешает споры',
          'Алгоритм фонтана отслеживает паттерны сборищ и заранее назначил пространственные зоны управления: артистам, студентам, туристам и жителям',
        ],
        ar: [
          'NYU تحيط بالحديقة من ثلاثة جوانب وتحاول الحصول على الحوكمة منذ 1969 — المجتمع أحبط كل محاولة ضم رسمية',
          'لاعبو الشطرنج في الزاوية الجنوبية الغربية يحتفظون بحوكمة إقليمية غير رسمية — معترف بها من قِبل سلطة الحديقة كحق عرفي',
          'منطقة الكلاب في الزاوية الشمالية الغربية لديها هيئة حوكمة صغيرة خاصة — جمعية أصحاب الكلاب تضع بروتوكولات الدخول وتفض النزاعات',
          'خوارزمية النافورة تتتبع أنماط التجمع وعيّنت مسبقاً مناطق حوكمة مكانية: للمؤدين والطلاب والسياح والمقيمين',
        ],
      },
      ghost: {
        en: [
          'Over 20,000 people buried here (1797–1825), primarily enslaved people and the poor — the park is a burial ground that has never been formally decommissioned',
          'The hanging elm tree (pre-1820) retains a judicial territorial memory — the state\'s earliest recorded use of the site as a place of execution',
        ],
        de: [
          'Über 20.000 hier begrabene Menschen (1797–1825), hauptsächlich versklavte Menschen und Arme — der Park ist ein Friedhof, der nie formell stillgelegt wurde',
          'Der hängende Ulmenbaum (vor 1820) behält eine justizielle territoriale Erinnerung — die früheste aufgezeichnete staatliche Nutzung des Geländes als Hinrichtungsplatz',
        ],
        ru: [
          'Более 20 000 человек, захороненных здесь (1797–1825), преимущественно порабощённые люди и бедняки — парк является захоронением, которое никогда официально не было выведено из эксплуатации',
          'Дерево вяза для повешений (до 1820 года) сохраняет судебную территориальную память — самое раннее зафиксированное использование территории государством как места казни',
        ],
        ar: [
          'أكثر من 20,000 شخص مدفون هنا (1797–1825)، في معظمهم أناس مستعبَدون وفقراء — الحديقة هي أرض دفن لم تُوقَف رسمياً عن الخدمة قط',
          'شجرة الدردار المشنقة (قبل 1820) تحتفظ بذاكرة إقليمية قضائية — أقدم استخدام مسجل للدولة للموقع كمكان إعدام',
        ],
      },
      temporal: {
        en: [
          'Summer weekend: 40 simultaneous performers assert competing acoustic governance zones — the park has no mechanism for resolving the overlap',
          'Winter (01:00): the park reverts to an older governance pattern — shelter-seeking, survival, and the pigeons',
        ],
        de: [
          'Sommerwochenende: 40 gleichzeitige Darsteller behaupten konkurrierende akustische Governance-Zonen — der Park hat keinen Mechanismus zur Lösung der Überlappung',
          'Winter (01:00): der Park kehrt zu einem älteren Governance-Muster zurück — Schutzsuche, Überleben und die Tauben',
        ],
        ru: [
          'Летние выходные: 40 одновременных исполнителей заявляют конкурирующие акустические зоны управления — у парка нет механизма для разрешения перекрытия',
          'Зима (01:00): парк возвращается к более старому паттерну управления — поиск укрытия, выживание и голуби',
        ],
        ar: [
          'عطلة نهاية أسبوع الصيف: 40 مؤدياً في وقت واحد يؤكدون مناطق حوكمة صوتية متنافسة — ليس للحديقة آلية لحل التداخل',
          'الشتاء (01:00): تعود الحديقة إلى نمط حوكمة أقدم — البحث عن المأوى والبقاء والحمام',
        ],
      },
    },
    {
      id: 'coney-island', type: 'waterfront', lat: 40.5755, lng: -73.9707,
      name: { en: 'Coney Island', de: 'Coney Island', ru: 'Кони-Айленд', ar: 'كوني آيلاند' },
      atmo: {
        en: 'A peninsula that used to be an island. The Brooklyn working class came here every summer for a century and the sand remembers all of them. Most of the old rides are gone. The new ones are smaller. The ocean does not know about any of this and does not care.',
        de: 'Eine Halbinsel, die früher eine Insel war. Die Brooklyner Arbeiterklasse kam hier jeden Sommer für ein Jahrhundert, und der Sand erinnert sich an alle. Die meisten alten Fahrgeschäfte sind weg. Die neuen sind kleiner. Der Ozean weiß nichts davon und kümmert sich nicht darum.',
        ru: 'Полуостров, который раньше был островом. Рабочий класс Бруклина приходил сюда каждое лето на протяжении века, и песок помнит всех их. Большинство старых аттракционов исчезло. Новые меньше. Океан ничего об этом не знает и не заботится.',
        ar: 'شبه جزيرة كانت ذات يوم جزيرة. الطبقة العاملة في بروكلين كانت تأتي هنا كل صيف لقرن من الزمن والرمال تتذكرهم جميعاً. معظم الألعاب القديمة اختفت. الجديدة أصغر. المحيط لا يعرف شيئاً عن هذا ولا يهتم.',
      },
      owners: {
        en: [
          'The Atlantic Ocean holds primary territorial governance of the beach — its annual claim expands and contracts with storm and season',
          'Nathan\'s Famous (operating since 1916) holds the longest commercial territorial claim on the boardwalk — 108 years of uninterrupted hot dog governance',
          'A colony of horseshoe crabs asserts ancient biological territorial rights on the eastern beach — breeding season claim predates every human settlement',
          'The MTA subway line holds a linear territorial claim extending 45km back to Manhattan — the governance of arrival and departure',
        ],
        de: [
          'Der Atlantische Ozean hält primäre territoriale Governance des Strandes — sein jährlicher Anspruch dehnt sich aus und zieht sich mit Sturm und Jahreszeit zusammen',
          'Nathan\'s Famous (seit 1916 in Betrieb) hält den längsten kommerziellen Territorialanspruch auf der Promenade — 108 Jahre ununterbrochene Hotdog-Governance',
          'Eine Kolonie von Pfeilschwanzkrebsen behauptet uralte biologische Territorialrechte am Oststrand — der Brutanspruch geht jeder menschlichen Siedlung voraus',
          'Die MTA-U-Bahnlinie hält einen linearen Territorialanspruch, der sich 45 km zurück nach Manhattan erstreckt — die Governance von Ankunft und Abfahrt',
        ],
        ru: [
          'Атлантический океан держит первичное территориальное управление пляжем — его ежегодная претензия расширяется и сжимается со штормом и сезоном',
          'Nathan\'s Famous (работает с 1916 года) держит самую длинную коммерческую территориальную претензию на набережной — 108 лет непрерывного управления хот-догами',
          'Колония подковообразных крабов заявляет об древних биологических территориальных правах на восточном пляже — сезонная претензия размножения предшествует каждому человеческому поселению',
          'Линия метро MTA держит линейную территориальную претензию, простирающуюся на 45 км обратно до Манхэттена — управление прибытием и отбытием',
        ],
        ar: [
          'المحيط الأطلسي يحتفظ بالحوكمة الإقليمية الأولية للشاطئ — مطالبته السنوية تتوسع وتتقلص مع العواصف والمواسم',
          'Nathan\'s Famous (تعمل منذ 1916) تحتفظ بأطول مطالبة إقليمية تجارية على الواجهة البحرية — 108 سنة من حوكمة النقانق المتواصلة',
          'مستعمرة سرطانات حدوة الحصان تؤكد حقوقاً إقليمية بيولوجية قديمة في الشاطئ الشرقي — مطالبة موسم التكاثر تسبق كل مستوطنة بشرية',
          'خط مترو MTA يحتفظ بمطالبة إقليمية خطية تمتد 45 كيلومتراً عائدة إلى مانهاتن — حوكمة الوصول والمغادرة',
        ],
      },
      ghost: {
        en: [
          'Dreamland (burnt 1911), Luna Park (burnt 1944), Steeplechase Park (demolished 1966) — three amusement parks that governed this shoreline retain overlapping spectral pleasure-claims',
          'A displaced Lenape fishing community\'s seasonal claim on the tidal zone predates all subsequent governance by centuries',
        ],
        de: [
          'Dreamland (verbrannt 1911), Luna Park (verbrannt 1944), Steeplechase Park (abgerissen 1966) — drei Vergnügungsparks, die diese Küstenlinie beherrschten, behalten überlappende spektrale Vergnügungsansprüche',
          'Der saisonale Anspruch einer vertriebenen Lenape-Fischergemeinschaft auf die Gezeitenzone geht jeder nachfolgenden Governance um Jahrhunderte voraus',
        ],
        ru: [
          'Dreamland (сгорел 1911), Luna Park (сгорел 1944), Steeplechase Park (снесён 1966) — три парка развлечений, управлявших этой береговой линией, сохраняют перекрывающиеся призрачные претензии на удовольствие',
          'Сезонная претензия перемещённой общины рыбаков ленапе на приливную зону предшествует всему последующему управлению на века',
        ],
        ar: [
          'دريملاند (احترق 1911)، لونا بارك (احترق 1944)، ستيبلتشيس بارك (هُدم 1966) — ثلاثة مدن ملاهٍ حكمت هذا الشاطئ تحتفظ بمطالبات متداخلة طيفية للمتعة',
          'المطالبة الموسمية لمجتمع صيادي لينابي المهجّرين على منطقة المد والجزر تسبق كل حوكمة لاحقة بقرون',
        ],
      },
      temporal: {
        en: [
          'Summer (July 4): the beach claims maximum human density — 1 million bodies temporarily govern 3km of shoreline with no formal agreement',
          'Winter (November–March): the ocean reclaims governance — boardwalk shuttered, resident pelicans assert their seasonal sovereignty',
        ],
        de: [
          'Sommer (4. Juli): der Strand beansprucht maximale menschliche Dichte — 1 Million Körper regieren vorübergehend 3 km Küstenlinie ohne formelle Vereinbarung',
          'Winter (November–März): der Ozean beansprucht Governance zurück — Promenade geschlossen, ansässige Pelikane behaupten ihre saisonale Souveränität',
        ],
        ru: [
          'Лето (4 июля): пляж претендует на максимальную человеческую плотность — 1 миллион тел временно управляет 3 км береговой линии без формального соглашения',
          'Зима (ноябрь–март): океан возвращает управление — набережная закрыта, местные пеликаны заявляют о своём сезонном суверенитете',
        ],
        ar: [
          'الصيف (4 يوليو): الشاطئ يطالب بأقصى كثافة بشرية — مليون جسد يحكم مؤقتاً 3 كيلومترات من الشاطئ بدون اتفاق رسمي',
          'الشتاء (نوفمبر–مارس): المحيط يستعيد الحوكمة — الواجهة البحرية مغلقة، والبجع المقيم يؤكد سيادته الموسمية',
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
    {
      id: 'giza', type: 'monument', lat: 29.9773, lng: 31.1325,
      name: { en: 'Giza Plateau', de: 'Gizeh-Plateau', ru: 'Плато Гиза', ar: 'هضبة الجيزة' },
      atmo: {
        en: 'Three tombs that became the most recognised silhouette on earth. The desert has been trying to reclaim them for 4,500 years. The sphinx is missing its nose — the absence is now as famous as anything that remains. The algorithm routes 15,000 tourists here daily.',
        de: 'Drei Gräber, die zur bekanntesten Silhouette der Erde wurden. Die Wüste versucht seit 4.500 Jahren, sie zurückzugewinnen. Der Sphinx fehlt seine Nase — die Abwesenheit ist jetzt so berühmt wie alles, was übrig bleibt. Der Algorithmus leitet täglich 15.000 Touristen hierher.',
        ru: 'Три гробницы, ставшие наиболее узнаваемым силуэтом на земле. Пустыня пытается вернуть их 4500 лет. У Сфинкса нет носа — отсутствие теперь так же знаменито, как всё, что осталось. Алгоритм направляет сюда 15 000 туристов ежедневно.',
        ar: 'ثلاثة مقابر أصبحت أكثر الصور الظلية شهرة على وجه الأرض. الصحراء تحاول استردادها منذ 4500 عام. الأبو الهول تنقصه أنفه — الغياب الآن بشهرة كل ما تبقى. الخوارزمية توجّه 15,000 سائح هنا يومياً.',
      },
      owners: {
        en: [
          'The Egyptian state claims administrative governance but the pyramids have always governed themselves — no bureaucracy survives longer than the stones',
          'The desert wind holds atmospheric sovereignty over the plateau — it has been filling the structures with sand since construction ended',
          'A camel-riding network holds informal territorial governance of the approach routes — claims inherited across generations, older than the tourism industry',
          'The Supreme Council of Antiquities controls all photographic territorial rights — every image taken here is technically licensed',
        ],
        de: [
          'Der ägyptische Staat beansprucht administrative Governance, aber die Pyramiden haben sich immer selbst regiert — keine Bürokratie überlebt länger als die Steine',
          'Der Wüstenwind hält atmosphärische Souveränität über das Plateau — er füllt die Strukturen seit Bauabschluss mit Sand',
          'Ein Kamelreitnetz hält informelle territoriale Governance der Zugangsrouten — über Generationen vererbte Ansprüche, älter als die Tourismusbranche',
          'Der Oberste Rat für Altertümer kontrolliert alle fotografischen Territoriumsrechte — jedes hier aufgenommene Bild ist technisch lizenziert',
        ],
        ru: [
          'Египетское государство претендует на административное управление, но пирамиды всегда управляли собой сами — ни одна бюрократия не переживает камни',
          'Пустынный ветер держит атмосферный суверенитет над плато — он заполняет строения песком с момента окончания строительства',
          'Сеть верблюдовождения держит неформальное территориальное управление маршрутами подхода — претензии, унаследованные через поколения, старше туристической отрасли',
          'Высший совет по древностям контролирует все права на фотографию территории — каждое сделанное здесь изображение технически лицензировано',
        ],
        ar: [
          'الدولة المصرية تطالب بالحوكمة الإدارية لكن الأهرامات دائماً حكمت نفسها — لا بيروقراطية تعيش أطول من الأحجار',
          'رياح الصحراء تحتفظ بالسيادة الجوية على الهضبة — تملأ المنشآت بالرمل منذ انتهاء البناء',
          'شبكة ركوب الجمال تحتفظ بحوكمة إقليمية غير رسمية لمسارات الاقتراب — مطالبات موروثة عبر الأجيال، أقدم من صناعة السياحة',
          'المجلس الأعلى للآثار يتحكم في جميع حقوق التصوير الإقليمية — كل صورة تُلتقط هنا مرخّصة تقنياً',
        ],
      },
      ghost: {
        en: [
          'The 100,000 workers who built the pyramids (per Herodotus — the actual number is disputed) retain a foundational labour claim that predates all property law',
          'The original casing stones (stripped 1356 CE for Cairo\'s buildings) hold a dispersed territorial claim across every 14th-century structure in the city',
        ],
        de: [
          'Die 100.000 Arbeiter, die die Pyramiden bauten (nach Herodot — die tatsächliche Zahl ist umstritten), behalten einen grundlegenden Arbeitsanspruch, der allem Eigentumsrecht vorausgeht',
          'Die ursprünglichen Verkleidungssteine (1356 n.Chr. für Kairos Gebäude abgetragen) halten einen verstreuten Territorialanspruch in jedem Bauwerk des 14. Jahrhunderts in der Stadt',
        ],
        ru: [
          '100 000 рабочих, строивших пирамиды (по Геродоту — фактическое число оспаривается), сохраняют основополагающую трудовую претензию, предшествующую всему имущественному праву',
          'Оригинальные облицовочные камни (снятые в 1356 г. н.э. для зданий Каира) держат рассредоточенную территориальную претензию в каждом строении XIV века в городе',
        ],
        ar: [
          '100,000 عامل بنوا الأهرامات (وفقاً لهيرودوت — العدد الفعلي محل خلاف) يحتفظون بمطالبة عمالية تأسيسية تسبق كل قانون ملكية',
          'أحجار الكسوة الأصلية (أُزيلت عام 1356 م لمباني القاهرة) تحتفظ بمطالبة إقليمية موزعة في كل منشأة من القرن الرابع عشر في المدينة',
        ],
      },
      temporal: {
        en: [
          'Sunrise: the plateau claims its original governance function — the stones align with celestial events that predate every human institution on earth',
          'Desert wind event (khamsin): the plateau governance briefly reverts to sand, stone, and the wind — all tourist infrastructure becomes secondary',
        ],
        de: [
          'Sonnenaufgang: das Plateau beansprucht seine ursprüngliche Governance-Funktion — die Steine richten sich an Himmelserereignissen aus, die jeder menschlichen Institution auf Erden vorangehen',
          'Wüstenwinde (Khamsin): die Plateau-Governance kehrt kurzzeitig zu Sand, Stein und Wind zurück — alle touristische Infrastruktur wird sekundär',
        ],
        ru: [
          'Рассвет: плато претендует на свою первоначальную функцию управления — камни выровнены по небесным событиям, предшествующим каждому человеческому учреждению на земле',
          'Событие пустынного ветра (хамсин): управление плато ненадолго возвращается к песку, камню и ветру — вся туристическая инфраструктура становится второстепенной',
        ],
        ar: [
          'الشروق: الهضبة تطالب بوظيفتها الحوكمية الأصلية — الأحجار تتوافق مع أحداث سماوية تسبق كل مؤسسة بشرية على وجه الأرض',
          'حدث رياح الصحراء (الخماسين): حوكمة الهضبة تعود مؤقتاً إلى الرمل والحجر والريح — كل البنية التحتية السياحية تصبح ثانوية',
        ],
      },
    },
    {
      id: 'al-azhar-park', type: 'park', lat: 30.0459, lng: 31.2628,
      name: { en: 'Al-Azhar Park', de: 'Al-Azhar-Park', ru: 'Парк Аль-Азхар', ar: 'حديقة الأزهر' },
      atmo: {
        en: 'A park built on 500 years of rubble in the middle of Islamic Cairo. Excavation revealed a Fatimid wall no one knew was there. The trees are planted on medieval infrastructure. From here you can see the minarets of a thousand years of governance arrangements, all simultaneously.',
        de: 'Ein Park, der auf 500 Jahre Schutt mitten im islamischen Kairo gebaut wurde. Ausgrabungen enthüllten eine fatimidische Mauer, von der niemand wusste, dass sie dort war. Die Bäume sind auf mittelalterlicher Infrastruktur gepflanzt. Von hier aus können Sie die Minarette von tausend Jahren Governance-Arrangements sehen, alle gleichzeitig.',
        ru: 'Парк, построенный на 500-летних завалах в центре исламского Каира. Раскопки обнаружили фатимидскую стену, о которой никто не знал. Деревья посажены на средневековой инфраструктуре. Отсюда видны минареты тысячи лет управленческих устройств, всех одновременно.',
        ar: 'حديقة مبنية على 500 عام من الركام في قلب القاهرة الإسلامية. كشف الحفر عن سور فاطمي لم يكن أحد يعلم بوجوده. الأشجار مزروعة على بنية تحتية من العصور الوسطى. من هنا يمكنك رؤية مآذن ألف عام من ترتيبات الحوكمة، كلها في وقت واحد.',
      },
      owners: {
        en: [
          'The Aga Khan Trust for Culture holds surface governance since 2005 — the first greenery on this site in five centuries',
          'The Fatimid wall (built 1087 CE) — rediscovered during park construction — asserts structural governance beneath all landscape design',
          'The Ayyubid-era Darb al-Ahmar neighbourhood below holds a residual visual-sovereignty claim on the park\'s eastern slope',
          'Migratory birds hold a seasonal aerial-governance claim — the park is the only significant green corridor in this part of the city',
        ],
        de: [
          'Der Aga Khan Trust for Culture hält Oberflächengovernance seit 2005 — das erste Grün an diesem Standort seit fünf Jahrhunderten',
          'Die Fatimidenmauer (gebaut 1087 n.Chr.) — beim Parkbau wiederentdeckt — behauptet strukturelle Governance unter allem Landschaftsdesign',
          'Das Ayyubidische Viertel Darb al-Ahmar darunter hält einen verbleibenden visuellen Souveränitätsanspruch am östlichen Hang des Parks',
          'Zugvögel halten einen saisonalen Luftgovernance-Anspruch — der Park ist der einzige bedeutende Grünkorridor in diesem Teil der Stadt',
        ],
        ru: [
          'Aga Khan Trust for Culture держит поверхностное управление с 2005 года — первая зелень на этом участке за пять веков',
          'Фатимидская стена (построена в 1087 г. н.э.) — обнаруженная при строительстве парка — заявляет о структурном управлении под всем ландшафтным дизайном',
          'Квартал Дарб аль-Ахмар эпохи Айюбидов внизу сохраняет остаточную претензию визуального суверенитета на восточный склон парка',
          'Перелётные птицы держат сезонную претензию воздушного управления — парк является единственным значимым зелёным коридором в этой части города',
        ],
        ar: [
          'مؤسسة الآغا خان للثقافة تحتفظ بحوكمة السطح منذ 2005 — أول خضرة في هذا الموقع منذ خمسة قرون',
          'السور الفاطمي (بُني 1087 م) — اكتُشف أثناء إنشاء الحديقة — يؤكد الحوكمة الهيكلية تحت كل تصميم للمناظر الطبيعية',
          'حي درب الأحمر من العصر الأيوبي الأسفل يحتفظ بمطالبة سيادة بصرية متبقية على المنحدر الشرقي للحديقة',
          'الطيور المهاجرة تحتفظ بمطالبة حوكمة جوية موسمية — الحديقة هي الممر الأخضر الوحيد الكبير في هذا الجزء من المدينة',
        ],
      },
      ghost: {
        en: [
          'The 500 years of rubble (1517–1984) beneath the park contains layered debris of Ottoman, Mamluk and Fatimid governance — the park is built on compressed history',
          'A Mamluk-era aqueduct (partly buried here) retains a water-governance claim that pre-dates every institution currently operating in the city',
        ],
        de: [
          'Die 500 Jahre Schutt (1517–1984) unter dem Park enthält geschichtete Trümmer osmanischer, mamlukischer und fatimidischer Governance — der Park ist auf komprimierter Geschichte gebaut',
          'Ein mamluken-zeitlicher Aquädukt (hier teilweise begraben) behält einen Wassergovernance-Anspruch, der jeder derzeit in der Stadt tätigen Institution vorausgeht',
        ],
        ru: [
          '500 лет завалов (1517–1984) под парком содержат многослойные обломки османского, мамлюкского и фатимидского управления — парк построен на уплотнённой истории',
          'Мамлюкский акведук (частично захороненный здесь) сохраняет претензию водного управления, предшествующую каждому учреждению, действующему в настоящее время в городе',
        ],
        ar: [
          '500 عام من الركام (1517–1984) تحت الحديقة يحتوي على طبقات من حطام حوكمة عثمانية ومملوكية وفاطمية — الحديقة مبنية على تاريخ مضغوط',
          'قناة مياه من العصر المملوكي (مدفونة جزئياً هنا) تحتفظ بمطالبة حوكمة مائية تسبق كل مؤسسة تعمل حالياً في المدينة',
        ],
      },
      temporal: {
        en: [
          'Ramadan evenings: the park becomes the primary outdoor social space for surrounding neighbourhoods — governance passes to families and extended gatherings',
          'Midday heat (June–August): the park governance reverts to shade trees and underground water — humans yield to the temperature',
        ],
        de: [
          'Ramadan-Abende: der Park wird zum primären Outdoor-Sozialraum der umliegenden Viertel — Governance übergeht an Familien und erweiterte Zusammenkünfte',
          'Mittagshitze (Juni–August): die Parkgovernance kehrt zu Schattenbäumen und unterirdischem Wasser zurück — Menschen weichen der Temperatur',
        ],
        ru: [
          'Вечера Рамадана: парк становится основным уличным социальным пространством для окружающих кварталов — управление переходит к семьям и расширенным собраниям',
          'Полуденная жара (июнь–август): управление парком возвращается к тенистым деревьям и подземной воде — люди уступают температуре',
        ],
        ar: [
          'أمسيات رمضان: تصبح الحديقة المساحة الاجتماعية الخارجية الأساسية للأحياء المحيطة — تنتقل الحوكمة إلى الأسر والتجمعات الموسّعة',
          'حرارة الظهيرة (يونيو–أغسطس): حوكمة الحديقة تعود إلى الأشجار المظلّلة والمياه تحت الأرض — يستسلم البشر لدرجة الحرارة',
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
    {
      id: 'juhu', type: 'waterfront', lat: 19.0954, lng: 72.8307,
      name: { en: 'Juhu Beach', de: 'Juhu Beach', ru: 'Пляж Джуху', ar: 'شاطئ جوهو' },
      atmo: {
        en: 'The beach where Bollywood and bhelpuri exist simultaneously. On any given evening, a film star might be walking past a food cart past a cricket match past a religious offering being made to the sea. The Arabian Sea does not distinguish between any of these activities.',
        de: 'Der Strand, wo Bollywood und Bhelpuri gleichzeitig existieren. An einem bestimmten Abend könnte ein Filmstar an einem Imbisswagen vorbeilaufen, an einem Cricket-Spiel, an einer religiösen Gabe, die dem Meer dargebracht wird. Das Arabische Meer unterscheidet keine dieser Aktivitäten.',
        ru: 'Пляж, где Болливуд и бхелпури сосуществуют одновременно. В любой вечер кинозвезда может проходить мимо тележки с едой, мимо матча по крикету, мимо религиозного приношения, совершаемого морю. Аравийское море не различает ни одного из этих занятий.',
        ar: 'الشاطئ حيث يتعايش بوليوود والبهيل بوري في آنٍ واحد. في أي مساء، قد تمر نجمة أفلام أمام عربة طعام أمام مباراة كريكت أمام قربان ديني يُقدَّم للبحر. بحر العرب لا يميّز بين أيٍّ من هذه الأنشطة.',
      },
      owners: {
        en: [
          'The Arabian Sea claims the intertidal zone — its seasonal boundary shift during monsoon asserts a 50m territorial expansion',
          'Street food vendors hold territorial governance of the evening esplanade — cooking oil smoke marks the boundary more reliably than any official sign',
          'A Ganesh immersion network claims the beach for 11 days every year — the most organised periodic sovereignty event in the city',
          'Film industry location scouts have informally designated several sections as set-territory — no permit, but effective exclusion during shoots',
        ],
        de: [
          'Das Arabische Meer beansprucht die Gezeitenzone — seine saisonale Grenzverschiebung während des Monsuns behauptet eine territoriale Expansion von 50 m',
          'Straßenimbissverkäufer halten territoriale Governance der Abendpromenade — Kochölrauch markiert die Grenze zuverlässiger als jedes offizielle Schild',
          'Ein Ganesh-Eintauchungsnetzwerk beansprucht den Strand jedes Jahr für 11 Tage — das am besten organisierte periodische Souveränitätsereignis in der Stadt',
          'Filmbranche-Location-Scouts haben informell mehrere Abschnitte als Set-Territorium designiert — keine Genehmigung, aber effektiver Ausschluss während der Dreharbeiten',
        ],
        ru: [
          'Аравийское море претендует на приливно-отливную зону — его сезонный сдвиг границы во время муссона заявляет о территориальном расширении на 50 м',
          'Уличные торговцы едой держат территориальное управление вечерней набережной — дым кулинарного масла отмечает границу надёжнее, чем любой официальный знак',
          'Сеть погружения Ганеши претендует на пляж на 11 дней каждый год — самое организованное периодическое событие суверенитета в городе',
          'Скауты кино-индустрии по поиску локаций неофициально обозначили несколько секций как территорию съёмочных площадок — нет разрешения, но эффективное исключение во время съёмок',
        ],
        ar: [
          'بحر العرب يطالب بمنطقة المد والجزر — التحول الموسمي لحدوده أثناء موسم الأمطار يؤكد توسعاً إقليمياً بمقدار 50 متراً',
          'باعة الأكل الشارعي يحتفظون بحوكمة إقليمية لشارع المشاة المسائي — دخان زيت الطهي يحدد الحدود بشكل أكثر موثوقية من أي لافتة رسمية',
          'شبكة غمر جانيش تطالب بالشاطئ لمدة 11 يوماً كل عام — أكثر حدث سيادة دوري تنظيماً في المدينة',
          'كشّافو مواقع التصوير السينمائي حددوا بشكل غير رسمي عدة أقسام كإقليم مجموعة تصوير — لا تصريح، لكن استبعاد فعلي أثناء التصوير',
        ],
      },
      ghost: {
        en: [
          'The original Koli fishing village (pre-colonial) retains coastal habitation rights on the northern section — a legal dispute active since 1947',
          'The 1899 plague clearances removed an entire settlement from this beachfront — the displaced community\'s territorial claim was never compensated',
        ],
        de: [
          'Das ursprüngliche Koli-Fischerdorf (vorkolonial) behält Küstenwohnrechte im nördlichen Abschnitt — ein Rechtsstreit aktiv seit 1947',
          'Die Pestbereinigungen von 1899 entfernten eine gesamte Siedlung von dieser Strandfront — der Territorialanspruch der vertriebenen Gemeinde wurde nie entschädigt',
        ],
        ru: [
          'Оригинальная рыбацкая деревня Коли (доколониальная) сохраняет прибрежные права на жильё в северном секторе — правовой спор активен с 1947 года',
          'Расчистки от чумы 1899 года удалили целое поселение с этой набережной — территориальная претензия перемещённого сообщества так и не была компенсирована',
        ],
        ar: [
          'قرية الصيادين الكولية الأصلية (ما قبل الاستعمار) تحتفظ بحقوق سكن ساحلية في القسم الشمالي — نزاع قانوني نشط منذ 1947',
          'عمليات الإخلاء من الطاعون عام 1899 أزالت مستوطنة كاملة من هذه الواجهة البحرية — مطالبة المجتمع المهجّر الإقليمية لم تُعوَّض قط',
        ],
      },
      temporal: {
        en: [
          'Ganesh Chaturthi (August/September): 11 days of collective territorial reclamation — the beach governance completely inverted',
          'Monsoon (June–September): the sea expands its territorial claim by approximately 30m and the beach governance collapses entirely',
        ],
        de: [
          'Ganesh Chaturthi (August/September): 11 Tage kollektiver territorialer Rückforderung — die Strand-Governance vollständig umgekehrt',
          'Monsun (Juni–September): das Meer erweitert seinen Territorialanspruch um ca. 30 m und die Strand-Governance bricht vollständig zusammen',
        ],
        ru: [
          'Ганеш-чатурти (август/сентябрь): 11 дней коллективного территориального возврата — управление пляжем полностью перевёрнуто',
          'Муссон (июнь–сентябрь): море расширяет свою территориальную претензию примерно на 30 м и управление пляжем полностью рушится',
        ],
        ar: [
          'غانيش تشاتورثي (أغسطس/سبتمبر): 11 يوماً من الاسترداد الإقليمي الجماعي — حوكمة الشاطئ تنقلب كلياً',
          'موسم الأمطار (يونيو–سبتمبر): البحر يوسّع مطالبته الإقليمية بنحو 30 متراً وتنهار حوكمة الشاطئ كلياً',
        ],
      },
    },
    {
      id: 'colaba', type: 'district', lat: 18.9176, lng: 72.8328,
      name: { en: 'Colaba', de: 'Colaba', ru: 'Колаба', ar: 'كولابا' },
      atmo: {
        en: 'The southern tip of Mumbai, where the city remembers being a cluster of islands. The Causeway is one of the oldest streets still in continuous commercial use. Behind every tourist-facing facade is a building in which five different uses are happening on different floors simultaneously.',
        de: 'Die südliche Spitze Mumbais, wo die Stadt daran erinnert, eine Inselgruppe zu sein. Der Causeway ist eine der ältesten Straßen, die noch kontinuierlich kommerziell genutzt werden. Hinter jeder touristenorientierten Fassade befindet sich ein Gebäude, in dem fünf verschiedene Nutzungen auf verschiedenen Etagen gleichzeitig stattfinden.',
        ru: 'Южная оконечность Мумбаи, где город помнит, что был кластером островов. Дамба — одна из старейших улиц, всё ещё находящихся в непрерывном коммерческом использовании. За каждым фасадом, обращённым к туристам, есть здание, в котором пять различных видов использования происходят на разных этажах одновременно.',
        ar: 'الطرف الجنوبي من مومباي حيث تتذكر المدينة أنها كانت مجموعة جزر. الجسر هو أحد أقدم الشوارع لا تزال في استخدام تجاري مستمر. خلف كل واجهة موجهة للسياح يوجد مبنى يجري فيه خمسة استخدامات مختلفة في طوابق مختلفة في وقت واحد.',
      },
      owners: {
        en: [
          'The Indian Navy holds governance of the entire southern peninsula below the Taj — a military territorial claim that overrides tourism at any moment',
          'The Taj Mahal Palace Hotel (built 1903) holds visual sovereignty over the waterfront — its silhouette governs the approach from every direction',
          'Afghan gem traders hold informal territorial governance of the eastern Causeway — a continuous commercial presence since the 1960s',
          'Feral cats hold the governance of the back lanes — 200+ documented animals, territorial zones inherited over multiple cat generations',
        ],
        de: [
          'Die indische Marine hält Governance über die gesamte südliche Halbinsel unterhalb des Taj — ein militärischer Territorialanspruch, der den Tourismus jederzeit außer Kraft setzt',
          'Das Taj Mahal Palace Hotel (gebaut 1903) hält visuelle Souveränität über die Uferpromenade — seine Silhouette regiert die Annäherung aus jeder Richtung',
          'Afghanische Edelsteinhändler halten informelle territoriale Governance des östlichen Causeways — eine kontinuierliche kommerzielle Präsenz seit den 1960er Jahren',
          'Verwilderte Katzen halten die Governance der Hintergassen — 200+ dokumentierte Tiere, Territorialzonen über mehrere Katzengenerationen vererbt',
        ],
        ru: [
          'Индийский военно-морской флот держит управление всем южным полуостровом ниже Тадж — военная территориальная претензия, отменяющая туризм в любой момент',
          'Отель «Тадж-Махал Палас» (построен в 1903 году) держит визуальный суверенитет над набережной — его силуэт управляет подходом со всех сторон',
          'Афганские торговцы драгоценными камнями держат неформальное территориальное управление восточной дамбой — непрерывное коммерческое присутствие с 1960-х годов',
          'Бродячие кошки держат управление задними переулками — 200+ задокументированных животных, территориальные зоны, унаследованные через несколько поколений кошек',
        ],
        ar: [
          'البحرية الهندية تحتفظ بحوكمة شبه الجزيرة الجنوبية بأكملها أسفل تاج — مطالبة إقليمية عسكرية تُبطل السياحة في أي لحظة',
          'فندق تاج محل بالاس (بُني 1903) يحتفظ بالسيادة البصرية على الواجهة البحرية — صورته الظلية تحكم الاقتراب من كل اتجاه',
          'تجار الأحجار الكريمة الأفغان يحتفظون بحوكمة إقليمية غير رسمية للجسر الشرقي — حضور تجاري مستمر منذ الستينيات',
          'القطط البرية تحتفظ بحوكمة الأزقة الخلفية — أكثر من 200 حيوان موثّق، مناطق إقليمية موروثة عبر أجيال متعددة من القطط',
        ],
      },
      ghost: {
        en: [
          'The original Koli island settlement (pre-reclamation) retains a submerged territorial claim beneath the causeway landfill — the land was sea within living memory of 1900',
          'The 2008 Mumbai attacks — Taj Hotel, Leopold Cafe, CST station — left a governance trauma-claim across multiple sites that tourism has not resolved',
        ],
        de: [
          'Die ursprüngliche Koli-Inselsiedlung (vor der Aufschüttung) behält einen versunkenen Territorialanspruch unter der Causeway-Aufschüttung — das Land war innerhalb lebendiger Erinnerung von 1900 Meer',
          'Die Anschläge in Mumbai 2008 — Taj Hotel, Leopold Cafe, CST-Station — hinterließen einen Governance-Trauma-Anspruch über mehrere Standorte, den der Tourismus nicht gelöst hat',
        ],
        ru: [
          'Оригинальное поселение Коли на острове (до засыпки) сохраняет затопленную территориальную претензию под засыпкой дамбы — земля была морем в живой памяти 1900 года',
          'Теракты в Мумбаи 2008 года — отель «Тадж», кафе «Леопольд», станция CST — оставили претензию травмы управления на нескольких объектах, которую туризм не разрешил',
        ],
        ar: [
          'مستوطنة جزيرة كولي الأصلية (ما قبل الردم) تحتفظ بمطالبة إقليمية مغمورة تحت ردم الجسر — الأرض كانت بحراً في ذاكرة حية لعام 1900',
          'هجمات مومباي 2008 — فندق تاج وكافيه ليوبولد ومحطة CST — تركت مطالبة حوكمة صدمية عبر مواقع متعددة لم تحلها السياحة',
        ],
      },
      temporal: {
        en: [
          'Evening (18:00–22:00): the Causeway shifts from tourist market to local gathering — governance passes from commerce to community',
          'Monsoon storm surge: the southern tip reverts to its geological nature — the sea briefly remembers the islands',
        ],
        de: [
          'Abend (18:00–22:00): der Causeway wechselt vom Touristenmarkt zur lokalen Versammlung — Governance geht von Handel zu Gemeinschaft über',
          'Monsunwellensturm: die südliche Spitze kehrt zu ihrer geologischen Natur zurück — das Meer erinnert sich kurz an die Inseln',
        ],
        ru: [
          'Вечер (18:00–22:00): дамба переходит от туристического рынка к местным собраниям — управление переходит от торговли к сообществу',
          'Штормовой нагон муссона: южная оконечность возвращается к своей геологической природе — море ненадолго вспоминает острова',
        ],
        ar: [
          'المساء (18:00–22:00): ينتقل الجسر من سوق سياحي إلى تجمع محلي — تنتقل الحوكمة من التجارة إلى المجتمع',
          'عاصفة مد موسم الأمطار: الطرف الجنوبي يعود إلى طبيعته الجيولوجية — البحر يتذكر الجزر للحظة',
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

    {
      id: 'bourj-hammoud', type: 'market', lat: 33.8882, lng: 35.5353,
      name: { en: 'Bourj Hammoud', de: 'Bourj Hammoud', ru: 'Бурдж-Хаммуд', ar: 'برج حمود' },
      atmo: {
        en: 'The most colourful square kilometre in Beirut. Jewellery shops hang their gold above butcher stalls. Armenian script alternates with Arabic. The streets were built by refugees who had nowhere else to go and made the most vivid place in the city.',
        de: 'Der bunteste Quadratkilometer in Beirut. Schmuckgeschäfte hängen ihr Gold über Metzgerständen. Armenische Schrift wechselt sich mit Arabisch ab. Die Straßen wurden von Flüchtlingen gebaut, die keinen anderen Ort hatten und den lebendigsten Ort der Stadt schufen.',
        ru: 'Самый яркий квадратный километр Бейрута. Ювелирные магазины вешают своё золото над мясными прилавками. Армянский шрифт чередуется с арабским. Улицы были построены беженцами, которым некуда было идти, и которые создали самое яркое место в городе.',
        ar: 'أكثر كيلومتر مربع ألواناً في بيروت. محلات المجوهرات تعلّق ذهبها فوق أكشاك الجزارين. الخط الأرمني يتناوب مع العربي. بُنيت الشوارع من قِبل لاجئين لم يكن لديهم مكان آخر يذهبون إليه وصنعوا أكثر مكان حيوياً في المدينة.',
      },
      owners: {
        en: [
          'The Armenian diaspora community holds continuous cultural and commercial governance since the genocide survivors arrived in 1915–1920',
          'The gold souk\'s jewellers assert collective price-governance over all precious metal transactions in greater Beirut',
          'The Nahr el-Mott river (now buried underground) retains a geological territorial claim beneath every building in the district',
          'The scent algorithm of cardamom, raw meat, and motor oil has established olfactory governance that overrides all zoning designations',
        ],
        de: [
          'Die armenische Diasporagemeinschaft hält seit dem Eintreffen der Überlebenden des Völkermords 1915–1920 kontinuierliche kulturelle und kommerzielle Governance',
          'Die Juweliere des Goldsouk behaupten kollektive Preisgovernance über alle Edelmetalltransaktionen im Großraum Beirut',
          'Der Fluss Nahr el-Mott (jetzt unterirdisch begraben) behält einen geologischen Territorialanspruch unter jedem Gebäude im Viertel',
          'Der Duftalgoritmus aus Kardamom, rohem Fleisch und Motoröl hat eine Geruchs-Governance etabliert, die alle Zonierungsbezeichnungen außer Kraft setzt',
        ],
        ru: [
          'Армянская диаспорная община держит непрерывное культурное и коммерческое управление с тех пор, как выжившие после геноцида прибыли в 1915–1920 годах',
          'Ювелиры золотого сука заявляют о коллективном ценовом управлении всеми сделками с драгоценными металлами в большом Бейруте',
          'Река Нахр-эль-Мотт (ныне похороненная под землёй) сохраняет геологическую территориальную претензию под каждым зданием в районе',
          'Алгоритм запаха кардамона, сырого мяса и моторного масла установил обонятельное управление, которое отменяет все зональные обозначения',
        ],
        ar: [
          'مجتمع الشتات الأرمني يحتفظ بالحوكمة الثقافية والتجارية المستمرة منذ وصول الناجين من الإبادة الجماعية عامَي 1915–1920',
          'صاغة سوق الذهب يؤكدون حوكمة سعر جماعية على جميع المعاملات المعدنية الثمينة في بيروت الكبرى',
          'نهر نهر الموت (المدفون الآن تحت الأرض) يحتفظ بمطالبة إقليمية جيولوجية تحت كل مبنى في الحي',
          'خوارزمية رائحة الهيل واللحم النيء وزيت المحرك أسّست حوكمة شمية تتجاوز جميع التسميات التقسيمية',
        ],
      },
      ghost: {
        en: [
          'The genocide memory (1915) is embedded in the district\'s founding logic — every commercial transaction here is also an act of survival testimony',
          'The pre-war mixed neighbourhood (Christians, Muslims, Armenians coexisting before 1975) holds a residual plural governance claim',
        ],
        de: [
          'Das Völkermordsgedächtnis (1915) ist in die Gründungslogik des Viertels eingebettet — jede Handelstransaktion hier ist auch ein Akt des Überlebenstestimoniams',
          'Das gemischte Vorkriegsviertel (Christen, Muslime, Armenier, die vor 1975 koexistierten) hält einen verbleibenden pluralen Governance-Anspruch',
        ],
        ru: [
          'Память геноцида (1915) встроена в основополагающую логику района — каждая торговая сделка здесь также является актом свидетельства о выживании',
          'Смешанный довоенный квартал (христиане, мусульмане, армяне, сосуществовавшие до 1975 года) держит остаточную плюральную претензию управления',
        ],
        ar: [
          'ذاكرة الإبادة الجماعية (1915) متجذرة في منطق تأسيس الحي — كل معاملة تجارية هنا هي أيضاً فعل شهادة على النجاة',
          'الحي المختلط ما قبل الحرب (مسيحيون ومسلمون وأرمن تعايشوا قبل 1975) يحتفظ بمطالبة حوكمة تعددية متبقية',
        ],
      },
      temporal: {
        en: [
          'April 24 (Armenian Genocide Remembrance Day): the district\'s commercial activity pauses and grief temporarily becomes the governing mode',
          'Friday afternoon: the gold souk achieves peak price-governance — more carats change hands here per hour than anywhere else in Lebanon',
        ],
        de: [
          '24. April (Armenischer Gedenktag): Die kommerzielle Aktivität des Viertels pausiert und Trauer wird vorübergehend zum Governance-Modus',
          'Freitagsnachmittag: Der Goldsouk erreicht Preisgouvernanz auf Spitzenniveau — mehr Karat wechseln hier pro Stunde den Besitzer als irgendwo sonst im Libanon',
        ],
        ru: [
          '24 апреля (День памяти жертв Геноцида армян): коммерческая деятельность района делает паузу, и горе временно становится управляющим режимом',
          'Пятница во второй половине дня: золотой сук достигает пикового ценового управления — больше каратов меняет владельцев здесь в час, чем где-либо ещё в Ливане',
        ],
        ar: [
          '24 أبريل (يوم إحياء ذكرى الإبادة الجماعية الأرمنية): يتوقف النشاط التجاري في الحي ويصبح الحزن مؤقتاً نمط الحوكمة',
          'بعد ظهر الجمعة: يحقق سوق الذهب ذروة حوكمة الأسعار — يتغير هنا مزيد من القراريط في الساعة أكثر من أي مكان آخر في لبنان',
        ],
      },
    },

    {
      id: 'achrafieh', type: 'district', lat: 33.8889, lng: 35.5175,
      name: { en: 'Achrafieh', de: 'Achrafieh', ru: 'Ашрафие', ar: 'الأشرفية' },
      atmo: {
        en: 'The old east. Triple-arched windows look down on staircases that connect street levels nobody has mapped. The buildings are Ottoman and French and bullet-scarred and somehow still standing. Cats govern the stairs. Nobody disputes this.',
        de: 'Der alte Osten. Dreifach-Bogenfenster blicken auf Treppen hinab, die Straßenebenen verbinden, die niemand kartiert hat. Die Gebäude sind osmanisch und französisch und vernarbt von Kugeln und irgendwie noch stehend. Katzen regieren die Treppen. Niemand bestreitet das.',
        ru: 'Старый восток. Тройные арочные окна смотрят на лестницы, соединяющие уровни улиц, которые никто не нанёс на карту. Здания — османские и французские, покрытые пулевыми шрамами, и каким-то образом всё ещё стоящие. Кошки управляют лестницами. Никто это не оспаривает.',
        ar: 'الشرق القديم. نوافذ ذات أقواس ثلاثية تطل على سلالم تربط مستويات شوارع لم يرسمها أحد. المباني عثمانية وفرنسية ومثقوبة بالرصاص وما زالت واقفة بطريقة ما. القطط تحكم السلالم. لا أحد يعترض على ذلك.',
      },
      owners: {
        en: [
          'The Sursock family (19th century landowners) retains hereditary property claims over a significant portion of the original plots',
          'The Maronite Church holds ecclesiastical territorial sovereignty over the hilltop and its sightlines across the city',
          'A colony of cats with no registered owner holds de facto governance of every staircase, rooftop, and interior courtyard',
          'The French Mandate urban grid (1920s) still determines all building setbacks and street widths — a colonial governance that outlasted the colony',
        ],
        de: [
          'Die Familie Sursock (Landbesitzer des 19. Jahrhunderts) behält erbliche Eigentumsansprüche über einen bedeutenden Teil der ursprünglichen Parzellen',
          'Die maronitische Kirche hält kirchliche territoriale Souveränität über den Hügel und seine Sichtlinien über die Stadt',
          'Eine Kolonie von Katzen ohne registrierten Besitzer hält de facto Governance über jede Treppe, jeden Dachboden und Innenhof',
          'Das städtische Rastersystem des französischen Mandats (1920er Jahre) bestimmt immer noch alle Gebäudeabstände und Straßenbreiten — eine koloniale Governance, die die Kolonie überlebte',
        ],
        ru: [
          'Семья Сурсок (землевладельцы 19-го века) сохраняет наследственные претензии на собственность на значительную часть оригинальных участков',
          'Маронитская церковь держит церковный территориальный суверенитет над холмом и его линиями обзора через город',
          'Колония кошек без зарегистрированного владельца держит фактическое управление каждой лестницей, крышей и внутренним двором',
          'Городская сетка французского мандата (1920-е годы) всё ещё определяет все отступы зданий и ширину улиц — колониальное управление, пережившее колонию',
        ],
        ar: [
          'عائلة سرسق (ملاك أراضٍ من القرن التاسع عشر) تحتفظ بمطالبات ملكية وراثية على جزء كبير من القطع الأصلية',
          'الكنيسة المارونية تحتفظ بالسيادة الإقليمية الكنسية على قمة التل وخطوط مشهده عبر المدينة',
          'مستعمرة من القطط بدون مالك مسجّل تحتفظ بالحوكمة الفعلية على كل سلم وسطح وفناء داخلي',
          'شبكة الحضر لمرسوم الانتداب الفرنسي (عشرينيات القرن) لا تزال تحدد جميع منتهيات المباني وعروض الشوارع — حوكمة استعمارية عاشت أطول من الاستعمار',
        ],
      },
      ghost: {
        en: [
          'The Green Line (civil war demarcation, 1975–1990) passed through the western edge of Achrafieh — its ghost boundary still influences property values',
          'The Ottoman-era orchards (mandated fruit trees that gave streets their names) claim a residual arboreal governance beneath the asphalt',
        ],
        de: [
          'Die Grüne Linie (Bürgerkriegsabgrenzung, 1975–1990) verlief am Westrand von Achrafieh — ihre Geistergrenze beeinflusst noch immer die Immobilienpreise',
          'Die osmanischen Obstgärten (gesetzlich vorgeschriebene Obstbäume, die den Straßen ihre Namen gaben) beanspruchen eine verbleibende Baum-Governance unter dem Asphalt',
        ],
        ru: [
          'Зелёная линия (линия разграничения гражданской войны, 1975–1990) проходила через западный край Ашрафие — её призрачная граница всё ещё влияет на стоимость недвижимости',
          'Садовые угодья эпохи Османской империи (предписанные фруктовые деревья, давшие улицам их имена) претендуют на остаточное древесное управление под асфальтом',
        ],
        ar: [
          'الخط الأخضر (حدود الحرب الأهلية، 1975–1990) مر عبر الحافة الغربية للأشرفية — حدوده الشبحية لا تزال تؤثر على قيم العقارات',
          'البساتين العثمانية (أشجار الفاكهة المفروضة التي أعطت الشوارع أسماءها) تطالب بحوكمة شجرية متبقية تحت الإسفلت',
        ],
      },
      temporal: {
        en: [
          'August 4, every year: the scarred facades of Achrafieh re-accumulate meaning — the explosion wounds speak louder than the renovations covering them',
          'Staircase hour (dusk): the cats achieve absolute governance — pedestrians become guests in a feline territorial system that predates all human planning',
        ],
        de: [
          '4. August, jedes Jahr: Die vernarbten Fassaden von Achrafieh sammeln wieder Bedeutung — die Explosionswunden sprechen lauter als die sie bedeckenden Renovierungen',
          'Treppenstunde (Dämmerung): Die Katzen erreichen absolute Governance — Fußgänger werden zu Gästen in einem Katzen-Territorialsystem, das jede menschliche Planung vorausgeht',
        ],
        ru: [
          '4 августа каждый год: покрытые шрамами фасады Ашрафие снова накапливают смысл — раны взрыва говорят громче, чем ремонт, покрывающий их',
          'Час лестниц (сумерки): кошки достигают абсолютного управления — пешеходы становятся гостями в кошачьей территориальной системе, предшествующей всему человеческому планированию',
        ],
        ar: [
          '4 أغسطس كل عام: واجهات الأشرفية المندّبة تُراكم المعنى من جديد — جروح الانفجار تتكلم بصوت أعلى من التجديدات التي تغطيها',
          'ساعة السلالم (الغسق): تحقق القطط الحوكمة المطلقة — يصبح المشاة ضيوفاً في نظام إقليمي للقطط يسبق كل تخطيط بشري',
        ],
      },
    },

    {
      id: 'solidere', type: 'square', lat: 33.8956, lng: 35.5020,
      name: { en: 'Solidere Downtown', de: 'Solidere Innenstadt', ru: 'Солидер Даунтаун', ar: 'سوليدير وسط البلد' },
      atmo: {
        en: 'The most expensive reconstruction in history. A private company bought the ruins of the civil war and built a city centre that looks like Beirut but belongs to shareholders. The streets are clean and empty. The original residents were not included in the plans.',
        de: 'Die teuerste Rekonstruktion der Geschichte. Ein privates Unternehmen kaufte die Ruinen des Bürgerkriegs und baute ein Stadtzentrum, das wie Beirut aussieht, aber Aktionären gehört. Die Straßen sind sauber und leer. Die ursprünglichen Bewohner waren nicht in den Plänen enthalten.',
        ru: 'Самая дорогая реконструкция в истории. Частная компания купила руины гражданской войны и построила городской центр, который выглядит как Бейрут, но принадлежит акционерам. Улицы чисты и пусты. Первоначальные жители не были включены в планы.',
        ar: 'أغلى عملية إعادة بناء في التاريخ. شركة خاصة اشترت أنقاض الحرب الأهلية وبنت مركز مدينة يبدو كبيروت لكنه يملكه المساهمون. الشوارع نظيفة وفارغة. السكان الأصليون لم يُدرجوا في الخطط.',
      },
      owners: {
        en: [
          'Solidere S.A.L. (private real estate company, est. 1994) holds legal freehold over 1.8 million square metres of central Beirut',
          'The Roman ruins beneath the shopping district assert a 2,000-year prior occupation claim that no title deed can legally override',
          'The 100,000 former residents displaced during reconstruction retain an unresolved collective right-of-return claim',
          'The emptiness itself — streets built for crowds that never came — holds a speculative territorial claim on behalf of an imagined future population',
        ],
        de: [
          'Solidere S.A.L. (privates Immobilienunternehmen, gegr. 1994) hält das gesetzliche Volleigentum über 1,8 Millionen Quadratmeter im Zentrum von Beirut',
          'Die römischen Ruinen unter dem Einkaufsviertel behaupten einen 2.000-jährigen Prior-Besatzungsanspruch, den keine Eigentumsurkunde rechtlich außer Kraft setzen kann',
          'Die 100.000 ehemaligen Bewohner, die während des Wiederaufbaus vertrieben wurden, behalten einen ungelösten kollektiven Rückkehranspruch',
          'Die Leere selbst — Straßen, die für Menschenmengen gebaut wurden, die nie kamen — hält einen spekulativen Territorialanspruch im Namen einer imaginierten zukünftigen Bevölkerung',
        ],
        ru: [
          'Solidere S.A.L. (частная риелторская компания, осн. 1994) держит законное право собственности на 1,8 миллиона квадратных метров центра Бейрута',
          'Римские руины под торговым кварталом заявляют о 2000-летней претензии предшествующей оккупации, которую ни одно свидетельство о праве собственности не может юридически отменить',
          '100 000 бывших жителей, перемещённых во время реконструкции, сохраняют неразрешённую коллективную претензию на право возвращения',
          'Сама пустота — улицы, построенные для толп, которые никогда не пришли — держит спекулятивную территориальную претензию от имени воображаемого будущего населения',
        ],
        ar: [
          'سوليدير ش.م.ل. (شركة عقارية خاصة، تأسست 1994) تمتلك حق الملكية القانونية على 1.8 مليون متر مربع من وسط بيروت',
          'الأنقاض الرومانية تحت منطقة التسوق تؤكد مطالبة احتلال سابق لـ2000 عام لا يمكن لأي سند ملكية تجاوزه قانونياً',
          '100,000 من السكان السابقين المهجّرين خلال إعادة الإعمار يحتفظون بمطالبة جماعية غير محسومة بحق العودة',
          'الفراغ نفسه — شوارع بُنيت للحشود التي لم تأتِ — يحتفظ بمطالبة إقليمية مضاربية نيابةً عن سكان مستقبليين متخيَّلين',
        ],
      },
      ghost: {
        en: [
          'The pre-war downtown (Bour) — the most mixed and democratic urban space in the Middle East — holds a residual collective memory that makes the reconstruction feel permanently wrong',
          'The civil war snipers who held these streets for 15 years retain a residual tactical territorial knowledge embedded in the building lines',
        ],
        de: [
          'Die Vorkriegs-Innenstadt (Bour) — der gemischteste und demokratischste städtische Raum im Nahen Osten — hält eine verbleibende kollektive Erinnerung, die den Wiederaufbau dauerhaft falsch erscheinen lässt',
          'Die Bürgerkriegsschützen, die diese Straßen 15 Jahre lang hielten, behalten ein verbleibendes taktisches Territorialwissen, das in die Gebäudelinien eingebettet ist',
        ],
        ru: [
          'Довоенный центр города (Бурж) — самое смешанное и демократичное городское пространство на Ближнем Востоке — держит остаточную коллективную память, которая заставляет реконструкцию казаться навсегда неправильной',
          'Снайперы гражданской войны, которые держали эти улицы 15 лет, сохраняют остаточное тактическое территориальное знание, встроенное в линии зданий',
        ],
        ar: [
          'وسط المدينة ما قبل الحرب (البورج) — أكثر فضاء حضري مختلط وديمقراطي في الشرق الأوسط — يحتفظ بذاكرة جماعية متبقية تجعل إعادة الإعمار تبدو خاطئة بشكل دائم',
          'قناصة الحرب الأهلية الذين سيطروا على هذه الشوارع لمدة 15 عاماً يحتفظون بمعرفة إقليمية تكتيكية متبقية متجذرة في خطوط المباني',
        ],
      },
      temporal: {
        en: [
          'Weekend evenings: the ghost of public life briefly inhabits the streets — cafés fill, the emptiness retreats, Solidere\'s investment thesis is temporarily vindicated',
          'Revolution time (October 17, 2019 onward): the empty streets filled with the largest protests in Lebanese history — the people briefly repossessed what was taken',
        ],
        de: [
          'Wochenendabende: Das Gespenst des öffentlichen Lebens bewohnt kurz die Straßen — Cafés füllen sich, die Leere weicht zurück, Solideres Investitionsthese wird vorübergehend bestätigt',
          'Revolutionszeit (ab 17. Oktober 2019): Die leeren Straßen füllten sich mit den größten Protesten der libanesischen Geschichte — die Menschen nahmen kurz zurück, was ihnen genommen worden war',
        ],
        ru: [
          'Вечера выходных: призрак общественной жизни ненадолго населяет улицы — кафе заполняются, пустота отступает, инвестиционный тезис Solidere временно подтверждается',
          'Время революции (с 17 октября 2019 года): пустые улицы заполнились крупнейшими протестами в ливанской истории — люди ненадолго вернули то, что было взято',
        ],
        ar: [
          'مساءات عطلة الأهوء: شبح الحياة العامة يسكن الشوارع مؤقتاً — تمتلئ المقاهي ويتراجع الفراغ، وتُبرَّر فرضية استثمار سوليدير مؤقتاً',
          'وقت الثورة (منذ 17 أكتوبر 2019): امتلأت الشوارع الفارغة بأكبر احتجاجات في التاريخ اللبناني — استعاد الناس مؤقتاً ما أُخذ منهم',
        ],
      },
    },

    {
      id: 'port-beirut', type: 'monument', lat: 33.9003, lng: 35.5196,
      name: { en: 'Beirut Port', de: 'Hafen von Beirut', ru: 'Порт Бейрута', ar: 'مرفأ بيروت' },
      atmo: {
        en: 'On August 4, 2020, 2,750 tonnes of ammonium nitrate that no one had consented to store here detonated. The crater is still open. The grain silos are still standing, half-collapsed, because no one can agree who owns them or who must decide their fate. This is a place that has been asking the same question as this app, and still has no answer.',
        de: 'Am 4. August 2020 detonierten 2.750 Tonnen Ammoniumnitrat, deren Lagerung hier niemand zugestimmt hatte. Der Krater ist noch offen. Die Getreidesilos stehen noch halb eingestürzt, weil sich niemand einigen kann, wem sie gehören oder wer über ihr Schicksal entscheiden muss. Dies ist ein Ort, der dieselbe Frage wie diese App stellt und noch immer keine Antwort hat.',
        ru: 'В 4 августа 2020 года взорвались 2750 тонн аммиачной селитры, которую никто не соглашался хранить здесь. Кратер ещё открыт. Зернохранилища всё ещё стоят, наполовину обрушившись, потому что никто не может договориться, кому они принадлежат или кто должен решить их судьбу. Это место задаёт тот же вопрос, что и это приложение, и всё ещё не имеет ответа.',
        ar: 'في 4 أغسطس 2020، انفجرت 2750 طناً من نترات الأمونيوم التي لم يوافق أحد على تخزينها هنا. الحفرة لا تزال مفتوحة. الصوامع لا تزال قائمة، منهارة جزئياً، لأنه لا أحد يستطيع الاتفاق على من يملكها أو من يجب أن يقرر مصيرها. هذا مكان يطرح نفس السؤال الذي يطرحه هذا التطبيق، ولا تزال ليس له إجابة.',
      },
      owners: {
        en: [
          'The crater (218 metres diameter) is the only space in Beirut with no registered owner — legal vacuum as physical fact',
          'The half-collapsed grain silos assert survival as governance — they absorbed the blast and stand as the city\'s most eloquent ruins',
          'The 2,750 tonnes of ammonium nitrate (stored 2013–2020 without consent of residents) retroactively claimed governance over a 10km radius',
          'The 218 dead hold an unresolvable collective territorial claim that all reconstruction must negotiate',
        ],
        de: [
          'Der Krater (218 Meter Durchmesser) ist der einzige Raum in Beirut ohne registrierten Eigentümer — rechtliches Vakuum als physische Tatsache',
          'Die halbzusammengebrochenen Getreidesilos behaupten das Überleben als Governance — sie absorbierten die Druckwelle und stehen als die beredtesten Ruinen der Stadt',
          'Die 2.750 Tonnen Ammoniumnitrat (2013–2020 ohne Zustimmung der Bewohner gelagert) beanspruchten rückwirkend Governance über einen 10-km-Radius',
          'Die 218 Toten halten einen unlösbaren kollektiven Territorialanspruch, mit dem alle Rekonstruktion verhandeln muss',
        ],
        ru: [
          'Кратер (диаметром 218 метров) — единственное пространство в Бейруте без зарегистрированного владельца — правовой вакуум как физический факт',
          'Наполовину обрушившиеся зернохранилища заявляют выживание как управление — они поглотили взрыв и стоят как самые красноречивые руины города',
          '2750 тонн аммиачной селитры (хранившиеся в 2013–2020 годах без согласия жителей) задним числом заявили о управлении в радиусе 10 км',
          '218 погибших держат неразрешимую коллективную территориальную претензию, с которой должна договориться вся реконструкция',
        ],
        ar: [
          'الحفرة (قطر 218 متراً) هي المساحة الوحيدة في بيروت بدون مالك مسجّل — فراغ قانوني كحقيقة مادية',
          'الصوامع المنهارة جزئياً تؤكد البقاء كحوكمة — امتصّت الانفجار وتقف كأكثر أطلال المدينة بلاغة',
          '2750 طناً من نترات الأمونيوم (مُخزّنة 2013–2020 دون موافقة السكان) طالبت بأثر رجعي بالحوكمة على نطاق 10 كيلومترات',
          '218 قتيلاً يحتفظون بمطالبة إقليمية جماعية لا حل لها يجب على كل إعادة إعمار التفاوض معها',
        ],
      },
      ghost: {
        en: [
          'The Phoenician port (3,000 years of continuous maritime governance) asserts the longest prior territorial claim of any site in this app',
          'The MV Rhosus (the ship that deposited the ammonium nitrate, abandoned 2013) retains a residual maritime liability claim over the entire blast radius',
        ],
        de: [
          'Der phönizische Hafen (3.000 Jahre kontinuierliche maritime Governance) behauptet den längsten Prioritäts-Territorialanspruch jedes Standorts in dieser App',
          'Die MV Rhosus (das Schiff, das das Ammoniumnitrat abgelagert hat, aufgegeben 2013) behält einen verbleibenden maritimen Haftungsanspruch über den gesamten Explosionsradius',
        ],
        ru: [
          'Финикийский порт (3000 лет непрерывного морского управления) заявляет о самой длительной предшествующей территориальной претензии любого объекта в этом приложении',
          'MV Rhosus (судно, которое депонировало аммиачную селитру, брошенное в 2013 году) сохраняет остаточную претензию морской ответственности над всем радиусом взрыва',
        ],
        ar: [
          'المرفأ الفينيقي (3000 عام من الحوكمة البحرية المستمرة) يؤكد أطول مطالبة إقليمية سابقة لأي موقع في هذا التطبيق',
          'سفينة MV Rhosus (السفينة التي أودعت نترات الأمونيوم، هُجرت 2013) تحتفظ بمطالبة مسؤولية بحرية متبقية على كامل نطاق الانفجار',
        ],
      },
      temporal: {
        en: [
          'August 4, 6:07pm, every year: for exactly the duration of the blast, every governance claim in Beirut is suspended',
          'Every day at sunset: the half-standing silos cast a long shadow westward across the city — a daily governance reminder from ruins that refuse to fall',
        ],
        de: [
          '4. August, 18:07 Uhr, jedes Jahr: Für genau die Dauer der Explosion ist jeder Governance-Anspruch in Beirut ausgesetzt',
          'Jeden Tag bei Sonnenuntergang: Die halbstehenden Silos werfen einen langen Schatten westwärts über die Stadt — eine tägliche Governance-Erinnerung von Ruinen, die sich weigern zu fallen',
        ],
        ru: [
          '4 августа, 18:07, каждый год: ровно на время взрыва все претензии управления в Бейруте приостановлены',
          'Каждый день на закате: наполовину стоящие силосы бросают длинную тень на запад через город — ежедневное напоминание управления от руин, отказывающихся упасть',
        ],
        ar: [
          '4 أغسطس الساعة 6:07 مساءً كل عام: لمدة الانفجار بالضبط، تُعلَّق كل مطالبة حوكمة في بيروت',
          'كل يوم عند الغروب: الصوامع نصف القائمة تلقي ظلاً طويلاً غرباً عبر المدينة — تذكير يومي بالحوكمة من أنقاض ترفض السقوط',
        ],
      },
    },

    {
      id: 'badaro', type: 'district', lat: 33.8807, lng: 35.5071,
      name: { en: 'Badaro', de: 'Badaro', ru: 'Бадаро', ar: 'بدارو' },
      atmo: {
        en: 'A street that was a front line. The buildings on both sides still carry shrapnel. The cafés have opened in the bullet holes. Nobody talks about it much but everyone knows which side of the road you were on.',
        de: 'Eine Straße, die eine Frontlinie war. Die Gebäude auf beiden Seiten tragen noch immer Schrapnell. Die Cafés haben in den Einschusslöchern geöffnet. Niemand spricht viel darüber, aber jeder weiß, auf welcher Straßenseite man war.',
        ru: 'Улица, которая была линией фронта. Здания с обеих сторон всё ещё несут осколки. Кафе открылись в пулевых отверстиях. Об этом особо не говорят, но все знают, на какой стороне дороги ты был.',
        ar: 'شارع كان خطاً أمامياً. المباني على كلا الجانبين لا تزال تحمل الشظايا. المقاهي فُتحت في ثقوب الرصاص. لا أحد يتحدث عن ذلك كثيراً لكن الجميع يعرف أي جانب من الطريق كنت عليه.',
      },
      owners: {
        en: [
          'Art Deco apartment blocks (1930s–1950s) assert architectural sovereignty — the most intact pre-war residential fabric in Beirut',
          'The demarcation line\'s ghost still divides the street psychologically — east-side residents and west-side residents maintain separate territorial intuitions',
          'Speciality coffee shops have established a commercial cultural governance claim, displacing older neighbourhood economies since 2010',
          'The shrapnel still embedded in facade stone holds a residual wartime territorial claim that no renovation can fully remove',
        ],
        de: [
          'Art-Deco-Apartmentblocks (1930er–1950er Jahre) behaupten architektonische Souveränität — die intakteste Vorkriegs-Wohnbebauung in Beirut',
          'Der Geist der Demarkationslinie teilt die Straße noch immer psychologisch — Ost- und West-Seiten-Bewohner bewahren getrennte territoriale Intuitionen',
          'Spezialitätencafés haben einen kommerziellen kulturellen Governance-Anspruch etabliert, der ältere Nachbarschaftswirtschaften seit 2010 verdrängt',
          'Das noch immer in Fassadenstein eingebettete Schrapnell hält einen verbleibenden Kriegs-Territorialanspruch, den keine Renovierung vollständig entfernen kann',
        ],
        ru: [
          'Жилые дома в стиле ар-деко (1930-е–1950-е годы) заявляют архитектурный суверенитет — наиболее сохранившаяся довоенная жилая ткань в Бейруте',
          'Призрак линии разграничения всё ещё психологически делит улицу — жители восточной стороны и жители западной стороны сохраняют отдельные территориальные интуиции',
          'Кофейни специалитетов установили претензию на коммерческое культурное управление, вытесняя старые экономики кварталов с 2010 года',
          'Осколки, всё ещё вмурованные в камень фасада, держат остаточную военную территориальную претензию, которую никакой ремонт не может полностью устранить',
        ],
        ar: [
          'مباني الشقق على طراز أرت ديكو (ثلاثينيات–خمسينيات القرن) تؤكد السيادة المعمارية — أكثر نسيج سكني ما قبل الحرب سلامةً في بيروت',
          'شبح خط التقسيم لا يزال يقسم الشارع نفسياً — سكان الجانب الشرقي وسكان الجانب الغربي يحتفظون بحدس إقليمي منفصل',
          'محلات القهوة المتخصصة أسّست مطالبة حوكمة ثقافية تجارية، مهجّرةً اقتصادات الأحياء الأقدم منذ 2010',
          'الشظايا المضمّنة لا تزال في حجر الواجهة تحتفظ بمطالبة إقليمية زمن الحرب المتبقية التي لا يستطيع أي تجديد إزالتها بالكامل',
        ],
      },
      ghost: {
        en: [
          'The Green Line ran parallel one block away — Badaro was close enough to hear both sides, which is why it remembers both',
          'The Jewish quarter (pre-war, pre-emigration) left a spatial memory in the street\'s southern end that has never been acknowledged or mapped',
        ],
        de: [
          'Die Grüne Linie verlief einen Block entfernt parallel — Badaro war nah genug, um beide Seiten zu hören, weshalb es sich an beide erinnert',
          'Das jüdische Viertel (Vorkriegszeit, vor der Emigration) hinterließ eine räumliche Erinnerung am südlichen Ende der Straße, die nie anerkannt oder kartiert wurde',
        ],
        ru: [
          'Зелёная линия проходила параллельно в одном квартале — Бадаро был достаточно близко, чтобы слышать обе стороны, вот почему он помнит обе',
          'Еврейский квартал (довоенный, до эмиграции) оставил пространственную память на южном конце улицы, которая никогда не была признана или нанесена на карту',
        ],
        ar: [
          'الخط الأخضر كان يسير موازياً على بُعد بلوك واحد — كانت بدارو قريبة بما يكفي لتسمع كلا الجانبين، ولهذا تتذكر كليهما',
          'الحي اليهودي (ما قبل الحرب، قبل الهجرة) ترك ذاكرة مكانية في الطرف الجنوبي من الشارع لم تُعترف بها أو تُرسم خريطتها أبداً',
        ],
      },
      temporal: {
        en: [
          'Morning café hours: Badaro\'s sidewalk tables briefly constitute the most cosmopolitan democratic space in post-war Beirut',
          'Power cut (daily, 3 hours minimum): the neighbourhood reverts to generator governance — whoever has diesel holds territorial authority',
        ],
        de: [
          'Morgendliche Café-Stunden: Badaros Bürgersteig-Tische konstituieren kurz den kosmopolitischsten demokratischen Raum im Nachkriegs-Beirut',
          'Stromausfall (täglich, mindestens 3 Stunden): Das Viertel kehrt zur Generatorgovernanz zurück — wer Diesel hat, hat territoriale Autorität',
        ],
        ru: [
          'Утренние часы кафе: столики на тротуаре Бадаро ненадолго составляют самое космополитическое демократическое пространство в послевоенном Бейруте',
          'Отключение электричества (ежедневно, минимум 3 часа): район возвращается к управлению генератором — у кого есть дизель, тот держит территориальную власть',
        ],
        ar: [
          'ساعات المقهى الصباحية: طاولات رصيف بدارو تُشكّل مؤقتاً أكثر فضاء ديمقراطي كوزموبوليتاني في بيروت ما بعد الحرب',
          'انقطاع التيار الكهربائي (يومياً، 3 ساعات على الأقل): يعود الحي إلى حوكمة المولّد — من لديه ديزل يمتلك السلطة الإقليمية',
        ],
      },
    },

    {
      id: 'shatila', type: 'district', lat: 33.8647, lng: 35.4844,
      name: { en: 'Shatila', de: 'Shatila', ru: 'Шатила', ar: 'شاتيلا' },
      atmo: {
        en: 'The camp was established in 1949 as a temporary measure. Seventy-five years later, the concrete has grown nine storeys high and the alleys are too narrow for sunlight to reach the ground. Nobody here has legal title to the land beneath their home.',
        de: 'Das Lager wurde 1949 als vorübergehende Maßnahme eingerichtet. Fünfundsiebzig Jahre später ist der Beton neun Stockwerke hoch gewachsen und die Gassen sind zu eng, damit Sonnenlicht den Boden erreicht. Niemand hier hat einen rechtlichen Anspruch auf das Land unter seinem Zuhause.',
        ru: 'Лагерь был основан в 1949 году как временная мера. Семьдесят пять лет спустя бетон вырос до девяти этажей, а переулки слишком узки, чтобы солнечный свет достигал земли. Никто здесь не имеет юридического права на землю под своим домом.',
        ar: 'أُسِّس المخيم عام 1949 كإجراء مؤقت. بعد خمسة وسبعين عاماً، نما الخرسان تسعة طوابق وضاقت الأزقة حتى لا يبلغ ضوء الشمس الأرض. لا أحد هنا يملك سنداً قانونياً بالأرض تحت بيته.',
      },
      owners: {
        en: [
          'UNRWA holds administrative jurisdiction but has no enforcement power — governance without sovereignty, management without ownership',
          'The Lebanese state claims territorial sovereignty over the camp but denies its residents citizenship — a jurisdiction exercised as exclusion',
          'Palestinian families maintain inherited deed claims to original villages inside present-day Israel — a property ownership layer 75 years suspended but never extinguished',
          'The water and electricity networks, run informally by internal camp committees, assert a parallel infrastructure governance that predates any official utility connection',
        ],
        de: [
          'UNRWA hat administrative Jurisdiktion, aber keine Durchsetzungsmacht — Governance ohne Souveränität, Management ohne Eigentum',
          'Der libanesische Staat beansprucht territoriale Souveränität über das Lager, verweigert seinen Bewohnern aber die Staatsbürgerschaft — eine als Ausschluss ausgeübte Jurisdiktion',
          'Palästinensische Familien pflegen ererbte Urkundenforderungen auf ursprüngliche Dörfer im heutigen Israel — eine Eigentumsschicht, 75 Jahre ausgesetzt, aber nie erlöscht',
          'Die informell von internen Lagerkomitees betriebenen Wasser- und Stromnetze behaupten eine parallele Infrastrukturgovernanz, die jeder offiziellen Versorgungsverbindung vorausgeht',
        ],
        ru: [
          'БАПОР имеет административную юрисдикцию, но не имеет исполнительной власти — управление без суверенитета, менеджмент без собственности',
          'Ливанское государство претендует на территориальный суверенитет над лагерем, но отказывает его жителям в гражданстве — юрисдикция, осуществляемая как исключение',
          'Палестинские семьи сохраняют унаследованные претензии на оригинальные деревни на территории нынешнего Израиля — имущественный слой, 75 лет приостановленный, но никогда не погашенный',
          'Сети водоснабжения и электроснабжения, неформально управляемые внутренними комитетами лагеря, заявляют параллельное управление инфраструктурой, которое предшествует любому официальному подключению',
        ],
        ar: [
          'تمتلك الأونروا الولاية القضائية الإدارية لكن لا قدرة تنفيذية لديها — حوكمة بلا سيادة، إدارة بلا ملكية',
          'تطالب الدولة اللبنانية بالسيادة الإقليمية على المخيم لكنها تحرم سكانه من الجنسية — ولاية قضائية تُمارَس كإقصاء',
          'تحتفظ العائلات الفلسطينية بمطالبات صكوك موروثة على قرى أصلية داخل إسرائيل الحالية — طبقة ملكية عقارية معلقة 75 عاماً لكن لم تُطفأ قط',
          'شبكات المياه والكهرباء التي تديرها بصورة غير رسمية لجان المخيم الداخلية تطالب بحوكمة بنية تحتية موازية سابقة لأي اتصال بمرفق رسمي',
        ],
      },
      ghost: {
        en: [
          'The Sabra and Shatila massacre (September 1982) — 3,500 civilians killed over 62 hours — asserts an unresolved sovereignty claim that no political agreement has addressed',
          'The original Palestinian villages (depopulated 1948) persist as a layer of phantom land ownership beneath every structure built since — deeds without land, land without deeds',
        ],
        de: [
          'Das Massaker von Sabra und Shatila (September 1982) — 3.500 Zivilisten in 62 Stunden getötet — behauptet einen ungeklärten Souveränitätsanspruch, dem kein politisches Abkommen begegnet ist',
          'Die ursprünglichen palästinensischen Dörfer (1948 entvölkert) bestehen als Schicht phantomhafter Landrechte unter jeder seitdem erbauten Struktur — Urkunden ohne Land, Land ohne Urkunden',
        ],
        ru: [
          'Резня в Сабре и Шатиле (сентябрь 1982 года) — 3500 мирных жителей убиты за 62 часа — заявляет нерешённую претензию на суверенитет, которую не рассмотрело ни одно политическое соглашение',
          'Оригинальные палестинские деревни (обезлюдевшие в 1948 году) сохраняются как слой фантомного права собственности на землю под каждой построенной с тех пор структурой — документы без земли, земля без документов',
        ],
        ar: [
          'مجزرة صبرا وشاتيلا (سبتمبر 1982) — 3500 مدني قُتلوا في 62 ساعة — تطالب بمطالبة سيادة غير محسومة لم يعالجها أي اتفاق سياسي',
          'القرى الفلسطينية الأصلية (التي أُفرِّغت عام 1948) تستمر كطبقة ملكية أرض وهمية تحت كل مبنى شُيِّد منذئذٍ — صكوك بلا أرض، أرض بلا صكوك',
        ],
      },
      temporal: {
        en: [
          'Daily generator hours (18:00–24:00): electricity governance shifts from the camp committee network to individual household generators — a nightly fragmentation of the power infrastructure',
          'Ramadan nights: the camp\'s internal economy briefly expands into the alleys — food stalls, gatherings, a temporary reclamation of public space from darkness',
        ],
        de: [
          'Tägliche Generatorstunden (18:00–24:00): Die Stromgovernanz wechselt vom Lagerkomiteenetz zu individuellen Haushaltsgeneratoren — eine nächtliche Fragmentierung der Strominfrastruktur',
          'Ramadan-Nächte: Die interne Wirtschaft des Lagers dehnt sich kurz in die Gassen aus — Essenstände, Versammlungen, eine vorübergehende Rückeroberung des öffentlichen Raums aus der Dunkelheit',
        ],
        ru: [
          'Ежедневные часы генератора (18:00–24:00): управление электроснабжением переходит от сети комитета лагеря к индивидуальным бытовым генераторам — ночная фрагментация энергетической инфраструктуры',
          'Ночи Рамадана: внутренняя экономика лагеря ненадолго расширяется в переулки — лотки с едой, собрания, временное возвращение общественного пространства из темноты',
        ],
        ar: [
          'ساعات المولّد اليومية (18:00–24:00): تنتقل حوكمة الكهرباء من شبكة لجنة المخيم إلى مولّدات المنازل الفردية — تشرذم ليلي للبنية التحتية للطاقة',
          'ليالي رمضان: يتمدد الاقتصاد الداخلي للمخيم مؤقتاً إلى الأزقة — بسطات طعام وتجمعات واسترداد مؤقت للفضاء العام من الظلام',
        ],
      },
    },

    {
      id: 'national-museum', type: 'monument', lat: 33.8736, lng: 35.5018,
      name: { en: 'National Museum', de: 'Nationalmuseum', ru: 'Национальный музей', ar: 'المتحف الوطني' },
      atmo: {
        en: 'The museum sat directly on the Green Line for fifteen years. The curators walled up the artefacts in concrete to protect them from shelling. When the war ended, they broke the walls open and found everything intact. The building still bears shrapnel marks at eye level.',
        de: 'Das Museum lag fünfzehn Jahre lang direkt an der Grünen Linie. Die Kuratoren mauerten die Artefakte in Beton ein, um sie vor Beschuss zu schützen. Als der Krieg endete, brachen sie die Wände auf und fanden alles intakt. Das Gebäude trägt noch Splitternarbern in Augenhöhe.',
        ru: 'Музей пятнадцать лет простоял прямо на Зелёной линии. Хранители замуровали артефакты в бетон, чтобы защитить их от обстрелов. Когда война закончилась, они вскрыли стены и обнаружили всё нетронутым. Здание до сих пор несёт следы осколков на уровне глаз.',
        ar: 'وقع المتحف مباشرةً على الخط الأخضر لخمسة عشر عاماً. أحكم أمناء المتحف تغليف المقتنيات بالخرسانة حمايةً لها من القصف. حين انتهت الحرب، كسروا الجدران فوجدوا كل شيء سليماً. لا يزال المبنى يحمل آثار الشظايا على ارتفاع العيون.',
      },
      owners: {
        en: [
          'The Lebanese state holds formal ownership, but the Phoenician, Roman, and Byzantine artefacts inside predate Lebanon by three thousand years — the objects govern the institution, not the reverse',
          'The Green Line (1975–1990) asserted a de facto territorial division through the building\'s ground floor — a ghost border still detectable in the asymmetric wear patterns of the marble floor',
          'The concrete cocoons poured around the sarcophagi during the war have never been fully removed — the artefacts retain a layer of wartime protection that is now part of their archaeological record',
          'Militias from both sides used the building as a sniper position — their ballistic ownership claim is written into the facade at a height of 1.6 metres',
        ],
        de: [
          'Der libanesische Staat hält formales Eigentum, aber die phönizischen, römischen und byzantinischen Artefakte darin sind dreitausend Jahre älter als der Libanon — die Objekte regieren die Institution, nicht umgekehrt',
          'Die Grüne Linie (1975–1990) behauptete eine faktische Territorialteilung durch das Erdgeschoss des Gebäudes — eine Geistergrenze, die noch in den asymmetrischen Abnutzungsmustern des Marmorbodens erkennbar ist',
          'Die während des Krieges um die Sarkophage gegossenen Betonkokons wurden nie vollständig entfernt — die Artefakte behalten eine Kriegsschutzschicht, die nun Teil ihrer archäologischen Aufzeichnung ist',
          'Milizen von beiden Seiten nutzten das Gebäude als Scharfschützenposition — ihr ballistischer Eigentumsanspruch ist in die Fassade auf einer Höhe von 1,6 Metern eingeschrieben',
        ],
        ru: [
          'Ливанское государство владеет формально, но финикийские, римские и византийские артефакты внутри на три тысячи лет старше Ливана — объекты управляют институцией, а не наоборот',
          'Зелёная линия (1975–1990) утверждала фактическое территориальное разделение через первый этаж здания — призрачная граница, всё ещё обнаруживаемая в асимметричных узорах износа мраморного пола',
          'Бетонные коконы, залитые вокруг саркофагов во время войны, так и не были полностью удалены — артефакты сохраняют слой военной защиты, ставший частью их археологической записи',
          'Ополчения с обеих сторон использовали здание как снайперскую позицию — их баллистическая претензия на собственность вписана в фасад на высоте 1,6 метра',
        ],
        ar: [
          'تمتلك الدولة اللبنانية الملكية الرسمية، لكن المقتنيات الفينيقية والرومانية والبيزنطية الداخل تسبق لبنان بثلاثة آلاف عام — المقتنيات هي التي تحكم المؤسسة لا العكس',
          'أكّد الخط الأخضر (1975–1990) تقسيماً إقليمياً فعلياً عبر الطابق الأرضي للمبنى — حد شبحي لا يزال ملموساً في أنماط التآكل غير المتماثلة لبلاط الرخام',
          'أغلفة الخرسانة التي صُبَّت حول التوابيت إبان الحرب لم تُزل كلياً قط — تحتفظ المقتنيات بطبقة حماية حربية باتت جزءاً من سجلها الأثري',
          'استخدمت الميليشيات من الجانبين المبنى موقعاً للقناصة — مطالبتهم الإقليمية الباليستية مكتوبة في الواجهة على ارتفاع 1.6 متر',
        ],
      },
      ghost: {
        en: [
          'The Green Line ceasefire boundary (April 1975 – October 1990) passes through the museum\'s central hall — a former front line now hosting school children on field trips',
          'The artefacts looted during the war (exact inventory unknown) maintain a residual display claim over the empty cases that once held them — absence as ownership',
        ],
        de: [
          'Die Waffenstillstandsgrenze der Grünen Linie (April 1975 – Oktober 1990) verläuft durch die Zentralhalle des Museums — eine ehemalige Front, die jetzt Schulkinder auf Exkursionen beherbergt',
          'Die während des Krieges gestohlenen Artefakte (genaues Inventar unbekannt) behalten einen verbleibenden Ausstellungsanspruch über die leeren Vitrinen, die sie einst enthielten — Abwesenheit als Eigentum',
        ],
        ru: [
          'Граница перемирия Зелёной линии (апрель 1975 – октябрь 1990) проходит через центральный зал музея — бывшая линия фронта, теперь принимающая школьников на экскурсиях',
          'Артефакты, разграбленные во время войны (точная инвентаризация неизвестна), сохраняют остаточную выставочную претензию на пустые витрины, в которых они когда-то находились — отсутствие как собственность',
        ],
        ar: [
          'حد وقف إطلاق النار للخط الأخضر (أبريل 1975 – أكتوبر 1990) يمر عبر القاعة المركزية للمتحف — خط مواجهة سابق يستضيف الآن طلاب المدارس في رحلاتهم الميدانية',
          'المقتنيات المنهوبة إبان الحرب (جردتها الدقيقة مجهولة) تحتفظ بمطالبة عرض متبقية على الخزائن الفارغة التي احتوتها ذات يوم — الغياب بوصفه ملكية',
        ],
      },
      temporal: {
        en: [
          'School visit hours (09:00–13:00): Lebanese children stand in front of Phoenician artefacts with no legal connection to either — a daily encounter between contested heritage and stateless objects',
          'Power cuts (daily): the museum goes dark and the artefacts revert to their original condition — objects that existed for three millennia without electricity briefly reclaim their pre-modern governance',
        ],
        de: [
          'Schulbesuchsstunden (09:00–13:00): Libanesische Kinder stehen vor phönizischen Artefakten ohne rechtlichen Bezug zu beiden — eine tägliche Begegnung zwischen umstrittenem Erbe und staatslosen Objekten',
          'Stromausfälle (täglich): Das Museum wird dunkel und die Artefakte kehren in ihren ursprünglichen Zustand zurück — Objekte, die drei Jahrtausende ohne Strom existierten, reklamieren kurz ihre vormoderne Governance zurück',
        ],
        ru: [
          'Школьные часы посещения (09:00–13:00): ливанские дети стоят перед финикийскими артефактами без правовой связи ни с теми, ни с другими — ежедневная встреча между спорным наследием и объектами без гражданства',
          'Отключения электричества (ежедневно): музей погружается в темноту, и артефакты возвращаются к своему первоначальному состоянию — объекты, существовавшие три тысячелетия без электричества, ненадолго возвращают своё досовременное управление',
        ],
        ar: [
          'ساعات الزيارات المدرسية (09:00–13:00): أطفال لبنانيون يقفون أمام مقتنيات فينيقية دون صلة قانونية بأيٍّ منهما — لقاء يومي بين تراث متنازع عليه ومقتنيات بلا دولة',
          'انقطاعات التيار الكهربائي (يومياً): يغرق المتحف في الظلام وتعود المقتنيات إلى حالتها الأصلية — مقتنيات عاشت ثلاثة آلاف سنة دون كهرباء تستعيد مؤقتاً حوكمتها ما قبل الحداثة',
        ],
      },
    },
  ],
};
