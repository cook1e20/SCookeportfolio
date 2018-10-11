import React, { Component } from 'react';
import './stylesheets/Contact.css';


const encode = data => Object.keys(data)
  .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
  .join('&');

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

  handleSubmit = (e) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...this.state }),
    })
      .then(() => alert('Success!'))
      .catch(error => alert(error));

    e.preventDefault();
  };

  selected(event) {
    if (event.target.name === event.target.value) {
      this.setState({ [event.target.name]: '' });
    }
  }


  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { Name, Email, Message } = this.state;
    return (

      <div className="contact-form">
        <h3 className="title">Contact</h3>
        <form name="contact" className="contact-form" id="contact-form" onSubmit={this.handleSubmit}>
          <input type="text" id="Name" name="Name" value={Name} onSelect={this.selected} onChange={this.handleChange} />
          <input type="email" id="Email" name="Email" value={Email} onSelect={this.selected} onChange={this.handleChange} />
          <textarea type="text" id="addit" name="Message" value={Message} onSelect={this.selected} onChange={this.handleChange} />

          <button className="inTouch" type="submit">Submit</button>
        </form>
      </div>

    );
  }
}
