import './App.css';
import Navbar from './components/Navbar';
import Section from './components/Section';
import MeSection from './components/MeSection'
import Footer from './components/Footer';
import { useRef, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  //Used to move on the page when clicking the link on navbar/footer
  const meRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const [meActive, setMeActive] = useState(false);
  const [projectsActive, setProjectsActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 60,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const trackScroll = () => {
      //Setting states when user on the first section
      if (window.scrollY >= 0 && window.scrollY <= window.innerHeight/2){
        setMeActive(true);
        setContactActive(false);
        setProjectsActive(false);
      } else if (projectsRef.current.offsetTop - window.scrollY < window.innerHeight / 2 && contactRef.current.offsetTop - window.scrollY >= window.innerHeight / 2){
        setMeActive(false);
        setContactActive(false);
        setProjectsActive(true);
      } else {
        setMeActive(false);
        setContactActive(true);
        setProjectsActive(false);
      }
    }
    document.addEventListener('scroll', trackScroll);
    return () => {
      document.removeEventListener('scroll', trackScroll);
    }
  }, [])

  return (
    <div className='App'>
      <Navbar handelScroll={scrollToSection} meRef={meRef} projectsRef={projectsRef} contactRef={contactRef} meVisible={meActive} projectsVisible={projectsActive} contactVisible={contactActive}></Navbar>
      <MeSection reference={meRef}></MeSection>
      <Section title={'My projects'} color={'#f1faee'} reference={projectsRef} ></Section>
      <Section title={'Contact Me'} color={'#e63946'} reference={contactRef}></Section>
      <Footer handelScroll={scrollToSection} meRef={meRef} projectsRef={projectsRef} contactRef={contactRef}></Footer>
    </div>
  )


}

export default App;
 