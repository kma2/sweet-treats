import React from 'react';

import {Grid, Row, Col, DropdownButton, MenuItem, FormGroup, FormControl, Button, Navbar} from 'react-bootstrap';
import {Link} from 'react-router';

export default ({receivedProducts}) => (
	<div>
		<Grid>
			<Row className="show-grid">

				<Col xs={12}>
					<Col xs={2}>
						<h3 className="sort_by"> Sort by </h3>
					</Col>
					<Col xs={2}>
						<DropdownButton title="Best Sellers" id="bg-nested-dropdown">
							<MenuItem eventKey="1">Top Rated</MenuItem>
							<MenuItem eventKey="2">Price: Low to High </MenuItem>
							<MenuItem eventKey="3">Price: High to Low </MenuItem>
						</DropdownButton>
					</Col>

					<Col xs={4}> </Col>
				{/* Search bar with submit */}
					<Col xs={4}>

					<Navbar.Form pullLeft>
				        <FormGroup>
				          <FormControl type="text" placeholder="Search" />
				        </FormGroup>
				        {' '}
				        <Button type="submit">Search</Button>
				    </Navbar.Form>

					</Col>
				</Col>
				{
						(
						receivedProducts && receivedProducts.map(product => (
						<Col xs={6} md={4}>
							<img src={product.photo} className="product_preview_image"/>
							<h3 className="product_preview_name"><Link to={product.id.toString()} style = {{textDecoration: 'none', color: 'black'}}>{product.name}</Link></h3>
							<p className="product_preview_description">{product.short_description}</p>
							<p className="product_preview_name">{`$${product.price}`}</p>
						</Col>	
					))
						)
				}
			</Row>
		</Grid>
	</div>
)
