import classes from "./CarouselcControls.module.css";
import next from "../../assets/svg/Nextcarousel-controls-1.svg";
import previous from "../../assets/svg/Previouscarousel-controls.svg";

const CarouselControls = ({ onClickNext, onClickPrev, center }) => {
  const nextClickHandler = () => {
    onClickNext();
  };

  const prevClickHandler = () => {
    onClickPrev();
  };

  return (
    <div
      className={`${classes["carousel-controls"]} ${
        center ? classes.center : undefined
      }`}
    >
      <img src={previous} alt="Previous" onClick={prevClickHandler} />
      <img src={next} alt="Next" onClick={nextClickHandler} />
    </div>
  );
};

export default CarouselControls;
