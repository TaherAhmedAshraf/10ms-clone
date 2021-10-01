import React from 'react'

export default function SkillCards({ title, courses }) {
    return (
        <div className='text-dark'>
            <h4 className='font-bold text-xl'>{title}</h4>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-5'>
                {courses.map((course) => (
                    <div key={course.id} className='bg-white mx-2 my-2 p-3 rounded-lg shadow-md cursor-pointer'>
                        <img className='rounded-lg' src={course.img} objectFit='contain' />
                        <h6 className='text-base font-bold py-1'>{course.title}</h6>
                        <div className='flex justify-between pt-2 pb-4'>
                            <div className='text-green-400 text-xl font-bold'><span>{course.price}</span></div>
                            <div className='rounded-full px-4 flex justify-center items-center text-xs text-primary font-medium bg-rose-200'>{course.duration}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
