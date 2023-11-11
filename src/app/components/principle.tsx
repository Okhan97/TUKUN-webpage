import "../../styles/manifest.css";

type PrincipleProps = {
  icon: any;
  title: string;
  description: string;
};

const Principle = ({ icon, title, description }: PrincipleProps) => {
  return (
    <div className="principle-container column">
      <div className="principle-top-container column gap-3">
        <div className="principle-icon-container">
          <img src={icon} alt={title} className="fill-img" />
        </div>
        <div className="principle-title">{title}</div>
      </div>
      <div className="principle-description">{description}</div>
    </div>
  );
};

export default Principle;
