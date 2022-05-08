import React from 'react';
import Element from 'react-scroll/modules/components/Element';
import { ABOUT_SECTION } from '../../Constants';

const About = () => {

  return (
    <Element name={ABOUT_SECTION.name} className="section" style={{ backgroundColor: 'blue' }}>

    </Element>
  )
}

export default About;