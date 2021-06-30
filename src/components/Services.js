import React from "react";
import "./Services.css";
import LinearScaleIcon from "@material-ui/icons/LinearScale";
import { Link, Route } from "react-router-dom";
import MenuItem from "./MenuItem";
import { Card1, Card2, Card3, Card4, Card5, Card6 } from "./Cards";

const Services = () => {
  return (
    <div className="service_box_container">
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

      <div className="menus_items">
        <div className="menu">
          <Link to="/s1">
            <MenuItem title="side1" />
          </Link>
          <Link to="/s2">
            <MenuItem title="side2" />
          </Link>
          <Link to="/s3">
            <MenuItem title="side3" />
          </Link>
          <Link to="/s4">
            <MenuItem title="side4" />
          </Link>
          <Link to="/s5">
            <MenuItem title="side5" />
          </Link>
          <Link to="/s6">
            <MenuItem title="side6" />
          </Link>
        </div>
        <div className="items">
          <Route path="/s1">
            <Card1 />
          </Route>
          <Route path="/s2">
            <Card2 />
          </Route>
          <Route path="/s3">
            <Card3 />
          </Route>
          <Route path="/s4">
            <Card4 />
          </Route>
          <Route path="/s5">
            <Card5 />
          </Route>
          <Route path="/s6">
            <Card6 />
          </Route>
        </div>
      </div>
    </div>
  );
};

export default Services;
