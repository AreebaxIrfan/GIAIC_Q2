import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="bg-custom-dark-blue min-h-screen flex flex-col items-center relative overflow-hidden p-5">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">

        <div className="w-full text-white z-10 mb-8 lg:mb-0 order-1 lg:order-1  flex-col justify-center items-center text-center pr-14 lg:block hidden ">
          <h1 className="text-3xl sm:text-4xl lg:text-8xl font-bold mb-4">Mindful</h1>
          <p className="text-lg sm:text-xl lg:text-5xl font-serif mb-8">Tech use leads</p>
          <h1 className="text-3xl sm:text-4xl lg:text-8xl font-bold mb-4">To a</h1>
          <p className="text-lg sm:text-xl lg:text-5xl font-serif mb-8">Fulfilling life.</p>
          <a href="/blog" className="bg-white shadow-lg hover:shadow-blue-500/60 text-custom-dark-blue px-6 py-3 rounded-full font-semibold hover:bg-opacity-80 transition-opacity ">
            Start Reading
          </a>
        </div>

        <div className="bg-custom-dark-blue p-11 mt-14 ml-10 mr-9 px-6 pl-28 lg:hidden w-full bg-opacity-100 mx-auto aspect-square justify-center items-center">
        <h1 className="text-8xl font-bold mb-4">Mindful</h1>
          <p className="text-5xl font-serif mb-8">Tech use leads</p>
          <h1 className="text-8xl font-bold mb-4">To a</h1>
          <p className="text-5xl font-serif mb-8">Fulfilling life.</p>
          <a href="/blog" className="bg-white shadow-lg hover:shadow-blue-500/60  text-custom-dark-blue px-6 py-3 rounded-full font-semibold hover:bg-opacity-80 transition-opacity ">
            Start Reading
          </a>
        
      </div>
        <div className="w-full relative order-2 lg:block hidden mt-8">
          <Image
            src="/Blog-hero-1.jpg"
            alt="Hero Image"
            layout="responsive"
            objectFit="cover"
            width={900}
            height={800}
            className="shadow-lg hover:shadow-blue-500/60"
          />

        </div>


        <div className="w-full relative order-1 block lg:hidden">
          <Image
            src="/Blog-hero-1.jpg"
            alt="Hero Image"
            layout="responsive"
            objectFit="cover"
            width={300}
            height={150}
            className="w-auto h-auto shadow-lg hover:shadow-blue-500/60"
          />
        </div>
      </div>
      
      {/* <div className="absolute inset-0 bg-gradient-to-r from-custom-dark-blue via-custom-dark-blue to-transparent z-0  lg:block hidden"></div> */}

      {/* <div className="sm:block p-11 ml-9 mr-9 px-6 py-6 lg:hidden w-full h-full bg-black bg-opacity-100 mx-auto aspect-square">
        
      </div> */}
    </section>

  );
};

export default HeroSection;
