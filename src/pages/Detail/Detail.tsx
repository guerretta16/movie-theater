import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ActorCard } from "../../components/ActorCard/ActorCard";
import { Loading } from "../../components/Loading/Loading";
import { NavigateButton } from "../../components/NavigateButton/NavigateButton";
import { RecommendedCard } from "../../components/RecommendedCard/RecommendedCard";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useMovie } from "../../hooks/useMovie";
import { Cast, MovieDetail, Recommended } from "../../interfaces/types";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import "./style.css";

export const Detail = () => {
  const [favorites, setFavorites] = useLocalStorage("favMovies", []);
  const { idMovie } = useParams();
  const {
    movie,
    credits,
    recommended,
    loading,
    error,
    movieDetail,
    movieCredits,
    movieRecommended,
  } = useMovie();

  useEffect(() => {
    movieDetail(String(idMovie));
    movieCredits(String(idMovie));
    movieRecommended(String(idMovie));
  }, []);

  if (loading) {
    return <Loading />;
  }

  const returnDate = (): Date => {
    if (movie.release_date === "") {
      return new Date();
    } else {
      return new Date(String(movie.release_date));
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const arrayMovies = favorites;
    const exist = arrayMovies.filter(
      (item: MovieDetail) => item.id === movie.id
    );
    if (exist.length === 0) {
      arrayMovies.push(movie);
      setFavorites(arrayMovies);
    } else {
      alert("You'd added it already");
    }
  };
  console.log(recommended);
  return movie.id !== 0 ? (
    <div className="details">
      <div className="details-header">
        <NavigateButton />
      </div>
      <div className="details-body">
        <div className="details-movie">
          <div className="details-movie-left">
            <div className="details-images">
              <img
                className="details-background"
                src={
                  movie.backdrop_path !== ""
                    ? `https://image.tmdb.org/t/p/original/${movie.backdrop_path}`
                    : ""
                }
                alt={movie.original_title}
              />
              <img
                className="details-poster"
                src={
                  movie.poster_path !== ""
                    ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                    : ""
                }
                alt={movie.original_title}
              />
            </div>
          </div>
          <div className="details-movie-right">
            <div className="main-info">
              <div className="main-info-head">
                <h2 className="details-title">{movie.title}</h2>
                <button onClick={handleClick} className="details-btn-fav">
                  Add Favorite
                </button>
              </div>
              <small className="details-tagLine">{movie.tagline}</small>
              <p className="details-overview">{movie.overview}</p>
            </div>
            <div>
              <div className="detaild-group">
                <small>
                  Release date{" "}
                  <b>
                    {returnDate().getDate()}{" "}
                    {returnDate().toLocaleString("en-US", { month: "short" })}{" "}
                    {returnDate().getFullYear()}
                  </b>
                </small>
                <small>
                  Votes <b>{movie.vote_average.toFixed(2)}</b>/10
                </small>
              </div>
            </div>
          </div>
        </div>
        {/* Actors */}
        <div className="details-actors-cont">
          <h2 className="details-actors-title">Cast</h2>
          <div className="details-actors">
            {credits.cast.map((item: Cast, index: number) => {
              return <ActorCard key={index} cast={item} />;
            })}
          </div>
        </div>
        {/* Recommended movies */}
        <div className="details-recommended-cont">
          <h2 className="details-recommended-title">Suggested Movies</h2>
          <div className="details-recommended">
            {recommended.results.map((item: Recommended, index: number) => {
              return <RecommendedCard key={index} recomended={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <NotFoundPage />
  );
};
