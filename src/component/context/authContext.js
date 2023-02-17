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
          localStorage.setItem("userEmail", JSON.stringify(info?.email));
          toast("Successfully Sign up!", {
            icon: "👏",
          });
          window.location.reload();
        }
      });
  };
  logIn = (info) => {
    localStorage.setItem("userEmail", JSON.stringify(info?.email));
    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.email) {
          toast.success("Now you are our logged in!");
          window.location.reload();
        }
      });
  };
  logOut = () => {
    localStorage.clear();
    window.location.reload();
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
