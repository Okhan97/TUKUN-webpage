import Link from "next/link";
import "../styles/navbar.css";
import Image from "next/image";
import WhiteLogo from "../assets/logo-tukun-white.png";

const logoSize = 150;

export default function Navbar() {
  return (
    <div className="navbar-container column gap-1">
      <Image
        src={WhiteLogo}
        width={logoSize}
        height={logoSize}
        alt="white-logo"
      />
      <Link href="/about" className="nav-button us">
        <span>NOSOTROS</span>
      </Link>
      <Link href="/roadmap" className="nav-button roadmap">
        <span>PASO A PASO</span>
      </Link>
      <Link href="/contact" className="nav-button contact">
        <span>CONTACTO</span>
      </Link>
      <Link href="/contact" className="nav-button store">
        <span>TIENDA</span>
      </Link>
    </div>
  );
}
