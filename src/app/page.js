"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  return (
    <div className="min-h-screen bg-[#070b14] text-white relative overflow-hidden">


      <div className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -top-20 -left-20"></div>

      <div className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl -bottom-20 -right-20"></div>



      <section className="relative min-h-[80vh] flex items-center justify-center px-6">

        <div className="max-w-3xl text-center">

          <span className="inline-block mb-5 px-4 py-2 rounded-full text-sm text-blue-300 bg-blue-500/10 border border-blue-500/20">
            Secure & Simple
          </span>

          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">

            {user
              ? `Welcome back, ${user.name?.split(" ")[0]} `
              : "Your account, safe and personal"}

          </h1>

          <p className="mt-6 text-lg text-gray-400 leading-8">
            {user
              ? "Welcome back! Continue to your dashboard or view your profile."
              : "Create an account or sign in to start your journey with us."}
          </p>




          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

            {user ? (
              <>
                <Link
                  href="/dashboard"
                  className="px-7 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 font-semibold transition hover:scale-105"
                >
                  Go to Dashboard
                </Link>

                <Link
                  href="/profile"
                  className="px-7 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-200 transition hover:bg-white/10"
                >
                  View Profile
                </Link>
              </>
            ) : (
              <>
                <Link
                  href="/signup"
                  className="px-7 py-3 rounded-xl bg-gradient-to-r from-blue-400 to-purple-400 font-semibold transition hover:scale-105"
                >
                  Get Started
                </Link>

                <Link
                  href="/signin"
                  className="px-7 py-3 rounded-xl border border-white/10 bg-white/5 text-gray-200 transition hover:bg-white/10"
                >
                  Sign In
                </Link>
              </>
            )}

          </div>

        </div>

      </section>



      <section className="relative max-w-5xl mx-auto px-6 pb-20">

        <h2 className="text-3xl font-bold text-center mb-10">
          Everything you need
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-[#0b101b] border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 transition">
            <div className="text-3xl mb-4">🔒</div>

            <h3 className="text-lg font-semibold">
              Secure
            </h3>

            <p className="text-sm text-gray-400 mt-2">
              Your account is protected with secure authentication.
            </p>
          </div>

          <div className="bg-[#0b101b] border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 transition">
            <div className="text-3xl mb-4">⚡</div>

            <h3 className="text-lg font-semibold">
              Fast Login
            </h3>

            <p className="text-sm text-gray-400 mt-2">
              Sign in quickly using email or Google.
            </p>
          </div>

          <div className="bg-[#0b101b] border border-white/10 rounded-2xl p-6 hover:border-blue-500/40 transition">
            <div className="text-3xl mb-4">👤</div>

            <h3 className="text-lg font-semibold">
              Personal Profile
            </h3>

            <p className="text-sm text-gray-400 mt-2">
              View your account information in one place.
            </p>
          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="relative text-center text-sm text-gray-600 py-8 border-t border-white/5">
        © 2026 ACME. All rights reserved.
      </footer>

    </div>
  );

}
