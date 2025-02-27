"use client"
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Button } from "@/components/ui/button"


export default function Home() {
  const eventhandler = () => {
    alert('Welcome to the page✨🎆')
  }
  const [count, setcount] = useState(0)
  const [value, setvalue] = useState('')

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-centers m-8">
        <Button onClick={eventhandler}>Click Me</Button>


      </div>
      <div className="flex justify-center items-centers m-8">
        <h1 className="text-2xl font-bold">Count:{count}</h1>
      </div>
      <div className="flex justify-center items-centers m-8 space-x-4 p-8" >
        <Button onClick={() => setcount(count + 1)}>+</Button>
        <Button onClick={() => setcount(count - 1)}>-</Button>
        <Button onClick={() => setcount(count / 2)}>/</Button>
        <Button onClick={() => setcount(count * 2)}>*</Button>
        <Button onClick={() => setcount(count * 0)}>Clear</Button>

      </div>
      <div className="flex justify-center items-center">

      
      <input
      className=" bg-black p-4 rounded text-white"
      placeholder="text"
        value={value}
        onChange={(e) => setvalue(e.target.value)} />
        </div>
    </>
  )
}