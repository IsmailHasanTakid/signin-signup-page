"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function ProfilePage() {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    if (isPending) {
        return (
            <div className="min-h-screen bg-[#070b14] flex items-center justify-center">
                <div className="text-center">
                    <div className="w-10 h-10 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin mx-auto mb-4"></div>
                    <p className="text-gray-400">Loading profile...</p>
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-[#070b14] flex items-center justify-center px-4 relative mt-10 overflow-hidden">


                <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -top-20 -left-20"></div>

                <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -bottom-20 -right-20"></div>

                <div className="relative w-full max-w-md p-[1px] rounded-3xl overflow-hidden">

                    <div className="absolute inset-[-150%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,transparent_65%,#2563eb_82%,#9333ea_92%,transparent_100%)]"></div>

                    <div className="relative bg-[#0b101b] rounded-3xl p-8 text-center">

                        <div className="mx-auto mb-5 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/20">
                            <span className="text-2xl">✦</span>
                        </div>

                        <h2 className="text-2xl font-bold text-white mb-2">
                            Welcome Back
                        </h2>

                        <p className="text-gray-400 mb-6">
                            Please log in to see your profile
                        </p>

                        <Link
                            href="/signin"
                            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-600/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-blue-500/30"
                        >
                            Sign In
                        </Link>

                    </div>

                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#070b14] pt-24 px-4 pb-12 relative overflow-hidden">


            <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -top-20 -left-20"></div>

            <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -bottom-20 -right-20"></div>


            <div className="relative w-full max-w-lg mx-auto p-[1px] rounded-3xl overflow-hidden">


                <div className="absolute inset-[-150%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_0deg,transparent_0%,transparent_65%,#2563eb_82%,#9333ea_92%,transparent_100%)]"></div>

                <div className="relative bg-[#0b101b] rounded-3xl overflow-hidden">


                    <div className="h-32 bg-gradient-to-r from-blue-600/30 via-purple-600/20 to-blue-600/30"></div>


                    <div className="px-7 pb-8">


                        <div className="-mt-16 mb-5 flex justify-center">

                            {user.image ? (
                                <img
                                    src={user.image}
                                    alt={user.name}
                                    referrerPolicy="no-referrer"
                                    className="w-28 h-28 rounded-full object-cover border-4 border-[#0b101b] shadow-xl shadow-blue-500/20"
                                />
                            ) : (
                                <div className="w-28 h-28 rounded-full border-4 border-[#0b101b] bg-gradient-to-br from-blue-500 to-purple-600 text-white text-4xl font-bold flex items-center justify-center shadow-xl shadow-blue-500/20">
                                    {user.name?.charAt(0).toUpperCase()}
                                </div>
                            )}

                        </div>


                        <div className="text-center mb-7">

                            <h2 className="text-3xl font-bold text-white">
                                {user.name}
                            </h2>

                            <p className="text-gray-400 mt-2">
                                {user.email}
                            </p>

                        </div>


                        <div className="space-y-3">


                            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] border border-white/10">

                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                                        Email
                                    </p>

                                    <p className="text-sm text-gray-200 mt-1">
                                        {user.email}
                                    </p>
                                </div>

                                <div
                                    className={`px-3 py-1.5 rounded-full text-xs font-medium ${user.emailVerified
                                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                        : "bg-red-500/10 text-red-400 border border-red-500/20"
                                        }`}
                                >
                                    {user.emailVerified
                                        ? "✓ Verified"
                                        : "Not Verified"}
                                </div>

                            </div>



                            <div className="flex items-center justify-between p-4 rounded-2xl bg-white/[0.04] border border-white/10">

                                <div>
                                    <p className="text-xs text-gray-500 uppercase tracking-wider">
                                        Account Status
                                    </p>

                                    <p className="text-sm text-gray-200 mt-1">
                                        Active Account
                                    </p>
                                </div>

                                <div className="w-3 h-3 rounded-full bg-green-400 shadow-lg shadow-green-400/50"></div>

                            </div>




                            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10">

                                <p className="text-xs text-gray-500 uppercase tracking-wider">
                                    Member Since
                                </p>

                                <p className="text-sm text-gray-200 mt-1">
                                    {new Date(user.createdAt).toLocaleDateString()}
                                </p>

                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );

}
