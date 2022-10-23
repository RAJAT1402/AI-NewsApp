import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import NewsImg from '../images/news.jpg'
export default function About() {
  return (
    <Card sx={{ maxWidth: '100vw' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="400"
          // width="100"
          image={NewsImg}
          alt="news"
        />
        <CardContent className='about'>
          <Typography gutterBottom variant="h5" component="div" className='about'>
            About The Application
          </Typography>
          <Typography variant="body2" className="about-text">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}