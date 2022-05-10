import { createContext, useState } from "react";
import { scroller } from "react-scroll";
import { PAGES } from "../Constants";

const PageContext = createContext({
  page: 0,
  setPage: () => { }
})

const PageProvider = props => {
  const [page, setCurPage] = useState(0);

  const setPage = (secMove) => {    
    if (Number.isInteger(secMove)) {
      setCurPage(secMove);
      return;
    }
    
    let newSec;
    const moveDown = secMove === true;
    if (moveDown) {
      newSec = page + 1;
    } else {
      newSec = page - 1;
    }

    if (newSec < 0 || newSec > PAGES.length) return;

    scroller.scrollTo(PAGES[newSec].name);
  }

  return (
    <PageContext.Provider value={{
      page,
      setPage
    }}>
      {props.children}
    </PageContext.Provider>
  )
}

export { PageContext, PageProvider };