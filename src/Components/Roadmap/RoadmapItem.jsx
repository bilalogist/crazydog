import React from "react";

const RoadmapItem = (props) => {
  return (
    <div>
      <h2 className="description">{props.title}</h2>
      <p className="short">{props.detail}</p>
    </div>
  );
};

export default RoadmapItem;
