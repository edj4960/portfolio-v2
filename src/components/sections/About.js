import React from 'react';
import Element from 'react-scroll/modules/components/Element';
import { ABOUT_SECTION } from '../../Constants';

import './About.scss';

const About = () => {

  return (
    <Element name={ABOUT_SECTION.name} id='about-section' className="section">
      <div id="about-container" className='ml-5'>
        <h1 className='txt-dark'>ABOUT</h1>
        <h2 className='txt-dark'>Hello</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum.
        </p>
      </div>
    </Element>
  )
}

export default About;