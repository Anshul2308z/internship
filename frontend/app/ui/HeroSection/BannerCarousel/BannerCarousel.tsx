import { banners } from "./bannerData"
import { BannerCard } from "./BannerCard"

export function BannerCarousel() {
  return (
    <section className="max-w-6xl mx-auto mt-12">
      
      <h2 className="text-2xl font-bold text-center mb-8">
        Trending on Internshala 🔥
      </h2>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {banners.map((banner) => (
          <BannerCard key={banner.id} banner={banner} />
        ))}
      </div>

    </section>
  )
}