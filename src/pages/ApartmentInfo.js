import Carousel from "../components/Carousel/Carousel";
import amenitiesSlides from "../components/ApartmentInfoComponents/amenitiesSlides";
import houseFront from "../assets/images/House Front-apartment-info-page.jpg";
import ApartmentSection from "../components/ApartmentInfoComponents/ApartmentsSection";
import WelcomeSection from "../components/ApartmentInfoComponents/WelcomeSection";

const ApartmentInfoPage = () => {
  return (
    <>
      <img
        src={houseFront}
        alt=""
        style={{ width: "100%", marginBottom: "8px" }}
      />
      <WelcomeSection />
      <Carousel slides={amenitiesSlides} slideCount={7} center={false} />
      <ApartmentSection />
    </>
  );
};

export default ApartmentInfoPage;
