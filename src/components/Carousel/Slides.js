import { forwardRef, useEffect, useRef, useState } from "react";
import classes from "./Slides.module.css";
import { useImperativeHandle } from "react";
import "../../index.css";

const Slides = forwardRef(({ slides, slideCount }, ref) => {
  const [position, setPosition] = useState(0);
  const [slideNum, setSlideNum] = useState(1);

  useEffect(() => {
    slidesRef.current.style.transform = `translateX(${position}px)`;
  }, [position]);

  const slidesRef = useRef(null);

  const getSlideWidth = () => {
    return slidesRef.current.querySelectorAll("div")[0].clientWidth;
  };

  const getSlideCount = () => {
    return slidesRef.current.querySelectorAll("div");
  };

  const moveLeft = () => {
    if (slideNum === slideCount) {
      return;
    }
    setSlideNum((slideNum) => slideNum + 1);
    setPosition((currrentPosition) => {
      return currrentPosition - getSlideWidth();
    });
  };

  const moveRight = () => {
    if (position === 0) {
      return;
    }
    setSlideNum((slideNum) => slideNum - 1);
    setPosition((currrentPosition) => {
      return currrentPosition + getSlideWidth();
    });
  };

  useImperativeHandle(ref, () => {
    return {
      moveLeft,
      moveRight,
    };
  });
  return (
    <div className={classes["slides-container"]}>
      <div ref={slidesRef} className={classes.slides}>
        {slides.map((slide, index) => {
          return <div key={index}>{slide}</div>;
        })}
      </div>
    </div>
  );
});

export default Slides;
