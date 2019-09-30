import React, { Component } from "react";
import projects from "../../data/portfolio.json";
import CardComponent from "../../components/card-component/card-component";
import { Row, Col, Typography } from "antd";

class Cards extends Component {
  state = {
    title: "Cards"
  };

  render() {
    const { Title } = Typography;
    return (
      <React.Fragment>
        <Title>{this.state.title}</Title>
        <Row gutter={16}>
          {projects.map(project => (
            <Col key={project.id} span={8} className="card__item">
              <CardComponent
                id={project.id}
                title={project.title}
                imageUrl={project.images[0]}
                description={project.description}
              />
            </Col>
          ))}
        </Row>
      </React.Fragment>
    );
  }
}

export default Cards;
