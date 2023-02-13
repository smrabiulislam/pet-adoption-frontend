import React, { Component } from "react";
import { Button } from "react-bootstrap";

import toast from "react-hot-toast";

class Signup extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    photo: "",
    password: "",
    confirmPassword: "",
    imageFile: null,
    imageUrl: null,
  };

  // img url

  handleFileSelect = (event) => {
    this.setState({ imageFile: event.target.files[0] });
  };

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // img code

    const formData = new FormData();
    formData.append('image', this.state.imageFile);

    fetch('https://api.imgbb.com/1/upload?key=c993754e5e7bdf8ca9412defbbd79642', {
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ imageUrl: data.data.url });
      })
      .catch((error) => {
        console.error('Error uploading image:', error);
      });




    // Implement your submit logic here
    const infos = this.state;
    console.log(infos);
    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(infos),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast("Service added successfully!", {
            icon: "👏",
          });
        }
      });
  };

  render() {
    return (
      <div className="Signup">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              required
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
              required
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address:</label>
            <input
              required
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="photo">Photo:</label>
            <input
              required
              type="file"
              className="form-control"
              id="photo"
              name="photo"
              onChange={this.handleFileSelect}
            />
          </div>


          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              required
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              required
              type="password"
              className="form-control"
              id="confirmPassword"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
