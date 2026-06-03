import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
      <div className="overflow-x-hidden w-full">
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
    </>
  );
}

export default App;