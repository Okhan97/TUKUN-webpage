import Navbar from "../src/app/navbar";
import "../src/styles/index.css";
import Lettuce from "../src/assets/home-lettuce.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="home-container column">
      <Navbar />
      <div className="mainframe column">
        <div className="image-container">
          <Image src={Lettuce} width={900} alt="lettuce" />
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
}
