import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Typography, Container, Switch } from '@mui/material';
import { AccountCircle, Route, Router } from '@mui/icons-material';
import { getTodaysFame } from '../api/ApiClient';
import { InstagramEmbed, TwitterEmbed, YouTubeEmbed } from 'react-social-media-embed';
import ImageCard from '../components/MainView/ImageCard';

export type ImageFields = {
  id: string,
  link: string
  image: string
}

function Home() {
  const [data, setData] = useState<ImageFields>();

  useEffect(() => {
    getTodaysFame()
    .then((data:ImageFields) => setData(data))
      .catch((error: any) => console.error(error));
  }, []);

  return (
      <div className="App">
        <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Welcome to Material-UI!
          </Typography>
          <Typography variant="body1">
            This is a simple example of using Material-UI components in a React app.
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ImageCard link='' id='' image='https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmFuZG9tfGVufDB8fDB8fHww&w=1000&q=80' />
          </div>
             
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <YouTubeEmbed url="https://www.youtube.com/watch?v=HpVOs5imUN0" width={560} height={315} />
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TwitterEmbed url="https://twitter.com/MichelleObama/status/1179770850754596865?s=20" width={"100%"} />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" width={"100%"} />
          </div>

        </Container>
      </div>
  );
}

export default Home;
