import { Typography, Container, Card, CardMedia } from '@mui/material';
import { ImageFields } from '../../App';

function ImageCard ({id, link, image}:ImageFields) {
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
  );
}

export default ImageCard;
