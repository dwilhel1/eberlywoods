import React from 'react';

const Header = () => {
  return (
    <header className={'header'}>
      <div className={'nav-title row'}>
        <a>EberlyWoods</a>
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