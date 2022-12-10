import React from "react";
import "./style.css";
import gray from "../../assets/img/gray.jpg";
import { Recommended } from "../../interfaces/types";
import { Link } from "react-router-dom";

interface RecommendedProps {
  recomended: Recommended;
}

export const RecommendedCard = ({ recomended }: RecommendedProps) => {
  const path = () => {
    if (recomended.poster_path === null) {
      return "";
    } else {
      return recomended.poster_path;
    }
  };

  const date = () => {
    if (recomended.release_date === "") {
      return new Date();
    } else {
      return new Date(String(recomended.release_date));
    }
  };

  return (
    <Link className="recommended-card" to={`/movie/${recomended.id}`} reloadDocument>
      <div className="recommended-picture">
        <img
          src={
            path() !== ""
              ? `https://image.tmdb.org/t/p/w200/${recomended.poster_path}`
              : gray
          }
          alt={""}
        />
      </div>
      <div className="recommended-info">
        <span className="recommended-info-title">{recomended.title}</span>
        <div className="recommended-info-bottom">
          <small>
            Release date{" "}
            {date().getDate()}{" "}
            {date().toLocaleString("en-US", { month: "short" })}{" "}
            {date().getFullYear()}
          </small>
          <small>
            Vote{" "}
            <b>{recomended.vote_average.toFixed(2)}</b>/10
          </small>
        </div>
      </div>
    </Link>
  );
};
