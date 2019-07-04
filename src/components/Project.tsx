import React from 'react';
import classNames from 'classnames';
import Figicons, { Icon } from 'figicons';

interface IProps {
    mode: 'light' | 'dark';
    project: 'blossom' | 'figicons' | 'colorbook' | 'framecss' | 'overflow' | 'minicons';
    title: string;
    description: string;
    image?: string;
}

Figicons.setAttributes(Figicons.attributes.default);

export default function Project({ mode, title, description, project }: IProps) {
    const classes = classNames('project r2', mode, { [`${project}100@bg`]: project });

    return (
        <div className={classes}>
            <div className="flex justify-between">
                <div className="info">
                    <h5>{title}</h5>
                    <p className="mt6">{description}</p>
                    <hr />
                    <a href="" className="flex items-center links">
                        <Icon name="launch" /> <p className="ml2 fw-book">Visit website</p>
                    </a>
                </div>
            </div>
        </div>
    );
}
