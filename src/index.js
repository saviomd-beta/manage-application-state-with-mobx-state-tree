import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './components/App';

import { onSnapshot } from 'mobx-state-tree';
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

if (localStorage.getItem('wishlistapp')) {
  const json = JSON.parse(localStorage.getItem('wishlistapp'));
  if (WishList.is(json)) initialState = json;
}

const wishList = WishList.create(initialState);

onSnapshot(wishList, snapshot => {
  localStorage.setItem('wishlistapp', JSON.stringify(snapshot));
});

ReactDOM.render(<App wishList={wishList} />, document.getElementById('root'));
