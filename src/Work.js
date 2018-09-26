import React from 'react';
import PropTypes from 'prop-types';
import './stylesheets/Work.css';
import SCookeImg from './img/SCooke.png';
import PowerImg from './img/Power.png';

const Work = () => (
  <div>
    <h3>My Work So Far</h3>
    <div className="Container">
      <WorkItem address={SCookeImg} alt="Image of S Cooke Limited Website" />
      <WorkItem address={PowerImg} alt="Image of Powerlifting Coaching website" />
    </div>
    <div className="Calltoaction">
      <h4>Intrested in working together?</h4>
      <button type="submit" className="inTouch">Get in Touch</button>
    </div>
  </div>

);


const WorkItem = ({ address, alt }) => (
  <div className="column-md-6 column-full-12">
    <img src={address} alt={alt} />
  </div>
);

WorkItem.propTypes = {
  address: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Work;
