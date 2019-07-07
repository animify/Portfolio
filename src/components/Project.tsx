import React from 'react';
import classNames from 'classnames';
import Figicons, { Icon } from 'figicons';

interface IProps {
    mode: 'light' | 'dark';
    project: 'blossom' | 'figicons' | 'colorbook' | 'overflow' | 'minicons' | 'carpo';
    title: string;
    description: string;
    image?: string;
}

export default function Project({ mode, title, description, project, image }: IProps) {
    const classes = classNames('project r3', mode, { [`${project}100@bg`]: project });

    console.log(Figicons.icons);

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

                {image && <div className="image" style={{ backgroundImage: `url(${image})` }} />}
            </div>
        </div>
    );
}
