import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  footer:{
    backgroundColor: '#262626',
    color: 'white',
    marginTop: '2.2rem',
  },
  logos:{
    padding: '2rem',
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center'

  }, 
  container:{
    marginLeft: '2rem',
    display: 'flex',
    justifyContent: 'space-around'
  },
  copyright: {
    padding:'0.2rem',
    backgroundColor: '#1E1E1E',
    textAlign: 'center',
    color: 'white'
  },
  icon:{
    marginLeft: '1rem',
    color: 'white'
  },
  container1:{
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem'
  },
  links: {
    textAlign: 'center',
    marginRight: '1rem'
  },
  contact: {
    marginLeft: '1rem',
    textAlign: 'center',
},
  info:{
    marginTop: '1rem',
    color: 'white',
    display: 'flex',
    flexDirection: 'column'
    // padding: '1rem',
  },
  links1:{
    '&:hover': {
      background: 'blue',
    },
    textDecoration: 'none',
    marginBottom: '1rem',
  }
});
