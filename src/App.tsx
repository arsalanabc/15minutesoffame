import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import { AccountCircle } from '@mui/icons-material';
import ImageCard from './components/MainView/ImageCard';
import {getTodaysFame} from './api/ApiClient'

export type ImageFields = {
  id: string,
  link: string
  image: string
}

function App() {
  const [data, setData] = useState<ImageFields>();

  useEffect(() => {
    getTodaysFame()
    .then((data:ImageFields) => setData(data))
      .catch(error => console.error(error));
  }, []);

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
        <ImageCard 
          id={"sd"} 
          link="" 
          image={data?.image||""} />
      </Container>
    </div>
  );
}

export default App;
