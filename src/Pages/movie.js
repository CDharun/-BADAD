import React from "react";
import Nav from "../Components/Navbar";
import "../CSS/style4.css";
import { Link } from "react-router-dom";
function pvid(){

}
function Movie()
{
 return (
   <>
     <Nav />
     <center>
       <img
         className="innermovie"
         src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669134159/background/sholay_ekjho2.jpg"
       />
       <br />
       <br />
       <Link to="/video">
         <button className="don">Play Movie</button>
       </Link>
     </center>

     <h1>DESCRIPTION</h1>
     <p>
       Dharmendra as Veeru Sanjeev Kumar as Thakur Baldev Singh Hema Malini as
       Basanti Amitabh Bachchan as Jai (Jaidev) Jaya Bhaduri as Radha, Thakur's
       daughter-in-law Iftekhar as Inspector Khurana, Radha's Father Amjad Khan
       as Gabbar Singh Satyen Kappu as Ramlaal, Thakur's servant A. K. Hangal as
       Rahim Chacha, the imam in the village Sachin Pilgaonkar as Ahmed, son of
       the imam Jagdeep as Soorma Bhopali, a comical wood trader Leela Mishra as
       Mausi, Basanti's maternal aunt Asrani as the Jailor, a comical character
       modelled after Charlie Chaplin in The Great Dictator[7] Keshto Mukherjee
       as Hariram, prison barber and Jailor's side-kick Mac Mohan as Sambha,
       Gabbar Singh's sidekick Viju Khote as Kaalia, another of Gabbar's men
       whom he kills in a game of Russian roulette Vikas Anand as Jailor Helen
       in a special appearance in song "Mehbooba Mehbooba" Jalal Agha in a
       special appearance in song "Mehbooba Mehbooba" Raj Kishore as a jail
       inmate with gayish mannerisms[8] Arvind Joshi as elder son of Thakur
       Baldev Singh[9] Sharad Kumar as Ninni, younger son of Thakur Baldev
       Singh[10] Gita Siddharth as Geeta, Baldev Singh daughter in law[11]
     </p>
   </>
 );
}
export default Movie;
