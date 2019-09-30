import React, { Component } from "react";
import ClockComponent from "../../components/clock-component/clock-component";

class Clocks extends Component {
  state = {
    title: "Clock"
  };
  render() {
    return (
      <React.Fragment>
        <h1 className="view__title">{this.state.title}</h1>
        <ClockComponent />
      </React.Fragment>
    );
  }
}

export default Clocks;
