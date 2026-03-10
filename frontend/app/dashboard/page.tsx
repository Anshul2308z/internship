import { getServerSession } from "next-auth"

import { fetchUserInfo } from "../middlewares/fetchUserInfo";



export default async function Dashboard() {
  const session = await getServerSession()

  if (!session) return <div>Not authorized</div>

  const user = await fetchUserInfo();

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome, {user.name}!</h1>
        <p className="text-lg text-gray-600">This is your dashboard. Here you can view your profile, manage your listings, and explore new opportunities.</p>
      </div>
    </div>
  )

}