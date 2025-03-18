import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import dropdown from "../../assets/caret_icon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & popular</li>
          <li>My List</li>
          <li>Browse by languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={search_icon} alt="logo" className="icons" />
        <p>Children</p>
        <img src={bell_icon} alt="icons" />
        <div className="navbar-profile">
          <img src={profile_img} alt="icons" className="profile" />
          <img src={dropdown} alt="icons" className="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
