export async function fetchUserInfo(user: {
  name?: string | null
  email?: string | null
  image?: string | null
}) {
  const serverUrl = process.env.SERVER_URL

  if (!serverUrl) {
    throw new Error("SERVER_URL is not configured")
  }

  if (!user?.email) {
    throw new Error("No user email found")
  }

  const res = await fetch(`${serverUrl}/api/auth/sync`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    cache: "no-store",
    body: JSON.stringify({
      name: user.name,
      email: user.email,
      image: user.image
    })
  })

  if (!res.ok) {
    const text = await res.text()
    console.log("SYNC ERROR:", text)
    throw new Error("Failed to sync user")
  }

  return res.json()
}