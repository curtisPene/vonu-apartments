import ApartmentInfo from "../components/Home Page Components/ApartmentInfo";
import WelcomeSection from "../components/Home Page Components/WelcomeSection";
import LocationInfo from "../components/Home Page Components/LocationInfo";
import { ScrollRestoration } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <WelcomeSection />
      <ApartmentInfo />
      <LocationInfo />
      <ScrollRestoration />
    </>
  );
};

export default HomePage;
