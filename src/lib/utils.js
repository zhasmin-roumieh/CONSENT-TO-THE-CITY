export function rnd(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a;
}

export function shuffle(a) {
  const arr = [...a];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

export function getHr() {
  return new Date().getHours();
}

export function ownerPcts() {
  const s = Math.random();
  const nh = Math.round(18 + s * 28);
  const gh = Math.round(10 + s * 18);
  const tp = Math.round(5 + s * 14);
  const al = Math.round(8 + s * 18);
  const hu = Math.max(100 - nh - gh - tp - al, 5);
  return { nh, gh, tp, al, hu };
}

export function getTemporalText(loc, yr, lang = 'en') {
  const name = typeof loc.name === 'object' ? loc.name[lang] : loc.name;
  if (lang === 'de') {
    if (yr <= 1900) return `[ ${yr} ] — ${name} existiert in dieser Form nicht. ${yr < 1800 ? 'Das Land wird durch jahreszeitliche Zyklen und nichtmenschliche Bewohner regiert. Kein Katasterregister. Eigentum wird vollzogen, nicht registriert.' : 'Eine frühe administrative Abstraktion hat begonnen. Bäume werden zum ersten Mal nummeriert. Sie haben nicht zugestimmt.'}`;
    if (yr <= 1980) return `[ ${yr} ] — ${yr < 1940 ? 'Die Stadt konsolidiert sich. Informelle Territorien werden formalisiert. Einige Bewohner werden innerhalb des Jahrzehnts vertrieben.' : yr < 1960 ? 'Wiederaufbau oder rasante Entwicklung ist im Gange. Die Trümmer früherer Verhältnisse werden in die neuen Fundamente eingebaut.' : 'Modernisierung. Algorithmen steuern noch nicht die Wege, aber ihre Vorläufer – Fahrpläne, Bebauungspläne – schreiben Eigentum um.'}`;
    if (yr <= 2040) return `[ ${yr} ] — Aktuelle Konfiguration. ${yr > 2025 ? 'Das Klima hat begonnen, Territorialansprüche umzuschreiben. Einige Grenzzonen sind neu unsicher.' : 'Eigentum ist mehrschichtig, umstritten, teilweise digital. Mehrere aktuelle Eigentümer erscheinen in keinem Register.'}`;
    return `[ ${yr} ] — ${yr < 2080 ? 'Die Gemeinde wurde teilweise durch adaptive Infrastruktursysteme ersetzt. Nichtmenschliche Rechtspersönlichkeit wird in einigen Rechtsordnungen anerkannt.' : 'Die ursprüngliche Infrastruktur wird zurückerobert. Neue nichtmenschliche Rechtsbereiche haben sich gebildet. Sie haben noch keine Namen in irgendeiner aktuellen Sprache.'}`;
  }
  if (lang === 'ru') {
    if (yr <= 1900) return `[ ${yr} ] — ${name} не существует в этой форме. ${yr < 1800 ? 'Земля управляется сезонными циклами и нечеловеческими обитателями. Нет кадастровых записей. Собственность исполняется, а не регистрируется.' : 'Ранняя административная абстракция началась. Деревья нумеруются впервые. Они не давали согласия.'}`;
    if (yr <= 1980) return `[ ${yr} ] — ${yr < 1940 ? 'Город консолидируется. Неформальные территории формализуются. Некоторые жители будут вытеснены в течение десятилетия.' : yr < 1960 ? 'Реконструкция или стремительное развитие. Обломки прежних устройств включаются в новые основания.' : 'Модернизация. Алгоритмы ещё не управляют путями, но их предшественники — расписания, зональные коды — переписывают собственность.'}`;
    if (yr <= 2040) return `[ ${yr} ] — Текущая конфигурация. ${yr > 2025 ? 'Климат начал переписывать территориальные претензии. Некоторые пограничные зоны теперь неопределённы.' : 'Собственность многослойна, оспаривается, частично цифровая. Несколько нынешних владельцев не фигурируют ни в каком реестре.'}`;
    return `[ ${yr} ] — ${yr < 2080 ? 'Муниципалитет частично заменён адаптивными инфраструктурными системами. Нечеловеческое юридическое лицо признано в некоторых юрисдикциях.' : 'Оригинальная инфраструктура рекультивируется. Сформировались новые нечеловеческие юрисдикции. У них ещё нет названий ни на одном из нынешних языков.'}`;
  }
  if (lang === 'ar') {
    if (yr <= 1900) return `[ ${yr} ] — ${name} لا توجد بهذا الشكل. ${yr < 1800 ? 'تحكم الأرض دورات موسمية وسكان غير بشريين. لا سجل عقاري. الملكية تُمارَس ولا تُسجَّل.' : 'بدأ التجريد الإداري المبكر. تُرقَّم الأشجار للمرة الأولى. لم تُعطِ موافقتها.'}`;
    if (yr <= 1980) return `[ ${yr} ] — ${yr < 1940 ? 'تتوطد المدينة. تُرسمل الأراضي غير الرسمية. سيُهجَّر بعض السكان خلال العقد.' : yr < 1960 ? 'إعادة إعمار أو تطوير متسارع. تُدمج حطام الترتيبات السابقة في الأسس الجديدة.' : 'تحديث. لا تدير الخوارزميات المسارات بعد، لكن سابقيها — الجداول الزمنية، قوانين التقسيم — تعيد كتابة الملكية.'}`;
    if (yr <= 2040) return `[ ${yr} ] — التكوين الحالي. ${yr > 2025 ? 'بدأ المناخ في إعادة كتابة المطالبات الإقليمية. بعض المناطق الحدودية باتت غير محددة.' : 'الملكية متعددة الطبقات، متنازع عليها، رقمية جزئياً. عدة مالكين حاليين لا يظهرون في أي سجل.'}`;
    return `[ ${yr} ] — ${yr < 2080 ? 'استُبدل البلد جزئياً بأنظمة بنية تحتية تكيفية. تعترف بعض الولايات القضائية بالشخصية القانونية غير البشرية.' : 'تُستعاد البنية التحتية الأصلية. تشكلت ولايات قضائية غير بشرية جديدة. ليس لها أسماء بعد في أي لغة حالية.'}`;
  }
  // Default: English
  if (yr <= 1900) return `[ ${yr} ] — ${name} does not exist in this form. ${yr < 1800 ? 'The land is governed by seasonal cycles and non-human occupants. No cadastral record. Ownership is performed, not registered.' : 'Early administrative abstraction has begun. Trees are being numbered for the first time. They did not consent.'}`;
  if (yr <= 1980) return `[ ${yr} ] — ${yr < 1940 ? 'The city is consolidating. Informal territories are being formalised. Some residents will be displaced within the decade.' : yr < 1960 ? 'Reconstruction or rapid development is underway. The debris of previous arrangements is being incorporated into the new foundations.' : 'Modernisation. Algorithms are not yet running the pathways, but their predecessors — schedules, zoning codes — are rewriting ownership.'}`;
  if (yr <= 2040) return `[ ${yr} ] — Current configuration. ${yr > 2025 ? 'The climate has begun rewriting territorial claims. Some boundary zones are newly uncertain.' : 'Ownership is layered, contested, partially digital. Several current owners do not appear in any register.'}`;
  return `[ ${yr} ] — ${yr < 2080 ? 'The municipality has been partially replaced by adaptive infrastructure systems. Non-human legal personhood is recognised in some jurisdictions.' : 'The original infrastructure is being reclaimed. New non-human jurisdictions have formed. They have no names yet in any current language.'}`;
}

export const TYPE_COLORS = {
  monument: '#E8820C',
  park: '#3DB847',
  market: '#2B8FE8',
  open: '#12C49A',
  district: '#7C5CE8',
  transit: '#E83C3C',
  waterfront: '#2B8FE8',
  square: '#D14B7A',
  cultural: '#B8411A',
  waterway: '#2B8FE8',
  infrastructure: '#888888',
};
