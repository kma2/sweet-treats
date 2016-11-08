import { connect } from 'react-redux';
import { loadProducts } from '../action-creators';
import AllProducts from '../components/AllProducts';


const mapStateToProps = function (state) {
	return {
		receivedProducts: state.allProducts
	}
}

const mapDispatchToProps = function(dispatch) {
	return {
		onLoadProducts: function() {
			const thunk = loadProducts();
			dispatch(thunk);
		}
	}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const AllProductsContainer = componentCreator(AllProducts);

export default AllProductsContainer;