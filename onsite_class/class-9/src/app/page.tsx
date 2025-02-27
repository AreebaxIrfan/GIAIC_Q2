"use client"

import Link from "next/link";
import HeroSection from "./Components/HeroSection";
import { useEffect, useState } from "react";

interface BBook {
   $id: string,
   book: string,
   description: string,
}
export default function Home() {
   const [book, setBook] = useState<BBook[]>([]);
   const [isLoading, setIsLoading] = useState(true)
   const [error, setError] = useState<string | null>(null)

   useEffect(() => {
      const fetchBook = async () => {
         setIsLoading(true);
         try {
            const response = await fetch('/api/book')
            if (!response.ok) {
               throw new Error("failed to fetch books")
            }
            const data = await response.json();
            setBook(data);
         } catch (error) {
            console.log("Error", error);
            setError("Failed to load books please! try reloading the page  ")
         } finally {
            setIsLoading(false)
         }
      }
      fetchBook();

   }, [])

   const handleDelete = async ( id : string) =>{
      try {
         await fetch(`/api/book/${id}`,{method:'DELETE'});
         setBook((prevBooks)=>
         prevBooks?.filter((i)=> i.$id !== id))
      } catch (error) {
         setError("Failed to delete book , Please try again")
      }
   }
   return (
         <div className="mb-20">
            <HeroSection />

            <div className="flex justify-center items-center">
               <h2 className="text-5xl m-4 font-bold text-blue-500">Books</h2>
            </div>

            {error && <p className="py-4 text-red-500"> {error}</p>}
            {isLoading ? <p> Loading books..</p>
              :book?.length > 0 ? (
               <div >
                  {
                     book?.map(book => (
                        <div
                           key={book.$id}
                           className="p-4 my-2 rounded-md border-b leading-8 text-black">

                           <div className="font-bold text-black ">
                              {book.book}
                           </div>

                           <div className="text-black">
                              {book.description}
                           </div>

                           <div className="flex gap-4 mt-4 justify-end">
                              <Link className="bg-slate-200 px-4 py-2 rounded-md uppercase text-sm  font-bold tracking-widest" href={`/edit/${book.$id}`}>Edit</Link>
                              <button
                              onClick={()=> handleDelete(book.$id)}
                              className="bg-red-500 text-white px-4 py-2 rounded-md uppercase text-sm  font-bold tracking-widest ">
                                 Delete
                              </button>
                           </div>

                        </div>
                     ))
                  }


               </div>
            ) : (
               <p>No books are found.</p>
            )}
         
         </div>
   );
}
