import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/header';
import Footer from '../components/footer';

import '../styles/app.scss';

ReactDOM.render(
  <div>
    <Header />
    <p>Hello, world!</p>
    <Footer />
  </div>, document.getElementById('app')
);
