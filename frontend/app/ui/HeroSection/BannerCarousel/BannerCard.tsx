type Banner = {
  id: number
  title: string
  description: string
  button: string
  bg: string
}

export function BannerCard({ banner }: { banner: Banner }) {
  return (
    <div className="flex-[0_0_100%] sm:flex-[0_0_80%] md:flex-[0_0_50%] lg:flex-[0_0_33%]">
      
      <div
        className={`flex h-50 flex-col justify-between rounded-xl p-4 shadow-md sm:h-55 sm:p-6 ${banner.bg}`}
      >
        <div>
          <h3 className="text-lg font-bold sm:text-xl">{banner.title}</h3>

          <p className="mt-2 max-w-65 text-sm opacity-90">
            {banner.description}
          </p>
        </div>

        <button className="bg-white text-black px-4 py-2 rounded-md w-fit font-medium">
          {banner.button}
        </button>
      </div>

    </div>
  )
}