import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";

const Footer = () => {
  return (
    <div className="container">
      <div className="menu__list">
        <div className="list">
          <p>Menu_Heading</p>
          <Link to="/"> Menu </Link>
          <Link to="/"> Menu </Link>
          <Link to="/"> Menu </Link>
          <Link to="/"> Menu </Link>
          <Link to="/"> Menu </Link>
          <Link to="/"> Menu </Link>
          <Link to="/"> Menu </Link>
        </div>
        <div className="list">
          <p>Menu_Heading</p>
          <Link to="/"> Menu </Link>
          <Link to="/"> Menu </Link>
          <Link to="/"> Menu </Link>
          <Link to="/"> Menu </Link>
          <Link to="/"> Menu </Link>
          <Link to="/"> Menu </Link>
          <Link to="/"> Menu </Link>
        </div>
        <div className="list">
          <p>Menu_Heading</p>
          <Link to="/"> Menu </Link>
          <Link to="/"> Menu </Link>
          <Link to="/"> Menu </Link>
          <Link to="/"> Menu </Link>
          <Link to="/"> Menu </Link>
          <Link to="/"> Menu </Link>
          <Link to="/"> Menu </Link>
        </div>
        <div className="list">
          <p>Menu_Heading</p>
          <Link to="/"> Menu </Link>
          <Link to="/"> Menu </Link>
          <Link to="/"> Menu </Link>
          <Link to="/"> Menu </Link>
          <Link to="/"> Menu </Link>
          <Link to="/"> Menu </Link>
          <Link to="/"> Menu </Link>
        </div>
      </div>

      <div>
        <hr  />
      </div>

      <div className="social__list ">
        <div className="copy_right">
          <p>Copyright 2020. All Rights Reserved.</p>
          <p>Designed by Pristdel Pvt. Ltd.</p>
        </div>
        <div>
          <Link to="/">
            <FacebookIcon />
          </Link>
          <Link to="/">
            <YouTubeIcon />
          </Link>
          <Link to="/">
            <LinkedInIcon />
          </Link>
          <Link to="/">
            <InstagramIcon />
          </Link>
          <Link to="/">
            <TwitterIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
