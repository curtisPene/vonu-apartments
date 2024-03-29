import { Link } from "react-router-dom";
import "../index.css";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
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
      <div className={classes["fine-print"]}>
        <p className="fine-print-xs">
          Plan a memorable Fijian getaway with Vonu Apartments. We&#39;re
          excited to host you and make your stay special. For inquiries,
          reservations, or assistance, feel free to reach out to us: Email:
          vonuapartments@gmail.com Phone: 9227253 / 9447516 Address: Lot 10 Waqa
          Circle, Nasoso, Nadi, Fiji.
        </p>
        <p>Powered by Huluwa</p>
      </div>
    </footer>
  );
};

export default Footer;
