import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import hero_background from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_background} alt="hero banner" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="hero title" className="caption-img" />
          <p>
            Discovering his ties to secret ancient order, a young man living in
            modern Istabul embarks on a quest to save the city from immortal
            enemy.
            <div className="hero-btns">
              <button className="btn">
                <img src={play_icon} alt="Play icon" />
                Play
              </button>
              <button className="btn dark-btn">
                <img src={info_icon} alt="Play icon" />
                More Info
              </button>
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
