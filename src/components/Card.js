import "./Card.css";
import React, { useState } from "react";
function Card({ id, name, info, image, price, removeTour }) {
  const [readMore, setRead] = useState(false);
  function readMoreFun() {
    setRead(!readMore);
  }

  const description = readMore ? info : `${info.substring(0, 200)}...`;
  return (
    
      <div className="card">
        <div>
          <img className="images" src={image}></img>
        </div>

        <div className="price">₹ {price}</div>
        <div className="title">{name}</div>
        <div className="description">
          {description}
          <span onClick={readMoreFun} className="read">
            {readMore ? ` Read Less` : ` Read More`}
          </span>
        </div>

        <div>
          <button className="btn" onClick={() => removeTour(id)}>
            Not Interested
          </button>
        </div>
      </div>
    
  );
}
export default Card;
