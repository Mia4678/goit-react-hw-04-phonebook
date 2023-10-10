import React from 'react';
import {
  ContactItemContainer,
  ContactInfo,
  ContactName,
  DeleteButton,
  ContactNumber,
} from './ContactItem.styles';

// class ContactItem extends Component {
//   handleDelete = () => {
//     this.props.onDeleteContact(this.props.contact.id);
//   };

//   render() {
//     const { contact } = this.props;
//     return (
//       <ContactItemContainer>
//         <ContactInfo>
//           <ContactName>Name: {contact.name}</ContactName>
//           <DeleteButton onClick={this.handleDelete}>Delete</DeleteButton>
//         </ContactInfo>
//         <ContactNumber>Phone: {contact.number}</ContactNumber>
//       </ContactItemContainer>
//     );
//   }
// }

// export default ContactItem;

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
