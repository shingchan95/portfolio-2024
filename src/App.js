// import logo from './logo.svg';
import './App.css';
import Cover from './pages/Cover';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact'
import BackToTopButton from './components/BackToTopButton';


function App() {
  return (
    <>
      <Cover />
      <AboutMe />
      <Portfolio />
      <Contact />
      <BackToTopButton />
    </>
  );
}

export default App;
