import React from "react";
import CardSection from "../../component/CardSection";
import ContactSection from "../../component/ContactSection";
import HeroSection from "../../component/HeroSection";

class Homepage extends React.Component {
  render() {
    return (
      <>
        <HeroSection></HeroSection>
        <CardSection></CardSection>
      </>
    );
  }
}

export default Homepage;
