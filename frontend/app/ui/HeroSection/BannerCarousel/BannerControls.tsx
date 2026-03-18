"use client"

import type { EmblaCarouselType } from "embla-carousel";

type Props = {
  emblaApi: EmblaCarouselType | undefined
}

export function BannerControls({ emblaApi }: Props) {
  if (!emblaApi) return null

  return (
    <div className="hidden md:flex justify-center gap-4 mt-6">
      <button
        onClick={() => {
          emblaApi.scrollPrev();
          console.log("scrollPrev called");
        }}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        ←
      </button>

      <button
        onClick={() => emblaApi.scrollNext()}
        className="px-4 py-2 bg-gray-200 rounded"
      >
        →
      </button>
    </div>
  )
}