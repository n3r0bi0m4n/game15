import { knuthShuffle } from 'knuth-shuffle';

export const update = (target, src) => Object.assign({}, target, src);

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
  // TODO: sometimes it can be randomized to unsolvable state: https://en.wikipedia.org/wiki/15_puzzle#Solvability
  // TODO: implement solvability checker and re-randomize if unsolvable
  const initialValue = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 0]];
  let result = initialValue.map(nested => knuthShuffle(nested.slice(0)));
  result = knuthShuffle(result.slice(0));

  return [result];
};
