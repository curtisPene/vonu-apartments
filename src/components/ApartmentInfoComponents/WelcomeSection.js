import classes from "./WelcomeSection.module.css";
import "../../index.css";
import houseFront from "../../assets/production-images/apartment-info-header.JPG";
const WelcomeSection = () => {
  return (
    <section className={classes["welcome-section"]}>
      <img loading="lazy" src={houseFront} alt="" />
      <div className={classes["welcome-section-text-content"]}>
        <h3>Welcome to Vonu Apartments</h3>
        <p>
          <span className="text-accent">Vonu Apartments</span> are conveniently
          located close to Nadi International airport and within walking
          distance of a well stocked supermarket and restaurant.
        </p>
      </div>
    </section>
  );
};

export default WelcomeSection;
