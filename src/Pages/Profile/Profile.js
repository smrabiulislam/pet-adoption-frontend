import React from "react";
import { NavLink } from "react-router-dom";

import "./Profile.css";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    const userEmail = localStorage.getItem("userEmail");
    const user = JSON.parse(userEmail);
    const url = `http://localhost:5000/user?email=${user}`;
    console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((user) => {
        this.setState({ user });
      });
  }
  render() {
    const { user } = this.state;

    return (
      <>
        <div className="row">
          <div className="col-md-12">
            <div id="content" className="content content-full-width mb-5">
              <div className="profile">
                <div className="profile-header">
                  <div className="profile-header-cover"></div>

                  <div className="profile-header-content">
                    <div
                      className="profile-header-img"
                      style={{ width: `200px`, height: `200px` }}
                    >
                      <img
                        style={{ width: `100%`, height: `100%` }}
                        src={user?.photo}
                        alt=""
                      />
                    </div>

                    <div
                      className="profile-header-info "
                      style={{ height: `200px`, marginLeft: `220px` }}
                    >
                      <h4 className="m-t-10 m-b-5 ">
                        {user?.firstName} {user?.lastName}
                      </h4>
                      <p className="m-b-10">
                        {user?.title ? user?.title : "Title"}
                      </p>
                      <NavLink
                        to="/settings"
                        className="btn btn-sm btn-info mb-2"
                      >
                        Edit Profile
                      </NavLink>
                    </div>
                  </div>

                  <ul className="profile-header-tab nav nav-tabs">
                    <li className="nav-item">
                      <NavLink to="/profile" className="">
                        PROFILE
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/my-posts" className="">
                        MY POSTS
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink to="/settings" className="">
                        SETTINGS
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink to="/add-pet" className="">
                        ADD PETS
                      </NavLink>
                    </li>
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
