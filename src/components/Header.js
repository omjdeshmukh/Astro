import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import FavoriteIcon from "@material-ui/icons/Favorite";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to="/">
          <h3>Astro</h3>
        </Link>
      </div>

      <div className="header__link__menu">
        <Link to="/"> About Us </Link>
        <Link to="/"> Services </Link>
        <Link to="/"> products </Link>
        <Link to="/"> blogs </Link>
        <Link to="/"> contact </Link>
      </div>

      <div className="side__menu">
        <Link to="/">
          <SearchIcon />
        </Link>
        <Link to="/">
          <PersonIcon />
        </Link>
        <Link to="/">
          <FavoriteIcon />
        </Link>
      </div>
    </div>
  );
};

export default Header;
