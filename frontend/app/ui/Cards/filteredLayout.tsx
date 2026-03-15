'use client'

import { useState } from "react"
import { FilterSidebar } from "./FilterSidebar"

export default function FilterLayout() {
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 border rounded-lg bg-white shadow-sm"
        >
          Filters
        </button>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-80 sticky top-6 h-fit">
        <FilterSidebar />
      </aside>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50">

          <div
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />

          <div className="absolute left-0 top-0 h-full w-80 bg-white p-6 overflow-y-auto">
            <button
              onClick={() => setOpen(false)}
              className="mb-4 text-sm text-gray-600"
            >
              Close
            </button>

            <FilterSidebar />
          </div>

        </div>
      )}
    </>
  )
}