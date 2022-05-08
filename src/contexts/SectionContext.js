import { createContext, useState } from "react";
import { scroller } from "react-scroll";
import { SECTIONS } from "../Constants";

const SectionContext = createContext({
  section: 0,
  setSection: () => { }
})

const SectionProvider = props => {
  const [section, setCurSec] = useState(0);

  const setSection = (secMove) => {    
    if (Number.isInteger(secMove)) {
      setCurSec(secMove);
      return;
    }
    
    let newSec;
    const moveDown = secMove === true;
    if (moveDown) {
      newSec = section + 1;
    } else {
      newSec = section - 1;
    }

    if (newSec < 0 || newSec > SECTIONS.length) return;

    scroller.scrollTo(SECTIONS[newSec].name);
  }

  return (
    <SectionContext.Provider value={{
      section,
      setSection
    }}>
      {props.children}
    </SectionContext.Provider>
  )
}

export { SectionContext, SectionProvider };