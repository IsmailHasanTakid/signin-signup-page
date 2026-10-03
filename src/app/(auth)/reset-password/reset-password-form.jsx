"use client"
import { useSearchParams } from 'next/navigation';
import React from 'react';

const ResetPasswordForm = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get('token');
    
    const handleResetPassword = async(e)=>{
        e.preventDefault
        const formData = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formData.entries());
    return (
        <div>
            <h2>now give me a new password</h2>
            
        </div>
    );
};

export default ResetPasswordForm;