import React from 'react';
import Mention from './Mention';

export default function Mentions() {
    return (
        <div className="mt8">
            <Mention
                platform="Product Hunt"
                year="2018"
                product="Overflow"
                url="https://www.producthunt.com/posts/overflow"
            />
            <Mention
                platform="Product Hunt"
                year="2017"
                product="The Colorbook"
                url="https://www.producthunt.com/posts/the-colorbook"
            />
            <Mention
                platform="InVision Blog"
                year="2017"
                product="The Colorbook"
                url="https://www.invisionapp.com/inside-design/color-palettes/"
            />
        </div>
    );
}
