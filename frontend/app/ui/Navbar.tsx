'use client'

import { useState } from "react"
import { signIn, signOut, useSession } from "next-auth/react"
import Link from "next/link"

export function AuthButton() {
  const { data: session } = useSession()

  if (session) {
    return <button onClick={() => signOut()}>Logout</button>
  }

  return <button onClick={() => signIn("google")}>Login</button>
}

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full bg-white shadow-sm border-b">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">

        {/* Logo */}
        <Link href="/" className="text-lg font-bold tracking-tight sm:text-xl">
          Internshala
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/internships" className="text-gray-700 hover:text-black">
            Internships
          </Link>

          <Link href="#" className="text-gray-700 hover:text-black">
            Courses
          </Link>

          <Link href="/jobs" className="text-gray-700 hover:text-black">
            Jobs
          </Link>

          <AuthButton />
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="flex flex-col gap-4 px-4 py-4 sm:px-6">

            <Link href="/internships" onClick={() => setOpen(false)}>Internships</Link>

            <Link href="#" onClick={() => setOpen(false)}>Courses</Link>

            <Link href="/jobs" onClick={() => setOpen(false)}>Jobs</Link>

            <AuthButton />

          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar