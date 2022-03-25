import React from "react";
import "./Folios.scss";
import { data } from "../../assets/Data/Data";

const Folios = () => {
  return (
    <section className="folio-section">
      <div className="folio-section-background">
        <h2>Latest Work</h2>
          <div className="folio-wrapper">
            {data.map((item) => {
              return (
                <div key={item.id} className="image-container" style={{position:"relative"}} >
                  <a href={item.link} target="_blank">
                    <img src={item.img} alt={item.title} />
                    <p>{item.title}</p>
                  </a>
                </div>
              );
            })}
          </div>
      </div>
    </section>
  );
};

export default Folios;
