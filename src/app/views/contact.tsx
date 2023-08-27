import Image from "next/image";
import "../../styles/contact.css";
import YellowLogo from "../../assets/logo-tukun-yellow.png";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import {
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  STORE_LINK,
  WHATSAPP_LINK,
} from "../constants";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="contact-container column">
      <div className="top-container">
        <div className="column gap-3">
          <div className="text">
            ¿Ya te convenciste? <br />
            ¡Sé un horticultor urbano hoy!
          </div>
          <a href={STORE_LINK} target="_blank">
            <div className="store-button button">
              COMPRAR <br />
              MI KIT
            </div>
          </a>
        </div>
      </div>
      <div className="footer-container">
        <div className="row gap-3">
          <Link href="/" className="button">
            <Image src={YellowLogo} width={100} alt="yellow-logo" />
          </Link>
          <div className="footer-text">
            Escríbenos <br />
            contacto@tukun.cl
          </div>
          <a href={INSTAGRAM_LINK} target="_blank">
            <div className="social-circle button">
              <FaInstagram size={30} />
            </div>
          </a>
          <a href={WHATSAPP_LINK} target="_blank">
            <div className="social-circle button">
              <FaWhatsapp size={30} />
            </div>
          </a>
          <a href={FACEBOOK_LINK} target="_blank">
            <div className="social-circle button">
              <FaFacebook size={30} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
