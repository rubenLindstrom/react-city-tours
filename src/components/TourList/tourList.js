import React, { useState } from "react";
import "./tourList.scss";
import Tour from "../Tour/tour";
import { tourData } from "../../tourData";
import tour from "../Tour/tour";

export default () => {
  const mappedTourData = {};
  tourData.map(el => (mappedTourData[el.id] = el));
  const [tours, setTours] = useState(mappedTourData);

  const removeTour = id => {
    const tempState = { ...tours };
    delete tempState[id];
    setTours(tempState);
  };

  return (
    <section className="tourList">
      {Object.keys(tours).map(key => (
        <Tour key={key} tour={tours[key]} removeTour={() => removeTour(key)} />
      ))}
    </section>
  );
};
