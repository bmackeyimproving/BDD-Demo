import React from 'react';
import { useSharedService } from '../services/sharedService';
import Child from '../Components/Child';
import { useState } from 'react';

function PageThree() {
  const { getMessage } = useSharedService();
  const [parentMessage] = useState('Hello from parent!');

  return (
    <div>
      <h1>Page Three</h1>
      <p>{getMessage()}</p>
      <p>{parentMessage}</p>
      <Child message={parentMessage} />
    </div>
  );
}

export default PageThree;
