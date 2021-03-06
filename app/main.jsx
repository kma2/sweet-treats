'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, IndexRedirect, browserHistory } from 'react-router';

import store from './store'
import App from './components/App';


import Register from './components/Register'
import AllProductsContainer from './containers/AllProductsContainer'
import SingleProductContainer from './containers/SingleProductContainer';
import ShoppingCartContainer from './containers/ShoppingCartContainer';
import SignInOrContinueAsGuest from './components/SignInOrContinueAsGuest';
import SignIn from './components/SignIn'
import Checkout from './components/Checkout';
import ConfirmationPage from './components/ConfirmationPage';
import ShoppingCartContainerReact from './containers/ShoppingCartContainerReact';
import { loadProducts, loadOneProduct, loadProductForShoppingCartAddition } from './action-creators';

const onProductsEnter = () => {
  const thunk = loadProducts();
  store.dispatch(thunk);
}

const onSingleProductEnter = (nextRouterState) => {
  const productId = nextRouterState.params.productId;
  const thunk = loadOneProduct(productId);
  store.dispatch(thunk);
}

// const onCartEnter = () => {
//   const thunk = loadProductForShoppingCartAddition();
//   store.dispatch(thunk)

// }

render (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <Route path="register" component={Register} />
        <Route path="cart" component={ShoppingCartContainerReact} />
        <Route path="signin" component={SignIn} />
        <Route path="checkout" component={Checkout}>
          <Route path="signin" component={SignInOrContinueAsGuest} />
        </Route>
        <Route path="confirmation" component={ConfirmationPage} />
        <Route path="home" component={AllProductsContainer} onEnter={onProductsEnter}>
        </Route>
        <Route path=":productId" component={SingleProductContainer} onEnter={onSingleProductEnter} />
        <IndexRedirect to='/home' />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('main')
)