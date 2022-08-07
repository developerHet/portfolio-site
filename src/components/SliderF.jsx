import React from "react";
import { sliderItems } from "../data";
import Card from "./Card";
import styled from "styled-components";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

//slider api css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled(Slider)`
  .slick-list {
    .slick-slide > div {
      width: fit-content;
      margin-top: 50px;
      margin: auto;
      height: fit-content;
      display: flex;
      justify-content: center;
      align-items: center;
     // background: #eeeeee;
      border-radius: 12px;
      padding: 9px;
    }
  }
  .slick-dots li button:before {
    font-size: 10px;
    line-height: 10px;
  }
  .slick-dots li.slick-active button:before {
    color: #00adb5;
  }
  .slick-prev {
    left: 10px !important;
    z-index: 1;
  }
  .slick-next {
    right: 10px !important;
    z-index: 1;
  }

  .slick-prev:before,
  .slick-next:before {
    content: "" !important;
  }

  ul.slick-dots {
    bottom: -40px;
  }

  section.slick-dotted.slick-slider {
    margin-bottom: 0;
  }
`;

const Arrow = styled.div`
  transform: scale(1.3);
  color: #00adb5;
`;

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <Arrow direction="left">
        <ArrowForwardIosIcon />
      </Arrow>
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <Arrow direction="right">
        <ArrowBackIosIcon />
      </Arrow>
    </div>
  );
}

const SliderF = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <StyledSlider {...settings}>
      {sliderItems.map((item) => {
        return <Card item={item} key={item.id}/>;
      })}
    </StyledSlider>
  );
};

export default SliderF;
