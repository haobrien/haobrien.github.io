import 'normalize.css'
import './styles/App.css';
import Header from './Header';
import ProjectsContainer from './ProjectsContainer'
import About from './About';
import Navbar from './Navbar';
import SkillsContainer from './SkillsContainer';
import ContactForm from './ContactForm';
import Footer from './Footer';
import Loader from './Loader';
import { ThemeProvider } from '@material-ui/styles'
import { createTheme } from '@material-ui/core/styles'
import { useState } from 'react';

const theme = createTheme({
  typography: {
    allVariants: {
      // color: '#3d405b',
    },
    h1: {
      fontFamily: ['Oswald', 'sans-serif'],
    },
    h2: {
      fontFamily: ['Oswald', 'sans-serif'],
    },
  },
  overrides: {
    MuiTypography: {
      gutterBottom: {
        marginBottom: '3rem'
      }
    }
  },
  palette: {
    // red: {
    //   // Purple and green play nicely together.
    //   main: '#f4f1de',
    //   highlight: 'rgba(244, 241, 222,0.5)'
    // },
    white: {
      main: '#f8f8f8'
    },
    light: {
      // Purple and green play nicely together.
      main: '#f8f8f8',
      highlight: 'rgba(246,79,85,0.5)'
    },
    dark: {
      // This is green.A700 as hex.
      main: '#5e6472',
      highlight: 'rgba(101,184,206,0.5)'
    },
    primary: {
      // This is green.A700 as hex.
      main: '#ffa69e',
      highlight: 'rgba(255, 166, 158,0.5)'
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#aed9e0',
      highlight: 'rgba(174, 217, 224,0.5)'
    },
    tertiary: {
      // This is green.A700 as hex.
      main: '#75E6CF',
      highlight: 'rgba(117, 230, 207, 0.5)',
    },
    // pink: {
    //   // This is green.A700 as hex.
    //   main: '#f5cac3',
    //   highlight: 'rgba(236,149,206,0.5)'
    // },
  },
});

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (

    <div>
      <ThemeProvider className="App" theme={theme}><Navbar />
        {isLoading && <Loader isLoading={isLoading} setIsLoading={setIsLoading} />}
        <Header />
        <About />
        <SkillsContainer />
        <ProjectsContainer />
        <ContactForm />
        <Footer />
      </ThemeProvider>
      )
    </div>
  );
}

export default App;