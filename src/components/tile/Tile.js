import React, { Component } from 'react';
import './Tile.css';

export class Tile extends Component {

  swap = () => {
    if (this.props.moveable)
      this.props.swap(this.props.currentTile);
  }

  render() {
    let tileItem = this.props.children;
    const tileClass = `tile t${tileItem} ${this.props.moveable ? 'moveable' : ''}`;
    if (tileItem === 0) tileItem = '';

    return (
      <div className={tileClass} onClick={this.swap}>{tileItem}</div>
    );
  }
};
