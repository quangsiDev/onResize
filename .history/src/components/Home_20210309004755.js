import React from "react";
import BigScreen from "./BigScreen";
import SmallScreen from "./SmallScreen";

export default class ShowWindowDimensions extends React.Component {
  state = { width: 0, height: 0 };
  render() {
    return (
      <span>
        Window size: {this.state.width} x {this.state.height}
        {this.updateRender()}
      </span>
    );
  }
  updateRender = () => {
    let width = window.innerWidth;
    let height = window.innerHeight;
    if (width <= 500) {
      return <SmallScreen></SmallScreen>;
    } else {
      return <BigScreen></BigScreen>;
    }
  };
  updateDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
}
