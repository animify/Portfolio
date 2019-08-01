import React from 'react';
import { Icon } from 'figicons';

export default function SocialIcons() {
    return (
        <div className="social">
            <a href="https://dribbble.com/animify">
                <Icon name="dribbble" fill="currentColor" strokeWidth={0} />
            </a>
            <a href="https://twitter.com/_animify">
                <Icon name="twitter" fill="currentColor" strokeWidth={0} />
            </a>
            <a href="https://github.com/animify">
                <Icon name="github" fill="currentColor" strokeWidth={0} />
            </a>
            <a href="https://www.linkedin.com/in/smansson">
                <Icon name="linkedin" fill="currentColor" strokeWidth={0} />
            </a>
        </div>
    );
}
