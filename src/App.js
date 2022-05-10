import React from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import NavDisplay from './components/NavDisplay';
import Contact from './components/pages/Contact';
import ScrollHandler from './components/ScrollHandler';
import { PageProvider } from './contexts/PageContext';
import './styles.scss';

const  App = () => {
  return (
    <div id="app">
      <PageProvider>
        <ScrollHandler>
          <NavDisplay />
          <div id="pages-container">
            <Home />
            <About />
            <Work />
            <Contact />
          </div>
        </ScrollHandler>
      </PageProvider>
    </div>
  );
}

export default App;
