import React from 'react';
import { useSharedService } from '../services/sharedService';

function PageTwo() {
  const { getMessage } = useSharedService();
  return (
    <div>
      <h1>Page Two</h1>
      <p>{getMessage()}</p>
    </div>
  );
}

export default PageTwo;
