import dotenv from "dotenv";

dotenv.config();


export async function fetchUserInfo(user: {
  name?: string | null
  email?: string | null
  image?: string | null
}) {
  if (!user?.email) {
    throw new Error("No user email found")
  }

  const res = await fetch(`${process.env.SERVER_URL}/api/auth/sync`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: user.name,
      email: user.email,
      image: user.image
    })
  })

  if (!res.ok) {
    throw new Error("Failed to sync user")
  }

  return res.json()
}