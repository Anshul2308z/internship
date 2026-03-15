type Banner = {
  id: number
  title: string
  description: string
  button: string
  bg: string
}

export function BannerCard({ banner }: { banner: Banner }) {
  return (
    <div
      className={`flex-[0_0_33%] h-[220px] rounded-xl p-6 flex flex-col justify-between shadow-md ${banner.bg}`}
    >
      <div>
        <h3 className="text-xl font-bold">{banner.title}</h3>

        <p className="text-sm mt-2 opacity-90 max-w-[260px]">
          {banner.description}
        </p>
      </div>

      <button className="bg-white text-black px-4 py-2 rounded-md w-fit font-medium">
        {banner.button}
      </button>
    </div>
  )
}