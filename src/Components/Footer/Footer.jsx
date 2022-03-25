import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <h3>Credits</h3>
      <span>Alexander Hakobyan</span>
      <div className="socials">
        <a href="#">
          <i className="fa-brands fa-facebook" />
        </a>
        <a href="#">
          <i className="fa-brands fa-linkedin" />
        </a>
        <a href="#">
          <i className="fa-brands fa-instagram" />
        </a>
        <a href="#">
          <i className="fa-brands fa-twitter" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
