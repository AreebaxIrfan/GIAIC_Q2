import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
    <div>
     
      <div className='min-h-screen bg-black text-white flex flex-col items-center p-16 '>
        <h1 className='text-6xl font-bold mb-6  p-10 text-center text-pink-600'>&lt;About me/&gt;</h1>
        <div className='max-w-2xl text-center  mb-8  p-4 '>
          <p  className='text-xl p-4 mb-6'>
            Hello! I'm <span className='text-pink-600 font-bold'>Areeba Irfan</span>, a passionate developer with a keen interest in creating innovative solutions.
            With a background in computer science and a love for problem-solving, I strive to build applications
            that make a difference in people's lives.
          </p>
          <p className='text-xl p-4 mb-2 '>
            When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
            or enjoying a good book. I believe in continuous learning and am always excited to take on new challenges.
          </p>
        </div>

        <div className='flex justify-center space-x-8'>
          <Link href="/Protfolio" className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-4 px-8 rounded transition duration-300 text-sm'>View Protfolio</Link>
          <Link href="/Contact" className='bg-pink-600 hover:bg-pink-800 text-white font-bold py-4 px-8 rounded transition duration-300 text-sm'>Contact Me</Link>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default page
