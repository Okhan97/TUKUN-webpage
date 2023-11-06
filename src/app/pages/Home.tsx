import "../../styles/home.css";
import Lettuce from "../../assets/backgrounds/home-background.jpg";
import Image from "next/image";
import WhiteLogo from "../../assets/logos/tukun-white-bg-black.jpg";

const Home = () => {
  return (
    <div className="home-container page-container column">
      <div className="mainframe column">
        <div className="home-background-container">
          <Image src={Lettuce} alt="lettuce" layout="responsive" />
        </div>
        <div className="home-logo-container">
          <Image src={WhiteLogo} alt="lettuce" layout="responsive" />
        </div>
        <div className="title-container column gap-1">
          <h1 className="title">
            IMAGINAMOS UN OASIS VERDE EN CADA CASA, NO IMPORTA EL TAMAÑO ...
          </h1>
          <p className="subtitle">
            Donde puedas cultivar tu propio huerto urbano y se transforme en una
            huerta urbana única. Simplemente debes regarlas y darle amor,
            nosotros hacemos el resto. ¡Únete y selecciona el kit que más te
            llame!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;