import React from 'react';
import { useSharedService } from '../services/sharedService';

function PageThree() {
  const { getMessage } = useSharedService();

  return (
      <div>
        <h1>Page Three</h1>
        <p>{getMessage()}</p>
      </div>
  );
}

export default PageThree;
