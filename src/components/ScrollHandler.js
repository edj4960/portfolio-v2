import React, { useContext, useEffect, useState } from 'react';
import { SectionContext } from '../contexts/SectionContext';

const ScrollHandler = (props) => {
  const { setSection } = useContext(SectionContext);

  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const threshold = 150;

  const onMove = (moveDown) => {
    setSection(moveDown);
  }

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  
  // Wheel Scrolling
  const onWheel = (e) => {
    const moveDown = e.deltaY > 0 ? true : false;
    onMove(moveDown);
  }

  // Arrow Keys
  // TODO: Figure out why not working
  const onKeyDown = (e) => {
    console.log(e);
    if (e.keyCode === 38) {
      // Up key
      onMove(false);
    } else if (e.keyCode === 40) {
      // Down key
      onMove(true);
    }
  }

  // For mobile
  const touchStart = (e) => {
    const touchObj = e.touches[0];
    setStartX(touchObj.clientX);
    setStartY(touchObj.clientY);
  }

  const touchMove = (e) => {
    const touchObj = e.touches[0];
    setCurrentX(touchObj.clientX);
    setCurrentY(touchObj.clientY);
  }

  const touchEnd = () => {
    if (Math.abs(startX - currentX) < threshold) {
      const moveDown = startY > currentY ? true : false;
      onMove(moveDown);
    }
  }

  return (
    <div
      id='scroll_handler'
      onTouchStart={touchStart}
      onTouchMove={touchMove}
      onTouchEnd={touchEnd}
      onWheel={onWheel}
      onKeyUp={onKeyDown}
    >
      {props.children}
    </div>
  )
}

export default ScrollHandler;