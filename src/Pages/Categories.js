import React from "react";
import { render } from "@testing-library/react";
import "../CSS/Style.css";
import Nav from "../Components/Navbar";
const Category = () => {
  return (
    <>
    <Nav />
      <div className="movie-panels">
        <a href="">The Golden Age 1950's</a>
        <br />
        <img
          src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133175/poster/veerapandiyan_djwwim.jpg"
          alt="s"
        />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669181327/poster/thiru_q9f9dw.jpg" />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133161/poster/mother_india_cropt6.webp" />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133170/poster/mayabazar_e6cdbg.jpg" />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669138380/poster/Parasakthi_1_umphja.jpg" />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669180218/poster/main_urszn5.webp" />
      </div>
      <div className="movie-panels">
        <a href="">The Pride of 1960's </a>
        <br />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133165/poster/sangam_xauqqf.jpg" />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133140/poster/Adimai_Penn_p04vi7.jpg" />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669137922/poster/bandini_pcz0eh.webp" />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133147/poster/download_bkeklo.jpg" />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669137921/poster/karnan_apxihj.jpg" />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133158/poster/server_db2irf.jpg" />
      </div>
      <div className="movie-panels">
        <a href="">The Rise of 1970's </a>
        <br />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669138090/poster/SHREE420_fywi8h.webp" />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133145/poster/Don_nndlux.jpg" />
        <img src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669133162/poster/MV5BOGQ0NzRkMGMtNjViZC00MWZhLWJhOTgtMzQ3ZTI4NDEwZDdlXkEyXkFqcGdeQXVyMjkxNzQ1NDI_._V1__uklb2x.jpg" />
        <br></br>
      </div>
    </>
  );
};
export default Category;
