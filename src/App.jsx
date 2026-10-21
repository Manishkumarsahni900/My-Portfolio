import {useState} from 'react';
import Navbar from './components/Navbar';
import Home from './pages/home'; 
import { BrowserRouter } from 'react-router-dom';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Education from './pages/Education';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <BrowserRouter className="bg-slate-950 text-slate-100 min-h-screen scroll-smooth">
      <div className={`${darkMode ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-900'} min-h-screen scroll-smooth`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>

        <section id="home">
          <Home darkMode={darkMode}/>
        </section>

        <section id="about">
          <About darkMode={darkMode}/>
        </section>

        <section id="skills">
          <Skills darkMode={darkMode}/>
        </section>

        <section id="projects">
          <Projects darkMode={darkMode}/>
        </section>

        <section id="education">
          <Education darkMode={darkMode}/>
        </section>

        <section id="contact">
          <Contact darkMode={darkMode}/>
        </section>

        <Footer darkMode={darkMode}/>
      </div>
    </BrowserRouter>
  );
};

export default App;