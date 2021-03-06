import React from "react";
import "./styles.css";

const CardVertical = ({ img, descricao, title }) => {
  return (
    <div className=" contaiinerCard">
      <div className="col s12 m7 container__card_panel">
        <div className="card container__card_panel">
          <div className="card-image">
            <img className="imgContainer" src={img} alt="" />
          </div>

          <div className=" cardTitle card_title_texto">{title}</div>

          <div className="card-content card__content__text">
            <p>{descricao}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardVertical;
