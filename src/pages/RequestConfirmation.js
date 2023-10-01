import { Link } from "react-router-dom";
import chevron from "../assets/svg/small-chevron.svg";
import classes from "./RequestConfirmation.module.css";
import "../index.css";

const RequestConfirmationPage = () => {
  return (
    <div className={classes["request-confirmation"]}>
      <h3>Thank You for Your Reservation Request</h3>
      <div className={classes.body}>
        <p>Your request is being processed.</p>
        <p>
          We've received your reservation details and are excited to welcome you
          to Vonu Apartments. Our team is diligently reviewing your request, and
          we will respond within the next 24 hours to confirm your booking.
        </p>
        <p>
          If you have any questions or need further assistance, please feel free
          to reach out to us. We're here to ensure your stay at Vonu Apartments
          is exceptional.
        </p>
        <p>
          Email: <a href="mailto:">vonuaparments@gmail.com</a> Phone: 9227253 /
          9447516
        </p>
        <div className={classes["home-link"]}>
          <Link to={"/"}>
            <p>Back to our home page</p>
          </Link>
          <img src={chevron} alt="Back to homepage" />
        </div>
      </div>
    </div>
  );
};

export default RequestConfirmationPage;
