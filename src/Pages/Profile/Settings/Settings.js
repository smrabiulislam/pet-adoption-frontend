import React, { Component } from "react";
import { toast } from "react-hot-toast";
import Profile from "../Profile";

class Settings extends Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const firstName = form.firstName.value;
    const lastName = form.lastName.value;
    const title = form.title.value;
    const phone = form.phone.value;
    const address = form.address.value;
    const nationality = form.nationality.value;
    const bio = form.bio.value;

    const updateInfo = {
      firstName,
      lastName,
      title,
      phone,
      address,
      nationality,
      bio,
    };
    console.log(updateInfo);
    const userEmail = localStorage.getItem("userEmail");
    const user = JSON.parse(userEmail);
    const url = `http://localhost:5000/user?email=${user}`;

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(updateInfo),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // update state with new user data
        toast.success("Profile Updated");

        window.location.reload();
      })
      .catch((error) => console.error(error));
  };

  render() {
    return (
      <div>
        <Profile></Profile>
        <h1 className="text-center mb-5 ">Update Profile</h1>
        <form
          onSubmit={this.handleSubmit}
          className="row g-3 w-75 mx-auto mb-5 border border-dark p-4"
        >
          <div className="col-md-6">
            <label for="firstName" className="form-label">
              First Name
            </label>
            <input type="text" className="form-control" id="firstName" />
          </div>
          <div className="col-md-6">
            <label for="lastName" className="form-label">
              Last Name
            </label>
            <input type="text" className="form-control" id="lastName" />
          </div>

          <div className="col-md-6">
            <label for="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Businessman"
            />
          </div>
          <div className="col-md-6">
            <label for="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="+880 157126 1165"
            />
          </div>

          <div className="col-md-6">
            <label for="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-md-6">
            <label for="nationality" className="form-label">
              Nationality
            </label>
            <input
              type="text"
              className="form-control"
              id="nationality"
              placeholder="1234 Main St"
            />
          </div>

          <div className="col-12">
            <label for="bio" className="form-label">
              Bio
            </label>
            <textarea rows={5} type="text" className="form-control" id="bio" />
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Update Profile
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Settings;
