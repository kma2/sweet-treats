import axios from 'axios'
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';
export const SELECT_PRODUCT = 'SELECT_PRODUCT';
export const ADD_PRODUCT_TO_CART = 'ADD_PRODUCT_TO_CART';
export const REMOVE_PRODUCT_FROM_CART = 'REMOVE_PRODUCT_FROM_CART';
// export const RECEIVE_USER_FROM_SERVER = 'RECEIVE_USER_FROM_SERVER';
// export const REGISTER_USER_TO_SERVER = 'REGISTER_USER_TO_SERVER';

const receiveProductsFromServer = function (products) {
  return {
    type: RECEIVE_PRODUCTS,
    receivedProducts: products
  };
};

export const loadProducts = function () {
  return function (dispatch) {
    fetch('/api/candy')
      .then(res => res.json())
      .then(products => {
        const action = receiveProductsFromServer(products);
        dispatch(action);
      })
      .catch(err => console.error(err));
  };
};

const selectProduct = function (product) {
  return {
    type: SELECT_PRODUCT,
    selectedProduct: product
  };
};

export const loadOneProduct = function (productId) {
  return function (dispatch) {
    fetch('/api/candy/' + productId)
      .then(res => res.json())
      .then(product => {
        const action = selectProduct(product);
        dispatch(action);
      })
      .catch(err => console.error(err));
    }
  }


  // ========= SHOPPING CART =========

  const addProductToCart = function (product) {
    return {
      type: ADD_PRODUCT_TO_CART,
      productAddedToCart: product
    }
  }

  export const loadProductForShoppingCartAddition = function (candyId) {
    return function (dispatch) {
      axios.post('/api/candy/' + candyId)
        .then(res => res.data)
        .then(product => {
          console.log(candyId)
          console.log(product)
          const action = addProductToCart(product);
          dispatch(action);
        })
        .catch(err => console.error(err));
    };
  }

  const removeProductFromCart = function (product) {
    return {
      type: REMOVE_PRODUCT_FROM_CART,
      productRemovedFromCart: product
    }
  }

  export const loadProductForShoppingCartRemoval = function (productId) {
    return function (dispatch) {
      fetch('/api/products/' + productId)
        .then(res => res.json())
        .then(product => {
          const action = removeProductFromCart(product);
          dispatch(action);
        })
        .catch(err => console.error(err));
    }
  }
