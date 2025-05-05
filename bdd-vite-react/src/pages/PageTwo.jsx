import React from 'react';
import { useSharedService } from '../services/sharedService';
import { getMockData } from '../services/mockDataService';
import { DataGridWrapper } from '../components';

function PageTwo() {
  const { getMessage } = useSharedService();
  const rows = getMockData();
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'value', headerName: 'Value', width: 150 },
  ];

  return (
      <div>
        <h1>Page Two</h1>
        <p>{getMessage()}</p>
        <div data-test-example="get-data">Get Data in ways that are not fragile</div>
        <DataGridWrapper rows={rows} columns={columns} pageSize={5} checkboxSelection />
      </div>
  );
}

export default PageTwo;
