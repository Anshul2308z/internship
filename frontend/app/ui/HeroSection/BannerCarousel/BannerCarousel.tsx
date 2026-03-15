"use client";

import useEmblaCarousel from "embla-carousel-react";
import { BannerControls } from "./BannerControls"

import { banners } from "./bannerData"
import { BannerCard } from "./BannerCard"

export function BannerCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
  })
  return (
    <section className="max-w-6xl mx-auto mt-12">
      
      <h2 className="text-2xl font-bold text-center mb-8">
        Trending on Internshala 🔥
      </h2>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {banners.map((banner) => (
            <BannerCard key={banner.id} banner={banner} />
          ))}
        </div>
      </div>
      <BannerControls emblaApi={emblaApi} />

    </section>
  )
}