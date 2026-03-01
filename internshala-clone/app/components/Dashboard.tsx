// this is a protected page, only accessible to authenticated users


import { getServerSession } from "next-auth"

export default async function Dashboard() {
  const session = await getServerSession()

  if (!session) return <div>Not authorized</div>

  return <div>Secret content</div>
}