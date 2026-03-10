import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { fetchUserInfo } from "../middlewares/fetchUserInfo"

export default async function Dashboard() {
  const session = await getServerSession()

  if (!session) {
    redirect("/")
  }

  const user = await fetchUserInfo(session.user)

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome, {user.user.name}!
        </h1>

        <p className="text-lg text-gray-600">
          This is your dashboard.
        </p>
      </div>
    </div>
  )
}