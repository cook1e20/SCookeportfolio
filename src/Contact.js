import React, { Component } from 'react';
import './stylesheets/Contact.css';


export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: 'Name',
      Email: 'Email',
      Message: 'Message..',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ Name: event.target.value });
  }

  render() {
    const { Name, Email, Message } = this.state;
    return (

      <div id="contact-form">
        <h3 className="title">Contact</h3>
        <form name="contact" id="contact-form" method="POST" netlify="true">

          <input type="text" id="Name" name="name" value={Name} onChange={this.handleChange} />
          <input type="email" id="Email" name="email" value={Email} onChange={this.handleChange} />
          <textarea type="text" id="addit" name="info" value={Message} onChange={this.handleChange} />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
