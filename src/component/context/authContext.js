import React, { Component } from "react";

const AuthContexts = React.createContext();
export class AuthContext extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    photo: "",
    password: "",
  };
  signUp = (info) => {
    this.setState({});
  };
  logIn = (firstName, lastName, email, photo, password) => {
    this.setState({});
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
