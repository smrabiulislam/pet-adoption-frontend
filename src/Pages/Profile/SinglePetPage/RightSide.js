/* import React from "react";



const RightSide = ({ petDetails }) => {




  const { name, type, adoptionStatus, height, weight, color, hypoallergenic, dietaryRestrictions, uploadPhoto, breedOfAnimal, address, price, additionalInformation } = petDetails;
  return (
    <div>
      <div className="card ">
        <img src={uploadPhoto} className="card-img-top" alt="..." />
        <div className="card-body">
          <h1 className="card-title">{name}</h1>
          <h4>Adoption Status: {adoptionStatus}</h4>
          <h4>Type: {type}</h4>
          <h4> Height: {height}</h4>
          <h4> Weight: {weight}</h4>
          <h4>Color: {color}</h4>
          <h4>Bio: </h4>
          <h4> Hypoallergenic (yes/no): {hypoallergenic}</h4>
          <h4> dietary restrictions: {dietaryRestrictions}</h4>
          <h4> breed of animal : {breedOfAnimal}</h4>
          <h4> Address : {address}</h4>
          <h4> AdditionalInformation : {additionalInformation}</h4>
          <h4> Price : ${price}</h4>

          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button type="button" className="btn btn-danger">
              {" "}
              Return Pet
            </button>
            <button type="button" className="btn btn-warning">
              Adopt
            </button>
            <button type="button" className="btn btn-success">
              Foster
            </button>
            <button type="button" className="btn btn-primary">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
 */
