import React from 'react';
import classNames from 'classnames';
import SocialIcons from './SocialIcons';

export default function Footer() {
    const footerClasses = classNames('footer container flex-column');

    return (
        <footer className={footerClasses}>
            <div className="talk fadeInUp">
                <div className="flex flex-column">
                    <h5>
                        Got a project? <span>Let's chat</span>
                    </h5>
                    <p className="mt4">Have an idea or concept that really excites you?</p>
                    <p>Tell me everything.</p>
                </div>

                <a href="mailto:st.mansson@icloud.com" className="button light mt6">
                    Send an email
                </a>
            </div>
            <div className="links flex justify-between fadeInDown">
                <div className="status">The End.</div>
                <SocialIcons />
            </div>
        </footer>
    );
}
