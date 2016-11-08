import { connect } from 'react-redux';
import { loadOneProduct,loadProductForShoppingCartAddition } from '../action-creators';
import SingleProduct from '../components/SingleProduct';


const mapStateToProps = function (state) {
	return {
		selectedProduct: state.selectedProduct
	}
}

const mapDispatchToProps = function(dispatch) {
	return {
		onLoadOneProduct: function() {
			const thunk = loadOneProduct();
			dispatch(thunk);
		},
		onLoadProductForShoppingCartAddition: function(candyId) {
			const thunk = loadProductForShoppingCartAddition(candyId);
			dispatch(thunk);
		}
	}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const SingleProductContainer = componentCreator(SingleProduct);

export default SingleProductContainer;