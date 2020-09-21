import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";
import { BrowserRouter as Router } from 'react-router-dom';

class Nav extends Component {
state = {
    isOpen: false
};

toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
}

loggedIn = () => {
    if (this.props.user!=null){
        return(
            <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem href="/login">Log In</MDBDropdownItem>
                <MDBDropdownItem href='/signup'>Sign Up</MDBDropdownItem>
            </MDBDropdownMenu>
        )
    } else {
        return (
            <MDBDropdownMenu className="dropdown-default">
                <MDBDropdownItem href="/profile">Profile</MDBDropdownItem>
                <MDBDropdownItem href="/" onClick={(e)=>this.props.logout(e)}>Log Out</MDBDropdownItem>
            </MDBDropdownMenu>
        )
    }
}

render() {
    return (
        <Router>
        <MDBNavbar style={{backgroundColor: '#880e4f'}} dark expand="md">
            <MDBNavbarBrand>
                <strong className="white-text">Navbar</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav left>
                    <MDBNavItem active>
                        <MDBNavLink to="/">Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="#!">Features</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem>
                        <MDBNavLink to="#!">Pricing</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBDropdown>
                            <MDBDropdownToggle nav caret>
                                <MDBIcon icon="user" />
                            </MDBDropdownToggle>
                            {this.loggedIn()}
                        </MDBDropdown>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
    </Router>
    );
    }
}

export default Nav;