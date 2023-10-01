import classes from "./FormSectionHeader.module.css";
import "../../../index.css";

const FormSectionHeader = ({ step, headerText }) => {
  return (
    <div className={classes["section-header"]}>
      <div className={classes["step-indicator"]}>
        <div className={`${classes.circle} ${classes["circle-" + step]}`}></div>
      </div>
      <div>
        <p className="subbody-xs">Step {step}</p>
        <p>{headerText}</p>
      </div>
    </div>
  );
};

export default FormSectionHeader;
