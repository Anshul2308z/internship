import { Intern, Job } from "../types";
import { JobCard, InternCard } from "./Card";

export function InternList({ intern }: { intern: (Intern)[] }) {
  return (
    <section className="flex-1 space-y-6">
      {intern.map((intern) => (
        <InternCard key={intern.id} intern={intern} />
      ))}
    </section>
  );
}

export function JobList({ job }: { job: (Job)[] }) {
  return (
    <section className="flex-1 space-y-6">
      {job.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </section>
  );
}