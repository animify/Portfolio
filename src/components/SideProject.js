import React from "react";

const SideProject = ({ header, desc, date, url, tags }) => (
  <div className="sideproject">
    <div className="desc">
      <small>{date}</small>
      <h3>{header}</h3>
      <p>{desc}</p>
    </div>
    <div className="actions">
      <a className="button" href={url}>
        See on GitHub
      </a>

      <div className="tags">
        {tags.map(tag => (
          <div key={tag} className="tag">
            {tag}
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default SideProject;
