import React from 'react';
import Profile from '../Profile';
import Pet1 from '../../../images/pet1.jpg';
import { Link } from 'react-router-dom';

const MyPosts = () => {
    return (
        <div>
            <Profile></Profile>

            <h1 className='text-center mb-5'>My All Pets Collection</h1>

            <div class="row row-cols-1 row-cols-md-3 g-4 w-75 mx-auto mb-5">
                <div class="col">
                    <div class="card h-100">
                        <img src={Pet1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Pet’s name </h3>
                            <h5> Pet’s current status (foster/adopted) </h5>

                            <Link to='/singlepetpage'>
                                <button type="button" class="btn btn-outline-primary my-3">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={Pet1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Pet’s name </h3>
                            <h5> Pet’s current status (foster/adopted) </h5>

                            <Link to='/singlepetpage'>
                                <button type="button" class="btn btn-outline-primary my-3">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={Pet1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Pet’s name </h3>
                            <h5> Pet’s current status (foster/adopted) </h5>

                            <Link to='/singlepetpage'>
                                <button type="button" class="btn btn-outline-primary my-3">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src={Pet1} class="card-img-top" alt="..." />
                        <div class="card-body">
                            <h3 class="card-title">Pet’s name </h3>
                            <h5> Pet’s current status (foster/adopted) </h5>

                            <Link to='/singlepetpage'>
                                <button type="button" class="btn btn-outline-primary my-3">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default MyPosts;