import classes from "./LocationInfo.module.css";
import "../../index.css";

const LocationInfo = () => {
  return (
    <section>
      <div className={classes["location-info-container"]}>
        <p>
          Located in the heart of Nasoso, Fiji, Vonu Apartments provides an
          ideal launchpad for discovering the wonders of this tropical paradise.
          You'll find us at Lot 10 Waqa Circle, Nasoso, Nadi, Fiji, ensuring
          effortless access to nearby attractions, dining venues, and day trip
          destinations. Explore the beauty of Fiji from our convenient location.
        </p>
        <iframe
          className={classes["embedded-map"]}
          title="google-maps-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3799.966215450628!2d177.4358855759396!3d-17.746230974039893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6e175d78e7807aed%3A0x2f0ba6e7a649a784!2sVonu%20Apartments!5e0!3m2!1sen!2sfj!4v1695468587836!5m2!1sen!2sfj"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default LocationInfo;
