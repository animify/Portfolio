import React from 'react';
import Mention from './Mention';

export default function Mentions() {
    return (
        <div className="mentions">
            <Mention platform="Product Hunt 2018" product="Overflow" />
            <Mention platform="Product Hunt 2017" product="The Colorbook" />
            <Mention platform="InVision Blog 2017" product="The Colorbook" />
        </div>
    );
}
