import React from 'react';
import Figicons, { Icon } from 'figicons';

console.log(Figicons.icons);
interface IProps {
    platform: string;
    product: string;
    url: string;
    year: string;
}

export default function Mention({ platform, product, url, year }: IProps) {
    return (
        <a className="mention" href={url} target="_blank">
            <div className="flex justify-between items-center w100">
                <div className="flex items-center">
                    <div className="label">{year}</div>
                    <strong>{platform}</strong>
                </div>
                <div className="flex items-center">
                    {product}
                    <Icon className="ml3" name="arrow-right" />
                </div>
            </div>
        </a>
    );
}
