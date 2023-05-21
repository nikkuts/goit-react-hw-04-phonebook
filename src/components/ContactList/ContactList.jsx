import React from "react";
import PropTypes from 'prop-types';
import Contact from "components/Contact/Contact";
import css from './ContactList.module.css';

export default function ContactList ({arrayNames, onClick}) {

    return (
    <ul className={css.list}>
    {arrayNames.map(({id, name, number}) => (
      <Contact
      id={id}
      name={name}
      number={number}
      onClick={onClick}
      />
    ))}
    </ul>
    );       
};
        
ContactList.propTypes = {
    arrayNames: PropTypes.arrayOf(PropTypes.shape({
    })),
    onClick: PropTypes.func.isRequired,
  };