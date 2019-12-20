import React, { useState } from "react";
import "./tour.scss";

export default props => {
  const [infoOpen, setInfoOpen] = useState(false);

  console.log(props);
  const { city, img, name, info } = props.tour;
  const { removeTour } = props;

  return (
    <article className="tour">
      <div className="img-container">
        <img src={img} alt="the tour" />
        <span className="close-btn" onClick={removeTour}>
          <i className="fas fa-window-close"></i>
        </span>
      </div>
      <div className="tour-info">
        <h3>{city}</h3>
        <h4>{name}</h4>
        <h5>
          info{" "}
          <span onClick={() => setInfoOpen(prevState => !prevState)}>
            <i className="fas fa-caret-square-down" />
          </span>
        </h5>
        {infoOpen && <p>{info}</p>}
      </div>
    </article>
  );
};
