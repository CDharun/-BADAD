import React from "react";
const Slider = () => {
  var responsiveSlider = function () {
    var slider = document.getElementById("slider");
    var slideList = document.getElementById("slideWrap");
    var prev = document.getElementById("prev");
    var next = document.getElementById("next");

    var count = 1;
    var sliderWidth = slider.offsetWidth;
    var items = slideList.querySelectorAll("li").length;

    window.addEventListener("resize", function () {
      sliderWidth = slider.offsetWidth;
    });

    var nextSlide = function () {
      if (count < items) {
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      } else if ((count = items)) {
        slideList.style.left = "0px";
        count = 1;
      }
    };

    var prevSlide = function () {
      if (count > 1) {
        count = count - 2;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      } else if ((count = 1)) {
        count = items - 1;
        slideList.style.left = "-" + count * sliderWidth + "px";
        count++;
      }
    };

    next.addEventListener("click", function () {
      nextSlide();
    });

    prev.addEventListener("click", function () {
      prevSlide();
    });

    setInterval(function () {
      nextSlide();
    }, 6000);
  };

  window.onload = function () {
    responsiveSlider();
  };

  return (
    <>
      <div id="slider">
        <ul id="slideWrap">
          <li>
            <img
              src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669138214/background/reel_nxinvu.avif"
              alt=""
            ></img>
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669134147/background/mother_india_diml67.jpg"
              alt=""
            ></img>
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669134152/background/gadar_ff0pf1.jpg"
              alt=""
            ></img>
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669134212/background/veerakanal_p824t5.jpg"
              alt=""
            ></img>
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669134172/background/uthama_e9o6zt.jpg"
              alt=""
            ></img>
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669134172/background/rathapaasam_sakcao.jpg"
              alt=""
            ></img>
          </li>
          <li>
            <img
              src="https://res.cloudinary.com/dloadmcdu/image/upload/v1669134158/background/maxresdefault_lawdai.jpg"
              alt=""
            ></img>
          </li>
        </ul>
        <a id="prev" href="#">
          &#8810;
        </a>
        <a id="next" href="#">
          &#8811;
        </a>
      </div>
    </>
  );
};
export default Slider;