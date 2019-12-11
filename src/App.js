import React from 'react';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import './App.css';

function App() {
  return (
     <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">thirsty</NavbarBrand>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/">login</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">register</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">about</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default App;
