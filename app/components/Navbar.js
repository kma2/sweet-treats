import React from 'react';
import {Navbar, NavItem, MenuItem, Nav, NavDropdown, ButtonGroup, Button, DropdownButton} from 'react-bootstrap';

export default class NavbarComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			  <Navbar collapseOnSelect>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <a href="#">sweet treats</a>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Nav pullRight>
			        <NavItem eventKey={1} href="#">Sign in</NavItem>
			        <NavItem eventKey={2} href="#">Shopping Cart (1)</NavItem>
			      </Nav>
			    </Navbar.Collapse>
				</Navbar>
		)
	}
}
