import React from 'react';
import Movies from '../Movies';
import Header from '../Header';
import Footer from '../Footer';

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
    <Footer>Footer</Footer>
  </div>
)

export default App;
