import React from 'react';
import {Navbar, NavItem, MenuItem, Nav, NavDropdown, ButtonGroup, Button, DropdownButton} from 'react-bootstrap';
import axios from 'axios';

export default class NavbarComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {loggedIn: ""}
	}

	componentDidMount() {
		axios.get('api/checkLogin')
		.then(res => res.data)
		.then(status => {
			if (status === "logged in") {
				this.setState({loggedIn: "Logout"})
			}
			else {
				this.setState({loggedIn: "Login"})
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
			        <NavItem eventKey={1} href="#">{this.state.loggedIn}</NavItem>
			        <NavItem eventKey={2} href="#">Shopping Cart (1)</NavItem>
			      </Nav>
			    </Navbar.Collapse>
				</Navbar>
		)
	}
}

//ONE PROBLEM: THE TEXT WILL FLASH BETWEEN LOGIN AND LOGOUT WITH INITIAL RENDER