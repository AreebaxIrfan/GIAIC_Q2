'use client';

import { useState } from "react";
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const SignUp = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Signup attempt with', { email, password })
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>
                    SignUp
                </CardTitle>
                <CardDescription>
                    Enter the asked detail to create a new account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <form onSubmit={handleSubmit}>
                    <div className="space-y-2 m-2">
                        <Input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="space-y-2 m-2">
                        <Input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div  className="space-y-2 m-2">
                        <Input
                            type="password"
                            placeholder="Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                    <Button type="submit" className="w-full bg-slate-900" onClick={() => alert('Thank you for signing up')}>Sign Up</Button>
                </form>
            </CardContent>
        </Card>
    )
}
export default SignUp