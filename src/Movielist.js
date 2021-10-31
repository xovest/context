import React, { useState } from 'react';
import Movie from './Movie';

export default function MovieList() {
  const [movies, setMovies] = useState([
    {
      name: 'Stranger Things',
      price: '5$',
      id: 23124
    },
    {
      name: 'Rick and Morty',
      price: '10$',
      id: 123124
    },
    {
      name: 'Family Guy',
      price: '10$',
      id: 23524
    }
  ]);

  return (
    <div>
      {movies.map(movie => (
        <Movie name={movie.name} price={movie.price} key={movie.id} />
      ))}
    </div>
  );
}
