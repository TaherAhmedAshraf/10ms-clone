import Download from "../components/landing/download";
import Hero from "../components/landing/hero";
import SampleCourse from "../components/landing/sampleCourse";
import SkillDevelopment from "../components/landing/skillDevelopment";
import MainLayout from "../layout/mainLayout";

export default function Home() {
  return (
    <>
      <MainLayout>
        <Hero />
        <SampleCourse />
        <SkillDevelopment />
        <Download />
      </MainLayout>
    </>
  )
}
