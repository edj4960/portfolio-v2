import React from 'react';
import { FEATURED_WORK } from '../Constants';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { openUrl } from '../util';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';


const FeaturedWorkCarousel = (className = '') => {

  return (
    <Carousel
      axis='vertical'
      centerMode={false}
      showStatus={false}
      showIndicators={false}
      dynamicHeight={false}
      showThumbs={false}
      className={className}
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
                onClick={() => { openUrl(entry.url) }}
              >
                <img src={require(`../assets/${entry.imgFile}`)} alt="Work Example" />
              </div>
              <p>{entry.description}</p>
            </div>
          )
        })
      }
    </Carousel>
  )
}

export default FeaturedWorkCarousel;