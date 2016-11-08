import React from 'react';
import {Navbar, NavItem, MenuItem, Nav, NavDropdown, ButtonGroup, Button, DropdownButton} from 'react-bootstrap';
import axios from 'axios';
import { Link } from 'react-router';

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
			        <Link to="home">sweet treats</Link>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Nav pullRight>
			        <NavItem eventKey={1} className= "navbarLink"><Link to={this.state.loggedIn === "Logout" ? "home" : "signin"} style = {{textDecoration: 'none', color: '#777'}}>{this.state.loggedIn}</Link></NavItem>
			        <NavItem eventKey={2} className= "navbarLink"><Link to ="cart" style = {{textDecoration: 'none', color: '#777'}}>Shopping Cart (1)</Link></NavItem>
			      </Nav>
			    </Navbar.Collapse>
				</Navbar>
		)
	}
}