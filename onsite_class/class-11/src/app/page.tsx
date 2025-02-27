import Image from "next/image";
import FetchPostsPage from "./fetchposts/page";

export default function Home() {


   return (
      <>
      <div className="bg-black px-3 py-3 text-white flex justify-center items-center font-serif font-bold text-3xl">
         class11
      </div>
        <div className="m-6 ">

         <FetchPostsPage/>
        </div>
      </>
   );
}
