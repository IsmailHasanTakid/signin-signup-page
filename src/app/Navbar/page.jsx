"use client"
import { Link, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const displayName = user?.name?.trim().split(/\s+/).pop() || "User";
    const handleLogout = async () => {
        const { error } = await authClient.signOut();
        if (error) {
            alert(error.message);
            return;
        }
    };
    return (
        <nav className="border-b bg-white fixed top-0 left-0 w-full z-50">
            <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">

                <Link href="/" className="text-xl font-bold">
                    ACME
                </Link>

                <div className="flex items-center gap-6">
                    <Link href="/">Home</Link>
                    {session?.user &&
                        <Link href="/profile">Profile</Link>
                    }
                    <Link href="/dashboard">Dashboard</Link>
                </div>

                <div className="flex items-center gap-3">
                    {session ?
                        (
                            <>
                                <span className="text-sm font-semibold tracking-wide text-blue-300 bg-blue-500/10 border border-blue-400/20 px-3 py-1.5 rounded-lg">
                                    {displayName}
                                </span>
                                <Button onClick={handleLogout} className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-500 to-slate-800 text-white font-semibold shadow-lg shadow-red-500/20 border border-red-400/20 transition-all duration-300 hover:scale-105 hover:shadow-red-500/40 active:scale-95" >
                                    LogOut </Button> </>
                        ) : (
                            <>
                                <Link href="/signin" className="px-5 py-2.5 rounded-xl text-gray-300 font-medium border border-white/10 bg-white/[0.04] backdrop-blur-md transition-all duration-300 hover:bg-white/[0.09] hover:text-white hover:border-blue-400/30 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-0.5" >
                                    Sign In
                                </Link>
                                <Link href="/signup" className="relative px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-600/20 border border-blue-400/20 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/40 active:scale-95" >
                                    Sign Up
                                </Link>
                            </>
                        )}
                </div>

            </div>
        </nav>
    );
}
