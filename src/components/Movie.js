import React from "react";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";
const Movie = ({ id, coverImg, rating, synopsis, title, genres }) => {
  const star = "★".repeat(parseInt(rating / 2));
  const halfStar = "☆".repeat(parseInt(rating % 2));
  return (
    <div className={styles.movie}>
      <img src={coverImg} alt={title} className={styles.movie__img} />
      <div>
        <h2 className={styles.movie__title}>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <h3 className={styles.movie__star}>
          {star}
          {halfStar}
        </h3>
        {genres ? (
          <ul className={styles.movie__genres}>
            <li> genres </li>
            {genres.map((g) => (
              <li key={g}>-{g}</li>
            ))}
          </ul>
        ) : null}
        <p>
          {synopsis.length > 220 ? `${synopsis.slice(0, 220)}...` : synopsis}
        </p>
      </div>
    </div>
  );
};

export default Movie;
