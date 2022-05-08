import React from 'react';
import Home from './components/sections/Home';
import About from './components/sections/About';
import NavDisplay from './components/NavDisplay';
import ScrollHandler from './components/ScrollHandler';
import { SectionProvider } from './contexts/SectionContext';
import './styles.scss';

const  App = () => {
  return (
    <div id="app">
      <SectionProvider>
        <ScrollHandler>
          <NavDisplay />
          <div id="sections-container">
            <Home />
            <About/>
          </div>
        </ScrollHandler>
      </SectionProvider>
    </div>
  );
}

export default App;
