import React from "react";
import Nav from "../Components/Navbar";
import "../CSS/style4.css";
import { Link } from "react-router-dom";
function pvid() {}
function Movie4() {
  return (
    <>
      <Nav />
      <center>
        <img
          className="innermovie"
          src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669176108/background/bandini_u7bz6m.webp"
        />
        <br />
        <br />
        <Link to="/video">
          <button className="don">Play Movie</button>
        </Link>
      </center>

      <h1>DESCRIPTION</h1>
      <p>
        A young woman recollects the events that drove her to murdering the wife
        of her lover, the freedom fighter Bikash Ghosh. As she serves her
        sentence, a friendship develops between her and the prison doctor.
      </p>
    </>
  );
}
export default Movie4;
