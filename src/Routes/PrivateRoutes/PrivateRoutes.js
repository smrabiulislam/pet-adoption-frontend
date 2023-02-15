import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import NavigateComponents from "./NavigateComponent";
class PrivateRoutes extends Component {
  state = {
    userInfo: "",
  };
  render() {
    const getItem = localStorage.getItem("signUp");
    const getItemFormLogin = localStorage.getItem("logIn");
    const parseItemFormLogin = JSON.parse(getItemFormLogin);
    const parseItem = JSON.parse(getItem);
    if (parseItem?.email || parseItemFormLogin?.email) {
      console.log("email done");
      return this.props.children;
    } else {
      return <NavigateComponents></NavigateComponents>;
    }
  }
}

export default PrivateRoutes;
