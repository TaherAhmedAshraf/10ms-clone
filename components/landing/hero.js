import React from 'react'
import Image from 'next/image'
import Academia from '../../assets/images/academic.webp'
import Admission from '../../assets/images/admission.webp'
import University from '../../assets/images/university.webp'
import HeroImage from '../../assets/images/heroImage.png'


export default function Hero() {
    return (
        <>
            <section>
                <div className='container mx-auto'>
                    <div className='bg-card w-full grid grid-cols-1 lg:grid-cols-2 p-10 rounded-2xl'>
                        <div className='space-y-5'>
                            <h1 className='font-semibold text-5xl text-dark leading-snug'><span className='text-primary'>Experience</span> Better Learning.</h1>
                            <p className='text-sm text-dark font-medium'>Choose any topic from class 1-12, Admission Test, University, Skill Development and enjoy your personalized learning journey. <span className='text-primary font-semibold'>Select your path & start</span></p>
                            <div className='pt-5 flex space-x-5'>
                                <div className='heroCard'><Image src={Academia} width='80px' objectFit='contain' /><h6>Class 1-12</h6></div>
                                <div className='heroCard'><Image src={Admission} width='80px' objectFit='contain' /><h6>Class 1-12</h6></div>
                                <div className='heroCard'><Image src={University} width='80px' objectFit='contain' /><h6>Class 1-12</h6></div>
                            </div>
                        </div>
                        <div className='px-8'><Image src={HeroImage} /></div>
                    </div>
                </div>
            </section>
        </>
    )
}
