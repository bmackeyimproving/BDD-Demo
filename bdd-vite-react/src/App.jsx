import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import { Box, List, ListItemButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <nav className="fixed-nav">
          <Box>
            <List sx={{ display: 'flex' }}>
              <ListItemButton component={Link} to="/">Home</ListItemButton>
              <ListItemButton component={Link} to="/page-two">Data Grid</ListItemButton>
              <ListItemButton component={Link} to="/page-three">Sandbox Page</ListItemButton>
            </List>
          </Box>
        </nav>
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/page-two" element={<PageTwo />} />
          <Route path="/page-three" element={<PageThree />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;