import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '45vh',
    padding: '10%',
    borderRadius: 100,
    color: 'white',
  },
  infoCard: {
    display: 'flex', flexDirection: 'column', textAlign: 'center',
  },
  container: {
    padding: '0 5%', width: '100%', margin: 0, backgroundColor: '#eeeeee'
  },
  heading: {
    margin: '1.5rem',
    fontWeight: 'bold',
    // color: '-webkit-linear-gradient(#eee, #333)'
    textAlign: 'center',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    background: 'linear-gradient(45deg, #651fff 50%, #e040fb 90%)',
  }
});
