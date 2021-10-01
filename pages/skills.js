import React from 'react'
import MainLayout from '../layout/mainLayout'
import Image from 'next/image'
import SkillCards from '../components/skillcards'

const courses = {
    languange_learning: [
        { id: 1, title: "ঘরে বসে Spoken English", price: "৳ 450", duration: '20 hr', img: "/course-thumbnail/Spoken English_Landscape.jpg", catagory: "languange_learning" },
        { id: 2, title: "২৪ ঘন্টায় কোরআন শিখি", price: "৳ 450", duration: '24 hr', img: "/course-thumbnail/24 Ghontay Quran_Landscape.jpg", catagory: "languange_learning" },
        { id: 3, title: "English Grammar Crash Course", price: "৳ 450", duration: '20 hr', img: "/course-thumbnail/English-Grammar-Crash-Course.jpg", catagory: "languange_learning" },
    ],
    kids_courses: [
        { id: 4, title: "Kid's English", price: "৳ 450", duration: '20 hr', img: "/course-thumbnail/Kids-English.jpg", catagory: 'kids_courses' },
        { id: 5, title: "Programming for Kids", price: "৳ 450", duration: '3 hr', img: "/course-thumbnail/Programming-for-Kids---Title-Thumbnail.jpg", catagory: 'kids_courses' },
        { id: 6, title: "সুন্দর ও দ্রুত বাংলা হাতের লেখা", price: "৳ 450", duration: '20 hr', img: "/course-thumbnail/Shundor-O-Druto-Haater-Lekha---Landscape-v2.jpg", catagory: 'kids_courses' },
    ],
    skill_development: [
        { id: 7, title: "Facebook Marketing", price: "৳ 450", duration: '25 hr', img: "/course-thumbnail/Facebook Marketing_Landscape.jpg", catagory: 'skill_development' },
        { id: 8, title: "ঘরে বসে Freelancing", price: "৳ 450", duration: '20 hr', img: "/course-thumbnail/images_skills_jpeg_Ghore-Boshe-Freelancing---Title-thumbnail.jpg", catagory: 'skill_development' },
        { id: 9, title: "Microsoft Powerpoint", price: "৳ 450", duration: '8 hr', img: "/course-thumbnail/images_skills_jpeg_Microsoft-PowerPoint-(Beginner-to-Expert)---Title-Thumbnail.jpg", catagory: 'skill_development' },
        { id: 10, title: "Microsoft Excel", price: "৳ 450", duration: '8 hr', img: "/course-thumbnail/images_skills_jpeg_Microsoft-Excel-Beginner-to-Expert---Title-Thumbnail.jpg" },
        { id: 11, title: "Cartoon Animation", price: "৳ 450", duration: '20 hr', img: "/course-thumbnail/Cartoon Animation_Landscape.jpg", catagory: 'skill_development' },
        { id: 12, title: "Presentation & Public Speaking", price: "Free", duration: '20 hr', img: "/course-thumbnail/Presentation and Public Speaking_Landscape.jpg", catagory: 'skill_development' },
        { id: 13, title: "Web Design", price: "৳ 450", duration: '20 hr', img: "/course-thumbnail/images_skills_jpeg_Web-Design---Title-Thumbnail.jpg", catagory: 'skill_development' },
        { id: 14, title: "CV Writing & Interview", price: "৳ 450", duration: '2 hr', img: "/course-thumbnail/CV Writing and Interview Skills_Landscape.jpg", catagory: 'skill_development' },
        { id: 15, title: "Wedding Photography", price: "৳ 450", duration: '3 hr', img: "/course-thumbnail/images_skills_jpeg_Wedding-Photography---Title-Thumbnail.jpg", catagory: 'skill_development' },
        { id: 16, title: "Email Writing", price: "Free", duration: '2 hr', img: "/course-thumbnail/Email Writing_Landscape.jpg", catagory: 'skill_development' },
        { id: 17, title: "How to publish a book", price: "Free", duration: '2 hr', img: "/course-thumbnail/How to Publish a Book_Landscape.jpg", catagory: 'skill_development' },
        { id: 18, title: "Communication Secrets", price: "Free", duration: '2 hr', img: "/course-thumbnail/Communication Secrets_Landscape.jpg", catagory: 'skill_development' },
        { id: 19, title: "আপনি কি লেখক হতে চান?", price: "Free", duration: '2 hr', img: "/course-thumbnail/Apni ki Lekhok hote chan_Landscape.jpg", catagory: 'skill_development' },
        { id: 20, title: "Training of Teachers", price: "Free", duration: '5 hr', img: "/course-thumbnail/Training of Teachers_Landscape.jpg", catagory: 'skill_development' },
    ],
    professional_courses: [
        { id: 21, title: "চাকরী জীবনের প্রস্তুতি", price: "৳ 450", duration: '6 hr', img: "/course-thumbnail/Corporate Grooming_Landscape.jpg", catagory: 'professional_course' },
        { id: 22, title: "Negotiation Skills", price: "৳ 450", duration: '3 hr', img: "/course-thumbnail/Negotiations Skills_Landscape.jpg", catagory: 'professional_course' },
        { id: 23, title: "Career Guidance", price: "৳ 450", duration: '20 hr', img: "/course-thumbnail/Career-Guidance--Title-Thumbnail.jpg", catagory: 'professional_course' },
        { id: 24, title: "Leadership Excellence", price: "৳ 450", duration: '20 hr', img: "/course-thumbnail/Leadership-Excellence-Title-Thumbnail.jpg", catagory: 'professional_course' },
        { id: 25, title: "Unleash Your True Potential", price: "৳ 450", duration: '20 hr', img: "/course-thumbnail/images_skills_jpeg_Unleash---Title-Thumbnail.jpg", catagory: 'professional_course' },
        { id: 26, title: "Trade Sales", price: "৳ 450", duration: '20 hr', img: "/course-thumbnail/Trade Sales - Title thumbnail.jpg", catagory: 'professional_course' },
        { id: 27, title: "FMCG Retail Management", price: "৳ 450", duration: '20 hr', img: "/course-thumbnail/Facebook Marketing_Landscape.jpg", catagory: 'professional_course' },
        { id: 28, title: " Medicine Selling Techniques ", price: "৳ 450", duration: '20 hr', img: "/course-thumbnail/Effective-Medicine---Title-thumbnail.jpg", catagory: 'professional_course' },
    ],
    job_recruitment: [
        { id: 29, title: "বিসিএস প্রিলি কোর্স", price: "৳ 3000", duration: '144 hr', img: "/course-thumbnail/BCS-Preli_Landscape.jpg", catagory: 'job_recruitment' },
        { id: 30, title: "প্রাথমিক সহকারী শিক্ষক নিয়োগ পরীক্ষা কোর্স", price: "৳ 765", duration: '6 hr', img: "/course-thumbnail/Corporate Grooming_Landscape.jpg", catagory: 'job_recruitment' },
    ],
    competitive_exam: [
        { id: 31, title: "ক্যাডেট কলেজ ভর্তি প্রস্তুতি কোর্স ২০২১", price: "৳ 450", duration: '35 hr', img: "/course-thumbnail/Cadet-Coaching-Title---Landscape.jpg", catagory: 'competitive_exam' },
    ]
}

export default function skills() {
    return (
        <>
            <MainLayout>
                <section className='bg-gray-50 pt-4'>
                    <div className='container mx-auto'>
                        <SkillCards title="Language Learning" courses={courses.languange_learning} />
                        <SkillCards title="Kid's Courses" courses={courses.kids_courses} />
                        <SkillCards title="Skill Development" courses={courses.skill_development} />
                        <SkillCards title="Professional Courses" courses={courses.professional_courses} />
                        <SkillCards title="Job Recruitment" courses={courses.job_recruitment} />
                        <SkillCards title="Competitive Exams" courses={courses.competitive_exam} />
                    </div>
                </section>
            </MainLayout>
        </>
    )
}

