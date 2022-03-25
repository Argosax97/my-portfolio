import React from "react";
import "./Contacts.scss";

const Contacts = () => {
  return (
    <section className="contact-section">
      <div className="contact-title">
        <h1>Reach out! Let's start something together.</h1>
      </div>
      <form className="contact-form">
        <label >NAME</label>
        <input type="text" placeholder="Enter your name" />
        <label >EMAIL ADDRESS</label>
        <input type="text" placeholder="Enter your email address" />
        <label >MESSAGE</label>
        <textarea type="text" placeholder="Exemple Text"/>
        <div className="submit-btn">
          <button type="submit">Submit</button>
        </div>
      </form>
    </section>
  );
};

export default Contacts;
