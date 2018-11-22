import React from 'react';
import Movies from '../Movies';
import Header from '../Header';

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
    <Header><h1>Header</h1></Header>
    <Movies movies={moviesData} />
  </div>
)

export default App;
