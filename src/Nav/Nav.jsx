import React from 'react';
import '../Nav/nav.scss'

export const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav__container">
        <div className="nav__header">
          <h1 className="nav__title">
            Courses
          </h1>
        </div>
        <div className="nav__menu">
          <ul className="nav__list">
            <li className="nav__item nav__item-active">
              <a
                className="nav__link nav__link-active"
                href="#"
              >
                Popular
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav__link"
                href="#"
              >
                Favorite
              </a>
            </li>
            <li className="nav__item">
              <a
                className="nav__link"
                href="#"
              >
                New
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
