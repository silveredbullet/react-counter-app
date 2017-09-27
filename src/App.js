import React, { Component } from 'react';
import './App.css';
import Welcome from './welcome.js';
import Today from './today.js';
import Counter from './counter.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Welcome name='Dan' />
        <Today day='Wednesday' />

        <Counter />
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default App;
