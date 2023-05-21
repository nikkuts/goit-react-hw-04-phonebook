import { useState } from "react";
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export default function ContactForm ({onSubmit}) {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');

    const handleChange = e => {
        
        switch(e.target.name) {
            case 'name':
                setName(e.target.value);
                break;
            case 'number':
                setNumber(e.target.value);
                break;
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(name, number); 
        e.currentTarget.reset();
      };

      return (
        <form className={css.form} onSubmit={handleSubmit}>
          <div className={css.formFields}>
            <label>
              Name
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                onChange={handleChange}
            />
            </label>
            <label>
              Number
            <input
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                onChange={handleChange}
            />
            </label>
          </div>
          <button type="submit" className={css.formBtn}>Add contact</button>
        </form>
        );     
};

ContactForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };