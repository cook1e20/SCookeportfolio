import React from 'react';
import './stylesheets/Contact.css';

const Contact = () => (
  <div id="contact-form">
    <h3 className="title">Contact</h3>
    <form name="contact" id="contact-form" method="POST" netlify>

      <input type="text" id="name" name="name" value="Name" />
      <input type="email" id="Email" name="email" value="Email" />
      <textarea type="text" id="addit" name="info" value="Message.." />

      <button type="submit">Submit</button>
    </form>
  </div>
);

export default Contact;
