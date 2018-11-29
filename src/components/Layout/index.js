import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import Main from '../Main';
import Navigation from '../Navigation';

const Layout = (props) => (
  <div>
    <Header>
      <Navigation />
    </Header>
    <Main>
      {props.children}
    </Main>
    <Footer>
      Footer
    </Footer>
  </div>
)

export default Layout;
