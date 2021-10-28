/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FaPlusCircle } from 'react-icons/fa';

export default function InputTodo(props) {
  const { handlesubmitprop } = props;
  const [state, setstate] = useState('');
  const onChange = (e) => {
    setstate(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.trim()) {
      handlesubmitprop(state);
      setstate('');
    } else {
      alert('Please enter a valid value');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input className="input-text" type="text" placeholder="Add Todo..." onChange={onChange} value={state} />
      <button className="input-submit" style={{ color: 'darkcyan', fontSize: '20px', marginTop: '2px' }}>
        <FaPlusCircle />
      </button>
    </form>
  );
}

InputTodo.propTypes = {
  handlesubmitprop: PropTypes.func.isRequired,
};
