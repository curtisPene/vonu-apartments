import classes from "./ApartmentsSection.module.css";
import "../../index.css";
import Carousel from "../Carousel/Carousel";
import apartment1Slides from "../../components/ApartmentInfoComponents/apartment1Slides";

const ApartmentSection = () => {
  return (
    <section className={classes["apartments-section"]}>
      <h3>The Apartments</h3>
      <p>
        This well-appointed 2-bedroom apartment features two Queen beds,
        providing a cozy retreat for up to 4 guests. Whether you're traveling
        with family or friends, Apartment 1 offers a spacious and inviting
        atmosphere.
      </p>
      <Carousel slides={apartment1Slides} slideCount={5} center={true} />
      <p>
        Escape to your own piece of paradise at Vonu Apartments. Nestled in the
        heart of Fiji's stunning Nasoso area, our apartments offer a comfortable
        and inviting oasis for your stay in this tropical paradise.
      </p>
      <Carousel slides={apartment1Slides} slideCount={5} center={true} />
    </section>
  );
};

export default ApartmentSection;
