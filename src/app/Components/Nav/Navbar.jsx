import React from 'react'

export default function Navbar() {
  return (
    <div className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-white font-bold text-2xl">
          <span>My App</span>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li className="text-white text-lg font-medium hover:text-yellow-400 transition duration-300 ease-in-out">
            Home
          </li>
          <li className="text-white text-lg font-medium hover:text-yellow-400 transition duration-300 ease-in-out">
            About
          </li>
          <li className="text-white text-lg font-medium hover:text-yellow-400 transition duration-300 ease-in-out">
            Contact
          </li>
        </ul>

        {/* Add theme toggle button (Optional) */}
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition duration-300">
          Toggle Theme
        </button>
      </div>
    </div>
  )
}
