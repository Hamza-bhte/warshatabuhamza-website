import { WORKSHOP_IMAGES } from '../assets/workshopImages';

export interface BilingualText {
  en: string;
  ar: string;
}

export interface WorkshopService {
  id: string;
  title: string;
  arabicTitle: string;
  shortDesc: string;
  arabicShortDesc: string;
  fullDesc: string;
  arabicFullDesc: string;
  examples: BilingualText[];
  materials: string;
  arabicMaterials: string;
  image: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  arabicTitle: string;
  category: 'gates' | 'grills' | 'fabrication' | 'repairs';
  categoryLabel: string;
  arabicCategoryLabel: string;
  image: string;
  description: string;
  arabicDescription: string;
  materials: string;
  arabicMaterials: string;
  finish: string;
  arabicFinish: string;
  application: string;
  arabicApplication: string;
}

export const WORKSHOP_CONFIG = {
  name: "WARSHAT ABO HAMZA",
  arabicName: "ورشة أبو حمزة",
  fullName: "WARSHAT ABO HAMZA (ورشة أبو حمزة)",
  businessType: "Local Welding Workshop & Metal Fabrication",
  arabicBusinessType: "ورشة حدادة وتفصيل معادن محلية",
  locationDisplay: "Hadda, Bahrah, Makkah Region, Saudi Arabia",
  arabicLocationDisplay: "حداء، بحرة، منطقة مكة المكرمة، المملكة العربية السعودية",
  serviceAreas: "Hadda, Bahrah, Jamum & Makkah Region",
  arabicServiceAreas: "حداء، بحرة، الجموم ومنطقة مكة المكرمة",
  phoneDisplay: "+966 58 276 9542",
  arabicPhoneDisplay: "+٩٦٦ ٥٨ ٢٧٦ ٩٥٤٢",
  phoneRaw: "+966582769542",
  whatsappNumber: "966582769542",
  whatsappUrl: "https://wa.me/966582769542",
  email: "quotes@warshatabohamza.com",
  websiteUrl: "https://warshatabohamza.com",
  domain: "warshatabohamza.com",
  workingHours: "Saturday – Thursday: 8:00 AM – 8:00 PM",
  arabicWorkingHours: "السبت – الخميس: ٨:٠٠ صباحاً – ٨:٠٠ مساءً",
};

export const WORKSHOP_SERVICES: WorkshopService[] = [
  {
    id: "iron-gates-doors",
    title: "Custom Iron Gates & Metal Doors",
    arabicTitle: "تفصيل أبواب حديد وبوابات مخصصة",
    shortDesc:
      "Strong, custom-built main entrance gates, villa sliding gates, garage doors, and heavy-duty security steel doors tailored to your exact measurements.",
    arabicShortDesc:
      "تفصيل بوابات فلل ومداخل رئيسية قوية، وأبواب سحاب، وأبواب كراج وأبواب حديد أمنية متينة حسب المقاسات المطلوبة بدقة.",
    fullDesc:
      "We build durable iron gates and metal doors for homes, villas, farms, and commercial shops across Hadda, Bahrah, and Jamum. Every gate is measured to fit your entrance, welded cleanly for long-lasting strength, and prepared with anti-rust primer and clean paint finishes.",
    arabicFullDesc:
      "نقوم بتفصيل وتركيب البوابات والأبواب الحديدية المتينة للمنازل والفلل والمزارع والمحلات التجارية في حداء وبحرة والجموم. يتم أخذ المقاسات بدقة لكل مدخل، مع لحام نظيف ومتين وتجهيز الحديد بطبقة أساس ضد الصدأ ودهان متقن يدوم طويلاً.",
    examples: [
      { en: "Villa main entrance & sliding gates", ar: "بوابات مداخل الفلل والأبواب السحاب" },
      { en: "Heavy-duty steel security doors", ar: "أبواب حديد أمنية ثقيلة ومتينة" },
      { en: "Laser-cut decorative iron gate panels", ar: "ألواح قص ليزر وزخارف حديدية أنيقة" },
      { en: "Courtyard & farm entrance gates", ar: "بوابات الأحواش والمزارع والاستراحات" },
    ],
    materials: "Solid Iron, Steel Tube & Sheet Metal",
    arabicMaterials: "حديد صلب، تيوبات حديد وألواح صاج",
    image: WORKSHOP_IMAGES.localIronGate,
  },
  {
    id: "window-grills-railings",
    title: "Window Grills & Steel Railings",
    arabicTitle: "شبابيك حماية ودرابزين حديد",
    shortDesc:
      "Cleanly welded window protection grills, indoor and outdoor stair handrails, balcony railings, and perimeter fencing built for safety and style.",
    arabicShortDesc:
      "تصنيع وتركيب شبابيك الحماية، ودرابزين الدرج الداخلي والخارجي، وحواجز البلكونات والأسوار الحديدية بأمان وشكل أنيق.",
    fullDesc:
      "Protect your home or building with neat, sturdy window grills and railings. Whether you prefer simple modern straight bars or decorative ironwork, we fabricate and install secure grills and handrails with smooth ground welds and clean lines.",
    arabicFullDesc:
      "احمِ منزلك أو مبناك بشبابيك حماية ودرابزين حديدي متين وأنيق. سواء كنت تفضل التصاميم العصرية البسيطة أو الأشكال المزخرفة، ننفذ ونركب الشبابيك والدرابزين بلحامات ناعمة وتشطيب نظيف.",
    examples: [
      { en: "Home & apartment window security grills", ar: "شبابيك حماية حديد للمنازل والشقق" },
      { en: "Staircase handrails & balustrades", ar: "درابزين درج داخلي وخارجي" },
      { en: "Balcony & rooftop safety railings", ar: "حواجز أمان للبلكونات والأسطح" },
      { en: "Yard dividers & steel fencing", ar: "فواصل أحواش وأسوار حديدية" },
    ],
    materials: "Square Steel Tube, Solid Bar & Flat Iron",
    arabicMaterials: "تيوب حديد مربع، قضبان صلبة وبسطات حديد",
    image: WORKSHOP_IMAGES.windowGrillsRailings,
  },
  {
    id: "welding-fabrication",
    title: "Welding & Metal Fabrication",
    arabicTitle: "أعمال اللحام وتفصيل المعادن",
    shortDesc:
      "Practical custom metal fabrication including steel carports, shaded canopies, storage racks, worktables, metal frames, and custom steel structures.",
    arabicShortDesc:
      "تفصيل جميع الأعمال الحديدية العملية مثل مظلات السيارات، وهياكل السواتر والمظلات، ورفوف التخزين، وطاولات العمل، والهياكل الحديدية.",
    fullDesc:
      "From shaded parking frames and courtyard canopies to shop shelving, heavy workbenches, and custom steel supports, our workshop handles everyday metal fabrication jobs accurately and reliably.",
    arabicFullDesc:
      "من هياكل مظلات السيارات ومظلات الأحواش إلى رفوف المحلات وطاولات العمل الثقيلة والدعامات الحديدية المخصصة، تنفذ ورشتنا جميع أعمال التفصيل والحدادة اليومية بدقة وموثوقية.",
    examples: [
      { en: "Carport & courtyard shade steel frames", ar: "هياكل مظلات السيارات ومظلات الأحواش" },
      { en: "Custom metal frames, stands & supports", ar: "قواعد وهياكل وحوامل حديدية مخصصة" },
      { en: "Heavy-duty storage racks & worktables", ar: "رفوف تخزين ثقيلة وطاولات ورش" },
      { en: "Shopfront steel structures & canopies", ar: "هياكل واجهات المحلات والمظلات" },
    ],
    materials: "Mild Steel, Box Section, Angle Iron & Plate",
    arabicMaterials: "حديد طري، علب حديد، زوايا وألواح صاج",
    image: WORKSHOP_IMAGES.heroWelder,
  },
  {
    id: "metal-repairs",
    title: "Metal Repairs & Maintenance",
    arabicTitle: "صيانة وإصلاح جميع الأعمال الحديدية",
    shortDesc:
      "Fast, reliable repair for broken gate hinges, sagging steel doors, damaged railings, cracked frames, locks, and general ironwork maintenance.",
    arabicShortDesc:
      "إصلاح سريع وموثوق لمفصلات البوابات المكسورة، والأبواب المائلة، والدرابزين التالف، والهياكل المشروخة، والأقفال وصيانة الحديد.",
    fullDesc:
      "Don't replace a strong steel gate or frame when it can be properly repaired. We fix broken hinges, reinforce bent doors, re-weld loose joints, replace rusted bottom sections, and restore existing ironwork at our workshop or on site.",
    arabicFullDesc:
      "لا داعي لاستبدال البوابة أو الهيكل الحديدي القوي إذا كان بالإمكان إصلاحه بشكل سليم. نقوم بإصلاح المفصلات المكسورة، وتقوية الأبواب الملتوية، وإعادة لحام المفاصل المفكوكة، وتغيير الأجزاء السفلية الصدئة في الورشة أو في الموقع.",
    examples: [
      { en: "Gate hinge & lock plate repairs", ar: "إصلاح مفصلات البوابات وأقفال الأبواب" },
      { en: "Re-welding cracked or loose steel joints", ar: "إعادة لحام المفاصل والوصلات الحديدية" },
      { en: "Rusted door bottom panel replacement", ar: "تبديل الجزء السفلي الصدئ للأبواب" },
      { en: "Trailer, rack & frame reinforcement", ar: "تدعيم وتقوية العربات والرفوف والهياكل" },
    ],
    materials: "Steel Reinforcement, Hinges, Locks & Patches",
    arabicMaterials: "حديد تدعيم، مفصلات ثقيلة، أقفال وقطع صيانة",
    image: WORKSHOP_IMAGES.workshopMetalRepair,
  },
];

export const GALLERY_PROJECTS: GalleryItem[] = [
  {
    id: "villa-iron-gate",
    title: "Custom Iron Villa Entrance Gate & Side Door",
    arabicTitle: "بوابة مدخل فيلا حديدية مع باب جانبي",
    category: "gates",
    categoryLabel: "Gates & Doors",
    arabicCategoryLabel: "بوابات وأبواب",
    image: WORKSHOP_IMAGES.localIronGate,
    description:
      "Double-leaf iron entrance gate with matching pedestrian side door, decorative laser-cut pattern panels, heavy-duty hinges, and matte charcoal protective finish.",
    arabicDescription:
      "بوابة مدخل رئيسية مزدوجة من الحديد مع باب جانبي متناسق للأفراد، وألواح زخرفية مقصوصة بالليزر، ومفصلات ثقيلة ودهان حماية رمادي داكن مطفي.",
    materials: "Heavy Steel Frame & Decorative Steel Panels",
    arabicMaterials: "هيكل حديد ثقيل وألواح زخرفة ليزر",
    finish: "Anti-Rust Primer & Matte Charcoal Paint",
    arabicFinish: "أساس ضد الصدأ ودهان رمادي داكن مطفي",
    application: "Residential Villa & Courtyard Entrance",
    arabicApplication: "مداخل الفلل والمنازل والأحواش",
  },
  {
    id: "modern-sliding-gate",
    title: "Modern Geometric Sliding Steel Gate",
    arabicTitle: "بوابة حديد سحاب بنقشة هندسية حديثة",
    category: "gates",
    categoryLabel: "Gates & Doors",
    arabicCategoryLabel: "بوابات وأبواب",
    image: WORKSHOP_IMAGES.customMetalFabrication,
    description:
      "Custom geometric pattern sliding gate fabricated in the workshop with clean square-tube framing, smooth ground welds, and solid lock housing.",
    arabicDescription:
      "بوابة سحاب بتصميم هندسي عصري تم تفصيلها في الورشة بإطار حديد مربع متين ولحامات ملساء نظيفة مع صندوق قفل محكم.",
    materials: "Steel Box Section & Laser-Cut Sheet Steel",
    arabicMaterials: "تيوب حديد مربع وصاج قص ليزر",
    finish: "Brushed Frame with Dark Powder Coat Infill",
    arabicFinish: "إطار مصقول مع حشوة مطلية بلون داكن",
    application: "Home Driveway & Commercial Entrance",
    arabicApplication: "مداخل السيارات والمنازل والمحلات",
  },
  {
    id: "window-security-grills",
    title: "Custom Window Security Grills & Handrail Set",
    arabicTitle: "شبابيك حماية حديد مع درابزين درج",
    category: "grills",
    categoryLabel: "Grills & Railings",
    arabicCategoryLabel: "شبابيك ودرابزين",
    image: WORKSHOP_IMAGES.windowGrillsRailings,
    description:
      "Made-to-measure steel window grills and matching angled stair railing fabricated on our workshop bench for strong residential protection.",
    arabicDescription:
      "شبابيك حماية حديدية مفصلة حسب المقاس مع درابزين درج مائل متناسق تم تصنيعه في الورشة لتوفير حماية قوية للمنازل.",
    materials: "Heavy-Gauge Square Tube & Solid Steel Bars",
    arabicMaterials: "تيوبات حديد سميكة وقضبان صلبة",
    finish: "Smooth Ground Seams & Matte Black Coating",
    arabicFinish: "لحامات مصنفرة ودهان أسود مطفي",
    application: "Windows, Apartments & Exterior Stairs",
    arabicApplication: "النوافذ والشقق والدرج الخارجي",
  },
  {
    id: "steel-staircase-railing",
    title: "Steel Staircase Frame & Safety Railings",
    arabicTitle: "هيكل درج حديد مع درابزين أمان",
    category: "grills",
    categoryLabel: "Grills & Railings",
    arabicCategoryLabel: "شبابيك ودرابزين",
    image: WORKSHOP_IMAGES.steelStaircase,
    description:
      "Sturdy welded steel staircase structure with clean side stringers, tread supports, and continuous safety handrails built to exact site dimensions.",
    arabicDescription:
      "هيكل درج حديدي متين ملحوم بدقة مع جسور جانبية وحوامل درجات ودرابزين أمان متكامل منفذ حسب مقاسات الموقع.",
    materials: "Structural Steel Channel & Tube Railings",
    arabicMaterials: "مجاري حديدية ودرابزين أنبوبي",
    finish: "Satin Black Protective Steel Coating",
    arabicFinish: "طلاء حديد أسود مقاوم للعوامل",
    application: "Multi-Level Homes, Shops & Offices",
    arabicApplication: "المنازل متعددة الأدوار والمحلات والمكاتب",
  },
  {
    id: "courtyard-steel-carport",
    title: "Residential Steel Shade & Carport Frame",
    arabicTitle: "مظلة سيارات وهياكل تظليل حديدية",
    category: "fabrication",
    categoryLabel: "Fabrication & Shades",
    arabicCategoryLabel: "تفصيل ومظلات",
    image: WORKSHOP_IMAGES.metalShedCarport,
    description:
      "Custom welded steel carport and courtyard shade canopy engineered for local sun protection with strong upright posts and decorative side trim.",
    arabicDescription:
      "هيكل مظلة سيارات ومظلة حوش حديدية مصممة للحماية من الشمس بأعمدة حديدية قوية وزخارف جانبية أنيقة.",
    materials: "Heavy Square Steel Columns & Roof Purlins",
    arabicMaterials: "أعمدة حديد مربعة ثقيلة ومدادات سقف",
    finish: "Weather-Resistant Matte Charcoal Paint",
    arabicFinish: "دهان رمادي داكن مقاوم للشمس والحرارة",
    application: "House Parking, Courtyards & Rest Areas",
    arabicApplication: "مواقف المنازل والأحواش والاستراحات",
  },
  {
    id: "frame-hinge-repair",
    title: "Steel Door Frame Welding & Hinge Repair",
    arabicTitle: "لحام إطار باب حديد وإصلاح المفصلات",
    category: "repairs",
    categoryLabel: "Repairs & Welding",
    arabicCategoryLabel: "صيانة ولحام",
    image: WORKSHOP_IMAGES.workshopMetalRepair,
    description:
      "Precision welding repair and reinforcement of a heavy steel door frame on our workshop table, restoring strength and smooth alignment.",
    arabicDescription:
      "إصلاح وتقوية إطار باب حديدي ثقيل على طاولة الورشة لإعادة المتانة والوزنية السليمة وسهولة الفتح والإغلاق.",
    materials: "Reinforced Steel Tubing & Heavy Weld Hinges",
    arabicMaterials: "تيوبات تدعيم ومفصلات لحام ثقيلة",
    finish: "Clean Weld Dressing & Rust-Guard Primer",
    arabicFinish: "تنظيف اللحام وطلاء أساس ضد الصدأ",
    application: "Door Frames, Gates & General Metal Repairs",
    arabicApplication: "إطارات الأبواب والبوابات والصيانة العامة",
  },
];
