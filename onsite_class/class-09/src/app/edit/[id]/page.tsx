"use client";

import { useRouter } from "next/navigation";
import { ChangeEvent, useEffect, useState } from "react";

export default function EditPage({ params }: { params: { id: string } }) {
    const [formData, setFormData] = useState({ book: "", description: "" })
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`api/book/${params.id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch the book')
                }

                const data = await response.json();
                console.log(data)
                setFormData({ book: data.book.book, description: data.book.description })
            } catch (error) {
                setError("Failed to load the book");
            }
        };
        fetchData();
    });
    const handleBook = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.book || !formData.description) {
            setError("Please! fill all the fields")
            return;
        }
        setError(null);
        setIsLoading(true);
        try {
            const response = await fetch(`/api/book/${params.id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (!response.ok) {
                throw new Error("Failed to update Book")
            }
            router.push('/');
        } catch (error) {
            console.log(error)
            setError("Oops! Something went wrong ,Please try later")
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className="text-black">
            <h2 className="text-2xl font-bold my-8">Edit Book</h2>

            <form onSubmit={handleSubmit} className="flex gap-3 flex-col" >
                <input
                    type="text"
                    name="book"
                    placeholder="Update Book"
                    value={formData.book}
                    onChange={handleBook}
                    className="py-1 px-4 rounded-md border" />

                <textarea name="description"
                    rows={4}
                    placeholder="Update description"
                    value={formData.description}
                    onChange={handleBook}
                    className="py-1 px-4 border rounded-md resize-none"
                ></textarea>
                <button className="px-4 py-1 mt-5 bg-black text-white rounded-md cursor-pointer">
                    {isLoading ? "Updating..." : "Updated books"}
                </button>
            </form>
            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    );
}