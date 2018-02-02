import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../components/header';
import Footer from '../components/footer';

import '../styles/app.scss';

ReactDOM.render(
  <div className={'container'}>
    <Header />
    <div className={'sustainable-forestry canvas'}>
      <div className={'canvas-text'}>
        <p>Sustainable Forestry</p>
      </div>
    </div>
    <div className={'organization description'}>
      <h2>Who are we?</h2>
      <p>
        EberlyWoods is a 4th generation, truly sustainable forest located in Buchanan, Michigan. We also manage or
        access forests and forestry products in Dowagiac, MI, Elkhart, IN, Bloomington, IN and Bemidji, MN.
      </p>
      <p>
        We are Green Tag Certified and proudly recognized by the National Woodland Owners Association. Timber stand
        improvement harvests are conducted annually to remove sick, dead, crowded or invasive species, subsequently
        providing a variety of timber and other ag-forestry grown products.
      </p>
      <p>
        Our products are only from locally grown, truly sustainable forests or urban timber harvests.
      </p>
    </div>
    <div className={'business-services canvas'}>
      <div className={'canvas-text'}>
        <p>Lumber Supply</p>
      </div>
    </div>
    <div className={'services description'}>
      <h2>What do we offer?</h2>
      <p>
        Services available include quartersawing, slabbing, and flitch cutting up to 56" wide. We also have access to
        jointing, planing, cross cutting, precision ripping, milling, flooring, kiln drying, and wax coating.
      </p>
      <p>
        All of the lumber services are log-run in order to provide the finest boards from the tree with consistent
        color-matching and book-matching. Boards are numbered as they finish the milling
      </p>
    </div>
    <Footer />
  </div>, document.body
);
