import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
    return (
        <div className="min-h-screen flex flex-col items-center relative overflow-hidden p-5 ">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          {/* Text Section */}
          <div className="bg-white m-4 p-4 rounded-lg shadow-lg flex flex-col lg:w-1/2">
            <div className="flex flex-col text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-4">Top 5 Books</h1>
              <h2 className="text-2xl lg:text-4xl text-blue-600 font-semibold">For the Readers</h2>
            </div>
          </div>
      
          {/* Desktop Image */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <Image
              src="/hero.jpg"
              alt="Hero Image"
              layout="responsive"
              objectFit="cover"
              width={500}
              height={300}
              className="rounded-lg shadow-lg hover:shadow-blue-500/90 transition-shadow duration-300"
            />
          </div>
        </div>
      </div>
    )
}

export default HeroSection