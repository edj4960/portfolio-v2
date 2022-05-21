import React, { useEffect, useState } from 'react';
import Element from 'react-scroll/modules/components/Element';
import { HOME_PAGE } from '../../Constants';
import TextAnimation from '../../animations/TextAnimation';

import WaveLines from '../../assets/wave-lines.svg';
import './Home.scss';

const Home = () => {
  const [textIdx, setTxtIdx] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
        setTxtIdx(index => index + 1)
      },
      3000
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
      <div className='vertical-center ml-5'>
        <h1 className='txt-light'>Evan Jones</h1>
        <h1 className='txt-primary animate d-flex' style={{width: '1000px'}}>
          <TextAnimation
            textArray={TEXTS}
            index={textIdx}
            animateFirst={true}
            style={{ width: 244}}
          />
          {" "}
          <TextAnimation
            textArray={['Developer']}
            index={0}
            animateFirst={true}
          />
        </h1>
      </div>
    </Element>
  )
}

export default Home;