import React from "react";
import AboutUsSection from "../../component/AboutUsSection";
import CardSection from "../../component/CardSection";

import HeroSection from "../../component/HeroSection";
import PlanningAdapSection from "../../component/PlanningAdapSection";
import LoginForm from "../../component/Signin/Signin";

class Homepage extends React.Component {
  render() {
    return (
      <>
        <HeroSection></HeroSection>
        <CardSection></CardSection>
        <AboutUsSection></AboutUsSection>
        <PlanningAdapSection></PlanningAdapSection>
      </>
    );
  }
}
export default Homepage;
