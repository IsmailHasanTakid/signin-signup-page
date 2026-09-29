"use client"
import { useState } from "react"
import { authClient } from "@/lib/auth-client"

export default function SignInPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");

    const handleSignin = async (e) => {

        e.preventDefault();

        const { data, error } = await authClient.signIn.email({
            email, password
        })

        if (error) {
            alert(error.message);
            return
        }

        console.log("sign in successfully", data);

    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#070b14] px-4 relative overflow-hidden">

            <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -top-20 -left-20"></div>

            <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -bottom-20 -right-20"></div>


            {/* Animated Border Wrapper */}
            <div className="relative w-full max-w-md p-[1px] rounded-3xl overflow-hidden">

                {/* Moving Light */}
                <div className="absolute inset-[-150%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,transparent_65%,#2563eb_82%,#9333ea_92%,transparent_100%)]"></div>


                <form
                    onSubmit={handleSignin}
                    className="relative w-full bg-[#0b101b] backdrop-blur-2xl rounded-3xl p-8"
                >

                    {/* Header */}
                    <div className="text-center mb-8">

                        <div className="mx-auto mb-5 w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">

                            <span className="text-2xl">✦</span>

                        </div>

                        <h1 className="text-3xl font-bold text-white tracking-tight">
                            Welcome Back
                        </h1>

                        <p className="text-gray-400 mt-2 text-sm">
                            Sign in to continue your journey
                        </p>

                    </div>



                    <div className="mb-5">

                        <label className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address
                        </label>

                        <input
                            type="email"
                            value={email}
                            placeholder="Enter your email"
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
                        Sign In
                    </button>

                    <p className="text-center text-sm text-gray-500 mt-6">

                        Don't have an account?

                        <span className="text-blue-400 hover:text-blue-300 cursor-pointer ml-1 transition-colors">
                            Create account
                        </span>

                    </p>

                </form>

            </div>

        </div>
    )


}