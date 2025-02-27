import React from 'react'
import Image from 'next/image';
const About = () => {
    return (
        <div>
            <section className='bg-custom-dark-blue min-h-screen flex justify-center relative  items-center overflow-hidden pt-9'>

                <div className='lg:block hidden'>
                    <div className='flex flex-row justify-between items-center  m-10 '>
                        <div className='bg-white w-full lg:w-2/3 shadow-lg hover:shadow-blue-500/70 '>
                            <Image
                                src="/picture-1.png"
                                alt="Hero Image"
                                layout="responsive"
                                objectFit="cover"
                                width={500}
                                height={600}
                                className="w-full h-auto"
                            />

                        </div>
                        <div className='lg:w-2/3 flex flex-col justify-center items-center p-10 mb-9'>
                            <h1 className='text-5xl text-white font-bold'>About Us</h1>
                            <p className='text-white p-5'>
                                Welcome to our blog, where technology meets mindfulness! We are a team of tech enthusiasts exploring how digital innovation can enhance personal well-being. Our mission is to provide insightful content that empowers you to navigate the tech world mindfully.
                            </p>
                            <p className='text-white p-5'>From tips on balancing screen time to analyses of the latest trends, we aim to inspire a healthier relationship with technology. Join us as we share experiences and resources to help you live a more intentional, fulfilling life in the digital age. Your journey towards mindful technology use starts here!</p>
                            <p className='text-white p-5'>
                                In a world where technology often feels overwhelming, we believe in harnessing its power for good. Our blog goes beyond the surface of tech trends, diving into the practical ways you can integrate innovation into your life without losing sight of balance and well-being. Whether you're a seasoned tech enthusiast or just beginning your digital journey, we're here to guide you through mindful practices that foster both productivity and peace of mind. Let's embrace technology with intention and make it a tool for living a more conscious and fulfilling life.
                            </p>
                        </div>
                    </div>

                </div>


                <div className='lg:hidden'>
                    <div className="bg-custom-dark-blue flex flex-col p-11 mt-14 lg:hidden justify-center items-center shadow-lg hover:shadow-blue-500/60">
                        <h1 className='text-5xl text-white font-bold'>About Us</h1>
                        <p className='text-white p-5'>
                            Welcome to our blog, where technology meets mindfulness! We are a team of tech enthusiasts exploring how digital innovation can enhance personal well-being. Our mission is to provide insightful content that empowers you to navigate the tech world mindfully.
                        </p>
                        <p className='text-white p-5'>From tips on balancing screen time to analyses of the latest trends, we aim to inspire a healthier relationship with technology. Join us as we share experiences and resources to help you live a more intentional, fulfilling life in the digital age. Your journey towards mindful technology use starts here!</p>
                        <p className='text-white p-5'>
                            In a world where technology often feels overwhelming, we believe in harnessing its power for good. Our blog goes beyond the surface of tech trends, diving into the practical ways you can integrate innovation into your life without losing sight of balance and well-being. Whether you're a seasoned tech enthusiast or just beginning your digital journey, we're here to guide you through mindful practices that foster both productivity and peace of mind. Let's embrace technology with intention and make it a tool for living a more conscious and fulfilling life.
                        </p>
                    </div>
                </div>


            </section>

        </div>
    )
}

export default About