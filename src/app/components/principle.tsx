import "../../styles/manifest.css";
import Image from "next/image";

type PrincipleProps = {
  icon: any;
  title: string;
  description: string;
};

const Principle = ({ icon, title, description }: PrincipleProps) => {
  return (
    <div className="principle-container column">
      <div className="top-container column gap-3">
        <div className="icon-container">
          <Image src={icon} alt={title} layout="responsive" />
        </div>
        <div className="title">{title}</div>
      </div>
      <div className="description">{description}</div>
    </div>
  );
};

export default Principle;
