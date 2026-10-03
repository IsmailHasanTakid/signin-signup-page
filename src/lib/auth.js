import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { Resend } from 'resend';
import { emailOTP } from "better-auth/plugins";

import { mongodbAdapter } from "better-auth/adapters/mongodb";


const resend = new Resend(process.env.RESEND_API_KEY)
const client = new MongoClient(process.env.BETTER_AUTH_DB_URL);


const dbName = "signinsignupdb"
const db = client.db(dbName);


export const auth = betterAuth({
    baseURL: process.env.BETTER_AUTH_URL,
    account: {
        accountLinking: {
            enabled: true,
            trustedProviders: ["google"],
        },
    },
    emailAndPassword: {
        enabled: true,
        requireEmailVerification: true,


    },
    socialProviders: {
        google: {
            clientId: process.env.BETTER_AUTH_GOOGLE_CLIENT_ID,
            clientSecret: process.env.BETTER_AUTH_GOOGLE_SECRET,
        },
    },
    emailVerification: {

        autoSignInAfterVerification: true,


        // for link to verification
        // sendVerificationEmail: async ({ user, url }) => {

        //     await resend.emails.send({
        //         from: "onboarding@resend.dev",
        //         to: user.email,
        //         subject: "verify your email",
        //         html: `
        //         <h2>Verify your email</h2>
        //         <p>Click the button below to verify your email.</p>
        //         <a href="${url}">
        //             Verify Email
        //         </a>
        //     `,
        //     });

        // },
        // sendOnSignUp: true,
        // autoSignInAfterVerification: true,
        // expiresIn: 3600,
    },

    // using code for verifiction

    plugins: [
        emailOTP({
            overrideDefaultEmailVerification: true,
            sendVerificationOnSignUp: true,
            otpLength: 6,
            expiresIn: 300,
            allowedAttempts: 2,
            async sendVerificationOTP({ email, otp, type }) {

                if (type === "email-verification") {

                    await resend.emails.send({
                        from: "onboarding@resend.dev",
                        to: email,
                        subject: "Your Verification Code",
                        html: `<h2>Verification Code</h2>
                               <p>Your code is: <b style="font-size:24px">${otp}</b></p>
                               <p>This code expires in 5 minutes.</p>`
                    })
                }
            },
        }),
    ],


    database: mongodbAdapter(db, {
        // Optional: if you don't provide a client, database transactions won't be enabled.
        client
    }),
});