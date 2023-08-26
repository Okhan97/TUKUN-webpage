import "../styles/roadmap.css";

const RoadmapFolder = ({ number, title, description }) => {
  return (
    <div className="roadmap-folder-container">
      <div className="folder-step">PASO {number}</div>
      <div className="folder-body">
        <span>{title}</span>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default RoadmapFolder;
