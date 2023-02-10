import React from 'react';
import Pet from '../../../images/pet1.jpg';

const RightSide = () => {
    return (
        <div>
            <div class="card ">
                <img src={Pet} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h1 class="card-title">Pet Name</h1>
                    <h4>Adoption Status: </h4>
                    <h4> Height: </h4>
                    <h4> Weight:</h4>
                    <h4>Color: </h4>
                    <h4>Bio: </h4>
                    <h4> Hypoallergenic (yes/no): </h4>
                    <h4> dietary restrictions: </h4>
                    <h4> breed of animal : </h4>

                    <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                        <button type="button" class="btn btn-danger"> Return Pet</button>
                        <button type="button" class="btn btn-warning">Adopt</button>
                        <button type="button" class="btn btn-success">Foster</button>
                        <button type="button" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RightSide;