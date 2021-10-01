import React from 'react'
import MainLayout from '../layout/mainLayout'
import { useRouter } from 'next/router'
import { signInWithGoogle } from '../firebase/auth'

export default function auth() {
    const Router = useRouter()
    const signIn = () => {
        signInWithGoogle()
        Router.push('/')
    }
    return (
        <MainLayout>
            <div className='flex flex-col justify-center item-center text-center py-12 text-dark bg-gray-50'>
                <h1 className='font-semibold text-xl mb-10'>ঘরে বসে পড়াশোনার সহজ সমাধান</h1>
                <p className='font-light'>আপনি এখনো একাউন্ট রেজিস্টার করে না থাকলে</p>
                <button onClick={() => signIn()} className='bg-success text-white rounded mx-auto w-96 m-2 py-2'> নতুন ফ্রী আকাউন্ট খুলুন </button>
                <p className='font-light'>আগেই অ্যাকাউন্ট খুলেছিলেন? তাহলে</p>
                <button onClick={() => signIn()} className='border border-success hover:bg-success hover:text-white duration-300 transition-all text-dark rounded mx-auto w-96 m-2 py-2'> লগ-ইন করুন </button>
            </div>
        </MainLayout>
    )
}
