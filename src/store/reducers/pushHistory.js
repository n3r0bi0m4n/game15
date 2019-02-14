import { PUSH_HISTORY } from '../actions/actions';
import { initialState } from '../initialState';
import { update, compareStates, cloneArray } from '../../helpers';

export default function pushHistoryReducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_HISTORY: {
      const stateCopy = update({}, state);
      let newHistory = cloneArray(stateCopy.history);
      newHistory = newHistory.concat([action.payload]);

      if (state.historyPos === state.history.length) {
        // if _standard_ move
        return update(stateCopy, {
          history: newHistory,
          historyPos: state.historyPos + 1,
          head: state.head + 1,
          win: state.win
        });
      }
      else {
        if (compareStates(state.history[state.historyPos], action.payload)) {
          // if rollback and make same move
          return update(state, { historyPos: state.historyPos + 1 });
        } else {
          // if rollback and change move
          newHistory = newHistory.slice(0, stateCopy.historyPos);
          newHistory = newHistory.concat([action.payload]);

          return update(stateCopy, {
            history: newHistory,
            historyPos: state.historyPos + 1,
            head: state.head + 1,
            win: state.win
          });
        }
      }
    }

    default:
      return state;
  }
}
