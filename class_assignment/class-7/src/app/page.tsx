import Image from "next/image";

import HeroSection from "./components/HeroSection";
import Category from "./components/Category";
import About from "./components/About";
import Contact from "./Contact/page";


export default function Home() {
  return (
    <>

      <HeroSection />
      <Category />
      <About />
      <Contact />



    </>
  );
}
