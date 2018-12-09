import React, { Component } from "react";
import Contact from "./Contact";
import { Consumer } from "../Context";

class Contacts extends Component {
  deleteContact = id => {
    const { contacts } = this.state;

    const NewContacts = contacts.filter(contact => contact.id !== id);

    this.setState({
      contacts: NewContacts
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { contacts } = value;
          return (
            <React.Fragment>
              {contacts.map(contact => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </React.Fragment>
          );
        }}
      </Consumer>
    );
  }
}

export default Contacts;
