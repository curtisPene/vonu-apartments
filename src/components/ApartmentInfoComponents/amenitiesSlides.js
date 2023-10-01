import classes from "./AmenitiesSlides.module.css";
import "../../index.css";
import maintenanceIcon from "../../assets/svg/maintenanceamenities-icons.svg";
import waterIcon from "../../assets/svg/water-supplyamenities-icons.svg";
import securityIcon from "../../assets/svg/home-securityamenities-icons.svg";
import wifiIcon from "../../assets/svg/wifi 2amenities-icons.svg";
import appliancesIcon from "../../assets/svg/home-appliancesamenities-icons.svg";
import houseKeepingIcon from "../../assets/svg/house-keepingamenities-icons.svg";
import linenIcon from "../../assets/svg/linenamenities-icons.svg";
import "../../index.css";
const slides = [
  <div className={classes.container}>
    <div className={classes.header}>
      <p className="fine-print-xs">Water Supply and Hot Water</p>
      <img src={waterIcon} alt="" />
    </div>
    <div className={classes.body}>
      <p>
        To enhance your experience, our apartments are connected to a water tank
        and pressure pump. This ensures improved water pressure, especially in
        an area with typically low water pressure. The pumps can be turned off
        when not needed. If you hear the pump running when water isn't in use,
        please inform us, as it could indicate a water leak. The tap water is
        safe to drink, but for added peace of mind, consider purchasing bottled
        water. Solar hot water is available in your apartment. If you need
        hotter water due to weather conditions, an electrical booster is
        conveniently located in the general bathroom. Please remember to turn it
        off when not in use.
      </p>
    </div>
  </div>,
  <div className={classes.container}>
    <div className={classes.header}>
      <p className="fine-print-xs">Security</p>
      <img src={securityIcon} alt="" />
    </div>
    <div className={classes.body}>
      <p>
        Your safety is our priority. Our apartments are equipped with robust
        security measures, including burglar grills. Outdoor lights
        automatically illuminate the surroundings at dusk, ensuring a secure
        environment.
      </p>
    </div>
  </div>,
  <div className={classes.container}>
    <div className={classes.header}>
      <p className="fine-print-xs">Wifi</p>
      <img src={wifiIcon} alt="" />
    </div>
    <div className={classes.body}>
      <p>
        Enjoy complimentary Wi-Fi during your stay. We provide generous data
        allowances, typically 50GB for stays up to a week and 250GB for longer
        visits. Should you require additional data, it's available for a nominal
        fee.
      </p>
    </div>
  </div>,
  <div className={classes.container}>
    <div className={classes.header}>
      <p className="fine-print-xs">Appliances</p>
      <img src={appliancesIcon} alt="" />
    </div>
    <div className={classes.body}>
      <p>
        Each apartment is thoughtfully furnished with modern conveniences, such
        as a rice cooker, toaster, electric jug, fridge, stove, steam iron,
        radio, washing machine, hairdryer, and a Smart TV. User manuals for
        these appliances are available in your kitchen drawer for your
        convenience. Please don't hesitate to ask for assistance if needed.
        Damages beyond normal wear and tear may incur charges.
      </p>
    </div>
  </div>,
  <div className={classes.container}>
    <div className={classes.header}>
      <p className="fine-print-xs">House Keeping</p>
      <img src={houseKeepingIcon} alt="" />
    </div>
    <div className={classes.body}>
      <p>
        Your comfort matters. Apartments are cleaned before your arrival and
        after your departure. We kindly ask you to leave your apartment in a
        clean and orderly state. Should you desire additional housekeeping
        during your stay, we offer this service for a fee of $50. Extra linen
        charges may apply based on your requirements. A laundry service list is
        provided in your apartment.
      </p>
    </div>
  </div>,
  <div className={classes.container}>
    <div className={classes.header}>
      <p className="fine-print-xs">Linen</p>
      <img src={linenIcon} alt="" />
    </div>
    <div className={classes.body}>
      <p>
        Need fresh linen? We've got you covered. Fresh linen is available upon
        request for a small charge. You'll find bath towels and striped beach
        towels provided in your apartment. To preserve the quality of our
        towels, please refrain from using them at the beach. If you'd like beach
        mats or an esky (cooler), simply let us know, and we'll provide them for
        you.
      </p>
    </div>
  </div>,
  <div className={classes.container}>
    <div className={classes.header}>
      <p className="fine-print-xs">Maintenance and Repairr</p>
      <img src={maintenanceIcon} alt="" />
    </div>
    <div className={classes.body}>
      <p>
        We have our own dedicated General Works Contractor to promptly address
        any maintenance or repair needs. Please report any issues so we can
        ensure your stay remains hassle-free.
      </p>
    </div>
  </div>,
];

export default slides;
