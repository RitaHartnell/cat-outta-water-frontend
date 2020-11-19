import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon } from "mdbreact";

class Nav extends Component {
state = {
    isOpen: false,
    path: '/'
};

toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
}

changePath = (path) => {
    this.setState({path: path})
}

render() {
    return(
        <MDBNavbar style={{backgroundColor: '#880e4f'}} dark expand="md">
            <MDBNavbarBrand>
                <strong className="white-text">Cat Became Hungry</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav left>
                    <MDBNavItem active={this.state.path==='/' ? true : false}>
                        <MDBNavLink onClick={()=> this.changePath('/')} to='/'>Home</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active={this.state.path==='/game' ? true : false}>
                        <MDBNavLink onClick={()=> this.changePath('/game')} to='/game'>Game</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active={this.state.path==='/forum' ? true : false}>
                        <MDBNavLink onClick={()=> this.changePath('/forum')} to='/forum'>Forum</MDBNavLink>
                    </MDBNavItem>
                    <MDBNavItem active={this.state.path==='/users' ? true : false}>
                        <MDBNavLink onClick={()=> this.changePath('/users')} to='/users'>Users</MDBNavLink>
                    </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                    <MDBNavItem>
                        <MDBDropdown right>
                            <MDBDropdownToggle nav caret>
                                <MDBIcon icon="user" />
                            </MDBDropdownToggle>
                            {this.props.user ?
                            
                            <MDBDropdownMenu right className="dropdown-default">
                                <MDBDropdownItem href={`/users/${this.props.user.user.username}`}>Profile</MDBDropdownItem>
                                <MDBDropdownItem href="/" onClick={(e)=>this.props.logout(e)}>Log Out</MDBDropdownItem>
                            </MDBDropdownMenu>
                            :
                            <MDBDropdownMenu right className="dropdown-default">
                                <MDBDropdownItem href="/login">Log In</MDBDropdownItem>
                                <MDBDropdownItem href='/signup'>Sign Up</MDBDropdownItem>
                            </MDBDropdownMenu>}
                        </MDBDropdown>
                    </MDBNavItem>
                </MDBNavbarNav>
            </MDBCollapse>
        </MDBNavbar>
        );
    }
}

export default Nav;