import React from "react";
import "./Footer.css";
import youtube_icon from "../../assets/youtube_icon.png";
import twitter_icon from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={youtube_icon} alt="Youtube icon" />
        <img src={twitter_icon} alt="Youtube icon" />
        <img src={instagram_icon} alt="Youtube icon" />
        <img src={facebook_icon} alt="Facebook icon" />
      </div>
      <ul>
        <li>Audio description</li>
        <li>Help Centre</li>
        <li>Gift Cards</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie</li>
        <li>Corporate Information</li>
        <li>Contact us</li>
      </ul>
      <p className="copyright-text">@1997 - 2025 Netflix, Inc</p>
    </div>
  );
};

export default Footer;
