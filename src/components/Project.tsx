import React from "react";
import classNames from "classnames";
import { Icon } from "figicons";

interface IProps {
    mode: "light" | "dark";
    project:
        | "amie"
        | "framer"
        | "campfire"
        | "blossom"
        | "figicons"
        | "colorbook"
        | "overflow"
        | "minicons"
        | "carpo";
    title: string;
    description: string;
    image?: string;
    url?: string;
    isPrivate?: boolean;
    product?: boolean;
}

export default function Project({
    mode,
    title,
    description,
    project,
    image,
    url,
    isPrivate,
    product = false,
}: IProps) {
    const classes = classNames("project r2", mode, {
        [`${project}100@bg`]: project,
    });

    return (
        <div className={classes}>
            <div className="info">
                <h4>{title}</h4>
                <p className="mt5">{description}</p>
                {isPrivate && (
                    <button className={classNames("button mt8 disabled", mode)}>
                        <span>Private {product ? "Product" : "Project"}</span>
                    </button>
                )}
                {url && !isPrivate && (
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={classNames(
                            "button mt8",
                            mode,
                            `${project}100@text`
                        )}
                    >
                        <span className="mr3">
                            Explore {product ? "Product" : "Project"}
                        </span>{" "}
                        <Icon name="arrow-right" strokeWidth={3} />
                    </a>
                )}
            </div>

            {image && (
                <div
                    className="image"
                    style={{ backgroundImage: `url(${image})` }}
                ></div>
            )}
        </div>
    );
}
