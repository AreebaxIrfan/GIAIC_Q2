import Image from "next/image";
import FetchPostsPage from "./fetchposts/page";
import Hersection from "./components/Hersection";
export default function Home() {
   return (
      <>
         <div className="m-6 ">
            <Hersection />
            <FetchPostsPage />
         </div>
      </>
   );
}
