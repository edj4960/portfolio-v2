import React from 'react';
import Element from 'react-scroll/modules/components/Element';
import { WORK_SECTION, FEATURED_WORK } from '../../Constants';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import './Work.scss';
import { openUrl } from '../../util';

const Work = () => {

  return (
    <Element name={WORK_SECTION.name} id='work-section' className="section txt-light">
      <div id="left_side">
        <Carousel
          axis='vertical'
          centerMode={false}
          showStatus={false}
          showIndicators={false}
          dynamicHeight={false}
          showThumbs={false}
          renderArrowPrev={(clickHandler, active) => {
            return (
              <div
                onClick={clickHandler}
                className={`carousel-btn ${active && 'active'}`}
              >
                <FontAwesomeIcon icon={faChevronUp} />
              </div>
            )
          }}
          renderArrowNext={(clickHandler, active) => {
            return (
              <div
                onClick={clickHandler}
                className={`carousel-btn ${active && 'active'}`}
              >
                <FontAwesomeIcon icon={faChevronDown} />
              </div>
            )
          }}
        >
          {
            FEATURED_WORK.map(entry => {
              return (
                <div key={entry.title} className='carousel-entry'>
                  <h2>{entry.title}</h2>
                  <div className="entry-skills">
                    {
                      entry.skills.map(skill => {
                        return (<div key={skill}>{skill}</div>)
                      })
                    }
                  </div>
                  <div
                    className="work-entry-img"
                    onClick={() => {openUrl(entry.url)}}
                  >
                    <img src={require(`../../assets/${entry.imgFile}`)} />
                  </div>
                  <p>{entry.description}</p>
                </div>
              )
            })
          } 
        </Carousel>
      </div>
      <div id="right_side">
        <h1 className="txt-primary">WORK</h1>
        <h3>Take a look at my featured work</h3>
        <p className='txt-grey'>Want to see more?</p>
        <div id="btn-container">
          <button onClick={() => {}}>
            ARCHIVE
          </button>
          <button onClick={() => { openUrl('https://github.com/edj4960?tab=repositories')}}>
            GITHUB
          </button>
        </div>
      </div>
    </Element>
  )
}

export default Work;