import React from "react";
import Admission from "../../assets/images/courses/admission.jpg";
import HSC from "../../assets/images/courses/hsc.jpg";
import SSC from "../../assets/images/courses/ssc.webp";
import CourseCard from "../courseCard";

const SampleCouseList = [
  {
    id: 1,
    title: "SSC 2022",
    img: SSC,
    tags: [
      "12 Subjects",
      "200 Live Classes",
      "200 Lecture Sheet",
      "14 Model Tests",
      "14 Solve Sheet",
      "14 Solve Classes",
    ],
  },
  {
    id: 2,
    title: "HSC 2022",
    img: HSC,
    tags: [
      "10 Subjects",
      "400 Live Classes",
      "400 Lecture Sheet",
      "19 Model Tests",
      "19 Solve Sheet",
      "19 Solve Classes",
    ],
  },
  {
    id: 3,
    title: "Pre Admission Medical Course",
    img: Admission,
    tags: [
      "5 Subjects",
      "150 Live Classes",
      "150 Lecture Sheet",
      "25 Quiz Exams",
      "25 Solve Sheet",
    ],
  },
];

export default function SampleCourse() {
  return (
    <>
      <section>
        <div className="container mx-auto my-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-3">
            {SampleCouseList.map((course) => (
              <CourseCard
                key={course.id}
                Img={course.img}
                Title={course.title}
                Tags={course.tags}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
