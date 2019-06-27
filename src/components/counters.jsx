import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 2, title: "home" },
      { id: 2, value: 11, title: "sports" },
      { id: 3, value: 55, title: "cars" },
      { id: 4, value: 4, title: "mobiles" }
    ]
  };
  handelDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  handelReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handelIncerment = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handelDecrement = () => {
    if (this.state.value > 0) this.setState({ value: this.state.value - 1 });
  };

  render() {
    return (
      <div>
        <h1>Shopping Cart</h1>
        <button
          className="btn btn-warning btn-sm m-2"
          onClick={this.handelReset}
        >
          Reset
        </button>
        {this.state.counters.map(counter => (
          <Counter
            key={counter.id}
            onDel={this.handelDelete}
            counter={counter}
            onIncrement={this.handelIncerment}
          >
            <h3>{counter.title}</h3>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
