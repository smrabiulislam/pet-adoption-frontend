import React, { Component } from "react";
import { toast } from "react-hot-toast";

const AuthContexts = React.createContext();
export class AuthContext extends Component {
  state = {
    sign: {},
  };
  signUp = (info) => {
    this.setState({ sign: info });
    fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          localStorage.setItem("signUp", JSON.stringify(info));
          toast("Service added successfully!", {
            icon: "👏",
          });
        }
      });
  };
  logIn = (info) => {
    localStorage.setItem("logIn", JSON.stringify(info));
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
  logOut = () => {
    localStorage.clear();
  };

  render() {
    const { sign } = this.state;
    const { logIn, signUp, logOut } = this;
    console.log(sign);

    return (
      <>
        <AuthContexts.Provider value={{ logIn, signUp, sign, logOut }}>
          {this.props.children}
        </AuthContexts.Provider>
      </>
    );
  }
}

export default AuthContexts;
