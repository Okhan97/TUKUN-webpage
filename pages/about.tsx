import "../src/styles/about.css";

const Item = () => {
  return (
    <div className=" item column gap-5">
      <div className="item-dot" />
      <div className="item-square" />
    </div>
  );
};

export default function About() {
  return (
    <div className="about-container row">
      <div className="column left-side-container gap-5">
        <div className="row gap-3 title-container">
          <div className="title-dot" />
          <h1 className="title">NOSOTROS SOMOS</h1>
        </div>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetuer adi- piscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetuer adi- piscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat.
        </p>
        <div className="column gap-6 items-container">
          <div className="row gap-10">
            <Item />
            <Item />
          </div>
          <div className="row gap-10">
            <Item />
            <Item />
          </div>
        </div>
        <div className="manifest-container button">
          <span className="manifest-title">MANIFIESTO</span>
          <div className="manifest-big-yellow-line" />
          <div className="manifest-small-yellow-line" />
        </div>
      </div>
      <div className="image"></div>
    </div>
  );
}
