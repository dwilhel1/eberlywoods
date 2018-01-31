import React from 'react';

const Header = () => {
  return (
    <header className={'header'}>
      <div className={'brand-title'}>
        <a>Eberlywoods</a>
      </div>
      <div className={'nav-menu'}>
        <ul>
          <li>
            <a>Gallery</a>
          </li>
          <li>
            <a>Resources</a>
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