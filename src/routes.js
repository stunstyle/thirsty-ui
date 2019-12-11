import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';


// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

export default function BasicExample() {
    return (
        <Router>
            <ThirstyNav />

            {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
            <div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </div>
        </Router >
    );
}

function ThirstyNav() {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">thirsty</NavbarBrand>
            <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink><Link to="/login">login</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link to="/register">register</Link></NavLink>
                </NavItem>
                <NavItem>
                    <NavLink><Link to="/about">about</Link></NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}
// You can think of these components as "pages"
// in your app.
