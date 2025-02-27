import React from 'react'
import Image from 'next/image'

const Hersection = () => {
  return (
    <div className='min-h-screen max-w-6xl mx-auto flex flex-row items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500'>
    
      <div className="hero-section flex flex-col items-start justify-center">
        <h1 className="text-5xl font-bold text-white mb-4">Unlock Your Tech Insights</h1>
        <p className="text-2xl text-gray-200 mb-8">Stay ahead of the curve with the latest news, trends, and innovations in technology.</p>
        <a href="/fetchposts" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-110">
          Explore Now
        </a>
      </div>
      <Image src="/hero-1.png" alt="Hero Image" width={500} height={300} className="ml-8" />
    </div>
  )
}

export default Hersection;