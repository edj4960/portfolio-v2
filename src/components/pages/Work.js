import React from 'react';
import Element from 'react-scroll/modules/components/Element';
import { WORK_PAGE } from '../../Constants';
import { openUrl } from '../../util';
import FeaturedWorkCarousel from '../FeaturedWorkCarousel';
import { Link } from 'react-router-dom';

import './Work.scss';

const Work = () => {

  return (
    <Element name={WORK_PAGE.name} id='work-page' className="page txt-light">
      <div id="left_side">
        <FeaturedWorkCarousel />
      </div>
      <div id="right_side">
        <h1 className="txt-primary">WORK</h1>
        <h3>Take a look at my featured work</h3>
        <FeaturedWorkCarousel />
        <p className='txt-grey'>Want to see more?</p>
        <div id="btn-container">
          <Link className='button' to='archive'>
            ARCHIVE
          </Link>
          <button onClick={() => { openUrl('https://github.com/edj4960?tab=repositories')}}>
            GITHUB
          </button>
        </div>
      </div>
    </Element>
  )
}

export default Work;