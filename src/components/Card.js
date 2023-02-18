import React from "react";
import "./sass/Card.scss";

const Card = ({ site }) => {
  return (
    <div className="card">
      <div className="tools">
        <div className="circle">
          <span className="red box"></span>
        </div>
        <div className="circle">
          <span className="yellow box"></span>
        </div>
        <div className="circle">
          <span className="green box"></span>
        </div>
      </div>
      <a href={site.url}>
        <div className="cardContent">{site.website}</div>
      </a>
    </div>
  );
};

export default Card;
