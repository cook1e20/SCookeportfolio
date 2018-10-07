import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faGithub } from '@fortawesome/fontawesome-free-brands';
import './stylesheets/Footer.css';


const SocialGithub = <FontAwesomeIcon id="SocialGit" icon={faGithub} />;
const SocialTwitter = <FontAwesomeIcon id="SocialTwitter" icon={faTwitter} />;
const SocialEmail = <FontAwesomeIcon id="bars" icon={faEnvelope} />;


const Footer = () => (

  <footer>
    <div id="footer">
      <div id="logo">
        <p className="logo logo-footer">Cooke</p>
      </div>
      <p className="footerText">Living Learning Growing</p>
      <div className="socialMedia">
        <a href="https://github.com/cook1e20/">
          {SocialGithub}
        </a>
        <a href="https://twitter.com/Cook1eMon5ter">
          {SocialTwitter}
        </a>
        <a href="mailto:stevecooke20@gmail.com">
          {SocialEmail}
        </a>
      </div>
      <p className="footerText">Created by me © Stephen Cooke</p>
    </div>
  </footer>

);

export default Footer;
