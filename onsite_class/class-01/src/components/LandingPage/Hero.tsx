import React from 'react'

const Hero = () => {
  return (
    <div className="bg-black text-white p-5 min-h-screen">
      <div className="text-center flex flex-col justify-center ">
        <h1 className="bg-gray-700 text-white text-xl rounded-r-full rounded-l-full">POWERED BY PANAVERSITY</h1>
        <p className='bg-gradient-to-r from-pink-500 to-purple-500 to-blue-500 to-green-500 bg-clip-text text-4xl p-4 text-transparent'>Enterprise Ai Agents give the colors for the Future</p>
        <input type="text" placeholder="Ask me anything!" className="w-1/2 p-2.5 m-2.5 bg-black bg-opacity-50 text-white" />
        <p>Hello ! How can I help you like things running dynamically?</p>
        <div className="flex justify-center gap-5">
          <button className="bg-pink-500 text-white px-6 py-3 rounded-full">Deploy Your Ai Agents</button>
          <button className="bg-purple-500 text-pink-500 px-6 py-3 rounded-full">Watch Demo</button>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-full">Learn More</button>
          <button className="bg-green-500 text-white px-6 py-3 rounded-full">Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default Hero