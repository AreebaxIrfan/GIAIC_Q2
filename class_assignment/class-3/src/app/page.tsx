'use client'
import { useRouter } from "next/navigation";
import Navbar from "./components/Navbar";

export default function Home() {
  const route = useRouter()
  return (
    <>
      <Navbar />
      <div className="flex flex-col h-screen bg-black text-white font-bold text-5xl justify-center items-center">
        It's Areeba Irfan
        <button className="flex justify-center items-center m-5 p-5 text-xl bg-blue-500 rounded-xl" onClick={()=>route.push('/thankyou')}>
          click here
        </button>
      </div>
    </>
  );
}
