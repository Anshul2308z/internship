
type Intern = {
  id: string;
  heading: string;
  summary: string;
  workFromHome: boolean;
  stiphend: number;
  tags: string[];
  postInternPromise: string;
}

type Job = { 
  id: string;
  heading: string;
  summary: string;
  workFromHome: boolean;
  salary: number;
  tags: string[];
  postInternPromise: string;
}

export type { Intern, Job }; 