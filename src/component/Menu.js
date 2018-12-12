import React, {Component} from 'react';
import {Collapse, Nav, Navbar, NavbarBrand, NavItem} from "reactstrap";
import {Link,NavLink } from "react-router-dom";

class Menu extends Component {
    render() {
        return (
            <Navbar color="light" light expand="md">
                <NavbarBrand>Booklib</NavbarBrand>
                <Collapse isOpen={true} navbar>
                    <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink to="/">Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/contact">Contact</NavLink>
                </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default Menu;