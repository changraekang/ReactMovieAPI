import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ id, coverImg, rating, synopsis, title, genres }) => {
  const star = "★".repeat(parseInt(rating / 2));
  const halfStar = "☆".repeat(parseInt(rating % 2));
  return (
    <div>
      <img src={coverImg} alt={title}></img>
      <Link to={`/movie/${id}`}>
        <h2>{title}</h2>
      </Link>
      <p>
        {star}
        {halfStar}
      </p>
      <p>{synopsis}</p>
      {genres ? (
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
};

export default Movie;
