import React from 'react'
import MainLayout from '../layout/mainLayout'
import Image from 'next/image'
import { useRouter } from 'next/router'

const subjects = {
    general: [
        { id: 1, name: "বাংলা ১ম পত্র", image: '/subjects/Bangla_Goddo.png', catagory: 'general' },
        { id: 2, name: "বাংলা ২য় পত্র", image: '/subjects/Bangla_Grammar.png', catagory: 'general' },
        { id: 3, name: "English 1st Paper", image: '/subjects/English_First.png', catagory: 'general' },
        { id: 4, name: "Englsh 2nd Paper", image: '/subjects/English_Second.png', catagory: 'general' },
        { id: 5, name: "সাধারণ গণিত", image: '/subjects/Maths_One.png', catagory: 'general' },
        { id: 6, name: "তথ্য ও যোগাযোগ প্রযুক্তি", image: '/subjects/ICT.png', catagory: 'general' },
        { id: 7, name: "বাংলাদেশ ও বিশ্ব পরিচয়", image: '/subjects/BGS.png', catagory: 'general' },
    ],
    science: [
        { id: 8, name: "পদার্থবিজ্ঞান", image: '/subjects/Physics_First.png', catagory: 'science' },
        { id: 9, name: "রসায়ন", image: '/subjects/Chemistry_First.png', catagory: 'science' },
        { id: 10, name: "জীববিজ্ঞান", image: '/subjects/Biology_One.png', catagory: 'science' },
        { id: 11, name: "উচ্চতর গণিত", image: '/subjects/Maths_Two.png', catagory: 'science' },
    ],
    business_studies: [
        { id: 12, name: "অর্থায়ন", image: '/subjects/Finance_First.png', catagory: 'business_studies' },
        { id: 13, name: "হিসাববিজ্ঞান", image: '/subjects/Accounting_First.png', catagory: 'business_studies' },
        { id: 14, name: "ব্যবসায় উদ্যোগ", image: '/subjects/Entrepreneurshiip.png', catagory: 'business_studies' },
        { id: 15, name: "সাধারণ বিজ্ঞান", image: '/subjects/Physics_Second.png', catagory: 'business_studies' },

    ],
    huminities: [
        { id: 16, name: "ভূগোল", image: '/subjects/Geography_First.png', catagory: 'huminities' },
        { id: 17, name: "পৌরনীতি ও নাগরিকতা", image: '/subjects/Civics_First.png', catagory: 'huminities' },
        { id: 18, name: "অর্থনীতি", image: '/subjects/Finance_First.png', catagory: 'huminities' },
        { id: 19, name: "ইতিহাস", image: '/subjects/BGS.png', catagory: 'huminities' },
    ]
}

export default function academic() {
    const Router = useRouter()
    return (
        <>
            <MainLayout>
                <section className='bg-gray-50 pt-4'>
                    <div className='container mx-auto'>

                        <div className='flex justify-between'>
                            <div>
                                <ul className='flex flex-wrap rounded-full bg-gray-100 p-1'>
                                    <li className={`px-8 py-1 rounded-full text-white bg-primary font-medium hover:text-white hover:bg-primary cursor-pointer transition-all duration-100`}>Class 1-12</li>
                                    <li className='px-8 py-1 rounded-full text-dark font-medium hover:text-white hover:bg-primary cursor-pointer transition-all duration-100'>Admission Test</li>
                                    <li className='px-8 py-1 rounded-full text-dark font-medium hover:text-white hover:bg-primary cursor-pointer transition-all duration-100'>Skills</li>
                                </ul>
                            </div>
                            <div className='flex items-center space-x-10 text-sm '>
                                <p className='text-dark'>ক্লাস পরিবর্তন</p>
                                <button className='bg-primary text-white py-2 px-5 rounded'>এসএসসি</button>
                            </div>
                        </div>
                        <div className='subjects my-5'>
                            <div className='py-2'>
                                <h1 className='text-dark text-3xl font-bold'>General</h1>
                                <div className='pt-8 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2'>
                                    {subjects.general.map((subject) => (
                                        <div key={subject.id} className='h-20 p-4 my-2 mx-2 rounded flex items-center space-x-2 bg-white shadow-md text-gray-800 font-semibold text-base'>
                                            <Image src={subject.image} objectFit='cover' width='50px' height='50px' />
                                            <p> {subject.name} </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='py-2'>
                                <h1 className='text-dark text-3xl font-bold'>Science</h1>
                                <div className='pt-8 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2'>
                                    {subjects.science.map((subject) => (
                                        <div key={subject.id} className='h-20 p-4 mb-5 mx-5 rounded flex items-center space-x-2 bg-white shadow-md text-gray-800 font-semibold text-base'>
                                            <Image src={subject.image} objectFit='cover' width='50px' height='50px' />
                                            <p> {subject.name} </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='py-2'>
                                <h1 className='text-dark text-3xl font-bold'>Business Studies</h1>
                                <div className='pt-8 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2'>
                                    {subjects.business_studies.map((subject) => (
                                        <div key={subject.id} className='h-20 p-4 mb-5 mx-5 rounded flex items-center space-x-2 bg-white shadow-md text-gray-800 font-semibold text-base'>
                                            <Image src={subject.image} objectFit='cover' width='50px' height='50px' />
                                            <p> {subject.name} </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className='py-2'>
                                <h1 className='text-dark text-3xl font-bold'>Humanities</h1>
                                <div className='pt-8 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2'>
                                    {subjects.huminities.map((subject) => (
                                        <div key={subject.id} className='h-20 p-4 mb-5 mx-5 rounded flex items-center space-x-2 bg-white shadow-md text-gray-800 font-semibold text-base'>
                                            <Image src={subject.image} objectFit='cover' width='50px' height='50px' />
                                            <p> {subject.name} </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </MainLayout>
        </>
    )
}
