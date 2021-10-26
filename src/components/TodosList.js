/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import styles from './TodoItem.module.css';

export default function TodosList(props) {
  // eslint-disable-next-line react/prop-types
  const {
    // eslint-disable-next-line react/prop-types
    title, completed, id, handlechange, deletelist, setupdate,
  } = props;
  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };
  const [edit, setedit] = useState(false);
  const handleChange = () => {
    handlechange(id);
  };
  let viewMode = {};
  let editMode = {};

  if (edit) {
    viewMode = { display: 'none' };
    editMode = { display: 'block' };
  } else {
    viewMode = { display: 'block' };
    editMode = { display: 'none' };
  }
  const deleteList = () => {
    deletelist(id);
  };

  const handleEditing = () => {
    setedit(!edit);
  };

  const setUpdate = (e) => {
    setupdate(e.target.value, id);
  };
  const handleUpdateDone = (e) => {
    if (e.key === 'Enter') {
      setedit(!edit);
    }
  };
  return (

    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input type="checkbox" checked={completed} onChange={handleChange} className={styles.checkbox} />
        <span style={completed ? completedStyle : null}>
          {title}
        </span>

        <button onClick={deleteList}>Delete</button>
      </div>
      <input type="text" style={editMode} className={styles.textInput} value={title} onChange={setUpdate} onKeyDown={handleUpdateDone} />
    </li>

  );
}
