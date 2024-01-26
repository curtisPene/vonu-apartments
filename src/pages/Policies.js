import classes from "./Policies.module.css";
import "../index.css";
import { ScrollRestoration } from "react-router-dom";

const PoliciesPage = () => {
  return (
    <div className={classes["policies-container"]}>
      <section>
        <p>
          At Vonu Apartments, <span className="text-accent">ensuring</span> your
          comfort and satisfaction <span className="text-accent">is</span> our
          <span className="text-accent">top priority</span>. To ensure a
          pleasant and enjoyable stay for all our guests, we have{" "}
          <span className="text-accent">implemented</span>
          the following policies:
        </p>
      </section>
      <section>
        <h3>Apartment Capacity:</h3>
        <p>
          Apartment 1: This 2-bedroom unit has 2 Queen beds, with a strictly
          enforced maximum capacity of 4 guests.
        </p>
        <p>
          Apartment 2: Our larger 3 bedroom apartment has 3 Queen beds,
          accommodating a maximum of 6 guests.
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
          Check-in time is from 12 pm. Late check ins can utilise our key lock
          box. Check-out is 10 am, allowing us sufficient time to ready the
          apartment for incoming guests.
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
