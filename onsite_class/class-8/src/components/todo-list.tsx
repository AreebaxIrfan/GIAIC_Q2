"use client";

import { useState, useEffect, ChangeEvent, } from "react";
import { input } from "./ui/input";
import { Button } from "./ui/button"
import { checkbox } from "./ui/checkbox"

import React from 'react'

interface Task {
    id: number;
    text: string;
    completed: boolean

}
export default function TodoList() {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [newTask, setNewTasks] = useState("");
    const [editingTask, setEditingTaskId] = useState<number | null>(null);
    const [editedTaskText, seteditedTaskText] = useState<string>("");
    const [isMounted, setIsMounted] = useState<boolean>(false);
    useEffect(() => {
        setIsMounted(true);
        const savedTasks = localStorage.getItem("task");
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks) as Task[]);
        }
    }, []);

    useEffect(() => {
        if (isMounted) {
            localStorage.setItem("tasks",
                JSON.stringify(tasks)
            )
        }
    }, [tasks, isMounted])

    const addTask = () => {
        if (newTask.trim() === "") {
            setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }])
            setNewTasks("")
        }
    };

    const toggleTaskCompletion = (id: number): void => {
        setTasks(
            tasks.map((task) =>
    task.id === id ? { ...task, completed: !task.completed } : task
    ))}

    const startEditingTask = (id: number, text: string): void => {
        setEditingTaskId(id);
        seteditedTaskText(text);
    }

    const updateTask = (): void => {
        if (editedTaskText.trim() !== "") {
            setTasks(
                tasks.map((task)=>
                task.id === editingTask ? {
                    ...task, taxt : editedTaskText
                } : task)

            );
            setEditingTaskId(null);
            seteditedTaskText("")
        }
    }

    const deleteTask = (id: number): void => {
        setTasks(tasks.filter((task.id !== id)))
    }
    

    return(
    <div className="flex flex-col justify-center items-center">

        <div>
            <h1>TodoList</h1>
        </div>
    </div>
    )
}