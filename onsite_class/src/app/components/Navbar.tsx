import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-purple-950 p-4  '>
        <h1 className='text-white font-bold  text-3xl '>Areeba Irfan</h1> 
        <div className='flex justify-between items-center text-gray-200'>
            <Link className='p-2 hover:bg-purple-500 space-x-3' href={"/"} >Home</Link>
            <Link className='p-2 hover:bg-purple-500 space-x-3' href={"/About"} >About</Link>
            
        </div>
    </div>
  )
}

export default Navbar