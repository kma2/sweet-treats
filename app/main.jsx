'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'
import { Route, IndexRedirect, browserHistory } from 'react-router';

import store from './store'
import App from './components/App';

import AllProductsContainer from '../containers/AllProductsContainer'
import SingleProductContainer from '../containers/SingleProductContainer';
import ShoppingCartContainer from '../containers/ShoppingCartContainer';
import SignInOrContinueAsGuest from './SignInOrContinueAsGuest';
import SignIn from './SignIn'
import Checkout from './Checkout';
import ConfirmationPage from './ConfirmationPage';

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRedirect to='/home' />
        <Route path='/home' component={AllProductsContainer} />
          <Route path='/products/:productId' component={SingleProductContainer} />
        </Route>
        <Route path='/cart' component={ShoppingCartContainer} />
        <Route path='/signin' component={SignIn} />
        <Route path='/checkout' component={Checkout}>
          <Route path='/signin' component={SignInOrContinueAsGuest} />
        </Route>
        <Route path='/confirmation' component={ConfirmationPage} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
