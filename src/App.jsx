import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import ProjectsSectionNew from "./components/ProjectsSectionNew";
import ScrollThanksSection from "./components/ScrollThanksSection";
import WorkExperienceSection from "./components/WorkExperienceSection";
import AboutMeSection from "./components/AboutMeSection";
import FloatingImagesSection from "./components/FloatingImagesSection";
import CallToActionSection from "./components/CallToActionSection";
import FooterSection from "./components/FooterSection";
import './index.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration (ms)
      once: true,    // Only animate once
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <main className="bg-white min-h-screen font-slimMono">
      <Navbar />
      <HeroSection />
      <ProjectsSectionNew />
      {/* <ProjectsSection /> */}
      <ScrollThanksSection />
      <WorkExperienceSection />
      <AboutMeSection />
      <FloatingImagesSection />
      <CallToActionSection />
      <FooterSection />
      {/* Add more sections here */}
    </main>
  );
}

export default App;
