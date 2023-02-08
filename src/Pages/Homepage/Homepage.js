import React from "react";
import AboutUsSection from "../../component/AboutUsSection";
import CardSection from "../../component/CardSection";
import ContactSection from "../../component/ContactSection";
import HeroSection from "../../component/HeroSection";
import PlanningAdapSection from "../../component/PlanningAdapSection";

const Homepage = () => {
    return <>
        <HeroSection></HeroSection>
        <CardSection></CardSection>
        <AboutUsSection></AboutUsSection>
        <PlanningAdapSection></PlanningAdapSection>
    </>
};

export default Homepage;
