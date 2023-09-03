import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import { type } from 'os';

export type HeaderTypes = {
  title: string
}

function HeaderBar({title}: HeaderTypes) {
  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">{title}</Typography>
          <div style={{ flexGrow: 1 }} />
          <AccountCircle />
        </Toolbar>
      </AppBar>
  );
}

export default HeaderBar;
