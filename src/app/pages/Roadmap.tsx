import RoadmapFolder from "../components/roadmapFolder";
import "../../styles/roadmap.css";
import BackgroundImage from "../../assets/backgrounds/roadmap-background.jpg";
import Image from "next/image";
import { forwardRef } from "react";
import { ROADMAP_TEXT } from "../constants";

const Roadmap = ({}, ref) => {
  return (
    <div className="page-container" ref={ref}>
      <div className="roadmap-background-container">
        <Image src={BackgroundImage} fill alt="tomatoes" />
      </div>
      <div className="roadmap-container column">
        <div className="title">
          ¿ESTÁS BUSCANDO TENER TU PROPIO <br /> HUERTO URBANO SIN IMPORTAR TU
          HABILIDAD?
        </div>
        <div className="folders-row row">
          {ROADMAP_TEXT.map(({ title, description }, idx) => (
            <RoadmapFolder
              key={`roadmapfolder-${title}`}
              number={idx + 1}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Roadmap);
