import { CHECK_WIN } from '../actions/actions';
import { initialState } from '../initialState';
import { update } from '../../helpers';

export default function pushHistoryReducer(state = initialState, action) {
  const stateCopy = update({}, state);
  const currentGameState = stateCopy.history[state.head - 1].flat();

  let result = true;

  for (let a = 1; a < currentGameState.length - 1; a++)

    if (currentGameState[a] > currentGameState[a - 1])
      continue;
    else {
      result = false;
      break;
    }

  switch (action.type) {
    case CHECK_WIN: {
      return update(state, {
        win: result
      });
    }
    default:
      return state;
  }
}
