import React from "react";
import PropTypes from 'prop-types';
import css from './Filter.module.css';

const Filter = ({ value, onChange }) => (
        <div className={css.filterFields}>
          <label>
            Find contacts by name
          <input
              type="text"
              name="filter"
              value={value}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
              onChange={onChange}
          />
          </label>
        </div>
  );
    
  Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
  };

export default Filter;