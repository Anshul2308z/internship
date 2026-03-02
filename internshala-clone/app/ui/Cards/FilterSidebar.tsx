export function FilterSidebar() {
  return (
    <aside className="w-full md:w-80 bg-white rounded-xl shadow-sm p-6 space-y-6 border">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-semibold text-lg">Filters</h2>
        <button className="text-sm text-blue-600 hover:underline">
          Clear all
        </button>
      </div>

      {/* Preferences */}
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" className="accent-blue-600" />
        As per my preferences
      </label>

      {/* Profile */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Profile</label>
        <input
          type="text"
          placeholder="e.g. Marketing"
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Location */}
      <div className="space-y-2">
        <label className="text-sm font-medium">Location</label>
        <input
          type="text"
          placeholder="e.g. Delhi"
          className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Checkboxes */}
      <div className="space-y-2 text-sm">
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Internships in my city
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Work from home
        </label>
        <label className="flex items-center gap-2">
          <input type="checkbox" />
          Part-time
        </label>
      </div>

      {/* Stipend */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">
          Desired minimum monthly stipend (₹)
        </h3>
        <input type="range" min={0} max={10000} className="w-full" />
        <div className="flex justify-between text-xs text-gray-500">
          <span>0</span>
          <span>2K</span>
          <span>4K</span>
          <span>6K</span>
          <span>8K</span>
          <span>10K</span>
        </div>
      </div>

      <button className="text-blue-600 text-sm hover:underline">
        View more filters
      </button>
    </aside>
  );
}