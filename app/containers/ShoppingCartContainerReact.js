import React from 'react';
import CartItem from '../components/CartItem';
import axios from 'axios'
export default class ShoppingCart extends React.Component {

	constructor(props) {
		super(props);
		this.state = {order: []}
	}

	componentDidMount() {
		axios.get('/api/order')
			.then(res => res.data)
			.then(product => {
				console.log(this.state.order)
				this.setState({order: product})
				console.log(this.state.order)
			})
			.catch(err => console.error(err));
	}

	render() {
		return (
				<div>

				</div>
		)
	}
}


