import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function Movie({ poster, title, year, genres, runtime, rating, summary }) {
  return (

    <ul className="movie_list">
      <li className="movie">
        <Link 
          to="/MovieDetail" 
          state={{ poster, title, year, genres, summary, rating }}>
          <img src={poster} alt={title} />
          <div className="info"> 
            <h3>{title}</h3>
            <p>Year: {year}</p>
            <p>Genre: {genres.join(', ')}</p>
            <p>Runtime: {runtime ? `${runtime}분` : "정보 없음"}🎬</p>
            <p>Rating: {rating}🎇</p>
            <p>Summary: 📑{summary.slice(0, 150)}...</p>
          </div>
        </Link>
      </li>
    </ul>
  );
}
Movie.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  runtime: PropTypes.number,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
};

export default Movie;
