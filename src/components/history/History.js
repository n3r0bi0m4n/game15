import React, { Component } from 'react';
import { connect } from 'react-redux';
import './History.css';

class History extends Component {
  render() {
    const historylist = this.props.history.map((historyItem, historyIndex, historyArr) => {
      const current = this.props.historyPos;
      const className = `history-item flex flex-col ${historyIndex === current - 1 ? 'current' : ''}`;

      const data = historyItem.map((hitoryRowItem, historyRowIndex, historyRowArr) => {

        const tiles = hitoryRowItem.map((hitsoryTileItem, historyTileIndex, historyTileArr) =>
          <span className='history-item-tile flex flex-row flex-fill flex-center' key={historyTileIndex}>
            {hitsoryTileItem === 0 ? ' ' : hitsoryTileItem}</span>);

        return <span className='history-item-row flex flex-row' key={historyRowIndex}>{tiles}</span>
      });

      return <div className={className} key={historyIndex}>{data}</div>;
    });

    return (
      <div id='history-bar'>
        <div id='history-content' className='flex flex-col'>
        {historylist}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    history: state.history,
    historyPos: state.historyPos,
    head: state.head
  })
)(History);
