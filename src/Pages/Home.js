import React from "react";
import Slider from "../Components/Slider";
import { Link } from "react-router-dom";
import Nav from "../Components/Navbar";
import "../CSS/Style.css";

const Panels = () => {
  return (
    <>
      <Nav />
      <br></br>
      <br />
      <Slider />
      <div>
        <center>
          <button style={{height:"40px",borderRadius:"40px",backgroundColor:"#D6AD60",width:"400px",fontSize:"28px",fontFamily:"Retrolight",fontWeight:"600"}}>DONATE MOVIES</button>
        </center>
      </div>
      <div className="movie-panels">
        <a href="">Recommended Movies</a>
        <br />
        <Link to="/movie">
          <img
            src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133174/poster/Sholay_netxop.jpg"
            alt="s"
          />
        </Link>
        <Link to="/movie10">
          <img
            src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133175/poster/veerapandiyan_djwwim.jpg"
            alt="s"
          />
        </Link>
        <Link to="/movie9">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133140/poster/Adimai_Penn_p04vi7.jpg" />
        </Link>
        <Link to="/movie4">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669137922/poster/bandini_pcz0eh.webp" />
        </Link>
        <Link to="/movie6">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133158/poster/server_db2irf.jpg" />
        </Link>
        <Link to="/movie5">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669137920/poster/main_vnmifn.webp" />
        </Link>
        <Link to="movie8">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133140/poster/images_vsuyrw.jpg" />
        </Link>
        <br />
        <a href="">Trending</a>
        <br />
        <Link to="/movie2">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669137921/poster/karnan_apxihj.jpg" />
        </Link>
        <Link to="/movie3">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133145/poster/Don_nndlux.jpg" />
        </Link>
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133165/poster/sangam_xauqqf.jpg" />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133164/poster/ddlj_quaskb.webp" />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133162/poster/MV5BOGQ0NzRkMGMtNjViZC00MWZhLWJhOTgtMzQ3ZTI4NDEwZDdlXkEyXkFqcGdeQXVyMjkxNzQ1NDI_._V1__uklb2x.jpg" />
        <Link to="/movie7">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669138380/poster/Parasakthi_1_umphja.jpg" />
        </Link>
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133171/poster/thiru_h4qfn4.jpg" />
        <br />
        <a href="">Evergreen</a>
        <br />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133170/poster/mayabazar_e6cdbg.jpg" />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669138090/poster/SHREE420_fywi8h.webp" />
        <Link to="/movie9">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133140/poster/Adimai_Penn_p04vi7.jpg" />
        </Link>
        <Link to="/movie7">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669138380/poster/Parasakthi_1_umphja.jpg" />
        </Link>
        <Link to="/movie6">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133158/poster/server_db2irf.jpg" />
        </Link>
        <Link to="/movie2">
          <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669137921/poster/karnan_apxihj.jpg" />
        </Link>
      </div>
    </>
  );
};

export default Panels;
