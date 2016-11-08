import { connect } from 'react-redux';
import { loadProducts } from '../action-creators';
import AllProducts from '../components/AllProducts';


const mapStateToProps = function (state) {
	//Sort Low to High 
	// state.allProducts.sort((candyA,candyB) =>{return candyA.price - candyB.price})
	
	//Sort High to Low
	// state.allProducts.sort((candyA,candyB) =>{return candyB.price - candyA.price})

	//Sort by Rating
	//state.allProducts.sort((candyA,candyB) =>{return candyA.rating - candyB.rating})

	//Sort by BestSeller
	//state.allProducts.sort((candyA,candyB) =>{return candyB.numOrdered - candyA.numOrdered})
	console.log(state.allProducts[0])
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