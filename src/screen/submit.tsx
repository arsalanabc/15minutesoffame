import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';

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
      <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Submit your content
        </Typography>
        <Typography variant="body1">
          This is the Submit page where users can submit their content.
        </Typography>
      </Container>
    </div>
  );
}

export default Submit;
