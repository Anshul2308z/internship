'use client'

import { useSession } from "next-auth/react"
import { AuthButton } from "./Navbar";
import Link from "next/link";

const Welcome = () => {
  const { data: session } = useSession();

  if ( session ){
    let username = "User" ; 
    if( session.user?.name){
     username = session.user?.name?.split(" ")[0]?.charAt(0).toUpperCase() + session.user?.name?.split(" ")[0]?.slice(1);
    }
      return (
      <section className="bg-gray-100 py-8 sm:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6">
        <h1 className="mb-3 text-3xl font-bold sm:mb-4 sm:text-4xl">Welcome back, {
          username
        }</h1>
        <p className="mb-6 text-base text-gray-700 sm:mb-8 sm:text-lg">
          KEEP <b>LEARNING</b>, KEEP <b> GROWING</b>. Explore new internships and career opportunities.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
        <Link
          href="/internships" 
          className="rounded-lg bg-blue-600 px-5 py-3 text-white transition-colors hover:bg-blue-700 sm:px-6"
        >
          Internships for you
        </Link>
          <Link
          href="/dashboard" 
          className="rounded-lg bg-black px-5 py-3 text-white transition-colors hover:bg-blue-700 sm:px-6"
        >
          Dashboard
        </Link>
        </div>
      </div>
    </section>

  )
  }
  
    return(<section className="bg-gray-100 py-8 sm:py-12">
      <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6">
        <h1 className="mb-3 text-3xl font-bold sm:mb-4 sm:text-4xl">Welcome to Internshala</h1>
        <p className="mb-6 text-base text-gray-700 sm:mb-8 sm:text-lg">
          Your gateway to exciting internships and career opportunities.
        </p>
        <span className="inline-flex rounded-lg bg-blue-600 px-5 py-3 text-white transition-colors hover:bg-blue-700 sm:px-6">
        <AuthButton />
        </span>
      </div>
    </section>)

}

export default Welcome