import React from 'react'
import { Container, Card, CardMedia } from '@mui/material'

function ImageCard ({ image }: { image: string }): React.ReactElement {
  return (
      <Container maxWidth="sm" style={{ marginTop: '2rem' }}>

        <Card style={{ marginTop: '2rem' }}>
          <CardMedia
            component="img"
            image={image}
            alt="Sample Image"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Card>
      </Container>
  )
}

export default ImageCard
