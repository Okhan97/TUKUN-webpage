import "../../styles/home.css";
import { forwardRef } from "react";

const WhiteLogo = "/assets/logos/tukun-white-bg-black.jpg";
const Lettuce = "/assets/backgrounds/home-background.jpg";

const Home = ({}, ref) => {
  return (
    <div className="home-container page-container column" ref={ref}>
      <div className="home-mainframe column">
        <div className="home-logo-container">
          <img src={WhiteLogo} alt="white-logo" className="fill-img" />
        </div>
        <div className="home-title-container column gap-1">
          <h1 className="home-title">
            IMAGINAMOS UN OASIS VERDE EN CADA CASA, NO IMPORTA EL TAMAÑO ...
          </h1>
          <p className="home-subtitle">
            Donde puedas cultivar tu propio huerto urbano y se transforme en una
            huerta urbana única. Simplemente debes regarlas y darle amor,
            nosotros hacemos el resto. ¡Únete y selecciona el kit que más te
            llame!
          </p>
        </div>
        <div className="home-background-container">
          <img className="fill-img" src={Lettuce} alt="lettuce" />
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Home);
