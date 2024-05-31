import React from "react";
import Nav from "../Components/Navbar";
import "../CSS/style4.css";
import { Link } from "react-router-dom";
function pvid() {}
function Movie2() {
  return (
    <>
      <Nav />
      <center>
        <img
          className="innermovie"
          src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669175966/background/karnan_ryg9vo.jpg"
        />
        <br />
        <br />
        <Link to="/video">
          <button className="don">Play Movie</button>
        </Link>
      </center>
      <h1>DESCRIPTION</h1>
      <p>
        Story of the central hero of Mahabharata who rises from nothing to
        becoming the world's greatest warrior ever born in history and emerges
        as the hero of the Kurukshetra war. Born with an Armour and ear-rings,
        and bequeathed as a gift from Surya to an unwed Kunthi (M.V. Rajamma),
        Karna (Shivaji Ganesan) is abandoned so as to prevent embarrassment for
        her. He is set afloat in the Ganga, rescued and adopted by a
        horse-carriage driver, who is employed with Raja Dhritarashtra. Instead
        of adapting to his foster father's profession, he was more interested in
        obtaining training as a warrior. Upon being refused, he turned to
        Suryadev, and learned all aspects of warfare - little knowing that soon
        he will be befriended by Rajkumar Dhuryodhan (S.A. Ashokan), and be
        compelled to take up arms against the Pandavas - the sons of none other
        than Kunthi herself.
      </p>
    </>
  );
}
export default Movie2;
