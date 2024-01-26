import classes from "./AmenitiesSection.module.css";

const AmenitiesSection = () => {
  return (
    <section className={classes["welcome-section"]}>
      <div className={classes["welcome-section-text-content"]}>
        <h3>Some features of the Apartments</h3>
        <ol>
          <li>Hot Water</li>
          <li>
            2 and 3 bedroom apartments with queen beds taking a maximum of 4 and
            6 guests
          </li>
          <li>Each apartment conveniently has 2 bathrooms</li>
          <li>Complimentary WiFi</li>
          <li>Smart TV</li>
          <li>Air Conditioning</li>
          <li>Security grills</li>
          <li>Air conditioning</li>
          <li>Fire alarms, extinguishers, and blankets</li>
          <li>Automatic solar outdoor lighting</li>
          <li>House keeping/Baby sitting services if required at a charge</li>
          <li>Laundy servie if required at a charge</li>
        </ol>
      </div>
    </section>
  );
};

export default AmenitiesSection;
