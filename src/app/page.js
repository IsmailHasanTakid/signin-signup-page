import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070b14] px-6 relative overflow-hidden">


      <div className="absolute w-80 h-80 bg-blue-600/20 rounded-full blur-3xl -top-20 -left-20"></div>

      <div className="absolute w-80 h-80 bg-purple-600/20 rounded-full blur-3xl -bottom-20 -right-20"></div>


      <div className="relative max-w-2xl text-center">

        <p className="mb-4 text-sm font-medium tracking-[0.25em] uppercase text-blue-400">
          Secure & Simple
        </p>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-white">
          Welcome Back
        </h1>

        <p className="mt-6 text-lg leading-8 text-gray-400">
          Sign in to your account to continue your journey, or create
          a new account and become part of our growing platform.
        </p>

        <p className="mt-4 text-base leading-7 text-gray-500">
          Your account keeps your experience personalized, secure,
          and ready whenever you come back.
        </p>


      </div>
    </div>
  );
}
