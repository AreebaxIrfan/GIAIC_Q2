import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import Image from "next/image";
import Link from "next/link";
import React from 'react';

const HeroSection = () => {
    return (
        <div className='min-h-screen bg-black text-white flex flex-col md:flex-row items-center p-2 relative '>

            <div className='md:w-1/2 mx-auto md:ml-16 md:mr-10 text-center md:text-left mb-6 pb-40 md:mb-0 relative z-10'>

                <h1 className='text-4xl sm:text-5xl md:text-5xl font-bold mb-3'>Hello, I'm Areeba Irfan</h1>
                <h2 className='text-2xl sm:text-2xl md:text-3xl font-semibold mb-5 mt-5 text-pink-600'>Frontend Developer</h2>

                <p className='text-xl mb-5'>
                    Passionate about creating beautiful and functional web experiences. I love turning ideas into reality through code.
                </p>

                <div className='relative inline-block mx-auto mt-5'>
                    <div className='absolute -inset-1 bg-pink-600 rounded-full blur opacity-95 pointer-events-none'></div>
                    <Link href="/About" className='relative bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded transition duration-300'>
                        Learn More About Me
                    </Link>
                    <div className='absolute top-14 left-1/2 transform -translate-x-1/2 flex space-x-4 mt-6'>
                        <SocialLink href="www.linkedin.com/in/areebairfan" icon={<FaLinkedin />} />
                        <SocialLink href="https://github.com/Areeba-irfan-Github-account" icon={<FaGithub />} />
                        <SocialLink href="https://www.facebook.com/profile.php?id=61562497645022" icon={<FaFacebook />} />
                        <SocialLink href="https://www.instagram.com/areeba.__.irfan/" icon={<FaInstagram />} />

                    </div>

                </div>

            </div>

            <div className='md:w-1/2 relative flex justify-end lg:ml-16 mr-28 mb-44'>
                <div className=' relative overflow-hidden'>
                    <Image
                        src="/circle.png"
                        alt="backgrounf picture"
                        width={400}
                        height={300}
                        className=''
                    />
                    <Image
                        src="/profile.png"
                        alt="profile"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

            </div>



        </div>

    )
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
    <Link href={href} target="_blank" rel="noopener noreferrer">
        <div className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-500 hover:scale-110 transform transition-all duration-300 ease-in-out shadow-lg hover:shadow-pink-500/50">
            <span className="text-white hover:text-black transition-colors duration-300">
                {icon}
            </span>
        </div>
    </Link>
);

export default HeroSection;