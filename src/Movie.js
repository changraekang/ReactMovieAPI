import React, { useEffect, useState } from "react";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?sort_by=download_count&limit=15"
      )
    ).json();
    setMovies(json.data.movies);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id}>
          <img src={movie.medium_cover_image}></img>
          <h1>{movie.title}</h1>
          <p>{movie.rating}</p>
          <p>{movie.synopsis}</p>
          <p>{movie.genres}</p>
        </div>
      ))}{" "}
    </div>
  );
};

export default Movie;
