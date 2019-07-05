import React from 'react';
import classNames from 'classnames';

export default function Footer() {
    const footerClasses = classNames('footer');

    return (
        <footer className={footerClasses}>
            <div className="container">Footer</div>
        </footer>
    );
}
