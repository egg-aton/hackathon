import React, { Component } from 'react';
import Fiche from './Fiche';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Fiche />
        </header>
      </div>
    );
  }
}

export default App;
