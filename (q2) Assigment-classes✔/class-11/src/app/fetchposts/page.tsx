"use client"
import {useState, useEffect} from "react"
export default function
FetchPostsPage(){
    const [posts, setPosts] = 
    useState([])
    const [error, setError] =
    useState("")
    const [loading, setLoading] =
    useState(true)
    useEffect( () => {
        fetch("/api/external")
        .then((res)=> res.json())
        .then((data) => {
            if(data.success){
                setPosts(data.data)
            }else{
                setError(data.message)
            }
        })
        .catch((err) => setError("An expected error"))
        .finally(() => setLoading(false))
    }, [])
    // if(loading) return <p>loading</p>
    return (
        <div className="max-w-6xl mx-auto p-4 bg-gradient-to-r from-purple-500 to-pink-500">
         
            <h1 className="text-center text-5xl font-bold mb-4 text-white">Posts</h1>
            <div className="flex flex-col gap-4">
                {posts.map((post: {id: number; title: string ; body:string}) => (
                    <div key={post.id} className="bg-gray-100 border border-gray-300 p-4 rounded-lg hover:bg-gray-200 bg-gradient-to-r from-purple-200 to-pink-200">
                   
                       Title: <span className="text-lg font-sans block mb-2 text-purple-700">{post.title}</span>
                       Description: <span className="text-lg font-sans block text-pink-700">{post.body}</span>
                    </div>
                ))}
            </div>
        </div>
    )

}