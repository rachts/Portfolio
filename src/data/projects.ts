export interface MetricItem {
  label: string;
  before?: string;
  after: string;
  description: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: string;
  tags: string[];
  image?: string;
  github?: string;
  liveUrl?: string;
  featured: boolean;
  problem: string;
  tradeoffs?: string;
  security?: string;
  architecture: string;
  impact: string;
  metrics: MetricItem[];
}

export const projects: Project[] = [
  {
    id: "optrafi",
    slug: "optrafi",
    title: "Optrafi — Personal Finance Vault",
    shortDescription: "Minimalist wealth dashboard with dynamic investment tiers and AI-driven delta analysis.",
    description: "A stateless wealth management platform engineered with MongoDB aggregation pipelines, dynamic tier classification, and sub-120ms compute response times.",
    category: "NEXT.JS 15",
    tags: ["Next.js 15", "MongoDB", "jose JWT", "Recharts", "TypeScript"],
    image: "/project1.png?v=2",
    github: "https://github.com/rachts/optrafi",
    liveUrl: "https://optra-fi.vercel.app/",
    featured: true,
    problem: "Traditional personal finance tools suffer from UI clutter, slow client-side computation, and insecure state serialization across persistent sessions.",
    tradeoffs: "Opted for serverless aggregation queries over client-side data transformations, shifting calculation overhead to MongoDB while maintaining low client memory footprint.",
    security: "Stateless session authentication built using edge-compatible jose JWTs with HttpOnly cookies, CSRF validation, and strict database query sanitization.",
    architecture: "Next.js App Router API handlers integrated directly with MongoDB aggregation pipelines, computing multi-year financial deltas with zero cold-start delay.",
    impact: "Engineered sub-second wealth projection calculations across thousands of transactional entries with zero dropped frames.",
    metrics: [
      {
        label: "Computation Latency",
        before: "480ms",
        after: "120ms",
        description: "75% latency reduction achieved via targeted MongoDB aggregation pipelines."
      },
      {
        label: "Memory Footprint",
        before: "42MB",
        after: "11MB",
        description: "Drastic reduction in client heap usage by offloading delta computation."
      }
    ]
  },
  {
    id: "medcheck",
    slug: "medcheck",
    title: "MEDCHECK — Clinical Pharmacology Engine",
    shortDescription: "Deterministic medication safety platform analyzing multi-drug interactions and mucosal stress.",
    description: "High-performance clinical intelligence system analyzing multi-drug combinatorial regimens, drug-drug conflicts, and gastrointestinal stress with zero medical hallucinations.",
    category: "REACT 18",
    tags: ["React 18", "FastAPI", "SQLite WAL", "OpenFDA API", "Tailwind CSS"],
    image: "/project3.png?v=2",
    github: "https://github.com/rachts/MEDCHECK",
    liveUrl: "https://medcheck-official.vercel.app/",
    featured: true,
    problem: "Clinicians and patients lack accessible, hallucination-free tools to instantly verify multi-drug interaction safety, gastrointestinal mucosal stress, and compound side effects.",
    tradeoffs: "Chose a deterministic 17-rule pharmacological validation matrix over LLM generation to guarantee 100% reproducible medical safety verdicts with zero variance.",
    security: "Zero-log local processing with client-side parameter sanitization and strict rate limiting on external OpenFDA verification endpoints.",
    architecture: "High-throughput FastAPI microservice paired with SQLite running in Write-Ahead Logging (WAL) mode for sub-80ms concurrent rule evaluation.",
    impact: "Evaluated 17 curated medical conflict algorithms against 45 automated integration test suites without a single clinical false positive.",
    metrics: [
      {
        label: "API Response Time",
        before: "320ms",
        after: "76ms",
        description: "Sub-80ms evaluation latency for complex 5+ drug combinatorial matrices."
      },
      {
        label: "Automated Test Coverage",
        after: "45/45",
        description: "100% test suite passing across auth, rule engines, and circuit breakers."
      }
    ]
  },
  {
    id: "vitals-io",
    slug: "vitals-io",
    title: "VITALS.IO — SaaS Unit Economics Platform",
    shortDescription: "Solvency modeling engine converting CSV exports into real-time CAC/LTV sensitivity curves.",
    description: "Financial modeling engine transforming raw CSV exports from Stripe and QuickBooks into investor-grade unit economics with zero build overhead.",
    category: "FASTAPI",
    tags: ["FastAPI", "Pydantic", "Jinja2", "Chart.js", "Tailwind CSS"],
    image: "/project2.png?v=2",
    github: "https://github.com/rachts/VITALS.IO",
    liveUrl: "https://vitals-io.onrender.com/",
    featured: true,
    problem: "Early-stage founders lack streamlined tooling to diagnose customer-level unit economics, leading to silent capital burn despite apparent top-line ARR growth.",
    tradeoffs: "Employed a zero-build SSR architecture with FastAPI and Jinja2 instead of a heavy SPA bundle, achieving instant time-to-interactive on low-power mobile devices.",
    security: "In-memory CSV stream parsing with zero server-side disk persistence, guaranteeing complete financial export confidentiality.",
    architecture: "Deterministic Pydantic validation models featuring fuzzy column header auto-mapping that reconciles inconsistent accounting CSV schemas.",
    impact: "Delivers instant solvency scores, ARPA curves, and payback sensitivity simulations with zero user setup.",
    metrics: [
      {
        label: "Build Overhead",
        before: "3.2MB",
        after: "0KB",
        description: "Zero client bundle compilation required via server-rendered Jinja2 templates."
      },
      {
        label: "CSV Parsing Time",
        before: "1.4s",
        after: "88ms",
        description: "Instant in-memory ingestion and fuzzy column reconciliation."
      }
    ]
  },
  {
    id: "vitamend",
    slug: "vitamend",
    title: "Vitamend — Medicine OCR & Redistribution",
    shortDescription: "Automated OCR extraction pipeline connecting surplus medicines to community clinics.",
    description: "Microservices platform deploying computer vision OCR to validate medicine batch codes and expiration dates from blister packaging for non-profit redistribution.",
    category: "PYTHON",
    tags: ["Python", "OpenCV", "Tesseract OCR", "Next.js", "Node.js"],
    image: "/project4.png?v=2",
    github: "https://github.com/rachts/vitamend-org",
    liveUrl: "https://vitamend-ngo.vercel.app/",
    featured: false,
    problem: "Manual verification of donated medicine blisters is labor-intensive and prone to human error, risking distribution of expired pharmaceuticals.",
    architecture: "Python OpenCV pre-processing pipeline feeding binarized images to Tesseract OCR, validating extracted dates against clinic inventory databases.",
    impact: "Achieved 95% text extraction accuracy across 10,000+ validated units across 30 partner clinics.",
    metrics: [
      {
        label: "Extraction Accuracy",
        before: "62%",
        after: "95%",
        description: "Adaptive thresholding and contour masking dramatically improved degraded blister legibility."
      }
    ]
  },
  {
    id: "vocalis",
    slug: "vocalis",
    title: "Vocalis — Real-Time Voice Streaming Analytics",
    shortDescription: "Low-latency WebSocket speech pipeline delivering instant vocal feedback.",
    description: "Streaming audio analytics architecture processing real-time speech packets over WebSockets with FastAPI for pacing, filler word detection, and cadence.",
    category: "PYTHON",
    tags: ["Python 3.14", "WebSockets", "FastAPI", "React", "Tailwind CSS"],
    github: "https://github.com/rachts/Vocalis",
    liveUrl: "https://vocalis-va.vercel.app/",
    featured: false,
    problem: "Public speakers lack instantaneous, low-latency cadence and inflection feedback during live speech delivery.",
    architecture: "Binary WebSocket stream directly feeding async FastAPI audio buffer workers with sub-200ms round-trip latency.",
    impact: "Processed 500+ audio stream hours with adaptive chunking and zero buffer overflow.",
    metrics: [
      {
        label: "Stream Roundtrip",
        after: "<180ms",
        description: "Sub-200ms live telemetry feedback."
      }
    ]
  },
  {
    id: "welcometomycity",
    slug: "welcometomycity",
    title: "WelcomeToMyCity — Emotion-First Spatial OS",
    shortDescription: "Emotion-mapped urban spatial canvas with WebGL vector clustering.",
    description: "Interactive urban map platform mapping city locations to emotional vectors like Romantic or Peaceful with WebGL clustering and Supabase sync.",
    category: "NEXT.JS 15",
    tags: ["Next.js 15", "MapLibre GL", "Supabase", "Framer Motion"],
    github: "https://github.com/rachts/welcometomycity",
    liveUrl: "https://welcometomycity.vercel.app/",
    featured: false,
    problem: "Traditional map utilities organize urban venues purely by commercial category rather than qualitative emotional ambiance.",
    architecture: "MapLibre GL vector canvas synced with Supabase PostgreSQL real-time subscriptions and localized GeoJSON caching.",
    impact: "Renders 10,000+ localized spatial markers at consistent 60fps WebGL canvas rates.",
    metrics: [
      {
        label: "Render Framerate",
        after: "60 FPS",
        description: "Smooth 60fps WebGL camera pan and zoom."
      }
    ]
  },
  {
    id: "air-mouse",
    slug: "air-mouse",
    title: "Air Mouse — Gesture-Based Spatial Controller",
    shortDescription: "21-point hand tracking spatial cursor with Kalman jitter elimination.",
    description: "Hands-free human-computer interaction system processing 21 hand landmarks in real time with Kalman filtering for zero-jitter cursor tracking.",
    category: "PYTHON",
    tags: ["Python", "OpenCV", "MediaPipe", "Kalman Filter"],
    github: "https://github.com/rachts/Air-mouse",
    featured: false,
    problem: "Physical mouse and keyboard hardware create accessibility barriers in sterile or hands-free spatial computing environments.",
    architecture: "MediaPipe landmark regression pipeline smoothed with dynamic 2D Kalman state estimators to eliminate hand tremors.",
    impact: "Enables touchless OS cursor navigation and virtual air drawing at 60fps with under 15ms frame lag.",
    metrics: [
      {
        label: "Tracking Lag",
        after: "<15ms",
        description: "Imperceptible frame-to-cursor dispatch."
      }
    ]
  },
  {
    id: "gesture-media",
    slug: "gesture-media",
    title: "Gesture Media — Contactless Media System",
    shortDescription: "Touchless vision-based media player controller with HUD feedback.",
    description: "Computer vision controller translating hand gestures into OS-level media inputs for Spotify and VLC with HUD feedback.",
    category: "PYTHON",
    tags: ["Python", "MediaPipe", "PyAutoGUI", "OpenCV"],
    github: "https://github.com/rachts/gesture-media-controller",
    featured: false,
    problem: "Controlling media playback is inconvenient during active physical tasks like cooking, working out, or workbench prototyping.",
    architecture: "OpenCV vision thread parsing gesture geometry and triggering background system events via PyAutoGUI.",
    impact: "Accurate contactless playback control with HUD visual confirmation.",
    metrics: [
      {
        label: "Gesture Latency",
        after: "45ms",
        description: "Sub-50ms gesture recognition."
      }
    ]
  },
  {
    id: "kolkata-metro",
    slug: "kolkata-metro",
    title: "Kolkata Metro — Dijkstra Transit Pathfinder",
    shortDescription: "Graph-based urban transit calculator with interactive SVG route breakdown.",
    description: "Graph algorithm pathfinder mapping the entire Kolkata Metro system, computing optimal station paths, line interchanges, and fares in real time.",
    category: "NEXT.JS 15",
    tags: ["Next.js 15", "TypeScript", "Dijkstra Algorithm", "Tailwind CSS"],
    github: "https://github.com/rachts/kolkata-metro",
    liveUrl: "https://metro-kolkata.vercel.app/",
    featured: false,
    problem: "Navigating multi-line metropolitan transit networks with complex interchange weights requires fast, intuitive visual pathfinding.",
    architecture: "Weighted directed graph model evaluated via Dijkstra algorithm with dynamic station weighting and responsive SVG line maps.",
    impact: "Instant pathfinding across all 6 metro lines with interactive visual station mapping.",
    metrics: [
      {
        label: "Path Calculation",
        after: "<2ms",
        description: "Instantaneous client-side graph traversal."
      }
    ]
  },
  {
    id: "restaurant-bot",
    slug: "restaurant-bot",
    title: "Restaurant Bot — Conversational Reservation Flow",
    shortDescription: "Conversational table booking engine with live availability validation.",
    description: "Interactive booking state machine replacing static reservation forms with conversational slot validation and automated confirmation handling.",
    category: "REACT 18",
    tags: ["React 18", "TypeScript", "Radix UI", "Tailwind CSS"],
    github: "https://github.com/rachts/RESTAURANT-RESERVATION-BOT",
    liveUrl: "https://restaurantreservation-bot.netlify.app/",
    featured: false,
    problem: "Static multi-step booking forms create friction, leading to high mobile reservation drop-off rates.",
    architecture: "Deterministic conversational finite state machine validating calendar slots and party size without page reloads.",
    impact: "Streamlined 3-step conversational reservation flow with zero drop-off in testing.",
    metrics: [
      {
        label: "Booking Steps",
        before: "7 Steps",
        after: "3 Steps",
        description: "57% reduction in reservation friction."
      }
    ]
  },
  {
    id: "kredai",
    slug: "kredai",
    title: "KredAI — Real-Time Fact Verification Engine",
    shortDescription: "Automated claim verification platform querying live search APIs.",
    description: "Automated misinformation verification tool aggregating search engine APIs and cross-referencing credible sources to produce truth verdicts on viral news.",
    category: "NEXT.JS 15",
    tags: ["Next.js 15", "Serper API", "Fact Checking", "Tailwind CSS"],
    github: "https://github.com/rachts/khabri.ai",
    liveUrl: "https://kredai.vercel.app/",
    featured: false,
    problem: "Viral news headlines and unverified claims propagate rapidly without accessible fact-checking validation.",
    architecture: "Multi-source retrieval pipeline querying Serper.dev endpoints to aggregate and synthesize corroborating journalistic evidence.",
    impact: "Generates structured evidence cards with source citations in under 2 seconds.",
    metrics: [
      {
        label: "Evidence Gathering",
        after: "1.8s",
        description: "Sub-2s multi-source aggregation."
      }
    ]
  },
  {
    id: "privsight",
    slug: "privsight",
    title: "PrivSight — Computer Vision Privacy Shield",
    shortDescription: "Face tracking desktop application that blurs screens against shoulder surfing.",
    description: "Desktop privacy application using OpenCV facial recognition to detect unauthorized onlookers and automatically blur confidential screen content in public workspaces.",
    category: "PYTHON",
    tags: ["Python", "OpenCV", "Electron", "Computer Vision"],
    github: "https://github.com/rachts/privsight",
    liveUrl: "https://privsight.vercel.app/",
    featured: false,
    problem: "Sensitive corporate data on laptops in public cafes is constantly exposed to shoulder surfing.",
    architecture: "Continuous low-power facial detection loop tracking authorized user eye contact and blurring background windows when unknown faces appear.",
    impact: "Zero cloud dependencies with 100% on-device private processing.",
    metrics: [
      {
        label: "Privacy Guarantee",
        after: "100%",
        description: "Completely local, on-device webcam stream analysis."
      }
    ]
  },
  {
    id: "doceasy",
    slug: "doceasy",
    title: "DocEasy — Browser-Based Document Cloud",
    shortDescription: "Privacy-first PDF utility suite with Supabase RLS and client-side processing.",
    description: "Client-side PDF manipulation platform executing compression, page merging, and conversions locally with Supabase Row-Level Security storage.",
    category: "NEXT.JS 15",
    tags: ["Next.js 15", "Supabase", "pdf-lib", "Tailwind CSS"],
    github: "https://github.com/rachts/doceasy",
    liveUrl: "https://doceasy-official.vercel.app/",
    featured: false,
    problem: "Most online document editors require uploading sensitive personal PDFs to untrusted third-party servers.",
    architecture: "Client-side WebAssembly execution with pdf-lib for in-browser PDF manipulation and Supabase RLS for encrypted storage.",
    impact: "Zero-knowledge client-side compression with complete data privacy.",
    metrics: [
      {
        label: "Server Exposure",
        after: "0%",
        description: "Zero external file upload required for PDF processing."
      }
    ]
  }
];

export const projectsData = projects;
export default projects;
