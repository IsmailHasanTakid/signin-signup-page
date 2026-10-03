"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";

const stats = [
    { label: "Total Projects", value: "12", color: "from-blue-500 to-blue-700" },
    { label: "Completed", value: "8", color: "from-green-500 to-emerald-700" },
    { label: "In Progress", value: "3", color: "from-yellow-500 to-orange-600" },
    { label: "Messages", value: "24", color: "from-purple-500 to-purple-700" },
];

const activities = [
    "Profile updated",
    "Email verified successfully",
    "Logged in with Google",
    "Account created",
];

export default function DashboardPage() {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    if (isPending) {
        return <p className="pt-24 text-center text-gray-400">Loading...</p>;
    }

    return (
        <div className="min-h-screen bg-[#070b14] pt-24 px-6 pb-10">
            <div className="max-w-6xl mx-auto">




                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-white">
                        Welcome back, {user?.name || "User"} 👋
                    </h1>
                    <p className="text-gray-400 mt-1">Here is what is happening today.</p>
                </div>




                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    {stats.map((s) => (
                        <div
                            key={s.label}
                            className={`rounded-2xl p-5 text-white bg-gradient-to-br ${s.color} shadow-lg transition hover:-translate-y-1`}
                        >
                            <p className="text-sm opacity-80">{s.label}</p>
                            <p className="text-4xl font-bold mt-2">{s.value}</p>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">





                    <div className="lg:col-span-2 rounded-2xl bg-[#0b101b] border border-white/10 p-6">
                        <h2 className="text-lg font-semibold text-white mb-4">Recent Activity</h2>
                        <ul className="space-y-3">
                            {activities.map((a) => (
                                <li key={a} className="flex items-center gap-3 text-gray-300">
                                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                    {a}
                                </li>
                            ))}
                        </ul>
                    </div>




                    <div className="rounded-2xl bg-[#0b101b] border border-white/10 p-6">
                        <h2 className="text-lg font-semibold text-white mb-4">Quick Actions</h2>
                        <div className="space-y-3">
                            <Link
                                href="/profile"
                                className="block text-center py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium hover:scale-[1.02] transition"
                            >
                                View Profile
                            </Link>
                            <Link
                                href="/"
                                className="block text-center py-3 rounded-xl border border-white/10 text-gray-300 hover:bg-white/5 transition"
                            >
                                Go Home
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}