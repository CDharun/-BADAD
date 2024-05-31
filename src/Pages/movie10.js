import React from "react";
import Nav from "../Components/Navbar";
import "../CSS/style4.css";
import { Link } from "react-router-dom";
function Movie10() {
  return (
    <>
      <Nav />
      <center>
        <img
          className="innermovie"
          src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669193897/poster/maxresdefault_g90yig.jpg"
        />
        <br />
        <br />
        <Link to="/video">
          <button className="don">Play Movie</button>
        </Link>
      </center>

      <h1>DESCRIPTION</h1>
      <p>
        When the British East India Company forces polygar Kattabomman to pay
        taxes, levies and be their subsidiary ruler, he openly defies their
        policy and battles them until his arrest and hanging.
        
      </p>
    </>
  );
}
export default Movie10;
