import React, { Component } from 'react';
import './App.css';
import ProgressIndicator from './components/ProgressIndicator';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProgressIndicator />
      </div>
    );
  }
}

export default App;
