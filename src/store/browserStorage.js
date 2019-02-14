
export const saveGame = (state) => {
  if (!window.GAME15STARTNEWGAME)
    localStorage.setItem('game15save', JSON.stringify(state));
};

export const loadGame = () => {
  console.log('Trying to load last game state');
  const saveString = localStorage.getItem('game15save');
  if (saveString && !saveString.win)
    return JSON.parse(saveString);
  return false;
};
