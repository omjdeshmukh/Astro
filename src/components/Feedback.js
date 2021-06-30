import React, { useState } from "react";
import "./Feedback.css";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import Slider from "react-slick";
import DatePicker from "react-datepicker";


const Feedback = () => {
  const [startDate, setStartDate] = useState(new Date());
  var settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="feedback__container">
      <div className="feed">
        <h3>What our client says</h3>
        <LinearScaleIcon />
        <div className="slide__container"></div>
      </div>

      <div className="form">
        <h3>get free consultation</h3>
        <LinearScaleIcon />
        <div class="wpb_column vc_column_container vc_col-sm-6">
         
        </div>
      </div>
    </div>
  );
};

export default Feedback;

// <Carousel className="d-block ">
//   <Carousel.Item>
//     <img
//       className="d-block   slider_img  "
//       src="https://source.unsplash.com/random/tech"
//       alt="First slide"
//     />
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block  slider_img"
//       src="https://source.unsplash.com/random/moon"
//       alt="Second slide"
//     />
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block  slider_img"
//       src="https://source.unsplash.com/random/nature"
//       alt="Third slide"
//     />
//   </Carousel.Item>
// </Carousel>;
