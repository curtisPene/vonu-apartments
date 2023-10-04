import classes from "./ReservationForm.module.css";
import "../../../index.css";
import { Form, useNavigation } from "react-router-dom";

const ReservationForm = ({ children }) => {
  const navigation = useNavigation();

  return (
    <Form className={classes["reservation-form"]} method="POST">
      {children}
      <input
        type="submit"
        value={
          navigation.state === "submitting" ? "Sending your details" : "Submit"
        }
        className={`${classes.submit} drop-shadow`}
        disabled={navigation.state === "submitting" ? true : false}
      />
    </Form>
  );
};

export default ReservationForm;
