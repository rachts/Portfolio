export interface Project {
  id: string
  name: string
  problem: string
  description: string
  techStack: string[]
  features: string[]
  liveDemo?: string
  github?: string
  featured: boolean
  impact?: string[]
  technicalChallenge?: string
  solution?: string
  codeSnippet?: string
}

export const projects: Project[] = [
  {
    id: "vitamend",
    name: "Vitamend",
    problem: "Medicine waste and lack of donation infrastructure",
    description:
      "A medicine donation platform with AI-based verification and expiry detection, connecting donors with those in need while ensuring medication safety.",
    techStack: ["React", "Node.js", "TensorFlow", "MongoDB", "Express"],
    features: [
      "AI-powered medicine verification",
      "Expiry date detection via image recognition",
      "Donor-recipient matching algorithm",
      "Real-time inventory tracking",
    ],
    impact: [
      "Integrated OCR pipeline achieving 85%+ accuracy in expiry detection",
      "Handles 1000+ potential medication record updates securely",
      "Reduced manual verification processing time by 40%"
    ],
    technicalChallenge: "Ensuring high accuracy of OCR on varying quality images of medicine strips, while preventing fraudulent or expired donations from bypassing security checks.",
    solution: "Built a robust Python microservice for image processing using TensorFlow, decoupling the OCR load from the main Node.js API to maintain sub-second response times for the web client.",
    liveDemo: "https://vitamend-org.vercel.app/",
    github: "https://github.com/rachts/Vitamend-official",
    featured: true,
  },
  {
    id: "vocalis",
    name: "Vocalis",
    problem: "Need for intelligent voice-driven AI assistants in web applications",
    description:
      "An AI-powered virtual assistant and experimental product platform that leverages natural language processing for seamless human-computer interaction.",
    techStack: ["Next.js", "TypeScript", "OpenAI", "TailwindCSS", "Vercel"],
    features: [
      "Voice recognition and synthesis",
      "Context-aware conversations",
      "Plugin architecture for extensibility",
      "Real-time response streaming",
    ],
    impact: [
      "Reduced latency in voice-to-text response loop by 300ms",
      "Engineered an extensible plugin architecture for modular commands",
      "Achieved seamless streaming of AI responses to prevent UI blocking"
    ],
    technicalChallenge: "Maintaining conversational context and handling continuous audio streams without causing memory leaks or UI jitter in the React component tree.",
    solution: "Implemented a custom React context provider with chunked streaming via WebSockets, bypassing standard REST bottlenecks and ensuring 60fps UI performance during long AI replies.",
    liveDemo: "https://vocalis-va.vercel.app/",
    github: "https://github.com/rachts/Vocalis",
    featured: true,
  },
  {
    id: "doceasy",
    name: "DocEasy",
    problem: "Scattered document storage and inefficient file size management",
    description:
      "DocEasy is a centralized document management platform that allows users to securely store all important documents and IDs in one place.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Cloud Storage",
      "Document Processing APIs"
    ],
    features: [
      "Centralized storage for documents and personal IDs",
      "Intelligent document and image compression",
      "Download files in custom resolution or format",
      "Secure access and organized document categorization",
    ],
    impact: [
      "Optimized file uploads reducing average storage footprint by 60%",
      "Implemented zero-trust architecture using Row Level Security (RLS)",
      "Decreased client-side processing time for large PDF generation"
    ],
    technicalChallenge: "Handling heavy client-side document compression and format conversion without freezing the browser's main thread.",
    solution: "Offloaded image and PDF compression logic to Web Workers, leveraging Supabase's secure edge functions for final validation and secure bucket storage.",
    liveDemo: "https://doceasy-official.vercel.app/",
    github: "https://github.com/rachts/DocEasy",
    featured: true
  },
  {
    id: "3d-model-generator",
    name: "3D Model Generator",
    problem: "Creating 3D models requires specialized skills and tools.",
    description:
      "3D Model Generator is an AI-powered platform that allows users to generate 3D models from simple text prompts or inputs.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Three.js",
      "WebGL",
      "AI/ML APIs"
    ],
    features: [
      "Generate 3D models using simple text prompts",
      "Real-time 3D preview and interaction",
      "Export models in standard formats (GLTF/OBJ)",
    ],
    impact: [
      "Integrated complex 3D rendering directly into the DOM using Three.js",
      "Reduced rendering bottlenecks through aggressive geometry caching",
      "Streamlined the generation-to-download pipeline"
    ],
    technicalChallenge: "Rendering dynamically generated, high-poly GLTF models in the browser without crashing WebGL contexts on low-end devices.",
    solution: "Implemented progressive loading and level-of-detail (LOD) strategies, ensuring the Three.js canvas initializes instantly while models stream in asynchronously.",
    liveDemo: "",
    github: "https://github.com/rachts/3D-MODEL-GENERATOR",
    featured: true
  },
  {
    id: "kolkata-metro-planner",
    name: "Kolkata Metro Route Planner",
    problem: "Planning metro journeys efficiently is difficult due to multiple lines and interchanges.",
    description:
      "A modern, interactive web application that helps users find the most efficient routes across the Kolkata Metro network using Dijkstra's algorithm.",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "React",
      "Tailwind CSS"
    ],
    features: [
      "Smart route calculation using Dijkstra’s algorithm",
      "Interactive metro map with clickable stations",
      "Detailed travel time breakdown",
    ],
    impact: [
      "Implemented a sub-10ms graph traversal algorithm in JS",
      "Reduced state re-renders by 80% using memoized pathing trees",
      "Handles dynamic peak-hour multiplier edge cases natively"
    ],
    technicalChallenge: "Executing complex graph traversal algorithms on the client-side while maintaining 60fps animations in the UI.",
    solution: "Pre-compiled the static metro network into an adjacency list during the build step, ensuring the Dijkstra computation resolves synchronously within milliseconds.",
    liveDemo: "https://metro-kolkata.vercel.app/",
    github: "https://github.com/rachts/kolkata-metro.git",
    featured: false
  },
  {
    id: "welcometomycity",
    name: "WelcomeToMyCity",
    problem: "Urban travel planning is fragmented across multiple apps.",
    description:
      "A comprehensive civic-tech platform that unifies city transport planning, tourism discovery, and itinerary generation.",
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "React Context API"
    ],
    features: [
      "Multi-modal transport planner",
      "Real-time cost and travel duration estimation",
      "AI-based itinerary generation",
    ],
    impact: [
      "Aggregated and normalized transport data for 12 major cities",
      "Reduced itinerary generation API costs by heavily caching requests",
      "Optimized Google Maps instance rendering for mobile"
    ],
    technicalChallenge: "Managing massive multi-modal transport datasets and complex map instances without causing layout thrashing on mobile browsers.",
    solution: "Deferred map script loading and used strict React Context boundaries to prevent map state updates from triggering global application re-renders.",
    liveDemo: "https://welcometomycity-2-0.vercel.app/",
    github: "https://github.com/rachts/welcometomycity.git",
    featured: false
  },
  {
    id: "khabri-ai",
    name: "khabri.ai",
    problem: "Rapid spread of misinformation and fake news.",
    description:
      "An AI-driven news verification platform that combats misinformation by cross-referencing claims against trusted sources.",
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Serper.dev API",
      "Framer Motion"
    ],
    features: [
      "AI-powered fact-checking for headlines",
      "Evidence-backed verdicts with source links",
      "Multilingual support",
    ],
    impact: [
      "Architected a prompt-chaining pipeline for strict JSON verification outputs",
      "Processed complex Serper.dev scraping data in under 2 seconds",
      "Maintained 100% Core Web Vitals score on content-heavy feeds"
    ],
    technicalChallenge: "Preventing AI hallucinations when generating 'verdicts' on highly subjective or emerging news topics.",
    solution: "Designed a multi-stage verification pipeline where the AI is strictly forced to cite direct URLs from a whitelisted set of domain authorities before issuing a verdict.",
    liveDemo: "https://khabriai.vercel.app/",
    github: "https://github.com/rachts/khabri.ai.git",
    featured: false
  },
  {
    id: "privsight",
    name: "PRIVSIGHT",
    problem: "Sensitive on-screen information is vulnerable to shoulder surfing.",
    description:
      "A cross-platform desktop application that uses real-time facial recognition to intelligently protect user privacy.",
    techStack: [
      "Electron",
      "React",
      "Python",
      "OpenCV"
    ],
    features: [
      "Real-time facial recognition using webcam",
      "Automatic notification blurring",
      "Local processing with no cloud dependency",
    ],
    impact: [
      "Engineered a zero-latency WebSocket bridge between Electron and Python",
      "Achieved 30fps local face detection with <10% CPU utilization",
      "Ensured 100% local processing for GDPR/CCPA compliance"
    ],
    technicalChallenge: "Running heavy OpenCV face detection loops in Python while instantly signaling the Electron UI to blur the screen without latency.",
    solution: "Implemented a local WebSocket server that streams minimal JSON coordinates rather than video frames, decoupling the heavy ML workload from the UI rendering thread.",
    liveDemo: "https://privsight.vercel.app/",
    github: "https://github.com/rachts/PrivSight",
    featured: false
  }
]

