import React, { Component } from "react";
import Slider from "react-slick";
import { Typography } from "antd";
class SlickSlider extends Component {
  state = {
    title: "Slick Slider"
  };
  render() {
    const { title } = this.state;
    const { Title } = Typography;
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      centerMode: true,
      centerPadding: "20%"
    };
    return (
      <React.Fragment>
        <Title>{title}</Title>
        <Slider {...settings}>
          <img src="https://picsum.photos/id/29/600/400" alt="" />
          <img src="https://picsum.photos/id/30/600/400" alt="" />
          <img src="https://picsum.photos/id/28/600/400" alt="" />
          <img src="https://picsum.photos/id/27/600/400" alt="" />
          <img src="https://picsum.photos/id/26/600/400" alt="" />
          <img src="https://picsum.photos/id/25/600/400" alt="" />
        </Slider>
      </React.Fragment>
    );
  }
}

export default SlickSlider;
