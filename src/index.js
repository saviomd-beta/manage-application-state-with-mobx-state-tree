import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './components/App';

import { getSnapshot, addMiddleware } from 'mobx-state-tree';
import { Group } from './models/Group';

let initialState = { users: {} };

let group = window.group = Group.create(initialState);
addMiddleware(group, (call, next) => {
  console.log(`[${call.type}] ${call.name}`);
  return next(call);
});

function renderApp() {
  ReactDOM.render(<App group={group} />, document.getElementById('root'));
}

renderApp();

if (module.hot) {
  module.hot.accept(['./components/App'], () => {
    renderApp();
  })

  module.hot.accept(['./models/WishList'], () => {
    const snapshot = getSnapshot(group);
    group = window.group = Group.create(snapshot);
    renderApp();
  })
}
