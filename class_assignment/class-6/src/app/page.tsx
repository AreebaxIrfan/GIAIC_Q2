"use client"
import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Skills from "./Skills/page";
import Protfolio from "./Portfolio/page";
import About from "./About/page";
import Contact from "./Contact/page";
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Apply smooth scrolling to the entire page
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Optional: Reset scroll behavior on component unmount
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
   <>

   <div className="smooth-scroll">
   <HeroSection/>
   <Skills/>
   <Protfolio/>
   <About/>
   <Contact/>
   </div>
   
   </>
  );
}
