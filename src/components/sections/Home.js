import React from 'react';
import Element from 'react-scroll/modules/components/Element';
import { HOME_SECTION } from '../../Constants';

const Home = () => {

  return (
    <Element name={HOME_SECTION.name} className="section" style={{backgroundColor: 'red'}}>
      {HOME_SECTION.id}
    </Element>
  )
}

export default Home;