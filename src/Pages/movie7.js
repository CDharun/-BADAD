import React from "react";
import Nav from "../Components/Navbar";
import "../CSS/style4.css";
import { Link } from "react-router-dom";
function pvid() {}
function Movie7() {
  return (
    <>
      <Nav />
      <center>
        <img
          className="innermovie"
          src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669175998/background/parasakthi_famwur.jpg"
        />
        <br />
        <br />
        <Link to="/video">
          <button className="don">Play Movie</button>
        </Link>
      </center>

      <h1>DESCRIPTION</h1>
      <p>
        Sivaji Ganesan leaves Burma in the midst of World War II in order to
        return to India and attend his sister's wedding. However, tragedy
        befalls the family and they must find their place in a new Madras.
      </p>
    </>
  );
}
export default Movie7;
