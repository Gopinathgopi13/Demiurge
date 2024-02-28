import React from "react";
import "./ServiceContainer.css";
import { Link } from "react-router-dom";
function Card({logo, name, description, path}) {
  return (
    <Link to={path}>
      <div
        className="container"
        data-aos="fade-left"
        data-aos-duration="1500"
        data-aos-once="true"
      >
        <a className="card1" href="#">
            <img src={logo} alt="" />
          <h3>{name}</h3>
          <p className="small">
           {description}
          </p>
          <div className="go-corner" href="#">
            <div className="go-arrow">→</div>
          </div>
        </a>
      </div>
    </Link>
  );
}

export default Card;
