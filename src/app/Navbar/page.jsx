"use client"
import { Link, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
    const { data: session } = authClient.useSession();

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
                    <Link href="/features">Features</Link>
                    <Link href="/pricing">Pricing</Link>
                    <Link href="/dashboard">Dashboard</Link>
                </div>

                <div className="flex items-center gap-3">
                    {session ? (
                        <Button onClick={handleLogout}>LogOut

                        </Button>
                    ) : (
                        <>
                            <Link href="/signin">
                                Sign In
                            </Link>

                            <Link href="/signup">Sign Up</Link>

                        </>
                    )}
                </div>

            </div>
        </nav>
    );
}
