import React from 'react';
import Profile from '../Profile';

const AddPet = () => {
    return (
        <div className='mb-5'>
            <Profile></Profile>
            <form className="w-75 mx-auto border border-success p-5">
                <h1 className='text-center pb-5'>Add Pet With details</h1>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" for="form6Example1">Name</label>
                            <input type="text" id="form6Example1" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" for="form6Example2">Type (dog, cat)</label>
                            <input type="text" id="form6Example2" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" for="form6Example1">Adoption Status</label>
                            <input type="text" id="form6Example1" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" for="form6Example2">Height</label>
                            <input type="text" id="form6Example2" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" for="form6Example2">Weight</label>
                            <input type="text" id="form6Example2" className="form-control" />
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" for="form6Example1">Color</label>
                            <input type="text" id="form6Example1" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" for="form6Example2"> Hypoallergenic (yes/no)</label>
                            <input type="text" id="form6Example2" className="form-control" />
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" for="form6Example2"> dietary restrictions</label>
                            <input type="text" id="form6Example2" className="form-control" />
                        </div>
                    </div>
                </div>


                <div className="row mb-4">
                    <div className="col">

                        <div class="form-outline ">
                            <label class="form-label" for="inputGroupFile01">Upload Photo</label>
                            <input type="file" class="form-control" id="inputGroupFile01" />

                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" for="form6Example2"> breed of animal (Poodle,
                                Siamese) </label>
                            <input type="text" id="form6Example2" className="form-control" />
                        </div>
                    </div>

                </div>

                <div className="row mb-4">
                    <div className="col">

                        <div class="form-outline ">
                            <label className="form-label" for="form6Example4">Address</label>
                            <input type="text" id="form6Example4" className="form-control" />

                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <label className="form-label" for="form6Example2"> Price </label>
                            <input type="text" id="form6Example2" className="form-control" />
                        </div>
                    </div>

                </div>











                <div className="form-outline mb-4">
                    <label className="form-label" for="form6Example7">Additional information</label>
                    <textarea className="form-control" id="form6Example7" rows="4"></textarea>
                </div>


                <div className="form-check d-flex  mb-4">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form6Example8" />
                    <label className="form-check-label" for="form6Example8"> Confirm </label>
                </div>


                <button type="submit" className="btn btn-primary btn-block mb-4">Add Pet</button>
            </form>
        </div>
    );
};

export default AddPet;