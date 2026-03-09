import { JobList } from '../ui/Cards/ListCard';
import { FilterSidebar } from '../ui/Cards/FilterSidebar';





const jobs: Job[] = [
  {
    id: "1",
    heading: "Software Engineering Intern",
    summary: "Involved in developing and maintaining web applications.",
    workFromHome: true,
    salary: 1500,
    tags: ["JavaScript", "Node.js", "React"],
    postInternPromise: ""
  },
  {
    id: "2",
    heading: "Data Science Intern",
    summary: "Assisting in data analysis and machine learning projects.",
    workFromHome: false,
    salary: 0,
    tags: ["Python", "Pandas", "Machine Learning"],
    postInternPromise: "Potential for continued research collaboration."
  },
  {
    id: "3",
    heading: "Marketing Intern",
    summary: "Helping with social media campaigns and marketing strategies.",
    workFromHome: true,
    salary: 1000,
    tags: ["Social Media", "SEO", "Content Creation"],
    postInternPromise: "Opportunity for a full-time position after graduation."
  },
  {
    id: "4",
    heading: "Frontend Developer Intern",
    summary: "Building responsive UI components and improving UX.",
    workFromHome: true,
    salary: 2000,
    tags: ["React", "TailwindCSS", "TypeScript"],
    postInternPromise: ""
  },
  {
    id: "5",
    heading: "Backend Developer Intern",
    summary: "Developing REST APIs and database integration.",
    workFromHome: false,
    salary: 2500,
    tags: ["Node.js", "Express", "MongoDB"],
    postInternPromise: "Chance to join as junior backend engineer."
  },
  {
    id: "6",
    heading: "UI/UX Design Intern",
    summary: "Designing user interfaces and improving usability.",
    workFromHome: true,
    salary: 1200,
    tags: ["Figma", "Wireframing", "User Research"],
    postInternPromise: ""
  },
  {
    id: "7",
    heading: "DevOps Intern",
    summary: "Working on CI/CD pipelines and cloud deployments.",
    workFromHome: false,
    salary: 3000,
    tags: ["Docker", "AWS", "CI/CD"],
    postInternPromise: "Possible DevOps trainee role."
  },
  {
    id: "8",
    heading: "Mobile App Intern",
    summary: "Developing cross-platform mobile applications.",
    workFromHome: true,
    salary: 1800,
    tags: ["React Native", "Flutter", "Mobile UI"],
    postInternPromise: ""
  },
  {
    id: "9",
    heading: "Cybersecurity Intern",
    summary: "Assisting in security audits and vulnerability testing.",
    workFromHome: false,
    salary: 0,
    tags: ["Network Security", "Penetration Testing", "Linux"],
    postInternPromise: "Certificate and recommendation letter."
  },
  {
    id: "10",
    heading: "AI Research Intern",
    summary: "Researching deep learning models and optimization techniques.",
    workFromHome: true,
    salary: 3500,
    tags: ["Deep Learning", "PyTorch", "NLP"],
    postInternPromise: "Research publication opportunity."
  },
  {
    id: "11",
    heading: "Content Writing Intern",
    summary: "Writing technical blogs and documentation.",
    workFromHome: true,
    salary: 800,
    tags: ["Technical Writing", "Documentation", "SEO"],
    postInternPromise: ""
  },
  {
    id: "12",
    heading: "Product Management Intern",
    summary: "Supporting product strategy and roadmap planning.",
    workFromHome: false,
    salary: 2200,
    tags: ["Product Strategy", "Agile", "Analytics"],
    postInternPromise: "Full-time product analyst role."
  },
  {
    id: "13",
    heading: "QA Testing Intern",
    summary: "Testing applications and reporting bugs.",
    workFromHome: true,
    salary: 1000,
    tags: ["Manual Testing", "Automation", "Selenium"],
    postInternPromise: ""
  },
  {
    id: "14",
    heading: "Blockchain Intern",
    summary: "Building smart contracts and decentralized apps.",
    workFromHome: true,
    salary: 2800,
    tags: ["Solidity", "Ethereum", "Web3"],
    postInternPromise: "Opportunity to join blockchain team."
  },
  {
    id: "15",
    heading: "Business Analyst Intern",
    summary: "Analyzing business data and preparing reports.",
    workFromHome: false,
    salary: 1600,
    tags: ["Excel", "SQL", "Data Analysis"],
    postInternPromise: ""
  }
];

type Job = { 
  id: string;
  heading: string;
  summary: string;
  workFromHome: boolean;
  salary: number;
  tags: string[];
  postInternPromise: string;
}




export default function JobsPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
        <div className="md:w-80 self-start sticky top-6 max-h-[calc(100vh-1.5rem)] overflow-y-auto">
        <FilterSidebar />
        </div>
        <JobList job={jobs} />
      </div>
    </div>
  );
}