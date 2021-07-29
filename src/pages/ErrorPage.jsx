import React from "react";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";
function ErrorPage() {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column vh-100">
      <Fade top>
        <p className="text-danger ">GO home and login</p>
      </Fade>
      <Fade bottom>
        <Link to="/">Go to Home</Link>
      </Fade>
    </div>
  );
}

export default ErrorPage;
