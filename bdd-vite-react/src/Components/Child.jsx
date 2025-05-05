import React from 'react';

function Child({ message, secondMessage }) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Message from parent: {message}</p>
      <p>Second message from parent: {secondMessage}</p>
    </div>
  );
}

export default Child;
