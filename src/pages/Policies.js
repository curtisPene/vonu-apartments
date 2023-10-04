import classes from "./Policies.module.css";
import "../index.css";
import { ScrollRestoration } from "react-router-dom";

const PoliciesPage = () => {
  return (
    <div className={classes["policies-container"]}>
      <section>
        <p>
          At Vonu Apartments, your comfort and safety are our utmost priorities.
          To ensure a pleasant and enjoyable stay for all our guests, we have
          established the following policies:
        </p>
      </section>
      <section>
        <h3>Apartment Capacity:</h3>
        <p>
          Apartment 1: This cozy 2-bedroom apartment features 2 Queen beds, with
          a strict maximum capacity of 4 guests. (Rates: $200/night + $100
          Management fee/stay)
        </p>
        <p>
          Apartment 2: Our spacious 3-bedroom apartment offers 3 Queen beds,
          accommodating a maximum of 6 guests. (Rates: $350/night + $100
          Management fee/stay)
        </p>
      </section>
      <section>
        <h3>Smoking:</h3>
        <p>
          Smoking is strictly prohibited inside the apartments. However, guests
          are welcome to smoke on the balconies.
        </p>
      </section>
      <section>
        <h3>Check-in and Check-out Times:</h3>
        <p>
          Check-in time is from 12 pm, allowing you to settle in comfortably,
          while check-out is by 10 am, ensuring a smooth transition for incoming
          guests.
        </p>
      </section>
      <p className={classes["policies-end"]}>
        Please adhere to these policies to help create an enjoyable environment
        for everyone. If you have any questions or require further
        clarification, feel free to contact our team.
      </p>
      <p className={classes["policies-end"]}>
        Your comfort and satisfaction during your stay are of paramount
        importance to us at Vonu Apartments. Thank you for choosing us for your
        Fiji getaway.
      </p>
      <ScrollRestoration />
    </div>
  );
};

export default PoliciesPage;
