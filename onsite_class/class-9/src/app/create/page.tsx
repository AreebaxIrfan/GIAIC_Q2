"use client"
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react"

export default function CreatePage() {
    const [formData, setFormData] = useState({book:"" , description: ""})
    const [isLoading, setIsLoading] = useState(false)
    const [error , setError] = useState<string|null>(null);

    const router = useRouter();

    const handleBook = (e : ChangeEvent<HTMLInputElement |HTMLTextAreaElement>)=>{
        setFormData((prevData) =>({
                ...prevData,
                [e.target.name] : e.target.value,
            }
        ) );
       
    }

    const handleSubmit = async(e:React.FormEvent)=>{
        e.preventDefault();

        if(!formData.book|| !formData.description) {
            setError("Please! fill all the fields")
            return
        }

        setError(null)
        setIsLoading(true)

        try {
            const response = await fetch("/api/book",
                {method:"POST" ,
                    headers:{
                        "Content-type":"application/json",
                    },
                    body:JSON.stringify(formData),
                })
                if(!response.ok){
                    throw new Error("Failed to create Book")
                }
                router.push('/'); 
        } catch (error) {
            console.log(error)
            setError("Oops! Something went wrong ,Please try later")
        }finally{
            setIsLoading(false);
        }
    }
    return (
        <div className="text-black">
            <h2 className="text-2xl font-bold my-8">Add New Book</h2>

            <form onSubmit={handleSubmit} className="flex gap-3 flex-col" >
                <input
                    type="text"
                    name="book"
                    placeholder="Book"
                    value={formData.book}
                    className="py-1 px-4 rounded-md border" 
                    onChange={handleBook}
                    />

                <textarea name="description"
                    rows={4}
                    placeholder="Book description"
                    value={formData.description}
                    className="py-1 px-4 border rounded-md resize-none"
                    onChange={handleBook}
                ></textarea>
                <button className="px-4 py-1 mt-5 bg-black text-white rounded-md cursor-pointer">
                   {isLoading ?"Adding..." :"Add books"}
                </button>
            </form>
            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    )
}