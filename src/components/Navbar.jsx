import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import useDarkMode from '../hooks/useDarkMode'
import SearchForm from './SearchForm';
import { isPropertySignature } from 'typescript';

const Navbar = (props) => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <Nav pills>
        <NavItem>
          <NavLink href="https://www.coingecko.com/en/coins/all" active>Markets</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://www.coingecko.com/en/exchanges">Exchanges</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="https://www.coingecko.com/en/api">API Info</NavLink>
        </NavItem>
      </Nav>
      <SearchForm setQuery={props.setQuery} query={props.query}/>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
