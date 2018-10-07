import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './stylesheets/Navbar.css';


const element = <FontAwesomeIcon id="bars" icon={faBars} />;


export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      menu: false,
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.CloseMenu.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.CloseMenu.bind(this));
  }

  navToggle = () => {
    const { menu } = this.state;
    this.setState({
      menu: !menu,
    });
  }

  CloseMenu() {
    this.setState({ menu: false });
  }

  render() {
    const { menu } = this.state;
    return (
      <nav className="flex-nav">
        <div id="icon" className="column-6 column-8">
          <p className="logo">Cooke</p>
        </div>
        <div className="column-6 column-4">
          <button type="button" href="#" className="toggle" onClick={this.navToggle}>
  Menu
            {element}

          </button>
          <ul id="phone-nav" className={menu ? ('active') : ('')}>
            <li className="nav-item"><a href="#Home">Home</a></li>
            <li className="nav-item"><a href="#About">About</a></li>
            <li className="nav-item"><a href="#Work">Work</a></li>
            <li className="nav-item"><a href="#contact-form">Contact</a></li>
          </ul>
        </div>

      </nav>
    );
  }
}
