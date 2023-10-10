import React, { useState, useEffect } from 'react';
import Filter from './Filter/Filter';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { AppContainer } from './App.styles';
import { nanoid } from 'nanoid';

const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = key => {
  return JSON.parse(localStorage.getItem(key));
};

function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const localData = getFromLocalStorage('contacts');
    if (localData) {
      setContacts(localData);
    }
  }, []);

  useEffect(() => {
    saveToLocalStorage('contacts', contacts);
  }, [contacts]);

  const handleFilterChange = filterValue => {
    setFilter(filterValue);
  };

  const createContact = newContactData => {
    const isExist = contacts.find(
      contact => contact.name === newContactData.name
    );

    if (isExist) {
      return alert(`${newContactData.name} is already in contacts`);
    }

    const newContact = {
      ...newContactData,
      id: nanoid(),
    };

    setContacts(prevContacts => [newContact, ...prevContacts]);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <AppContainer>
      <h1>Phonebook</h1>
      <ContactForm createContact={createContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={deleteContact}
      />
    </AppContainer>
  );
}

export default App;
