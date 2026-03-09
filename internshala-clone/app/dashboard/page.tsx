import { getServerSession } from "next-auth"

async function getData() {
  const user = await fetch("https://localhost:3000/api/user",{
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })

  
}


export default async function Dashboard() {
  const session = await getServerSession()

  if (!session) return <div>Not authorized</div>

  return <div>Secret content</div>
}