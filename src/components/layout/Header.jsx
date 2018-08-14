import React from 'react';
import brand_logo_letter from '../../images/branding/eberlywoods_brand_logo_letter.svg'
import brand_logo_full from '../../images/branding/eberlywoods_brand_logo.svg'

const Header = () => {
  return (
    <header className={'header'}>
      <div className={'nav-title row'}>
        <img src={brand_logo_full} className={'brand_logo_full'} alt={'EberlyWoods Full Logo'} />
        <img src={brand_logo_letter} className={'brand_logo_letter'} alt={'EberlyWoods E Logo'}/>
      </div>
      <div className={'nav-menu row'}>
        <ul>
          <li>
            <a>Gallery</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;