import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { DataGrid } from '@mui/x-data-grid';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
  },
});

/**
 * DataGridWrapper component
 * Encapsulates MUI DataGrid with theming and layout for reuse and abstraction.
 * @param {object[]} rows - The row data for the grid
 * @param {object[]} columns - The column definitions for the grid
 * @param {number} pageSize - Number of rows per page
 * @param {boolean} checkboxSelection - Enable checkbox selection
 */
function DataGridWrapper({ rows, columns, pageSize = 5, checkboxSelection = false }) {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={pageSize}
          checkboxSelection={checkboxSelection}
        />
      </div>
    </ThemeProvider>
  );
}

export default DataGridWrapper;
