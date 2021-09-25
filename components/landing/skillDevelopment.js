import React from 'react'
import Image from 'next/image'
import KidsEnglish from '../../assets/images/courses/Kids-English.jpg'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const SampleSkillDevelopmentCouses = []

export default function SkillDevelopment() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 6
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <section className='bg-card py-14'>
                <div className='container mx-auto'>
                    <h1 className='text-dark text-3xl font-bold text-center mb-4'>
                        Skill Development & Career
                    </h1>
                    <Carousel className='py-5' responsive={responsive} infinite={true}>
                        <div className='w-64 h-52 bg-white p-5 rounded-xl text-dark shadow-lg'>
                            <Image className='rounded-xl' src={KidsEnglish} objectFit='contain' />
                            <h6 className='font-bold'>Kid's English</h6>
                            <p className='text-sm font-medium'>Munzereen Shahid</p>
                        </div>
                        <div className='w-64 h-52 bg-white p-5 rounded-xl text-dark shadow-lg'>
                            <Image className='rounded-xl' src={KidsEnglish} objectFit='contain' />
                            <h6 className='font-bold'>Kid's English</h6>
                            <p className='text-sm font-medium'>Munzereen Shahid</p>
                        </div>
                        <div className='w-64 h-52 bg-white p-5 rounded-xl text-dark shadow-lg'>
                            <Image className='rounded-xl' src={KidsEnglish} objectFit='contain' />
                            <h6 className='font-bold'>Kid's English</h6>
                            <p className='text-sm font-medium'>Munzereen Shahid</p>
                        </div>
                        <div className='w-64 h-52 bg-white p-5 rounded-xl text-dark shadow-lg'>
                            <Image className='rounded-xl' src={KidsEnglish} objectFit='contain' />
                            <h6 className='font-bold'>Kid's English</h6>
                            <p className='text-sm font-medium'>Munzereen Shahid</p>
                        </div>
                        <div className='w-64 h-52 bg-white p-5 rounded-xl text-dark shadow-lg'>
                            <Image className='rounded-xl' src={KidsEnglish} objectFit='contain' />
                            <h6 className='font-bold'>Kid's English</h6>
                            <p className='text-sm font-medium'>Munzereen Shahid</p>
                        </div>
                        <div className='w-64 h-52 bg-white p-5 rounded-xl text-dark shadow-lg'>
                            <Image className='rounded-xl' src={KidsEnglish} objectFit='contain' />
                            <h6 className='font-bold'>Kid's English</h6>
                            <p className='text-sm font-medium'>Munzereen Shahid</p>
                        </div>
                    </Carousel>
                </div>
            </section>
        </>
    )
}
