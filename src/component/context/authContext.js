import React, { Component } from "react";
import { toast } from "react-hot-toast";

const AuthContexts = React.createContext();
export class AuthContext extends Component {
  state = {};
  signUp = (info) => {
    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast("Service added successfully!", {
            icon: "👏",
          });
          this.setState({ show: false });
        }
      });
  };
  logIn = (info) => {
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Now you are our logged in!");
        }
      });
  };

  render() {
    const { logIn, signUp } = this;
    return (
      <>
        <AuthContexts.Provider value={{ logIn, signUp }}>
          {this.props.children}
        </AuthContexts.Provider>
      </>
    );
  }
}

export default AuthContexts;
