import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = ({ start }) => {
  if (!start) {
    return null;
  }

  return (
    <Carousel fade interval={1000}>
      {/* .map is used to loop around an array. In this case the array in json, banner.start */}
      {start.map((item) => (
        <Carousel.Item>
          <img className="d-block w-100" src={item} alt="First slide" />
        </Carousel.Item>
      ))}
      ;
    </Carousel>
  );
};

export default Slider;
