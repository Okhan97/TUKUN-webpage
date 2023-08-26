import "../styles/index.css";
import LettuceImage from "../assets/lechuga-roble-roja.png";
import Image from "next/image";

const imageSize = 700;

export default function IndexImage() {
  return (
    <div className="image-container">
      <Image
        src={LettuceImage}
        width={imageSize}
        height={imageSize}
        alt="lechuga"
      />
    </div>
  );
}
