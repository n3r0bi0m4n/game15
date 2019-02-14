import { createStore } from 'redux';

import * as actions from './actions/actions';

import pushHistoryReducer from './reducers/pushHistory';
import historyMoveReducer from './reducers/historyMove';
import checkWin from './reducers/checkWin';

import { initialStateGenerator, initialState } from './initialState';

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.PUSH_HISTORY:
      return pushHistoryReducer(state, action);
    case actions.HISTORY_BACK: case actions.HISTORY_FORWARD:
      return historyMoveReducer(state, action);
    case actions.CHECK_WIN:
      return checkWin(state, action);
    default:
      return state;
  }
};

const store = createStore(rootReducer, initialStateGenerator(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
