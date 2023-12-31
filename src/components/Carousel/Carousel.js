import CarouselControls from "./CarouselControls";
import classes from "./Carousel.module.css";
import Slides from "./Slides";
import { useRef } from "react";

const Carousel = ({ slides, slideCount, center, className }) => {
  const slidesRef = useRef(null);

  const nextClickHandler = () => {
    slidesRef.current.moveLeft();
  };

  const previousClickHandler = () => {
    slidesRef.current.moveRight();
  };

  return (
    <div className={`${classes.carousel} ${className}`}>
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
