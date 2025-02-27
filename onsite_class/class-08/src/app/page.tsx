"use client"
import TodoList from "@/components/todo-list";
import React, { useState ,useEffect } from "react";


export default function Home() {
  const eventhandler = () => {
    alert('Welcome to the page✨🎆')
  }
  return (
    <>
      
      <div>
        <TodoList/>
        
      </div>
    </>
  )
};