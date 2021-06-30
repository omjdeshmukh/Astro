import React, { useState } from "react";
import "./Feedback.css";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import Slider from "react-slick";
import DatePicker from "react-datepicker";
import "../../node_modules/react-datepicker/dist/react-datepicker.css";

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
        <div>
          <form className="form_">
            <div className="information">
              <div className="form-row">
                <div className="">
                  <input
                    type="name"
                    className="form-control"
                    id="name"
                    placeholder="Name"
                  />
                </div>
                <div className="">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="">
                  <input
                    type="number"
                    className="form-control"
                    id="number"
                    placeholder="Mob. Number"
                  />
                </div>
                <div className="">
                  <select
                    id="inputState"
                    className="form-control "
                    style={{ width: 180, height: 35 }}
                  >
                    <option selected>Male</option>
                    <option selected>Female</option>
                    <option selected>Trans</option>
                  </select>
                </div>
              </div>
              <div className="form-row">
                <div>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="form-control"
                  />
                </div>
                <div className="">
                  <input
                    type="address"
                    className="form-control"
                    id="address"
                    placeholder="Birth Place"
                  />
                </div>
              </div>
            </div>

            <div className="form-group">
              <input
                type="number"
                class="form-control"
                id="inputAddress"
                placeholder="Birth Hour"
              />
              <input
                type="number"
                class="form-control"
                id="inputAddress"
                placeholder="Birth Minute"
              />
              <input
                type="number"
                class="form-control"
                id="inputAddress"
                placeholder="Birth Second"
              />
            </div>

            <div>
              <textarea placeholder="Your Concern" className="input_area" />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
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
