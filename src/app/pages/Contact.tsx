import Image from "next/image";
import "../../styles/contact.css";
import YellowLogo from "../../assets/logos/tukun-yellow-bg-black.jpg";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import {
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  STORE_LINK,
  WHATSAPP_LINK,
} from "../constants";
import Flower1 from "../../assets/backgrounds/contact-flower-1.jpg";
import Flower2 from "../../assets/backgrounds/contact-flower-2.jpg";
import { forwardRef } from "react";

const Contact = ({}, ref) => {
  return (
    <div className="contact-container page-container column" ref={ref}>
      <div className="contact-top-container row">
        <div className="contact-background-flower-container">
          <Image src={Flower1} alt="flower1" />
        </div>
        <div className="column gap-3">
          <div className="contact-text">
            ¿Ya te convenciste? <br />
            ¡Sé un horticultor urbano hoy!
          </div>
          <a href={STORE_LINK} target="_blank">
            <div className="contact-store-button button">
              COMPRAR <br />
              MI KIT
            </div>
          </a>
        </div>
        <div className="contact-background-flower-container end">
          <Image src={Flower2} alt="flower2" />
        </div>
      </div>
      <div className="contact-footer-container">
        <div className="row gap-3 space-evenly align-justify-center">
          <div
            className="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            <Image src={YellowLogo} width={100} alt="yellow-logo" />
          </div>
          <div className="contact-footer-text">
            Escríbenos <br />
            contacto@tukun.cl
          </div>
          <a href={INSTAGRAM_LINK} target="_blank">
            <div className="contact-social-circle button">
              <FaInstagram size={30} />
            </div>
          </a>
          <a href={WHATSAPP_LINK} target="_blank">
            <div className="contact-social-circle button">
              <FaWhatsapp size={30} />
            </div>
          </a>
          <a href={FACEBOOK_LINK} target="_blank">
            <div className="contact-social-circle button">
              <FaFacebook size={30} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Contact);
