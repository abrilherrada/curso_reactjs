import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faWhatsapp,
    faFacebook,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../styles/css/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footerContainer">
                <a
                    href="https://wa.me/5492804604128"
                    target="_blank"
                    rel="noreferrer"
                    className="footerIcon"
                >
                    <FontAwesomeIcon icon={faWhatsapp} />
                </a>
                <a
                    href="https://www.facebook.com"
                    target="_blank"
                    rel="noreferrer"
                    className="footerIcon"
                >
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a
                    href="https://www.instagram.com"
                    target="_blank"
                    rel="noreferrer"
                    className="footerIcon"
                >
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a
                    href="mailto:abrilherrada@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    className="footerIcon"
                >
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
