import React from 'react';
import {Navbar, NavItem, MenuItem, Nav, NavDropdown} from 'react-bootstrap';

export default class NavbarComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			  <Navbar inverse collapseOnSelect>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <a href="#">Candy Store</a>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Nav pullRight>
			        <NavItem eventKey={1} href="#">Sign in</NavItem>
			        <NavItem eventKey={2} href="#">Shopping Cart</NavItem>
			      </Nav>
			    </Navbar.Collapse>
			  </Navbar>
		)
	}

}
