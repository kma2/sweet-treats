import React from 'react';

import {Grid, Row, Col, Button, ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';

// use react-rater to implement star ratings
// TO DO: add rating stars

export default ({selectedProduct,onLoadProductForShoppingCartAddition}) => (
	<div className="single_product">
		<Grid>
			<Row className="show-grid">

				<Col xs={12}>
					<Col xs={12} md={1}></Col>

					{/* product detail */}
					<Col xs={12} md={4}>
						<img src={selectedProduct.photo} className="product_image" />
					</Col>
					<Col xs={12} md={1}></Col>
					<Col xs={12} md={4}>
						<Col xs={12}>
							<p className="product_name"> {selectedProduct.name} </p>
							<p className="product_price">{`$${selectedProduct.price}`}</p>
							<p>{selectedProduct.description}</p>
						</Col>
						<Col xs={12}>
							<p> Quantity </p>
						</Col>
						<Col xs={12}>
							<ButtonToolbar>
					      <DropdownButton title="1" id="dropdown-size-medium">
					        <MenuItem eventKey="1">2</MenuItem>
					        <MenuItem eventKey="2">3</MenuItem>
					        <MenuItem eventKey="3">4</MenuItem>
							<MenuItem eventKey="3">5</MenuItem>
					      </DropdownButton>
					    </ButtonToolbar>
						</Col>
						<Col xs={7} className="add_to_cart">
							<Button onClick={()=>{onLoadProductForShoppingCartAddition(selectedProduct.id)}}>Add to Cart</Button>
						</Col>
					</Col>

					{/* product reviews */}
					<Col xs={12}>
						
					</Col>

				</Col>
			</Row>
		</Grid>
	</div>
)
