import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/movies">Movies</Link>
    </li>
    <li>
      <Link to="/search">Search</Link>
    </li>
  </ul>
)

export default Navigation;
