import classes from "./GuestDetailsSection.module.css";
import "../../../index.css";

const GuestDetailsSection = () => {
  return (
    <section
      className={`${classes["reservation-details-container"]} drop-shadow`}
    >
      <label htmlFor="first-name">First name</label>
      <input type="text" name="first-name" />
      <label htmlFor="last-name">Last name</label>
      <input type="text" name="last-name" />
      <label htmlFor="mobile-number">Mobile Number</label>
      <input type="tel" name="phone-contact" />
      <label htmlFor="email">Email Address</label>
      <input type="email" name="email-address" />
    </section>
  );
};

export default GuestDetailsSection;
