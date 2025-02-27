import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function Home() {
  return (
   <>
   <Header/>
   <h1 className="bg-emerald-600 text-white m-4 font-extrabold text-4xl p-8 flex items-center justify-center">Class-2</h1>
   
   <About/>
   <Footer/>
   </>
  );
}
