import React, { Component } from "react";
import { Card } from "antd";

class CardComponent extends Component {
  state = {};
  render() {
    const { id, title, description, imageUrl } = this.props;
    const { Meta } = Card;
    return (
      <React.Fragment>
        <Card hoverable cover={<img alt="example" src={imageUrl} />}>
          <Meta title={title} description={description} />
        </Card>
      </React.Fragment>
    );
  }
}

export default CardComponent;
