import classes from "./WelcomeSection.module.css";
import "../../index.css";

const WelcomeSection = () => {
  return (
    <section className={classes["welcome-section"]}>
      <h3>Vonu Apartments</h3>
      <p>Choose your home away from home and start your Fiji experience</p>
    </section>
  );
};

export default WelcomeSection;
