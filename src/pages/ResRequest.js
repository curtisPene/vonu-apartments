import { json, redirect } from "react-router";
import ChooseAnApartment from "../components/Reservation Request Page Components/Reservation Form Components/ChooseApartmentSection";
import FormSection from "../components/Reservation Request Page Components/Reservation Form Components/FormSection";
import FormSectionHeader from "../components/Reservation Request Page Components/Reservation Form Components/FormSectionHeader";
import GuestDetailsSection from "../components/Reservation Request Page Components/Reservation Form Components/GuestDetailsSection";
import ReservationDetailsSection from "../components/Reservation Request Page Components/Reservation Form Components/ReservationDetailsSection";
import ReservationForm from "../components/Reservation Request Page Components/Reservation Form Components/ReservationForm";
import WelcomeSection from "../components/Reservation Request Page Components/WelcomeSection";
import { ScrollRestoration } from "react-router-dom";

const ResRequestPage = () => {
  return (
    <>
      <WelcomeSection />
      <ReservationForm>
        <FormSection>
          <FormSectionHeader step={1} headerText={"Choose an apartment"} />
          <ChooseAnApartment />
        </FormSection>
        <FormSection>
          <FormSectionHeader step={2} headerText={"Reservation details"} />
          <ReservationDetailsSection />
        </FormSection>
        <FormSection>
          <FormSectionHeader step={3} headerText={"Guest details"} />
          <GuestDetailsSection />
        </FormSection>
      </ReservationForm>
      <ScrollRestoration />
    </>
  );
};

const action = async ({ request, params }) => {
  const formData = await request.formData();

  const numberOfGuests = formData.get("number-of-guests");
  const checkIn = formData.get("check-in");
  const checkOut = formData.get("check-out");
  const purposeOfStay = formData.get("purpose-of-stay");
  const aptOne = formData.get("apartment-1");
  const aptTwo = formData.get("apartment-2");
  const guestName =
    formData.get("first-name") + " " + formData.get("last-name");
  const phoneContact = formData.get("phone-contact");
  const email = formData.get("email-address");

  const data = {
    checkIn,
    checkOut,
    numberOfGuests,
    purposeOfStay,
    aptOne,
    aptTwo,
    guestName,
    phoneContact,
    email,
  };

  const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

  const response = await fetch(REACT_APP_API_URL, {
    method: "post",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw json({ message: "Could not send email" }, { status: 500 });
  }
  return redirect("/reservations/confirmation");
};

export { ResRequestPage as default, action };
