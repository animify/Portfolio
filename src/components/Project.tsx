import React from 'react';
import classNames from 'classnames';
import Figicons, { Icon } from 'figicons';

interface IProps {
    mode: 'light' | 'dark';
    project: 'blossom' | 'figicons' | 'colorbook' | 'overflow' | 'minicons' | 'carpo';
    title: string;
    description: string;
    image?: string;
    url?: string;
}

export default function Project({ mode, title, description, project, image, url }: IProps) {
    const classes = classNames('project r3', mode, { [`${project}100@bg`]: project });

    return (
        <div className={classes}>
            <div className="flex justify-between">
                <div className="info">
                    <h5>{title}</h5>
                    <p className="mt6">{description}</p>
                    {url && (
                        <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`flex items-center itemlink ${mode} mt8`}
                        >
                            <Icon name="launch" /> <p className="ml3 fw-book">Go to website</p>
                        </a>
                    )}
                </div>

                {image && <div className="image" style={{ backgroundImage: `url(${image})` }} />}
            </div>
        </div>
    );
}
