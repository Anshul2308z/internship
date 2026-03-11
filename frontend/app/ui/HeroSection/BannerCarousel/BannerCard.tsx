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
      className={`min-w-[360px] h-[200px] rounded-xl p-6 flex flex-col justify-between ${banner.bg}`}
    >
      <div>
        <h3 className="text-xl font-semibold">{banner.title}</h3>
        <p className="text-sm mt-2 opacity-80">{banner.description}</p>
      </div>

      <button className="bg-white text-black px-4 py-1 rounded w-fit">
        {banner.button}
      </button>
    </div>
  )
}