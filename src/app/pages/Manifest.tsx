import "../../styles/manifest.css";
import ManifestBackground from "../../assets/backgrounds/manifest-background.jpg";
import Image from "next/image";
import Principle from "../components/principle";
import { forwardRef } from "react";
import { MANIFEST_PRINCIPLES } from "../constants";

const Manifest = ({}, ref) => {
  return (
    <div className="manifest-container page-container row" ref={ref}>
      <div className="manifest-background-container">
        <Image src={ManifestBackground} alt="eco-building" fill />
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
