
import React from "react";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  const { imgUrl, title, description, articleid } = props;
  return (
    <NavLink
      state={{
        title: title,
        img: imgUrl,
        description: description,
        id: articleid,
      }}
      to={`${articleid}`}
    >
      <div >
        <div className="Cardcomponent">
          <div className="cardImage">
            <img src={imgUrl}  aria-hidden alt="Not Found" />
          </div>
          <div className="Bigcard">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
        <hr style={{ fontWeigth: "30px", color: "black" }} />
      </div>
    </NavLink>
  );
};

export default Card;