import React from 'react'
import Image from 'next/image'
import Logo from '../assets/images/logo.webp'
import { CgLogIn } from 'react-icons/cg';
import { RiMenu3Fill } from 'react-icons/ri'

export default function Navbar() {
    return (
        <>
            <header>
                <div className='container mx-auto my-3'>
                    <div className='flex justify-between items-center'>
                        <div><Image src={Logo} objectFit='contain' width='140px' /></div>
                        <div className='bg-gray-100 rounded-lg  hidden lg:inline-flex'>
                            <ul className='flex mx-auto  text-dark font-medium'>
                                <li className='navbarButton'>Study</li>
                                <li className='navbarButton'>Skills</li>
                                <li className='navbarButton'>SSC</li>
                                <li className='navbarButton'>HSC</li>
                            </ul>
                        </div>
                        <div className='hidden lg:inline-flex'>
                            <button className='bg-dark text-white font-medium py-2 px-5 rounded flex justify-center items-center space-x-1'>
                                <CgLogIn className='text-xl' /><span>Log in</span>
                            </button>
                        </div>
                        <div className='lg:hidden text-dark text-2xl'><RiMenu3Fill /></div>
                    </div>
                </div>
            </header>
        </>
    )
}
