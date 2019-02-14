import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Square.css';

class Square extends Component {

  newGame = () => {
    window.GAME15STARTNEWGAME = true;
    localStorage.removeItem('game15save');
    window.location.reload();
  };

  render() {
    const a = JSON.stringify(this.props, null, 2);
    return (
      <div id='square'>
        <div className="controls">
        <button className='game-control' onClick={this.newGame}><i className='fas fa-dice'></i> Start new game</button>
        </div>
        <div id='field'>

        </div>
        <div className='controls'>
          <button className='game-control'><i className='fas fa-backward'></i></button>
          <button className='game-control'><i className='fas fa-forward'></i></button>
        </div>
      </div>
    );
  }
};

export default connect(
  state => ({
    history: state.history,
    historyPos: state.historyPos,
    head: state.head
  })
)(Square);
