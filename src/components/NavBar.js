/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';

export default function NavBar() {
  const [navbarOpen, setNavBarOpen] = useState(false);
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Home',
    },
    {
      id: 2,
      path: '/about',
      text: 'About',
    },
  ];
  const handleToggle = () => {
    setNavBarOpen((prevNavBarOpen) => !prevNavBarOpen);
  };

  const closeMenu = () => {
    setNavBarOpen(false);
  };
  return (
    <nav className="navBar">
      <button onClick={handleToggle}>

        {navbarOpen ? (
          <MdClose style={{ color: '#fff', width: '40px', height: '40px' }} />
        ) : (
          <FiMenu style={{ color: '#7b7b7b', width: '40px', height: '40px' }} />
        )}

      </button>
      <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
        {links.map((link) => (
          <li key={link.id}>
            <NavLink onClick={() => closeMenu()} activeClassName="active-link" exact to={link.path}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
