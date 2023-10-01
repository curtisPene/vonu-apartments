import classes from "./WelcomeSection.module.css";
import "../../index.css";

const WelcomeSection = () => {
  return (
    <section className={classes["welcome-section"]}>
      <h3>Welcome to Vonu Apartments – Your Fiji Retreat</h3>
      <p>
        Escape to your own piece of paradise at Vonu Apartments. Nestled in the
        heart of Fiji's stunning Nasoso area, our apartments offer a comfortable
        and inviting oasis for your stay in this tropical paradise.
      </p>
      
    </section>
  );
};

export default WelcomeSection;
