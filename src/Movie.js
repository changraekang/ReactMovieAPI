import React, { useEffect, useState } from "react";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year&limit=15"
      )
    ).json();
    setMovies(json.data.movies);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return <div>영화</div>;
};

export default Movie;
