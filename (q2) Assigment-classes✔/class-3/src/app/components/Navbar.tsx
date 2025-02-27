import Link from 'next/link'
import React from 'react'
const Navbar = () => {
  return (
    <div className=' flex justify-between items-center p-2 text-white font-bold text-2xl bg-purple-800'>
        <Link className='p-4' href="/">Home</Link>
        <Link className='p-4' href="/about">About</Link>
        <Link className='p-4' href="/contact">Contact</Link>
    </div>
  )
}

export default Navbar