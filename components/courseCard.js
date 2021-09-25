import React from 'react'
import { FaCheckCircle } from 'react-icons/fa'
import { BsArrowRightShort } from 'react-icons/bs'
import Image from 'next/image'

export default function CourseCard({ Img, Title, Tags }) {
    return (
        <div className='bg-card py-6 px-3 rounded-lg md:mr-3 text-center'>
            <Image src={Img} objectFit='cover' />
            <h2 className='text-2xl text-dark font-bold text-center my-3'>{Title}</h2>
            <div className='flex flex-wrap justify-center'>
                {Tags.map((tag) => (
                    <span className='course-tag'><FaCheckCircle className='text-success' /><p>{tag}</p></span>
                ))}
            </div>
            <button className='bg-success text-white flex mx-auto space-x-1 py-2 px-5 rounded mt-8'><span>জয়েন করুন</span><BsArrowRightShort className='text-2xl' /></button>
        </div>
    )
}
