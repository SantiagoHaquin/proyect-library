import { FaInstagram, FaTwitter, FaFacebook } from "react-icons/fa";

export const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <h2 className="contact-title">Seguinos</h2>
        <div className="social-links">
          <a href="https://www.instagram.com/santihaquin">
            <FaInstagram />
            Instagram
          </a>
          <a href="https://twitter.com/tu_usuario_twitter">
            <FaTwitter />
            Twitter
          </a>
          <a href="https://www.facebook.com/tu_usuario_facebook">
            <FaFacebook /> Facebook
          </a>
        </div>
      </div>
    </div>
  );
};
