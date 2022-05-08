import React from 'react';
import Home from './components/sections/Home';
import About from './components/sections/About';
import SideBar from './components/SideBar';
import './App.scss';
import ScrollHandler from './components/ScrollHandler';
import { SectionProvider } from './contexts/SectionContext';
import { Element } from 'react-scroll';

const  App = () => {
  return (
    <div id="app">
      <SectionProvider>
        <ScrollHandler>
          <SideBar />
          <Element id="sections-container" name="sections-container">
            <Home />
            <About/>
          </Element>
        </ScrollHandler>
      </SectionProvider>
    </div>
  );
}

export default App;
