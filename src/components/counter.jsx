import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    list: ["bilal", "omar", "mohamed"]
  };

  render() {
    return (
      // we need to add more than one child ,
      // we can use <div> , but thats an extra <div> inside the root div
      //so we use instead React.Fregment
      <React.Fragment>
        {/*arrow function onClick coz u need to pass argus to function but
        this.handelincerment refers to an object in js , then u need to */}
        <button
          onClick={() => {
            this.handelIncerment({ id: this.state.value });
          }}
          className="btn btn-secondary btn-sm m-2"
        >
          +
        </button>
        <span className={this.Class()}>{this.plus()}</span>
        <button
          onClick={this.handelDecrement}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>

        {/*
        <div>
           if condition but dosent have an else 
          {this.state.count === 0 && "Please Count = 0 "}
           to see if the list is empty or what 
          {this.renderTags()}
        </div>*/}
      </React.Fragment>
    );
  }

  Class() {
    let classes = "badge  m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  handelIncerment = id => {
    this.setState({ value: this.state.value + 1 });
  };
  handelDecrement = () => {
    if (this.state.value > 0) this.setState({ value: this.state.value - 1 });
  };

  plus() {
    return this.state.value === 0 ? "ZERO" : this.state.value;
  }
  renderTags() {
    if (this.state.list.length === 0) return <p>The List is Empty!</p>;
    return (
      <ul class="list-group list-group-flush">
        {this.state.list.map(item => (
          <li class="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    );
  }
}

export default Counter;
