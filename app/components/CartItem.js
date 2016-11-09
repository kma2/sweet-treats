import React from 'react';

import {Grid, Row, Col, Button} from 'react-bootstrap';

// this component is what an individual item looks like in the shopping cart

export default (props) => (
	<div>
		{props.candy && props.candy.map(item => {
			return(
			<Grid key={item.candy.id}>
				<Row className="show-grid">
					<Col xs={2}>
						<img src={item.candy.photo} className="cart_item_photo" />
					</Col>
					<Col xs={2}>
						<p className="cart_item_field"> {item.candy.name} </p>
						<p className="cart_item_description">{item.candy.description} </p>
					</Col>
					<Col xs={2}>
						<p className="cart_item_field">{`$${item.candy.price}`}</p>
					</Col>
					<Col xs={2}>
						<p className="cart_item_field"> {item.quantity} </p>
					</Col>
					<Col xs={2}>
						<p className="cart_item_field">{`$${item.candy.price * item.quantity}`}</p>
					</Col>
					<Col xs={2}>
						{
							item.candy.candyOrder === undefined ?
							<div> 
							<Button className="increment_button" onClick={()=>props.increment(item.candy.id,1)}> + </Button>
							<Button className="decrement_button" onClick={()=>props.decrement(item.candy.id,1)}> - </Button>
							</div>
							:
							<div>
							<Button className="increment_button" onClick={()=>props.increment(item.candy.id,item.candy.candyOrder.order_id)}> + </Button>
							<Button className="decrement_button" onClick={()=>props.decrement(item.candy.id,item.candy.candyOrder.order_id)}> - </Button>
							</div>
						}
					</Col>
				</Row>
			</Grid>
			)
		})}
		<Button className="btn btn-default" onClick={()=>{console.log("i'm checking you out lul")}}> Checkout </Button>
	</div>
)
