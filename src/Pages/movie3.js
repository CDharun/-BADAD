import React from "react";
import Nav from "../Components/Navbar";
import "../CSS/style4.css";
import { Link } from "react-router-dom";
function pvid() {}
function Movie3() {
  return (
    <>
      <Nav />
      <center>
        <img
          className="innermovie"
          src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669176112/background/Don_mprdxm.jpg"
        />
        <br />
        <br />
        <Link to="/video">
          <button className="don">Play Movie</button>
        </Link>
      </center>

      <h1>DESCRIPTION</h1>
      <p>
        A powerful gangster named Don (Amitabh Bachchan) flees the cops and is
        killed during a showdown with Officer D'Silva (Iftekhar). Hoping to
        crack down on the remainder of Don's gang, D'Silva convinces a man named
        Vijay (also Bachchan), who is the spitting image of Don, to assume Don's
        identity and go undercover to bust Don's gang. But then D'Silva gets
        killed, and everyone from the gangsters to the cops think Vijay is Don.
        If he can't convince them otherwise, it may prove fatal.
      </p>
    </>
  );
}
export default Movie3;
