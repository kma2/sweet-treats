'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, IndexRedirect, browserHistory } from 'react-router';

import store from './store'
import App from './components/App';

import AllProductsContainer from './containers/AllProductsContainer'
import SingleProductContainer from './containers/SingleProductContainer';
import ShoppingCartContainer from './containers/ShoppingCartContainer';
import SignInOrContinueAsGuest from './components/SignInOrContinueAsGuest';
import SignIn from './components/SignIn'
import Checkout from './components/Checkout';
import ConfirmationPage from './components/ConfirmationPage';
import { loadProducts, loadOneProduct } from './action-creators';

const onProductsEnter = () => {
  const thunk = loadProducts();
  store.dispatch(thunk);
}

const onSingleProductEnter = (nextRouterState) => {
  const productId = nextRouterState.params.productId;
  console.log('ID',productId)
  const thunk = loadOneProduct(productId);
  store.dispatch(thunk);
}

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="home" component={AllProductsContainer} onEnter={onProductsEnter}>
        </Route>
        <Route path="products/:productId" component={SingleProductContainer} onEnter={onSingleProductEnter} />
        <Route path="cart" component={ShoppingCartContainer} />
        <Route path="signin" component={SignIn} />
        <Route path="checkout" component={Checkout}>
          <Route path="signin" component={SignInOrContinueAsGuest} />
        </Route>
        <Route path="confirmation" component={ConfirmationPage} />
        <IndexRedirect to='/home' />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)
