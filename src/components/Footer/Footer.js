import { Typography } from '@mui/material';
import React from 'react'
import useStyles from './style.js';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';
import Phone from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Link from '@mui/material/Link';

function Footer() {
  const classes = useStyles();

  return (
    <>
        <div className={classes.footer}>
            <div className={classes.logos}>
                <Typography> Get connected to out network : </Typography>
                <div className={classes.container}>
                    <Link href="https://www.facebook.com/" target="_blank">
                        <FacebookIcon className={classes.icon}/>
                    </Link>
                    <Link href="https://twitter.com/" target="_blank">
                        <TwitterIcon className={classes.icon}/>
                    </Link>
                    <Link href="https://mail.google.com/" target="_blank">
                        <EmailIcon className={classes.icon}/>
                    </Link>
                    <Link href="https://www.instagram.com/" target="_blank">
                        <InstagramIcon className={classes.icon}/>
                    </Link>
                    <Link href="https://www.linkedin.com/" target="_blank">
                        <LinkedInIcon className={classes.icon}/>
                    </Link>
                    <Link href="https://github.com/" target="_blank">
                        <GitHubIcon className={classes.icon}/>
                    </Link>
                </div>
            </div>    
            <div className={classes.container1}>
                <div className={classes.links}>
                    UseFull Links 
                    <div className={classes.info}>
                        <a href="https://alan.app/" target='_blank' style={{color: 'white'}}>ALAN AI</a>
                        <br></br>
                        <a href="https://newsapi.org/" target='_blank' style={{color: 'white'}}>NEWS API</a>
                    </div>
                </div>
                <div className={classes.contact}>
                    Contact info  
                    <div className={classes.info}>
                        <Phone /> +0123456789 <br></br>
                        <EmailIcon /> alanAI@gmail.com
                    </div>    
                </div>
            </div>
        </div>
        <Typography className={classes.copyright}>
            © 2022 Copyright: AI - NEWS
        </Typography>
    </>
  )
}

export default Footer