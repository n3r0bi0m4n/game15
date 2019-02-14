import { knuthShuffle } from 'knuth-shuffle';

export const update = (target, src) => Object.assign({}, { ...target }, { ...src });

export const compareStates = (stateA, stateB) => {
  if (Array.isArray(stateA) && Array.isArray(stateB)) {
    for (let sl = 0; sl < stateA.length; sl++) {
      for (let rl = 0; rl < stateA[sl].length; rl++) {
        if (stateA[sl][rl] === stateB[sl][rl])
          continue;
        else
          return false;
      }
    }
    return true;
  }
  return false;
};


export const randomizeNewGame = () => {
  // for testing purposes
  // return [
  //   [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 0], [13, 14, 15, 12]]
  // ];
  // TODO: sometimes it can be randomized to unsolvable state: https://en.wikipedia.org/wiki/15_puzzle#Solvability
  // TODO: implement solvability checker and re-randomize if unsolvable
  const initialValue = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]];
  let result = initialValue.map(nested => knuthShuffle(nested.slice(0)));
  result = knuthShuffle(result.slice(0));

  return [result];
};


export const cloneArray = (arr) => {
  let copy;

  if (Array.isArray(arr)) {
    copy = arr.slice(0);
    for (let i = 0; i < copy.length; i++)
      copy[i] = cloneArray(copy[i]);

    return copy;
  } else return arr;
};

export const findNullTile = (state) => {
  for (let r = 0; r < state.length; r++)
    for (let c = 0; c < state[r].length; c++)
      if (state[r][c] === 0) return [r, c];
};
