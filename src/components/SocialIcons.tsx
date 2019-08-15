import React from 'react';
import { Icon } from 'figicons';

export default function SocialIcons() {
    return (
        <div className="socialicons">
            <a href="https://dribbble.com/animify" target="_blank" rel="noreferrer noopener">
                <Icon name="dribbble" fill="currentColor" strokeWidth={0} />
            </a>
            <a href="https://twitter.com/_animify" target="_blank" rel="noreferrer noopener">
                <Icon name="twitter" fill="currentColor" strokeWidth={0} />
            </a>
            <a href="https://github.com/animify" target="_blank" rel="noreferrer noopener">
                <Icon name="github" fill="currentColor" strokeWidth={0} />
            </a>
            <a
                href="https://www.linkedin.com/in/smansson"
                target="_blank"
                rel="noreferrer noopener"
            >
                <Icon name="linkedin" fill="currentColor" strokeWidth={0} />
            </a>
        </div>
    );
}
