export const SITE_URL = "https://www.mwglassrepair.com";

export const business = {
  legalName: "MW Glass Repair, LLC",
  name: "MW Glass Repair",
  tagline: "Mobile Auto Glass, Done Right",
  phone: "(330) 305-2643",
  phoneHref: "tel:+13303052643",
  phoneE164: "+13303052643",
  smsHref: "sms:+13303052643",
  yearsExperience: 20,
  founded: new Date().getFullYear() - 20,
  hours: [
    { day: "Monday", open: "8:00 AM", close: "5:00 PM" },
    { day: "Tuesday", open: "8:00 AM", close: "5:00 PM" },
    { day: "Wednesday", open: "8:00 AM", close: "5:00 PM" },
    { day: "Thursday", open: "8:00 AM", close: "5:00 PM" },
    { day: "Friday", open: "8:00 AM", close: "5:00 PM" },
  ],
  hoursDisplay: "Monday – Friday, 8:00 AM – 5:00 PM",
  serviceType: "Mobile service only — we come to your home or workplace",
  priceRange: "$$",
  guarantee: {
    replacement:
      "Every windshield we install is guaranteed against stress cracks and leaks.",
    repair: "Every rock chip repair we perform is fully guaranteed.",
  },
  windshieldMapUrl: "https://windshieldmap.com",
  socials: {
    // Add Google Business Profile / Facebook URLs here once created.
  },
};

export type County = {
  slug: string;
  name: string;
  cities: string[];
};

// Counties and representative cities/townships served. Used for the
// service-area index and for local SEO copy. Kept to well-known
// incorporated places to avoid publishing inaccurate hyper-local data.
export const counties: County[] = [
  {
    slug: "stark-county",
    name: "Stark County",
    cities: [
      "Canton",
      "North Canton",
      "Massillon",
      "Alliance",
      "Louisville",
      "Jackson Township",
      "Plain Township",
      "Perry Township",
      "Canal Fulton",
      "Hartville",
    ],
  },
  {
    slug: "summit-county",
    name: "Summit County",
    cities: [
      "Akron",
      "Cuyahoga Falls",
      "Stow",
      "Barberton",
      "Tallmadge",
      "Fairlawn",
      "Green",
      "Norton",
      "Munroe Falls",
    ],
  },
  {
    slug: "wayne-county",
    name: "Wayne County",
    cities: ["Wooster", "Orrville", "Rittman", "Dalton", "Apple Creek", "Smithville"],
  },
  {
    slug: "medina-county",
    name: "Medina County",
    cities: ["Medina", "Brunswick", "Wadsworth", "Lodi", "Seville", "Litchfield"],
  },
  {
    slug: "holmes-county",
    name: "Holmes County",
    cities: ["Millersburg", "Berlin", "Walnut Creek", "Killbuck", "Holmesville", "Winesburg"],
  },
  {
    slug: "ashland-county",
    name: "Ashland County",
    cities: ["Ashland", "Loudonville", "Savannah", "Hayesville", "Jeromesville"],
  },
  {
    slug: "carroll-county",
    name: "Carroll County",
    cities: ["Carrollton", "Malvern", "Minerva", "Sherrodsville"],
  },
  {
    slug: "portage-county",
    name: "Portage County",
    cities: ["Kent", "Ravenna", "Streetsboro", "Aurora", "Windham"],
  },
];

export type ServiceArea = {
  slug: string;
  city: string;
  county: string;
  countySlug: string;
  nearby: string[];
  intro: string;
  landmarks?: string;
};

export const serviceAreas: ServiceArea[] = [
  {
    slug: "canton-oh",
    city: "Canton",
    county: "Stark County",
    countySlug: "stark-county",
    nearby: ["North Canton", "Massillon", "Louisville", "Alliance", "Jackson Township", "Plain Township"],
    intro:
      "As the seat of Stark County, Canton sees a steady mix of daily commuters, delivery fleets, and highway traffic off I-77 and US-30 — all prime conditions for the rock chips and cracked windshields we fix every week.",
  },
  {
    slug: "akron-oh",
    city: "Akron",
    county: "Summit County",
    countySlug: "summit-county",
    nearby: ["Cuyahoga Falls", "Stow", "Barberton", "Tallmadge", "Fairlawn", "Green"],
    intro:
      "Akron's mix of interstate commuting on I-76/I-77 and stop-and-go city driving is exactly where windshields pick up the rock chips and cracks we repair and replace throughout Summit County.",
  },
  {
    slug: "wooster-oh",
    city: "Wooster",
    county: "Wayne County",
    countySlug: "wayne-county",
    nearby: ["Orrville", "Rittman", "Dalton", "Apple Creek", "Smithville"],
    intro:
      "Wooster and the rest of Wayne County run on US-30 and a lot of rural two-lane driving — both hard on windshields. We come to farms, homes, and businesses throughout the area.",
  },
  {
    slug: "medina-oh",
    city: "Medina",
    county: "Medina County",
    countySlug: "medina-county",
    nearby: ["Brunswick", "Wadsworth", "Lodi", "Seville", "Litchfield"],
    intro:
      "Medina County drivers deal with everything from I-71 highway speed to the historic downtown square — we handle windshield replacement and chip repair anywhere in between.",
  },
  {
    slug: "millersburg-oh",
    city: "Millersburg",
    county: "Holmes County",
    countySlug: "holmes-county",
    nearby: ["Berlin", "Walnut Creek", "Killbuck", "Holmesville", "Winesburg"],
    intro:
      "Millersburg and the rest of Holmes County — Amish country — means gravel roads, farm equipment, and rural highways that are tough on glass. We come straight to your driveway or shop.",
  },
  {
    slug: "ashland-oh",
    city: "Ashland",
    county: "Ashland County",
    countySlug: "ashland-county",
    nearby: ["Loudonville", "Savannah", "Hayesville", "Jeromesville"],
    intro:
      "Ashland sits right on I-71, so we see a lot of highway-speed rock chips and cracks from drivers passing through — plus everyday wear for everyone who calls Ashland County home.",
  },
  {
    slug: "carrollton-oh",
    city: "Carrollton",
    county: "Carroll County",
    countySlug: "carroll-county",
    nearby: ["Malvern", "Minerva", "Sherrodsville"],
    intro:
      "Carrollton and Carroll County's rural roads and rolling hills are hard on windshields — we bring full mobile windshield replacement and chip repair straight to you, no need to drive to a shop.",
  },
  {
    slug: "kent-oh",
    city: "Kent",
    county: "Portage County",
    countySlug: "portage-county",
    nearby: ["Ravenna", "Streetsboro", "Aurora", "Windham"],
    intro:
      "Between Kent State commuters, downtown Kent, and the rest of Portage County, we handle windshield replacement, chip repair, and back glass work wherever you are — home, work, or campus.",
  },
];

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  bullets: string[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

export const services: Service[] = [
  {
    slug: "windshield-replacement",
    name: "Windshield Replacement",
    shortName: "Windshield Replacement",
    tagline: "OEM-quality glass, installed at your home or office.",
    metaTitle: "Mobile Windshield Replacement | MW Glass Repair",
    metaDescription:
      "Mobile windshield replacement across Stark, Summit, Wayne, Medina, Holmes, Ashland, Carroll & Portage counties, Ohio. Guaranteed against stress cracks and leaks. Call (330) 305-2643.",
    summary:
      "A cracked or badly chipped windshield isn't just a visibility problem — it's a structural part of your vehicle's safety system. MW Glass Repair replaces windshields on-site, using quality glass and proper urethane installation, so your car is safe to drive the same day.",
    bullets: [
      "We come to your home, office, or job site — no driving around with a cracked windshield",
      "High-quality glass matched to your vehicle's make, model, and features",
      "ADAS-equipped vehicles handled with care for camera and sensor mounts",
      "Proper urethane cure times respected so your windshield is safe to drive on",
      "Every installation is guaranteed against stress cracks and leaks",
      "20+ years of hands-on experience with all makes and models",
    ],
    process: [
      {
        title: "Get a fast quote",
        description:
          "Text or call your year, make, model, and a description of the damage. We'll quote you on the spot.",
      },
      {
        title: "Schedule around you",
        description:
          "We book appointments Monday through Friday, 8 AM to 5 PM, at a location that works for you — home, work, wherever your car is parked.",
      },
      {
        title: "On-site replacement",
        description:
          "We remove the old windshield, prep the frame, and install the new glass with proper urethane and safe drive-away time.",
      },
      {
        title: "Guaranteed work",
        description:
          "Every windshield we install is guaranteed against stress cracks and leaks. If something's wrong, we make it right.",
      },
    ],
    faqs: [
      {
        question: "How much does windshield replacement cost?",
        answer:
          "Cost depends on your vehicle's year, make, and model, and whether it has features like rain sensors, heads-up display, or ADAS cameras built into the glass. Text or call (330) 305-2643 with your vehicle info for an exact quote — most quotes take just a few minutes.",
      },
      {
        question: "Do you come to my house or workplace?",
        answer:
          "Yes — MW Glass Repair is a mobile-only service. We travel to you anywhere in Stark, Summit, Wayne, Medina, Holmes, Ashland, Carroll, or Portage County, Ohio, including your home, office, or job site.",
      },
      {
        question: "How long does a windshield replacement take?",
        answer:
          "Most windshield replacements take about 45 minutes to an hour on-site. We'll also let you know the safe drive-away time so the urethane has properly cured before you get back on the road.",
      },
      {
        question: "Do you replace windshields with rain sensors or ADAS cameras?",
        answer:
          "Yes. We work on vehicles with rain sensors, humidity sensors, and forward-facing ADAS cameras mounted to the windshield, and take the extra care those systems require during removal and installation.",
      },
      {
        question: "Is the new windshield guaranteed?",
        answer:
          "Yes — every windshield we install is guaranteed against stress cracks and leaks. Give us a call if you ever have an issue with an installation we performed.",
      },
      {
        question: "Do you bill my insurance directly?",
        answer:
          "We're not currently set up for direct insurance billing, but we're happy to provide a detailed invoice you can submit to your insurance company for reimbursement under your glass coverage.",
      },
    ],
  },
  {
    slug: "rock-chip-repair",
    name: "Rock Chip & Stone Chip Repair",
    shortName: "Rock Chip Repair",
    tagline: "Stop a small chip before it becomes a full crack.",
    metaTitle: "Rock Chip & Stone Chip Repair | MW Glass Repair",
    metaDescription:
      "Fast, fully guaranteed rock chip and stone chip repair, done at your home or office. Serving Stark, Summit, Wayne, Medina, Holmes, Ashland, Carroll & Portage counties, Ohio.",
    summary:
      "That small chip from a highway rock won't stay small forever. Temperature swings and road vibration turn tiny chips into long cracks — usually right when it's least convenient. A repair takes about 30 minutes and can save you the cost of a full replacement.",
    bullets: [
      "Most chips smaller than a quarter can be repaired instead of replaced",
      "On-site repair at your home or workplace — usually done in 30 minutes or less",
      "Injected resin restores structural strength and stops the chip from spreading",
      "Far less expensive than a full windshield replacement",
      "Every rock chip repair is fully guaranteed",
      "20+ years of experience judging what can be repaired vs. what needs replacement",
    ],
    process: [
      {
        title: "Send us a photo",
        description:
          "Text a photo of the chip along with your vehicle's year, make, and model to (330) 305-2643, and we'll tell you if it's repairable.",
      },
      {
        title: "We come to you",
        description:
          "Repairs are done on-site — home, work, or wherever your vehicle is parked — Monday through Friday.",
      },
      {
        title: "Resin injection repair",
        description:
          "We clean the chip, inject clear resin under pressure to fill the damage, and cure it to restore strength and clarity.",
      },
      {
        title: "Fully guaranteed",
        description:
          "Every rock chip repair we perform is fully guaranteed — done right the first time.",
      },
    ],
    faqs: [
      {
        question: "Can my windshield chip be repaired instead of replaced?",
        answer:
          "In most cases, yes. Chips smaller than a quarter, that aren't directly in the driver's line of sight and haven't already spread into a long crack, are usually good candidates for repair. Text a photo to (330) 305-2643 and we'll give you a straight answer.",
      },
      {
        question: "How much does a rock chip repair cost?",
        answer:
          "Chip repair is significantly less expensive than a full windshield replacement. Call or text (330) 305-2643 with a photo of the damage for an exact price.",
      },
      {
        question: "How long does a chip repair take?",
        answer:
          "Most rock chip repairs take about 30 minutes and are done on-site at your home or workplace, so you don't have to wait around at a shop.",
      },
      {
        question: "Will the chip repair be invisible?",
        answer:
          "A repair restores the structural strength of the glass and greatly improves the appearance, but a faint mark may still be visible up close depending on the size and type of chip. Our goal is always to stop it from spreading and keep your windshield safe.",
      },
      {
        question: "What happens if the chip spreads after a repair?",
        answer:
          "Every rock chip repair we perform is fully guaranteed. Give us a call and we'll make it right.",
      },
    ],
  },
  {
    slug: "back-glass-replacement",
    name: "Back Glass Replacement",
    shortName: "Back Glass Replacement",
    tagline: "Rear window replacement, done mobile.",
    metaTitle: "Back Glass Replacement | MW Glass Repair",
    metaDescription:
      "Mobile back glass (rear window) replacement across Stark, Summit, Wayne, Medina, Holmes, Ashland, Carroll & Portage counties, Ohio. Defroster and antenna elements handled correctly.",
    summary:
      "A shattered or cracked back glass leaves your vehicle exposed to weather and isn't safe to drive around. We replace rear windows on-site, including the defroster grid and antenna connections built into most back glass today.",
    bullets: [
      "On-site replacement — no need to drive with a broken rear window",
      "Defroster grid and antenna wiring reconnected and tested",
      "Safe, careful removal of broken glass from the interior",
      "Works on sedans, trucks, SUVs, and hatchbacks",
      "Backed by our guarantee against stress cracks and leaks",
    ],
    process: [
      {
        title: "Quote by phone or text",
        description:
          "Tell us your vehicle's year, make, and model and we'll get you a quote for your back glass replacement.",
      },
      {
        title: "Mobile appointment",
        description:
          "We come to your home or workplace and get to work — no need to drive on a broken rear window.",
      },
      {
        title: "Careful removal and cleanup",
        description:
          "Broken glass is fully removed and cleaned from the interior before the new glass goes in.",
      },
      {
        title: "Reconnect and test",
        description:
          "Defroster and antenna connections are reconnected and tested before we leave.",
      },
    ],
    faqs: [
      {
        question: "Is it safe to drive with a broken back window?",
        answer:
          "It's not recommended — a broken rear window leaves your vehicle open to weather, road debris, and reduces the structural integrity of the cabin. We can typically get to you quickly for a mobile replacement.",
      },
      {
        question: "Do you reconnect the rear defroster?",
        answer:
          "Yes. Most back glass includes a defroster grid and often an antenna element built into the glass — we reconnect and test these during installation.",
      },
      {
        question: "How long does back glass replacement take?",
        answer:
          "Most back glass replacements are completed in under an hour, on-site at your home or workplace.",
      },
    ],
  },
  {
    slug: "quarter-glass-replacement",
    name: "Quarter Glass Replacement",
    shortName: "Quarter Glass Replacement",
    tagline: "Side and vent glass repair for every vehicle.",
    metaTitle: "Quarter Glass Replacement | MW Glass Repair",
    metaDescription:
      "Mobile quarter glass and side window replacement across Stark, Summit, Wayne, Medina, Holmes, Ashland, Carroll & Portage counties, Ohio. Call or text (330) 305-2643.",
    summary:
      "Quarter glass — the smaller, fixed side windows behind the doors — gets overlooked until it's cracked or broken. We source and install replacement quarter glass on-site so your vehicle is secure and weathertight again.",
    bullets: [
      "Mobile installation at your home or workplace",
      "Fixed and vented quarter glass for sedans, SUVs, and trucks",
      "Careful trim and molding removal and reinstallation",
      "Full cleanup of any broken glass from break-ins or accidents",
    ],
    process: [
      {
        title: "Tell us what happened",
        description:
          "Whether it's a break-in, an accident, or a stress crack, tell us your vehicle's year, make, and model for a quote.",
      },
      {
        title: "We come to you",
        description: "Mobile appointments at your home or workplace, Monday through Friday.",
      },
      {
        title: "Trim-safe installation",
        description:
          "Interior and exterior trim is removed and reinstalled carefully so nothing rattles or leaks.",
      },
    ],
    faqs: [
      {
        question: "What is quarter glass?",
        answer:
          "Quarter glass refers to the smaller, usually fixed windows located behind the front and rear doors — sometimes called vent glass. It's commonly damaged in break-ins or minor accidents.",
      },
      {
        question: "Can quarter glass be replaced without replacing the whole door?",
        answer:
          "Yes — quarter glass is a separate piece from the door glass and can be replaced on its own, on-site, without removing the entire door assembly in most cases.",
      },
    ],
  },
  {
    slug: "headlight-restoration",
    name: "Headlight Restoration",
    shortName: "Headlight Restoration",
    tagline: "Bring cloudy, yellowed headlights back to clear.",
    metaTitle: "Headlight Restoration & Refinishing | MW Glass Repair",
    metaDescription:
      "Mobile headlight restoration for cloudy, yellowed, or oxidized headlight lenses. Improve visibility and appearance. Serving 8 counties across Northeast Ohio.",
    summary:
      "Cloudy, yellowed headlights aren't just an eyesore — oxidized lenses can cut headlight output significantly, which matters a lot on dark rural roads. We restore the clarity of your headlight lenses on-site, improving both looks and nighttime visibility.",
    bullets: [
      "Removes yellowing and oxidation from headlight lenses",
      "Improves nighttime visibility and beam output",
      "Done on-site at your home or workplace",
      "Far less expensive than replacing headlight housings",
      "A quick, high-impact way to refresh an older vehicle's appearance",
    ],
    process: [
      {
        title: "Quick assessment",
        description:
          "Most cloudy or yellowed headlights are good candidates for restoration rather than replacement.",
      },
      {
        title: "Mobile service",
        description: "We come to you and complete the restoration on-site.",
      },
      {
        title: "Multi-stage polish",
        description:
          "Oxidized coating is removed and the lens is polished and refinished to restore clarity.",
      },
    ],
    faqs: [
      {
        question: "Why do headlights turn yellow or cloudy?",
        answer:
          "Modern headlight lenses are made of polycarbonate plastic with a protective coating. UV exposure over time breaks down that coating, causing oxidation that looks yellow or hazy — and reduces how much light gets through.",
      },
      {
        question: "Does headlight restoration actually improve visibility?",
        answer:
          "Yes. Removing the oxidized layer restores the lens's clarity, which allows more light through and can noticeably improve nighttime visibility compared to badly yellowed lenses.",
      },
      {
        question: "How long does headlight restoration last?",
        answer:
          "Results vary with sun exposure and climate, but a proper restoration typically lasts a good while before UV exposure begins to dull the lens again. We're happy to talk through what to expect for your vehicle.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getAreaBySlug(slug: string) {
  return serviceAreas.find((a) => a.slug === slug);
}

export function getCountyBySlug(slug: string) {
  return counties.find((c) => c.slug === slug);
}
