import "../styles/roadmap.css";

const text =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet";

const Folder = ({
  number,
  text,
  alternative = false,
  bottomCircle = false,
}) => {
  const containerClassName = `folder-container column ${
    alternative && "alternative"
  } ${bottomCircle && "bottom-circle"}
  `;
  return (
    <div className={containerClassName}>
      <div className="folder-title">PASO {number}</div>
      <div className="folder-body">{text}</div>
      <div className="folder-black-line" />
      <div className="circle " />
    </div>
  );
};
export default function Roadmap() {
  return (
    <div className="roadmap-container column">
      <div className="title">
        <h1>ROADMAP</h1>
      </div>
      <div className="folders-row row gap-10">
        <Folder number={1} text={text} alternative />
        <Folder number={2} text={text} bottomCircle />
        <Folder number={3} text={text} />
        <Folder number={4} text={text} bottomCircle />
      </div>
    </div>
  );
}
