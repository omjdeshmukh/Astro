import React from "react";
import "./Horoscopes.css";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import Slider from "react-slick";

const Horoscopes = () => {
  var settings = {
    dots: false,
    // infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <div className="service_box">
        <h3>Our Services</h3>
        <LinearScaleIcon />
        <p>
          We at AstroKapoor believe in “Health, Wealth, Peace and Prosperity”.
        </p>
        <p>
          In AstroKapoor we provide various consulting services, among which
          Medical Astrology and Corporate Astrology are key services.
        </p>
      </div>
      <div className="container">
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
      <div className="image_link">
        <img src="https://source.unsplash.com/random" alt="image__" />
      </div>
    </div>
  );
};

export default Horoscopes;
