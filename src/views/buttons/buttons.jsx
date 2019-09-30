import React, { Component } from "react";
import { Button, Typography } from "antd";
import "./buttons.css";

class Buttons extends Component {
  state = {
    title: "Buttons"
  };
  render() {
    const { title } = this.state;
    const { Title } = Typography;
    return (
      <React.Fragment>
        <Title>{title}</Title>
        <div className="buttons">
          <Button type="primary">Primary</Button>
          <Button>Default</Button>
          <Button type="dashed">Dashed</Button>
          <Button type="danger">Danger</Button>
          <Button type="link">Link</Button>
        </div>
      </React.Fragment>
    );
  }
}

export default Buttons;
