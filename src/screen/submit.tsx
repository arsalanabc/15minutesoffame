import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import EmailForm from '../components/SubmitForm';
import HeaderBar from '../components/HeaderBar';

function Submit() {
  return (
    <div>
      <HeaderBar title='Submit a post'/>
      <div className="App">
            <EmailForm />
          </div>
    </div>
  );
}

export default Submit;
