"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function ProfilePage() {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    // লোড হচ্ছে
    if (isPending) {
        return <p className="pt-24 text-center">Loading...</p>;
    }

    // লগইন নেই
    if (!user) {
        return (
            <div className="pt-24 text-center">
                <p>Please LOG IN to see Your Profile</p>
                <Link href="/signin" className="text-blue-500 underline">
                    Sign In
                </Link>
            </div>
        );
    }

    return (
        <div className="pt-24 px-6 flex justify-center">
            <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md text-center space-y-3">

                {user.image ? (
                    <img
                        src={user.image}
                        alt={user.name}
                        referrerPolicy="no-referrer"
                        className="w-24 h-24 rounded-full mx-auto"
                    />
                ) : (
                    <div className="w-24 h-24 rounded-full mx-auto bg-blue-600 text-white text-4xl flex items-center justify-center">
                        {user.name?.charAt(0).toUpperCase()}
                    </div>
                )}

                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-gray-500">{user.email}</p>

                <p>
                    Email:{" "}
                    {user.emailVerified ? "✅ Verified" : "❌ Not verified"}
                </p>

                <p className="text-sm text-gray-400">
                    Joined: {new Date(user.createdAt).toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}