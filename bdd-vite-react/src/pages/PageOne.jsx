import React from 'react';
import { useSharedService } from '../services/sharedService';
import HelloWorld from '../components/HelloWorld';
import Greeting from '../components/Greeting';
import Adder from '../components/Adder';

function PageOne() {
  const { getMessage } = useSharedService();
  return (
    <div>
      <h1>Page One</h1>
      <p>{getMessage()}</p>
      <div className="card">
        <HelloWorld />
        <Greeting name="Alice" />
        <Adder />
      </div>
    </div>
  );
}

export default PageOne;
