import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { SECTIONS } from '../Constants';
import { SectionContext } from '../contexts/SectionContext';
import { openUrl } from '../util';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './NavDisplay.scss';

const NavDisplay = () => {
  const { setSection } = useContext(SectionContext);  

  const handleSetActive = (secName) => {
    const secIdx = SECTIONS.findIndex(sec => sec.name === secName);
    setSection(secIdx);
  }

  return (
    <>
      <div id='side_bar'>
        {
          SECTIONS.map((section) => {
            return (
              <Link
                id={`link-${section.name}`}
                activeClass='active'
                key={section.name}
                to={section.name}
                onSetActive={handleSetActive}
                spy={true}
                className='section-link'
              >
                <div className='link-circle'>

                </div>
              </Link>
            )
          })
        }
      </div>

      <div id='nav_bar' className='mr-5'>
        {
          SECTIONS.map((section) => {
            return (
              <Link
                id={`link-${section.name}`}
                activeClass='active'
                key={section.name}
                to={section.name}
                onSetActive={handleSetActive}
                spy={true}
                className='nav-link'
              >
                {section.title}
              </Link>
            )
          })
        }
        <FontAwesomeIcon
          icon={faLinkedin}
          className='nav-link'
          onClick={() => { openUrl('https://www.linkedin.com/in/evan-d-jones/') }}
        />
        <FontAwesomeIcon
          icon={faGithub}
          className='nav-link'
          onClick={() => { openUrl('https://github.com/edj4960/') }}
        />
      </div>
    </>
  )
}

export default NavDisplay;