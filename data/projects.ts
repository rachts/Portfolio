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
    liveDemo: "https://vitamend-official.vercel.app/",
    github: "https://github.com/rachts/Vitamend-UPSTOP",
    featured: true,
  },
  {
  id: "kolkata-metro-web",
  name: "Kolkata Metro Route Planner",
  problem: "Commuters need a simple web tool to plan optimal routes and estimate travel time across the Kolkata Metro network.",
  description:
    "A civic-tech web application that displays the Kolkata Metro map and intelligently estimates optimal routes and travel time between stations using graph-based pathfinding. Designed for commuters to plan journeys efficiently and visually explore the metro network.",
  techStack: ["Next.js 15", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "Lucide React"],
  features: [
    "Interactive map of the Kolkata Metro network",
    "Optimal route planning using Dijkstra’s algorithm",
    "Travel time breakdown with interchange handling",
    "Dark & light theme support",
    "Responsive design for mobile and desktop",
  ],
  liveDemo: "https://metro-kolkata.vercel.app/",
  github: "https://github.com/rachts/Kolkata-Metro",
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

