import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import IndexPage from '../../pages/Index';
import MoviesPage from '../../pages/Movies';
import Header from '../Header';
import Footer from '../Footer';

const Root = () => (
  <Router>
    <div>
      <Header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>
      </Header>

      <Route path="/" exact  component={IndexPage}/>
      <Route path="/movies" component={MoviesPage}/>

      <Footer>Footer</Footer>
    </div>
  </Router>
)

export default Root;
