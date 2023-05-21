import { useEffect, useState } from "react";
import { nanoid } from 'nanoid';
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import useLocalStorage from "hooks/useLocalStorage";

export default function App () {
    const [contacts, setContacts] = useLocalStorage('contacts', []);
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

      useEffect(() => {
        window.localStorage.setItem('contacts', JSON.stringify(contacts));
      }, [contacts]);
      
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