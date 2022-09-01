import React from "react";
import Slider from "react-slick";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.scss";
// import { slickPngData } from "../../assets/pngData"
const ImageSlider = () => {
  const settings = {
    dots: true,
    // infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="image-slider">
      <span className="left">
        <FiChevronLeft />
      </span>
      <div className="slick-carousel">
        <Slider autoplay>
          <div>
            {/* <img src="imgs/womenintech-global-movement-un-women.jpg" alt="" /> */}
            {/* {
              slickPngData
            } */}
          </div>
        </Slider>
      </div>
      <span className="right">
        <FiChevronRight />
      </span>
    </div>
  );
};

export default ImageSlider;
