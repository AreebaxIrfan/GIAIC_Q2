import React from 'react';
import Image from 'next/image';

const Category = () => {
    return (
        <>

            <div className='lg:block hidden'>
                <div className='bg-custom-dark-blue p-4 pt-16'>
                    <h1 className='text-5xl items-center text-white justify-center flex flex-col font-bold font-serif'>Articles and Updates</h1>
                </div>
                <section className='bg-custom-dark-blue min-h-screen flex flex-col justify-center relative  items-center overflow-hidden pt-8 '>
                    <div className='flex flex-col mb-3 '>

                        <div className='container flex flex-col lg:flex-row justify-center mb-10 shadow-lg hover:shadow-blue-500/60 '>
                            <div className='flex lg:1/2 flex-col
            justify-between items-center z-10 bg-white text-custom-dark-blue relative'>
                                <h1 className='text-3xl sm:text-2xl lg:text-3xl font-bold p-2 '>Innovative Trends in Robotics</h1>
                                     <p className=' text-lg sm:text-xl lg:text-xl font-serif p-3'>Robotics is rapidly advancing, transforming industries and daily life. Explore the latest innovations, from autonomous drones to smart manufacturing, shaping the future of technology.</p>
                                <a href="/blog1" className='bg-custom-dark-blue px-4 py-2 justify-start p-2 m-2 rounded text-white hover:bg-blue-900'>Read more</a>
                            </div>
                            <div className='w-full lg:w-1/2 flex justify-center'>
                                <Image
                                    src="/blogg-8.webp"
                                    alt='blog website'
                                    width={400}
                                    height={200}
                                />
                            </div>
                        </div>

                        <div className='container flex flex-col lg:flex-row justify-center mb-10 shadow-lg hover:shadow-blue-500/60'>
                            <div className='w-full lg:w-1/2 flex justify-center'>
                                <Image
                                    src="/blog-9.webp"
                                    alt='blog website'
                                    width={400}
                                    height={200}
                                />
                            </div>
                            <div className='flex lg:1/2 flex-col
            justify-between items-center z-10 bg-white text-custom-dark-blue relative'>
                                <h1 className='text-3xl sm:text-2xl lg:text-3xl font-bold p-2 '>Intelligent AI-Powered Personal Assistants</h1>
                                <p className=' text-lg sm:text-xl lg:text-xl font-serif p-4'>AI-powered personal assistants are changing how we manage tasks. Discover how these smart tools enhance productivity and simplify our daily routines.</p>
                                <a href="/blog2" className='bg-custom-dark-blue px-4 py-2 justify-start p-2 m-2 rounded text-white hover:bg-blue-900'>Read more</a>
                            </div>
                        </div>

                        <div className='container flex flex-col lg:flex-row justify-center mb-10 shadow-lg hover:shadow-blue-500/60'>
                            <div className='flex lg:1/2 flex-col
            justify-between items-center z-10 bg-white text-custom-dark-blue relative'>
                                <h1 className='text-2xl sm:text-2xl lg:text-3xl font-bold p-2 '>Revolutionizing Communication: Large Language Models (LLMs)</h1>
                                <p className=' text-lg sm:text-xl lg:text-xl font-serif p-4'>Large Language Models (LLMs) are reshaping communication by enabling seamless interactions with technology. Learn how these AI systems enhance writing and coding.</p>
                                <a href="/blog3" className='bg-custom-dark-blue px-4 py-2 justify-start p-2 m-2 rounded text-white hover:bg-blue-900'>Read more</a>

                            </div>
                            <div className='w-full lg:w-1/2 flex justify-center'>
                                <Image
                                    src="/blog-11.jpeg"
                                    alt='blog website'
                                    width={400}
                                    height={200}
                                />
                            </div>
                        </div>

                        <div className='container flex flex-col lg:flex-row justify-center mb-10 shadow-lg hover:shadow-blue-500/60'>
                            <div className='w-full lg:w-1/2 flex justify-center'>
                                <Image
                                    src="/blog-6.jpeg"
                                    alt='blog website'
                                    width={400}
                                    height={200}
                                />
                            </div>
                            <div className='flex lg:1/2 flex-col
            justify-between items-center z-10 bg-white text-custom-dark-blue relative'>
                                <h1 className='text-2xl sm:text-2xl lg:text-3xl font-bold p-2 '>Blockchain Meets AI: A New Era of Innovation</h1>
                                <p className=' text-lg sm:text-xl lg:text-xl font-serif p-4'>The fusion of blockchain and AI is revolutionizing industries. Explore how this powerful combination improves efficiency and transparency in business operations.</p>
                                <a href="/blog4" className='bg-custom-dark-blue px-4 py-2 justify-start p-2 m-2 rounded text-white hover:bg-blue-900'>Read more</a>
                            </div>
                        </div>

                        <div className='container flex flex-col lg:flex-row justify-center mb-10 shadow-lg hover:shadow-blue-500/60'>
                            <div className='flex lg:1/2 flex-col
            justify-between items-center z-10 bg-white text-custom-dark-blue relative'>
                                <h1 className='text-2xl sm:text-2xl lg:text-3xl font-bold p-2 '>The Evolving Landscape of Creativity</h1>
                                <p className=' text-lg sm:text-xl lg:text-xl font-serif p-4'>Technology is transforming creativity, from AI-generated art to digital storytelling. Explore how these innovations are reshaping artistic expression and inspiring new forms of creativity.</p>
                                <a href="/blog5" className='bg-custom-dark-blue px-4 py-2 justify-start p-2 m-2 rounded text-white hover:bg-blue-900'>Read more</a>
                            </div>
                            <div className='w-full lg:w-1/2 flex justify-center'>
                                <Image
                                    src="/blog-12.jpg"
                                    alt='blog website'
                                    width={400}
                                    height={200}
                                />
                            </div>
                        </div>

                        <div className='container flex flex-col lg:flex-row justify-center mb-10 shadow-lg hover:shadow-blue-500/60'>
                            <div className='w-full lg:w-1/2 flex justify-center'>
                                <Image
                                    src="/blog-10.jpg"
                                    alt='blog website'
                                    width={400}
                                    height={200}
                                />
                            </div>
                            <div className='flex lg:1/2 flex-col
            justify-between items-center z-10 bg-white text-custom-dark-blue relative'>
                                <h1 className='text-2xl sm:text-2xl lg:text-3xl font-bold p-2 '>Responsible AI: Ethics in Business Innovation</h1>
                                <p className=' text-lg sm:text-xl lg:text-xl font-serif p-4'>As AI becomes integral to business, ethical considerations are crucial. Discover how responsible AI practices promote fairness and align innovation with societal values.</p>
                                <a href="/blog6" className='bg-custom-dark-blue px-4 py-2 justify-start p-2 m-2 rounded text-white hover:bg-blue-900'>Read more</a>
                            </div>
                        </div>

                    </div>
                </section>
            </div>



            <section className='block lg:hidden bg-custom-dark-blue'>
                <div className='container flex flex-col bg-custom-dark-blue lg:flex-row justify-center  '>
                    <div className='flex lg:1/2 flex-col
            justify-between items-center z-10  text-white relative'>
                        <h1 className='text-4xl font-bold p-3 mt-5'>Blogs</h1>
                        <div className='m-2 p-3 shadow-lg hover:shadow-blue-500/60'>
                            <div className='flex flex-col justify-center items-center '>
                                <h1 className='text-3xl font-bold p-4 '>Innovative Trends in Robotics</h1>
                                <div className='w-full lg:w-1/2 flex justify-center'>
                                    <Image
                                        src="/blogg-8.webp"
                                        alt='blog website'
                                        width={400}
                                        height={200}
                                    />
                                </div>
                            </div >
                            <p className='bg-white text-black text-lg sm:text-xl lg:text-xl font-serif p-3 ml-4 mr-4'>Robotics is rapidly advancing, transforming industries and daily life. Explore the latest innovations, from autonomous drones to smart manufacturing, shaping the future of technology.
                            <a href="/blog6" className="text-custom-dark-blue  justify-start p-2 rounded hover:bg-blue-900" >Read more</a>
                            </p>
                        </div>

                        <div className='m-2 p-3 shadow-lg hover:shadow-blue-500/60'>
                            <div className='flex flex-col justify-center items-center '>
                                <h1 className='text-3xl font-bold p-4 '>Intelligent AI-Powered Personal Assistants</h1>
                                <div className='w-full lg:w-1/2 flex justify-center'>
                                    <Image
                                        src="/blog-9.webp"
                                        alt='blog website'
                                        width={400}
                                        height={200}
                                    />
                                </div>
                            </div >
                            <p className='bg-white text-black text-lg sm:text-xl lg:text-xl font-serif p-3 ml-4 mr-4'>AI-powered personal assistants are changing how we manage tasks. Discover how these smart tools enhance productivity and simplify our daily routines. <a href="/blog6" className="text-custom-dark-blue  justify-start p-2 rounded hover:bg-blue-900" >Read more</a></p>
                        </div>

                        <div className='m-2 p-3 shadow-lg hover:shadow-blue-500/60'>
                            <div className='flex flex-col justify-center items-center '>
                                <h1 className='text-3xl font-bold p-4 '>Revolutionizing Communication: Large Language Models (LLMs)</h1>
                                <div className='w-full lg:w-1/2 flex justify-center'>
                                    <Image
                                        src="/blog-11.jpeg"
                                        alt='blog website'
                                        width={400}
                                        height={200}
                                    />
                                </div>
                            </div >
                            <p className='bg-white text-black text-lg sm:text-xl lg:text-xl font-serif p-3 ml-4 mr-4'>Large Language Models (LLMs) are reshaping communication by enabling seamless interactions with technology. Learn how these AI systems enhance writing and coding.
                            <a href="/blog6" className="text-custom-dark-blue  justify-start p-2 rounded " >Read more</a>
                            </p>
                        </div>

                        <div className='m-2 p-3 shadow-lg hover:shadow-blue-500/60'>
                            <div className='flex flex-col justify-center items-center '>
                                <h1 className='text-3xl font-bold p-4 '>Blockchain Meets AI: A New Era of Innovation</h1>
                                <div className='w-full lg:w-1/2 flex justify-center'>
                                    <Image
                                        src="/blog-6.jpeg"
                                        alt='blog website'
                                        width={400}
                                        height={200}
                                    />
                                </div>
                            </div >
                            <p className='bg-white text-black text-lg sm:text-xl lg:text-xl font-serif p-3 ml-4 mr-4'>The fusion of blockchain and AI is revolutionizing industries. Explore how this powerful combination improves efficiency and transparency in business operations.
                            <a href="/blog6" className="text-custom-dark-blue  justify-start p-2 rounded hover:bg-blue-900" >Read more</a>
                            </p>
                        </div>

                       
                    </div>





                </div>
            </section>
        </>
    );
};

export default Category;
