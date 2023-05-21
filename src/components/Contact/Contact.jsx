import React from "react";
import PropTypes from 'prop-types';
import css from './Contact.module.css';

export default function Contact ({id, name, number, onClick}) {
  const handleClick = e => {
    onClick(e.target.name); 
  };

    return (
      <li className={css.item} key={id}>
        {name}: {number}
        <button type="button" name={name} className={css.itemBtn} onClick={handleClick}>
          Delete
        </button>
      </li>
    )
  };

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};