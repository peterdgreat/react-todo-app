import React from 'react';

export default function TodosList(props) {
  // eslint-disable-next-line react/prop-types
  const { title, completed } = props;

  return (
    <ul>
      <li>
        <input type="checkbox" checked={completed} />
        {title}

      </li>
    </ul>
  );
}
