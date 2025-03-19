import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    typeof: "",
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGU1OWQ1ZTkwYWVjYzBlOTUyZWUyYzY5NjMxMDgyZiIsIm5iZiI6MTc0MjM1MzE3Ni40MTkwMDAxLCJzdWIiOiI2N2RhMzMxODU5NGNhYzFlZTc2Y2EyOGYiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.DVl7WzJW0V_0ojS4wE_WKTw5rLa67NNVcdd2ZtF5BoA",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0]))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="player">
      <img src={back_arrow_icon} alt="" />
      <iframe
        src={`https://www.youtube.com/embed/${apiData.key}`}
        frameborder="0"
        width="90%"
        height="90%"
        title="trailer"
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{apiData.published_at.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
