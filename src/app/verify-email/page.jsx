"use client";
import { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function VerifyEmailPage() {
    const [otp, setOtp] = useState("");
    const params = useSearchParams();
    const router = useRouter();
    const email = params.get("email");

    const handleVerify = async (e) => {
        e.preventDefault();

        const { error } = await authClient.emailOtp.verifyEmail({ email, otp });

        if (error) {
            alert(error.message);
            return;
        }
        alert("Email verified!");
        router.push("/");
    };

    const handleResend = async () => {
        const { error } = await authClient.emailOtp.sendVerificationOtp({
            email,
            type: "email-verification",
        });
        alert(error ? error.message : "send the new code");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <form onSubmit={handleVerify}
                className="w-full max-w-md bg-white p-8 rounded-xl shadow-md space-y-4">
                <h1 className="text-2xl font-bold text-center">Verify Email</h1>
                <p className="text-center text-gray-500">
                    {email} Enter The 6 Digits Code Here
                </p>

                <input
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="123456"
                    className="w-full border rounded-lg px-4 py-3 text-center text-xl tracking-widest"
                />

                <button type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg">
                    Verify
                </button>

                <button type="button" onClick={handleResend}
                    className="w-full border py-3 rounded-lg">
                    Resend code
                </button>
            </form>
        </div>
    );
}