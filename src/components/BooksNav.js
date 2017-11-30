import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const BooksNav = ({ handleAdd }) => (
  <Navbar color="dark" dark>
    <div className="container">
      <NavbarBrand href="/" className="mr-auto">
        Books
      </NavbarBrand>
      <Nav navbar>
        <NavItem>
          <NavLink href="#" onClick={handleAdd}>
            + Add new book
          </NavLink>
        </NavItem>
      </Nav>
    </div>
  </Navbar>
);

export default BooksNav;
