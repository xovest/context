import React from 'react';
import AddMovie from './addMovie';
import './App.css';
import { MovieProvider } from './MovieContext';
import MovieList from './Movielist';
import Nav from './Nav';

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <Nav />
        <AddMovie />
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;