import React from "react";

function Card(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsec} alt="no img found" />
          <div>
            <span>{props.title}</span>
            <h4>{props.name}</h4>
            <a href={props.links} target="_blank">
              <button>click here</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Card;
