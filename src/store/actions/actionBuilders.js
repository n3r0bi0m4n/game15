import * as action from './actions';

const pushHistory = (gameState) => ({ type: action.PUSH_HISTORY, payload: gameState });
const historyBack = (steps = 1) => ({ type: action.HISTORY_BACK, payload: steps });
const historyForward = (steps = 1) => ({ type: action.HISTORY_FORWARD, payload: steps });
const checkWin = () => ({ type: action.CHECK_WIN, payload: null });

export { pushHistory, historyBack, historyForward, checkWin };
