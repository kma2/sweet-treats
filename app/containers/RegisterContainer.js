import { connect } from 'react-redux';
import { login, logout } from '../action-creators';
import Register from '../components/Register';


const mapStateToProps = function (state) {
	return {
		receivedProducts: state.allProducts
	}
}

const mapDispatchToProps = function(dispatch) {
	return {
		setLogin: function() {
			const action = login("Login")
			dispatch(action)
		},
		setLogout: function() {
			const action = logout("Logout")
			dispatch(action)
		}
	}
}

const componentCreator = connect(mapStateToProps, mapDispatchToProps);
const RegisterContainer = componentCreator(Register);

export default RegisterContainer;