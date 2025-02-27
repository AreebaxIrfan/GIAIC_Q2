import React from 'react'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <div>
        <Navbar/>
        <h2 className='flex justify-center items-center font-bold text-4xl bg-black text-white h-screen'>This is an About page </h2>
    </div>
  )
}

export default page