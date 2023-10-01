import CarouselControls from "./CarouselControls";
import classes from "./Carousel.module.css";
import Slides from "./Slides";
import { useEffect, useRef, useState } from "react";

const Carousel = ({ slides, slideCount, center }) => {
  const slidesRef = useRef(null);

  const nextClickHandler = () => {
    slidesRef.current.moveLeft();
  };

  const previousClickHandler = () => {
    slidesRef.current.moveRight();
  };

  return (
    <div className={classes.carousel}>
      <CarouselControls
        center={center}
        onClickNext={nextClickHandler}
        onClickPrev={previousClickHandler}
      />
      <Slides ref={slidesRef} slides={slides} slideCount={slideCount} />
    </div>
  );
};

export default Carousel;
