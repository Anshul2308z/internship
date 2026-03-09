import { Intern, Job } from "@/app/ui/types";

export function InternCard({ intern }: { intern: Intern }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition">
      {/* Heading */}
      <h3 className="text-lg font-semibold text-gray-800">
        {intern.heading}
      </h3>

      {/* Work type + stipend */}
      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600">
        <span>
          {intern.workFromHome ? "Work from home" : "On-site"}
        </span>

        <span>
          ₹ {intern.stiphend > 0 ? intern.stiphend : "Unpaid"} / month
        </span>
      </div>

      {/* Summary */}
      <p className="mt-3 text-sm text-gray-700">
        {intern.summary}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {intern.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-gray-100 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Post intern promise */}
      {intern.postInternPromise && (
        <span className=" mt-4 text-xs bg-green-50 text-green-700 px-3 py-2 rounded-md inline-block">
          {intern.postInternPromise}
        </span>
      )}
    </div>
  );
}

export function JobCard({ job }: { job: Job }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition">
      {/* Heading */}
      <h3 className="text-lg font-semibold text-gray-800">
        {job.heading}
      </h3>

      {/* Work type + stipend */}
      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600">
        <span>
          {job.workFromHome ? "Work from home" : "On-site"}
        </span>

        <span>
          ₹ {job.salary > 0 ? job.salary : "Unpaid"} / month
        </span>
      </div>

      {/* Summary */}
      <p className="mt-3 text-sm text-gray-700">
        {job.summary}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {job.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-gray-100 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Post intern promise */}
      {job.postInternPromise && (
        <span className=" mt-4 text-xs bg-green-50 text-green-700 px-3 py-2 rounded-md inline-block">
          {job.postInternPromise}
        </span>
      )}
    </div>
  );
}