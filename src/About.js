import React from 'react';
import './stylesheets/About.css';
import './stylesheets/Work.css';
import HeroImg from './img/Me.png';

const About = () => (
  <div className="Container about" id="About">
    <div className="column-md-6 img-hide">

      <img className="heroImg" src={HeroImg} alt="Stephen Cooke" />
    </div>
    <div className="column-md-6 column-full-12 aboutText">

      <h2>
About Me
      </h2>

      <p>
Hi, I’m Stephen Cooke a Web Developer and Aerospace Engineer.
I have a wide range of experience in design and development
from making websites and cutting edge aircraft.
      </p>

      <p>

My journey started in aerospace but i soon found a passion for web development.
My two working worlds share lots of similarities
 with common skills such as problem solving, design and teamwork.
      </p>
      <p>
In my spare time you’ll find me cycling, powerlifting and surfing.
I love travelling and experiencing new cultures and meeting new people.

      </p>
    </div>

  </div>

);


export default About;
