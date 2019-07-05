import React, { useState, useEffect } from 'react';
import classNames from 'classnames';

export default function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleClasses = classNames('toggle', { open: menuOpen });
    const navClasses = classNames({ open: menuOpen });
    const options = [
        { title: 'About me' },
        { title: 'Work' },
        { title: 'Resume' },
        { title: "Let's chat" },
    ];

    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add('nooverflow');

            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        } else {
            document.body.classList.remove('nooverflow');
        }
    }, [menuOpen]);

    return (
        <nav className={navClasses}>
            <div className="menu">
                <div className="container flex flex-column">
                    <p className="split">Contents</p>

                    {options.map((option, index) => (
                        <a href="" style={{ transitionDelay: `${200 * (index + 1) + 240}ms` }}>
                            {option.title}
                        </a>
                    ))}
                </div>
            </div>
            <div className="container flex justify-between">
                <a className="logo" href="">
                    Hi, I'm Stefan.
                </a>
                <div className="menutoggle">
                    <div className={toggleClasses} onClick={() => setMenuOpen(!menuOpen)} />
                </div>
            </div>
        </nav>
    );
}
