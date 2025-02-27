"use client"
import React, { useState ,useEffect } from "react";
import Navbar from "./components/Navbar";

export default function Home() {
  const eventhandler = () => {
    alert('Welcome to the page✨🎆')
  }
 const [data, setData] = useState(null)
 useEffect(()=>{
  fetch(
    "https://newsapi.org/v2/everything?q=tesla&from=2024-09-27&sortBy=publishedAt&apiKey=57de230584734456bcbdc5c1ff0a6348 "
  )
  .then((response)=> response.json())
  .then((data)=> setData(data));
  
 }, [])

  return (
    <>
      <Navbar />
      <div>
        <h1>Car Data</h1>
        {data ? (
          <pre>{JSON.stringify(data, null ,2)}</pre>
        ):(
          <p>Loading</p>
        )}
      </div>
    </>
  )
};