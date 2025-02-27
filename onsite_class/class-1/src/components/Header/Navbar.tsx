import React from 'react'

const Navbar = () => {
  return (
    <div>
    <nav className="bg-black text-white py-5 px-20 flex justify-between items-center">
      <div>
        <a href="/" className="text-lg font-bold">Agentic World</a>
      </div>
      <div className="flex space-x-4">
        <a href="/home" className="text-lg">Home</a>
        <a href="/technology" className="text-lg">Technology</a>
        <a href="/features" className="text-lg">Features</a>
        <a href="/agents" className="text-lg">Agents</a>
        <a href="/pricing" className="text-lg">Pricing</a>
        <a href="/contact" className="text-lg">Contact</a>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Launch Contact
      </button>
    </nav>
    </div>
  )
}

export default Navbar