import React from 'react'
import Image from 'next/image'
import Logo from '../assets/images/logo.webp'
import { CgLogIn } from 'react-icons/cg';
import { RiMenu3Fill } from 'react-icons/ri'
import { AiOutlineDown } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { firebase, useAuthState } from '../firebase/Firebase';
import { logOut } from '../firebase/auth';

export default function Navbar() {
    const Router = useRouter()
    const auth = firebase.auth()
    const [user, loading] = useAuthState(auth)
    console.log(user)

    return (
        <>
            <header className='shadow-low'>
                <div className='container mx-auto py-3'>
                    <div className='flex justify-between items-center'>
                        <div><Image src={Logo} objectFit='contain' width='140px' className='cursor-pointer' onClick={() => Router.push('/')} /></div>
                        <div className='bg-gray-100 rounded-lg  hidden lg:inline-flex'>
                            <ul className='flex mx-auto  text-dark font-medium'>
                                <li className={`navbarButton ${Router.pathname === "/academic" ? `bg-primary text-white` : null}`} onClick={() => Router.push('/academic')} >Study</li>
                                <li className={`navbarButton ${Router.pathname === "/skills" ? `bg-primary text-white` : null}`} onClick={() => Router.push('/skills')} >Skills</li>
                                <li className='navbarButton'>SSC</li>
                                <li className='navbarButton'>HSC</li>
                            </ul>
                        </div>
                        <div className={`hidden lg:inline-flex`}>
                            <button className={`btn-login ${user ? `lg:hidden` : null}`} onClick={() => Router.push('/auth')}>
                                <CgLogIn className='text-xl' /><span>Log in</span>
                            </button>
                            {loading || !user ? null : (
                                <div className='group relative inline-block h-full'>
                                    <div className='flex space-x-2 justify-center items-center text-dark font-medium cursor-pointer'>
                                        <img src={user.photoURL} className='w-7 rounded-full' />
                                        <p>{user.displayName}</p>
                                        <AiOutlineDown />
                                    </div>
                                    <ul className='group absolute opacity-0 duration-150 transition-all hover:opacity-100 group-hover:opacity-100 w-52 h-full my-2 border text-dark text-sm'>
                                        <li>
                                            <a
                                                className="rounded-t bg-white hover:bg-card py-2 px-4 block whitespace-no-wrap"
                                                href="#"
                                            > ড্যাশবোর্ড </a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                className="rounded-t bg-white hover:bg-card py-2 px-4 block whitespace-no-wrap"
                                                onClick={() => logOut()}
                                            > লগআউট </a
                                            >
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                        <div className='lg:hidden text-dark text-2xl'><RiMenu3Fill /></div>
                    </div>
                </div>
            </header>
        </>
    )
}
