import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
     <>
     <div class="nav" >
       <div class="container">
         <h1 class="logo"><Link to="/">BADAD</Link></h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><a href="/Category">Categories</a></li>
         </ul>
       </div>
      
      <div class="profile-pic">
               <Link to="/Login"> 
       <img src={require("../Media/profile.png")} />
       </Link></div>
       </div>
    </>
  );
};
export default Nav;
