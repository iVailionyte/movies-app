import React from 'react';
import Movies from '../../components/Movies';

const moviesData = [
  {
    title: 'Harry Potter',
    description: 'Best movie',
  },
  {
    title: 'Home Alone',
    description: 'Christmas movie',
  }
];

const MoviesPage = () => (
  <div>
    <Movies movies={moviesData} />
  </div>
)

export default MoviesPage;
