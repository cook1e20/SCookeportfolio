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
    const { name } = event.target;
    if (name === event.target.value.slice(0, name.length)) {
      this.setState({ [event.target.name]: '' });
    }
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { Name, Email, Message } = this.state;
    return (

      <div id="contact-form">
        <h3 className="title">Contact</h3>
        <form name="contact" id="contact-form" method="POST" netlify="true">

          <input type="text" id="Name" name="Name" value={Name} onChange={this.handleChange} />
          <input type="email" id="Email" name="Email" value={Email} onChange={this.handleChange} />
          <textarea type="text" id="addit" name="Message" value={Message} onChange={this.handleChange} />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
