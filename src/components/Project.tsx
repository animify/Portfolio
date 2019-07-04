import React from "react";
import classNames from "classnames";

interface IProps {
  mode: "light" | "dark";
  title: string;
  description: string;
  image?: string;
}

export default function Project({ mode, title, description }: IProps) {
  const classes = classNames("project", mode);

  return (
    <div className={classes}>
      <div className="flex justify-between">
        <div className="info">
          <h5>{title}</h5>
          <p className="mt2">{description}</p>
        </div>
      </div>
    </div>
  );
}
