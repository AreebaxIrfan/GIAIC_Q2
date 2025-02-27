'use client';

import { useState } from "react";
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const LoginForm = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Login attempt with', { email, password })
    }

    return (
        <Card>
            <CardHeader className="flex flex-col justify-center items-center">
                <CardTitle className="text-2xl font-bold">
                    Login
                </CardTitle>
                <CardDescription>
                    Enter Your Credential to access your account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-4 m-2">
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-4 m-2">
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full bg-slate-900"  onClick={() => alert('Thank you for Login')}>Login</Button>
                </form>
            </CardContent>
        </Card>
    )
}
export default LoginForm