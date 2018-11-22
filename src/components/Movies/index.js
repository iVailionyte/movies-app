import React from 'react';
import Movie from '../Movie';

const Movies = (props) => (
  <div>
    {props.movies.map(movie => (
      <Movie {...movie} />
    ))}
  </div>
)

export default Movies;
