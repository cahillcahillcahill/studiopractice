import React from "react";
import AboutText from "../components/AboutText";

class About extends React.Component {
  render() {
    return (
      <div>
        <div className="page-header">our story</div>
        <AboutText />
      </div>
    );
  }
}

export default About;
