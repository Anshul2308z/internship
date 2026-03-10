import { Listing } from "@anshul/shared-types";
import { ListingCard } from "./Card";

export function ListingList({ listings }: { listings: Listing[] }) {
  return (
    <section className="flex-1 space-y-6">
      {listings.map((listing) => (
        <ListingCard key={listing.id} listing={listing} />
      ))}
    </section>
  );
}