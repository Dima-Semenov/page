import React from 'react';
import '../Content/content.scss';
import button from '../Image/button.png';
import data from '../api/data.json';

export const Content = () => {
  return (
    <div className="content">

      {data.map(item => (
        <div key={item.id} className="content__wraper">
          <div className={`content__photo content__photo-${item.id}`}>
            <div className="content__photo-title">
              <div className="content__photo-title-top">
                <h3>{item.title}</h3>
                <p className="content__photo-text">{item.lesson}</p>
              </div>
              <div className="content__photo-title-bottom">
                <img className="content__photo-icon" alt="button" src={button}/>
              </div>
            </div>
            <div>
              <p>{item.time}</p>
            </div>
          </div>
        </div>
      ))}

    </div>
  );
}