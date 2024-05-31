import React from "react";
import Nav from "../Components/Navbar";
import "../CSS/style4.css";
import { Link } from "react-router-dom";
function pvid() {}
function Movie6() {
  return (
    <>
      <Nav />
      <center>
        <img
          className="innermovie"
          src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669193176/background/sundharam_dnb6nm.jpg"
        />
        <br />
        <br />
        <Link to="/video">
          <button className="don">Play Movie</button>
        </Link>
      </center>

      <h1>DESCRIPTION</h1>
      <p>
        A poor waiter falls for a rich woman. With the help of his best friend,
        he becomes a successful film actor. But he is unaware that his friend
        and his ladylove love each other.
      </p>
    </>
  );
}
export default Movie6;
