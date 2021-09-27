import React from 'react'
import MainLayout from '../layout/mainLayout'
import Image from 'next/image'

// GENERAL SUBJECTS
import Bangla_Goddo from '../assets/images/subjects/Bangla_Goddo.png'
import Bangla_Grammar from '../assets/images/subjects/Bangla_Grammar.png'
import English_First from '../assets/images/subjects/English_First.png'
import English_Second from '../assets/images/subjects/English_Second.png'
import General_Math from '../assets/images/subjects/Maths_One.png'
import ICT from '../assets/images/subjects/ICT.png'
import BGS from '../assets/images/subjects/BGS.png'

// SCIENCE SUBJECTS
import Physics_First from '../assets/images/subjects/Physics_First.png'
import Chemistry_First from '../assets/images/subjects/Chemistry_First.png'
import Biology from '../assets/images/subjects/Biology_One.png'
import Higher_Math from '../assets/images/subjects/Maths_Two.png'

// BUSINESS STUDIUES
import Finance from '../assets/images/subjects/Finance_First.png'
import Accounting from '../assets/images/subjects/Accounting_First.png'
import Entrepreneurshiip from '../assets/images/subjects/Entrepreneurshiip.png'
import General_Science from '../assets/images/subjects/Physics_Second.png'

// HUMINITISE
import Geography_First from '../assets/images/subjects/Geography_First.png'
import Civics_First from '../assets/images/subjects/Civics_First.png'
import Finance_First from '../assets/images/subjects/Finance_First.png'

const subjects = {
    general: [
        { id: 1, name: "বাংলা ১ম পত্র", image: Bangla_Goddo },
        { id: 2, name: "বাংলা ২য় পত্র", image: Bangla_Grammar },
        { id: 3, name: "English 1st Paper", image: English_First },
        { id: 4, name: "Englsh 2nd Paper", image: English_Second },
        { id: 5, name: "সাধারণ গণিত", image: General_Math },
        { id: 6, name: "তথ্য ও যোগাযোগ প্রযুক্তি", image: ICT },
        { id: 7, name: "বাংলাদেশ ও বিশ্ব পরিচয়", image: BGS },
    ],
    science: [
        { id: 8, name: "পদার্থবিজ্ঞান", image: Physics_First },
        { id: 9, name: "রসায়ন", image: Chemistry_First },
        { id: 10, name: "জীববিজ্ঞান", image: Biology },
        { id: 11, name: "উচ্চতর গণিত", image: Higher_Math },
    ],
    business_studies: [
        { id: 12, name: "অর্থায়ন", image: Finance },
        { id: 13, name: "হিসাববিজ্ঞান", image: Accounting },
        { id: 14, name: "ব্যবসায় উদ্যোগ", image: Entrepreneurshiip },
        { id: 15, name: "সাধারণ বিজ্ঞান", image: General_Science },

    ],
    huminities: [
        { id: 16, name: "ভূগোল", image: Geography_First },
        { id: 17, name: "পৌরনীতি ও নাগরিকতা", image: Civics_First },
        { id: 18, name: "অর্থনীতি", image: Finance_First },
        { id: 19, name: "ইতিহাস", image: BGS },
    ]
}

export default function academic() {
    return (
        <>
            <MainLayout>
                <section className='bg-gray-50 pt-4'>
                    <div className='container mx-auto'>

                        <div className='flex justify-between'>
                            <div>
                                <ul className='flex flex-wrap rounded-full bg-gray-100 p-1'>
                                    <li className='px-8 py-1 rounded-full text-dark font-medium hover:text-white hover:bg-primary cursor-pointer transition-all duration-100'>Class 1-12</li>
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
