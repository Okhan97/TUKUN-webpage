import "../../styles/roadmap.css";

type RoadmapFolderProps = {
  number: number;
  title: string;
  description: string;
};

const RoadmapFolder = ({ number, title, description }: RoadmapFolderProps) => {
  return (
    <div className="roadmap-folder-container">
      <div className="roadmap-folder-step">PASO {number}</div>
      <div className="roadmap-folder-body">
        <span className="roadmap-folder-span">{title}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default RoadmapFolder;
