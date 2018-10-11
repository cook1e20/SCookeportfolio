import React from 'react';
import TypeWriter from './TypeWriter';
import './stylesheets/Header.css';

const Header = () => (
  <div className="HeadContainer">
    <div className="titleLeft titleCenter">
      <div className="title">
        <h1>Stephen Cooke.</h1>
        <TypeWriter />

      </div>
    </div>
  </div>
);

export default Header;
