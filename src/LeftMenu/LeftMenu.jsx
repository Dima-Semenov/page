import React from 'react';
import './leftMenu.scss'

import icon from '../api/icon.json';

export const LeftMenu = () => {
  return (
    <div className="app__left-container">
      <div className="app__icons">

        {icon.map(icon => (
            <div
              key={icon.id}
              className={`app__icon ${icon.active && 'app__icon-active'}`}
            >
              <div
                className={`app__photo app__photo-${icon.id}`}
              />
            </div>
        ))}

      </div>
    </div>
  );
}
