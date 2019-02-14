import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store/store';

import './index.css';
import App from './App';

import { saveGame } from './store/browserStorage';

// import * as serviceWorker from './serviceWorker';

window.onbeforeunload = function () {
  saveGame(store.getState())
};

ReactDOM.render(
  <Provider store={store}>
    <header id='game-title' className='flex flex-row flex-center'>Game 15</header>
    <App />
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
