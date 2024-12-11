import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import CreativeHero from "@/components/EnhancedHero";
// import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import HeroFeaturesSection from "@/components/HeroFeatureSection";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import ProjectsSection from "@/components/ProjectSection";
import Script from "next/script";

const Hero = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "TaskBust",
    image: "https://taskbust.com/logo.png",
    description:
      "Digital agency specializing in web development,app development, Web3, design, and creative solutions",
    services: [
      "Web Development",
      "App Development",
      "Web3 Solutions",
      "Graphic Design",
      "Video Editing",
    ],
  };
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* <section className="hero" aria-label="hero">
        <div className="container">
          <TitleLogo title="Bust" caption="Task" className="logobg" />
          <h1 className="hero-title">WE BUILD DIGITAL EXPERIENCES</h1>

          <div className="sub-heading">
            <span>.</span>
            <TitleSm title="WEBSITE/APP DEVELOPMENT" /> <span>.</span>
            <TitleSm title="GRAPHIC DESIGNING" /> <span>.</span>
            <TitleSm title="VIDEO EDITING" /> <span>.</span>
            <TitleSm title="WEB3 " />
          </div>
        </div>
      </section> */}
      <CreativeHero />

      <HeroFeaturesSection />

      <ProjectsSection />

      <Expertise />
      <Banner />
      {/* <Testimonial /> */}
      {/* <ShowCase /> */}
      {/* <Brand /> */}
      <div className="py-20">
        <div className="text-center">
          <Title title="Latest news & articles" />
        </div>
        <BlogCard />
      </div>
    </>
  );
};

export default Hero;
