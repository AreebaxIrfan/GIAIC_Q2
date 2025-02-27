import Image from "next/image";

export default function Home() {
   const names = ["Thanks you ", "Sir Ameen Alam ", "Sir Asharib Ali", "Sir Ahmad Raza", "Sir Naeem"]
   return (
      <>
         <div >
            <div className="h-screen flex items-center justify-center relative bg-black">
            <div className="flex flex-col items-center justify-center border-4 border-yellow-500 p-8 hover:bg-rose-500 transition duration-300">

               <h1 className="text-4xl font-bold text-rose-700 hover:text-white transition suration-300">Hello World!</h1>
            </div>

            <div className="absolute bottom-0 right-0 mb-4 mr-4">
               <div className="px-16 py-14 bg-yellow-500 text-white rounded hover:bg-rose-500 transition duration-300 ">
               {names.map((name, index) => (
                  <p key={index} className=" text-lg font-bold text-black">
            {name}
          </p>
        ))}
                  

               </div>
            </div>
        </div>
         </div>
      </>
   );
}
