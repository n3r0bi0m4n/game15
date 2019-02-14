import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Square.css';

import * as actions from '../../store/actions/actionBuilders';

import { Tile } from '../tile/Tile';
import { findNullTile, cloneArray } from '../../helpers';

class Square extends Component {

  newGame = () => {
    window.GAME15STARTNEWGAME = true;
    localStorage.removeItem('game15save');
    window.location.reload();
  };

  swap = (tilePos) => {
    const currentState = cloneArray(this.props.history[this.props.historyPos - 1]);
    const [nullTileRow, nullTileCol] = findNullTile(currentState);
    const [currentRow, currentCol] = tilePos;
    const tempState = [].concat(currentState);
    tempState[nullTileRow][nullTileCol] = currentState[currentRow][currentCol];
    tempState[currentRow][currentCol] = 0;
    this.props.pushHistory(tempState);
    this.props.checkWin();
  };

  render() {
    const winscreen = <div id='winscreen' className='flex flex-center'>You win! :)</div>;

    const [nullTileRow, nullTileCol] = findNullTile(this.props.history[this.props.historyPos - 1]);

    const tiles = this.props.history[this.props.historyPos - 1].map((tileRow, tileRowIndex) =>
      tileRow.map((tile, tileIndex) => {
        const isTileMoveable = ((Math.abs(nullTileRow - tileRowIndex) + Math.abs(nullTileCol - tileIndex)) === 1);

        return <Tile key={`${tileRowIndex}-${tileIndex}`}
          moveable={isTileMoveable}
          swap={this.swap}
          currentTile={[tileRowIndex, tileIndex]}
        >{tile}</Tile>;
      }));


    const btnBackward = <button
      className={`game-control ${this.props.historyPos <= 1 ? 'disabled' : ''}`}
      onClick={this.props.goBack}><i className='fas fa-backward'></i></button>;

    const btnForward = <button
      className={`game-control ${this.props.historyPos >= this.props.history.length ? 'disabled' : ''}`}
      onClick={this.props.goForward}><i className='fas fa-forward'></i></button>

    return (
      <div id='square'>
        <div className='controls flex flex-row'>
          <button className='game-control' onClick={this.newGame}><i className='fas fa-dice'></i> Start new game</button>
        </div>
        <div id='field'>
          {tiles}
          {this.props.win ? winscreen : null}
        </div>
        <div className='controls flex flex-row'>
          {btnBackward}
          {btnForward}
        </div>
      </div>
    );
  }
};

export default connect(
  state => ({
    history: state.history,
    historyPos: state.historyPos,
    head: state.head,
    win: state.win
  }),
  dispatch => ({
    pushHistory: (state) => dispatch(actions.pushHistory(state)),
    goBack: () => dispatch(actions.historyBack()),
    goForward: () => dispatch(actions.historyForward()),
    checkWin: () => dispatch(actions.checkWin())
  })
)(Square);
