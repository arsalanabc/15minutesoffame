import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import EmailForm from '../components/SubmitForm';

function Submit() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Submit Page</Typography>
          <div style={{ flexGrow: 1 }} />
          <AccountCircle />
        </Toolbar>
      </AppBar>
      <div className="App">
            <EmailForm />
          </div>
    </div>
  );
}

export default Submit;
