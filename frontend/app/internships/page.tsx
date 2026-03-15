import { ListingList } from '../ui/Cards/ListCard';
import { fetchListings } from '../middlewares/fetchListings';
import FilterLayout from '../ui/Cards/filteredLayout';

export default async function InternshipPage() {
  const interns = await fetchListings({ type: "intern" });

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">

        {/* Sidebar */}
        <div className="md:w-80 shrink-0 md:self-stretch">
          <FilterLayout />
        </div>

        {/* Listings */}
        <ListingList listings={interns} />

      </div>
    </div>
  );
}