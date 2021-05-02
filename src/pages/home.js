import React from "react";
// import Navbar from "../components/shared/Navbar/Navbar"
import Hero from "../components/Hero/Hero";
import Help from "../components/Help/Help";

import ServiceSection from "../components/ServiceSection/ServiceSection";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import CounterSection from "../components/CounterSection/CounterSection";
import Projects from "../components/Projects/Projects";
import AboutUs from "../components/AboutUs/AboutUs";
import Partners from "../components/Partners/Partners";
import Testimonial from "../components/Testimonial/Testimonial";

const home = () => {
  return (
    <>
      <Hero />
      <Help />
      <ServiceSection />
      <HowItWorks />
      <CounterSection />
      <WhyChooseUs />
      <Projects />
      <AboutUs />
      <Partners />
      <Testimonial />
    </>
  );
};

export default home;
