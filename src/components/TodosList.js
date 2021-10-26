/* eslint-disable react/button-has-type */
import React from 'react';
import styles from './TodoItem.module.css';

export default function TodosList(props) {
  // eslint-disable-next-line react/prop-types
  const {
    // eslint-disable-next-line react/prop-types
    title, completed, id, handlechange, deletelist,
  } = props;
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const handleChange = () => {
    handlechange(id);
  };

  const deleteList = () => {
    deletelist(id);
  };

  return (

    <li className={styles.item}>
      <input type="checkbox" checked={completed} onChange={handleChange} className={styles.checkbox} />
      <span style={completed ? completedStyle : null}>
        {title}
      </span>

      <button onClick={deleteList}>Delete</button>

    </li>

  );
}
