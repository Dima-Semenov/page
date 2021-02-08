import React from 'react';
import './header.scss'

import { LeftMenu } from '../LeftMenu/LeftMenu';
import { Nav } from '../Nav/Nav';
import { Content } from '../Content/Content';

function Header() {
  return (
    <header className="header">
      <LeftMenu />

      <div className="header__content">
        <Nav />
        <Content />
      </div>

    </header>
  );
}

export default Header;