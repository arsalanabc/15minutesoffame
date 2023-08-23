import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import './App.css';

function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Material-UI React App</Typography>
          <div style={{ flexGrow: 1 }} />
          <AccountCircle />
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to Material-UI!
        </Typography>
        <Typography variant="body1">
          This is a simple example of using Material-UI components in a React app.
        </Typography>
      </Container>
    </div>
  );
}

export default App;
