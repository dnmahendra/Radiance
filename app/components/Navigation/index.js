import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, MenuItem, NavItem, NavDropdown } from 'react-bootstrap';
import { Affix } from 'react-overlays';
import './styles.scss';

class Navigation extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Affix viewportOffsetTop={0} affixClassName="affixed-top" container={this}>
        <Navbar className="navbarDefault navbar-fixed-top" inverse collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">
                <span className="glyphicon glyphicon-fire"></span>
                RADIANCEIT
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">Home</NavItem>
              <NavItem eventKey={2} href="#">Products</NavItem>
              <NavDropdown eventKey={3} title="Services" id="basic-nav-dropdown">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>
              <NavItem eventKey={4} href="#">Contact</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Affix>
    );
  }
}

export default Navigation;
