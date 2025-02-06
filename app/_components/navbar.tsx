import Link from "next/link"
import React from "react"

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="text-2xl font-bold text-pink-600 margin-nav">
        RANAH
      </div>

      <div className="space-x-8">
        <Link href="/" className="text-gray-600 hover:text-gray-800">
            Home
        </Link>
        <Link href="/services" className="text-gray-600 hover:text-gray-800">
          Services
        </Link>
        <Link href="/about" className="text-gray-600 hover:text-gray-800">
          About Us
        </Link>
      </div>

      <button className="border border-pink-600 text-pink-600 px-4 py-2 rounded-full hover:bg-pink-600 hover:text-white margin-nav2">
        Log In
      </button>
    </nav>
  );
}
