import React from 'react'
import Image from 'next/image'
import Video from '../../assets/icons/video.svg'
import Quiz from '../../assets/icons/quiz.svg'
import Note from '../../assets/icons/smartbook.svg'
import Blog from '../../assets/icons/blog.svg'
import Studying from '../../assets/images/studying.svg'


const cards = [
    { id: 1, head: "19,440+", sub: 'Video tutorial', img: Video },
    { id: 2, head: "49,530+", sub: 'Quiz', img: Quiz },
    { id: 3, head: "1,118+", sub: 'Note', img: Note },
    { id: 4, head: "1,330+", sub: 'Blog', img: Blog }
]

export default function Download() {
    return (
        <>
            <section className='bg-card py-14'>
                <div className='container mx-auto'>
                    <div>
                        <h1 className='text-3xl text-dark font-bold text-center'>Learn <span className='text-primary'>As Your Wish</span></h1>
                        <p className='text-dark text-center py-8 font-medium'>Want to build a deep, solid understanding of English, Math, Science, and more? Access<br /> our 20,000+ videos, quizzes, interactive lessons to freshen up your mind.</p>
                        <button className='bg-primary text-white font-medium rounded flex mx-auto py-2 px-5'>Download App</button>
                        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-6'>
                            {cards.map((card) => (
                                <div key={card.id} className='bg-white w-64 h-24 p-4 flex items-center rounded-lg shadow-xl'>
                                    <div className='flex items-center pr-3'><Image src={card.img} objectFit='contain' /></div>
                                    <div className='text-dark'>
                                        <h3 className='font-bold text-2xl'>{card.head}</h3>
                                        <p className='font-medium'>{card.sub}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='flex justify-center my-6'><Image src={Studying} objectFit='contain' /></div>
                    </div>
                </div>
            </section>
        </>
    )
}
