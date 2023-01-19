import React from "react";
import img from "../../assets/Alexander Hakobyan.jpg";
import "./About.scss";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-title">
        <h1>A little about me.</h1>
        <div className="about-image">
          <img src={img} alt="Alexander H." width="100%" />
        </div>
      </div>
      <div className="about-text">
        <span>
          let me introduce myself and share the experiences and skills that I
          have gained, that I can use to contribute to your organization.
          Knowing Computer literacy and frontend development language
          (HTML,CSS,JavaScript,React JS), customer service, and solving problems
          allowed me to gain the skills to thrive under pressure and accomplish
          the targets on time, in the meanwhile Traveling eastern Europe opened
          my mind to learn new cultures and have an interest in foreign
          businesses, and the English language has always been my strength to
          bring me closer to my goals.
          <br />
          <br />
          After graduation in Software Technicians University, I've started in
          Customer service, by building a strong network and providing quality
          service as required. by that, I have learned the significance of work
          ethic and the value of my tasks.
          <br />
          <br />
          Flexibility and mobility are the strongest keys that had me improve
          through my experiences in work and real life. I'm sure that I can
          contribute and share my talents and grow within your organization and
          have accomplishments together as a team to develop and improve for the
          mutual requirement.
        </span>
      </div>
    </section>
  );
};

export default About;