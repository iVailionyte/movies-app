import React from 'react';
import Movie from '../Movie';

const movie1 = {
  title: 'Harry Potter',
  description: 'Best movie'
}

const movie2 = {
  title: 'Demo Movie',
  description: 'Worst movie'
}

const Movies = () => (
  <div>
    <Movie {...movie1} id={123} />
    <Movie {...movie2} />
  </div>
)

export default Movies;
