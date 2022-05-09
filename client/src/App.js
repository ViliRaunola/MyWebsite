import './App.css';
import Navbar from './components/Navbar';
import Section from './components/Section';
import { useRef } from 'react'

function App() {
  const me = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth'
    })
  }

  return (
    <div className='App'>
      <Navbar handelScroll={scrollToSection} meRef={me} projectsRef={projects} contactRef={contact}></Navbar>
      <Section title={'Me'} color={'#a8dadc'} reference={me}></Section>
      <Section title={'My projects'} color={'#f1faee'} reference={projects}></Section>
      <Section title={'Contact Me'} color={'#e63946'} reference={contact}></Section>
    </div>
  )

}

export default App;
 