import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useAuth0 } from '../react-auth0-wrapper';


const Navigation = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <span role="img">👻</span>
        GitGhost
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#/">Home</Nav.Link>
          <Nav.Link href="#/Search">Search</Nav.Link>
          <Nav.link href="#/Profile">Profile</Nav.link>
        </Nav>
        <div>
          {!isAuthenticated && (
            <button
              onClick={() => loginWithRedirect({})
              }
            >
              log in
            </button>
          )}

          {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
