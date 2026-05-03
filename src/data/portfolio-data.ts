export const portfolioData = {
  hero: {
    headline: "Engineering Scalable Systems.",
    subtext: "I build high-performance applications that solve complex problems, optimizing for speed, resilience, and user experience.",
  },
  about: {
    valueProp: "More than just writing code, I design systems. With a strong engineering mindset, I focus on architecture, performance, and delivering measurable impact. From deep technical problem-solving to crafting pixel-perfect interfaces, I bridge the gap between robust backends and engaging user experiences."
  },
  projects: [
    {
      id: "optrafi",
      title: "SOLUTION: Stealth Personal Finance Vault",
      problem: "Financial dashboards are often cluttered and overwhelming, making it difficult to maintain a hyper-focused view of one's trajectory.",
      impact: "Engineered a minimalist 'Wallet-Extension' style vault with Next.js 16 and MongoDB, featuring dynamic investment tiers and AI-driven delta analysis.",
      tags: ["Next.js 16", "MongoDB", "jose JWT", "Recharts"],
      github: "https://github.com/rachts/optrafi",
      demo: "https://optra-fi.vercel.app/"
    },
    {
      id: "vitamend",
      title: "SOLUTION: Medicine OCR & Expiry Detection",
      problem: "Manual entry for medicine donations is slow and error-prone, leading to expired medications slipping through.",
      impact: "Automated 95% of manual data entry with Tesseract OCR, validating 10,000+ donations.",
      tags: ["Python", "OCR", "Next.js", "Node.js"],
      github: "https://github.com/rachts/vitamend-official",
      demo: "vitamend-org.vercel.app"
    },
    {
      id: "vocalis",
      title: "SOLUTION: Real-time Voice Analytics",
      problem: "Lack of accessible tools to analyze speech patterns and provide instant feedback for public speakers.",
      impact: "Processed over 500 hours of audio with < 200ms latency.",
      tags: ["Python 3.14", "WebSockets", "React", "FastAPI"],
      github: "https://github.com/rachts/Vocalis",
      demo: "vocalis-va.vercel.app"
    },
    {
      id: "air-mouse",
      title: "SOLUTION: Gesture-Based AR Interface",
      problem: "Conventional computer control lacks the immersion and accessibility required for spatial computing and hands-free environments.",
      impact: "Developed a real-time 21-point hand tracking system with Kalman filtering for jitter-free cursor control and air-drawing.",
      tags: ["Python", "OpenCV", "MediaPipe", "Kalman Filter"],
      github: "https://github.com/rachts/Air-mouse",
      demo: "#"
    },
    {
      id: "gesture-media",
      title: "SOLUTION: Touchless Media System",
      problem: "Physically interacting with devices during media playback can be inconvenient or impossible in many real-world scenarios.",
      impact: "Created an intuitive gesture-controlled system for Spotify and VLC, featuring smooth motion detection and HUD feedback.",
      tags: ["Python", "MediaPipe", "PyAutoGUI", "OpenCV"],
      github: "https://github.com/rachts/gesture-media-controller",
      demo: "#"
    },
    {
      id: "kolkata-metro",
      title: "SOLUTION: Intelligent Urban Transit Planner",
      problem: "Navigating complex metro networks like Kolkata's can be confusing for commuters, leading to inefficient travel.",
      impact: "Built a Dijkstra-powered route calculator with interactive SVG maps, covering 6 lines and providing real-time journey breakdowns.",
      tags: ["Next.js 15", "TypeScript", "Dijkstra", "Tailwind CSS"],
      github: "https://github.com/rachts/kolkata-metro",
      demo: "https://metro-kolkata.vercel.app/"
    },
    {
      id: "kaleshphile",
      title: "SOLUTION: Satirical AI Companion",
      problem: "Most AI chatbots are overly polite and lack the personality required for engaging, satirical storytelling.",
      impact: "Created a 'Kaleshi' AI girlfriend using Vercel AI SDK and OpenAI, featuring a live mood indicator and dramatic Hinglish interactions.",
      tags: ["Next.js 15", "OpenAI", "Vercel AI SDK", "Framer Motion"],
      github: "https://github.com/rachts/kaleshphile",
      demo: "https://kaleshphile.vercel.app/"
    },
    {
      id: "restaurant-bot",
      title: "SOLUTION: Conversational Booking Engine",
      problem: "Traditional restaurant booking forms are static and often result in high abandonment rates.",
      impact: "Developed a mobile-responsive AI chatbot that handles real-time availability checks and booking confirmations with a focus on UX.",
      tags: ["Next.js 16", "React 19", "TypeScript", "Radix UI"],
      github: "https://github.com/rachts/RESTAURANT-RESERVATION-BOT",
      demo: "https://restaurantreservation-bot.netlify.app/"
    },
    {
      id: "khabri-ai",
      title: "SOLUTION: AI Misinformation Combatant",
      problem: "The rapid spread of misinformation makes it difficult for users to verify the authenticity of news headlines and social media forwards.",
      impact: "Built a real-time fact-checking platform using Serper.dev API to provide evidence-backed verdicts across multiple languages.",
      tags: ["Next.js 16", "Serper API", "AI Verification", "Tailwind CSS"],
      github: "https://github.com/rachts/khabri.ai",
      demo: "https://khabriai.vercel.app/"
    },
    {
      id: "privsight",
      title: "SOLUTION: Computer Vision Privacy Shield",
      problem: "Sensitive information on desktop screens is often vulnerable to 'shoulder surfing' or unauthorized viewing in public spaces.",
      impact: "Engineered a cross-platform Electron/Python app that uses facial recognition to automatically blur notifications when unauthorized persons are detected.",
      tags: ["Electron", "Python", "OpenCV", "Facial Recognition"],
      github: "https://github.com/rachts/privsight",
      demo: "https://privsight.vercel.app/"
    },
    {
      id: "doceasy",
      title: "SOLUTION: Cloud-Integrated Document Suite",
      problem: "Online document manipulation tools often lack privacy, feature-depth, or seamless cloud persistence for power users.",
      impact: "Developed a professional platform for browser-based PDF compression and image processing, integrated with Supabase RLS for secure cloud storage.",
      tags: ["Next.js", "Supabase", "Tailwind CSS", "pdf-lib"],
      github: "https://github.com/rachts/doceasy",
      demo: "https://doceasy-official.vercel.app/"
    },
    {
      id: "welcometomycity",
      title: "SOLUTION: Emotion-First Urban OS",
      problem: "Traditional travel applications treat maps as static widgets rather than immersive canvases, failing to capture the 'vibe' of a city.",
      impact: "Architected a Map-First canvas using MapLibre and Next.js 15, featuring an 'Experience Engine' that maps locations to emotional vectors like Romantic or Peaceful.",
      tags: ["Next.js 15", "MapLibre", "Supabase", "Framer Motion"],
      github: "https://github.com/rachts/welcometomycity",
      demo: "https://welcometomycity.vercel.app/"
    }
  ],
  timeline: [
    {
      id: 1,
      title: "VITAMEND Founder and Developer",
      date: "Since 2025",
      description: "Leading architectural decisions and building high-performance microservices."
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
      date: "2024-Present",
      description: "Contributed to major open-source repositories and hackathons."
    }
  ],
  stats: [
    { label: "Projects Deployed", value: 50, suffix: "+" },
    { label: "Code Contributions", value: 1500, suffix: "+" },
    { label: "Users Impacted", value: 100, suffix: "+" }
  ],
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
  }
};
