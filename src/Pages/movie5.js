import React from "react";
import Nav from "../Components/Navbar";
import "../CSS/style4.css";
import { Link } from "react-router-dom";
function pvid() {}
function Movie5() {
  return (
    <>
      <Nav />
      <center>
        <img
          className="innermovie"
          src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669176001/background/Pyaasa_kedjet.jpg"
        />
        <br />
        <br />
        <Link to="/video">
          <button className="don">Play Movie</button>
        </Link>
      </center>

      <h1>DESCRIPTION</h1>
      <p>
        Vijay (Guru Dutt) writes unpopular poems about the destitute and poor.
        Ridiculed by his brothers and scorned by publishers, Vijay finds
        encouragement in a sweet prostitute, Gulabo (Waheeda Rehman). When a
        homeless man wearing a coat Vijay gave him is killed, Gulabo convinces a
        publisher to print his poems, believing Vijay to be dead. The poems are
        wildly popular, thanks to the myth conjured around Vijay's supposed
        death. When he reappears, he finds that few friends can be trusted.
      </p>
    </>
  );
}
export default Movie5;
