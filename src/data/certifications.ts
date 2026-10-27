export interface Certification {
  title: string;
  category: "Skill" | "Role";
  level?: "Basic" | "Intermediate" | "Advanced";
  url: string;
}

export const certifications: Certification[] = [
  {
    title: "SQL",
    category: "Skill",
    level: "Basic",
    url: "https://www.hackerrank.com/certificates/e3050966d178",
  },
  {
    title: "Python",
    category: "Skill",
    level: "Basic",
    url: "https://www.hackerrank.com/certificates/be0701c0cf03",
  },
  {
    title: "Java",
    category: "Skill",
    level: "Basic",
    url: "https://www.hackerrank.com/certificates/d68e6590c7fd",
  },
  {
    title: "Problem Solving",
    category: "Skill",
    level: "Intermediate",
    url: "https://www.hackerrank.com/certificates/3038befe0c37",
  },
  {
    title: "SQL",
    category: "Skill",
    level: "Intermediate",
    url: "https://www.hackerrank.com/certificates/2e8b55bea7ba",
  },
  {
    title: "SQL",
    category: "Skill",
    level: "Advanced",
    url: "https://www.hackerrank.com/certificates/b34dfbd20f36",
  },
  {
    title: "REST API",
    category: "Skill",
    level: "Intermediate",
    url: "https://www.hackerrank.com/certificates/9d7f52f63605",
  },
  {
    title: "Problem Solving",
    category: "Skill",
    level: "Basic",
    url: "https://www.hackerrank.com/certificates/71ee578ee6a4",
  },
  {
    title: "Node.js",
    category: "Skill",
    level: "Intermediate",
    url: "https://www.hackerrank.com/certificates/0b98b43dff8f",
  },
  {
    title: "Node",
    category: "Skill",
    level: "Basic",
    url: "https://www.hackerrank.com/certificates/8cca9d0d027e",
  },
  {
    title: "JavaScript",
    category: "Skill",
    level: "Basic",
    url: "https://www.hackerrank.com/certificates/e7c1e21e3b95",
  },
  {
    title: "CSS",
    category: "Skill",
    level: "Basic",
    url: "https://www.hackerrank.com/certificates/86f59e76f0e3",
  },
  {
    title: "JavaScript",
    category: "Skill",
    level: "Intermediate",
    url: "https://www.hackerrank.com/certificates/3c4ab6075d69",
  },
  {
    title: "Software Engineer",
    category: "Role",
    url: "https://www.hackerrank.com/certificates/096ba2f7c795",
  },
];

export default certifications;
