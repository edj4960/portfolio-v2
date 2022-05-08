import React, { useContext } from 'react';
import { Link } from 'react-scroll';
import { SECTIONS } from '../Constants';
import './SideBar.scss';
import { SectionContext } from '../contexts/SectionContext';

const SideBar = () => {
  const { setSection } = useContext(SectionContext);  

  const handleSetActive = (secName) => {
    const secIdx = SECTIONS.findIndex(sec => sec.name === secName);
    setSection(secIdx);
  }

  return (
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
            >
              {section.name}
            </Link>
          )
        })
      }
    </div>
  )
}

export default SideBar;