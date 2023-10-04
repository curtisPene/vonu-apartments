import classes from "./WelcomeSection.module.css";
import "../../index.css";
import houseFront from "../../assets/production-images/apartment-info-header.JPG";
const WelcomeSection = () => {
  return (
    <section className={classes["welcome-section"]}>
      <img src={houseFront} alt="" />
      <div className={classes["welcome-section-text-content"]}>
        <h3>Welcome to Vonu Apartments – Your Fiji Retreat</h3>
        <p>
          Experience a cozy retreat at Vonu Apartments. Located in the Nasoso,
          Nadi, our comfortable accommodations provide a warm and welcoming stay
          for your visit.
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;
