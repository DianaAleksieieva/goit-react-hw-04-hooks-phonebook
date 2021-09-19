import React from 'react';
import { ContactStyledList, P, DeleteButton } from '../App.styled.jsx';

const ContactList = ({ contacts, deleteContact }) => (
     <ContactStyledList> {contacts.map(({ id, name, number }) => (
      <li key={id}>
             <P>{name}:</P> <P>{number}</P>
        <DeleteButton
          type="button"
          onClick={() => deleteContact(id)}
        >Delete</DeleteButton></li>
      ))}</ContactStyledList>
);

export default ContactList;