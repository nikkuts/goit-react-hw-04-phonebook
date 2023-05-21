import React, { useState } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

export default function App () {
    const [contacts, setContacts] = useState([
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ]);
    const [filter, setFilter] = useState('');

    const addContact = (name, number) => {

      if(contacts.some(contacts => contacts.name === name)) {
              alert(`${name} is already in contacts`);
              return;
            } 
            else {
              setContacts([...contacts, {
                name: name,
                number: number,
                id: nanoid(),
                }]); 
            } 
      };
      
    const deleteContact = name => {
        const index = contacts.findIndex(contact => contact.name === name);
        contacts.splice(index,1);
        setContacts([...contacts]);
      };

    const changeFilter = e => {
        setFilter(e.target.value); console.log(e.target.value);
      };

    const getVisibleContacts = () => {
        const normalizedFilter = filter.toLowerCase();
    
        return contacts.filter(({name}) => 
        name.toLowerCase().includes(normalizedFilter));
      };
      
    return (
        <div>
          <h1>Phonebook</h1>
            <ContactForm 
            onSubmit={addContact}
            />   
          <h2>Contacts</h2>
            <Filter
            value={filter}
            onChange={changeFilter}
            />  
            <ContactList 
            arrayNames={getVisibleContacts()}
            onClick={deleteContact}
            /> 
        </div>
      );
};