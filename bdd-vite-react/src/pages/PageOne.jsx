import React from 'react';
import { useSharedService } from '../services/sharedService';
import { Child } from '../components';
import { useState } from 'react';

function PageOne() {
  const { getMessage } = useSharedService();
  const [parentMessage] = useState('Hello from parent!');
  const [secondMessage] = useState('This is the second message from parent!');
  
  return (
    <div>
      <h1>Page One</h1>
      <p>{getMessage()}</p>
      <Child message={parentMessage} secondMessage={secondMessage} />
    </div>
  );
}

export default PageOne;
