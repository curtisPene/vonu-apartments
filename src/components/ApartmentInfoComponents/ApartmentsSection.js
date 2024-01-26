import classes from "./ApartmentsSection.module.css";
import "../../index.css";
import Carousel from "../Carousel/Carousel";
import apartment1Slides from "../../components/ApartmentInfoComponents/apartment1Slides";
import apartment2Slides from "../../components/ApartmentInfoComponents/apartment2Slides";

const ApartmentSection = () => {
  return (
    <section className={classes["apartments-section"]}>
      <h3>The Apartments</h3>
      <div className={classes["apartment-one"]}>
        <p>2-bedroom apartment with two Queen beds, maximum 4 guests. </p>
        <Carousel slides={apartment1Slides} slideCount={5} center={true} />
      </div>

      <div className={classes["apartment-two"]}>
        <p>
          3-bedroom apartment with 3 Queen beds, comfortably accommodating up to
          6 guests.
        </p>
        <Carousel slides={apartment2Slides} slideCount={5} center={true} />
      </div>
    </section>
  );
};

export default ApartmentSection;
