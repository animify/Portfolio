import React from 'react';

interface IProps {
    platform: string;
    product: string;
}

export default function Mention({ platform, product }: IProps) {
    return (
        <div className="mention">
            <div className="flex justify-between">
                <strong>{platform}</strong>
                {product}
            </div>
        </div>
    );
}
