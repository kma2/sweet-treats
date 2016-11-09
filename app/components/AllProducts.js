import React from 'react';

import {Grid, Row, Col, DropdownButton, MenuItem, FormGroup, FormControl, Button, Navbar} from 'react-bootstrap';
import {Link} from 'react-router';


export default class AllProducts extends React.Component {

  constructor(props) {
    super(props);
		this.state = {
			sortBy:'bestSelling'
		}
  }

	sortArr(arr){
		if(this.state.sortBy === 'lowToHigh'){
			return arr.sort((candyA,candyB) =>{return candyA.price - candyB.price})
		}
		else if(this.state.sortBy === 'highToLow'){
			return arr.sort((candyA,candyB) =>{return candyB.price - candyA.price})
		}
		else if(this.state.sortBy === 'rating'){
			return arr.sort((candyA,candyB) =>{return candyA.rating - candyB.rating})
		}
		else if(this.state.sortBy === 'bestSelling'){
			return arr;
		}
	}


  render () {  
    return (
			<div>
				<Grid>
					<Row className="show-grid">

						<Col xs={12}>
							<Col xs={2}>
								<h3 className="sort_by"> Sort by </h3>
							</Col>
							<Col xs={2}>
								<DropdownButton title="Best Sellers" id="bg-nested-dropdown">
									<MenuItem eventKey="1" onClick={()=>this.setState({sortBy:'bestSelling'})}>Best Selling</MenuItem>
									<MenuItem eventKey="2" onClick={()=>this.setState({sortBy:'rating'})}>Top Rated</MenuItem>
									<MenuItem eventKey="3" onClick={()=>this.setState({sortBy:'lowToHigh'})}>Price: Low to High </MenuItem>
									<MenuItem eventKey="4" onClick={()=>this.setState({sortBy:'highToLow'})}>Price: High to Low </MenuItem>
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
								this.props.receivedProducts && this.sortArr(this.props.receivedProducts).map(product => (
								<Col xs={6} md={4}>
									<Link to={product.id.toString()} style = {{textDecoration: 'none', color: 'black'}}><img src={product.photo} className="product_preview_image"/></Link>
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
	}
}


