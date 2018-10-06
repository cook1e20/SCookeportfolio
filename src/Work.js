import React from 'react';
import PropTypes from 'prop-types';
import './stylesheets/Work.css';
import SCookeImg from './img/SCooke.png';
import PowerImg from './img/Power.png';

const Work = () => (
  <div id="Work">
    <h3>My Work So Far</h3>
    <div className="Container">
      <WorkItem address={SCookeImg} alt="Image of S Cooke Limited Website" href="https://cranky-thompson-c7792f.netlify.com/" />
      <WorkItem address={PowerImg} alt="Image of Powerlifting Coaching website" href="https://naughty-darwin-edaddf.netlify.com/" />
    </div>
    <div className="Calltoaction">
      <h4>Intrested in working together?</h4>
      <a href="#contact-form" className="inTouch">Get in Touch</a>
    </div>
  </div>

);


const WorkItem = ({ address, alt, href }) => (
  <div className="column-md-6 column-full-12">
    <a href={href}>
      <img src={address} alt={alt} />
    </a>
  </div>
);

WorkItem.propTypes = {
  address: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default Work;
