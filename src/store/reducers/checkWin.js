import { CHECK_WIN } from '../actions/actions';
import { initialState } from '../initialState';
import { update } from '../helpers';

export default function pushHistoryReducer(state = initialState, action) {
  const currentGameState = state.history[state.head - 1].flat();
  switch (action.type) {
    case CHECK_WIN: {
      return update(state, {
        win: !currentGameState.some((item, current, arr) => item < arr[current - 1])
      });
    }
    default:
      return state;
  }
}
