// ── Site Data ────────────────────────────────────────────────
export const SITE_CONFIG = {
  name: "AVStar Events",
  tagline: "Where Vision Meets Sound & Light",
  description:
    "Mumbai's premier AV production and event management company. We craft extraordinary experiences through cutting-edge technology, bespoke staging, and flawless execution.",
  phone: "+91 98XXX XXXXX",
  email: "info@avstarevents.com",
  address: "Andheri West, Mumbai, Maharashtra 400058",
  social: {
    instagram: "https://instagram.com/avstarevents",
    linkedin: "https://linkedin.com/company/avstarevents",
    youtube: "https://youtube.com/@avstarevents",
  },
};

export const STATS = [
  { value: "500+", label: "Events Delivered", suffix: "" },
  { value: "200+", label: "Brand Partners", suffix: "" },
  { value: "15+", label: "Years Experience", suffix: "" },
  { value: "98", label: "Client Satisfaction", suffix: "%" },
];

export const SERVICES = [
  {
    id: "av-production",
    icon: "🎚️",
    title: "AV Production",
    subtitle: "Sound · Light · Visual",
    description:
      "Professional audio-visual production with cutting-edge equipment and creative precision. From intimate boardrooms to 10,000-seat arenas — crystal-clear sound, dramatic lighting, stunning LED displays, and flawless technical execution.",
    features: [
      "Line Array Sound Systems",
      "LED Wall & Projection Mapping",
      "Intelligent Lighting Design",
      "Live Recording & Streaming",
      "3D Projection Mapping",
      "Laser & Special Effects",
    ],
    image: "https://prolitee.com/media/services/Offsites__RnR.webp",
    href: "/services#av-production",
  },
  {
    id: "corporate-events",
    icon: "🏢",
    title: "Corporate Events",
    subtitle: "Conferences · Summits · AGMs",
    description:
      "End-to-end corporate event management that elevates your brand and engages your audience. Town halls, product launches, investor summits, annual conferences — executed with military precision and creative excellence.",
    features: [
      "Conference Production",
      "Product Launches",
      "Annual Summits & AGMs",
      "Hybrid Event Technology",
      "Live Streaming & Broadcasting",
      "Interactive Audience Engagement",
    ],
    image: "https://prolitee.com/media/services/Corporate_Event.webp",
    href: "/services#corporate",
  },
  {
    id: "weddings",
    icon: "💍",
    title: "Wedding Productions",
    subtitle: "Sangeet · Reception · Mandap",
    description:
      "Transform your most precious day into a cinematic spectacle. Our wedding productions blend luxury décor with state-of-the-art AV, creating unforgettable moments that guests will cherish forever. Luxury meets innovation.",
    features: [
      "Cinematic Stage Design",
      "Floral & Decor Integration",
      "Live Entertainment Curation",
      "Drone & Photography",
      "Professional Video Editing",
      "Multi-event Coordination",
    ],
    image: "https://prolitee.com/media/services/team_building.webp",
    href: "/services#weddings",
  },
  {
    id: "concerts",
    icon: "🎤",
    title: "Concerts & Shows",
    subtitle: "Artists · Festivals · Galas",
    description:
      "Full-scale concert production with artist coordination, crowd management, and audience experience at its finest. We've powered 100+ live shows across India with world-class technical execution and creative brilliance.",
    features: [
      "Stage Construction",
      "Artist Management Support",
      "Crowd Management Systems",
      "Festival Multi-stage Setup",
      "FOH/Monitor Engineering",
      "Lighting Design & Production",
    ],
    image: "https://prolitee.com/media/services/Culture__Strategy.webp",
    href: "/services#concerts",
  },
  {
    id: "exhibitions",
    icon: "🖼️",
    title: "Exhibitions & Expos",
    subtitle: "Stalls · Booths · Brand Activations",
    description:
      "Make your brand impossible to ignore. Custom exhibition stands, interactive installations, immersive brand activation zones that draw footfall and convert visitors into customers. Strategic design meets technology.",
    features: [
      "Custom Stall Design & Build",
      "Interactive Installations",
      "Brand Activation Zones",
      "Traffic & Queue Management",
      "Digital Integration",
      "Real-time Analytics",
    ],
    image: "https://prolitee.com/media/services/team_building.webp",
    href: "/services#exhibitions",
  },
  {
    id: "virtual-hybrid",
    icon: "📡",
    title: "Virtual & Hybrid Events",
    subtitle: "Live Stream · Webinars · Remote",
    description:
      "Bridge physical and digital audiences seamlessly. Broadcast-quality streaming studios, multi-camera setups, interactive virtual platforms, and globally optimized production for truly connected events.",
    features: [
      "Multi-platform Live Streaming",
      "Virtual Studio Production",
      "Interactive Audience Features",
      "Global Broadcast Compliance",
      "Real-time Engagement Tools",
      "Post-event Analytics",
    ],
    image: "https://prolitee.com/media/services/Employer_Branding.webp",
    href: "/services#virtual",
  },
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery Call",
    description:
      "We deep-dive into your vision, budget, venue, and audience — aligning on goals before a single speaker is placed.",
  },
  {
    number: "02",
    title: "Creative Proposal",
    description:
      "Our team delivers a detailed concept deck with 3D renders, technical riders, and a phased production timeline.",
  },
  {
    number: "03",
    title: "Pre-Production",
    description:
      "Site surveys, vendor coordination, equipment allocation, rehearsal scheduling — every detail locked weeks ahead.",
  },
  {
    number: "04",
    title: "Flawless Execution",
    description:
      "On-ground team of 20–200 professionals with 24/7 technical support, real-time problem-solving, and post-event debrief.",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rahul Sharma",
    title: "Head of Corporate Events, Reliance Industries",
    company: "Reliance Industries",
    companyLogo: "https://via.placeholder.com/40x40?text=Reliance",
    quote:
      "AVStar transformed our 5,000-person annual conference into an immersive experience. The LED projection mapping on the main stage was jaw-dropping. Flawless execution, zero technical hiccups. They delivered a world-class experience that our attendees won't forget.",
    rating: 5,
    event: "Reliance Annual Conclave 2024",
    eventType: "Corporate Conference",
  },
  {
    id: 2,
    name: "Priya Mehta",
    title: "Wedding Client",
    company: "Personal Event",
    companyLogo: "https://via.placeholder.com/40x40?text=Wedding",
    quote:
      "We dreamed of a Bollywood-scale wedding and got exactly that. The lighting design, the live band coordination, the pyrotechnics — all synchronized perfectly. Our guests still talk about it a year later. AVStar made our dream day truly magical.",
    rating: 5,
    event: "Mehta-Shah Wedding, JW Marriott",
    eventType: "Wedding Production",
  },
  {
    id: 3,
    name: "Arjun Kapoor",
    title: "Marketing Director, Tata Motors",
    company: "Tata Motors",
    companyLogo: "https://via.placeholder.com/40x40?text=TataMotors",
    quote:
      "The product launch for our new EV range exceeded every expectation. AVStar's projection mapping on the vehicle reveal was cinema-quality. Exactly the premium feel our brand demanded. They're now our go-to partner for all major launches.",
    rating: 5,
    event: "Tata EV Launch, BKC",
    eventType: "Product Launch",
  },
  {
    id: 4,
    name: "Sneha Iyer",
    title: "Co-founder, EventsKart",
    company: "EventsKart",
    companyLogo: "https://via.placeholder.com/40x40?text=EventsKart",
    quote:
      "As a fellow event professional, I collaborate with AVStar exclusively for AV requirements. Their technical depth, equipment quality, and on-ground experience is unmatched in Mumbai. They're true partners, not vendors.",
    rating: 5,
    event: "Multiple Events",
    eventType: "Event Partner",
  },
];

export const CLIENTS = [
  "Reliance", "Tata Motors", "HDFC Bank", "Bajaj Auto", "L'Oréal India",
  "Amazon India", "KPMG", "Deloitte", "EY", "Infosys",
  "Asian Paints", "Mahindra", "ITC", "Godrej", "Sun Pharma",
];

export const BLOG_POSTS = [
  {
    id: 1,
    title: "10 AV Trends Reshaping Corporate Events in 2025",
    excerpt:
      "From real-time 3D projection to AI-powered lighting rigs — the technology behind unforgettable corporate events has never been more exciting.",
    category: "AV Technology",
    date: "March 15, 2025",
    readTime: "6 min read",
    image: "https://prolitee.com/static/website-img/MDM04518.webp",
    href: "/blog/av-trends-2025",
  },
  {
    id: 2,
    title: "Why Your Mumbai Wedding Needs a Dedicated AV Director",
    excerpt:
      "Most wedding planners underestimate the complexity of live sound and lighting. Here's why a dedicated AV director is the single best investment you can make.",
    category: "Weddings",
    date: "February 28, 2025",
    readTime: "5 min read",
    image: "https://prolitee.com/static/website-img/_MGL7023.webp",
    href: "/blog/wedding-av-director",
  },
  {
    id: 3,
    title: "Hybrid Events in 2025: The Complete Technical Guide",
    excerpt:
      "Streaming quality, audience interaction, latency management — we break down every technical challenge in running a world-class hybrid event.",
    category: "Virtual Events",
    date: "February 10, 2025",
    readTime: "8 min read",
    image: "https://prolitee.com/static/website-img/_MGL7208.webp",
    href: "/blog/hybrid-events-guide-2025",
  },
];

export const GALLERY_IMAGES = [
  { id: 1, src: "https://prolitee.com/static/website-img/MDM04518.webp", alt: "Corporate Event Production", category: "Corporate" },
  { id: 2, src: "https://prolitee.com/static/website-img/_MGL7023.webp", alt: "Team Engagement Event", category: "Team Building" },
  { id: 3, src: "https://prolitee.com/static/website-img/_MGL7208.webp", alt: "Corporate Offsite", category: "Offsite" },
  { id: 4, src: "https://prolitee.com/media/case_study_home_page/MDM02670.webp", alt: "Premium Event Showcase", category: "Showcase" },
  { id: 5, src: "https://prolitee.com/static/website-img/089A0039.webp", alt: "Production Excellence", category: "Production" },
  { id: 6, src: "https://prolitee.com/static/website-img/MDM04488.webp", alt: "Event Experience", category: "Experience" },
  { id: 7, src: "https://prolitee.com/media/services/Offsites__RnR.webp", alt: "Offsite Productions", category: "Offsites" },
  { id: 8, src: "https://prolitee.com/media/services/Corporate_Event.webp", alt: "Corporate Excellence", category: "Corporate" },
];

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "AV Production", href: "/services#av-production" },
      { label: "Corporate Events", href: "/services#corporate" },
      { label: "Weddings", href: "/services#weddings" },
      { label: "Concerts & Shows", href: "/services#concerts" },
      { label: "Exhibitions", href: "/services#exhibitions" },
      { label: "Virtual & Hybrid", href: "/services#virtual" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];
