import React from 'react';
import { useSharedService } from '../services/sharedService';
import { getMockData } from '../services/mockDataService';
import { DataGrid } from '@mui/x-data-grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

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
        <div data-testid="get-data">Get Data in ways that are not fragile</div>
        <ThemeProvider theme={theme}>
          <div style={{ height: 400, width: '100%' }}>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />
          </div>
        </ThemeProvider>
      </div>
  );
}

export default PageTwo;
