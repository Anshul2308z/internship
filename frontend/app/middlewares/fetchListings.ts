import dotenv from "dotenv";

dotenv.config();


export async function fetchListings({ type }: { type?: "intern" | "job" }) {
  const res = await fetch(`${process.env.SERVER_URL}/api/fetch/all?type=${type}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })

  const data = await res.json();
  return data.listings;
}