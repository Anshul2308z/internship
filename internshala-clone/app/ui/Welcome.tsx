'use client'

import { signIn, signOut, useSession } from "next-auth/react"
import { AuthButton } from "./Navbar";

const welcome = () => {
  const { data: session } = useSession();

  if ( session ){
    let username = "User" ; 
    if( session.user?.name){
     username = session.user?.name?.split(" ")[0]?.charAt(0).toUpperCase() + session.user?.name?.split(" ")[0]?.slice(1);
    }
      return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome back, {
          username
        }</h1>
        <p className="text-lg text-gray-700 mb-8">
          KEEP <b>LEARNING</b>, KEEP <b> GROWING</b>. Explore new internships and career opportunities.
        </p>
        <a
          href="#"
          className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          Internships for you
        </a>
      </div>
    </section>
  )
  }
  
    return(<section className="bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Internshala</h1>
        <p className="text-lg text-gray-700 mb-8">
          Your gateway to exciting internships and career opportunities.
        </p>
        <span className="px-6 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors">
        <AuthButton />
        </span>
      </div>
    </section>)

}

export default welcome