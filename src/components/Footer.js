import { Link } from "react-router-dom";
import "../index.css";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["fine-print"]}>
        <p className="fine-print-xs">
          Join us in making your Fijian getaway an unforgettable experience. We
          look forward to hosting you at Vonu Apartments.
        </p>
        <p className="fine-print-xs">
          For inquiries, reservations, or assistance, feel free to reach out to
          us: Email: vonuapartments@gmail.com Phone: 9227253 / 9447516 Address:
          Lot 10 Waqa Circle, Nasoso, Nadi, Fiji
        </p>
      </div>
      <div className={classes["nav-links"]}>
        <p className="fine-print-xs">Navigation</p>
        <ul className="fine-print-xs">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link preventScrollReset={false} to={"/apartment-info"}>
              Our Apartments
            </Link>
          </li>
          <li>
            <Link to={"/reservations"}>Make a Reservation</Link>
          </li>
          <li>
            <Link to={"/policies"}>Policies</Link>
          </li>
        </ul>
      </div>
      <p>Powered by Huluwa</p>
    </footer>
  );
};

export default Footer;
