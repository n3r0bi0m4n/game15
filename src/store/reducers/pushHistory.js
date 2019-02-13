import { PUSH_HISTORY } from '../actions/actions';
import { initialState } from '../initialState';
import { update, compareStates } from '../helpers';

export default function pushHistoryReducer(state = initialState, action) {
  switch (action.type) {
    case PUSH_HISTORY: {
      if (state.historyPos === state.history.length) {
        return update(state, {
          historyPos: ++state.historyPos,
          head: ++state.head,
          history: state.history.concat([action.payload])
        });
      }
      else {
        if (compareStates(state.history[state.historyPos], action.payload)) {
          return update(state, { historyPos: ++state.historyPos });
        } else {
          const tempHistory = state.history;
          tempHistory[state.historyPos] = action.payload;
          return update(state, {
            head: ++state.historyPos,
            history: tempHistory
          });
        }
      }
    }

    default:
      return state;
  }
}
