import 'normalize.css'
import './App.css';
import Header from './Header';
import ProjectsContainer from './ProjectsContainer'
import About from './About';
import Navbar from './Navbar';
import SkillsContainer from './SkillsContainer';
import ContactForm from './ContactForm';
import Footer from './Footer';
import Loading from './Loading';
import { ThemeProvider } from '@material-ui/styles'
import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  typography: {
    allVariants: {
      // color: '#333',
    },
    h1: {
      fontFamily: ['Oswald', 'sans-serif']
    },
    h2: {
      fontFamily: ['Oswald', 'sans-serif']
    }
  },
  palette: {
    red: {
      // Purple and green play nicely together.
      main: 'rgba(246,79,85, 1)',
      highlight: 'rgba(246,79,85,0.5)'
    },
    orange: {
      // This is green.A700 as hex.
      main: '#ed9479',
      highlight: 'rgba(237,148,121,0.5)'
    },
    yellow: {
      // This is green.A700 as hex.
      main: '#f1e076',
      highlight: 'rgba(241,224,118,0.5)'
    },
    green: {
      // This is green.A700 as hex.
      main: '#C0E5D5',
      highlight: 'rgba(151,212,185, 0.5)',
    },
    blue: {
      // This is green.A700 as hex.
      main: '#A2D4E1',
      highlight: 'rgba(101,184,206,0.3)'
    },
    pink: {
      // This is green.A700 as hex.
      main: '#ec95ce',
      highlight: 'rgba(236,149,206,0.5)'
    },
    text: {
      red: 'rgba(246,79,85, 1)',
      orange: '#ed9479',
      yellow: '#f1e076',
    }
  },
});

function App() {
  return (
    <ThemeProvider className="App" theme={theme}>
      <Loading/>
      <Navbar />
      <Header />
      <About />
      <SkillsContainer />
      <ProjectsContainer />
      <ContactForm />
      <Footer/>
    </ThemeProvider>
  );
}

export default App;