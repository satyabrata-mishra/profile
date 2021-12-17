import './App.css';
import About from './Components/About';
import Education from './Components/Education';
import Footer from './Components/Footer';
import Intropage from './Components/Intropage';
import Projects from './Components/Projects';
import Skills from './Components/Skills';
function App() {
  document.title="Satyabrata Mishra-Profile";
  return (
    <div className='app'>
      <Intropage />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}
export default App;
