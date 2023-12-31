import RoadmapFolder from "../components/roadmapFolder";
import "../../styles/roadmap.css";
import { forwardRef } from "react";
import { ROADMAP_TEXT } from "../constants";

const BackgroundImage = "/assets/backgrounds/roadmap-background.jpg";

const Roadmap = ({}, ref) => {
  return (
    <div className="page-container roadmap-page-container" ref={ref}>
      <div className="roadmap-background-container">
        <img src={BackgroundImage} className="fill-img" alt="tomatoes" />
      </div>
      <div className="roadmap-container column">
        <div className="roadmap-title">
          ¿ESTÁS BUSCANDO TENER TU PROPIO <br /> HUERTO URBANO SIN IMPORTAR TU
          HABILIDAD?
        </div>
        <div className="roadmap-folders-row row">
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
