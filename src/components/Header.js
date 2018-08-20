import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

export default class Header extends Component {
  render() {
    const { logout } = this.props;
    return (
      <div>
        <Navbar color="brown" light expand="md">
          <NavbarBrand href="/">Hairspray</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/signup">
                <NavLink>Sign Up</NavLink>
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/signin">
                <NavLink>Sign In</NavLink>
              </Link>
            </NavItem>
            {/* <NavItem>
              <Link to="/" onClick={logout}>
                <NavLink>logout</NavLink>
              </Link>
            </NavItem> */}
          </Nav>
        </Navbar>
      </div>
    );
  }
}
