import { useEffect } from 'react';
import Lenis from 'lenis';

import About from './components/About';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Stats from './components/Stats';
import Services from './components/Services';
import Resume from './components/Resume';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import ScrollProgress from './components/ScrollProgress';

import GlowCursor from './components/GlowCursor';


function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <GlowCursor />
      <ScrollProgress />
      <main id='main-content' className='flex flex-col container mx-auto p-10 max-w-4xl lg:pr-10 lg:pl-0 lg:max-w-6xl relative z-10'>
        <Hero />
        <Stats />
        <Projects />
        <About />
        <Services />
        <Resume />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
}

export default App;
