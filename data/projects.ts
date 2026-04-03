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
    liveDemo: "https://vocalis-va.vercel.app/",
    github: "https://github.com/rachts/Vocalis",
    featured: true,
  },
    {
  id: "doceasy",
  name: "DocEasy",
  problem: "Scattered document storage and inefficient file size management",
  description:
    "DocEasy is a centralized document management platform that allows users to securely store all important documents and IDs in one place. The platform enables smart document compression and flexible downloads, allowing users to retrieve files in the required resolution or format without maintaining multiple copies.",
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
    "Cloud-based storage with fast retrieval"
  ],
  liveDemo: "https://doceasy-official.vercel.app/",
  github: "https://github.com/rachts/DocEasy",
  featured: true
},
{
  id: "3d-model-generator",
  name: "3D Model Generator",
  problem: "Creating 3D models requires specialized skills, tools, and significant time, making it inaccessible for non-designers and rapid prototyping",
  description:
    "3D Model Generator is an AI-powered platform that allows users to generate 3D models from simple text prompts or inputs. It simplifies the 3D creation process by eliminating the need for complex design software, enabling developers, designers, and creators to quickly prototype and visualize ideas in a 3D environment.",
  techStack: [
    "Next.js",
    "TypeScript",
    "Three.js",
    "WebGL",
    "AI/ML APIs",
    "Cloud Storage"
  ],
  features: [
    "Generate 3D models using simple text prompts",
    "Real-time 3D preview and interaction",
    "Export models in standard formats (GLTF/OBJ)",
    "User-friendly interface for non-designers",
    "Fast prototyping for developers and creators",
    "Cloud-based storage and model management"
  ],
  liveDemo: "",
  github: "https://github.com/rachts/3D-MODEL-GENERATOR",
  featured: true
  },
  {
  id: "kolkata-metro-planner",
  name: "Kolkata Metro Route Planner",
  problem: "Planning metro journeys efficiently is difficult due to multiple lines, interchanges, and lack of clear travel time estimation in a single interface",
  description:
    "Kolkata Metro Route Planner is a modern, interactive web application that helps users find the most efficient routes across the Kolkata Metro network. It uses Dijkstra's algorithm to compute optimal paths while providing detailed travel insights like time breakdowns, interchange penalties, and peak-hour adjustments, all within a visually intuitive interface.",
  techStack: [
    "Next.js 15",
    "TypeScript",
    "React",
    "Tailwind CSS",
    "shadcn/ui",
    "next-themes",
    "Lucide React"
  ],
  features: [
    "Smart route calculation using Dijkstra’s shortest path algorithm",
    "Interactive metro map with clickable stations",
    "Support for all major Kolkata Metro lines",
    "Detailed travel time breakdown including dwell and interchange time",
    "Peak hour mode with adjusted time estimates",
    "Option to minimize interchanges for convenience",
    "Dark and light mode support",
    "Fully responsive and mobile-optimized interface"
  ],
  liveDemo: "https://metro-kolkata.vercel.app/",
  github: "https://github.com/rachts/kolkata-metro.git",
  featured: true
},
{
  id: "welcometomycity",
  name: "WelcomeToMyCity",
  problem: "Urban travel and tourism planning is fragmented across multiple apps, making it difficult to compare transport options, explore attractions, and plan efficient itineraries in one place",
  description:
    "WelcomeToMyCity is a comprehensive civic-tech platform that unifies city transport planning, tourism discovery, and itinerary generation into a single seamless experience. It enables users to compare multiple transport modes, explore curated city attractions, and generate optimized multi-day travel plans across major Indian metro cities.",
  techStack: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "React Context API",
    "Lucide React"
  ],
  features: [
    "Multi-modal transport planner (Metro, Bus, Taxi, Walking)",
    "Real-time cost and travel duration estimation",
    "Comprehensive bus route database with smart route matching",
    "City explorer with categorized tourist attractions",
    "Search and filter functionality for places",
    "AI-based itinerary generation for 1–3 day trips",
    "Route optimization for efficient travel planning",
    "Multi-city support across 12 major Indian metro cities",
    "Google Maps integration for navigation",
    "Dark and light mode support"
  ],
  liveDemo: "https://welcometomycity-2-0.vercel.app/",
  github: "https://github.com/rachts/welcometomycity.git",
  featured: true
},
{
  id: "restaurant-reservation-bot",
  name: "Restaurant Reservation Chatbot",
  problem: "Booking restaurant reservations is often time-consuming and fragmented, requiring users to navigate multiple platforms instead of using a simple conversational interface",
  description:
    "Restaurant Reservation Chatbot is a conversational AI-driven web application that allows users to seamlessly book restaurant tables through natural language interaction. It simplifies the reservation process by providing real-time availability, booking confirmations, and menu-related queries within an intuitive chat-based interface.",
  techStack: [
    "Next.js 16",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "Radix UI",
    "React Hooks"
  ],
  features: [
    "Conversational AI interface for booking reservations",
    "Real-time table availability checking",
    "Instant booking confirmation with reference ID",
    "Menu information and query handling",
    "Responsive design for mobile and desktop",
    "Session reset and conversation control",
    "Scalable architecture with modular documentation"
  ],
  liveDemo: "https://restaurantreservation-bot.netlify.app/",
  github: "https://github.com/rachts/restaurant-reservation-bot.git",
  featured: true
},
{
  id: "khabri-ai",
  name: "khabri.ai",
  problem: "The rapid spread of misinformation and fake news makes it difficult for users to verify the authenticity of headlines and social media forwards in real-time",
  description:
    "khabri.ai is an AI-driven news verification platform that combats misinformation by cross-referencing claims against trusted global and local sources. It provides instant, evidence-backed verdicts using real-time search data, enabling users to verify news credibility with transparency and confidence.",
  techStack: [
    "Next.js 16",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Serper.dev API",
    "next-themes",
    "Lucide React"
  ],
  features: [
    "AI-powered fact-checking for headlines and social media content",
    "Real-time news feed from trusted global and Indian sources",
    "Evidence-backed verdicts with source links",
    "Verdict classification (TRUE, FALSE, MISLEADING, NOT VERIFIED)",
    "Multilingual support (English, Hindi, Bengali)",
    "Premium UI with smooth animations and responsive design",
    "Dark and light mode support"
  ],
  liveDemo: "https://khabriai.vercel.app/",
  github: "https://github.com/rachts/khabri.ai.git",
  featured: true
},
{
  id: "privsight",
  name: "PRIVSIGHT ",
  problem: "Sensitive on-screen information is vulnerable to shoulder surfing and unauthorized viewing, with limited real-time privacy protection solutions available on desktop systems",
  description:
    "PRIVSIGHT v2.0 is a cross-platform desktop application that uses real-time facial recognition to intelligently protect user privacy. By detecting the presence of authorized and unauthorized viewers through the webcam, it dynamically controls notification visibility, ensuring sensitive information remains secure without interrupting the user experience.",
  techStack: [
    "Electron",
    "React 19",
    "TypeScript",
    "Python",
    "OpenCV",
    "face-recognition",
    "WebSockets",
    "Vite"
  ],
  features: [
    "Real-time facial recognition using webcam input",
    "Automatic notification blurring for unauthorized or multiple viewers",
    "Local processing with no cloud dependency for enhanced privacy",
    "Manual privacy mode toggle for instant screen protection",
    "Configurable sensitivity, detection frequency, and blur intensity",
    "System tray integration for always-on monitoring",
    "Cross-platform support for macOS and Windows",
    "Modular architecture with Electron frontend and Python backend"
  ],
  liveDemo: "https://privsight.vercel.app/",
  github: "https://github.com/rachts/PrivSight",
  featured: true
},
  {
    id: "gesture ar system",
    name: "AIR MOUSE",
    problem: "Webcam Based Air Mouse Controller",
    description:
      "Python-based air mouse controller using hand gestures for real-time cursor movement and control, enabling touchless and intuitive human–computer interaction.",
    techStack: ["Python"],
    features: [
      "Hand Tracking - Real-time 21-point hand landmark detection using MediaPipe",
      "Gesture Recognition - Detect pinch, fist, pointing, open palm, peace sign, thumbs up",
      "Cursor Control - Move mouse, click, drag, and scroll with hand gestures",
      "Air Drawing - Draw in the air with your finger and save your artwork",
      "Voice Commands - Optional voice control for hands-free actions",
      "Kalman Filtering - Smooth, jitter-free cursor movement",
    ],
    github: "https://github.com/rachts/Air-Mouse",
    featured: false,
  },
{
    id: "gesture controller",
    name: "Gesture Media Controller",
    problem: "Webcam based media controller using hand gestures",
    description:
      "Python-based AI gesture controller enabling intuitive hand-gesture interactions. Supports real-time gesture recognition, responsive controls, and easy integration with devices and applications for seamless user experience.",
    techStack: ["Python"],
    features: [
      "Real-time hand tracking using Google MediaPipe",
      "Intuitive gesture recognition for media control",
      "Visual feedback with heads-up display overlay",
      "FPS monitoring for performance tracking",
      "Gesture cooldowns to prevent accidental repeated triggers",
      "Smooth motion detection using moving average filtering",
    ],
    github: "https://github.com/rachts/Gesture-controller",
    featured: false,
  },


]

