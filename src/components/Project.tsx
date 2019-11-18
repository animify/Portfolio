import React from 'react';
import classNames from 'classnames';
import { Icon } from 'figicons';

interface IProps {
    mode: 'light' | 'dark';
    project: 'blossom' | 'figicons' | 'colorbook' | 'overflow' | 'minicons' | 'carpo';
    title: string;
    description: string;
    image?: string;
    url?: string;
    isPrivate?: boolean;
}

export default function Project({
    mode,
    title,
    description,
    project,
    image,
    url,
    isPrivate,
}: IProps) {
    const classes = classNames('project r1', mode, { [`${project}100@bg`]: project });

    return (
        <div className={classes}>
            <div className="info">
                <h5>{title}</h5>
                <p className="mt6">{description}</p>
                {isPrivate && (
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center button ${mode} mt8 disabled`}
                    >
                        <span className="ml3">Private project</span>
                    </a>
                )}
                {url && !isPrivate && (
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center button ${mode} mt8`}
                    >
                        <Icon name="launch" /> <span className="ml3">View project</span>
                    </a>
                )}
            </div>

            {image && <div className="image" style={{ backgroundImage: `url(${image})` }} />}
        </div>
    );
}
