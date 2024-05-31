import React from "react";
import Nav from "../Components/Navbar";
import "../CSS/style4.css";
import { Link } from "react-router-dom";
function pvid() {}
function Movie9() {
  return (
    <>
      <Nav />
      <center>
        <img
          className="innermovie"
          src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669181847/background/adimaippenn_uefxc6.jpg"
        />
        <br />
        <br />
        <Link to="/video">
          <button className="don">Play Movie</button>
        </Link>
      </center>

      <h1>DESCRIPTION</h1>
      <p>
        An evil man kills Vengaiyan's father and enslaves all his people.
        Vengaiyan is ignorant and wild but Jeeva helps him evolve into a valiant
        and wise man, who then swears to right his people.
      </p>
    </>
  );
}
export default Movie9;
