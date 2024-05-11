import React from 'react';
import { NavigationDots } from '../NavigationDots';

const AppWrap = (Component, idName, classNames) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${classNames} flex flex-col items-center`}>
        <div className="app__wrapper flex">
          <Component />

          <div className="copyright">
            <p className="p-text">@2024</p>
            <p className="p-text">Todos los derechos reservados</p>
          </div>
        </div>
        <NavigationDots active={idName} />
      </div>
    );
  };

export default AppWrap;
