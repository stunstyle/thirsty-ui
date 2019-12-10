import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

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
