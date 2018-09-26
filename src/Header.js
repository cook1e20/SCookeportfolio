import React from 'react';
import TypeWriter from './TypeWriter';
import './stylesheets/Header.css';

const Header = () => (
  <div className="titleLeft titleCenter">
    <div className="title">
      <h1>Stephen Cooke.</h1>
      <div id="placeholder">
        <TypeWriter />
      </div>
    </div>
  </div>
);

export default Header;
