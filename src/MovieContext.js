import React, { useState, createContext } from 'react';

export const MovieContext = createContext();

export function MovieProvider(props) {
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
      <MovieContext.Provider value={[movies, setMovies]}>
        {props.children}
      </MovieContext.Provider>
    </div>
  );
}
