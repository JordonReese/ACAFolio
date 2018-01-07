import React from "react";
import PropTypes from "prop-types";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

const TopNavbar = (props) => {
  let navItems = "";
  if (props.showNavItems) {
    navItems = (
              <div>
                <Nav pullRight>
                  <Link to="/secret"><Navbar.Text>Secret</Navbar.Text></Link>
                </Nav>
              </div>
              );

  }
  return (
    <div>
      <div>
        <input placeholder="Search Users..."></input>
      </div>
      <Navbar inverse collapseOnSelect>
        <Navbar.Collapse>
          <Nav pullRight>
          </Nav>
          {navItems}
        </Navbar.Collapse>
      </Navbar>
    </div>

  );
};

TopNavbar.propTypes = {
  onSignOut: PropTypes.func.isRequired,
  showNavItems: PropTypes.bool.isRequired
};

export default TopNavbar;
