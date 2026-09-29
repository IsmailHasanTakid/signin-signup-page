"use client"
import { useState } from "react"
import { authClient } from "@/lib/auth-client"
import Link from "next/link"

export default function SignUpPage() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleSignup = async (e) => {
        e.preventDefault();
        const { data, error } = await authClient.signUp.email({
            name, email, password
        });
        if (error) {
            alert(error.message);
            return
        }
        console.log("Sign Up Successfully")
    }

    return (

        <div className="min-h-screen flex items-center justify-center bg-[#070b14] px-4 relative overflow-hidden">

        
            <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -top-20 -left-20"></div>

            <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -bottom-20 -right-20"></div>


            <div className="relative w-full max-w-md p-[1px] rounded-3xl overflow-hidden">

    
                <div className="absolute inset-[-150%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,transparent_65%,#2563eb_82%,#9333ea_92%,transparent_100%)]"></div>


                <form
                    onSubmit={handleSignup}
                    className="relative w-full bg-[#0b101b] backdrop-blur-2xl rounded-3xl p-8"
                >

                    <div className="text-center mb-8">

                        <div className="mx-auto mb-5 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">

                            <span className="text-2xl">✦</span>

                        </div>

                        <h1 className="text-3xl font-bold text-white tracking-tight">
                            Create Account
                        </h1>

                        <p className="text-gray-400 mt-2 text-sm">
                            Join us and start your journey
                        </p>

                    </div>

                    <div className="mb-5">

                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Full Name
                        </label>

                        <input
                            type="text"
                            value={name}
                            placeholder="Enter your name"
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white/[0.08] focus:ring-2 focus:ring-blue-500/20"
                        />

                    </div>

                    <div className="mb-5">

                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address
                        </label>

                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white/[0.08] focus:ring-2 focus:ring-blue-500/20"
                        />

                    </div>


                
                    <div className="mb-7">

                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            value={password}
                            placeholder="Enter your password"
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white/[0.08] focus:ring-2 focus:ring-blue-500/20"
                        />

                    </div>


                 
                    <button
                        type="submit"
                        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold tracking-wide shadow-lg shadow-blue-600/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/30 active:scale-[0.98]"
                    >
                        Create Account
                    </button>


                   
                    <p className="text-center text-sm text-gray-500 mt-6">

                        Already have an account?

                        <Link
                            href="/signin"
                            className="text-blue-400 hover:text-blue-300 cursor-pointer ml-1 transition-colors"
                        >
                            Sign in
                        </Link>

                    </p>

                </form>

            </div>

        </div>

    )

}