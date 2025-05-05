import React from 'react';
import { useSharedService } from '../services/sharedService';
import Child from '../components/Child';
import { useState } from 'react';

function PageThree() {
  const { getMessage } = useSharedService();
  const [parentMessage] = useState('Hello from parent!');
  const [secondMessage] = useState('This is the second message from parent!');

  return (
    <div>
      <h1>Page Three</h1>
      <p>{getMessage()}</p>
      <p>{parentMessage}</p>
      <Child message={parentMessage} secondMessage={secondMessage} />
    </div>
  );
}

export default PageThree;
