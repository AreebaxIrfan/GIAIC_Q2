import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='relative w-full flex flex-row bg-black justify-between items-center shadow-md pl-6 pr-6'>
      <div className='relative mb-4 sm:mb-0'>
        <img src="semi.png" alt="" width={170} height={170} className='object-contain' />
      </div>
      <div className='absolute top-5 sm:top-0 md:top-5 left-3 pl-4'>
        <p className='text-2xl font-semibold text-gray-100 hidden pl-2 md:block'>Areeba Irfan</p>
        <p className='text-3xl font-semibold pl-5 text-gray-100 block sm:hidden '>AI</p>
      </div>
      <div className='flex items-center justify-center space-x-4 sm:space-x-8'>
        <Link href={"/"} className='block text-white hover:text-gray-300 hover:bg-stone-800 transition-all duration-200 ease-in-out px-3 py-2 rounded-md sm:text-base'>
          Home
        </Link>
        <Link href={"/About"} className='block text-white hover:text-gray-300 hover:bg-stone-800 transition-all duration-200 ease-in-out px-3 py-2 rounded-md text-sm sm:text-base'>
          About
        </Link>
        <Link href={"/Portfolio"} className='block text-white hover:text-gray-300 hover:bg-stone-800 transition-all duration-200 ease-in-out px-3 py-2 rounded-md text-xl sm:text-base'>
          Portfolio
        </Link>
        <Link href={"/Skills"} className='block text-white hover:text-gray-300 hover:bg-stone-800 transition-all duration-200 ease-in-out px-3 py-2 rounded-md text-sm sm:text-base'>
          Skills
        </Link>
        <Link href={"/Contact"} className='block text-white hover:text-gray-300 hover:bg-stone-800 transition-all duration-200 ease-in-out px-3 py-2 rounded-md text-sm sm:text-base'>
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
