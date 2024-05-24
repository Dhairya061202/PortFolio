import './App.css';
import Contact from './components/Contact/Contact';
import Intro from './components/Navbar/Intro/Intro';
import Navbar from './components/Navbar/Navbar';
import Skill from './components/Navbar/Skills/Skill';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <Skill />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
