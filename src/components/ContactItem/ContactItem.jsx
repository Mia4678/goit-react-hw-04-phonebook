import React from 'react';
import {
  ContactItemContainer,
  ContactInfo,
  ContactName,
  DeleteButton,
  ContactNumber,
} from './ContactItem.styles';

function ContactItem({ contact, onDeleteContact }) {
  const handleDelete = () => {
    onDeleteContact(contact.id);
  };

  return (
    <ContactItemContainer>
      <ContactInfo>
        <ContactName>Name: {contact.name}</ContactName>
        <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
      </ContactInfo>
      <ContactNumber>Phone: {contact.number}</ContactNumber>
    </ContactItemContainer>
  );
}

export default ContactItem;
