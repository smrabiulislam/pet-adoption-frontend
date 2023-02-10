import React from 'react';
import Profile from '../Profile';
import Pet from '../../../images/pet1.jpg';

const ProfilePage = () => {
    return (
        <div>
            <Profile></Profile>

            <div class="card mb-3 mx-auto w-75 mb-5" >
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src={Pet} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h1 class="card-title">Md Shijan Ali</h1>
                            <h4>(Front End Developer)</h4>
                            <p class="card-text">I'm Md Shijan Ali as A Professional Front End Developer. I have worked and studied in this field last 3 years. I have completed some full-stack applications using Mern Stack Truck. I'm a student of Mechanical Engineering. But I loved Coding. So I moved into this field. I also worked in WordPress last 3 years for some international Companies on Fiverr.</p>


                            <h4 className='mt-5 mb-3'>Personal Information:</h4>
                            <h6>Email: shijan135@gmail.com</h6>
                            <h6>Phone: +880 1571261165</h6>
                            <h6>Address: Dinajpur, Bangladesh</h6>
                            <h6>Nationality: Bangladeshi</h6>



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;