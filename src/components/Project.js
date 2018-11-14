import React from "react";

const Project = ({ header, desc, url, urlText, image }) => (
  <a href={url} target="_blank" rel="noopener noreferrer" className="project">
    <div
      className="img"
      style={{ backgroundImage: `url(${require(`../assets/${image}.png`)})` }}
    />
    <div className="desc">
      <h3>{header}</h3>
      <p>{desc}</p>
      <p className="url">{urlText}</p>
    </div>
  </a>
);

export default Project;
