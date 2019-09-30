import React, { Component } from "react";
import { Button } from "antd";

class SpreadOperator extends Component {
  state = {
    title: "Spread operator example",
    numbers: [6, 7, 8],
    sum: 0,
    ingredients: ["salad", "egg", "potato", "cheese", "avocado"],
    sandwich: []
  };

  addNumbers = (a, b, c) => {
    this.setState({
      sum: a + b + c
    });
  };

  addIngredients = () => {
    this.setState({
      sandwich: ["bread", ...this.state.ingredients]
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1 className="view__title">{this.state.title}</h1>
        <h5>{this.state.sum}</h5>
        <Button onClick={() => this.addNumbers(...this.state.numbers)}>
          Add numbers
        </Button>
        <h5>
          {this.state.sandwich.map(ingredient => (
            <p key={ingredient}>{ingredient}</p>
          ))}
        </h5>
        <Button onClick={() => this.addIngredients(...this.state.numbers)}>
          Add ingredients
        </Button>
      </React.Fragment>
    );
  }
}

export default SpreadOperator;
