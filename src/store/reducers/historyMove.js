import { HISTORY_BACK, HISTORY_FORWARD } from '../actions/actions';
import { initialState } from '../initialState';
import { update } from '../helpers';

export default function historyMoveReducer(state = initialState, action) {
  switch (action.type) {

    case HISTORY_BACK: {
      if ((state.historyPos - action.payload) >= 0)
        return update(state, { historyPos: state.historyPos -= action.payload });
      else
        return update(state, { historyPos: 0 });
    }

    case HISTORY_FORWARD: {
      if ((state.historyPos + action.payload) <= state.head)
        return update(state, { historyPos: state.historyPos += action.payload });
      else
        return update(state, { historyPos: state.head });
    }

    default:
      return state;
  }
}
