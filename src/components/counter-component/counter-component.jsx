import React, { Component } from "react";
import "./counter-component.css";
import { Card, Button } from "antd";

class CounterComponent extends Component {
  render() {
    const { counter, onIncrement, onDecrement, onDelete } = this.props;
    const { Meta } = Card;

    function setImgSize(minImgSize, maxImgSize) {
      minImgSize = Math.ceil(minImgSize);
      maxImgSize = Math.floor(maxImgSize);
      return Math.round(Math.random() * (maxImgSize - minImgSize) + minImgSize);
    }

    return (
      <React.Fragment>
        <Card
          className={this.getStockClasses()}
          hoverable
          cover={
            <img
              alt="example"
              src={
                "https://picsum.photos/id/" +
                setImgSize(0, 100) +
                "/" +
                setImgSize(400, 600) +
                "/" +
                setImgSize(400, 600)
              }
            />
          }
          actions={[
            <Button
              size="large"
              onClick={() => onIncrement(counter)}
              disabled={counter.value === counter.stock}
              icon="plus"
              type="link"
            />,
            <Button
              size="large"
              onClick={() => onDecrement(counter)}
              disabled={counter.value === 0}
              icon="minus"
              type="link"
            />,
            <Button
              shape="circle"
              icon="delete"
              type="danger"
              onClick={() => onDelete(counter.id)}
            />
          ]}
        >
          <Meta
            title={
              <h1>
                Product # {counter.id}
                <span className={this.getBadgeClasses()}>
                  {this.formatCount()} of {counter.stock}
                </span>
              </h1>
            }
            description={counter.description}
          />
        </Card>
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = "counter__badge ";
    classes += this.props.counter.value === 0 ? "stock-zero" : "in-stock";
    return classes;
  }

  getStockClasses() {
    let stockClasses = "card counter__stock ";
    stockClasses +=
      this.props.counter.value === this.props.counter.stock
        ? "out-of-stock"
        : "in-stock";
    return stockClasses;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "0" : count;
  }
}

export default CounterComponent;
