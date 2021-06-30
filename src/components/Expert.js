import React from "react";
import "./Expert.css";
import Slider from "react-slick";

const Expert = () => {
    var settings = {
      dots: false,
      // infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
    };
  return (
    <div className="expert_container">
      <div className='para'>
        <h1>SPEAK TO OUR EXPERTS </h1>
        <p>
          Get in touch with our experts to avail specified consulting and
          guidance, be it in Match Making, Bollywood Astrology, Vedic Astrology,
          Medical Astrology, Career Astrology, Palmistry or Gemology, it is just
          a mail or call away.
        </p>
      </div>
      <div className='expert_slider' >
        <Slider {...settings}>
          <div>
            <img src="http://placekitten.com/g/200/100" alt="slid_img" />
          </div>
          <div>
            <img src="http://placekitten.com/g/200/100" alt="slid_img" />
          </div>
          <div>
            <img src="http://placekitten.com/g/200/100" alt="slid_img" />
          </div>
          <div>
            <img src="http://placekitten.com/g/200/100" alt="slid_img" />
          </div>
          <div>
            <img src="http://placekitten.com/g/200/100" alt="slid_img" />
          </div>
          <div>
            <img src="http://placekitten.com/g/200/100" alt="slid_img" />
          </div>
          <div>
            <img src="http://placekitten.com/g/200/100" alt="slid_img" />
          </div>
          <div>
            <img src="http://placekitten.com/g/200/100" alt="slid_img" />
          </div>
          <div>
            <img src="http://placekitten.com/g/200/100" alt="slid_img" />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Expert;
