'use client';

import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link";

export function AuthButton() {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        <button onClick={() => signOut()}>Logout</button>
      </>
    )
  }

  return <button onClick={() => signIn("google")}>Login</button>
}

const Navbar = () => {
  return (
    <nav className="w-full bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-xl font-bold tracking-tight">
          <Link href="/">
          Internshala
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8">

            <div className="hidden md:flex items-center gap-6">
                                
          <Link href="/internships" className="text-gray-700 hover:text-black transition-colors">
            Internships
          </Link>
          <Link href="#" className="text-gray-700 hover:text-black transition-colors">
            Courses
          </Link>
          <Link href="/jobs" className="text-gray-700 hover:text-black transition-colors">
            Jobs
          </Link>
        
        </div>

            

          {/* Contrast Button Link */}
          <Link
            href="#"
            className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition-colors"
          >
            <AuthButton />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;