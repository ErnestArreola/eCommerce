import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style/style.css';
// import 'swiper/css/swiper.min.css';


import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import App from './App';
import store from './store';


//style 
// import './assets/scss/style.scss';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));