import React from "react";
import "./CardSection.css";
import Pet1 from "../images/pet1.jpg";
import Pet2 from "../images/pet2.jfif";
import Pet3 from "../images/pet3.jpg";

class CardSection extends React.Component {
  render() {
    return (
      <section className="card-area pb-5">
        <div className="container">
          <h1 className="py-5">Our Pet Collections</h1>
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-7 col-sm-9">
              <div className="single-card card-style-one">
                <div className="card-image">
                  <img src={Pet1} alt="Image" style={{ height: "450px" }} />
                </div>
                <div className="card-content">
                  <h4 className="card-title">
                    <a href="javascript:void(0)">Item title is here</a>
                  </h4>
                  <p className="text">
                    Short description for the ones who look for something new
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-7 col-sm-9">
              <div className="single-card card-style-one">
                <div className="card-image">
                  <img src={Pet2} alt="Image" style={{ height: "450px" }} />
                </div>
                <div className="card-content">
                  <h4 className="card-title">
                    <a href="javascript:void(0)">Item title is here</a>
                  </h4>
                  <p className="text">
                    Short description for the ones who look for something new
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-7 col-sm-9">
              <div className="single-card card-style-one">
                <div className="card-image">
                  <img src={Pet3} alt="Image" style={{ height: "450px" }} />
                </div>
                <div className="card-content">
                  <h4 className="card-title">
                    <a href="javascript:void(0)">Item title is here</a>
                  </h4>
                  <p className="text">
                    Short description for the ones who look for something new
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CardSection;
