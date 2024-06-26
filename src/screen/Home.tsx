import React, { useEffect, useState } from 'react'
import { Typography, Container } from '@mui/material'
import { PostTypes, getTodaysFame } from '../api/ApiClient'
import { InstagramEmbed, TwitterEmbed, YouTubeEmbed } from 'react-social-media-embed'
import ImageCard from '../components/MainView/ImageCard'
import HeaderBar from '../components/HeaderBar'
import CountdownTimer from '../components/Timer/CountdownTimer'

export interface PostFields {
  id: string
  link: string
  image: string
  type: PostTypes
}

export interface PostResponse {
  id: string
  title: string
  user_id: number
  post_type: string
  unique_code: string
  link: string
  created_at: Date
  updated_at: Date
}

function getCardByPostType ({ data }: { data: PostFields }): React.ReactElement | null {
  switch (data.type) {
    case PostTypes.Image:
      return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
      <ImageCard image={data.link} />
    </div>)
    case PostTypes.Instagram:
      return (<div style={{ display: 'flex', justifyContent: 'center' }}>
      <InstagramEmbed url={data.link} width={'100%'} />
    </div>)
    case PostTypes.YouTube:
      return (<div style={{ display: 'flex', justifyContent: 'center' }}>
        <YouTubeEmbed url={data.link} width={560} height={315} />
      </div>)
    case PostTypes.Twitter:
      return (<div style={{ display: 'flex', justifyContent: 'center' }}>
          <TwitterEmbed url={data.link} width={'100%'} />
        </div>
      )
    default:
      return defaultPost()
  }
}

function defaultPost (): React.ReactElement {
  return (<div style={{ display: 'flex', justifyContent: 'center' }}>
  <Typography variant="h4" component="h1" gutterBottom>
            Welcome to Material-UI!
          </Typography>
          <Typography variant="body1">
            This is a simple example of using Material-UI components in a React app.
          </Typography>
</div>
  )
}

function Home (): React.ReactElement {
  const [data, setData] = useState<PostFields>()

  useEffect(() => {
    getTodaysFame()
      .then(async d => await d.json())
      .then((data: PostResponse) => {
        setData({
          id: data.id,
          link: data.link,
          image: '',
          type: PostTypes[data.post_type as PostTypes]
        })
      })
      .catch((error: any) => { console.error(error) })
  }, [])

  return (
      <div className="App">
        <HeaderBar title='15 minutes of fame' redirectPage='submit' />
        <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
          {(data === undefined) ? defaultPost() : getCardByPostType({ data })}
          <CountdownTimer targetDate={new Date(Date.now() + 15 * 60 * 1000)} />

        </Container>
      </div>
  )
}

export default Home
