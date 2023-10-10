import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import { ContactListContainer } from './ContactList.styles';

function ContactList({ contacts, onDeleteContact }) {
  return (
    <ContactListContainer>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          contact={contact}
          onDeleteContact={onDeleteContact}
        />
      ))}
    </ContactListContainer>
  );
}

export default ContactList;
