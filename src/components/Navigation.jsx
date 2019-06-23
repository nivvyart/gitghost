import React from "react";

import { Navbar, Nav } from "react-bootstrap";

class Navigation extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand>
          <span>👻</span>GitGhost
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#/">Home</Nav.Link>
            <Nav.Link href="#/Search">Search</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;

// <NavDropdown title="Dropdown" id="basic-nav-dropdown">
//   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
//   <NavDropdown.Item href="#action/3.2">
//     Another action
//   </NavDropdown.Item>
//   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
//   <NavDropdown.Divider />
//   <NavDropdown.Item href="#action/3.4">
//     Separated link
//   </NavDropdown.Item>
// </NavDropdown>
