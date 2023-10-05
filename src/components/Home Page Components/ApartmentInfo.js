import classes from "./ApartmentInfo.module.css";
import "../../index.css";
import apartment1 from "../../assets/production-images/apartment-1-homepage-link.JPG";
import apartment2 from "../../assets/production-images/apartment-2-homepage-link.jpg";
import smallChevron from "../../assets/svg/small-chevron.svg";
import { Link } from "react-router-dom";

const ApartmentInfo = () => {
  return (
    <section className={classes["apartment-info-section"]}>
      <div className={classes["section-container"]}>
        <h3>Your Home in Paradise</h3>
        <div className={classes["body-content"]}>
          <p>
            Immerse yourself in the tranquility of our thoughtfully designed
            apartments. Each apartment offers a haven of relaxation, adorned
            with modern amenities and the spirit of Fijian hospitality.
          </p>
          <div className={classes["apartment-image-links"]}>
            <Link preventScrollReset={false} to="/apartment-info">
              <img loading="lazy" src={apartment1} alt="Apartment 1" />
            </Link>
            <Link preventScrollReset={false} to="/apartment-info">
              <img loading="lazy" src={apartment2} alt="Apartment 2" />
            </Link>
          </div>
        </div>
        <Link to={"/apartment-info"} className={classes["apartment-info-link"]}>
          <p className="subbody-xs">Click on a card to learn more</p>
          <img src={smallChevron} alt="" />
        </Link>
      </div>
    </section>
  );
};

export default ApartmentInfo;
