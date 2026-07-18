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
  // Stark County
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
    slug: "north-canton-oh",
    city: "North Canton",
    county: "Stark County",
    countySlug: "stark-county",
    nearby: ["Canton", "Jackson Township", "Plain Township", "Hartville"],
    intro:
      "North Canton, just northwest of Canton and home to Walsh University, sees the same steady mix of commuter and neighborhood driving that keeps us busy with windshield and rock chip work throughout Stark County.",
  },
  {
    slug: "massillon-oh",
    city: "Massillon",
    county: "Stark County",
    countySlug: "stark-county",
    nearby: ["Canton", "Perry Township", "Canal Fulton", "North Canton"],
    intro:
      "Massillon sits along the Tuscarawas River just west of Canton — between local traffic and trucks running through town, we see plenty of cracked windshields and rock chips here.",
  },
  {
    slug: "alliance-oh",
    city: "Alliance",
    county: "Stark County",
    countySlug: "stark-county",
    nearby: ["Canton", "Louisville", "Minerva", "Carrollton"],
    intro:
      "Alliance, home to the University of Mount Union, is one of the farther-out communities we serve in Stark County — we're happy to make the drive for windshield replacement or chip repair.",
  },
  {
    slug: "louisville-oh",
    city: "Louisville",
    county: "Stark County",
    countySlug: "stark-county",
    nearby: ["Canton", "Alliance", "North Canton", "Jackson Township"],
    intro:
      "Louisville is a smaller Stark County community east of Canton, and one we regularly serve for mobile windshield replacement and rock chip repair.",
  },
  {
    slug: "jackson-township-oh",
    city: "Jackson Township",
    county: "Stark County",
    countySlug: "stark-county",
    nearby: ["Canton", "North Canton", "Plain Township", "Massillon"],
    intro:
      "Jackson Township, one of the largest and busiest communities bordering Canton, is a regular stop for us — from Belden Village traffic to quiet neighborhood streets.",
  },
  {
    slug: "plain-township-oh",
    city: "Plain Township",
    county: "Stark County",
    countySlug: "stark-county",
    nearby: ["Canton", "North Canton", "Jackson Township", "Louisville"],
    intro:
      "Plain Township, just north of downtown Canton, is one of Stark County's most populous communities — plenty of daily driving, and plenty of windshields that need our attention.",
  },
  {
    slug: "perry-township-oh",
    city: "Perry Township",
    county: "Stark County",
    countySlug: "stark-county",
    nearby: ["Canton", "Massillon", "Jackson Township", "Canal Fulton"],
    intro:
      "Perry Township, southwest of Canton, is another high-traffic Stark County community we serve regularly for windshield replacement and chip repair.",
  },
  {
    slug: "canal-fulton-oh",
    city: "Canal Fulton",
    county: "Stark County",
    countySlug: "stark-county",
    nearby: ["Massillon", "Perry Township", "Canton"],
    intro:
      "Canal Fulton, known for its historic canal-town charm along the Tuscarawas River, is one of the smaller communities we cover on the west side of Stark County.",
  },
  {
    slug: "hartville-oh",
    city: "Hartville",
    county: "Stark County",
    countySlug: "stark-county",
    nearby: ["Canton", "North Canton", "Alliance"],
    intro:
      "Hartville, home to the well-known Hartville MarketPlace, is on the northern edge of Stark County — we're glad to make the trip for mobile auto glass service.",
  },

  // Summit County
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
    slug: "cuyahoga-falls-oh",
    city: "Cuyahoga Falls",
    county: "Summit County",
    countySlug: "summit-county",
    nearby: ["Akron", "Stow", "Munroe Falls", "Tallmadge"],
    intro:
      "Cuyahoga Falls, named for the falls on the Cuyahoga River that runs through it, sits just north of Akron and sees the same mix of highway and neighborhood driving we handle throughout Summit County.",
  },
  {
    slug: "stow-oh",
    city: "Stow",
    county: "Summit County",
    countySlug: "summit-county",
    nearby: ["Cuyahoga Falls", "Munroe Falls", "Tallmadge", "Akron"],
    intro:
      "Stow, between Akron and Cuyahoga Falls, is a regular stop for us — mobile windshield replacement and chip repair at your home or office, no shop visit required.",
  },
  {
    slug: "barberton-oh",
    city: "Barberton",
    county: "Summit County",
    countySlug: "summit-county",
    nearby: ["Akron", "Norton", "Green"],
    intro:
      "Barberton — the 'Magic City,' known for its Barberton chicken restaurants — is a community we serve regularly on the south side of Summit County.",
  },
  {
    slug: "tallmadge-oh",
    city: "Tallmadge",
    county: "Summit County",
    countySlug: "summit-county",
    nearby: ["Akron", "Cuyahoga Falls", "Stow"],
    intro:
      "Tallmadge, known for its unique circular town square, is a Summit County community just east of Akron that we cover for mobile auto glass work.",
  },
  {
    slug: "fairlawn-oh",
    city: "Fairlawn",
    county: "Summit County",
    countySlug: "summit-county",
    nearby: ["Akron", "Norton", "Barberton"],
    intro:
      "Fairlawn, home to Summit Mall and a lot of daily retail and commuter traffic, is one of the busier communities we serve west of Akron.",
  },
  {
    slug: "green-oh",
    city: "Green",
    county: "Summit County",
    countySlug: "summit-county",
    nearby: ["Akron", "Barberton", "Norton", "North Canton"],
    intro:
      "Green, home to the Akron-Canton Airport, sits on the Summit-Stark county line — we cover it as part of both our Summit and Stark County service area.",
  },
  {
    slug: "norton-oh",
    city: "Norton",
    county: "Summit County",
    countySlug: "summit-county",
    nearby: ["Barberton", "Akron", "Green"],
    intro:
      "Norton, between Akron and Barberton, is another Summit County community we regularly serve for windshield replacement and rock chip repair.",
  },
  {
    slug: "munroe-falls-oh",
    city: "Munroe Falls",
    county: "Summit County",
    countySlug: "summit-county",
    nearby: ["Cuyahoga Falls", "Stow", "Akron"],
    intro:
      "Munroe Falls, a small city tucked between Cuyahoga Falls and Stow, is part of our regular Summit County coverage.",
  },

  // Wayne County
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
    slug: "orrville-oh",
    city: "Orrville",
    county: "Wayne County",
    countySlug: "wayne-county",
    nearby: ["Wooster", "Rittman", "Dalton"],
    intro:
      "Orrville, best known as the headquarters of the J.M. Smucker Company, is a Wayne County community we serve regularly for mobile auto glass work.",
  },
  {
    slug: "rittman-oh",
    city: "Rittman",
    county: "Wayne County",
    countySlug: "wayne-county",
    nearby: ["Orrville", "Wooster", "Wadsworth"],
    intro:
      "Rittman, on the Wayne-Medina county line, is a smaller community we regularly cover for windshield replacement and rock chip repair.",
  },
  {
    slug: "dalton-oh",
    city: "Dalton",
    county: "Wayne County",
    countySlug: "wayne-county",
    nearby: ["Wooster", "Apple Creek", "Orrville"],
    intro:
      "Dalton, a small Wayne County village on the edge of Amish country, is part of our regular mobile service area.",
  },
  {
    slug: "apple-creek-oh",
    city: "Apple Creek",
    county: "Wayne County",
    countySlug: "wayne-county",
    nearby: ["Wooster", "Dalton", "Smithville"],
    intro:
      "Apple Creek, a small Wayne County village, is another stop on our regular mobile auto glass route.",
  },
  {
    slug: "smithville-oh",
    city: "Smithville",
    county: "Wayne County",
    countySlug: "wayne-county",
    nearby: ["Wooster", "Orrville", "Apple Creek"],
    intro:
      "Smithville, in southern Wayne County, is part of our regular service area for windshield replacement and chip repair.",
  },

  // Medina County
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
    slug: "brunswick-oh",
    city: "Brunswick",
    county: "Medina County",
    countySlug: "medina-county",
    nearby: ["Medina", "Wadsworth", "Lodi"],
    intro:
      "Brunswick, one of the largest cities in Medina County and a regular Cleveland-area commuter suburb, is a busy stop on our mobile service route.",
  },
  {
    slug: "wadsworth-oh",
    city: "Wadsworth",
    county: "Medina County",
    countySlug: "medina-county",
    nearby: ["Medina", "Brunswick", "Seville"],
    intro:
      "Wadsworth, just south of Medina, is one of the county's larger communities and a regular part of our mobile auto glass coverage.",
  },
  {
    slug: "lodi-oh",
    city: "Lodi",
    county: "Medina County",
    countySlug: "medina-county",
    nearby: ["Medina", "Wadsworth", "Seville"],
    intro:
      "Lodi, home to the outlet shops along I-71, is a smaller Medina County community we serve regularly.",
  },
  {
    slug: "seville-oh",
    city: "Seville",
    county: "Medina County",
    countySlug: "medina-county",
    nearby: ["Medina", "Wadsworth", "Lodi"],
    intro:
      "Seville, a small village in southern Medina County, is part of our regular mobile service area.",
  },
  {
    slug: "litchfield-oh",
    city: "Litchfield",
    county: "Medina County",
    countySlug: "medina-county",
    nearby: ["Medina", "Lodi", "Seville"],
    intro:
      "Litchfield Township, in Medina County, is another stop on our regular mobile route for windshield replacement and chip repair.",
  },

  // Holmes County
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
    slug: "berlin-oh",
    city: "Berlin",
    county: "Holmes County",
    countySlug: "holmes-county",
    nearby: ["Millersburg", "Walnut Creek", "Winesburg"],
    intro:
      "Berlin, right in the heart of Ohio's Amish Country, is one of the most-visited towns in Holmes County — and a regular stop for our mobile auto glass service.",
  },
  {
    slug: "walnut-creek-oh",
    city: "Walnut Creek",
    county: "Holmes County",
    countySlug: "holmes-county",
    nearby: ["Berlin", "Millersburg", "Holmesville"],
    intro:
      "Walnut Creek, another well-known Amish Country community, is part of our regular Holmes County coverage.",
  },
  {
    slug: "killbuck-oh",
    city: "Killbuck",
    county: "Holmes County",
    countySlug: "holmes-county",
    nearby: ["Millersburg", "Holmesville"],
    intro:
      "Killbuck, a small village in southern Holmes County, is part of our regular mobile service area.",
  },
  {
    slug: "holmesville-oh",
    city: "Holmesville",
    county: "Holmes County",
    countySlug: "holmes-county",
    nearby: ["Millersburg", "Killbuck", "Walnut Creek"],
    intro:
      "Holmesville, a small Holmes County village, is another stop on our regular mobile route.",
  },
  {
    slug: "winesburg-oh",
    city: "Winesburg",
    county: "Holmes County",
    countySlug: "holmes-county",
    nearby: ["Berlin", "Millersburg"],
    intro:
      "Winesburg, a small Holmes County village, is part of our regular mobile auto glass coverage.",
  },

  // Ashland County
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
    slug: "loudonville-oh",
    city: "Loudonville",
    county: "Ashland County",
    countySlug: "ashland-county",
    nearby: ["Ashland", "Savannah", "Jeromesville"],
    intro:
      "Loudonville, known as the canoeing capital of Ohio and gateway to Mohican State Park, is a regular stop on our Ashland County service route.",
  },
  {
    slug: "savannah-oh",
    city: "Savannah",
    county: "Ashland County",
    countySlug: "ashland-county",
    nearby: ["Ashland", "Jeromesville"],
    intro:
      "Savannah, a small Ashland County village, is part of our regular mobile service area.",
  },
  {
    slug: "hayesville-oh",
    city: "Hayesville",
    county: "Ashland County",
    countySlug: "ashland-county",
    nearby: ["Ashland", "Loudonville"],
    intro:
      "Hayesville, a small Ashland County village, is another stop on our regular mobile route.",
  },
  {
    slug: "jeromesville-oh",
    city: "Jeromesville",
    county: "Ashland County",
    countySlug: "ashland-county",
    nearby: ["Ashland", "Savannah"],
    intro:
      "Jeromesville, a small Ashland County village, is part of our regular mobile auto glass coverage.",
  },

  // Carroll County
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
    slug: "malvern-oh",
    city: "Malvern",
    county: "Carroll County",
    countySlug: "carroll-county",
    nearby: ["Carrollton", "Sherrodsville"],
    intro:
      "Malvern, a small Carroll County village, is part of our regular mobile service area.",
  },
  {
    slug: "minerva-oh",
    city: "Minerva",
    county: "Carroll County",
    countySlug: "carroll-county",
    nearby: ["Carrollton", "Alliance"],
    intro:
      "Minerva, which straddles the Carroll and Stark county line, is a regular stop on our mobile auto glass route.",
  },
  {
    slug: "sherrodsville-oh",
    city: "Sherrodsville",
    county: "Carroll County",
    countySlug: "carroll-county",
    nearby: ["Carrollton", "Malvern"],
    intro:
      "Sherrodsville, a small Carroll County village near Atwood Lake, is part of our regular mobile coverage.",
  },

  // Portage County
  {
    slug: "kent-oh",
    city: "Kent",
    county: "Portage County",
    countySlug: "portage-county",
    nearby: ["Ravenna", "Streetsboro", "Aurora", "Windham"],
    intro:
      "Between Kent State commuters, downtown Kent, and the rest of Portage County, we handle windshield replacement, chip repair, and back glass work wherever you are — home, work, or campus.",
  },
  {
    slug: "ravenna-oh",
    city: "Ravenna",
    county: "Portage County",
    countySlug: "portage-county",
    nearby: ["Kent", "Streetsboro", "Windham"],
    intro:
      "Ravenna, the Portage County seat, is a regular stop on our mobile service route right alongside Kent.",
  },
  {
    slug: "streetsboro-oh",
    city: "Streetsboro",
    county: "Portage County",
    countySlug: "portage-county",
    nearby: ["Kent", "Ravenna", "Aurora"],
    intro:
      "Streetsboro, along the I-480/SR-14 corridor, is a busy Portage County community we cover regularly.",
  },
  {
    slug: "aurora-oh",
    city: "Aurora",
    county: "Portage County",
    countySlug: "portage-county",
    nearby: ["Kent", "Streetsboro", "Ravenna"],
    intro:
      "Aurora, home to the Aurora Premium Outlets, is one of the more upscale communities we serve in Portage County.",
  },
  {
    slug: "windham-oh",
    city: "Windham",
    county: "Portage County",
    countySlug: "portage-county",
    nearby: ["Ravenna", "Kent"],
    intro:
      "Windham, a small Portage County village, is part of our regular mobile auto glass coverage.",
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
