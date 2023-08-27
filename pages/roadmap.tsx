import RoadmapFolder from "../src/app/roadmapFolder";
import "../src/styles/roadmap.css";
import BackgroundImage from "../src/assets/roadmap-background.png";
import Image from "next/image";

const ROADMAP_TEXT = [
  {
    title: "ENAMÓRATE DE NUESTROS KITS",
    description:
      "Si ya quieres ser una horticultora urbana tienes muchas opciones para elegir en nuestra tienda. ¡Go!",
  },
  {
    title: "PÍDELO A TU MEDIDA",
    description:
      "Una vez que ya decidiste la especie que quieres, ahora es el turno que elijas la semilla o variante que tú quieras; aunque ya tengas uno andando.",
  },
  {
    title: "LAS OPCIONES NO ACABAN ACÁ",
    description:
      "Ahora solo queda que nos digas cuándo y si lo quieres recibir andando o armarlo tú. Pero entre nos, no somos IKEA.",
  },
  {
    title: "¿QUIERES APOYO PARA QUE NADA SE TE ESCAPE?",
    description:
      "Si nuestro whatsapp no es suficiente para tus dudas, o el tutorial de youtube no es suficiente, tenemos planes de acompañamiento para ti.",
  },
  {
    title: "COSECHAR Y EMPEZAR DE NUEVO",
    description:
      "Las vueltas son las que dejan, y por eso tenemos nuestros packs de recarga TUKUN. Y de paso, tiéntate con un nuevo kit, ¡así tu huerto urbano crece más!",
  },
];

function Roadmap() {
  return (
    <>
      <div className="background-container">
        <Image src={BackgroundImage} layout="fill" alt="tomatoes" />
      </div>
      <div className="roadmap-container column">
        <div className="title">
          ¿ESTÁS BUSCANDO TENER TU PROPIO <br /> HUERTO URBANO SIN IMPORTAR TU
          HABILIDAD?
        </div>
        <div className="folders-row row gap-10">
          {ROADMAP_TEXT.map(({ title, description }, idx) => (
            <RoadmapFolder
              number={idx + 1}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Roadmap;
