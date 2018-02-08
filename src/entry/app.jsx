import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import IndexContent from '../components/index/IndexContent';

import '../styles/app.scss';

ReactDOM.render(
  <div className={'container'}>
    <Header />
    <IndexContent />
    <Footer />
  </div>, document.getElementById('app')
);
