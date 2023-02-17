import React, { Component } from "react";
import Profile from "../Profile";

import { Link } from "react-router-dom";

class MyPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pets: [],
      isLoading: true,
      error: null,
    };
  }

  componentDidMount() {
    fetch("http://localhost:5000/pets")
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Something went wrong...");
        }
      })
      .then((data) => {
        this.setState({ pets: data, isLoading: false });
      })
      .catch((error) => {
        this.setState({ error, isLoading: false });
      });
  }

  render() {
    const { pets, isLoading, error } = this.state;
    console.log(pets);
    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading...</p>;
    }
    return (
      <div>
        <Profile></Profile>

        <h1 className="text-center mb-5">My All Pets Collection</h1>

        <div className="row row-cols-1 row-cols-md-3 g-4 w-75 mx-auto mb-5">
          {pets.map((pet) => (
            <div key={pet._id} className="col">
              <div className="card ">
                <img
                  style={{ height: `350px` }}
                  src={pet?.image}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h3 className="card-title">{pet?.name} </h3>
                  <h5> {pet?.adoptionStatus} </h5>

                  <Link to={`/pets/${pet._id}`}>
                    <button
                      type="button"
                      className="btn btn-outline-primary my-3"
                    >
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default MyPosts;
