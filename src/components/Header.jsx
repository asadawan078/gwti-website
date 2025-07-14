import React from 'react';
import '../styles/HomePage.css';

const Header = () => (
  <header className="header">
    <h1>Green World Tech Initiative</h1>
    <nav>
      <a href="#about">About</a>
      <a href="#tracker">Tracker</a>
      <a href="#news">News</a>
    </nav>
  </header>
);

export default Header;