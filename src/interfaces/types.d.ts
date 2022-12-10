interface User {
  email: string;
  password: string;
}

interface Token {
  token: string;
}

interface LocalStorage {
  key: string | null;
  defaultValue: string | undefined | [];
}

interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface MovieDetail {
  backdrop_path: string;
  homepage: string;
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  tagline: string;
  title: string;
  vote_average: number;
}

interface Cast {
  id: number;
  name: string;
  original_name: string;
  profile_path: string;
  character: string;
}

interface MovieCredits {
  id: number;
  cast: Array<Cast>;
}

interface MovieInfo {
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}

interface Recommended{
    id: number
    title: string
    release_date: string
    vote_average: number
    poster_path: string
}

interface MovieRecommended{
    page: number
    results: Array<Recommended>
    total_pages: number
    total_results: number
}

export { User, Token, LocalStorage, MovieInfo, Movie, MovieDetail, Cast, MovieCredits, Recommended, MovieRecommended };
