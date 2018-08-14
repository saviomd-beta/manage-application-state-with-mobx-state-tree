import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './components/App';

import { WishList } from './models/WishList';

const wishList = WishList.create({
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
});

ReactDOM.render(<App wishList={wishList} />, document.getElementById('root'));
