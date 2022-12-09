import React, { useEffect } from "react";
import { Loading } from "../../components/Loading/Loading";
import { MovieList } from "../../components/MovieList/MovieList";
import { TopBar } from "../../components/TopBar/TopBar";
import { useMovie } from "../../hooks/useMovie";
import "./style.css";

export const Home = () => {
  const { movies, loading, error, popularMovies, moviesByQuery } = useMovie();

  useEffect(() => {
    popularMovies()
  }, [])

  if(loading){
    return <Loading />
  }
  
  return (
    <div className="home">
      <div className="home-top">
        <h1>Welcome, we have all details about your favorites movies!!!</h1>
        <div className="home-topBar">
          <TopBar moviesByQuery={moviesByQuery} />
        </div>
      </div>
      <MovieList movies={movies}/>
    </div>
  );
};
