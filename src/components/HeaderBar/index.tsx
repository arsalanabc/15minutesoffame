import React from 'react'
import { AppBar, Link, Toolbar, Typography } from '@mui/material'

export interface HeaderTypes {
  title: string
  redirectPage: string
}

function getRedirectPage (redirectTo: string): React.ReactElement {
  if (redirectTo === 'submit') {
    return (<Link href="/submit" color={'#fff'}>
      <Typography variant="h6">Submit</Typography>
    </Link>)
  } else {
    return (<Link href="/" color={'#fff'}>
    <Typography variant="h6">Home</Typography>
  </Link>)
  }
}

function HeaderBar ({ title, redirectPage }: HeaderTypes): React.ReactElement {
  return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">{title}</Typography>
          <div style={{ flexGrow: 1 }} />
          {getRedirectPage(redirectPage)}
        </Toolbar>
      </AppBar>
  )
}

export default HeaderBar
