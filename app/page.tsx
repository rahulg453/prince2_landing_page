import SpecialOfferBanner from "./components/layout/SpecialOfferBanner";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Prince2Hero from "./components/sections/Prince2Hero";
import CertificationOverview from "./components/sections/CertificationOverview";
import TrainingExcellence from "./components/sections/TrainingExcellence";
import Roadmap from "./components/sections/Roadmap";
import TrainingMethods from "./components/sections/TrainingMethods";
import PopularCourses from "./components/sections/PopularCourses";
import MeetOurTrainers from "./components/sections/MeetOurTrainers";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import ProjectManagementCourses from "./components/sections/Courses";
import BenefitsOfChoosingUs from "./components/sections/BenefitsOfChoosingUs";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import WhyTrainingWithUs from "./components/sections/WhyTrainingWithUs";

export default function Home() {
  return (
    <>
      <SpecialOfferBanner />
      <Navbar />
      <main className="overflow-hidden">
        <Prince2Hero />
        <CertificationOverview />
        <TrainingExcellence />
        <Roadmap />
        <TrainingMethods />
        <PopularCourses />
        {/* <MeetOurTrainers /> */}
        <WhyTrainingWithUs />
        <WhyChooseUs />
        <ProjectManagementCourses />
        <BenefitsOfChoosingUs />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
