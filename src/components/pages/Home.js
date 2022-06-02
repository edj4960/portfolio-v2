import React, { useEffect, useState } from 'react';
import Element from 'react-scroll/modules/components/Element';
import { HOME_PAGE } from '../../Constants';
import TextAnimation from '../../animations/TextAnimation';

import WaveLines from '../../assets/wave-lines.svg';
import './Home.scss';

const Home = () => {
  const [textIdx, setTxtIdx] = useState(0);
  const duration = 4;

  useEffect(() => {
    const intervalId = setInterval(() => {
        setTxtIdx(index => index + 1)
      },
      duration * 1000
    );
    return () => clearTimeout(intervalId);
  }, [])

  const TEXTS = [
    'Web',
    'App',
    'IOT'
  ]

  return (
    <Element
      name={HOME_PAGE.name}
      className="page"
      id="home_page"
      style={{ backgroundImage: `url(${WaveLines})` }}
    >
      <div className='vertical-center'>
        <h1 className='txt-light'>
          <TextAnimation
            textArray={['Evan Jones']}
            animateFirst={true}
          />
        </h1>
        <h1 className='txt-primary animate d-flex' style={{width: '1000px'}}>
          <TextAnimation
            textArray={TEXTS}
            index={textIdx}
            animateFirst={true}
            animateExit={true}
            animationDuration={duration}
            className={'dev-text-anim'}
            style={{  }}
          />
          {" "}
          <TextAnimation
            textArray={['Developer']}
            animateFirst={true}
          />
        </h1>
      </div>
    </Element>
  )
}

export default Home;