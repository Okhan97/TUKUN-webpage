import "../../styles/contact.css";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import {
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  STORE_LINK,
  WHATSAPP_LINK,
} from "../constants";
import { forwardRef } from "react";

const YellowLogo = "/assets/logos/tukun-yellow-bg-black.jpg";
const Flower1 = "/assets/backgrounds/contact-flower-1.jpg";
const Flower2 = "/assets/backgrounds/contact-flower-2.jpg";

const Contact = ({}, ref) => {
  return (
    <div className="contact-container page-container column" ref={ref}>
      <div className="contact-top-container row">
        <div className="contact-background-flower-container">
          <img src={Flower1} width={400} height={400} alt="flower1" />
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
          <img src={Flower2} width={400} height={400} alt="flower2" />
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
            <img src={YellowLogo} width={100} height={100} alt="yellow-logo" />
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
