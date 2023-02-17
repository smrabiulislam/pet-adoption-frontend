import React, { Component } from "react";
import Profile from "../Profile";

class ProfilePage extends Component {
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
      .then((user) => this.setState({ user }));
  }
  render() {
    const { user } = this.state;
    return (
      <div>
        <Profile></Profile>

        <div className="card mb-3 mx-auto w-75 mb-5">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                style={{ width: `100%` }}
                src={user?.photo}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h1 className="card-title">
                  {user?.firstName} {user?.lastName}
                </h1>
                <h4>{user?.title ? user?.title : "Title"}</h4>
                <p className="card-text">
                  {user?.bio ? user?.bio : "User Bio"}
                </p>

                <h4 className="mt-5 mb-3">Personal Information:</h4>
                <h6>Email: {user?.email}</h6>
                <h6>Phone: {user?.phone ? user?.phone : "+880 1571261165"}</h6>
                <h6>Address: {user?.address ? user?.address : ""}</h6>
                <h6>
                  Nationality: {user?.nationality ? user?.nationality : ""}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfilePage;
