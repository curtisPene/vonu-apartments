import "../index.css";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p className="fine-print-xs">
        Join us in making your Fijian getaway an unforgettable experience. We
        look forward to hosting you at Vonu Apartments.
      </p>
      <p className="fine-print-xs">
        For inquiries, reservations, or assistance, feel free to reach out to
        us: Email: vonuapartments@gmail.com Phone: 9227253 / 9447516 Address:
        Lot 10 Waqa Circle, Nasoso, Nadi, Fiji
      </p>
    </footer>
  );
};

export default Footer;
