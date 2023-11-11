import "../../styles/manifest.css";
import Principle from "../components/principle";
import { forwardRef } from "react";
import { MANIFEST_PRINCIPLES } from "../constants";

const ManifestBackground = "/assets/backgrounds/manifest-background.jpg";

const Manifest = ({}, ref) => {
  return (
    <div className="manifest-container page-container row" ref={ref}>
      <div className="manifest-background-container">
        <img src={ManifestBackground} alt="eco-building" className="fill-img" />
      </div>
      <div className="manifest-info-column-container column">
        <div className="manifest-title-container row gap-3">
          <div className="manifest-green-dot" />
          <div className="manifest-title">
            LOS BENEFICIOS DE SER UNA HORTICULTORA URBANA
          </div>
        </div>
        <div className="principle-grid">
          {MANIFEST_PRINCIPLES.map(({ icon, title, description }) => (
            <Principle
              icon={icon}
              title={title}
              description={description}
              key={`principle-${title}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Manifest);
