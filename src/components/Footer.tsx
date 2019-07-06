import React from 'react';
import classNames from 'classnames';
import SocialIcons from './SocialIcons';

export default function Footer() {
    const footerClasses = classNames('footer');

    return (
        <footer className={footerClasses}>
            <div className="container flex-column">
                <div className="talk tac">
                    <h4>
                        Got a project? <span className="primary@text">Let's talk</span>
                    </h4>
                    <p className="mt4">
                        Thought of something that excites you? Tell me everything.
                    </p>
                </div>
                <hr />
                <div className="links flex justify-between">
                    <div className="status">The End.</div>
                    <SocialIcons />
                </div>
            </div>
        </footer>
    );
}
