import 'normalize.css'
import './App.css';
import Header from './Header';
import { ThemeProvider } from '@material-ui/styles'
import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
  typography: {
    allVariants: {
      color: '#333',
      fontFamily: ['Roboto', 'sans-serif'],
    },
    // h1: {
    //   fontFamily: ['Allison', 'cursive']
    // }
  },
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: 'rgba(246,79,85, 1)',
      faded: 'rgba(246,79,85, 0.5)'
    },
    secondary: {
      // This is green.A700 as hex.
      main: 'rgba(151,212,185, 1)',
      faded: 'rgba(151,212,185, 0.5)',
    },
  },
});

function App() {
  return (
    <ThemeProvider className="App" theme={theme}>
      <Header />
    </ThemeProvider>
  );
}

export default App;
