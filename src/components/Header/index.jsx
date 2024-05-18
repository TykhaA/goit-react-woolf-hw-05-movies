import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <nav className="header__nav">
        <li className="header__item">
          <NavLink to="/" className="header__link">
            Home
          </NavLink>
        </li>
        <li className="header__item">
          <NavLink to="movies" className="header__link">
            Element
          </NavLink>
        </li>
      </nav>
    </div>
  );
};

export default Header;
