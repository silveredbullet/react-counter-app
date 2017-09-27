import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    }
  }

  tester() {
    console.log('Clicked!!!')
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>

        <h2>{this.state.count}</h2>
        <button onClick={() => this.tester()}>Add</button>

      </div>
    )
  }
}

export default Counter;


/*function funcName (
  return 'value'
)

funcName() => {
  'value'
}
.bind(this) used for the onClick*/
