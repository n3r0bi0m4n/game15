export const initialState = {
  history: [], // history of game states
  historyPos: 0, // current history position (default is history.length - 1)
  head: 0, // last _valid_ position
  win: false
};
