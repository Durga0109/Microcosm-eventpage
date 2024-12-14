import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1>Microcosm</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/">Events</Link>
        <Link to="/register">Event Registration</Link>
      </nav>
    </header>
  );
};

export default Header;
