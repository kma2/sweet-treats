import React from 'react';
import {Navbar, NavItem, MenuItem, Nav, NavDropdown, ButtonGroup, Button, DropdownButton} from 'react-bootstrap';
import axios from 'axios';
import { Link, browserHistory } from 'react-router';

export default class NavbarComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {loggedIn: ""};
		this.hitLogOutRoute = this.hitLogOutRoute.bind(this);
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

	hitLogOutRoute() {
		axios.get('api/user/logout')
		.then(() => {
			this.setState({loggedIn: "Login"})
			browserHistory.push('/home')
		})
	}

	render() {
		return (
			  <Navbar collapseOnSelect>
			    <Navbar.Header>
			      <Navbar.Brand>
			        <Link to="home"><span>sweet treats</span></Link>
			      </Navbar.Brand>
			      <Navbar.Toggle />
			    </Navbar.Header>
			    <Navbar.Collapse>
			      <Nav pullRight>
			      
			    {this.state.loggedIn === "Logout" ? 
			    	<NavItem eventKey={1} className= "navbarLogin" onClick = {this.hitLogOutRoute}>Logout</NavItem> :
			    	<NavItem eventKey={2} className= "navbarLogin"><Link to="signin" style = {{textDecoration: 'none', color: '#777'}}>Login</Link></NavItem>
			  	}
			        <NavItem eventKey={3} className= "navbarLink"><Link to ="cart" style = {{textDecoration: 'none', color: '#777'}}>Shopping Cart (1)</Link></NavItem>
			      </Nav>
			    </Navbar.Collapse>
				</Navbar>
		)
	}
}