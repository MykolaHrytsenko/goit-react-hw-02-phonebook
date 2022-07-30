import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  handleInputChange = event => {
    // console.log(event.currentTarget.value);

    this.setState({ name: event.currentTarget.value });
  };

  render() {
    return (
      <div>
  <h1>Phonebook</h1>
  <ContactForm ... />

  <h2>Contacts</h2>
  <Filter ... />
  <ContactList ... />
</div>
    );
  }
}
