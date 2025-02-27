'use client';
import LoginForm from "@/components/ui/LoginForm";
import SignUp from '@/components/ui/SignupForm'
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function User() {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-black text-white">
            <div className="mb-4">
                <Button className="text-2xl font-serif"
                    onClick={() => setIsLogin(!isLogin)}
                    variant={"secondary"}>
                    {
                        isLogin ? 'Need a account : create' : 'Login with your current account'
                    }
                </Button>
            </div>
            {
                isLogin ? <LoginForm /> : <SignUp />
            }

        </div>
    )
}