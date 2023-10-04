import Carousel from "../components/Carousel/Carousel";
import amenitiesSlides from "../components/ApartmentInfoComponents/amenitiesSlides";
import ApartmentSection from "../components/ApartmentInfoComponents/ApartmentsSection";
import WelcomeSection from "../components/ApartmentInfoComponents/WelcomeSection";
import classes from "./ApartmentInfo.module.css";
import { ScrollRestoration } from "react-router-dom";

const ApartmentInfoPage = () => {
  return (
    <>
      <WelcomeSection />
      <Carousel
        slides={amenitiesSlides}
        slideCount={7}
        center={false}
        className={classes.carousel}
      />
      <ApartmentSection />
      <ScrollRestoration />
    </>
  );
};

export default ApartmentInfoPage;
