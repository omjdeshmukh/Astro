import React from "react";
import "./Carousel.css";
import { Carousel } from "react-responsive-carousel";

const Carouselx = () => {
  return (
    <Carousel className="carousel">
      <div className="image__carousel" infiniteLoop="true">
        <img
          // style={{ width: "100vw", height: 300 }}
          src="https://source.unsplash.com/random/500x200"
        />
        {/* <p className="legend">Legend 1</p> */}
      </div>
      <div>
        <img src="https://source.unsplash.com/random/500x200" />
        {/* <p className="legend">Legend 2</p> */}
      </div>
      <div>
        <img src="https://source.unsplash.com/random/500x200" />
        {/* <p className="legend">Legend 3</p> */}
      </div>
    </Carousel>
  );
};

export default Carouselx;
