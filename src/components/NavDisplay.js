import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { Link as PageLink } from 'react-router-dom';
import { PAGES } from '../Constants';
import { PageContext } from '../contexts/PageContext';
import { openUrl } from '../util';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import './NavDisplay.scss';

const NavDisplay = ({ isMainPage=true }) => {
  const { setPage } = useContext(PageContext);  

  const handleSetActive = (secName) => {
    const secIdx = PAGES.findIndex(sec => sec.name === secName);
    setPage(secIdx);
  }

  return (
    <>
      {
        isMainPage &&
        <div id='side_bar'>
          {
            PAGES.map((page) => {
              return (
                <Link
                  id={`link-${page.name}`}
                  activeClass='active'
                  key={page.name}
                  to={page.name}
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
      }

      <div id='nav_bar' className='mr-5'>
        {
          PAGES.map((page) => {
            if (isMainPage) {
              return (
                <Link
                  id={`link-${page.name}`}
                  activeClass='active'
                  key={page.name}
                  to={page.name}
                  onSetActive={handleSetActive}
                  spy={true}
                  className='nav-link'
                >
                  {page.title}
                </Link>
              )
            } else {
              return (
                <PageLink
                  className='nav-link'
                  key={page.name}
                  to={`/?page=${page.name}`}
                >
                  {page.title}
                </PageLink>
              )
            }
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