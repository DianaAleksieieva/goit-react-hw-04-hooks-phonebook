import React, { useState,useEffect  } from 'react';
import { Container} from './App.styled.jsx';
import Form from './Form/Form';
import Filter from './Filter/Filter';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './ContactList/ContactList';

export default function App() {
  const [contacts, setContacts] = useState(() =>JSON.parse(window.localStorage.getItem('contacts')) ?? {});
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
     window.localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

const addContact = contsctInfo => {
const newContact = {
      id : uuidv4(),
      name: contsctInfo.name,
      number: contsctInfo.number
  }

const isNameExist = contacts.find(({ name }) => contsctInfo.name === name);
    if (isNameExist) {
      alert(`${contsctInfo.name}is already in contacts`);
      return
    } 
  setContacts(prevContacts  => [ ...prevContacts, newContact]);
}
  
const deleteContact = contactId => {
    setContacts(prevContacts => (prevContacts.filter(contact =>
      contact.id !== contactId)
    ));
  };

const changeFilter = event => {
    setFilter(event.currentTarget.value);
};
const findContact = () => {
    const normalizedFilter = filter.toLowerCase();
    const filteredContacts = contacts.filter(contacts =>
      contacts.name.toLowerCase().includes(normalizedFilter),
    );
    return filteredContacts
  };

return (
  <Container >
      <h2>PhoneBook</h2>
      <Form onSubmit={addContact} contactsBook={contacts} />
      <h2>Contacts</h2>
      <ContactList contacts={findContact()}
        deleteContact={deleteContact} />
      <Filter value={filter}
        onChange={changeFilter} />
    </Container>
  )
}

