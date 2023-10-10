import React, { useState } from 'react';
import {
  ContactFormContainer,
  Form,
  Label,
  Input,
  SubmitButton,
} from './ContactForm.styles';

const INITIAL_STATE = {
  name: '',
  number: '',
};

function ContactForm({ createContact }) {
  const [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value.trim(),
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    createContact(formData);
    setFormData(INITIAL_STATE);
  };

  return (
    <ContactFormContainer>
      <Form onSubmit={handleSubmit}>
        <Label>
          Name:
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
          />
        </Label>
        <Label>
          Phone Number:
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={formData.number}
            onChange={handleChange}
            placeholder="Phone Number"
          />
        </Label>
        <SubmitButton type="submit">Add Contact</SubmitButton>
      </Form>
    </ContactFormContainer>
  );
}

export default ContactForm;
