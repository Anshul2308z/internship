export async function fetchListings({ type }: { type?: "intern" | "job" }) {
  const res = await fetch(`http://localhost:5000/api/fetch/all?type=${type}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })

  const data = await res.json();
  return data.listings;
}