import { combineReducers } from 'redux';
import { RECEIVE_PRODUCTS, SELECT_PRODUCT, ADD_PRODUCT_TO_CART } from '../action-creators';

function allProductsReducer (state = [], action) {
  switch (action.type) {
    case RECEIVE_PRODUCTS: return action.receivedProducts;
    default: return state;
  }
}

function selectedProductReducer (state = {}, action) {
  switch (action.type) {
    case SELECT_PRODUCT: return action.selectedProduct;
    default: return state;
  }
}

function shoppingCartReducer (state=[], action) {
  switch(action.type) {
    case ADD_PRODUCT_TO_CART: return action.addProductToCart;
    case REMOVE_PRODUCT_FROM_CART: return action.removeProductFromCart;
    default: return state;
  }
}

const rootReducer = combineReducers({
  allProducts: allProductsReducer,
  selectedProduct: selectedProductReducer,
  productAddedToCart: shoppingCartReducer,
  productRemovedFromCart: shoppingCartReducer
});

export default rootReducer;
