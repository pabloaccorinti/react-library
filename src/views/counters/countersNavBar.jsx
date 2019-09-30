import React from "react";
import { Row, Col, Button, Typography } from "antd";
import "./countersNavBar.css";

// Stateless Functional Component
const CountersNavBar = props => {
  const { Title } = Typography;
  return (
    <Row
      className="counters-navbar"
      type="flex"
      justify="space-around"
      align="middle"
    >
      <Col span={18}>
        <Title level={4} className="counters-navbar__title">
          {" "}
          <span>
            {props.counter.filter(c => c.value > 0).length} of{" "}
            {props.counter.length}
          </span>{" "}
          {props.title}
        </Title>
      </Col>
      <Col span={6} className="counters-navbar__reset">
        <Button onClick={() => props.onReset(props.onReset)}>Reset</Button>
      </Col>
    </Row>
  );
};

export default CountersNavBar;
