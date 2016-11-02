import { connect } from 'react-redux';
import { loadProductForShoppingCartAddition } from '../action-creators';
import ShoppingCart from '../components/ShoppingCart';

const mapStateToProps = function(state) {
	return {
		productAddedToCart: state.productAddedToCart,
		productRemovedFromCart: state.productRemovedFromCart
	}
}

const mapDispatchToProps = function(dispatch) {
	return {
		onLoadProductForShoppingCartAddition: function() {
			const thunk = loadProductForShoppingCartAddition();
			dispatch(thunk);
		},
		onLoadProductForShoppingCartRemoval: function() {
			const thunk = loadProductForShoppingCartRemoval();
			dispatch(thunk);
		}
	}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const ShoppingCartContainer = componentCreator(ShoppingCart);

export default ShoppingCartContainer;