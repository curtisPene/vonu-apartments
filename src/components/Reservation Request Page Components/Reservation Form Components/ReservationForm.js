import classes from "./ReservationForm.module.css";
import "../../../index.css";
import { Form, useNavigation } from "react-router-dom";
import { useState } from "react";

const ReservationForm = ({ children }) => {
  const navigation = useNavigation();
  const [hasAgreed, setHasAgreed] = useState(false);

  const checkBoxChangeHandler = () => {
    setHasAgreed((hasAgreed) => !hasAgreed);
  };

  return (
    <Form className={classes["reservation-form"]} method="POST">
      {children}
      <div className={`${classes.agree} drop-shadow`}>
        <input
          type="checkbox"
          name="agreeToPolicies"
          onChange={checkBoxChangeHandler}
        />
        <label htmlFor="">
          I have read and agree to the policies set forth by the management of
          Vonu Apartments
        </label>
      </div>

      <input
        type="submit"
        value={
          navigation.state === "submitting" ? "Sending your details" : "Submit"
        }
        className={`${classes.submit} drop-shadow`}
        disabled={
          navigation.state === "submitting" || !hasAgreed ? true : false
        }
      />
    </Form>
  );
};

export default ReservationForm;
