import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 2 },
      { id: 2, value: 11 },
      { id: 3, value: 55 },
      { id: 4, value: 4 }
    ]
  };
  render() {
    return (
      <div>
        {this.state.counters.map(counter => (
          <Counter key={counter.id} value={counter.value} />
        ))}
      </div>
    );
  }
}

export default Counters;