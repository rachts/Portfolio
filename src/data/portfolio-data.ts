export interface Project {
  id: string;
  title: string;
  problem: string;
  impact: string;
  isFlagship?: boolean;
  architecture?: string;
  metrics?: string;
  tradeoffs?: string;
  security?: string;
  tags: string[];
  github?: string;
  demo?: string;
  constraints?: string;
  hardPart?: string;
  future?: string;
  failureHandling?: string;
  credentials?: string;
}

export interface PortfolioData {
  hero: {
    greeting: string;
    headline: string;
    subtext: string;
    quote: string;
  };
  about: {
    valueProp: string;
  };
  projects: Project[];
  timeline: {
    id: number;
    title: string;
    date: string;
    description: string;
  }[];
  stats: {
    label: string;
    value: number;
    suffix: string;
  }[];
  beyond?: {
    vectorsOfInterest: string[];
    writing: {
      title: string;
      description: string;
      imageUrl: string;
      imageAlt: string;
    };
    travel: {
      title: string;
      description: string;
    };
    buildingInPublic: {
      title: string;
      description: string;
    };
  };
  faq: {
    question: string;
    answer: string;
  }[];
  contact: {
    email: string;
    github: string;
    linkedin: string;
    twitter: string;
  };
}

export const portfolioData: PortfolioData = {
  hero: {
    greeting: "HI, I'M RACHIT TIWARI.",
    headline: "Turning ideas into products.",
    subtext: "From AI experiments to production-grade systems, I build software that is fast, intuitive, and engineered to solve real-world problems.",
    quote: "Curiosity starts the project. Craftsmanship finishes it."
  },
  about: {
    valueProp: "I design systems, not just code. With a strong engineering mindset, I focus on architecture, performance, and measurable impact. From deep technical problem-solving to pixel-perfect interfaces, I bridge robust backends with engaging user experiences."
  },
  projects: [
    {
      id: "medcheck",
      title: "MEDCHECK — Clinical Intelligence Platform",
      problem: "Patients and clinicians lack accessible tools to analyze multi-drug safety, interactions, and gastrointestinal stress in real time.",
      impact: "Built a comprehensive medication safety platform analyzing drug-drug interactions, side effect compounding, food and alcohol timing conflicts, and a proprietary Stomach Guardian™ mucosal stress score.",
      architecture: "FastAPI backend with a deterministic rule engine backed by 17 curated pharmacology rules and OpenFDA cross-referencing. SQLite in WAL mode with optional Supabase PostgreSQL sync. React 18 frontend with Vite and React Router v6.",
      metrics: "45 automated backend tests covering auth, clinical pharmacology, endpoint contracts, and circuit breakers.",
      tradeoffs: "Used a deterministic rule engine over generative AI for drug interactions to guarantee zero hallucinations in clinical outputs.",
      security: "JWT (HS256) with bcrypt hashing delivered via httpOnly SameSite=Lax cookies. SlowAPI rate limiting, pseudonymized audit logs, and role-based access for Guest, Doctor, and Pharmacist sessions.",
      tags: ["React 18", "FastAPI", "SQLite", "OpenFDA", "Tailwind CSS"],
      github: "https://github.com/rachts/MEDCHECK",
      demo: "https://medcheck-official.vercel.app/"
    },
    {
      id: "vitals-io",
      title: "VITALS.IO — SaaS Unit Economics Engine",
      problem: "Startup founders track total revenue and burn but rarely calculate per-customer profitability, leading to silent insolvency despite strong top-line growth.",
      impact: "Engineered an instant unit economics analyzer that transforms raw CSV financial data into investor-grade metrics — ARPA, LTV, CAC, payback period, and a composite 0–10 health score — with an interactive what-if scenario simulator.",
      architecture: "Zero-build FastAPI stack with Jinja2 SSR, deterministic Pydantic calculation engine, and fuzzy CSV header auto-detection for ingestion from Stripe, QuickBooks, and Zoho Books.",
      metrics: "Smart fuzzy column matching automatically maps inconsistent CSV headers. Scenario simulator models relative metric adjustments in real time.",
      tags: ["FastAPI", "Jinja2", "Tailwind CSS", "Chart.js", "Pydantic"],
      github: "https://github.com/rachts/VITALS.IO",
      demo: "https://vitals-io.onrender.com/"
    },
    {
      id: "optrafi",
      title: "OptraFi — Personal Finance Vault",
      problem: "Most financial dashboards are cluttered and overwhelming, obscuring the metrics that actually matter for personal wealth trajectory.",
      impact: "Engineered a minimalist finance vault with dynamic investment tiers and AI-driven delta analysis, designed for clarity over noise.",
      isFlagship: true,
      architecture: "Built on a stateless Next.js API layer with MongoDB aggregation pipelines for financial projections. AI inference runs via async job queues to prevent blocking user interactions.",
      metrics: "Reduced API latency from 480ms → 120ms using caching and query optimization.",
      tradeoffs: "Used client-side processing for faster UX, trading off device CPU usage during complex financial calculations.",
      security: "Implemented signed JWT authentication with token rotation and API rate limiting to prevent abuse.",
      tags: ["Next.js 16", "MongoDB", "jose JWT", "Recharts"],
      github: "https://github.com/rachts/optrafi",
      demo: "https://optra-fi.vercel.app/"
    },
    {
      id: "vitamend",
      title: "Vitamend — Medicine OCR & Redistribution",
      problem: "Manual entry for medicine donations is slow and error-prone, leading to expired medications slipping through verification.",
      impact: "Automated medicine data entry via OCR, enabling rapid verification and redistribution of bulk donations to underserved communities.",
      isFlagship: true,
      architecture: "Microservices-based architecture connecting a Python OCR engine with a Node.js API gateway and Next.js frontend.",
      metrics: "OCR accuracy: 95% across varied packaging formats.",
      constraints: "Validated 10,000+ medicine entries. Handled low-light OCR edge cases using custom preprocessing filters.",
      tradeoffs: "Chose server-side Tesseract processing over client-side WASM to support lower-end mobile devices at clinics.",
      hardPart: "Extracting structured data from heavily warped or partially degraded medicine blisters.",
      security: "Sanitized OCR outputs to prevent injection attacks and secured API routes with role-based access control.",
      tags: ["Python", "OCR", "Next.js", "Node.js"],
      github: "https://github.com/rachts/vitamend-org",
      demo: "https://vitamend-ngo.vercel.app/"
    },
    {
      id: "vocalis",
      title: "Vocalis — Real-time Voice Analytics",
      problem: "Lack of accessible tools to analyze speech patterns and provide instant feedback for public speakers.",
      impact: "Designed a low-latency streaming pipeline using WebSockets and FastAPI, processing 500+ hours of audio with sub-200ms feedback.",
      isFlagship: true,
      architecture: "Event-driven WebSocket architecture streaming audio chunks to FastAPI, which interfaces with speech-to-text models and semantic analyzers.",
      tradeoffs: "Chose WebSockets over polling to reduce latency in real-time voice feedback.",
      hardPart: "Maintaining <200ms latency in real-time audio streaming over unstable networks.",
      future: "Planning to migrate to edge functions for lower latency and introduce streaming inference for real-time AI feedback.",
      failureHandling: "Implemented chunk-based audio buffering to maintain real-time responsiveness under unstable network conditions.",
      tags: ["Python 3.14", "WebSockets", "React", "FastAPI"],
      github: "https://github.com/rachts/Vocalis",
      demo: "https://vocalis-va.vercel.app/"
    },
    {
      id: "air-mouse",
      title: "Air Mouse — Gesture-Based AR Interface",
      problem: "Traditional input devices limit immersion and accessibility in spatial computing and hands-free environments.",
      impact: "Developed a real-time 21-point hand tracking system with Kalman filtering for jitter-free cursor control and air-drawing.",
      hardPart: "Reducing jitter in hand tracking using Kalman filtering.",
      tags: ["Python", "OpenCV", "MediaPipe", "Kalman Filter"],
      github: "https://github.com/rachts/Air-mouse",
      demo: "#"
    },
    {
      id: "gesture-media",
      title: "Gesture Media — Touchless Control System",
      problem: "Physical interaction with media devices is often inconvenient or impractical during active tasks.",
      impact: "Created an intuitive gesture-controlled system for Spotify and VLC, featuring smooth motion detection and HUD feedback.",
      tags: ["Python", "MediaPipe", "PyAutoGUI", "OpenCV"],
      github: "https://github.com/rachts/gesture-media-controller",
      demo: "#"
    },
    {
      id: "kolkata-metro",
      title: "Kolkata Metro — Urban Transit Planner",
      problem: "Navigating complex metro networks like Kolkata's can be confusing for commuters, leading to inefficient travel.",
      impact: "Built a Dijkstra-powered route calculator with interactive SVG maps, covering 6 lines and providing real-time journey breakdowns.",
      hardPart: "Optimizing pathfinding across dynamic graph updates.",
      tags: ["Next.js 15", "TypeScript", "Dijkstra", "Tailwind CSS"],
      github: "https://github.com/rachts/kolkata-metro",
      demo: "https://metro-kolkata.vercel.app/"
    },
    {
      id: "restaurant-bot",
      title: "Restaurant Bot — Conversational Booking Engine",
      problem: "Static restaurant booking forms create friction and drive high user abandonment.",
      impact: "Developed a conversational booking interface with real-time availability checks and instant confirmations, optimized for mobile UX.",
      tags: ["Next.js 16", "React 19", "TypeScript", "Radix UI"],
      github: "https://github.com/rachts/RESTAURANT-RESERVATION-BOT",
      demo: "https://restaurantreservation-bot.netlify.app/"
    },
    {
      id: "kredai",
      title: "KredAI — AI-Powered Fact Checker",
      problem: "The rapid spread of misinformation makes it difficult for users to verify the authenticity of news headlines and social media forwards.",
      impact: "Built a real-time fact-checking platform using Serper.dev API to provide evidence-backed verdicts across multiple languages.",
      tags: ["Next.js 16", "Serper API", "AI Verification", "Tailwind CSS"],
      github: "https://github.com/rachts/khabri.ai",
      demo: "https://kredai.vercel.app/"
    },
    {
      id: "privsight",
      title: "PrivSight — Computer Vision Privacy Shield",
      problem: "Sensitive information on desktop screens is often vulnerable to shoulder surfing or unauthorized viewing in public spaces.",
      impact: "Engineered a cross-platform Electron/Python app that uses facial recognition to automatically blur notifications when unauthorized persons are detected.",
      tags: ["Electron", "Python", "OpenCV", "Facial Recognition"],
      github: "https://github.com/rachts/privsight",
      demo: "https://privsight.vercel.app/"
    },
    {
      id: "doceasy",
      title: "DocEasy — Cloud Document Suite",
      problem: "Most browser-based document tools compromise on privacy, features, or seamless cloud persistence.",
      impact: "Developed a professional platform for browser-based PDF compression and image processing, integrated with Supabase RLS for secure cloud storage.",
      tags: ["Next.js", "Supabase", "Tailwind CSS", "pdf-lib"],
      github: "https://github.com/rachts/doceasy",
      demo: "https://doceasy-official.vercel.app/"
    },
    {
      id: "welcometomycity",
      title: "WelcomeToMyCity — Emotion-First Urban OS",
      problem: "Traditional travel applications treat maps as static widgets rather than immersive canvases, failing to capture the vibe of a city.",
      impact: "Architected a Map-First canvas with an Experience Engine that maps locations to emotional vectors like Romantic or Peaceful.",
      isFlagship: true,
      architecture: "Map-First canvas using MapLibre and Next.js 15, syncing tightly with a Supabase PostgreSQL backend via real-time subscriptions.",
      metrics: "Handles 10,000+ map markers with smooth 60fps rendering using WebGL clustering.",
      failureHandling: "Graceful UI degradation when location services drop, falling back to cached local vector tiles.",
      hardPart: "Synchronizing complex Framer Motion layout transitions with WebGL map camera movements without frame drops.",
      tags: ["Next.js 15", "MapLibre", "Supabase", "Framer Motion"],
      github: "https://github.com/rachts/welcometomycity",
      demo: "https://welcometomycity.vercel.app/"
    }
  ],
  timeline: [
    {
      id: 1,
      title: "VITAMEND Founder and Developer",
      date: "Since 2024",
      description: "Leading architectural decisions and building high-performance microservices for medicine redistribution."
    },
    {
      id: 2,
      title: "Web & App Developer",
      date: "Since 2024",
      description: "Built responsive, high-performance web and mobile applications using modern frameworks."
    },
    {
      id: 3,
      title: "Open Source Contributor",
      date: "2024–Present",
      description: "Contributed to major open-source repositories and hackathons."
    }
  ],
  stats: [
    { label: "Projects Deployed", value: 31, suffix: "+" },
    { label: "Code Contributions", value: 3308, suffix: "+" },
    { label: "Users Impacted", value: 100, suffix: "+" }
  ],
  beyond: {
    vectorsOfInterest: [
      "Applied AI & Computer Vision",
      "Real-Time Streaming Systems",
      "Human-Computer Interaction (HCI)",
      "Spatial & Interactive Interfaces",
      "Full-Stack System Architecture"
    ],
    writing: {
      title: "Writing & Thoughts",
      description: "Documenting the journey of building software, exploring technical architecture, and sharing thoughts on the intersection of technology and human experience. Writing is my way of debugging ideas.",
      imageUrl: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhuXhNcle3bfvNl5VevPvWltAKworGD3qOf5arZdA_eO8Y2Fa744qfRz7PZD46tjZY4bH9HiO7SGzTBTEzZrJ7uX5rXKv0Jp7CT2o5-3ecyMOEmpQPDOvJ0E7BazLko8YgrG1TJnvA6evV54rbKWOyGLX-n2YsWLk5oW7pFCEm7ns8w5hXpBWeRBdLieJz7ryfQc-_g9tzwu98q1pB7YujO6uDptxc8N18qc_h_oUV4sp5FnB4FLrh0hMwL0i05tG2tS_zdYegmkRN",
      imageAlt: "A sleek laptop on a cool gray desk next to a minimal coffee cup in soft lighting."
    },
    travel: {
      title: "Travel",
      description: "Gaining new perspectives through global exploration. Understanding different cultures shapes how I design user experiences for a worldwide audience."
    },
    buildingInPublic: {
      title: "Building in Public",
      description: "Radical transparency in the development process. Sharing wins, failures, and the messy reality of shipping products."
    }
  },
  faq: [
    {
      question: "What is your primary tech stack?",
      answer: "I specialize in React, TypeScript, Node.js, and Python. I typically use Next.js or Vite for the frontend and Express or FastAPI for the backend."
    },
    {
      question: "Do you focus more on frontend or backend?",
      answer: "I am a Full-Stack Systems Engineer. I architect robust backend services while ensuring the frontend is highly interactive and performant."
    },
    {
      question: "What is your approach to performance optimization?",
      answer: "I focus on minimizing re-renders in React, lazy loading components, optimizing assets, and ensuring API responses are cached and swift. My goal is always a Lighthouse score > 90."
    }
  ],
  contact: {
    email: "tiwari.rachit@gmail.com",
    github: "https://github.com/rachts",
    linkedin: "https://www.linkedin.com/in/rachitkrtiwari/",
    twitter: "https://x.com/rachtss",
  }
};