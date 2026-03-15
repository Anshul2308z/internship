export async function fetchListings({ type }: { type?: "intern" | "job" }) {
  const serverUrl = process.env.SERVER_URL

  if (!serverUrl) {
    throw new Error("SERVER_URL is not configured")
  }

  const res = await fetch(`${serverUrl}/api/fetch/all?type=${type}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    cache: "no-store"
  })

  if (!res.ok) {
    throw new Error("Failed to fetch listings")
  }

  const data = await res.json()
  return data.listings
}