import React from 'react';
import './PlanningAdapSection.css';

const PlanningAdapSection = () => {
    return (
        <div className='bg-white minbox'>
            <div class="row p-5">
                <div class="col-md-4">

                    <div class="card-body">
                        <h5 class="card-title text-center text">Checklist for New Adopters</h5>
                        <p class="card-text mb-4 text-center">Help make the transition, as smooth as possible.</p>
                        <div className='text-center'>
                            <button type="button" class="btn btn-outline-info rounded-pill text fw-bold">LEARN MORE</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">

                    <div class="card-body">
                        <h5 class="card-title text-center text">COVID-19 Resources</h5>
                        <p class="card-text mb-4 text-center">Get the latest on adoption processes, learn how local shelters and rescue groups are adapting and find out what you can do to help dogs and cats in need right now.</p>
                        <div className='text-center'>
                            <button type="button" class="btn btn-outline-info rounded-pill text fw-bold">LEARN MORE</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">

                    <div class="card-body">
                        <h5 class="card-title text-center text">Pet Adoption FAQs</h5>
                        <p class="card-text mb-4 text-center">Get answers to questions you haven't thought of.</p>
                        <div className='text-center'>
                            <button type="button" class="btn btn-outline-info rounded-pill text fw-bold">LEARN MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlanningAdapSection;