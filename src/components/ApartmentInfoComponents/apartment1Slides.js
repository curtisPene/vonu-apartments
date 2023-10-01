import room1 from "../../assets/images/Room Container-apartment-info-carousel-1.jpg";
import room2 from "../../assets/images/Room Container-apartment-info-carousel-2.jpg";
import room3 from "../../assets/images/Room Container-apartment-info-carousel-3.jpg";
import room4 from "../../assets/images/Room Container-apartment-info-carousel-4.jpg";
import room5 from "../../assets/images/Room Container-apartment-info-carousel-5.jpg";
import classes from "./apartment1slides.module.css";

const apartment1Slides = [
  <div className={classes.container}>
    <img src={room1} alt="Room 1" />
  </div>,
  <div className={classes.container}>
    <img src={room2} alt="Room 2" />
  </div>,
  <div className={classes.container}>
    <img src={room3} alt="Room 3" />
  </div>,
  <div className={classes.container}>
    <img src={room4} alt="Room 4" />
  </div>,
  <div className={classes.container}>
    <img src={room5} alt="Room 5" />
  </div>,
];

export default apartment1Slides;
