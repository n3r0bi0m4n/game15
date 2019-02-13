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
