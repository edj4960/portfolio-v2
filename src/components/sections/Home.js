import React from 'react';
import Element from 'react-scroll/modules/components/Element';
import { HOME_SECTION } from '../../Constants';
import './Home.scss';

const Home = () => {

  return (
    <Element name={HOME_SECTION.name} className="section">
      <div className='vertical-center ml-5'>
        <h1 className='txt-light'>Evan Jones</h1>
        <h1 className='txt-primary'>Web Developer</h1>
      </div>
    </Element>
  )
}

export default Home;