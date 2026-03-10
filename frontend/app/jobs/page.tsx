import { ListingList } from '../ui/Cards/ListCard';
import { FilterSidebar } from '../ui/Cards/FilterSidebar';
import { fetchListings } from '../middlewares/fetchListings';




export default async function JobsPage() {
  const jobs = await fetchListings({ type: "job" });
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start gap-8">
        <div className="md:w-80 self-start sticky top-6 max-h-[calc(100vh-1.5rem)] overflow-y-auto">
        <FilterSidebar />
        </div>
        <ListingList listings={jobs} />
      </div>
    </div>
  );
}

