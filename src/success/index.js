import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="success">
        You're a winner!
        <button onClick={this.props.getFreeMoney}>
          Give me free money
        </button>
      </div>
    );
  }
}

export default App;
