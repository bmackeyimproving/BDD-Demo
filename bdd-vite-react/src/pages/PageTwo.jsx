import React from 'react';
import { useSharedService } from '../services/sharedService';

function PageTwo() {
  const { getMessage } = useSharedService();
  return (
    <div>
      <h1>Page Two</h1>
      <p>{getMessage()}</p>
      <div data-testid="get-data">Get Data in ways that are not fragile</div>
    </div>
  );
}

export default PageTwo;
