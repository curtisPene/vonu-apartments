import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import classes from "./ErrorPage.module.css";
import "../index.css";

const ErrorPage = () => {
  return (
    <div className={classes["error-page"]}>
      <Header />
      <h3>Somethings gone wrong!</h3>
      <p>
        Head back to the homepage <Link to={"/"}>here</Link>
      </p>
      <Footer />
    </div>
  );
};

export default ErrorPage;
