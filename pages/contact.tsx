import Image from "next/image";
import "../src/styles/contact.css";
import BackgroundImage from "../src/assets/contact-background.png";
import YellowLogo from "../src/assets/logo-tukun-yellow.png";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="top-container">
        <div className="background-container">
          <Image src={BackgroundImage} alt="building" width={1000} />
        </div>
      </div>
      <div className="footer-container">
        <div className="row gap-3">
          <Image src={YellowLogo} width={100} alt="yellow-logo" />
          <div className="footer-text">
            Escríbenos <br />
            contacto@tukun.com
          </div>
          <div className="social-circle button">
            <FaInstagram size={30} />
          </div>
          <div className="social-circle button">
            <FaWhatsapp size={30} />
          </div>
          <div className="social-circle button">
            <FaFacebook size={30} />
          </div>
        </div>
      </div>
    </div>
  );
}
