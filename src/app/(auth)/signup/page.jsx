"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";

export default function SignUpPage() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();


    const handleSignup = async (e) => {
        e.preventDefault();

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            // callbackURL: "/"
        });

        if (error) {
            alert(error.message);
            return;
        }

        alert("Send OTP to your email, check your email:");
        router.push(`/verify-email?email=${encodeURIComponent(email)}`);
    };

    const handleGoogleSignIn = async () => {
        const resDta = await authClient.signIn.social({
            provider: "google"
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#070b14] px-4 py-6 relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -top-20 -left-20"></div>

            <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -bottom-20 -right-20"></div>

            {/* Main Wrapper */}
            <div className="relative w-full max-w-md p-[1px] rounded-3xl overflow-hidden">

                {/* Animated Border */}
                <div className="absolute inset-[-150%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,transparent_65%,#2563eb_82%,#9333ea_92%,transparent_100%)]"></div>

                <div className="relative">

                    {/* Signup Form */}
                    <form
                        onSubmit={handleSignup}
                        className="relative w-full bg-[#0b101b] backdrop-blur-2xl rounded-3xl p-7"
                    >

                        {/* Header */}
                        <div className="text-center mb-6">

                            <div className="mx-auto mb-4 w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">

                                <span className="text-2xl">✦</span>

                            </div>

                            <h1 className="text-2xl font-bold text-white tracking-tight">
                                Create Account
                            </h1>

                            <p className="text-gray-400 mt-2 text-sm">
                                Join us and start your journey
                            </p>

                        </div>

                        {/* Full Name */}
                        <div className="mb-4">

                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Full Name
                            </label>

                            <input
                                type="text"
                                value={name}
                                placeholder="Enter your name"
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white/[0.08] focus:ring-2 focus:ring-blue-500/20"
                            />

                        </div>

                        {/* Email */}
                        <div className="mb-4">

                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Email Address
                            </label>

                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white/[0.08] focus:ring-2 focus:ring-blue-500/20"
                            />

                        </div>

                        {/* Password */}
                        <div className="mb-5">

                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                Password
                            </label>

                            <input
                                type="password"
                                value={password}
                                placeholder="Enter your password"
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-blue-500 focus:bg-white/[0.08] focus:ring-2 focus:ring-blue-500/20"
                            />

                        </div>

                        {/* Create Account Button */}
                        <button
                            type="submit"
                            className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold tracking-wide shadow-lg shadow-blue-600/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/30 active:scale-[0.98]"
                        >
                            Create Account
                        </button>

                        {/* Sign In Link */}
                        <p className="text-center text-sm text-gray-500 mt-5">

                            Already have an account?

                            <Link
                                href="/signin"
                                className="text-blue-400 hover:text-blue-300 cursor-pointer ml-1 transition-colors"
                            >
                                Sign in
                            </Link>

                        </p>

                    </form>

                    {/* Google Sign In - Outside Form */}
                    <div className="mt-4">

                        <button
                            type="button"
                            onClick={handleGoogleSignIn}
                            className="w-full flex items-center justify-center gap-3 py-3 rounded-xl bg-[#0b101b] border border-white/10 text-white font-medium transition-all duration-300 hover:bg-white/[0.08] hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 active:scale-[0.98]"
                        >

                            {/* Google Icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 48 48"
                                className="w-5 h-5"
                            >
                                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.75 7.18l7.73 6C44.43 37.98 46.98 31.81 46.98 24.55z" />
                                <path fill="#FBBC05" d="M10.53 28.59A14.5 14.5 0 0 1 9.5 24c0-1.6.27-3.14.76-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.52 2.56 10.78l7.97-6.19z" />
                                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.14 1.45-4.89 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                            </svg>

                            Continue with Google

                        </button>

                    </div>

                </div>

            </div>

        </div>
    );

}
