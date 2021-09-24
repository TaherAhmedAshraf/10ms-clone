import React from 'react'
import Image from 'next/image'
import Logo from '../assets/images/logo.webp'

export default function Navbar() {
    return (
        <>
            <header>
                <div className='container mx-auto my-3'>
                    <div className='flex justify-between'>
                        <div><Image src={Logo} objectFit='cover' /></div>
                        <div className='bg-card rounded-md w-480 px-8 justify-center'>
                            <ul className='flex justify-between items-center'>
                                <li>Study</li>
                                <li>Skills</li>
                                <li>SSC</li>
                                <li>HSC</li>
                            </ul>
                        </div>
                        <div>3</div>
                    </div>
                </div>
            </header>
        </>
    )
}
