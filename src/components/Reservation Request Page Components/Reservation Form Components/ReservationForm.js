import classes from "./ReservationForm.module.css";
import "../../../index.css";
import { Form } from "react-router-dom";

const ReservationForm = ({ children }) => {
  // const submitHandler = (e) => {
  //   console.log("Submit");
  //   e.preventDefault();
  // };
  return (
    <Form className={classes["reservation-form"]} method="POST">
      {children}
      <input
        type="submit"
        value="Submit"
        className={`${classes.submit} drop-shadow`}
      />
    </Form>
  );
};

export default ReservationForm;
