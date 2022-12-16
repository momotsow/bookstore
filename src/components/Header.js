import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => (
  <header>
    <nav className="Nav-bar">
      <a href="/" className="nav-brand">Bookstore CMS</a>
      <ul className="nav-links">
        <li><Link to="/" className="nav-link active-link">Books</Link></li>
        <li><Link to="/Categories" className="nav-link active-link">Categories</Link></li>
      </ul>
      <Link to="/"><FontAwesomeIcon icon={faUser} color="#0290ff" /></Link>
    </nav>
  </header>
);

export default Header;
