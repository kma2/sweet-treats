'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'

// import NavbarComponent from './components/navbar';
// import allProducts from './components/allProducts';
import App from './components/App';

render (
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
)
