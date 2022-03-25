import React from "react";
import "./Header.scss";
import { scroller } from "react-scroll";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h1>My Portfolio</h1>
      </div>
      <nav>
        <ul>
          <li
            className="portfolio-btn"
            onClick={() => scroller.scrollTo("folio-section")}
          >
            portfolio
          </li>
          <li
            className="about-btn"
            onClick={() => scroller.scrollTo("about-section")}
          >
            About
          </li>
          <li
            className="contact-btn"
            onClick={() => scroller.scrollTo("contact-section")}
          >
            contact
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
