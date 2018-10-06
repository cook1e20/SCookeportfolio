import React, { Component } from 'react';
import './stylesheets/Contact.css';


export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: 'Name',
      Email: 'Email',
      Message: 'Message',
    };

    this.handleChange = this.handleChange.bind(this);
    this.selected = this.selected.bind(this);
  }

  selected(event) {
    if (event.target.name === event.target.value) {
      this.setState({ [event.target.name]: '' });
    }
  }


  handleChange(event) {
    this.setState({ [event.target.name]: event.value });
  }

  render() {
    const { Name, Email, Message } = this.state;
    return (

      <div id="contact-form">
        <h3 className="title">Contact</h3>
        <form name="contact" id="contact-form" method="POST" netlify="true">
          <input type="text" id="Name" name="Name" value={Name} onSelect={this.selected} onChange={this.handleChange} />
          <input type="email" id="Email" name="Email" value={Email} onSelect={this.selected} onChange={this.handleChange} />
          <textarea type="text" id="addit" name="Message" value={Message} onSelect={this.selected} onChange={this.handleChange} />

          <button type="submit">Submit</button>
        </form>
      </div>

    );
  }
}
