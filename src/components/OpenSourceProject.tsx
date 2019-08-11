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
                <h6>{title}</h6>
            </div>
            <div className="col12@xs col7@sm">
                <p>{description}</p>

                <a
                    href={url}
                    className="flex items-center mt6"
                    target="_blank"
                    rel="noreferrer noopener"
                >
                    <Icon name="github" fill="currentColor" strokeWidth={0} />{' '}
                    <span className="ml3">View on GitHub</span>
                </a>
            </div>
        </div>
    );
}
