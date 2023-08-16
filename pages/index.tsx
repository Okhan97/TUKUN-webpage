import "../styles/index.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="home-container column">
      <div className="mainframe column">
        <div className="buttons-container column gap-3">
          <div className="logo"></div>
          <Link href="/about">
            <div className="row gap-2 button">
              <div className="dot about" />
              <span>NOSOTROS</span>
            </div>
          </Link>
          <Link href="/roadmap">
            <div className="row gap-2 button">
              <div className="dot roadmap" />
              <span>ROADMAP</span>
            </div>
          </Link>
          <Link href="/contact">
            <div className="row gap-2 button">
              <div className="dot contact" />
              <span>CONTACTO</span>
            </div>
          </Link>
          <Link href="/contact">
            <div className="button home-button">
              <span>GASTAR PLATA</span>
            </div>
          </Link>
        </div>
        <div className="title-container">
          <h1 className="title">TITULO DINAMICO</h1>
          <p className="subtitle">
            Lorem ipsum dolor Lorem ipsum dolor sit amet, consectetuer
            adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
          </p>
        </div>
      </div>
      <div className="footer">
        <div className="text-scroller">
          Educación Ambiental - Saneamiento Ambiental - Regeneración de suelos -
          Valorización de Residuos Orgánicos - Economía Circular -
        </div>
      </div>
    </div>
  );
}
