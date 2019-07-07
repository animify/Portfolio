import React from 'react';
import classNames from 'classnames';
import SocialIcons from './SocialIcons';

export default function Footer() {
    const footerClasses = classNames('footer');

    return (
        <footer className={footerClasses}>
            <div className="container flex-column">
                <div className="talk">
                    <h4>
                        Got a project? <span>Let's talk</span>
                    </h4>
                    <p className="mt4">Have something that excites you? Tell me everything.</p>
                </div>
                <div className="links flex justify-between">
                    <div className="status">The End.</div>
                    <SocialIcons />
                </div>
            </div>
        </footer>
    );
}
