/* eslint-disable react/button-has-type */
import React from 'react';

export default function TodosList(props) {
  // eslint-disable-next-line react/prop-types
  const {
    // eslint-disable-next-line react/prop-types
    title, completed, id, handlechange, deletelist,
  } = props;

  const handleChange = () => {
    handlechange(id);
  };

  const deleteList = () => {
    deletelist(id);
  };

  return (

    <li>
      <input type="checkbox" checked={completed} onChange={handleChange} />
      {title}

      <button onClick={deleteList}>Delete</button>

    </li>

  );
}
