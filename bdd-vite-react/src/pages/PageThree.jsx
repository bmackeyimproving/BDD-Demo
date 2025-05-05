import React from 'react';
import { useSharedService } from '../services/sharedService';
import { HelloWorld, Greeting, Adder } from '../components';

function PageThree() {
  const { getMessage } = useSharedService();
  return (
    <div>
      <h1>Page Three</h1>
      <p>{getMessage()}</p>
      <div className="card">
        <HelloWorld />
        <Greeting name="Alice" />
        <Adder />
      </div>
    </div>
  );
}

export default PageThree;
