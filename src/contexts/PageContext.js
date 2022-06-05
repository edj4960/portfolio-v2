import { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { scroller } from "react-scroll";
import { PAGES } from "../Constants";

const PageContext = createContext({
  page: 0,
  setPage: () => { }
})

const PageProvider = props => {
  const [page, setCurPage] = useState(0);
  let [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const page = searchParams.get('page');
    console.log(page);

    if (page) {
      scroller.scrollTo(page);
      searchParams.delete('page');
      setSearchParams(searchParams);
    }
  }, [searchParams, setSearchParams]);

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