import { Listing } from "@anshul/shared-types";

export function ListingCard({ listing }: { listing: Listing }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-6 hover:shadow-md transition">
      {/* Heading */}
      <h3 className="text-lg font-semibold text-gray-800">
        {listing.heading}
      </h3>

      {/* Work type + compensation */}
      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600">
        <span>
          {listing.workFromHome ? "Work from home" : "On-site"}
        </span>

        <span>
          ₹ {listing.compensation > 0 ? listing.compensation : "Unpaid"} / month
        </span>
      </div>

      {/* Summary */}
      <p className="mt-3 text-sm text-gray-700">
        {listing.summary}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-4">
        {listing.tags.map((tag, index) => (
          <span
            key={index}
            className="text-xs bg-gray-100 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Post intern promise */}
      {listing.postInternPromise && (
        <span className="mt-4 text-xs bg-green-50 text-green-700 px-3 py-2 rounded-md inline-block">
          {listing.postInternPromise}
        </span>
      )}
    </div>
  );
}