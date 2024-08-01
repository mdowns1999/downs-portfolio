import { useRouteError } from "react-router-dom";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import classes from "./ErrorPage.module.css";

const ErrorPage = () => {
  const error = useRouteError();

  let title = "An error Occurred";
  let message = "Something went wrong!  Please try again later.";

  //This will help us determine what kind of error Page we show the user.
  if (error.status === 404) {
    title = "Not Found!";
    message = "Could not find page!";
  } 

  return (
    <div className="container">
    <Header/>
        <main>
          <div className={classes.ErrorBox}>
            <h1 className="pageBanner">{title}</h1>
            <p>{message}</p>
          </div>
        </main>
        <Footer/>
    </div>
  );
};

export default ErrorPage;