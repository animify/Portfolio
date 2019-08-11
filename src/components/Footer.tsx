import React from 'react';
import classNames from 'classnames';
import SocialIcons from './SocialIcons';

export default function Footer() {
    const footerClasses = classNames('footer');

    return (
        <footer className={footerClasses}>
            <div className="container flex-column">
                <div className="talk">
                    <div>
                        <h4>
                            Got a project? <span>Let's chat</span>
                        </h4>
                        <p className="mt4">Have an idea or concept that really excites you?</p>
                        <p>Tell me everything.</p>
                    </div>

                    <a href="" className="button light">
                        Send an email
                    </a>
                </div>
                <div className="links flex justify-between">
                    <div className="status">The End.</div>
                    <SocialIcons />
                </div>
            </div>
        </footer>
    );
}
