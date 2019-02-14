import * as browserStorage from './browserStorage';
import { randomizeNewGame } from './helpers';
export const initialState = {
  history: randomizeNewGame(), // history of game states
  historyPos: 0, // current history position (default is history.length - 1)
  head: 0, // last _valid_ position
  win: false
};


export const initialStateGenerator = () => {
  const result = browserStorage.loadGame();
  if (result) return result;
  return initialState;
};
