import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';

export default function Nav() {
  const [movies, setMovies] = useContext(MovieContext);

  return (
    <div>
      <h3>Ryan</h3>
      <h3>List of Movies: {movies.length} </h3>
    </div>
  );
}
