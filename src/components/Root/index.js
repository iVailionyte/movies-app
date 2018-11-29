import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import IndexPage from '../../pages/Index';
import MoviesPage from '../../pages/Movies';
import Layout from '../Layout';

const Root = () => (
  <Router>
    <Layout>
      <Route path="/" exact  component={IndexPage}/>
      <Route path="/movies" component={MoviesPage}/>
    </Layout>
  </Router>
)

export default Root;
