import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';
import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-black text white py-8 border-t border-gray-700 pl-5'>
            <div className='container mx-auto px-4'>
                <div className='flex flex-wrap justify-between items-center'>
                    <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                        <h3 className='text-3xl font-bold mb-2'>Areeba Irfan</h3>
                        <p className='text-gray-400'>Frontend Developer</p>

                    </div>
                    <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                        <h4 className='text-xl font-semibold mb-4'>Quick Links</h4>
                        <nav>
                            <ul className='space-y-4 '>
                                <li><Link href="/" className='hover:text-pink-500 transition duration-300'>Home</Link></li>
                                <li><Link href="/" className='hover:text-pink-500 transition duration-300'>About</Link></li>
                                <li><Link href="/" className='hover:text-pink-500 transition duration-300'>Project</Link></li>
                                <li><Link href="/" className='hover:text-pink-500 transition duration-300'>Skills</Link></li>
                                <li><Link href="/" className='hover:text-pink-500 transition duration-300'>Contact</Link></li>
                            </ul>
                        </nav>
                    </div>
                    <div className='w-full md:w-1/3'>
                        <h4 className='text-2xl  font-semibold mb-5 '>Connect</h4>
                        <div className='flex space-x-4'>
                        <SocialLink href="www.linkedin.com/in/areebairfan" icon={<FaLinkedin />} />
                <SocialLink href="https://github.com/Areeba-irfan-Github-account" icon={<FaGithub />} />
                <SocialLink href="https://www.facebook.com/profile.php?id=61562497645022" icon={<FaFacebook />} />
                <SocialLink href="https://www.instagram.com/areeba.__.irfan/" icon={<FaInstagram />} />

                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
                    <p> &copy; {new Date().getFullYear()}
                        Areeba Irfan .All rights reserved</p>
                </div>
            </div>

        </footer>
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

export default Footer