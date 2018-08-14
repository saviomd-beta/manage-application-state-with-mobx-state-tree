import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './components/App';

import { getSnapshot } from 'mobx-state-tree';
import { WishList } from './models/WishList';

let initialState = {
  items: [
    {
      name: 'LEGO Mindstorms EV3',
      price: 349.95,
      image: 'xxx.png'
    },
    {
      name: 'Miracles - C.S. Lewis',
      price: 12.91,
      image: 'xxx.png'
    }
  ]
};

let wishList = WishList.create(initialState);

function renderApp() {
  ReactDOM.render(<App wishList={wishList} />, document.getElementById('root'));
}

renderApp();

if (module.hot) {
  module.hot.accept(['./components/App'], () => {
    renderApp();
  })

  module.hot.accept(['./models/WishList'], () => {
    const snapshot = getSnapshot(wishList);
    wishList = WishList.create(snapshot);
    renderApp();
  })
}
