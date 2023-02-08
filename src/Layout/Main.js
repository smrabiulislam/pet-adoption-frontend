import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../component/Shared/Footer/Footer";
import Header from "../component/Shared/Header/Header";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
      </div>
    );
  }
}

export default Main;
