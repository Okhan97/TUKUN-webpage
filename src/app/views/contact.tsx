import Image from "next/image";
import "../../styles/contact.css";
import YellowLogo from "../../assets/logos/tukun-yellow.png";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import {
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  STORE_LINK,
  WHATSAPP_LINK,
} from "../constants";
import Link from "next/link";
import Flower1 from "../../assets/backgrounds/contact-flower-1.png";
import Flower2 from "../../assets/backgrounds/contact-flower-2.png";

const Contact = () => {
  return (
    <div className="contact-container column">
      <div className="top-container row">
        <div className="background-flower-container">
          <Image src={Flower1} alt="flower1" layout="responsive" />
        </div>
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
        <div className="background-flower-container">
          <Image src={Flower2} alt="flower2" layout="responsive" />
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
