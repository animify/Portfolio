import React from 'react';
import { Icon } from 'figicons';

interface IProps {
    platform: string;
    product: string;
    url: string;
    year: string;
}

export default function Mention({ platform, product, url, year }: IProps) {
    return (
        <a className="mention" href={url} target="_blank" rel="noopener noreferrer">
            <span className="flex items-center">
                <span className="label">{year}</span>
                <strong>{platform}</strong>
            </span>
            <span className="flex items-center">
                {product}
                <Icon className="ml3" name="arrow-right" />
            </span>
        </a>
    );
}
