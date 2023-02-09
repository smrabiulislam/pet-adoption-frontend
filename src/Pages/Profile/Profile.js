import React from "react";
import { NavLink } from "react-router-dom";


import './Profile.css';


class Profile extends React.Component {
    render() {
        return (
            <>


                <div class="row">
                    <div class="col-md-12">
                        <div id="content" class="content content-full-width mb-5">

                            <div class="profile">
                                <div class="profile-header">

                                    <div class="profile-header-cover"></div>

                                    <div class="profile-header-content">

                                        <div class="profile-header-img">
                                            <img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" />
                                        </div>

                                        <div class="profile-header-info">
                                            <h4 class="m-t-10 m-b-5">Md Shijan Ali</h4>
                                            <p class="m-b-10">UXUI + Frontend Developer</p>
                                            <NavLink to="/edit" class="btn btn-sm btn-info mb-2">Edit Profile</NavLink>
                                        </div>

                                    </div>

                                    <ul class="profile-header-tab nav nav-tabs">
                                        <li class="nav-item"><NavLink to="/my-posts" class="">MY POSTS</NavLink></li>
                                        <li class="nav-item"><NavLink to="/about" class="">ABOUT</NavLink></li>
                                        <li class="nav-item"><NavLink to="/settings" class="">SETTINGS</NavLink></li>

                                        <li class="nav-item"><NavLink to="/add-pet" class="">ADD PETS</NavLink></li>
                                    </ul>

                                </div>
                            </div>




                        </div>
                    </div>
                </div>



            </>
        );
    }
}

export default Profile;
