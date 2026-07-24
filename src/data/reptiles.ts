export type CareSection = {
  title: string;
  content: string;
  bullets?: string[];
};

export type Reptile = {
  slug: string;
  name: string;
  scientificHint: string;
  tagline: string;
  description: string;
  image: string;
  imageAlt: string;
  accent: string;
  humidity: string;
  tempRange: string;
  diet: CareSection;
  diseases: CareSection;
  habitat: CareSection;
  lighting: CareSection;
  humidityDetail: CareSection;
  substrate: CareSection;
  substitutes: CareSection;
  healthRiskSigns: string[];
  scheduleDefaults: {
    feeding: string;
    watering: string;
    cleaning: string;
  };
};

export const reptiles: Reptile[] = [
  {
    slug: "bearded-dragons",
    name: "Bearded Dragons",
    scientificHint: "Pogona vitticeps",
    tagline: "Sun-loving desert companions",
    description:
      "Bearded dragons are calm, curious lizards known for their expressive beards and daytime activity. They thrive with strong heat gradients, UVB, and a varied insect-and-greens diet.",
    image: "/reptiles/bearded-dragon.jpg",
    imageAlt: "Bearded dragon close-up",
    accent: "#c4a35a",
    humidity: "30–40%",
    tempRange: "Basking 95–105°F · Cool 75–85°F",
    diet: {
      title: "Diet",
      content:
        "Juveniles need more protein (insects); adults shift toward leafy greens with insects a few times per week. Dust feeders with calcium (and occasional multivitamin).",
      bullets: [
        "Staple greens: collard, mustard, dandelion, turnip greens",
        "Insects: dubia roaches, crickets, black soldier fly larvae",
        "Occasional treats: squash, bell pepper, blueberries (sparingly)",
        "Avoid: avocado, rhubarb, fireflies, high-oxalate greens as staples",
      ],
    },
    diseases: {
      title: "Possible Diseases",
      content:
        "Most issues come from low UVB, poor calcium, or wet/dirty enclosures.",
      bullets: [
        "Metabolic bone disease (MBD) — soft jaw, tremors, lethargy",
        "Impaction — straining, loss of appetite after large prey/substrate ingestion",
        "Respiratory infection — wheezing, open-mouth breathing, mucus",
        "Parasites — weight loss, runny stools, lethargy",
        "Mouth rot / stomatitis — swelling, cheese-like discharge in mouth",
      ],
    },
    habitat: {
      title: "Habitat Setup (Minimum)",
      content:
        "Adults need horizontal space to run and climb low branches. Prioritize a solid heat gradient over decorative clutter.",
      bullets: [
        "Minimum adult enclosure: 120 gallon / 4×2×2 ft (larger preferred)",
        "Hide on warm and cool ends",
        "Basking platform under heat + UVB",
        "Shallow water dish; sturdy décor that will not tip",
      ],
    },
    lighting: {
      title: "Lighting Requirements",
      content:
        "Bearded dragons are diurnal and require high-output UVB plus a focused basking lamp.",
      bullets: [
        "UVB: T5 HO 10–12% linear tube spanning ~½–⅔ of enclosure length",
        "Basking halogen or deep-heat projector for a clear hot spot",
        "12–14 hour day / night cycle; lights off completely at night",
        "Replace UVB bulbs on manufacturer schedule (often 6–12 months)",
      ],
    },
    humidityDetail: {
      title: "Humidity Level",
      content:
        "Keep humidity low-to-moderate to protect respiratory health while allowing brief humid hides for shedding.",
      bullets: [
        "Target ambient: 30–40%",
        "Use a humid hide during shed if needed",
        "Avoid constantly damp substrate",
      ],
    },
    substrate: {
      title: "Substrate Recommendations",
      content:
        "Choose diggable, low-dust options that reduce impaction risk for younger dragons.",
      bullets: [
        "Best: 50/50 organic topsoil + play sand mix (adults)",
        "Also good: slate tile, non-adhesive shelf liner, reptile carpet (temporary)",
        "Avoid long-term: pure calcium sand, walnut shell, cedar/pine shavings",
      ],
    },
    substitutes: {
      title: "Substitutes & Short-Term Options",
      content:
        "Use temporary setups when relocating, quarantining, or waiting on upgrades.",
      bullets: [
        "Paper towel / newspaper for quarantine or sick animals",
        "Tile for easy cleaning while hunting permanent bioactive mix",
        "Insect substitutes: silkworms or hornworms if dubia/crickets unavailable",
        "Greens substitutes: endive, escarole, cilantro in rotation",
      ],
    },
    healthRiskSigns: [
      "Limping, soft jaw, or trembling (possible MBD)",
      "Refusing food for several days (adults) or 24–48h (juveniles)",
      "Open-mouth breathing or wheezing",
      "Black, sticky, or bloody stool",
      "Sunken eyes and wrinkled skin (dehydration)",
    ],
    scheduleDefaults: {
      feeding: "Juveniles: insects 1–2× daily + greens. Adults: greens daily, insects 2–3× weekly",
      watering: "Fresh water daily; mist lightly or offer baths 1–2× weekly if dehydrated",
      cleaning: "Spot clean daily; full substrate change or deep clean every 2–4 weeks",
    },
  },
  {
    slug: "snakes",
    name: "Snakes",
    scientificHint: "e.g. Corn, Ball Python, King",
    tagline: "Quiet hunters of the canopy floor",
    description:
      "Pet snakes range from beginner corn snakes to humidity-sensitive ball pythons. Secure enclosures, correct prey size, and stable temperatures keep them thriving.",
    image: "/reptiles/snake.jpg",
    imageAlt: "Corn snake among foliage",
    accent: "#7ec8a3",
    humidity: "40–60% (species dependent)",
    tempRange: "Warm 85–90°F · Cool 75–80°F",
    diet: {
      title: "Diet",
      content:
        "Most commonly kept snakes eat appropriately sized rodents. Feed frozen-thawed prey for safety and consistency.",
      bullets: [
        "Prey roughly as wide as the snake’s thickest body section",
        "Juveniles: every 5–7 days; adults: every 7–14 days (species vary)",
        "Thaw prey fully in warm water; never microwave",
        "Do not handle for 48 hours after feeding",
      ],
    },
    diseases: {
      title: "Possible Diseases",
      content:
        "Watch humidity, hygiene, and mites — especially in ball pythons and densely furnished setups.",
      bullets: [
        "Respiratory infection — wheezing, bubbling nostrils, gaping",
        "Scale rot — ventral blisters from chronically wet substrate",
        "Mites — tiny black/red dots, soaking excessively, restlessness",
        "Inclusion body disease (boas/pythons) — neurological signs, regurgitation",
        "Stomatitis — swollen gums, reluctance to feed",
      ],
    },
    habitat: {
      title: "Habitat Setup (Minimum)",
      content:
        "Length matters more than height for most terrestrial snakes. Provide at least two hides and a thermal gradient.",
      bullets: [
        "Minimum: enclosure length ≈ snake length (or larger for active species)",
        "Warm hide + cool hide required",
        "Climbing branches for arboreal/semi-arboreal species",
        "Secure locking lid — snakes are escape artists",
      ],
    },
    lighting: {
      title: "Lighting Requirements",
      content:
        "Snakes do not require intense UVB like diurnal lizards, but a gentle day/night cycle and heat source are essential.",
      bullets: [
        "Ambient day/night lighting on a timer (12/12)",
        "Under-tank heat pad or radiant heat with thermostat (mandatory)",
        "Optional low-level UVB for enrichment (species-dependent)",
        "No hot rocks — burn risk",
      ],
    },
    humidityDetail: {
      title: "Humidity Level",
      content:
        "Targets vary widely: corn snakes prefer moderate air; ball pythons need higher humidity for clean sheds.",
      bullets: [
        "Corn / kings: ~40–50%",
        "Ball pythons: ~50–60% ambient, humid hide for shed",
        "Measure with a digital hygrometer at mid-level",
      ],
    },
    substrate: {
      title: "Substrate Recommendations",
      content:
        "Pick absorbent, low-dust bedding that holds humidity without staying soggy.",
      bullets: [
        "Good: coconut husk, cypress mulch, aspen (for lower humidity species)",
        "Bioactive soil mixes for planted setups",
        "Avoid: cedar, pine, overly fine sand for most snakes",
      ],
    },
    substitutes: {
      title: "Substitutes & Short-Term Options",
      content:
        "Paper-based substrates and temporary tubs work well for quarantine or travel.",
      bullets: [
        "Paper towel / butcher paper for quarantine",
        "Plastic tubs with ventilation for temporary housing",
        "Prey substitutes: quail, chicks (species-appropriate, occasional)",
        "If frozen mice unavailable: same-size rats or appropriately sized alternatives",
      ],
    },
    healthRiskSigns: [
      "Regurgitation or repeated refusal to feed",
      "Wheezing, mucus, or open-mouth breathing",
      "Stuck shed around eyes or tail tip",
      "Lethargy paired with weight loss",
      "Visible mites or frequent soaking",
    ],
    scheduleDefaults: {
      feeding: "Every 7–14 days depending on age and species",
      watering: "Fresh water daily; large bowl for soaking",
      cleaning: "Spot clean soiled spots immediately; full change every 2–4 weeks",
    },
  },
  {
    slug: "geckos",
    name: "Geckos",
    scientificHint: "e.g. Leopard, Crested, Gargoyle",
    tagline: "Nocturnal climbers with sticky feet",
    description:
      "Geckos are popular for smaller footprints and engaging personalities. Crested geckos love vertical space and fruit diets; leopard geckos prefer dry ground with a humid hide.",
    image: "/reptiles/gecko.jpg",
    imageAlt: "Leopard gecko on a rocky surface",
    accent: "#9ad0b1",
    humidity: "40–80% (species dependent)",
    tempRange: "Species specific — see lighting & habitat",
    diet: {
      title: "Diet",
      content:
        "Diets split by species: leopard geckos are insectivores; crested/gargoyle geckos eat commercial fruit diets plus insects.",
      bullets: [
        "Leopard: gut-loaded insects + calcium dusting",
        "Crested: CGD (crested gecko diet) every other day + insects weekly",
        "Always provide clean water or light misting for drinkers",
        "Avoid wild-caught insects (pesticides/parasites)",
      ],
    },
    diseases: {
      title: "Possible Diseases",
      content:
        "Calcium deficiency and stuck shed are the most common preventable problems.",
      bullets: [
        "MBD — soft jaw, bowed limbs, tremors",
        "Dyseclysis (stuck shed) — especially toes and eye caps",
        "Impaction — constipation after substrate ingestion",
        "Cryptosporidiosis (leopard) — weight loss, regurgitation",
        "Mouth rot and bacterial infections in dirty enclosures",
      ],
    },
    habitat: {
      title: "Habitat Setup (Minimum)",
      content:
        "Match enclosure orientation to lifestyle: horizontal for leopard geckos, vertical for cresteds.",
      bullets: [
        "Leopard adult: 20–40+ gallon horizontal with warm/cool hides",
        "Crested adult: 18×18×24 in vertical minimum (taller preferred)",
        "Humid hide for shedding (especially leopard geckos)",
        "Plenty of cover — geckos feel secure when they can hide",
      ],
    },
    lighting: {
      title: "Lighting Requirements",
      content:
        "Most pet geckos are crepuscular/nocturnal, but gentle UVB and a heat gradient still improve health.",
      bullets: [
        "Leopard: belly heat via thermostat-controlled pad + low UVB optional/recommended",
        "Crested: room temps 72–78°F; avoid hot basking spots over ~82°F",
        "Night lights not required; use a normal day/night cycle",
        "Never leave heat pads unregulated",
      ],
    },
    humidityDetail: {
      title: "Humidity Level",
      content:
        "Leopard geckos need dry ambient air with a moist hide; cresteds need regular misting.",
      bullets: [
        "Leopard ambient: 30–40% + humid hide 70%+",
        "Crested: 60–80% with daily misting and dry-out periods",
        "Watch for mold — ventilate after misting",
      ],
    },
    substrate: {
      title: "Substrate Recommendations",
      content:
        "Young or sick geckos do best on paper; adults can use naturalistic mixes.",
      bullets: [
        "Leopard adults: soil/sand mix or slate; paper for juveniles",
        "Crested: coco fiber, bioactive soil, or paper towel",
        "Avoid sticky sand and large loose particles for hatchlings",
      ],
    },
    substitutes: {
      title: "Substitutes & Short-Term Options",
      content:
        "When commercial diets or preferred insects are out of stock, rotate safe alternatives.",
      bullets: [
        "Paper towel quarantine setups",
        "CGD substitute brands / homemade emergency mash (vet-approved recipes only)",
        "Insect rotation: crickets, dubia, mealworms (moderation), silkworms",
        "Temporary bins with ventilation for travel",
      ],
    },
    healthRiskSigns: [
      "Missing toe tips from stuck shed",
      "Tremors or soft bones",
      "Sudden weight loss or regurgitation",
      "Cloudy stuck eye caps",
      "Lethargy during normal active hours",
    ],
    scheduleDefaults: {
      feeding: "Leopard: insects daily–every other day (age dependent). Crested: CGD every 1–2 days",
      watering: "Fresh water daily; mist cresteds once or twice daily",
      cleaning: "Spot clean daily; deeper clean weekly–biweekly",
    },
  },
  {
    slug: "monitor-lizards",
    name: "Monitor Lizards",
    scientificHint: "e.g. Ackie, Savannah, Nile",
    tagline: "Intelligent excavators with big energy",
    description:
      "Monitors are active, smart lizards that need large enclosures, deep digging substrate, and experienced keepers. Smaller species like Ackie monitors are more manageable than savannahs.",
    image: "/reptiles/monitor.jpg",
    imageAlt: "Savannah monitor lizard",
    accent: "#d4b483",
    humidity: "40–70% (species dependent)",
    tempRange: "Basking 120–150°F · Ambient 80–90°F",
    diet: {
      title: "Diet",
      content:
        "Monitors are primarily carnivorous. Offer whole prey and insects; avoid fatty ground meat as a staple.",
      bullets: [
        "Insects, rodents, chicks, fish (species-appropriate)",
        "Variety prevents nutritional gaps",
        "Calcium dusting for juveniles on insect-heavy diets",
        "Limit high-fat feeders; no toxic prey",
      ],
    },
    diseases: {
      title: "Possible Diseases",
      content:
        "Large, active monitors suffer when space, heat, or hygiene are inadequate.",
      bullets: [
        "Obesity and fatty liver from overfeeding",
        "MBD in growing animals without UVB/calcium",
        "Parasites — especially wild-caught imports",
        "Respiratory infections from cool, damp conditions",
        "Injuries from aggressive tank mates or sharp décor",
      ],
    },
    habitat: {
      title: "Habitat Setup (Minimum)",
      content:
        "Think big: deep substrate for burrows, climbing structures, and a powerful basking zone.",
      bullets: [
        "Ackie: 4×2×2 ft minimum; larger strongly preferred",
        "Savannah / Nile: custom rooms or very large enclosures",
        "Deep substrate (12–24+ in) for digging",
        "Secure doors — monitors are strong and curious",
      ],
    },
    lighting: {
      title: "Lighting Requirements",
      content:
        "Monitors need intense heat and high-quality UVB to match their high metabolism.",
      bullets: [
        "Hot basking zone (often 120°F+ depending on species)",
        "High-output T5 UVB across a large portion of the enclosure",
        "Strong day/night cycle",
        "All heat sources on thermostats / carefully monitored",
      ],
    },
    humidityDetail: {
      title: "Humidity Level",
      content:
        "Many monitors need humid burrows even when ambient air is drier.",
      bullets: [
        "Ackie: ambient ~40–60% with moist dig zones",
        "Tropical monitors: higher ambient humidity",
        "Provide a moisture gradient, not a constantly soaked floor",
      ],
    },
    substrate: {
      title: "Substrate Recommendations",
      content:
        "Deep, compactable mixes that hold tunnels are ideal.",
      bullets: [
        "Topsoil + play sand + clay (species-tuned mixes)",
        "Excavator clay for burrow walls",
        "Avoid shallow decorative bark chips alone",
      ],
    },
    substitutes: {
      title: "Substitutes & Short-Term Options",
      content:
        "Temporary housing is only for quarantine or emergencies — monitors need permanent space quickly.",
      bullets: [
        "Large plastic tubs for short quarantine only",
        "Paper substrate during medical treatment",
        "Prey rotation if preferred feeders unavailable",
        "Outdoor supervised time only in secure, escape-proof areas",
      ],
    },
    healthRiskSigns: [
      "Rapid weight gain or refusal to move",
      "Labored breathing",
      "Limping or swollen limbs",
      "Abnormal stools or parasites visible",
      "Aggression paired with opaque eyes / pre-shed stress",
    ],
    scheduleDefaults: {
      feeding: "Juveniles daily; adults every 2–3 days (adjust for body condition)",
      watering: "Large fresh water bowl daily; soak as needed",
      cleaning: "Spot clean daily; refresh dig zones regularly",
    },
  },
  {
    slug: "chameleons",
    name: "Chameleons",
    scientificHint: "e.g. Veiled, Panther, Jackson’s",
    tagline: "Arboreal artists of light and leaf",
    description:
      "Chameleons need vertical screened enclosures, moving air, live plants, and careful hydration. They drink dripping water more readily than still bowls.",
    image: "/reptiles/chameleon.jpg",
    imageAlt: "Veiled chameleon among leaves",
    accent: "#5fbf8a",
    humidity: "50–80% with airflow",
    tempRange: "Basking 85–95°F · Cool 70–75°F",
    diet: {
      title: "Diet",
      content:
        "Insectivores that benefit from gut-loaded, dusted feeders and occasional plant matter (veiled).",
      bullets: [
        "Crickets, dubia, silkworms, hornworms, flies",
        "Gut-load insects 24 hours before feeding",
        "Calcium dusting most feedings; multivitamin 1–2× weekly",
        "Veileds may nibble greens — offer safe plants",
      ],
    },
    diseases: {
      title: "Possible Diseases",
      content:
        "Stress, low hydration, and poor UVB are leading causes of chameleon illness.",
      bullets: [
        "Dehydration — sunken eyes, dry urate, lethargy",
        "MBD — weak grip, tremors, jaw deformity",
        "Respiratory infection — mouth gaping, mucus",
        "Mouth rot and eye infections",
        "Parasites — common in imports; quarantine new animals",
      ],
    },
    habitat: {
      title: "Habitat Setup (Minimum)",
      content:
        "Screen cages with live plants and branching pathways outperform glass boxes for most species.",
      bullets: [
        "Veiled adult: 24×24×48 in screen enclosure minimum",
        "Dense foliage cover + horizontal/diagonal perches",
        "Drainage tray under plants; never stagnant wet floors",
        "Visual barriers — chameleons stress when constantly exposed",
      ],
    },
    lighting: {
      title: "Lighting Requirements",
      content:
        "Bright linear UVB and a moderate basking perch are non-negotiable.",
      bullets: [
        "T5 HO 5–6% UVB mounted above screen (follow distance guides)",
        "Separate basking bulb creating a gradient",
        "12–12 photoperiod",
        "No nighttime heat unless ambient drops dangerously low",
      ],
    },
    humidityDetail: {
      title: "Humidity Level",
      content:
        "Humidity should spike with misting then dry with airflow — stagnant wet air causes illness.",
      bullets: [
        "Target 50–80% depending on species and time of day",
        "Mist 2–3× daily; dripper or fogger as supplements",
        "Strong ventilation is as important as moisture",
      ],
    },
    substrate: {
      title: "Substrate Recommendations",
      content:
        "Many keepers use bare floors or drainage layers under potted plants to reduce impaction and mold.",
      bullets: [
        "Best: no loose substrate + potted plants / bioactive drainage layer",
        "Paper towel for quarantine",
        "Avoid deep loose bark that invites accidental ingestion",
      ],
    },
    substitutes: {
      title: "Substitutes & Short-Term Options",
      content:
        "Hydration and feeding can be adapted when equipment fails.",
      bullets: [
        "Hand misting if automatic mister breaks",
        "Drip system from a water bottle over leaves",
        "Temporary screen enclosure or tall mesh cage",
        "Feeder substitutes: roaches or flies if crickets unavailable",
      ],
    },
    healthRiskSigns: [
      "Sunken eyes or thick, dry urates",
      "Color staying dark and stressed for long periods",
      "Weak grip or falling from branches",
      "Closed/swollen eyes",
      "Refusal to eat for more than a couple of days",
    ],
    scheduleDefaults: {
      feeding: "Juveniles daily; adults every 1–2 days with appropriately sized insects",
      watering: "Mist 2–3× daily; dripper during daylight",
      cleaning: "Remove frass daily; wipe surfaces weekly; refresh plants as needed",
    },
  },
];

export function getReptile(slug: string): Reptile | undefined {
  return reptiles.find((r) => r.slug === slug);
}

export function getAllSlugs(): string[] {
  return reptiles.map((r) => r.slug);
}
