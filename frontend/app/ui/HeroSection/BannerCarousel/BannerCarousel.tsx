"use client";

import useEmblaCarousel from "embla-carousel-react";
import { BannerControls } from "./BannerControls";

import { banners } from "./bannerData";
import { BannerCard } from "./BannerCard";

export function BannerCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    skipSnaps: false,
    dragFree: true,
  });

  return (
    <section className="mx-auto mt-2 w-full max-w-6xl px-4 pb-2 sm:mt-4 sm:px-6 lg:px-8">
      
      <h2 className="mb-5 text-center text-xl font-bold sm:mb-8 sm:text-2xl">
        Trending on Internshala 🔥
      </h2>

      {/* ✅ FIX 1: padding + overflow */}
      <div className="overflow-hidden" ref={emblaRef}>
        <div>
        
        {/* ✅ FIX 2: responsive gap + touch behavior */}
        <div className="flex touch-pan-y gap-3 sm:gap-4 md:gap-6">
          {banners.map((banner) => (
            <BannerCard key={banner.id} banner={banner} />
          ))}
        </div>
        </div>
      </div>

      {/* ✅ FIX 3: hide arrows on mobile */}
      <div className="hidden md:block">
        <BannerControls emblaApi={emblaApi} />
      </div>

    </section>
  );
}