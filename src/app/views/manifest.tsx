import "../../styles/manifest.css";
import ManifestBackground from "../../assets/backgrounds/manifest-background.png";
import Image from "next/image";
import ManifestIcon1 from "../..//assets/manifest-icon-1.png";
import ManifestIcon2 from "../..//assets/manifest-icon-2.png";
import ManifestIcon3 from "../..//assets/manifest-icon-3.png";
import ManifestIcon4 from "../..//assets/manifest-icon-4.png";
import Principle from "../components/principle";

const MANIFEST_PRINCIPLES = [
  {
    icon: ManifestIcon1,
    title: "ES PARA TODOS",
    description:
      "Sólo tendrás que idear el mejor momento para cosechar tus plantas. En Tukun nos preocupamos de seleccionar los mejores productos para ti en un cómodo kit que te asegurará el éxito como agricultor urbano. Nosotros te guiaremos en todo el camino.",
  },
  {
    icon: ManifestIcon2,
    title: "BIOFILIA",
    description:
      "Vas a tener tu propio huerto urbano con una gran cantidad de plantas comestibles y otras plantas que trabajaran en sinergia para ti. Logrando que obtengas todos los beneficios terapéuticos y estéticos de ser un horticultor urbano.",
  },
  {
    icon: ManifestIcon3,
    title: "TOP OF THE LINE",
    description:
      "Además de ofrecerte deliciosos productos vegetales, los kits de cultivo fácil son seleccionados para que adornen tus espacios. Trabajamos con diseñadores y agricultores para que tengas el mejor vegetal posible, la mejor estructura para que crezcan y en diseños estéticos exclusivos.",
  },
  {
    icon: ManifestIcon4,
    title: "COMPROMISO CON UN CAMBIO AMBIENTAL POSITIVO",
    description:
      "No solo tendrás alegría por ser un horticultor urbano, también apoyarás a la regeneración de áreas verdes nativas. Además, nuestras semillas vienen de agricultores nacionales de familias de tradición campesina con los que compartimos el valor por los vegetales, así como respetamos su legado. Finalmente, todos los procesos relacionados con TUKUN buscarán ser carbono neutral.",
  },
];

const Manifest = () => {
  return (
    <div className="manifest-container row">
      <div className="manifest-background-container">
        <Image
          src={ManifestBackground}
          alt="eco-building"
          layout="responsive"
        />
      </div>
      <div className="right-side-container column gap-10">
        <div className="title-container row gap-3">
          <div className="green-dot" />
          <div className="title">
            LOS BENEFICIOS DE SER <br /> UNA HORTICULTORA URBANA
          </div>
        </div>
        <div className="manifest-grid">
          {MANIFEST_PRINCIPLES.map(({ icon, title, description }) => (
            <Principle icon={icon} title={title} description={description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Manifest;
