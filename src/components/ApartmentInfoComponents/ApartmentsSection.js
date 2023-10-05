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
        <p>
          This well-appointed 2-bedroom apartment features two Queen beds,
          providing a cozy retreat for up to 4 guests. Whether you're traveling
          with family or friends, Apartment 1 offers a spacious and inviting
          atmosphere.
        </p>
        <Carousel slides={apartment1Slides} slideCount={5} center={true} />
      </div>

      <div className={classes["apartment-two"]}>
        <p>
          Apartment 2 at Vonu Apartments is designed for your comfort and
          relaxation. This spacious 3-bedroom apartment features 3 Queen beds,
          comfortably accommodating up to 6 guests. Whether you're enjoying a
          family vacation or traveling with friends, Apartment 2 provides ample
          room for everyone to unwind and enjoy their stay.
        </p>
        <Carousel slides={apartment2Slides} slideCount={5} center={true} />
      </div>
    </section>
  );
};

export default ApartmentSection;
