import React from "react";

const Project = ({ header, desc, url, urlText, image }) => (
  <div className="project">
    <div
      className="img"
      style={{ backgroundImage: `url(${require(`../assets/${image}.png`)})` }}
    />
    <div className="desc">
      <h3>{header}</h3>
      <p>{desc}</p>
      <a href={url}>{urlText}</a>
    </div>
  </div>
);

export default Project;
