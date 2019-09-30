import React, { Component } from "react";
import CounterComponent from "../../components/counter-component/counter-component";
import CountersNavBar from "./countersNavBar";
import "./counters.scss";
import { Typography, Row, Col, Affix } from "antd";

class Counters extends Component {
  state = {
    title: "Counters",
    counters: [
      {
        id: "1",
        value: 0,
        stock: 10,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ullam voluptatum quisquam aspernatur assumenda. Officiis repudiandae accusamus distinctio, itaque, perspiciatis ipsum quibusdam exercitationem explicabo quidem excepturi ullam deleniti tempore ducimus!"
      },
      {
        id: "02",
        value: 0,
        stock: 5,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ullam voluptatum quisquam aspernatur exercitationem explicabo quidem excepturi ullam deleniti tempore ducimus!"
      },
      {
        id: "03",
        value: 0,
        stock: 8,
        description:
          "Officiis repudiandae accusamus distinctio, itaque, perspiciatis ipsum quibusdam exercitationem explicabo quidem excepturi ullam deleniti tempore ducimus!"
      },
      {
        id: "04",
        value: 0,
        stock: 2,
        description:
          "Explicabo quidem excepturi ullam deleniti tempore ducimus!"
      },
      {
        id: "05",
        value: 0,
        stock: 10,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ullam voluptatum quisquam aspernatur assumenda. Officiis repudiandae accusamus distinctio, itaque, perspiciatis ipsum quibusdam exercitationem explicabo quidem excepturi ullam deleniti tempore ducimus!"
      },
      {
        id: "06",
        value: 0,
        stock: 5,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ullam voluptatum quisquam."
      },
      {
        id: "07",
        value: 0,
        stock: 8,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ullam voluptatum quisquam aspernatur assumenda. Officiis repudiandae accusamus distinctio, itaque, perspiciatis ipsum quibusdam exercitationem explicabo quidem excepturi ullam deleniti tempore ducimus!"
      },
      {
        id: "08",
        value: 0,
        stock: 2,
        description:
          "Amet consectetur adipisicing elit. Voluptate ullam voluptatum quisquam aspernatur!"
      },
      {
        id: "09",
        value: 0,
        stock: 10,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ullam voluptatum quisquam aspernatur assumenda. Officiis repudiandae accusamus distinctio, itaque, perspiciatis ipsum quibusdam exercitationem explicabo quidem excepturi ullam deleniti tempore ducimus!"
      },
      {
        id: "10",
        value: 0,
        stock: 5,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ullam voluptatum quisquam aspernatur exercitationem explicabo quidem excepturi ullam deleniti tempore ducimus!"
      },
      {
        id: "11",
        value: 0,
        stock: 8,
        description:
          "Officiis repudiandae accusamus distinctio, itaque, perspiciatis ipsum quibusdam exercitationem explicabo quidem excepturi ullam deleniti tempore ducimus!"
      },
      {
        id: "12",
        value: 0,
        stock: 2,
        description:
          "Explicabo quidem excepturi ullam deleniti tempore ducimus!"
      },
      {
        id: "13",
        value: 0,
        stock: 10,
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate ullam voluptatum quisquam aspernatur assumenda. Officiis repudiandae accusamus distinctio, itaque, perspiciatis ipsum quibusdam exercitationem explicabo quidem excepturi ullam deleniti tempore ducimus!"
      }
    ]
  };

  handleDelete = counterId => {
    console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };

  render() {
    const { title, counters } = this.state;
    const { Title } = Typography;
    return (
      <div className="counters">
        <Title>{title}</Title>
        <Affix offsetTop={16} onChange={affixed => console.log(affixed)}>
          <CountersNavBar
            title={title}
            counter={counters}
            onReset={this.handleReset}
          />
        </Affix>
        <Row gutter={16} type="flex" align="top">
          {counters.map(counter => (
            <Col span={6} className="counters__item" key={counter.id}>
              <CounterComponent
                counter={counter}
                onDelete={this.handleDelete}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                selected
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  }
}

export default Counters;
