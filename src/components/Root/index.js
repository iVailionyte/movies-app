import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IndexPage from '../../pages/Index';
import MoviesPage from '../../pages/Movies';
import SearchPage from '../../pages/Search';
import Layout from '../Layout';

const Root = () => (
  <Router>
    <Layout>
      <Route path="/" exact  component={IndexPage} />
      <Route path="/movies" component={MoviesPage} />
      <Route path="/search" component={SearchPage} />
    </Layout>
  </Router>
)

export default Root;
