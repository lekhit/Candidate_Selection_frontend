import '../styles/globals.css'
import Nav from '../components/nav'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function MyApp({ Component, pageProps }) {
  return <>
  <Component {...pageProps} >

</Component>
<Nav/>
  </>
  

  
}

export default MyApp
