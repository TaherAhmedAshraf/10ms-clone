import React from 'react'
import Image from 'next/image'
import LogoWhite from '../assets/logo-white.png'
import PlayStore from '../assets/playstore.svg'
import { FaFacebookSquare, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { AiFillInstagram } from 'react-icons/ai'

export default function Footer() {
    return (
        <footer className='bg-footer py-10'>
            <div className='container mx-auto'>
                <div className='flex space-x-4'>
                    <div className='max-w-sm'>
                        <Image src={LogoWhite} objectFit='contain' />
                        <div className='flex my-5'>
                            <div className='bg-gray-800 text-xl text-white cursor-pointer rounded-md p-3 mr-4'><FaFacebookSquare /></div>
                            <div className='bg-gray-800 text-xl text-white cursor-pointer rounded-md p-3 mr-4'><AiFillInstagram /></div>
                            <div className='bg-gray-800 text-xl text-white cursor-pointer rounded-md p-3 mr-4'><FaLinkedin /></div>
                            <div className='bg-gray-800 text-xl text-white cursor-pointer rounded-md p-3 mr-4'><FaYoutube /></div>
                        </div>
                        <p className='text-white text-sm pb-5'>সমস্যার ক্ষেত্রে: ০৯৬১-২০০-১০১০ (সকাল ১০টা - রাত ১০টা) অথবা মেসেজ করুন 10MSHelp to ২৬৯৬৯ (২৪x৭)</p>
                        <Image src={PlayStore} objectFit='contain' />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-3 w-full text-white'>
                        <div className='mx-2'>
                            <h1 className='mb-8 font-bold text-lg'>কোম্পানি</h1>
                            <ul className='text-gray-300 font-medium '>
                                <li>Privacy policy</li>
                                <li>Terms of use</li>
                                <li>Refund policy</li>
                            </ul>
                        </div>
                        <div className='mx-2'>
                            <h1 className='mb-8 font-bold text-lg'>ক্র্যাশ কোর্স</h1>
                            <ul className='text-gray-300 font-medium '>
                                <li>SSC Crash Course 2022</li>
                                <li>HSC Crash Course 2021</li>
                                <li>HSC Crash Course 2022</li>
                                <li>Pre Admission Medical 2021</li>
                            </ul>
                        </div>
                        <div className='mx-2'>
                            <h1 className='mb-8 font-bold text-lg'>জনপ্রিয়</h1>
                            <ul className='text-gray-300 font-medium '>
                                <li>ঘরে বসে Spoken English</li>
                                <li>২৪ ঘণ্টায় কুরআন শিখি</li>
                                <li>English Grammar</li>
                                <li>Microsoft PowerPoint</li>
                                <li>Facebook Marketing</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className='border border-gray-600 my-12' />
                <p className='text-white text-xs text-center'>স্বত্ব © ২০১৫ - ২০২১ টেন মিনিট স্কুল কতৃক সর্বস্বত্ব সংরক্ষিত</p>
            </div>
        </footer>
    )
}
