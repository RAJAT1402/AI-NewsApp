import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { createTheme, responsiveFontSizes, ThemeProvider } from '@mui/material/styles';
import NewsImg from '../images/news.jpg'

export default function About() {
  let theme = createTheme();
  theme = responsiveFontSizes(theme);

  return (
    <Card sx={{ maxWidth: '100vw' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="411vh"
          width="100vw"
          image={NewsImg}
          alt="news"
          
        />
        <CardContent className='about'>
          <Typography gutterBottom variant="h4" component="div" className='about-heading'>
            <strong>About AI - NEWS</strong>
          </Typography>
       
            <p className="about-text">
              AI NEWS   make  news  reading  more  fun  and interactive  using  the ALAN  voice  assistant. 
              The  web  app is completely interactive and  the user is  able to get news from any  topic of  interest just  by  speaking. 
              The  user can  access news by category, popular news channels,  by terms, 
              The web application will reduce the amount of human physical as well as mental effort required by the user to perform previously 
              and will offer a much more interesting way of getting news and information.
              This application gives an exiting new, much faster, more
              reliable, easy-to-use and a very nice user-friendly
              experience which will help the user to stay informed and
              keeps updated with the events happening around the
              world.
            </p>
        
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
