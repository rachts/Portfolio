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
      title: "SOLUTION: Decentralized Portfolio Management",
      problem: "Traditional crypto trackers lack intuitive UX and real-time smart planning for asset allocation.",
      impact: "Reduced asset tracking latency by 40% and improved onboarding conversion by 25%.",
      tags: ["React", "TypeScript", "MetaMask", "MongoDB"],
      github: "#",
      demo: "#"
    },
    {
      id: "vitamend",
      title: "SOLUTION: Medicine OCR & Expiry Detection",
      problem: "Manual entry for medicine donations is slow and error-prone, leading to expired medications slipping through.",
      impact: "Automated 95% of manual data entry with Tesseract OCR, validating 10,000+ donations.",
      tags: ["Python", "OCR", "Next.js", "Node.js"],
      github: "#",
      demo: "#"
    },
    {
      id: "vocalis",
      title: "SOLUTION: Real-time Voice Analytics",
      problem: "Lack of accessible tools to analyze speech patterns and provide instant feedback for public speakers.",
      impact: "Processed over 500 hours of audio with < 200ms latency.",
      tags: ["Python 3.14", "WebSockets", "React", "FastAPI"],
      github: "#",
      demo: "#"
    }
  ],
  timeline: [
    {
      id: 1,
      title: "Senior Software Engineer",
      date: "2024 - Present",
      description: "Leading architectural decisions and building high-performance microservices."
    },
    {
      id: 2,
      title: "Full Stack Developer",
      date: "2022 - 2024",
      description: "Developed scalable web applications and established CI/CD pipelines."
    },
    {
      id: 3,
      title: "Open Source Contributor",
      date: "2021 - 2022",
      description: "Contributed to major open-source repositories and hackathons."
    }
  ],
  stats: [
    { label: "Projects Deployed", value: 42 },
    { label: "Contributions", value: 1250 },
    { label: "Users Impacted", value: 15000 }
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
  ]
};
