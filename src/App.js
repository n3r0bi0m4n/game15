import React, { Component } from 'react';
import Square from './components/square/Square';
import History from './components/history/History';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id='game'>
        <History />
        <Square />
      </div>
    );
  }
}

export default App;
