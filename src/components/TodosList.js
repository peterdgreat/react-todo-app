/* eslint-disable react/button-has-type */
import React from 'react';

export default function TodosList(props) {
  // eslint-disable-next-line react/prop-types
  const {
    // eslint-disable-next-line react/prop-types
    title, completed, id, handlechange,
  } = props;

  const handleChange = () => {
    handlechange(id);
  };

  return (

    <li>
      <input type="checkbox" checked={completed} onChange={handleChange} />
      {title}

      <button>Delete</button>

    </li>

  );
}
