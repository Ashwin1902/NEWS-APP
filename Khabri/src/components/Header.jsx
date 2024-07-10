import React from 'react'

function Header() {
  return (
    <header className="bg-gray-800 text-white">
    <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
      <p className="text-2xl font-bold">KHABRI</p>
      <nav className="flex space-x-4">
        <p className="hover:text-gray-400">Home</p>
      </nav>
    </div>
  </header>
  )
}

export default Header