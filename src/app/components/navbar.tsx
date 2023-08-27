import Link from "next/link";
import "../../styles/navbar.css";
import Image from "next/image";
import WhiteLogo from "../../assets/logos/logo-white.png";
import { STORE_LINK } from "../constants";

const logoSize = 150;

const Navbar = () => (
  <div className="navbar-logic-container">
    <div className="navbar-container column gap-1">
      <Link href="/" className="button">
        <Image
          src={WhiteLogo}
          width={logoSize}
          height={logoSize}
          alt="white-logo"
        />
      </Link>
      <Link href="/about" className="nav-button us button">
        <span>NOSOTROS</span>
      </Link>
      <Link href="/roadmap" className="nav-button roadmap button">
        <span>PASO A PASO</span>
      </Link>
      <Link href="/contact" className="nav-button contact button">
        <span>CONTACTO</span>
      </Link>
      <a href={STORE_LINK} target="_blank">
        <div className="nav-button store button">
          <span>TIENDA</span>
        </div>
      </a>
    </div>
  </div>
);

export default Navbar;
