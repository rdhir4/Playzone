import React, { Component } from "react";

class Test extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    this.increase = this.increase.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increase() {
    this.setState({ count: this.state.count + 1 });
  }
  decrement() {
    this.setState({ count: this.state.count - 1 });
  }
  render() {
    return (
      <div>
        <h1>Counter</h1>
        <h1>{this.state.count}</h1>
        <button className="btn btn-warning m-2" onClick={this.increase}>
          Increment
        </button>
        <button className="btn btn-warning m-2" onClick={this.decrement}>
          Decrement
        </button>
      </div>
    );
  }
}

export default Test;
