/* eslint-disable react/button-has-type */
import React from 'react';

export default function InputTodo() {
  return (
    <form>
      <input type="text" placeholder="Add Todo..." />
      <button>Submit</button>
    </form>
  );
}
