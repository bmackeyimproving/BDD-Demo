import React from 'react';

export default function Farewell({ name, message }) {
  return (
    <div>
      <h2>Goodbye, {name}!</h2>
      <p>{message}</p>
    </div>
  );
}