import React from 'react';
import CartItem from '../components/CartItem';
import axios from 'axios'

var self;
export default class ShoppingCart extends React.Component {
	constructor(props) {
		super(props);
		self = this
		// console.log('self in constructor',self)
		this.state = {order: []};
	}

	componentDidMount() {
		// console.log('mount this',this)
		this.rerender()
	}

	rerender(){
		// console.log('rerender called')
		axios.get('/api/order')
				.then(res => res.data)
				.then(product => {	
					this.setState({order: product})
				})
				.catch(err => console.error(err));
	}

	increment(candyId,orderId){
		axios.put(`api/candy/quantity/increment/${candyId}/${orderId}`)
			.then(() => {
				self.rerender()
			})
			.catch(err => console.error(err));
	}
	decrement(candyId,orderId){
		axios.put(`api/candy/quantity/decrement/${candyId}/${orderId}`)
			.then(() => {
				self.rerender()
			})
			.catch(err => console.error(err));
	}

	render() {
		return (
				<div>
					<CartItem candy={this.state.order} increment={this.increment} decrement={this.decrement}/>
				</div>
		)
	}
}


