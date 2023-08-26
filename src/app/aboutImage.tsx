import "../styles/about.css";
import PlantsImage from "../assets/about-image.jpg";
import Image from "next/image";

export default function AboutImage() {
  return (
    <div className="about-image-container">
      <Image
        src={PlantsImage}
        alt="lechuga"
        layout="responsive"
        objectFit="contain"
      />
    </div>
  );
}
