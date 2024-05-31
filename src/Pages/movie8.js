import React from "react";
import Nav from "../Components/Navbar";
import "../CSS/style4.css";
import { Link } from "react-router-dom";
function pvid() {}
function Movie8() {
  return (
    <>
      <Nav />
      <center>
        <img
          className="innermovie"
          src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669181848/background/kalathur-kannamma_nwfvv9.jpg"
        />
        <br />
        <br />
        <Link to="/video">
          <button className="don">Play Movie</button>
        </Link>
      </center>

      <h1>DESCRIPTION</h1>
      <p>
        A landlord's son and a farmer's daughter fall in love and marry secretly
        in a temple. Since their love is not accepted by the families, they are
        forced to separate while their child grows up in an orphanage.
      </p>
    </>
  );
}
export default Movie8;
