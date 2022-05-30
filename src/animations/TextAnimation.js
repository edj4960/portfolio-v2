import React, { useEffect, useState } from "react"

import './TextAnimation.scss';

const TextAnimation = ({
  textArray,
  index = 0,
  useDelay = true,
  delayIncrement = .1,
  animateFirst = false,
  animationDuration = 1,
  animateExit = false,
  updateDelay = 0,
  style
}) => {
  let len = textArray.length;
  let safeIndex = (index % len + len) % len
  const [splitText, setSplitText] = useState(textArray[safeIndex].split(""));
  const [animate, setAnimate] = useState(false);
  let delay = 0;

  useEffect(() => {
    if (animateFirst) {
      setAnimate(true);
    }
  }, [animateFirst]);

  useEffect(() => {
    if (safeIndex !== 0) {
      setAnimate(true);
    }

    setTimeout(() => {
      setSplitText(textArray[safeIndex].split(""));
    }, updateDelay);
  }, [index, safeIndex, textArray, updateDelay]);

  const getDelay = () => {
    if (!useDelay) return '0s';

    delay += delayIncrement;
    return `${delay}s`;
  }

  const isSame = (item, itmIdx) => {
    if (item === ' ') return true;
    if (len === 1) return false;

    const prevIdx = (index-1 % len + len) % len
    const prevArr = textArray[prevIdx].split("");

    if (prevArr[itmIdx] !== item) {
      return false;
    }
    return true;
  }

  return (
    <span style={style} className={animate ? 'anim-wrapper' : ''}>
      {splitText.map((item, index) => (
        <span
          key={index}
          className={
            `${isSame(item, index) ? '' : 'anim-span'}
            ${animateExit ? 'anim-exit' : ''}`
          }
          style={{
            animationDelay: !isSame(item, index) ? getDelay() : '0s',
            animationDuration: `${animationDuration}s`
          }}
        >
          {item}
        </span>
      ))}
    </span>
  )
}

export default TextAnimation;