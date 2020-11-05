import React from "react";
import "./base.css";
import Container from "./container";
import Navigation from "./navigation";
import Header from "../components/header/header";

class Template extends React.Component {
  render() {
    const { children } = this.props;

    // return (
    //   <React.Fragment>
    //     <Header />
    //     {/* <Container> */}
    //     {/* <Navigation /> */}
    //     {/* {children} */}
    //     {/* </Container> */}
    //     <div style={{ margin: "0 auto", marginTop: "20vh" }}>
    //       {children}
    //     </div>
    //   </React.Fragment>
    // );

    return (
      <React.Fragment>
        <Header />
        <div className="content-area" style={{ margin: "0 auto" }}>
          {children}
        </div>
      </React.Fragment>
    );
  }
}

export default Template;
