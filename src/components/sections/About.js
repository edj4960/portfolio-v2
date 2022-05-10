import React from 'react';
import Element from 'react-scroll/modules/components/Element';
import { ABOUT_SECTION } from '../../Constants';
import laptop from '../../assets/laptop.svg';

import './About.scss';

const About = () => {

  return (
    <Element name={ABOUT_SECTION.name} id='about-section' className="section">
      <div id="about-container" className='ml-5'>
        <h1 className='txt-light'>
          ABOUT
        </h1>
        <h3 className='txt-grey'>Hello,</h3>
        <p className='txt-light'>
          My name is Evan. I am a passionate developer who consistently produces exceptional
          digital experiences for both <strong>Web</strong> and <strong>Mobile</strong> platforms.
          Since I started learning development over 4 years ago I have constantly worked to create
          services that are both user friendly and beautiful while ensuring high coding standards are maintained. 
          No matter the challenge I am always excited to learn something new and build fantastic solutions.
        </p>
        <img
          src={laptop}
          alt="Laptop Illustration"
          id="laptop"
        />
      </div>
    </Element>
  )
}

export default About;