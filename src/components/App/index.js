import React from 'react';
import Movies from '../Movies';

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

const App = () => (
  <div>
    <Movies movies={moviesData} />
  </div>
)

export default App;
