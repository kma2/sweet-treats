import React from 'react';
import {Navbar, NavItem, MenuItem, Nav, NavDropdown, ButtonGroup, Button, DropdownButton} from 'react-bootstrap';
import axios from 'axios';

export default class NavbarComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {loggedIn: false}
	}

	componentDidMount() {
		axios.get('api/checkLogin')
		.then(res => res.data)
		.then(status => {
			if (status === "logged in") {
				this.setState({loggedIn: true})
			}
			else {
				this.setState({loggedIn: false})
			}
		})

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
			        <NavItem eventKey={1} href="#">{this.state.loggedIn ? "Logout" : "Log In"}</NavItem>
			        <NavItem eventKey={2} href="#">Shopping Cart (1)</NavItem>
			      </Nav>
			    </Navbar.Collapse>
				</Navbar>
		)
	}
}
