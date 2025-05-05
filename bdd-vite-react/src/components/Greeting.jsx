import React from 'react';
import Farewell from './Farewell';

export default function Greeting({ name }) {
  const message = `Hello, ${name}!`;
  return (
    <div>
      <h2>{message}</h2>
      <Farewell name={name} message={message} />
    </div>
  );
}