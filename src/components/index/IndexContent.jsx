import React from 'react';

import nwoa_logo from '../../images/icons/info/nwoa_logo.svg';
import michigan_icon from '../../images/icons/info/michigan_icon.svg';
import green_tag_logo from '../../images/icons/info/green_tag_certification_logo.svg';

const IndexContent = () => {
  return (
    <>
      <div className={'sustainable-forestry canvas'}>
        <div className={'canvas-text'}>
          <span>Sustainable Forestry</span>
        </div>
      </div>
      <div className={'description-grid'}>
        <div className={'organization text'}>
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
        </div>
        <div className={'services text'}>
          <h2>What do we offer?</h2>
          <p>
            Services available include quartersawing, slabbing, and flitch cutting up to 56" wide. We also have access to
            jointing, planing, cross cutting, precision ripping, milling, flooring, kiln drying, and wax coating.
          </p>
          <p>
            All of the lumber services are log-run in order to provide the finest boards from the tree with consistent
            color-matching and book-matching. Boards are numbered as they finish the milling
          </p>
          <p>
            Our products are only from locally grown, truly sustainable forests or urban timber harvests.
          </p>
        </div>
      </div>
      <div className={'business-services canvas'}>
        <div className={'canvas-text'}>
          <span>Lumber Supply</span>
        </div>
      </div>
      <div className={'image-grid'}>
        <a href={'http://woodlandowners.org/'}>
          <div className={'image-container'}>
            <img src={nwoa_logo} className={'image'}/>
            <p>Member of National Woodland Owners Association</p>
          </div>
        </a>
        <a href={'https://www.michigan.org/regions/southwest'}>
          <div className={'image-container'}>
            <img src={michigan_icon} className={'image'}/>
            <p>Founded and based in Southwest Michigan</p>
          </div>
        </a>
        <a href={'http://www.globalgreentag.com/'}>
          <div className={'image-container'}>
              <img src={green_tag_logo} className={'image'}/>
              <p>We maintain Green Tag environmental certification</p>
          </div>
        </a>
      </div>
    </>
  );
};

export default IndexContent;