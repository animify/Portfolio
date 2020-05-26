import React from 'react';
import { Icon } from 'figicons';

interface IProps {
    title: string;
    description: string;
    url: string;
}

export default function OpenSourceProject({ title, description, url }: IProps) {
    return (
        <div className="osproject grid">
            <div className="col12@xs col5@sm mb4">
                <h5>{title}</h5>
            </div>
            <div className="col12@xs col7@sm">
                <p className="mb6">{description}</p>

                <a
                    href={url}
                    className="button link"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <span className="mr3">Explore on GitHub</span>
                    <Icon name="arrow-right" strokeWidth={3} />
                </a>
            </div>
        </div>
    );
}
