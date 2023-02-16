/* import React from "react";



const RightSide = ({ petDetails }) => {




  const { name, type, adoptionStatus, height, weight, color, hypoallergenic, dietaryRestrictions, uploadPhoto, breedOfAnimal, address, price, additionalInformation } = petDetails;
  return (
    <div>
      <div class="card ">
        <img src={uploadPhoto} class="card-img-top" alt="..." />
        <div class="card-body">
          <h1 class="card-title">{name}</h1>
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
            class="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button type="button" class="btn btn-danger">
              {" "}
              Return Pet
            </button>
            <button type="button" class="btn btn-warning">
              Adopt
            </button>
            <button type="button" class="btn btn-success">
              Foster
            </button>
            <button type="button" class="btn btn-primary">
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