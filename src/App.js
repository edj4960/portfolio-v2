import React from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Work from './components/pages/Work';
import NavDisplay from './components/NavDisplay';
import Contact from './components/pages/Contact';
import Archive from './components/pages/Archive';
import ScrollHandler from './components/ScrollHandler';
import { PageProvider } from './contexts/PageContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import './styles.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
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
          }
        />
        <Route
          path="/archive"
          element={
            <>
              <NavDisplay isMainPage={false} />
              <Archive />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
