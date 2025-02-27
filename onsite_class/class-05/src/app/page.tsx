"use client"
import React from "react";
import Navbar from "./components/Navbar";
import { Button } from "@/components/ui/button"


export default function Home() {
  const eventhandler = () => {
    alert('Welcome to the page✨🎆')
  }
  return (
    <>
      <Navbar />
      <div className="flex flex-col justify-center items-center m-16">

      <div className="= right-0 top-0 m-5">
          <img src="image.jpg" alt="" className="w-48 h-auto rounded-full" />
        </div>
      <Button onClick={eventhandler} variant="destructive">Click Here</Button>

      </div>
    </>