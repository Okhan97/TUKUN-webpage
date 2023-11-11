import "../../styles/navbar.css";
import { STORE_LINK } from "../constants";
import { MutableRefObject, forwardRef } from "react";

const logoSize = 150;

type RefsType = {
  home: MutableRefObject<HTMLDivElement | null>;
  about: MutableRefObject<HTMLDivElement | null>;
  manifest: MutableRefObject<HTMLDivElement | null>;
  roadmap: MutableRefObject<HTMLDivElement | null>;
  contact: MutableRefObject<HTMLDivElement | null>;
};

type NavBarProps = {
  handleClick: (ref: MutableRefObject<HTMLDivElement | null>) => void;
  refs: RefsType;
};

const WhiteLogoPath = "/assets/logos/logo-white-bg-purple.jpg";

const Navbar = ({ handleClick, refs }: NavBarProps) => (
  <div className="navbar-logic-container">
    <div className="navbar-container column gap-1">
      <div className="button" onClick={() => handleClick(refs.home)}>
        <img
          src={WhiteLogoPath}
          width={logoSize}
          height={logoSize}
          alt="white-logo"
        />
      </div>
      <div
        className="nav-button us button"
        onClick={() => handleClick(refs.about)}
      >
        <span>NOSOTROS</span>
      </div>
      <div
        className="nav-button roadmap button"
        onClick={() => handleClick(refs.roadmap)}
      >
        <span>PASO A PASO</span>
      </div>
      <div
        className="nav-button contact button"
        onClick={() => handleClick(refs.contact)}
      >
        <span>CONTACTO</span>
      </div>
      <a href={STORE_LINK} target="_blank">
        <div className="nav-button store button">
          <span>TIENDA</span>
        </div>
      </a>
    </div>
  </div>
);

export default forwardRef(Navbar);
