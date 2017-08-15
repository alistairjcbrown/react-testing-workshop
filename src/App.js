import React, { Component } from 'react';
import logo from './logo.svg';
import Success from './success';
import Failure from './failure';
import './App.css';

class App extends Component {
  renderContent() {
    if (this.props.isSuccessful) {
      return <Success getFreeMoney={this.props.getFreeMoney} />
    }
    return <Failure />
  }

  render() {
    return (
      <div className="App">
        {this.renderContent()}
      </div>
    );
  }
}

export default App;
