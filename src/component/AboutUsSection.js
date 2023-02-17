import React from "react";
import Pet from "../images/Brewer-CompanionDogApplication.webp";
import "./AboutUsSection.css";

const AboutUsSection = () => {
  return (
    <div className=" mb-3 p-5 bg">
      <div className="row g-0">
        <div className="col-md-6">
          <img src={Pet} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-6">
          <div className="card-body px-5 text-left">
            <h1 className="card-title my-3 text-center">About Us</h1>
            <h4 className="text-left">
              In North America millions of lost, stray, and abandoned animals
              enter shelters every year. With so many animals available, pet
              adoption is quickly becoming the most popular method of finding a
              new pet.
            </h4>
            <h6>
              Partnered with over 1,800 animal welfare organizations across the
              U.S. and Canada, Petango.com is the first adoptable pet search
              site to exclusively offer real-time updates of adoptable pets in
              shelters. So whether you’re looking to adopt a pet in New York or
              Texas, you can be sure to find a new pet near you.
            </h6>
            <h4>
              There are many reasons for a pet to become available for adoption,
              usually through no fault of their own.
            </h4>
            <h6>
              Many owners will give up their pets after realizing they can’t
              afford to keep them, they no longer want them, or sometimes just
              leave them behind after moving out of town. Although people often
              think that pets available in shelters are all mixed breeds, 25-30%
              of dogs up for adoption are actually purebred – and so are the
              cats!
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
