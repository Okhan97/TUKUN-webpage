import "../../styles/home.css";
import Lettuce from "../../assets/backgrounds/home-background.jpg";
import Image from "next/image";
import WhiteLogo from "../../assets/logos/tukun-white-bg-black.jpg";
import { forwardRef } from "react";

const Home = ({}, ref) => {
  return (
    <div className="home-container page-container column" ref={ref}>
      <div className="home-mainframe column">
        <div className="home-logo-container">
          <Image src={WhiteLogo} alt="lettuce" fill />
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
          <Image src={Lettuce} alt="lettuce" fill />
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Home);
