export const STUDIO = {
  name: "1P410 Technologies",
  wordmark: "1P410",
  year: 2026,
} as const;

export const NAV_LINKS = [
  { label: "Portfolio", href: "#portfolio", id: "portfolio" },
  { label: "Principles", href: "#principles", id: "principles" },
  { label: "Contact", href: "#contact", id: "contact" },
] as const;

export const HERO = {
  index: "INDEPENDENT SOFTWARE STUDIO / CALIFORNIA",
  headline: ["We make software", "built for"],
  headlineAccent: "you.",
  subhead:
    "We know that each person is unique with their own needs. We don't build to replace people or tools, but to aid each person in their daily life.",
  cta: { label: "See our work", href: "#portfolio" },
  status: "BUILDING FOR YOU",
} as const;

export const PROJECTS = [
  {
    name: "Variance",
    fullName: "Variance: The Quant Prep App",
    descriptor: "The Quant Prep App",
    slug: "variance",
    tagline: "Quant interview practice, anytime, anywhere, fully offline.",
    body: "Helping people in over 40 countries, 80 universities, with over 1000,000 games played to date.",
    tags: ["iOS", "SwiftUI", "Live"],
    website: "https://thequantprepapp.com",
    websiteLabel: "Visit site",
    appStore:
      "https://apps.apple.com/app/apple-store/id6760629839?pt=128663074&ct=quant%20prep%20app%20website&mt=8",
    availability: "Available on the App Store",
    preview: "screens",
    artwork: null,
    images: [
      "/images/variance/desk.png",
      "/images/variance/sequences.png",
      "/images/variance/stats.png",
    ],
  },
  {
    name: "Bread",
    fullName: "Bread: The Bible Tracker",
    descriptor: "The Bible Tracker",
    slug: "bread",
    tagline: "Help follow your progress. No Tracking. Always Offline. Always Secure",
    body: "Start a reading plan, see your notes, and see the progress of your journey.",
    tags: ["iOS", "SwiftUI", "Live"],
    website: "https://thebibletracker.app",
    websiteLabel: "Visit site",
    appStore:
      "https://apps.apple.com/us/app/bread-the-bible-tracker/id6768140991",
    availability: "Available on the App Store",
    preview: "screens",
    artwork: null,
    images: [
      "/images/bread/home.png",
      "/images/bread/bible.png",
      "/images/bread/journey.png",
    ],
  },
  {
    name: "pAIr",
    fullName: "pAIr",
    descriptor: null,
    slug: "pair",
    tagline: "Plan meals. Share the list. Save Time & Money.",
    body: "Shared groceries, household requests, and practical meal inspiration in one place.",
    tags: ["iOS", "iPadOS", "Coming soon"],
    //website: "https://pair-grocery-planner.bck314.chatgpt.site",
    //websiteLabel: "Preview site",
    appStore: null,
    availability: "Currently in development",
    preview: "brand",
    artwork: "/images/pair/app-icon.png",
    images: [],
  },
] as const;

export const FOUNDER = {
  name: "Caleb Kawano",
  role: "Founder / Builder",
  lead: "Building focused tools for needs he knows firsthand.",
  highlights: [
    "Helped design growth & oversaw up to 400 experts at AfterQuery, an AI research lab.",
    "Led growth at Wander Social through its pre-seed round.",
    "Has over 5M views across Instagram and Tiktok",
  ],
  studioNote:
    "Variance began with a simple question during quant interview prep: why can't this practice fit into the five minutes you already have? Bread grew from the desire to stay consistent in Scripture. pAIr is being built to make shared groceries and meal planning feel lighter for real households.",
  linkedin: "https://www.linkedin.com/in/caleb-kawano",
} as const;

export const PRINCIPLES_INTRO = {
  lead: "We build from ",
  life: "problems we’ve lived.",
  bridge: "To help as many people as we can. Guided by service and made with",
  purpose: " joyisness, curiosity, and gratitude.",
} as const;

export const PRINCIPLES = [
  {
    numeral: "01",
    title: "From experience",
    body: "We start with problems we’ve felt ourselves and build the tools we wish had existed.",
  },
  {
    numeral: "02",
    title: "In service",
    body: "Every product should help someone live with a little more clarity, confidence, or connection.",
  },
  {
    numeral: "03",
    title: "With joy",
    body: "We make because creating is worthwhile. Sustainability matters, but profit is never the whole point.",
  },
] as const;

export const ORIGIN_LINE = '1 Peter 4:10 -"Each of you should use whatever gift you have received to serve others, as faithful stewards of God’s grace in its various forms."';

export const FOOTER_LINKS = [
  { label: "Variance", href: "https://thequantprepapp.com" },
  { label: "Bread", href: "https://thebibletracker.app" },
  {
    label: "pAIr",
   //href: "https://pair-grocery-planner.bck314.chatgpt.site",
   href: null,
  },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/caleb-kawano" },
] as const;
