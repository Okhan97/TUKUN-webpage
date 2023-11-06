import "../../styles/about.css";
import Image from "next/image";
import BackgroundImage from "../../assets/backgrounds/about-background.jpg";
import { forwardRef } from "react";

const About = ({}, ref) => {
  return (
    <div className="about-container page-container row" ref={ref}>
      <div className="column info-column-container ">
        <div className="text-container column gap-3">
          <div className="row gap-3 title-container">
            <div className="title-dot" />
            <h1 className="title">NOSOTROS SOMOS</h1>
          </div>
          <p className="paragraph">
            La única organización que puede ofrecerte un estilo de vida
            sustentable mediante la horticultura urbana; donde elegimos junto a
            diseñadores y expertos de la agricultura todo lo que necesitas para
            comenzar.
          </p>
          <p className="paragraph">
            Una comunidad de individuos apasionados por la conciencia ecológica
            y dedicados a redefinir las relaciones entre los humanos y la
            naturaleza. Por ello cada producto comprado apoyará regeneración de
            áreas verdes en el país y todas las acciones buscan ser carbono
            neutral.
          </p>
        </div>
        <div className="manifest-container">
          <span className="manifest-title">MANIFIESTO</span>
          <div className="manifest-big-yellow-line" />
          <div className="manifest-small-yellow-line" />
        </div>
      </div>
      <div className="about-image-container">
        <Image src={BackgroundImage} width={800} alt="background" />
      </div>
    </div>
  );
};

export default forwardRef(About);
