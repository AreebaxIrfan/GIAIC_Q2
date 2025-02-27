import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {
    return (
        <>
            <Navbar />
            <div>
                <h1 className='font-bold flex justify-center m-4 md:text-5xl sm:text-2xl p-2 font-serif'>About me</h1>
                <p className='m-4 p-3 text-xl' >Im a passionate and dedicated software engineer with a strong foundation in web development, specializing in building scalable and high-performance applications. My expertise spans across JavaScript frameworks, with a particular focus on Next.js, TypeScript, and Tailwind CSS. I take pride in crafting seamless user experiences that merge aesthetic design with functional efficiency. Continuously seeking to enhance my skill set, I thrive in dynamic environments where innovation and problem-solving are key. With a meticulous attention to detail and a results-driven mindset, I am committed to delivering quality code and impactful solutions. I am also an enthusiastic learner, constantly exploring the latest trends and technologies to stay ahead in the ever-evolving tech landscape.In addition to my technical skills, I value collaboration and teamwork, understanding that the best solutions often come from diverse perspectives. I have experience working in cross-functional teams, where clear communication and adaptability are crucial to success. My ability to work efficiently in high-pressure environments allows me to meet deadlines without compromising the quality of my work.</p>
            </div>
            
            <Footer />
        </>
    )
}

export default page