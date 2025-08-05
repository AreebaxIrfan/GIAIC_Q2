import Image from "next/image";

export default function Home() {
   return (
      <>
         <div >
            <div className="h-screen flex items-center justify-center relative bg-black">
               <div className="flex flex-col items-center justify-center border-4 border-yellow-500 p-8 hover:bg-rose-500 transition duration-300">

                  <h1 className="text-4xl font-bold text-rose-700 hover:text-white transition suration-300">Hello World!</h1>
               </div>

              
            </div>
         </div>
      </>
   );
}
