import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "../../interfaces/types";
import "./style.css";

interface MovieProp {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieProp) => {
  const date = new Date(movie.release_date);

  return (
    <Link to={`/movie/${movie.id}`} className="movieCard">
      <div className="movieCard-header">
        <img
          className="movieCard-poster"
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={movie.original_title}
        />
      </div>
      <div className="movieCard-body">
        <div className="movieCard-mainInfo">
          <h4 className="movieCard-title">{movie.title}</h4>
          <p className="movieCard-overView">{movie.overview}</p>
        </div>
        <div className="movieCard-footerInfo">
          <div className="movieCard-date">
            {date.getDate()} {date.toLocaleString("en-Us", { month: "short" })}{" "}
            {date.getFullYear()}
          </div>
          <span className="movieCard-vote">
            <span>{movie.vote_average}</span>/10
          </span>
        </div>
      </div>
    </Link>
  );
};
