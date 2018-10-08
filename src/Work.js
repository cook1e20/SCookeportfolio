import React from 'react';
import PropTypes from 'prop-types';
import './stylesheets/Work.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import PowerImg from './img/Power.png';
import SCookeImg from './img/SCooke.png';
import './stylesheets/Footer.css';


const SocialGithub = <FontAwesomeIcon id="SocialGit" icon={faGithub} />;

const Work = () => (
  <div className="Work">
    <h2 className="WorkTitle">My Work So Far</h2>
    <div className="Container">
      <WorkItem address={SCookeImg} alt="Image of S Cooke Ltd Website" href="https://cranky-thompson-c7792f.netlify.com/" Title="S Cooke Ltd" Desc="A website made for a Aeorspace Consultancy." gitlink="https://github.com/cook1e20/scookelimited.com" />
      <WorkItem address={PowerImg} alt="Image of Powerlifting Coaching website" href="https://naughty-darwin-edaddf.netlify.com/" Title="Coaching" Desc="A website made for a Powerlifting coach." gitlink="https://github.com/cook1e20/product-landing-page" />
    </div>
    <div className="Calltoaction">
      <h4>Interested in working together?</h4>
      <a href="#contact-form" className="inTouch">Get in Touch</a>
    </div>
  </div>

);


const WorkItem = ({
  address, alt, href, Title, Desc, gitlink,
}) => (
  <div className="column-md-6 column-full-12 workItem">
    <a href={href}>
      <img src={address} alt={alt} />
    </a>
    <div className="workInfo">
      <h3>{Title}</h3>
      <p>{Desc}</p>
      <a href={gitlink}>
        {SocialGithub}
      </a>
    </div>
  </div>
);

WorkItem.propTypes = {
  address: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Desc: PropTypes.string.isRequired,
  gitlink: PropTypes.string.isRequired,
};

export default Work;
