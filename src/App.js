import { useState } from 'react';
import Header from './Header';
import ProjectsContainer from './ProjectsContainer'
import About from './About';
import Navbar from './Navbar';
import SkillsContainer from './SkillsContainer';
import ContactForm from './ContactForm';
import Footer from './Footer';
import Loader from './Loader';
import { ThemeProvider } from '@material-ui/styles'
import theme from './config/theme';
import 'normalize.css'
import './styles/App.css';


function App() {
  const [isLoading, setIsLoading] = useState(true)
  return (
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
}

export default App;